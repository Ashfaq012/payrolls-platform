import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import { site as siteParam } from "next/root-params";
import { getSite, siteStaticParams } from "@/sites";
import { buildNav } from "@/lib/nav";
import { indexingAllowed, organizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { AttributionCapture } from "@/components/forms/AttributionCapture";
import "../globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export function generateStaticParams() {
  return siteStaticParams();
}

export async function generateMetadata(): Promise<Metadata> {
  const site = getSite(await siteParam());
  return {
    metadataBase: new URL(`https://${site.domain}`),
    title: { default: site.seo.defaultTitle, template: `%s | ${site.brand.name}` },
    description: site.seo.description,
    applicationName: site.brand.name,
    robots: indexingAllowed() ? undefined : { index: false, follow: false },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#0B1833",
  width: "device-width",
  initialScale: 1,
};

export default async function SiteLayout({ children }: LayoutProps<"/[site]">) {
  const site = getSite(await siteParam());
  const nav = buildNav(site);
  const lang = site.languages[0];
  const analytics = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true" && site.analytics.plausibleDomain;

  return (
    <html lang={lang.hreflang} dir={lang.dir} className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="min-h-dvh">
        <JsonLd data={organizationJsonLd(site)} />
        <AttributionCapture />
        <MotionProvider>
          <Header nav={nav} brand={site.brand} />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer site={site} nav={nav} />
        </MotionProvider>
        {analytics && (
          <Script defer data-domain={analytics} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
