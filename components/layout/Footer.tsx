import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Programmes", href: "/programmes" },
  { label: "Whole-School", href: "/whole-school" },
  { label: "Poetry", href: "/poetry" },
  { label: "About", href: "/about" },
  { label: "Request a proposal", href: "/request" },
];
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 md:px-10">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm font-serif text-xl italic text-lime">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2 flex flex-wrap gap-x-8 gap-y-2 font-display text-base font-bold">{footerLinks.map((l) => (<Link key={l.href} href={l.href} className="underline decoration-lime decoration-[3px] underline-offset-8 hover:decoration-white">{l.label}</Link>))}</nav>
        <address className="not-italic text-lg leading-8 text-white md:text-right">
          <p>{site.location}</p>
          {site.phone && (
            <p>
              <a className="underline decoration-lime underline-offset-4" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
            </p>
          )}
          {site.email && (
            <p>
              <a className="underline decoration-lime underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          )}
        </address>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-7xl px-5 py-5 text-base text-[#eef6f3] md:px-10">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
