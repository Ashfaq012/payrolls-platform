import { gccSources as sources } from "../gcc-sources";
import type { SiteConfig, StaticPage, StaticPageKey } from "../types";

export const pages: Record<StaticPageKey, StaticPage> = {
  about: {
    path: "/about",
    status: "draft",
    metaTitle: "About Payroll Arabia",
    metaDescription: "Payroll Arabia provides payroll outsourcing, HR outsourcing and workforce services across the GCC.",
    eyebrow: "About us",
    h1: "A payroll partner for the whole GCC",
    intro:
      "Payroll Arabia helps regional businesses pay their people accurately in every GCC country, with one process and one view of payroll.",
  },
  contact: {
    path: "/contact",
    status: "published",
    metaTitle: "Contact Payroll Arabia",
    metaDescription: "Get in touch with Payroll Arabia about payroll outsourcing, HR outsourcing or recruitment across the GCC.",
    eyebrow: "Contact",
    h1: "Talk to our regional payroll team",
    intro: "Tell us what you need and where, and the right person from our team will get back to you.",
  },
  proposal: {
    path: "/get-a-proposal",
    status: "published",
    metaTitle: "Get a Free GCC Payroll Proposal",
    metaDescription:
      "Request a free proposal for payroll outsourcing across the GCC, tailored to your countries, headcount and requirements.",
    eyebrow: "Get a proposal",
    h1: "Get a free proposal for your business",
    intro:
      "Share a few details about your business and we'll prepare a proposal for your requirements. Tell us which countries you need in the message. It takes about two minutes.",
  },
  faqs: {
    path: "/faqs",
    status: "published",
    metaTitle: "GCC Payroll Outsourcing FAQs",
    metaDescription:
      "Answers to common questions about outsourcing payroll across the GCC, including country coverage, consolidated reporting, social insurance and pricing.",
    eyebrow: "FAQs",
    h1: "Frequently asked questions",
    intro: "Common questions about outsourcing payroll and HR across the GCC.",
  },
  industries: {
    path: "/industries",
    status: "published",
    metaTitle: "GCC Payroll Solutions by Industry",
    metaDescription:
      "Payroll and workforce solutions across the GCC for construction, energy, financial services, hospitality, retail, logistics, healthcare and technology.",
    eyebrow: "Industry solutions",
    h1: "Payroll solutions shaped around your industry",
    intro:
      "Every industry has its own pay structures, rosters and pressures. We configure payroll around the way your business works in each country.",
  },
  resources: {
    path: "/resources",
    status: "draft",
    metaTitle: "GCC Payroll and Compliance Guides",
    metaDescription:
      "Practical guides to payroll and employment compliance across the GCC, with official source references.",
    eyebrow: "Resources",
    h1: "Payroll and compliance guides",
    intro: "Practical, source-referenced guides to payroll across the GCC.",
  },
  privacy: {
    path: "/privacy-policy",
    status: "review",
    metaTitle: "Privacy Policy",
    metaDescription: "How Payroll Arabia collects, uses and protects personal data submitted through this website.",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    intro: "How we collect, use and protect personal data submitted through this website.",
  },
  terms: {
    path: "/terms-of-use",
    status: "review",
    metaTitle: "Terms of Use",
    metaDescription: "The terms that apply to your use of the Payroll Arabia website.",
    eyebrow: "Legal",
    h1: "Terms of Use",
    intro: "The terms that apply to your use of this website.",
  },
  cookies: {
    path: "/cookie-policy",
    status: "review",
    metaTitle: "Cookie Policy",
    metaDescription: "How the Payroll Arabia website uses cookies and similar technologies.",
    eyebrow: "Legal",
    h1: "Cookie Policy",
    intro: "How this website uses cookies and similar technologies.",
  },
};

const ENTITY = "[Legal entity name — pending]";

