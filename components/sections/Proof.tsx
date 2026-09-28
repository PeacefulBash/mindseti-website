import { testimonials, visitedSchools } from "@/content/home";
import { Section } from "@/components/ui/Section";

/**
 * Renders only when real content exists. Nothing here is placeholder text.
 * Fill `visitedSchools` and `testimonials` in content/home.ts (or the CMS once connected).
 */
export function Proof() {
  if (visitedSchools.length === 0 && testimonials.length === 0) return null;

  return (
    <Section tone="teal" labelledBy="proof-heading">
      {testimonials.length > 0 && (
        <div className="mb-14">
          <h2 id="proof-heading" className="text-3xl md:text-5xl">In their words</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.quote} className="glow shape-card p-8">
                <blockquote className="font-serif text-2xl italic leading-snug text-white">{t.quote}</blockquote>
                <figcaption className="mt-4 text-base text-[#eef6f3]">
                  {t.name}, {t.role}, {t.school}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
      {visitedSchools.length > 0 && (
        <div>
          <h2 id={testimonials.length ? undefined : "proof-heading"} className="text-3xl md:text-4xl">
            Schools we have visited
          </h2>
          <ul className="mt-8 flex flex-wrap gap-4">
            {visitedSchools.map((s) => (
              <li key={s} className="glow shape-card px-6 py-3 font-display text-lg font-bold text-white">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
