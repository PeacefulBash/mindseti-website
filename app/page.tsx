import Link from "next/link";
import { hero, wholeSchool } from "@/content/home";
import { programmes } from "@/content/programmes";
import { LinkButton } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/Photo";
import { Section } from "@/components/ui/Section";
import { Wave } from "@/components/ui/Wave";
import { SchoolYear } from "@/components/sections/SchoolYear";
import { Process } from "@/components/sections/Process";
import { Proof } from "@/components/sections/Proof";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-ink pb-8 pt-14 md:pt-20">
        <div
          aria-hidden="true"
          style={{ ["--stroke-angle" as string]: "40deg" }}
          className="stroke-in absolute -top-4 right-[38%] hidden h-72 w-16 rounded-full bg-lime shadow-[0_0_50px_rgba(141,186,11,0.75)] lg:block"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div>
            <h1 id="hero-heading" className="text-[clamp(2.9rem,7.4vw,6.5rem)] text-white">
              {hero.headline}
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-[#eef6f3]">{hero.body}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <LinkButton href="/request">Request a proposal</LinkButton>
              <LinkButton href="/programmes" variant="text-light">See the programmes</LinkButton>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <PhotoFrame
              scene="all"
              alt="Learners, a prefect, a teacher and parents together"
              shape="arch"
              aspect="aspect-[4/5]"
              priority
              sizes="(min-width: 1024px) 36vw, 90vw"
            />
          </div>
        </div>
      </section>

      <Wave from="ink" to="teal" shape="wave" />

      {/* Four groups */}
      <Section tone="teal" labelledBy="groups-heading">
        <h2 id="groups-heading" className="max-w-3xl text-4xl md:text-6xl">
          Every group in a school needs something different.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {programmes.map((p, i) => (
            <Link
              key={p.slug}
              href={`/programmes/${p.slug}`}
              className={`glow ${i % 2 ? "glow-aqua" : ""} shape-card grid overflow-hidden sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]`}
            >
              <div className="relative min-h-56 sm:min-h-full">
                <PhotoFrame scene={p.scene} alt="" shape="card" aspect="h-full min-h-56" className="!rounded-none !border-0 !shadow-none" />
              </div>
              <div className="p-7">
                <h3 className="text-3xl text-white">{p.audience}</h3>
                <p className="mt-1 font-display text-xl font-bold text-lime">{p.name}</p>
                <p className="mt-3 text-base text-[#eef6f3]">{p.cardText}</p>
                <p className="mt-5 font-display text-base font-bold text-white underline decoration-lime decoration-[3px] underline-offset-8">
                  See how it works
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Wave from="teal" to="deep" shape="hill" />

      {/* School year */}
      <Section tone="deep" labelledBy="year-heading">
        <h2 id="year-heading" className="max-w-3xl text-4xl md:text-6xl">A school year with Mindset.i</h2>
        <p className="mb-10 mt-5 max-w-2xl text-xl text-[#eef6f3]">
          Each term has its own moment. Choose a term to see which sessions fit it. We confirm exact dates with
          you against your school calendar.
        </p>
        <SchoolYear />
      </Section>

      <Wave from="deep" to="lime" shape="tilt" />

      {/* Whole-school */}
      <Section tone="lime" labelledBy="whole-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h2 id="whole-heading" className="text-4xl md:text-6xl">{wholeSchool.heading}</h2>
            <p className="mt-6 max-w-lg text-xl text-ink">{wholeSchool.body}</p>
            <div className="mt-9">
              <LinkButton href="/whole-school" variant="dark">See the Whole-School Partnership</LinkButton>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {wholeSchool.groups.map((g) => (
              <li key={g.name}>
                <Link href={g.href} className="glow glow-ink shape-card block p-6 text-white">
                  <p className="font-display text-2xl font-extrabold text-lime">{g.name}</p>
                  <p className="mt-2 text-base text-[#eef6f3]">{g.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Wave from="lime" to="ink" shape="wave" />

      {/* Process */}
      <Section tone="ink" labelledBy="process-heading">
        <div className="mb-12 text-center">
          <h2 id="process-heading" className="text-4xl md:text-6xl">What happens after you get in touch</h2>
          <p className="mx-auto mt-5 max-w-xl text-xl text-[#eef6f3]">
            No long forms and no guesswork. Here is the path from first message to follow-up.
          </p>
        </div>
        <Process />
      </Section>

      <Proof />

      <Wave from="ink" to="teal" shape="hill" />

      {/* Poetry teaser */}
      <Section tone="teal" labelledBy="poetry-heading">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <PhotoFrame scene="poetry" alt="A spoken word performer on stage" shape="leaf" aspect="aspect-[5/6]" glow="glow-aqua" />
          </div>
          <div>
            <h2
              id="poetry-heading"
              className="font-serif text-[clamp(2.6rem,6vw,5rem)] font-medium italic leading-[1.02] tracking-tight text-white"
            >
              Words that make the moment.
            </h2>
            <p className="mt-6 max-w-xl text-xl text-[#eef6f3]">
              Spoken word for year-end functions, weddings, launches and ceremonies. A different audience from our
              school work, with its own page.
            </p>
            <div className="mt-8">
              <LinkButton href="/poetry" variant="outline">Explore poetry and spoken word</LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Wave from="teal" to="lime" shape="dip" />
      <CtaBand />
      <Wave from="lime" to="deep" shape="wave" />
    </>
  );
}
