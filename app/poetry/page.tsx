import type { Metadata } from "next";
import { poetry } from "@/content/home";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Wave } from "@/components/ui/Wave";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Poetry and spoken word for events in Eswatini",
  description:
    "Spoken word performances for year-end functions, weddings, launches, ceremonies and church services.",
  alternates: { canonical: "/poetry" },
};

export default function PoetryPage() {
  return (
    <>
      <PageHero
        title={poetry.headline}
        intro={`${poetry.body} ${poetry.who} book us.`}
        scene="poetry"
        imageAlt="A spoken word performer on stage"
        shape="blob"
        serifTitle
        primary={{ label: "Ask about a performance", href: "/request?interest=poetry" }}
      />
      <Wave from="ink" to="teal" shape="wave" />
      <Section tone="teal" labelledBy="occasions-heading">
        <h2 id="occasions-heading" className="max-w-3xl font-serif text-4xl font-medium italic md:text-6xl">
          Occasions we perform at
        </h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {poetry.occasions.map((o, i) => (
            <li key={o.title}>
              <GlowCard color={i % 2 ? "lime" : "aqua"} className="h-full">
                <h3 className="text-2xl text-white">{o.title}</h3>
                <p className="mt-3 text-lg text-[#eef6f3]">{o.text}</p>
              </GlowCard>
            </li>
          ))}
        </ul>
      </Section>
      <Wave from="teal" to="lime" shape="dip" />
      <CtaBand
        heading="Tell us about your event."
        text="Share the occasion and the date. We reply to discuss what fits."
        href="/request?interest=poetry"
        label="Ask about a performance"
      />
      <Wave from="lime" to="deep" shape="wave" />
    </>
  );
}
