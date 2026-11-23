import type { SiteKey } from "./hosts";

/**
 * Content lifecycle, mirrored later by the CMS:
 * - published: live and indexable
 * - review:    live but noindex, shown with a "pending review" notice (e.g. legal drafts)
 * - draft:     only rendered when drafts are enabled (local dev / preview with SHOW_DRAFTS=true)
 */
export type ContentStatus = "published" | "review" | "draft";

/** Icon names resolved to lucide icons in `components/ui/Icon.tsx`. */
export type IconName =
  | "wallet"
  | "calculator"
  | "shield"
  | "file-check"
  | "users"
  | "user-search"
  | "briefcase"
  | "building"
  | "globe"
  | "laptop"
  | "landmark"
  | "heart-pulse"
  | "truck"
  | "hard-hat"
  | "hotel"
  | "factory"
  | "scale"
  | "headset"
  | "lock"
  | "trending-up"
  | "map"
  | "clipboard"
  | "settings"
  | "chart"
  | "book";

export interface Language {
  code: string; // "en"
  hreflang: string; // "en-LK"
  label: string; // "English"
  dir: "ltr" | "rtl";
}

export interface ContactDetails {
  /** False until management confirms. Unapproved details are never rendered as links. */
  approved: boolean;
  legalEntityName: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  hours: string | null;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  scope: "site" | "group";
  /** Unapproved statistics never render on published pages. */
  approved: boolean;
  evidenceNote: string;
}

export interface FeatureItem {
  title: string;
  body: string;
  icon?: IconName;
}

export interface Faq {
  q: string;
  a: string;
}

export interface SourceLink {
  label: string;
  href: string;
}

/** Educational compliance topic. Distinct from the services we actually deliver. */
export interface ComplianceTopic {
  id: string;
  name: string;
  fullName: string;
  icon: IconName;
  summary: string;
  /** General legal context — educational, not advice. */
  keyPoints: string[];
  /** What the business actually does for clients on this topic. */
  weHandle: string[];
  /** Rates or thresholds that must be checked against the official source before launch. */
  figures?: { label: string; value: string; verified: boolean }[];
  sources: SourceLink[];
}

export interface ComplianceContent {
  heading: string;
  intro: string;
  disclaimer: string;
  /** ISO date of the last official-source review, or null when not yet reviewed. */
  lastReviewed: string | null;
  topics: ComplianceTopic[];
}

export type NavGroup = "payroll" | "eor" | "recruitment" | "services" | "solutions";

export interface Service {
  slug: string;
  status: ContentStatus;
  group: NavGroup;
  icon: IconName;
  name: string;
  /** One-line description for cards and menus. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  includes: FeatureItem[];
  idealFor: string[];
  local: { heading: string; body: string; points: string[] };
  faqs: Faq[];
  related: string[];
  /** Notes for reviewers; never rendered. */
  approvalNote?: string;
}

export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  considerations: string[];
}

export interface ProcessStep {
  title: string;
  body: string;
  points: string[];
}

export interface ResourceArticle {
  slug: string;
  status: ContentStatus;
  type: "guide" | "article" | "case-study";
  title: string;
  metaDescription: string;
  excerpt: string;
  readingMinutes: number;
  publishedAt: string | null;
  lastReviewed: string | null;
  body: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  sources: SourceLink[];
}

export interface StaticPage {
  path: string;
  status: ContentStatus;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
}

export type StaticPageKey =
  | "about"
  | "contact"
  | "proposal"
  | "faqs"
  | "industries"
  | "resources"
  | "privacy"
  | "terms"
  | "cookies";

export interface LegalDocument {
  updatedAt: string;
  sources?: SourceLink[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}

export interface SiteConfig {
  key: SiteKey;
  domain: string;
  country: {
    code: string;
    /** Official full name, used in structured data. */
    name: string;
    demonym: string;
    /** Short label for eyebrows and adjectives, e.g. "UAE", "GCC". */
    shortName: string;
    /** Name as it reads mid-sentence, e.g. "the UAE", "India". */
    inSentence: string;
    /** Countries served, for structured data. Defaults to [name]. */
    areaServed?: string[];
  };
  brand: {
    name: string;
    wordmark: [string, string];
    /** e.g. "A Manpower Holdings Company" — null until management decides. */
    endorsement: string | null;
  };
  languages: Language[];
  currency: { code: string; symbol: string };
  contact: ContactDetails;
  seo: { defaultTitle: string; description: string; ogLocale: string };
  analytics: { plausibleDomain: string | null };
  leads: {
    /** Routing key sent with every lead so the CRM/inbox can assign the right team. */
    routingKey: string;
    countryOptions: string[];
    /** International dialling prefix shown in the phone field hint, e.g. "+94". */
    dialCode: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    /** A stronger headline (e.g. a "#1" claim) that needs evidence before use. */
    pendingClaimH1?: { text: string; approved: boolean };
    body: string;
    highlights: string[];
    /** Short list of the statutory items prepared each month, shown in the hero schedule. */
    statutorySummary: string;
  };
  stats: Stat[];
  why: { heading: string; intro: string; items: FeatureItem[] };
  process: { heading: string; intro: string; steps: ProcessStep[] };
  services: Service[];
  industries: Industry[];
  compliance: ComplianceContent;
  faqs: Faq[];
  resources: ResourceArticle[];
  pages: Record<StaticPageKey, StaticPage>;
  legal: Record<"privacy" | "terms" | "cookies", LegalDocument>;
  about: { sections: { heading: string; body: string }[]; values: FeatureItem[] };
}

/** Lightweight descriptor for sites that are planned but not live yet. */
export interface PlannedSite {
  key: SiteKey;
  domain: string;
  countryName: string;
  brandName: string;
}
