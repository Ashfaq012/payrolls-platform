import type { SiteConfig, StaticPage, StaticPageKey } from "../types";

export const pages: Record<StaticPageKey, StaticPage> = {
  about: {
    path: "/about",
    status: "draft",
    metaTitle: "About Payrolls Lanka",
    metaDescription:
      "Payrolls Lanka provides payroll outsourcing, HR outsourcing and workforce services to businesses in Sri Lanka.",
    eyebrow: "About us",
    h1: "A payroll partner built for Sri Lankan businesses",
    intro:
      "Payrolls Lanka helps businesses in Sri Lanka pay their people accurately, meet statutory obligations and run HR administration with confidence.",
  },
  contact: {
    path: "/contact",
    status: "published",
    metaTitle: "Contact Payrolls Lanka",
    metaDescription: "Get in touch with Payrolls Lanka about payroll outsourcing, HR outsourcing or staffing in Sri Lanka.",
    eyebrow: "Contact",
    h1: "Talk to our payroll team",
    intro: "Tell us what you need and the right person from our team will get back to you.",
  },
  proposal: {
    path: "/get-a-proposal",
    status: "published",
    metaTitle: "Get a Free Payroll Proposal",
    metaDescription:
      "Request a free proposal for payroll outsourcing, HR outsourcing or staffing in Sri Lanka, tailored to your headcount and requirements.",
    eyebrow: "Get a proposal",
    h1: "Get a free proposal for your business",
    intro:
      "Share a few details about your business and we'll prepare a proposal for your requirements. It takes about two minutes.",
  },
  faqs: {
    path: "/faqs",
    status: "published",
    metaTitle: "Payroll Outsourcing FAQs — Sri Lanka",
    metaDescription:
      "Answers to common questions about outsourcing payroll in Sri Lanka, including EPF, ETF, APIT, approvals, confidentiality and pricing.",
    eyebrow: "FAQs",
    h1: "Frequently asked questions",
    intro: "Common questions about outsourcing payroll and HR in Sri Lanka.",
  },
  industries: {
    path: "/industries",
    status: "published",
    metaTitle: "Payroll Solutions by Industry — Sri Lanka",
    metaDescription:
      "Payroll and workforce solutions for technology, finance, healthcare, logistics, construction, hospitality, manufacturing and professional services in Sri Lanka.",
    eyebrow: "Industry solutions",
    h1: "Payroll solutions shaped around your industry",
    intro:
      "Every industry has its own pay structures, rosters and pressures. We configure payroll around the way your business actually works.",
  },
  resources: {
    path: "/resources",
    status: "draft",
    metaTitle: "Payroll and Compliance Guides — Sri Lanka",
    metaDescription:
      "Practical guides to Sri Lankan payroll and employment compliance, including EPF, ETF, APIT and gratuity, with official source references.",
    eyebrow: "Resources",
    h1: "Payroll and compliance guides",
    intro: "Practical, source-referenced guides to payroll and employment compliance in Sri Lanka.",
  },
  privacy: {
    path: "/privacy-policy",
    status: "review",
    metaTitle: "Privacy Policy",
    metaDescription: "How Payrolls Lanka collects, uses and protects personal data submitted through this website.",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    intro: "How we collect, use and protect personal data submitted through this website.",
  },
  terms: {
    path: "/terms-of-use",
    status: "review",
    metaTitle: "Terms of Use",
    metaDescription: "The terms that apply to your use of the Payrolls Lanka website.",
    eyebrow: "Legal",
    h1: "Terms of Use",
    intro: "The terms that apply to your use of this website.",
  },
  cookies: {
    path: "/cookie-policy",
    status: "review",
    metaTitle: "Cookie Policy",
    metaDescription: "How the Payrolls Lanka website uses cookies and similar technologies.",
    eyebrow: "Legal",
    h1: "Cookie Policy",
    intro: "How this website uses cookies and similar technologies.",
  },
};

const ENTITY = "[Legal entity name — pending]";

export const legal: SiteConfig["legal"] = {
  privacy: {
    updatedAt: "2026-11-23",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          `This website is operated by ${ENTITY} ("Payrolls Lanka", "we", "us"). We are the controller of the personal data described in this policy.`,
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
          "Our website forms are not designed for employee salary data, national identity card numbers, passport details or payroll files. Please do not submit them. We agree a secure method for exchanging that data once a service agreement is in place.",
        ],
      },
      {
        heading: "How we use your data",
        paragraphs: [
          "We use enquiry data to respond to you, prepare proposals and manage our business relationship with you. Our legal basis is your consent and our legitimate interest in responding to business enquiries.",
        ],
      },
      {
        heading: "Sharing and transfers",
        paragraphs: [
          "We share enquiry data only with staff and service providers who need it to respond to you, such as our email and CRM providers. [Hosting location and any cross-border transfers — pending.]",
        ],
      },
      {
        heading: "Retention",
        paragraphs: ["[Retention period — pending.] We delete or anonymise enquiry data when it is no longer needed."],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under Sri Lanka's Personal Data Protection Act, No. 9 of 2022, you may have rights to access, correct, withdraw consent for and request erasure of your personal data. To exercise them, contact us using the details below.",
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
          "Content on this website, including compliance overviews and guides, is general information. It is not legal, tax or financial advice and may not reflect the most recent changes in law. Always confirm requirements with the official sources or a qualified adviser.",
        ],
      },
      {
        heading: "Services",
        paragraphs: [
          "Our services are provided under a separate written agreement. Nothing on this website is an offer capable of acceptance.",
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
        paragraphs: ["These terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka."],
      },
    ],
  },
  cookies: {
    updatedAt: "2026-11-23",
    sections: [
      {
        heading: "Our approach",
        paragraphs: [
          "This website is designed to work without advertising or tracking cookies. We use privacy-friendly, cookieless analytics to understand overall usage.",
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
      body: "We run payroll, HR administration and staffing services for businesses operating in Sri Lanka, from growing local companies to international firms with Sri Lankan teams.",
    },
    {
      heading: "How we work",
      body: "Every payroll is prepared by a specialist, reviewed independently and approved by you before anyone is paid. Clear processes and dependable timing are the foundation of our service.",
    },
    {
      heading: "Our background",
      body: "[Company background, leadership and group relationship — pending management approval.]",
    },
  ],
  values: [
    { title: "Accuracy", body: "Every figure checked, every cycle.", icon: "calculator" },
    { title: "Confidentiality", body: "Pay data handled on a strict need-to-know basis.", icon: "lock" },
    { title: "Reliability", body: "Agreed calendars, met every month.", icon: "clipboard" },
    { title: "Clarity", body: "Plain explanations, no surprises.", icon: "book" },
  ],
};
