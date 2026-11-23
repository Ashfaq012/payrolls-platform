import type { SiteConfig, StaticPage, StaticPageKey } from "../types";

export const pages: Record<StaticPageKey, StaticPage> = {
  about: {
    path: "/about",
    status: "draft",
    metaTitle: "About Payrolls India",
    metaDescription:
      "Payrolls India provides payroll outsourcing, HR outsourcing and workforce services to businesses across India.",
    eyebrow: "About us",
    h1: "A payroll partner built for businesses in India",
    intro:
      "Payrolls India helps businesses pay their people accurately, meet central and state obligations, and run HR administration with confidence.",
  },
  contact: {
    path: "/contact",
    status: "published",
    metaTitle: "Contact Payrolls India",
    metaDescription: "Get in touch with Payrolls India about payroll outsourcing, HR outsourcing or staffing in India.",
    eyebrow: "Contact",
    h1: "Talk to our payroll team",
    intro: "Tell us what you need and the right person from our team will get back to you.",
  },
  proposal: {
    path: "/get-a-proposal",
    status: "published",
    metaTitle: "Get a Free Payroll Proposal",
    metaDescription:
      "Request a free proposal for payroll outsourcing, HR outsourcing or staffing in India, tailored to your headcount, states and requirements.",
    eyebrow: "Get a proposal",
    h1: "Get a free proposal for your business",
    intro:
      "Share a few details about your business and we'll prepare a proposal for your requirements. It takes about two minutes.",
  },
  faqs: {
    path: "/faqs",
    status: "published",
    metaTitle: "Payroll Outsourcing FAQs — India",
    metaDescription:
      "Answers to common questions about outsourcing payroll in India, including PF, ESI, TDS, multi-state payroll, the labour codes and pricing.",
    eyebrow: "FAQs",
    h1: "Frequently asked questions",
    intro: "Common questions about outsourcing payroll and HR in India.",
  },
  industries: {
    path: "/industries",
    status: "published",
    metaTitle: "Payroll Solutions by Industry — India",
    metaDescription:
      "Payroll and workforce solutions for technology, GCCs, BFSI, healthcare, manufacturing, logistics, retail and professional services in India.",
    eyebrow: "Industry solutions",
    h1: "Payroll solutions shaped around your industry",
    intro:
      "Every industry has its own pay structures, rosters and pressures. We configure payroll around the way your business actually works.",
  },
  resources: {
    path: "/resources",
    status: "draft",
    metaTitle: "Payroll and Compliance Guides — India",
    metaDescription:
      "Practical guides to Indian payroll and employment compliance, including PF, ESI, TDS, professional tax and the labour codes, with official source references.",
    eyebrow: "Resources",
    h1: "Payroll and compliance guides",
    intro: "Practical, source-referenced guides to payroll and employment compliance in India.",
  },
  privacy: {
    path: "/privacy-policy",
    status: "review",
    metaTitle: "Privacy Policy",
    metaDescription: "How Payrolls India collects, uses and protects personal data submitted through this website.",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    intro: "How we collect, use and protect personal data submitted through this website.",
  },
  terms: {
    path: "/terms-of-use",
    status: "review",
    metaTitle: "Terms of Use",
    metaDescription: "The terms that apply to your use of the Payrolls India website.",
    eyebrow: "Legal",
    h1: "Terms of Use",
    intro: "The terms that apply to your use of this website.",
  },
  cookies: {
    path: "/cookie-policy",
    status: "review",
    metaTitle: "Cookie Policy",
    metaDescription: "How the Payrolls India website uses cookies and similar technologies.",
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
          `This website is operated by ${ENTITY} ("Payrolls India", "we", "us"). We are the data fiduciary for the personal data described in this notice.`,
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
          "Our website forms are not designed for employee salary data, PAN, Aadhaar, passport details or payroll files. Please do not submit them. We agree a secure method for exchanging that data once a service agreement is in place.",
        ],
      },
      {
        heading: "Purpose and consent",
        paragraphs: [
          "We process enquiry data, with your consent, to respond to you, prepare proposals and manage our business relationship with you. You can withdraw consent at any time; this does not affect processing already carried out.",
        ],
      },
      {
        heading: "Sharing and transfers",
        paragraphs: [
          "We share enquiry data only with staff and data processors who need it to respond to you, such as our email and CRM providers. [Hosting location and any transfers outside India — pending.]",
        ],
      },
      {
        heading: "Retention",
        paragraphs: ["[Retention period — pending.] We erase enquiry data when it is no longer needed for the purpose it was collected for."],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Digital Personal Data Protection Act, 2023 and the rules made under it, you may have rights to access information about, correct, complete and erase your personal data, to withdraw consent, to nominate another person, and to seek grievance redressal. You may also approach the Data Protection Board of India.",
        ],
      },
      {
        heading: "Grievance officer and contact",
        paragraphs: ["[Grievance officer name and contact details — pending.]"],
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
        heading: "Governing law and jurisdiction",
        paragraphs: ["These terms are governed by the laws of India. [Courts with jurisdiction — pending legal review.]"],
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
      body: "We run payroll, statutory compliance, HR administration and staffing services for businesses in India, from growing startups to international companies with Indian subsidiaries and capability centres.",
    },
    {
      heading: "How we work",
      body: "Every payroll is prepared by a specialist, reviewed independently and approved by you before anyone is paid. Clear processes, a state-by-state compliance calendar and dependable timing are the foundation of our service.",
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
