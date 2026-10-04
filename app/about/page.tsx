import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Wave } from "@/components/ui/Wave";
import { Process } from "@/components/sections/Process";
import { Proof } from "@/components/sections/Proof";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "About Mindset.i",
  description:
    "Mindset.i is more than a motivation and leadership initiative, it is a revolution meant to fully unleash the potential of any individual that hears this gospel. It is based in Mbabane, Eswatini. Inspire change. Awaken potential.",
  alternates: { canonical: "/about" },
};

const receives = [
  { title: "Feedback from those who took part", text: "Results from the learners, teachers or parents in the room." },
  { title: "A short impact report", text: "So you can show your headteacher, committee or governors what happened." },
  { title: "Respect for consent", text: "Learners appear in our photos and posts only with written consent." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Inspire change. Awaken potential."
        intro="Mindset.i runs motivation and leadership programmes for schools from Mbabane, Eswatini. Our starting point is simple: the people in your school already carry what they need. Our work is helping them see it."
        scene="about"
        imageAlt="A school community together"
        shape="arch"
        reverse
        primary={{ label: "Request a proposal", href: "/request" }}
        secondary={{ label: "See the programmes", href: "/programmes" }}
      />
      <Wave from="ink" to="teal" shape="hill" />
      <Section tone="teal" labelledBy="believe-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 id="believe-heading" className="text-4xl md:text-5xl">What we believe</h2>
          <div className="space-y-5 text-xl text-[#eef6f3]">
            <p>Learners do not need to be filled with motivation. They need someone to help them notice what is already there.</p>
            <p>The same is true for prefects stepping into leadership, teachers at the end of a long term, and parents who shape a child&apos;s habits and belief more than anyone.</p>
            <p>So our programmes follow the school year, speak to each group in its own language, and repeat the same message through the year.</p>
          </div>
        </div>
      </Section>
      <Wave from="teal" to="deep" shape="wave" />
      <Section tone="deep" labelledBy="receive-heading">
        <h2 id="receive-heading" className="max-w-3xl text-4xl md:text-5xl">What every school receives</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {receives.map((r, i) => (
            <li key={r.title}>
              <GlowCard color={i % 2 ? "aqua" : "lime"} className="h-full">
                <h3 className="text-2xl text-white">{r.title}</h3>
                <p className="mt-3 text-lg text-[#eef6f3]">{r.text}</p>
              </GlowCard>
            </li>
          ))}
        </ul>
      </Section>
      <Wave from="deep" to="ink" shape="dip" />
      <Section tone="ink" labelledBy="run-heading">
        <h2 id="run-heading" className="mb-12 text-center text-4xl md:text-5xl">How working with us runs</h2>
        <Process />
      </Section>
      <Proof />
      <Wave from="ink" to="lime" shape="tilt" />
      <CtaBand />
      <Wave from="lime" to="deep" shape="wave" />
    </>
  );
}
