import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "accent" | "secondary" | "ghost-dark" | "link";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-[background-color,box-shadow,transform,color] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-[0_8px_24px_-10px_rgb(36_99_235/0.7)] hover:bg-brand-dark hover:shadow-[0_12px_28px_-10px_rgb(36_99_235/0.8)]",
  accent: "bg-accent text-navy hover:bg-[#2ccac4] shadow-[0_8px_24px_-10px_rgb(24_182_176/0.7)]",
  secondary: "bg-white text-ink ring-1 ring-line hover:ring-brand/40 hover:text-brand",
  "ghost-dark": "bg-white/5 text-white ring-1 ring-white/20 hover:bg-white/10 hover:ring-white/40",
  link: "text-brand hover:text-brand-dark px-0! py-0!",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
    />
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  ...rest
}: { href: string; children: ReactNode; variant?: Variant; size?: Size; arrow?: boolean; className?: string } & Omit<
  ComponentProps<typeof Link>,
  "href" | "className"
>) {
  return (
    <Link href={href} className={buttonClass(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  ...rest
}: { variant?: Variant; size?: Size; arrow?: boolean } & ComponentProps<"button">) {
  return (
    <button className={buttonClass(variant, size, className)} {...rest}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
