import type { ReactNode } from "react";

const tones = {
  ink: "bg-ink text-[#eef6f3]",
  teal: "bg-teal text-[#eef6f3]",
  deep: "bg-deep text-[#eef6f3]",
  lime: "bg-lime text-ink on-lime",
} as const;

export function Section({
  tone = "ink",
  id,
  labelledBy,
  children,
  className = "",
}: {
  tone?: keyof typeof tones;
  id?: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-14 md:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-10">{children}</div>
    </section>
  );
}
