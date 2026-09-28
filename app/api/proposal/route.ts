import { NextResponse } from "next/server";
import { interests } from "@/lib/site";
import { validateProposal, type ProposalInput } from "@/lib/validation";

export const runtime = "nodejs";

// Best-effort limiter. In-memory state does not persist across serverless instances,
// so use a shared store (for example Upstash Redis) or the host's WAF before heavy traffic.
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v.slice(0, max) : "");

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ ok: false, message: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "We could not read that request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (str(body.company_website, 200)) return NextResponse.json({ ok: true });

  const input: ProposalInput = {
    name: str(body.name, 200),
    organisation: str(body.organisation, 300),
    phone: str(body.phone, 60),
    email: str(body.email, 300),
    interest: str(body.interest, 40),
    message: str(body.message, 2100),
  };

  const errors = validateProposal(input);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.PROPOSAL_TO_EMAIL;
  const from = process.env.PROPOSAL_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[proposal request, email not configured]", input);
      return NextResponse.json({ ok: true });
    }
    console.error("Proposal form is missing RESEND_API_KEY, PROPOSAL_TO_EMAIL or PROPOSAL_FROM_EMAIL.");
    return NextResponse.json(
      { ok: false, message: "We could not send your request right now. Please message us on WhatsApp instead." },
      { status: 503 },
    );
  }

  const interestLabel = interests.find((i) => i.value === input.interest)?.label ?? input.interest;
  const text = [
    `Name: ${input.name}`,
    `School or organisation: ${input.organisation}`,
    `Phone or WhatsApp: ${input.phone || "not given"}`,
    `Email: ${input.email || "not given"}`,
    `Asking about: ${interestLabel}`,
    "",
    input.message || "(no message)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: input.email || undefined,
        subject: `Proposal request: ${input.organisation}`,
        text,
      }),
    });
    if (!res.ok) throw new Error(`Email provider responded ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Proposal email failed:", err);
    return NextResponse.json(
      { ok: false, message: "We could not send your request right now. Please message us on WhatsApp instead." },
      { status: 502 },
    );
  }
}
