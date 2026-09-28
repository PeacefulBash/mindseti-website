"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { NavItem } from "./Header";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-12 w-12 items-center justify-center text-white"
      >
        {open ? <X aria-hidden size={26} /> : <Menu aria-hidden size={26} />}
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="glow absolute inset-x-3 top-[4.75rem] rounded-[2rem] px-6 pb-6 pt-3"
        >
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/10 py-4 font-display text-xl font-bold text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/request"
            onClick={() => setOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-lime font-display font-bold text-ink"
          >
            Request a proposal
          </Link>
        </nav>
      )}
    </div>
  );
}
