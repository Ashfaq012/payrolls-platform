import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { LegalPage } from "@/components/sections/LegalPage";

export const generateMetadata = () => staticPageMetadata("cookies");

export default async function Page() {
  const { site, page } = await loadStaticPage("cookies");
  return <LegalPage site={site} page={page} doc={site.legal.cookies} />;
}
