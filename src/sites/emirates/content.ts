import type { Faq, FeatureItem, Industry, ProcessStep, Stat } from "../types";

/** No UAE-specific figures exist yet. Group figures must not be attributed to this brand without approval. */
export const stats: Stat[] = [
  {
    value: 1_000_000,
    suffix: "+",
    label: "Payrolls processed",
    scope: "group",
    approved: false,
    evidenceNote: "Group-level figure proposed for reuse. Needs evidence and approval before it can appear on the UAE site.",
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
  heading: "Why businesses choose Payroll Emirates",
  intro:
    "UAE payroll looks simple until you add WPS, free zone rules, Emirati pensions and gratuity. We bring the process, controls and local knowledge to get it right every month.",
  items: [
    {
      title: "Payroll is our core service",
      body: "Every cycle is prepared by payroll specialists and independently reviewed before it reaches you for approval.",
      icon: "calculator",
    },
    {
      title: "Mainland and free zones",
      body: "Mainland companies, free zones and the DIFC and ADGM financial centres follow different rules. We apply the right ones to each entity.",
      icon: "map",
    },
    {
      title: "Emirati and expatriate payroll",
      body: "Pension contributions for UAE and GCC nationals, gratuity for expatriates, and Emiratisation reporting, in one payroll.",
      icon: "users",
    },
    {
      title: "Dedicated account support",
      body: "A named contact who knows your pay structures, your entities and your deadlines.",
      icon: "headset",
    },
    {
      title: "Confidential data handling",
      body: "Salary and identity data is shared only with the people who need it, through agreed secure channels.",
      icon: "lock",
    },
    {
      title: "Multi-country workforce support",
      body: "Sister operations in Saudi Arabia, India and Sri Lanka, for when your team crosses borders.",
      icon: "globe",
    },
  ] satisfies FeatureItem[],
};

export const process = {
  heading: "How it works",
  intro: "A structured onboarding, a parallel run, then a dependable monthly rhythm.",
  steps: [
    {
      title: "Consultation",
      body: "We learn about your entities, where they're licensed, your workforce mix, pay structures and current challenges.",
      points: ["Entities, emirates and free zones", "Allowances and policies", "Timeline and priorities"],
    },
    {
      title: "Requirements and setup",
      body: "We configure pay structures, confirm the salary payment route for each entity, agree cut-offs and run a parallel check.",
      points: ["Employee data migration", "Input templates and calendar", "Parallel run and sign-off"],
    },
    {
      title: "Payroll processing and review",
      body: "Every month we process your inputs, calculate pension contributions and accruals, review the results and send the payroll for approval.",
      points: ["Gross-to-net calculation", "Independent review", "Your approval before payment"],
    },
    {
      title: "Reporting and WPS",
      body: "You receive payslips, the WPS salary file and pension schedules, plus continuing support from your account contact.",
      points: ["Payslips and WPS salary files", "Pension contribution schedules", "Gratuity and leave accrual reports"],
    },
  ] satisfies ProcessStep[],
};

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction and Real Estate",
    icon: "hard-hat",
    summary: "Large site workforces, project allowances and fluctuating headcount.",
    considerations: ["Site and accommodation allowances", "Overtime at statutory rates", "Project cost allocation"],
  },
  {
    slug: "hospitality",
    name: "Hospitality and Tourism",
    icon: "hotel",
    summary: "Hotels, restaurants and venues with shifts and seasonal peaks.",
    considerations: ["Service charge distribution", "Shift and Ramadan working hours", "High joiner and leaver volumes"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "landmark",
    summary: "Banks, funds and fintechs, including firms in the DIFC and ADGM.",
    considerations: ["DIFC and ADGM employment rules", "Bonus and deferred pay", "Confidential senior payroll"],
  },
  {
    slug: "retail",
    name: "Retail and E-commerce",
    icon: "briefcase",
    summary: "Store, warehouse and head-office teams across emirates.",
    considerations: ["Commission and incentive pay", "Shift rosters", "Several entities and locations"],
  },
  {
    slug: "logistics",
    name: "Logistics and Trade",
    icon: "truck",
    summary: "Free zone and mainland operations across ports, hubs and routes.",
    considerations: ["Free zone and mainland entities", "Trip and incentive payments", "Drivers and warehouse staff"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    summary: "Clinical teams with licensing, shifts and on-call pay.",
    considerations: ["Shift, night and on-call allowances", "Expatriate clinical staff", "Health insurance administration"],
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "laptop",
    summary: "Regional headquarters and fast-scaling tech teams.",
    considerations: ["Competitive packages and bonuses", "Equity and incentive plans", "Regional HQ reporting"],
  },
  {
    slug: "energy",
    name: "Energy and Industrial",
    icon: "factory",
    summary: "Rotational schedules and specialist expatriate teams.",
    considerations: ["Rotation and field allowances", "Expatriate packages", "Emiratisation in technical roles"],
  },
];

export const faqs: Faq[] = [
  {
    q: "What does payroll outsourcing in the UAE include?",
    a: "Typically salary calculation, WPS salary files, pension contributions for UAE and GCC nationals, gratuity and leave accruals, payslips and payroll reports. We agree the exact scope during setup.",
  },
  {
    q: "Is income tax deducted from salaries in the UAE?",
    a: "The UAE does not currently levy personal income tax on employment income, so payroll has no income tax withholding. Corporate tax applies to businesses, not to employees' salaries.",
  },
  {
    q: "Do you handle free zone companies?",
    a: "Yes. Federal employment law applies in most free zones, while DIFC and ADGM have distinct employment laws. Free-zone administration and salary-payment requirements also need checking for each entity.",
  },
  {
    q: "What is WPS?",
    a: "The Wage Protection System requires covered employers to pay salaries electronically through approved banks or exchange houses, so the Ministry of Human Resources and Emiratisation can check wages are paid on time. We prepare the salary file each month.",
  },
  {
    q: "Will we still approve the payroll?",
    a: "Yes. Every payroll is sent to you for review and approval before salaries are paid.",
  },
  {
    q: "How do you keep salary information confidential?",
    a: "Payroll data is accessible only to the team on your account, exchanged through agreed secure channels and covered by confidentiality and data protection obligations in our agreement.",
  },
  {
    q: "Should we send employee data through the website?",
    a: "No. Please don't send salaries, Emirates ID numbers, passport details or payroll files through our website forms. We set up a secure way to exchange data once we start working together.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing usually depends on headcount, the number of entities, pay frequency and the services included. Request a proposal and we'll prepare one for your requirements.",
  },
];
