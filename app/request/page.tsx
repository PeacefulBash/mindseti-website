import type { Metadata } from "next";
import { Suspense } from "react";
import { ProposalForm } from "@/components/forms/ProposalForm";
import { Section } from "@/components/ui/Section";
import { Wave } from "@/components/ui/Wave";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a proposal",
  description: "Tell us about your school and what you have in mind. We reply, talk it through, and send a written proposal.",
  alternates: { canonical: "/request" },
};

export default function RequestPage() {
  return (
    <>
      <Section tone="ink" labelledBy="request-heading" className="!pb-6">
        <h1 id="request-heading" className="max-w-4xl text-[clamp(2.6rem,6.4vw,5.5rem)] text-white">
          Request a proposal
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-[#eef6f3]">
          Tell us about your school and what you have in mind. We reply, talk it through with you, and send a
          written proposal you can share with your headteacher or committee.
        </p>
      </Section>
      <Wave from="ink" to="deep" shape="wave" />
      <Section tone="deep">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="glow shape-card p-7 md:p-10">
            <Suspense fallback={<p className="text-lg">Loading the form.</p>}>
              <ProposalForm />
            </Suspense>
          </div>
          <aside className="space-y-8">
            <div className="glow glow-aqua shape-card p-7">
              <h2 className="text-2xl text-white">What happens next</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-lg text-[#eef6f3] marker:font-bold marker:text-lime">
                <li>We reply on WhatsApp or by email.</li>
                <li>We talk through your learners, your calendar and what would help most.</li>
                <li>You receive a written proposal.</li>
              </ol>
            </div>
            <address className="not-italic text-lg text-[#eef6f3]">
              <p className="font-display text-xl font-bold text-white">Prefer to reach us directly?</p>
              <p className="mt-2">{site.location}</p>
              {site.phone && <p><a className="underline decoration-lime decoration-2 underline-offset-4" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></p>}
              {site.email && <p><a className="underline decoration-lime decoration-2 underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></p>}
            </address>
          </aside>
        </div>
      </Section>
    </>
  );
}
