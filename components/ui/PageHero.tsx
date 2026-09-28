import type { ReactNode } from "react";
import { LinkButton } from "./Button";
import { PhotoFrame } from "./Photo";
import type { SceneName } from "./Scene";

type Cta = { label: string; href: string };

export function PageHero({
  title,
  intro,
  scene,
  imageAlt,
  shape = "arch",
  primary,
  secondary,
  reverse = false,
  serifTitle = false,
  children,
}: {
  title: string;
  intro: string;
  scene: SceneName;
  imageAlt: string;
  shape?: "arch" | "leaf" | "blob";
  primary?: Cta;
  secondary?: Cta;
  reverse?: boolean;
  serifTitle?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-6 pt-14 md:pt-20">
      {/* The logo's slanted stroke, used as the site's recurring device */}
      <div
        aria-hidden="true"
        style={{ ["--stroke-angle" as string]: "40deg" }}
        className="stroke-in absolute -top-6 right-[42%] hidden h-64 w-14 rounded-full bg-lime opacity-90 shadow-[0_0_40px_rgba(141,186,11,0.7)] lg:block"
      />
      <div
        className={`relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <h1
            className={
              serifTitle
                ? "font-serif text-[clamp(2.6rem,6.4vw,5.5rem)] font-medium italic leading-[1.02] tracking-tight text-white"
                : "text-[clamp(2.6rem,6.6vw,5.75rem)] text-white"
            }
          >
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-xl leading-relaxed text-[#eef6f3]">{intro}</p>
          {(primary || secondary) && (
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              {primary && <LinkButton href={primary.href}>{primary.label}</LinkButton>}
              {secondary && (
                <LinkButton href={secondary.href} variant="text-light">
                  {secondary.label}
                </LinkButton>
              )}
            </div>
          )}
          {children}
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <PhotoFrame scene={scene} alt={imageAlt} shape={shape} priority sizes="(min-width: 1024px) 38vw, 90vw" />
        </div>
      </div>
    </section>
  );
}
