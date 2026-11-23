import type { SiteConfig } from "../types";
import { compliance } from "./compliance";
import { faqs, industries, process, stats, why } from "./content";
import { about, legal, pages } from "./pages";
import { resources } from "./resources";
import { services } from "./services";

export const india: SiteConfig = {
  key: "india",
  domain: "payrollsindia.com",
  country: { code: "IN", name: "India", demonym: "Indian" },
  brand: {
    name: "Payrolls India",
    wordmark: ["PAYROLLS", "INDIA"],
    endorsement: null,
  },
  languages: [{ code: "en", hreflang: "en-IN", label: "English", dir: "ltr" }],
  currency: { code: "INR", symbol: "₹" },
  contact: {
    approved: false,
    legalEntityName: null,
    email: null,
    phone: null,
    address: null,
    hours: null,
  },
  seo: {
    defaultTitle: "Payrolls India — Payroll Outsourcing in India",
    description:
      "Payroll outsourcing in India. Accurate monthly payroll, PF, ESI, TDS and professional tax handled across states, plus HR outsourcing and staffing, run by a dedicated team.",
    ogLocale: "en_IN",
  },
  analytics: { plausibleDomain: "payrollsindia.com" },
  leads: {
    routingKey: "IN-PAYROLL",
    countryOptions: ["India", "Sri Lanka", "United Arab Emirates", "Saudi Arabia", "Other"],
    dialCode: "+91",
  },
  hero: {
    eyebrow: "Payroll outsourcing · India",
    h1: "Accurate, compliant payroll for businesses across India",
    body: "One team for payroll, statutory compliance and HR administration, in every state you operate in.",
    highlights: ["PF, ESI, TDS and PT handled", "Multi-state payroll, one process", "Reviewed before you approve"],
    statutorySummary: "PF, ESI, TDS and professional tax",
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