export const legal: SiteConfig["legal"] = {
  privacy: {
    sources: [sources.saudiPrivacy, sources.uaePrivacy],
    updatedAt: "2026-11-23",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `This website is operated by ${ENTITY} ("Payroll Arabia", "we", "us"). We are the controller of the personal data described in this policy.`,
        ],
      },
      {
        heading: "What we collect",
        paragraphs: ["When you submit an enquiry or proposal request, we collect:"],
        bullets: [
          "Your name, business name, business email address and phone number",
          "Your country, the service you are interested in and your approximate employee count",
          "Any message you choose to include",
          "Technical information such as the page you came from and campaign parameters in the link you followed",
        ],
      },
      {
        heading: "What we do not collect through this website",
        paragraphs: [
          "Our website forms are not designed for employee salary data, national ID or residency numbers, passport details or payroll files. Please do not submit them. We agree a secure method for exchanging that data once a service agreement is in place.",
        ],
      },
      {
        heading: "Purpose and legal basis",
        paragraphs: [
          "We use enquiry data to respond to your request and prepare proposals. The applicable legal basis must be established under the law governing the operating entity: consent or a specific statutory exception where its conditions are met. [Entity, applicable law and processing bases pending confirmation.]",
        ],
      },
      {
        heading: "Sharing and transfers",
        paragraphs: [
          "We share enquiry data only with staff, group companies and service providers who need it to respond to you, which may include teams in the GCC country your enquiry relates to. [Hosting location and cross-border transfers — pending.]",
        ],
      },
      {
        heading: "Retention",
        paragraphs: ["[Retention period — pending.] We delete or anonymise enquiry data when it is no longer needed."],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Depending on where you are and which of our entities handles your enquiry, data protection laws in GCC countries may give you rights to access, correct and request deletion of your personal data, and to withdraw consent. [Applicable law for the operating entity — pending legal review.]",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["[Data protection contact details — pending.]"],
      },
    ],
  },
  terms: {
    updatedAt: "2026-11-23",
    sections: [
      {
        heading: "About these terms",
        paragraphs: [
          `These terms govern your use of this website, operated by ${ENTITY}. By using the website you agree to them.`,
        ],
      },
      {
        heading: "Information on this website",
        paragraphs: [
          "Content on this website, including compliance overviews and guides, is general information. It is not legal or financial advice and may not reflect the most recent changes in regulations. Always confirm requirements with the official sources or a qualified adviser.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "Our services are provided under a separate written agreement, which may be with a group company in the relevant country. Nothing on this website is an offer capable of acceptance.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: ["The content and design of this website belong to us or our licensors."],
      },
      {
        heading: "Liability",
        paragraphs: ["[Limitation of liability wording — pending legal review.]"],
      },
      {
        heading: "Governing law",
        paragraphs: ["[Governing law and jurisdiction for the operating entity — pending legal review.]"],
      },
    ],
  },
  cookies: {
    updatedAt: "2026-11-23",
    sections: [
      {
        heading: "Our approach",
        paragraphs: [
          "This website is designed to work without advertising or tracking cookies. Where configured, cookieless analytics measure overall usage; the deployed tools must be confirmed before this policy is published.",
        ],
      },
      {
        heading: "Technologies we use",
        paragraphs: [],
        bullets: [
          "Strictly necessary: security features such as bot protection on our forms may set short-lived technical cookies.",
          "Session storage: we temporarily remember the campaign link you arrived from, so we know which campaign brought an enquiry. It is cleared when you close your browser tab.",
          "Analytics: cookieless and aggregated, with no cross-site tracking.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: ["If we introduce non-essential cookies, we will update this policy and ask for your consent first."],
      },
    ],
  },
};

export const about: SiteConfig["about"] = {
  sections: [
    {
      heading: "What we do",
      body: "We run payroll, compliance, HR administration and recruitment services across the six GCC countries, for regional groups and for companies expanding into new GCC markets.",
    },
    {
      heading: "How we work",
      body: "Every payroll is prepared by a specialist, reviewed independently and approved by you before anyone is paid. Each country follows its own rules; every country follows the same process.",
    },
    {
      heading: "Our background",
      body: "[Company background, leadership, group relationship and country delivery model — pending management approval.]",
    },
  ],
  values: [
    { title: "Accuracy", body: "Every figure checked, every cycle.", icon: "calculator" },
    { title: "Confidentiality", body: "Pay data handled on a strict need-to-know basis.", icon: "lock" },
    { title: "Reliability", body: "Agreed calendars, met every month.", icon: "clipboard" },
    { title: "Clarity", body: "Plain explanations, no surprises.", icon: "book" },
  ],
};
