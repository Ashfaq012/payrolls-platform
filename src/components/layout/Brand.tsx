import Link from "next/link";
import type { SiteConfig } from "@/sites/types";

type BrandInfo = SiteConfig["brand"];

/** Text wordmark placeholder until an approved logo exists. */
export function Brand({ brand, tone = "dark", compact = false }: { brand: BrandInfo; tone?: "dark" | "light"; compact?: boolean }) {
  const [primary, secondary] = brand.wordmark;
  const onDark = tone === "light";
  return (
    <Link href="/" className="group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap" aria-label={`${brand.name} — home`}>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.05rem] font-extrabold tracking-[0.06em] ${onDark ? "text-white" : "text-ink"}`}>
          {primary} <span className={onDark ? "text-accent" : "text-brand"}>{secondary}</span>
        </span>
        {brand.endorsement && !compact && (
          <span className={`mt-1 text-[0.62rem] font-medium tracking-wide ${onDark ? "text-white/60" : "text-muted"}`}>
            {brand.endorsement}
          </span>
        )}
      </span>
    </Link>
  );
}
