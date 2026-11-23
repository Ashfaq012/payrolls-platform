import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { LegalPage } from "@/components/sections/LegalPage";

export const generateMetadata = () => staticPageMetadata("terms");

export default async function Page() {
  const { site, page } = await loadStaticPage("terms");
  return <LegalPage site={site} page={page} doc={site.legal.terms} />;
}
