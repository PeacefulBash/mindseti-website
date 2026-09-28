import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MobileNav } from "./MobileNav";

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Programmes", href: "/programmes" },
  { label: "Whole-School", href: "/whole-school" },
  { label: "Poetry", href: "/poetry" },
  { label: "About", href: "/about" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-ink">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 md:px-10">
          <Link href="/" aria-label="Mindset.i home" className="rounded-sm">
            <Logo tone="light" />
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-base font-bold text-white underline-offset-8 hover:underline hover:decoration-lime hover:decoration-[3px]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/request"
              className="inline-flex min-h-11 items-center rounded-full bg-lime px-6 font-display text-base font-bold text-ink shadow-[0_0_22px_rgba(141,186,11,0.55)] transition-shadow hover:shadow-[0_0_38px_rgba(141,186,11,0.9)]"
            >
              Request a proposal
            </Link>
          </nav>
          <MobileNav items={navItems} />
        </div>
        {/* Curved underside with a glowing lime edge, instead of a straight bar */}
        <svg
          viewBox="0 0 1440 44"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-full h-5 w-full md:h-9"
        >
          <path d="M0 0 L0 8 C260 44 520 -6 800 22 C1080 50 1260 4 1440 20 L1440 0Z" className="fill-ink" />
          <path
            d="M0 8 C260 44 520 -6 800 22 C1080 50 1260 4 1440 20"
            fill="none"
            stroke="#8dba0b"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            style={{ filter: "drop-shadow(0 0 6px #8dba0b)" }}
          />
        </svg>
      </div>
    </header>
  );
}
