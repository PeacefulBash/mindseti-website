/**
 * Approximate vector redraw of the Mindset.i mark, for use until the official SVG is supplied.
 * Replace this component's contents with the client's SVG export for exact fidelity.
 */
type Props = { tone?: "light" | "dark"; className?: string };

export function LogoMark({ tone = "light", className }: Props) {
  const fill = tone === "light" ? "#ffffff" : "#033b44";
  return (
    <svg viewBox="410 40 555 500" className={className} aria-hidden="true" focusable="false">
      <path
        fill={fill}
        d="M418 80Q418 72 428 72H515Q535 72 545 85L708 315L714 322Q722 330 736 332L778 335L700 438Q690 448 675 446Q657 444 648 428L525 242V520Q525 528 515 528H428Q418 528 418 520Z"
      />
      <path
        fill={fill}
        d="M850 296L955 163V520Q955 528 945 528H860Q850 528 850 520Z"
      />
      <line x1="762" y1="268" x2="912" y2="90" stroke="#8dba0b" strokeWidth="84" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "light", className }: Props) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark tone={tone} className="h-9 w-auto" />
      <span className={`font-logo text-lg font-bold tracking-[0.22em] ${text}`}>
        MINDSET<span className="text-lime">.i</span>
      </span>
    </span>
  );
}
