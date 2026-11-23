import type { SiteConfig } from "../types";
import { compliance } from "./compliance";
import { faqs, industries, process, stats, why } from "./content";
import { about, legal, pages } from "./pages";
import { resources } from "./resources";
import { services } from "./services";

/**
 * Regional site for the six GCC countries. Saudi Arabia and the UAE also have
 * dedicated country sites (payrollsaudia.com, payrollemirates.com); this site
 * covers multi-country GCC payroll and Qatar, Kuwait, Bahrain and Oman.
 */
export const arabia: SiteConfig = {
  key: "arabia",
  domain: "payrollarabia.com",
  country: {
    code: "GCC",
    name: "Gulf Cooperation Council",
    demonym: "Gulf",
    shortName: "GCC",
    inSentence: "the GCC",
    areaServed: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman"],
  },
  brand: {
    name: "Payroll Arabia",
    wordmark: ["PAYROLL", "ARABIA"],
    endorsement: null,
  },
  // Regional English site. An Arabic version needs a language-routing layer and an RTL font.
  languages: [{ code: "en", hreflang: "en", label: "English", dir: "ltr" }],
  // Multi-currency region; not displayed. USD is the usual consolidation currency.
  currency: { code: "USD", symbol: "$" },
  contact: {
    approved: false,
    legalEntityName: null,
    email: null,
    phone: null,
    address: null,
    hours: null,
  },
  seo: {
    defaultTitle: "Payroll Arabia — GCC Payroll Outsourcing",
    description:
      "Payroll outsourcing across the GCC: Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman. One partner for country payrolls, social insurance, end-of-service and consolidated reporting.",
    ogLocale: "en",
  },
  analytics: { plausibleDomain: "payrollarabia.com" },
  leads: {
    routingKey: "GCC-PAYROLL",
    countryOptions: ["Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait", "Bahrain", "Oman", "India", "Sri Lanka", "Other"],
    dialCode: "+971",
  },
  hero: {
    eyebrow: "Payroll outsourcing · GCC",
    h1: "One payroll partner across the GCC",
    body: "Accurate, compliant payroll in Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman, with one process and consolidated reporting.",
    highlights: ["Six countries, one process", "Consolidated regional reporting", "Reviewed before you approve"],
    statutorySummary: "Social insurance, WPS files and end-of-service, country by country",
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
