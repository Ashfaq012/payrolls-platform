import type { SiteConfig } from "../types";
import { compliance } from "./compliance";
import { faqs, industries, process, stats, why } from "./content";
import { about, legal, pages } from "./pages";
import { resources } from "./resources";
import { services } from "./services";

export const emirates: SiteConfig = {
  key: "emirates",
  domain: "payrollemirates.com",
  country: { code: "AE", name: "United Arab Emirates", demonym: "Emirati", shortName: "UAE", inSentence: "the UAE" },
  brand: {
    name: "Payroll Emirates",
    wordmark: ["PAYROLL", "EMIRATES"],
    endorsement: null,
  },
  // English first. An Arabic version needs a language-routing layer and an
  // RTL font (see docs/ARCHITECTURE.md → Adding a country).
  languages: [{ code: "en", hreflang: "en-AE", label: "English", dir: "ltr" }],
  currency: { code: "AED", symbol: "AED" },
  contact: {
    approved: false,
    legalEntityName: null,
    email: null,
    phone: null,
    address: null,
    hours: null,
  },
  seo: {
    defaultTitle: "Payroll Emirates — Payroll Outsourcing in the UAE",
    description:
      "Payroll outsourcing in the UAE. Accurate monthly payroll, WPS salary files, end-of-service gratuity and pension contributions for mainland and free zone companies, run by a dedicated team.",
    ogLocale: "en_AE",
  },
  analytics: { plausibleDomain: "payrollemirates.com" },
  leads: {
    routingKey: "AE-PAYROLL",
    countryOptions: ["United Arab Emirates", "Saudi Arabia", "India", "Sri Lanka", "Other"],
    dialCode: "+971",
  },
  hero: {
    eyebrow: "Payroll outsourcing · United Arab Emirates",
    h1: "Accurate, compliant payroll for businesses in the UAE",
    body: "Payroll, WPS, gratuity and pension contributions handled for mainland and free zone companies, across every emirate.",
    highlights: ["WPS salary files handled", "Mainland and free zone payroll", "Reviewed before you approve"],
    statutorySummary: "WPS file, gratuity accruals and pension contributions",
  },
  stats,
  why,
  process,
  services,
  industries,
  compliance,
  faqs,
  resources,
  pages,
  legal,
  about,
};
