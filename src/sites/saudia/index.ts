import type { SiteConfig } from "../types";
import { compliance } from "./compliance";
import { faqs, industries, process, stats, why } from "./content";
import { about, legal, pages } from "./pages";
import { resources } from "./resources";
import { services } from "./services";

export const saudia: SiteConfig = {
  key: "saudia",
  domain: "payrollsaudia.com",
  country: { code: "SA", name: "Saudi Arabia", demonym: "Saudi" },
  brand: {
    name: "Payroll Saudia",
    wordmark: ["PAYROLL", "SAUDIA"],
    endorsement: null,
  },
  // English first. An Arabic version needs a language-routing layer and an
  // RTL font (see docs/ARCHITECTURE.md → Adding a country).
  languages: [{ code: "en", hreflang: "en-SA", label: "English", dir: "ltr" }],
  currency: { code: "SAR", symbol: "SAR" },
  contact: {
    approved: false,
    legalEntityName: null,
    email: null,
    phone: null,
    address: null,
    hours: null,
  },
  seo: {
    defaultTitle: "Payroll Saudia — Payroll Outsourcing in Saudi Arabia",
    description:
      "Payroll outsourcing in Saudi Arabia. Accurate monthly payroll, GOSI, WPS through Mudad and end-of-service calculations for Saudi and expatriate employees, run by a dedicated team.",
    ogLocale: "en_SA",
  },
  analytics: { plausibleDomain: "payrollsaudia.com" },
  leads: {
    routingKey: "SA-PAYROLL",
    countryOptions: ["Saudi Arabia", "United Arab Emirates", "India", "Sri Lanka", "Other"],
    dialCode: "+966",
  },
  hero: {
    eyebrow: "Payroll outsourcing · Saudi Arabia",
    h1: "Accurate, compliant payroll for businesses in Saudi Arabia",
    body: "Payroll, GOSI, the Wage Protection System and end-of-service benefits handled for your Saudi and expatriate employees.",
    highlights: ["GOSI and WPS handled", "Saudi and expatriate payroll", "Reviewed before you approve"],
    statutorySummary: "GOSI, WPS file and end-of-service accruals",
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
