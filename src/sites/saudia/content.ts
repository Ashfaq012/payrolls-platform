import type { Faq, FeatureItem, Industry, ProcessStep, Stat } from "../types";

/** No Saudi-specific figures exist yet. Group figures must not be attributed to this brand without approval. */
export const stats: Stat[] = [
  {
    value: 1_000_000,
    suffix: "+",
    label: "Payrolls processed",
    scope: "group",
    approved: false,
    evidenceNote: "Group-level figure proposed for reuse. Needs evidence and approval before it can appear on the Saudi site.",
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
  heading: "Why businesses choose Payroll Saudia",
  intro:
    "Saudi payroll runs through government platforms, with different rules for Saudi and expatriate employees. We bring the process, controls and local knowledge to get it right every month.",
  items: [
    {
      title: "Payroll is our core service",
      body: "Every cycle is prepared by payroll specialists and independently reviewed before it reaches you for approval.",
      icon: "calculator",
    },
    {
      title: "Government platforms, handled",
      body: "We work with GOSI, Mudad and Qiwa every day, so contributions, wage files and contract data stay consistent.",
      icon: "shield",
    },
    {
      title: "Saudi and expatriate payroll",
      body: "Different GOSI treatment, end-of-service rules and documentation for each group, applied correctly in one payroll.",
      icon: "users",
    },
    {
      title: "Dedicated account support",
      body: "A named contact who knows your pay structures, your workforce mix and your deadlines.",
      icon: "headset",
    },
    {
      title: "Confidential data handling",
      body: "Salary and identity data is shared only with the people who need it, through agreed secure channels, in line with Saudi data protection law.",
      icon: "lock",
    },
    {
      title: "Multi-country workforce support",
      body: "Sister operations in India and Sri Lanka, with the UAE planned, for when your team crosses borders.",
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
      body: "We learn about your workforce, your mix of Saudi and expatriate staff, your pay structures and current challenges.",
      points: ["Headcount, nationality mix and locations", "Allowances and policies", "Timeline and priorities"],
    },
    {
      title: "Requirements and setup",
      body: "We configure pay structures, reconcile employee data with GOSI and Qiwa records, agree cut-offs and run a parallel check.",
      points: ["Employee data migration and reconciliation", "Input templates and calendar", "Parallel run and sign-off"],
    },
    {
      title: "Payroll processing and review",
      body: "Every month we process your inputs, calculate GOSI and accruals, review the results and send the payroll for approval.",
      points: ["Gross-to-net calculation", "Independent review", "Your approval before payment"],
    },
    {
      title: "Reporting and WPS",
      body: "You receive payslips, the bank salary file and the WPS wage file for Mudad, plus continuing support from your account contact.",
      points: ["Payslips and bank files", "WPS wage file and GOSI updates", "End-of-service and leave accrual reports"],
    },
  ] satisfies ProcessStep[],
};

export const industries: Industry[] = [
  {
    slug: "construction",
    name: "Construction and Infrastructure",
    icon: "hard-hat",
    summary: "Large project workforces, site allowances and fluctuating headcount.",
    considerations: ["Site and remote-location allowances", "Overtime at statutory rates", "Project cost allocation"],
  },
  {
    slug: "energy",
    name: "Energy and Industrial",
    icon: "factory",
    summary: "Rotational schedules and specialist expatriate teams.",
    considerations: ["Rotation and field allowances", "Expatriate packages and benefits", "Occupational hazard coverage"],
  },
  {
    slug: "hospitality",
    name: "Hospitality and Tourism",
    icon: "hotel",
    summary: "Fast-growing teams for hotels, venues and visitor services.",
    considerations: ["Shift and Ramadan working hours", "Service charge and tips", "Rapid hiring and Saudization targets"],
  },
  {
    slug: "retail",
    name: "Retail",
    icon: "briefcase",
    summary: "Store teams across cities, with strict Saudization rules in many roles.",
    considerations: ["Nitaqat tracking by activity", "Shift rosters", "Commission and incentive pay"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    summary: "Clinical teams with licensing, shifts and on-call pay.",
    considerations: ["Shift, night and on-call allowances", "Expatriate clinical staff", "Medical insurance administration"],
  },
  {
    slug: "technology",
    name: "Technology",
    icon: "laptop",
    summary: "Regional headquarters and fast-scaling tech teams.",
    considerations: ["Competitive packages and bonuses", "Regional HQ reporting", "Saudi talent programmes"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "truck",
    summary: "Drivers, warehouses and distributed operations.",
    considerations: ["Trip and incentive payments", "Multiple sites and cities", "High joiner and leaver volumes"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "landmark",
    summary: "Knowledge workers, billable teams and project costing.",
    considerations: ["Cost-centre reporting", "Housing and transport allowances", "Partner and staff payroll separation"],
  },
];

export const faqs: Faq[] = [
  {
    q: "What does payroll outsourcing in Saudi Arabia include?",
    a: "Typically salary calculation, GOSI contributions and updates, the WPS wage file for Mudad, payslips, bank salary files, end-of-service and leave accruals, and payroll reports. We agree the exact scope during setup.",
  },
  {
    q: "Is income tax deducted from salaries in Saudi Arabia?",
    a: "Saudi Arabia does not currently levy personal income tax on employment income, so payroll has no income tax withholding. The main statutory deduction is the employee share of GOSI for covered employees.",
  },
  {
    q: "Do you handle payroll for both Saudi and expatriate employees?",
    a: "Yes. GOSI contributions and some benefits differ between the two groups, and we apply the right treatment to each employee in a single payroll.",
  },
  {
    q: "What is the Wage Protection System?",
    a: "WPS requires private-sector employers to pay salaries through banks and submit monthly wage files through the Mudad platform, so the Ministry can check that wages match contracts. We prepare the file each month.",
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
    a: "No. Please don't send salaries, national ID or Iqama numbers, passport details or payroll files through our website forms. We set up a secure way to exchange data once we start working together.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing usually depends on headcount, pay frequency and the services included. Request a proposal and we'll prepare one for your requirements.",
  },
];
