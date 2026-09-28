import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "dark" | "outline" | "text-light" | "text-dark";

const base =
  "inline-flex min-h-12 items-center justify-center font-display text-base font-bold transition-all duration-200";

const variants: Record<Variant, string> = {
  // Ink text on lime, with a lime glow. For dark backgrounds.
  primary: `${base} rounded-full bg-lime px-7 py-3 text-ink shadow-[0_0_24px_rgba(141,186,11,0.55)] hover:shadow-[0_0_40px_rgba(141,186,11,0.9)]`,
  // Lime text on deep teal. For lime backgrounds.
  dark: `${base} rounded-full bg-deep px-7 py-3 text-lime hover:bg-ink`,
  // Lime outline on dark backgrounds.
  outline: `${base} rounded-full border-2 border-lime px-7 py-3 text-white hover:bg-lime hover:text-ink`,
  "text-light": `${base} px-1 text-white underline decoration-lime decoration-[3px] underline-offset-8 hover:decoration-white`,
  "text-dark": `${base} px-1 text-ink underline decoration-ink decoration-[3px] underline-offset-8 hover:decoration-white`,
};

type Props = Omit<ComponentProps<typeof Link>, "className"> & { variant?: Variant };

export function LinkButton({ variant = "primary", ...props }: Props) {
  return <Link {...props} className={variants[variant]} />;
}
