import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] ${
        tone === "dark" ? "text-accent" : "text-brand"
      }`}
    >
      <span aria-hidden className={`h-px w-6 ${tone === "dark" ? "bg-accent" : "bg-brand"}`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center [&>p:first-child]:justify-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        id={id}
        className={`mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${tone === "dark" ? "text-white!" : ""}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${tone === "dark" ? "text-white/70" : "text-body"}`}>{intro}</p>
      )}
    </div>
  );
}
