import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site as siteParam } from "next/root-params";
import { getSite, isVisible } from "@/sites";
import type { StaticPageKey } from "@/sites/types";
import { pageMetadata } from "./seo";

/** Loads the current site and one of its static pages, 404ing if the page isn't visible. */
export async function loadStaticPage(key: StaticPageKey) {
  const site = getSite(await siteParam());
  const page = site.pages[key];
  if (!isVisible(page.status)) notFound();
  return { site, page };
}

export async function staticPageMetadata(key: StaticPageKey): Promise<Metadata> {
  const { site, page } = await loadStaticPage(key);
  return pageMetadata(site, { title: page.metaTitle, description: page.metaDescription, path: page.path, status: page.status });
}
