import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProgramme, programmes } from "@/content/programmes";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { GlowCard } from "@/components/ui/GlowCard";
import { Wave } from "@/components/ui/Wave";
import { CtaBand } from "@/components/sections/CtaBand";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) return {};
  return {
    title: `${p.name} for schools in Eswatini`,
    description: p.summary,
    alternates: { canonical: `/programmes/${p.slug}` },
  };
}

export default async function ProgrammePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProgramme(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero
        title={p.headline}
        intro={p.summary}
        scene={p.scene}
        imageAlt={`${p.audience} taking part in ${p.name.toLowerCase()}`}
        shape={p.shape}
        primary={{ label: `Ask about ${p.name.toLowerCase()}`, href: `/request?interest=${p.interest}` }}
        secondary={{ label: "All programmes", href: "/programmes" }}
      />

      <Wave from="ink" to="teal" shape="wave" />

      <Section tone="teal" labelledBy="facts-heading">
        <h2 id="facts-heading" className="sr-only">The practical details</h2>
        <dl className="grid gap-6 md:grid-cols-3">
          {p.facts.map((f, i) => (
            <GlowCard key={f.label} color={i % 2 ? "aqua" : "lime"}>
              <dt className="font-display text-xl font-extrabold text-lime">{f.label}</dt>
              <dd className="mt-3 text-lg text-white">{f.text}</dd>
            </GlowCard>
          ))}
        </dl>
      </Section>

      <Wave from="teal" to="deep" shape="hill" />

      <Section tone="deep" labelledBy="moments-heading">
        <h2 id="moments-heading" className="max-w-2xl text-4xl md:text-5xl">{p.momentsHeading}</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {p.moments.map((m, i) => (
            <li key={m.title}>
              <GlowCard color={i % 2 ? "lime" : "aqua"} className="h-full">
                <h3 className="text-2xl text-white">{m.title}</h3>
                <p className="mt-3 text-lg text-[#eef6f3]">{m.text}</p>
              </GlowCard>
            </li>
          ))}
        </ul>
      </Section>

      <Wave from="deep" to="ink" shape="dip" />

      <Section tone="ink" labelledBy="receives-heading">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <h2 id="receives-heading" className="text-4xl md:text-5xl">What your school receives</h2>
          <ul className="space-y-5">
            {p.receives.map((r) => (
              <li key={r} className="flex gap-4 text-xl text-white">
                <span aria-hidden="true" className="mt-2.5 h-3 w-3 shrink-0 rounded-full bg-lime shadow-[0_0_14px_rgba(141,186,11,0.95)]" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Wave from="ink" to="lime" shape="tilt" />
      <CtaBand
        heading={`Talk to us about ${p.name.toLowerCase()}.`}
        href={`/request?interest=${p.interest}`}
        label="Request a proposal"
      />
      <Wave from="lime" to="deep" shape="wave" />
    </>
  );
}
