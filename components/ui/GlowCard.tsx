import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  color?: "lime" | "aqua" | "ink";
  className?: string;
};

const colors = { lime: "", aqua: "glow-aqua", ink: "glow-ink" } as const;

export function GlowCard({ children, href, color = "lime", className = "" }: Props) {
  const cls = `glow ${colors[color]} shape-card block p-7 md:p-8 ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <div className={`${cls} glow-hover`}>{children}</div>;
}
