import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function CtaBand({
  heading = "Ready to talk about your school?",
  text = "Tell us what you have in mind. We reply, talk it through, and send a written proposal.",
  href = "/request",
  label = "Request a proposal",
}: {
  heading?: string;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <Section tone="lime" labelledBy="cta-heading">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <h2 id="cta-heading" className="text-4xl md:text-6xl">{heading}</h2>
          <p className="mt-4 max-w-xl text-xl text-ink">{text}</p>
        </div>
        <LinkButton href={href} variant="dark">{label}</LinkButton>
      </div>
    </Section>
  );
}
