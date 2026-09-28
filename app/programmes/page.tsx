import type { Metadata } from "next";
import Link from "next/link";
import { programmes } from "@/content/programmes";
import { PhotoFrame } from "@/components/ui/Photo";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Wave } from "@/components/ui/Wave";
import { SchoolYear } from "@/components/sections/SchoolYear";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Programmes for learners, prefects, teachers and parents",
  description:
    "Student motivation, prefect training, teacher team-building and parents' workshops for schools in Eswatini.",
  alternates: { canonical: "/programmes" },
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        title="Four programmes. One school community."
        intro="Each group in a school is reached in its own way, at the moment it matters most. Choose a programme to see who books it, when, and what your school receives."
        scene="all"
        imageAlt="Learners, a prefect, a teacher and parents together"
        shape="blob"
        primary={{ label: "Request a proposal", href: "/request" }}
        secondary={{ label: "Ask about the whole school", href: "/whole-school" }}
      />
      <Wave from="ink" to="teal" shape="hill" />
      <Section tone="teal" labelledBy="list-heading">
        <h2 id="list-heading" className="sr-only">All programmes</h2>
        <ul className="space-y-14">
          {programmes.map((p, i) => (
            <li key={p.slug} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="mx-auto w-full max-w-md lg:max-w-none">
                <PhotoFrame scene={p.scene} alt={`${p.audience}: ${p.name}`} shape={p.shape} aspect="aspect-[5/4]" glow={i % 2 ? "glow-aqua" : ""} />
              </div>
              <div>
                <h3 className="text-4xl text-white md:text-5xl">{p.name}</h3>
                <p className="mt-2 font-display text-xl font-bold text-lime">For {p.audience.toLowerCase()}</p>
                <p className="mt-5 max-w-xl text-lg text-[#eef6f3]">{p.summary}</p>
                <Link
                  href={`/programmes/${p.slug}`}
                  className="mt-7 inline-flex min-h-12 items-center rounded-full border-2 border-lime px-7 font-display text-base font-bold text-white transition-colors hover:bg-lime hover:text-ink"
                >
                  See how {p.name.toLowerCase()} works
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <Wave from="teal" to="deep" shape="wave" />
      <Section tone="deep" labelledBy="year-heading">
        <h2 id="year-heading" className="max-w-3xl text-4xl md:text-6xl">Which programme fits which term</h2>
        <p className="mb-10 mt-5 max-w-2xl text-xl text-[#eef6f3]">
          We confirm exact dates with you against your school calendar.
        </p>
        <SchoolYear />
      </Section>
      <Wave from="deep" to="lime" shape="tilt" />
      <CtaBand />
      <Wave from="lime" to="deep" shape="wave" />
    </>
  );
}
