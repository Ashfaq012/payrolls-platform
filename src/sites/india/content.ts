import type { Faq, FeatureItem, Industry, ProcessStep, Stat } from "../types";

/** No India-specific figures exist yet. Group figures must not be attributed to this brand without approval. */
export const stats: Stat[] = [
  {
    value: 1_000_000,
    suffix: "+",
    label: "Payrolls processed",
    scope: "group",
    approved: false,
    evidenceNote: "Group-level figure proposed for reuse. Needs evidence and approval before it can appear on the India site.",
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
  heading: "Why businesses choose Payrolls India",
  intro:
    "Indian payroll combines central laws, state rules and employee tax-regime declarations. We bring the process, controls and local knowledge to get it right every month.",
  items: [
    {
      title: "Payroll is our core service",
      body: "Every cycle is prepared by payroll specialists and independently reviewed before it reaches you for approval.",
      icon: "calculator",
    },
    {
      title: "Central and state compliance",
      body: "PF, ESI and TDS under central law, plus professional tax, labour welfare fund and shops and establishments rules that differ state by state.",
      icon: "shield",
    },
    {
      title: "Labour codes, applied carefully",
      body: "We track how the new labour codes and their state rules affect wage definitions, contributions and gratuity, and apply changes as they take effect.",
      icon: "scale",
    },
    {
      title: "Dedicated account support",
      body: "A named contact who knows your pay structures, your states and your deadlines.",
      icon: "headset",
    },
    {
      title: "Confidential data handling",
      body: "Salary and identity data is shared only with the people who need it, through agreed secure channels.",
      icon: "lock",
    },
    {
      title: "Multi-country workforce support",
      body: "Sister operations in Sri Lanka, with Saudi Arabia and the UAE planned, for when your team crosses borders.",
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
      body: "We learn about your workforce, the states you operate in, your salary structures and current challenges.",
      points: ["Headcount by state and location", "CTC structures and policies", "Timeline and priorities"],
    },
    {
      title: "Requirements and setup",
      body: "We configure salary structures, statutory registrations and cut-offs, and run a parallel check against your previous payroll.",
      points: ["Employee and UAN/IP data migration", "Input templates and calendar", "Parallel run and sign-off"],
    },
    {
      title: "Payroll processing and review",
      body: "Every month we process your inputs, compute statutory deductions, review the results and send the payroll for approval.",
      points: ["Gross-to-net with regime-wise TDS", "Independent review", "Your approval before payment"],
    },
    {
      title: "Reporting and filings",
      body: "You receive payslips, bank files, challans and returns, plus continuing support from your account contact.",
      points: ["Payslips and bank files", "PF, ESI, PT and TDS filings support", "Management reports"],
    },
  ] satisfies ProcessStep[],
};

export const industries: Industry[] = [
  {
    slug: "technology",
    name: "Technology and SaaS",
    icon: "laptop",
    summary: "Fast hiring, ESOPs, variable pay and flexible benefit plans.",
    considerations: ["Flexible benefit plan (FBP) components", "Variable pay and joining bonuses", "Remote staff across several states"],
  },
  {
    slug: "global-capability-centres",
    name: "Global Capability Centres",
    icon: "globe",
    summary: "International companies running captive teams in India.",
    considerations: ["Parent-company reporting formats", "Expatriate and secondee payroll", "Audit-ready controls from day one"],
  },
  {
    slug: "bfsi",
    name: "Banking, Financial Services and Insurance",
    icon: "landmark",
    summary: "Strict controls, confidentiality and regulator-ready records.",
    considerations: ["Segregation of duties", "Confidential senior management payroll", "Detailed audit trails"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart-pulse",
    summary: "Round-the-clock shifts across hospitals, clinics and labs.",
    considerations: ["Shift and night allowances", "Overtime under state rules", "Consultants and contract staff"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "factory",
    summary: "Large shop-floor teams with shifts, attendance and ESI coverage.",
    considerations: ["Shift rosters and overtime", "ESI coverage for lower-wage staff", "Contract workforce compliance"],
  },
  {
    slug: "logistics",
    name: "Logistics and E-commerce",
    icon: "truck",
    summary: "Distributed teams across warehouses, hubs and routes.",
    considerations: ["Multi-state professional tax", "Incentive and trip payments", "High joiner and leaver volumes"],
  },
  {
    slug: "retail",
    name: "Retail and Hospitality",
    icon: "hotel",
    summary: "Store and outlet teams with rosters and seasonal peaks.",
    considerations: ["Shops and establishments rules by state", "Seasonal staffing", "Holiday and weekly-off pay"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "briefcase",
    summary: "Knowledge workers, billable teams and project costing.",
    considerations: ["Cost-centre reporting", "Reimbursement handling", "Partner and staff payroll separation"],
  },
];

export const faqs: Faq[] = [
  {
    q: "What does payroll outsourcing in India include?",
    a: "Typically salary calculation, PF and ESI contributions, TDS on salary, professional tax, payslips, bank payment files and payroll reports. We agree the exact scope during setup.",
  },
  {
    q: "Can you run payroll for employees in several states?",
    a: "Yes. We apply each state's professional tax, labour welfare fund and holiday rules while keeping one process, one calendar and one set of reports for you.",
  },
  {
    q: "How do you handle the old and new tax regimes?",
    a: "We collect annual tax-regime intimations and relevant evidence. The new regime is the default if no intimation is received. We compute salary TDS under the applicable year's rules; payroll intimation is separate from the employee's final income-tax return option.",
  },
  {
    q: "Will we still approve the payroll?",
    a: "Yes. Every payroll is sent to you for review and approval before salaries are paid.",
  },
  {
    q: "How do the new labour codes affect our payroll?",
    a: "The codes change how wages are defined, which can affect PF, gratuity and other calculations. We review your salary structure against them during setup and flag anything that needs a decision. For legal interpretation, we recommend your legal adviser.",
  },
  {
    q: "How do you keep salary information confidential?",
    a: "Payroll data is accessible only to the team on your account, exchanged through agreed secure channels and covered by confidentiality and data protection obligations in our agreement.",
  },
  {
    q: "Should we send employee data through the website?",
    a: "No. Please don't send salaries, PAN, Aadhaar or payroll files through our website forms. We set up a secure way to exchange data once we start working together.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing usually depends on headcount, the number of states, pay frequency and the services included. Request a proposal and we'll prepare one for your requirements.",
  },
];
