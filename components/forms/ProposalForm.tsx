"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { interests, site } from "@/lib/site";
import { validateProposal, type FieldErrors, type ProposalInput } from "@/lib/validation";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "mt-2 block w-full rounded-xl border-2 border-lime/50 bg-deep px-4 py-3 text-lg text-white placeholder:text-white/60 focus:border-lime focus:shadow-[0_0_18px_rgba(141,186,11,0.6)] focus:outline-none";
const label = "block font-display text-base font-bold text-white";
const errorText = "mt-2 font-display text-base font-bold text-[#ffb4a8]";

export function ProposalForm() {
  const params = useSearchParams();
  const requested = params.get("interest");
  const initialInterest = interests.some((i) => i.value === requested) ? (requested as string) : "";

  const [interest, setInterest] = useState(initialInterest);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    if (initialInterest) setInterest(initialInterest);
  }, [initialInterest]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const input: ProposalInput = {
      name: String(data.get("name") ?? ""),
      organisation: String(data.get("organisation") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      interest,
      message: String(data.get("message") ?? ""),
    };

    const found = validateProposal(input);
    setErrors(found);
    setServerMessage("");
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      const first = Object.keys(found)[0];
      (e.currentTarget.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/proposal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...input, company_website: String(data.get("company_website") ?? "") }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("success");
        return;
      }
      if (json.errors) setErrors(json.errors);
      setServerMessage(json.message ?? "Something went wrong. Please check the form and try again.");
      setStatus("error");
    } catch {
      setServerMessage("We could not reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status">
        <h3 className="text-3xl text-white">Request received.</h3>
        <p className="mt-3 text-lg text-[#eef6f3]">
          Thank you. We will reply on WhatsApp or by email to arrange a short conversation about your school.
        </p>
      </div>
    );
  }

  const describedBy = (id: keyof ProposalInput) => (errors[id] ? `${id}-error` : undefined);

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot. Hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={describedBy("name")} className={field} />
          {errors.name && <p id="name-error" className={errorText}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="organisation" className={label}>School or organisation</label>
          <input id="organisation" name="organisation" autoComplete="organization" required aria-invalid={!!errors.organisation} aria-describedby={describedBy("organisation")} className={field} />
          {errors.organisation && <p id="organisation-error" className={errorText}>{errors.organisation}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone or WhatsApp number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={describedBy("phone")} className={field} />
          {errors.phone && <p id="phone-error" className={errorText}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email (optional)</label>
          <input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={describedBy("email")} className={field} />
          {errors.email && <p id="email-error" className={errorText}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="interest" className={label}>What are you asking about?</label>
        <select
          id="interest"
          name="interest"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          required
          aria-invalid={!!errors.interest}
          aria-describedby={describedBy("interest")}
          className={field}
        >
          <option value="">Choose one</option>
          {interests.map((i) => (
            <option key={i.value} value={i.value}>{i.label}</option>
          ))}
        </select>
        {errors.interest && <p id="interest-error" className={errorText}>{errors.interest}</p>}
      </div>

      <div>
        <label htmlFor="message" className={label}>Anything we should know? (optional)</label>
        <textarea id="message" name="message" rows={4} aria-invalid={!!errors.message} aria-describedby={describedBy("message")} className={field} />
        {errors.message && <p id="message-error" className={errorText}>{errors.message}</p>}
      </div>

      <div aria-live="polite">
        {status === "error" && serverMessage && (
          <p role="alert" className="rounded-xl border-2 border-[#ffb4a8] bg-deep p-4 font-display text-base font-bold text-[#ffb4a8]">
            {serverMessage}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-12 rounded-full bg-lime px-8 py-3 font-display text-base font-bold text-ink shadow-[0_0_24px_rgba(141,186,11,0.55)] transition-shadow hover:shadow-[0_0_40px_rgba(141,186,11,0.9)] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending" : "Request a proposal"}
        </button>
        {site.whatsapp && (
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Mindset.i, I would like to ask about a programme for our school.")}`}
            className="font-display text-base font-bold text-white underline decoration-lime decoration-[3px] underline-offset-8 hover:decoration-white"
          >
            Or message us on WhatsApp
          </a>
        )}
      </div>
    </form>
  );
}
