import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";

const explore = [
  { label: "Everything we offer", href: "/programmes" },
  { label: "Prefect Leadership Development", href: "/programmes/prefect-leadership-development" },
  { label: "Student Motivation", href: "/programmes/student-motivation" },
  { label: "Teacher Team-Building", href: "/programmes/teacher-team-building" },
  { label: "Parents Workshop", href: "/programmes/parents-workshop" },
];

const more = [
  { label: "Poetry & Spoken Word", href: "/poetry" },
  { label: "Talks", href: "/talks" },
  { label: "About", href: "/about" },
  { label: "Request a proposal", href: "/request" },
];

const linkClass =
  "inline-block py-1 text-base text-[#eef6f3] underline-offset-8 hover:text-white hover:underline hover:decoration-lime hover:decoration-[3px]";

const telHref = (n: string) => `tel:${n.replace(/[^\d+]/g, "")}`;

export function Footer() {
  const year = new Date().getFullYear();
  const waLink = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Mindset.i, I would like to ask about a programme.")}`
    : "";

  return (
    <footer className="relative bg-deep text-white">
      {/* Glowing lime edge along the top */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-lime shadow-[0_0_24px_rgba(141,186,11,0.9)]"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:px-10 md:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link href="/" aria-label="Mindset.i home" className="inline-block">
            <Logo tone="light" />
          </Link>
          <p className="mt-5 font-serif text-2xl italic leading-snug text-lime">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-base text-[#eef6f3]">
            Motivation and leadership programmes for schools, plus spoken word and talks, from {site.location}.
          </p>
        </div>

        {/* Schools */}
        <nav aria-label="Programmes">
          <h2 className="font-display text-lg font-extrabold text-white">In schools</h2>
          <ul className="mt-4 space-y-1">
            {explore.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* More */}
        <nav aria-label="More">
          <h2 className="font-display text-lg font-extrabold text-white">More</h2>
          <ul className="mt-4 space-y-1">
            {more.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="font-display text-lg font-extrabold text-white">Get in touch</h2>
          <address className="mt-4 space-y-3 text-base not-italic text-[#eef6f3]">
            <p className="flex items-start gap-3">
              <MapPin aria-hidden size={20} className="mt-1 shrink-0 text-lime" />
              <span>{site.location}</span>
            </p>
            {site.phone && (
              <p className="flex items-start gap-3">
                <Phone aria-hidden size={20} className="mt-1 shrink-0 text-lime" />
                <span>
                  <a href={telHref(site.phone)} className="underline decoration-lime decoration-2 underline-offset-4 hover:text-white">
                    {site.phone}
                  </a>
                  {site.phone2 && (
                    <>
                      <br />
                      <a href={telHref(site.phone2)} className="underline decoration-lime decoration-2 underline-offset-4 hover:text-white">
                        {site.phone2}
                      </a>
                    </>
                  )}
                </span>
              </p>
            )}
            {site.email && (
              <p className="flex items-start gap-3">
                <Mail aria-hidden size={20} className="mt-1 shrink-0 text-lime" />
                <a href={`mailto:${site.email}`} className="break-all underline decoration-lime decoration-2 underline-offset-4 hover:text-white">
                  {site.email}
                </a>
              </p>
            )}
          </address>
          {waLink && (
            <a
              href={waLink}
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-lime px-6 font-display text-base font-bold text-ink shadow-[0_0_24px_rgba(141,186,11,0.55)] transition-shadow hover:shadow-[0_0_40px_rgba(141,186,11,0.9)]"
            >
              <MessageCircle aria-hidden size={20} />
              Message us on WhatsApp
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-lime/30">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-5 text-base text-[#eef6f3] md:px-10">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}