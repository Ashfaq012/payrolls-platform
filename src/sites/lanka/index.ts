import type { SiteConfig } from "../types";
import { compliance } from "./compliance";
import { faqs, industries, process, stats, why } from "./content";
import { about, legal, pages } from "./pages";
import { resources } from "./resources";
import { services } from "./services";

export const lanka: SiteConfig = {
  key: "lanka",
  domain: "payrollslanka.com",
  country: { code: "LK", name: "Sri Lanka", demonym: "Sri Lankan" },
  brand: {
    name: "Payrolls Lanka",
    wordmark: ["PAYROLLS", "LANKA"],
    endorsement: null,
  },
  languages: [{ code: "en", hreflang: "en-LK", label: "English", dir: "ltr" }],
  currency: { code: "LKR", symbol: "Rs" },
  contact: {
    approved: false,
    legalEntityName: null,
    email: null,
    phone: null,
    address: null,
    hours: null,
  },
  seo: {
    defaultTitle: "Payrolls Lanka — Payroll Outsourcing in Sri Lanka",
    description:
      "Payroll outsourcing in Sri Lanka. Accurate monthly payroll, EPF, ETF and APIT handling, HR outsourcing and staffing, managed by a dedicated local team.",
    ogLocale: "en_LK",
  },
  analytics: { plausibleDomain: "payrollslanka.com" },
  leads: {
    routingKey: "LK-PAYROLL",
    countryOptions: ["Sri Lanka", "India", "Saudi Arabia", "United Arab Emirates", "Other"],
  },
  hero: {
    eyebrow: "Payroll outsourcing · Sri Lanka",
    h1: "Accurate, compliant payroll for businesses in Sri Lanka",
    pendingClaimH1: { text: "#1 Payroll Outsourcing Partner in Sri Lanka", approved: false },
    body: "Streamline payroll, simplify compliance and manage your workforce with confidence.",
    highlights: ["EPF, ETF and APIT handled", "Reviewed before you approve", "Dedicated payroll specialist"],
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
