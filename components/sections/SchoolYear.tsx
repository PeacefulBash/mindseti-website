"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { terms } from "@/content/home";

export function SchoolYear() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % terms.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + terms.length) % terms.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = terms.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const term = terms[active];

  return (
    <div>
      <div role="tablist" aria-label="School terms" className="flex flex-wrap gap-3">
        {terms.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`min-h-12 rounded-full border-2 border-lime px-7 py-2 font-display text-lg font-bold transition-all ${
                selected
                  ? "bg-lime text-ink shadow-[0_0_28px_rgba(141,186,11,0.7)]"
                  : "bg-transparent text-white hover:bg-lime/20"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${term.id}`}
        aria-labelledby={`tab-${term.id}`}
        tabIndex={0}
        className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16"
      >
        <div>
          <p className="font-display text-lg font-bold text-lime">{term.months}</p>
          <p className="mt-3 font-serif text-3xl italic leading-snug text-white md:text-4xl">{term.summary}</p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {term.items.map((item, i) => (
            <li key={item.who + item.text} className={`glow ${i % 2 ? "glow-aqua" : ""} shape-card p-6`}>
              <p className="font-display text-xl font-extrabold text-white">{item.who}</p>
              <p className="mt-2 text-base text-[#eef6f3]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
