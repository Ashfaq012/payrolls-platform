import type { Faq, FeatureItem, Industry, ProcessStep, Stat } from "../types";

export const stats: Stat[] = [
  {
    value: 1_000_000,
    suffix: "+",
    label: "Payrolls processed",
    scope: "group",
    approved: false,
    evidenceNote: "Proposed claim. Needs group-level evidence and approval to attribute it to this brand.",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Trusted clients",
    scope: "group",
    approved: false,
    evidenceNote: "Proposed claim. Needs a client count with a defined counting method.",
  },
];

export const why = {
  heading: "Why businesses choose Payrolls Lanka",
  intro:
    "Payroll is personal: it is people's pay, their tax and their savings. We run it with the care, controls and local knowledge it deserves.",
  items: [
    {
      title: "Payroll expertise",
      body: "Payroll is our core service, not a side line. Every cycle is prepared by specialists and checked before it reaches you.",
      icon: "calculator",
    },
    {
      title: "Local compliance knowledge",
      body: "We work with EPF, ETF, APIT and gratuity requirements every day and keep track of changes as they are announced.",
      icon: "shield",
    },
    {
      title: "Dedicated account support",
      body: "A named contact who knows your business, your pay structures and your deadlines.",
      icon: "headset",
    },
    {
      title: "Confidential information handling",
      body: "Salary data is shared only with the people who need it, through agreed secure channels, under confidentiality obligations.",
      icon: "lock",
    },
    {
      title: "Scalable business solutions",
      body: "Start with payroll and add HR outsourcing, staffing or recruitment as your business grows.",
      icon: "trending-up",
    },
    {
      title: "Multi-country workforce support",
      body: "Sister payroll operations are planned for India, Saudi Arabia and the UAE, for when your team crosses borders.",
      icon: "globe",
    },
  ] satisfies FeatureItem[],
};

export const process = {
  heading: "How it works",
  intro: "A clear, structured onboarding followed by a dependable monthly rhythm.",
  steps: [
    {
      title: "Consultation",
      body: "We learn about your workforce, pay structures, policies and current challenges.",
      points: ["Headcount and locations", "Pay components and policies", "Timeline and priorities"],
    },
    {
      title: "Requirements and setup",
      body: "We configure your payroll, agree input formats and cut-offs, and run a parallel check against your previous payroll.",
      points: ["Employee data migration", "Input templates and calendar", "Parallel run and sign-off"],
    },
    {
      title: "Payroll processing and review",
      body: "Every month we process your inputs, review the results and send the payroll to you for approval.",
      points: ["Gross-to-net calculation", "Independent review", "Your approval before payment"],
    },
    {
      title: "Reporting and ongoing support",
      body: "You receive payslips, statutory schedules and reports, plus continuing support from your account contact.",
      points: ["Payslips and bank files", "Statutory schedules", "Management reports"],
    },
  ] satisfies ProcessStep[],
};

export const industries: Industry[] = [
  {
    slug: "technology",
    name: "Technology",
    icon: "laptop",
    summary: "Fast-growing teams, competitive packages and frequent hiring.",
    considerations: ["Performance bonuses and variable pay", "Rapid onboarding of new joiners", "Remote and hybrid staff"],
  },
  {
    slug: "finance",
    name: "Finance",
    icon: "landmark",
    summary: "Strict controls, confidentiality and audit-ready records.",
    considerations: ["Segregation of duties", "Detailed audit trails", "Confidential executive payroll"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    summary: "Shift-based teams working around the clock.",
    considerations: ["Shift and night allowances", "Overtime calculations", "Locum and contract staff"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    icon: "truck",
    summary: "Distributed workforces across depots and routes.",
    considerations: ["Trip and incentive payments", "Multiple sites", "Variable attendance data"],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "hard-hat",
    summary: "Project-based crews and fluctuating headcount.",
    considerations: ["Daily-rated workers", "Project cost allocation", "Site allowances"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: "hotel",
    summary: "Seasonal peaks, service charge and shift rosters.",
    considerations: ["Service charge distribution", "Seasonal staffing", "Shift and holiday pay"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    summary: "Large shop-floor teams with shift and attendance complexity.",
    considerations: ["Shift rosters and overtime", "Attendance incentives", "Large-volume payroll runs"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "briefcase",
    summary: "Knowledge workers, billable teams and project costing.",
    considerations: ["Cost-centre reporting", "Professional allowances", "Partner and staff payroll separation"],
  },
];

export const faqs: Faq[] = [
  {
    q: "What does payroll outsourcing in Sri Lanka include?",
    a: "Typically salary calculation, EPF and ETF contributions, APIT withholding, payslips, bank payment files and payroll reports. We agree the exact scope with you during setup.",
  },
  {
    q: "How long does it take to start?",
    a: "It depends on your headcount and the condition of your data. Setup usually includes a parallel run against your previous payroll before we take over.",
  },
  {
    q: "Will we still approve the payroll?",
    a: "Yes. Every payroll is sent to you for review and approval before salaries are paid.",
  },
  {
    q: "How do you keep salary information confidential?",
    a: "Payroll data is accessible only to the team working on your account, is exchanged through agreed secure channels and is covered by confidentiality obligations in our agreement.",
  },
  {
    q: "Can you handle EPF, ETF and APIT for us?",
    a: "We calculate contributions and tax withholding and prepare the schedules and reports needed for remittance and filing. Payments are made from your accounts, or as agreed in your service scope.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes. Payroll outsourcing is often most valuable for smaller businesses that don't have a dedicated payroll specialist.",
  },
  {
    q: "Should we send employee data through the website?",
    a: "No. Please don't send salaries, ID numbers or payroll files through our website forms. We set up a secure way to exchange data once we start working together.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing usually depends on headcount, pay frequency and the services included. Request a proposal and we'll prepare one for your requirements.",
  },
];
