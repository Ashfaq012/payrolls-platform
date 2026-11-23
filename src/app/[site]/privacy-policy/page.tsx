import { loadStaticPage, staticPageMetadata } from "@/lib/pages";
import { LegalPage } from "@/components/sections/LegalPage";

export const generateMetadata = () => staticPageMetadata("privacy");

export default async function Page() {
  const { site, page } = await loadStaticPage("privacy");
  return <LegalPage site={site} page={page} doc={site.legal.privacy} />;
}
