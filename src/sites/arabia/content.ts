import type { Faq, FeatureItem, Industry, ProcessStep, Stat } from "../types";

/** No GCC-specific figures exist yet. Group figures must not be attributed to this brand without approval. */
export const stats: Stat[] = [
  {
    value: 1_000_000,
    suffix: "+",
    label: "Payrolls processed",
    scope: "group",
    approved: false,
    evidenceNote: "Group-level figure proposed for reuse. Needs evidence and approval before it can appear on the GCC site.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Trusted clients",
    scope: "group",
    approved: false,
    evidenceNote: "Group-level figure proposed for reuse. Needs a defined counting method and approval.",
  },
];

export const why = {
  heading: "Why businesses choose Payroll Arabia",
  intro:
    "Every GCC country has its own social insurance, salary payment and end-of-service rules. We run them all through one process, so regional finance teams get consistent results and one set of reports.",
  items: [
    {
      title: "One process, six countries",
      body: "The same inputs, cut-offs, review steps and approvals in every GCC country you operate in.",
      icon: "settings",
    },
    {
      title: "Country rules, applied locally",
      body: "Social insurance for nationals, wage protection systems and end-of-service rules handled to each country's requirements.",
      icon: "shield",
    },
    {
      title: "Consolidated reporting",
      body: "Payroll cost, headcount and liabilities across the region in one format, converted to your reporting currency.",
      icon: "chart",
    },
    {
      title: "Dedicated regional contact",
      body: "One accountable contact for the whole region, supported by country specialists.",
      icon: "headset",
    },
    {
      title: "Confidential data handling",
      body: "Salary and identity data is shared only with the people who need it, through agreed secure channels.",
      icon: "lock",
    },
    {
      title: "Beyond the GCC",
      body: "Sister operations in India and Sri Lanka, for regional groups with teams across South Asia.",
      icon: "globe",
    },
  ] satisfies FeatureItem[],
};

export const process = {
  heading: "How it works",
  intro: "A structured regional onboarding, a parallel run in each country, then one monthly rhythm.",
  steps: [
    {
      title: "Consultation",
      body: "We map your entities, countries, workforce mix and pay structures, and agree a regional rollout plan.",
      points: ["Entities and countries", "Nationals and expatriates by country", "Rollout order and timeline"],
    },
    {
      title: "Requirements and setup",
      body: "We configure each country payroll, agree a common input format and calendar, and run parallel checks country by country.",
      points: ["Employee data migration", "One input template and calendar", "Parallel runs and sign-off"],
    },
    {
      title: "Payroll processing and review",
      body: "Every month we process each country payroll, review the results and send them to you for approval.",
      points: ["Country-specific calculations", "Independent review", "Your approval before payment"],
    },
    {
      title: "Reporting and filings",
      body: "You receive payslips, salary files and social insurance schedules for each country, plus a consolidated regional report.",
      points: ["Country payroll outputs", "Social insurance and WPS files", "Consolidated regional reporting"],
    },
  ] satisfies ProcessStep[],
};

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction and Infrastructure",
    icon: "hard-hat",
    summary: "Large project workforces moving between GCC countries.",
    considerations: ["Site and accommodation allowances", "Staff transfers between countries", "Project cost allocation"],
  },
  {
    slug: "energy",
    name: "Energy and Industrial",
    icon: "factory",
    summary: "Rotational teams and specialist expatriates across the region.",
    considerations: ["Rotation and field allowances", "Expatriate packages", "Localisation targets in technical roles"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "landmark",
    summary: "Banks, insurers and funds with regional operations.",
    considerations: ["Bonus and deferred pay", "Confidential senior payroll", "Regulator-ready records"],
  },
  {
    slug: "hospitality",
    name: "Hospitality and Tourism",
    icon: "hotel",
    summary: "Hotel and venue groups operating in several GCC countries.",
    considerations: ["Service charge distribution", "Shift and Ramadan working hours", "High joiner and leaver volumes"],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: "briefcase",
    summary: "Store networks across the region.",
    considerations: ["Commission and incentive pay", "Country localisation rules", "Many entities and locations"],
  },
  {
    slug: "logistics",
    name: "Logistics and Trade",
    icon: "truck",
    summary: "Regional hubs, fleets and free zone operations.",
    considerations: ["Free zone and onshore entities", "Trip and incentive payments", "Drivers and warehouse staff"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    summary: "Hospital and clinic groups with regional footprints.",
    considerations: ["Shift and on-call allowances", "Expatriate clinical staff", "Health insurance administration"],
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "laptop",
    summary: "Regional headquarters and teams spread across GCC hubs.",
    considerations: ["Competitive packages and bonuses", "Regional HQ reporting", "Remote staff in several countries"],
  },
];

export const faqs: Faq[] = [
  {
    q: "Which countries do you cover?",
    a: "All six GCC countries: Saudi Arabia, the United Arab Emirates, Qatar, Kuwait, Bahrain and Oman. For Saudi Arabia and the UAE we also run dedicated country sites, Payroll Saudia and Payroll Emirates.",
  },
  {
    q: "Can you run payroll in one GCC country and add others later?",
    a: "Yes. Many clients start with one or two countries and add others as they expand, keeping the same process and reporting.",
  },
  {
    q: "Is income tax deducted from salaries in the GCC?",
    a: "Tax and social insurance must be checked by country and employee. Oman has enacted personal income tax starting in 2028 for specified income types above OMR 42,000 total annual income, with 5% on taxable income subject to exemptions and deductions. Do not assume a permanent GCC-wide tax exemption.",
  },
  {
    q: "Do you provide consolidated regional reporting?",
    a: "Yes. Alongside each country's payroll outputs, we provide a consolidated view of payroll cost, headcount and liabilities across the region.",
  },
  {
    q: "Will we still approve each payroll?",
    a: "Yes. Every country payroll is sent to you for review and approval before salaries are paid.",
  },
  {
    q: "How do you keep salary information confidential?",
    a: "Payroll data is accessible only to the team on your account, exchanged through agreed secure channels and covered by confidentiality and data protection obligations in our agreement.",
  },
  {
    q: "Should we send employee data through the website?",
    a: "No. Please don't send salaries, national ID or residency numbers, passport details or payroll files through our website forms. We set up a secure way to exchange data once we start working together.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing usually depends on headcount per country, the number of countries and entities, and the services included. Request a proposal and we'll prepare one for your requirements.",
  },
];
