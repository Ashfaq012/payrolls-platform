import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { SiteConfig } from "@/sites/types";
import { breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

export function Breadcrumbs({ site, trail }: { site: SiteConfig; trail: { name: string; path: string }[] }) {
  const crumbs = [{ name: "Home", path: "/" }, ...trail];
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <JsonLd data={breadcrumbJsonLd(site, crumbs)} />
      <ol className="flex flex-wrap items-center gap-1.5 text-white/60">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-white/90">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="transition-colors hover:text-white">
                    {c.name}
                  </Link>
                  <ChevronRight aria-hidden className="size-3.5 rtl:rotate-180" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
