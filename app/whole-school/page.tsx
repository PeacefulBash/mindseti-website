import type { Metadata } from "next";
import { wholeSchool } from "@/content/home";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Wave } from "@/components/ui/Wave";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Whole-School Partnership",
  description:
    "One agreement that brings prefects, learners, teachers and parents into the same conversation at your school.",
  alternates: { canonical: "/whole-school" },
};

export default function WholeSchoolPage() {
  return (
    <>
      <PageHero
        title={wholeSchool.heading}
        intro={wholeSchool.body}
        scene="whole"
        imageAlt="Every group in a school community together"
        shape="leaf"
        reverse
        primary={{ label: "Ask about a Whole-School Partnership", href: "/request?interest=whole-school" }}
        secondary={{ label: "See each programme", href: "/programmes" }}
      />
      <Wave from="ink" to="teal" shape="hill" />
      <Section tone="teal" labelledBy="groups-heading">
        <h2 id="groups-heading" className="max-w-3xl text-4xl md:text-5xl">Four groups, one message</h2>
        <p className="mt-5 max-w-2xl text-xl text-[#eef6f3]">
          When prefects, learners, teachers and parents hear the same language, it stops being a one-off event and
          becomes part of how the school talks.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {wholeSchool.groups.map((g, i) => (
            <li key={g.name}>
              <GlowCard href={g.href} color={i % 2 ? "aqua" : "lime"} className="h-full">
                <h3 className="text-3xl text-white">{g.name}</h3>
                <p className="mt-3 text-lg text-[#eef6f3]">{g.text}</p>
                <p className="mt-5 font-display text-base font-bold text-white underline decoration-lime decoration-[3px] underline-offset-8">
                  Read more
                </p>
              </GlowCard>
            </li>
          ))}
        </ul>
      </Section>
      <Wave from="teal" to="deep" shape="wave" />
      <Section tone="deep" labelledBy="why-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 id="why-heading" className="text-4xl md:text-5xl">Why schools choose it</h2>
          <ul className="space-y-5">
            {[
              "One conversation with us, instead of four separate ones.",
              "Everyone in the school community hears the same message, in the same term.",
              "A single agreement and a single written proposal for your headteacher or committee.",
            ].map((t) => (
              <li key={t} className="flex gap-4 text-xl text-white">
                <span aria-hidden="true" className="mt-2.5 h-3 w-3 shrink-0 rounded-full bg-lime shadow-[0_0_14px_rgba(141,186,11,0.95)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Wave from="deep" to="lime" shape="tilt" />
      <CtaBand heading="Let's plan it for your school." href="/request?interest=whole-school" />
      <Wave from="lime" to="deep" shape="wave" />
    </>
  );
}
