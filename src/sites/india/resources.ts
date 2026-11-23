import type { ResourceArticle } from "../types";

/**
 * Compliance guides. All remain drafts until reviewed by a qualified
 * Indian payroll or tax professional and given a lastReviewed date.
 */
export const resources: ResourceArticle[] = [
  {
    slug: "pf-and-esi-guide-for-employers",
    status: "draft",
    type: "guide",
    title: "PF and ESI: a practical guide for employers in India",
    metaDescription:
      "How PF and ESI work for Indian employers: who is covered, how contributions are calculated, and how to keep monthly filings on track.",
    excerpt: "Who is covered, how contributions are calculated, and how to keep monthly filings on track.",
    readingMinutes: 7,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "Two schemes, two authorities",
        paragraphs: [
          "The Employees' Provident Fund (PF) is administered by the EPFO and provides retirement savings and a pension. Employees' State Insurance (ESI) is administered by ESIC and provides health and social insurance for employees up to a wage threshold.",
          "Both now sit under the Code on Social Security, 2020, and both are calculated on wages, so the definition of wages in your salary structure matters.",
        ],
      },
      {
        heading: "Monthly responsibilities",
        paragraphs: ["Employers typically need to:"],
        bullets: [
          "Register new joiners and link them to a UAN (PF) or IP number (ESI)",
          "Calculate employee and employer contributions on the correct wage base",
          "Deposit contributions and file the PF ECR and ESI return by the due dates",
          "Keep records that reconcile contributions to payroll",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "Excluding allowances that should count as wages, missing ESI coverage when an employee's wages fall below the threshold, and late deposits are among the most common problems. Each can lead to interest, damages and employee complaints.",
        ],
      },
    ],
    sources: [
      { label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" },
      { label: "Employees' State Insurance Corporation", href: "https://www.esic.gov.in" },
    ],
  },
  {
    slug: "tds-on-salary",
    status: "draft",
    type: "guide",
    title: "TDS on salary: an employer's guide",
    metaDescription:
      "An employer's overview of TDS on salary in India: tax regimes, monthly deductions, investment declarations and quarterly and annual reporting.",
    excerpt: "Tax regimes, monthly deductions, investment proofs and what's due each quarter and year end.",
    readingMinutes: 6,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "What TDS on salary is",
        paragraphs: [
          "Employers deduct income tax from salaries each month, based on each employee's estimated income for the year, and deposit it with the government.",
          "The Income-tax Act, 2025 replaces the Income-tax Act, 1961 from 1 April 2026. The underlying obligation is the same, but section numbers and form names have changed.",
        ],
      },
      {
        heading: "Old and new regimes",
        paragraphs: [
          "The new tax regime is the default. Employees can choose the old regime, which allows more deductions and exemptions. Their choice changes the TDS calculation, so collect it at the start of the year.",
        ],
      },
      {
        heading: "The annual cycle",
        paragraphs: ["A typical year includes:"],
        bullets: [
          "Regime choice and investment declarations at the start of the year",
          "Monthly deduction and deposit",
          "Quarterly TDS statements",
          "Proof collection before the year closes, then annual tax certificates for employees",
        ],
      },
    ],
    sources: [
      { label: "Income Tax Department", href: "https://www.incometaxindia.gov.in" },
      { label: "TRACES", href: "https://www.tdscpc.gov.in" },
    ],
  },
  {
    slug: "professional-tax-by-state",
    status: "draft",
    type: "guide",
    title: "Professional tax and labour welfare fund across Indian states",
    metaDescription:
      "How professional tax and labour welfare fund contributions vary across Indian states, and how to manage them when you employ people in several states.",
    excerpt: "Why state levies trip up multi-state employers, and how to stay on top of them.",
    readingMinutes: 5,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "State-level obligations",
        paragraphs: [
          "Professional tax is levied by states, not the central government. Slabs, due dates and registration rules differ, and some states don't levy it. The Constitution caps it at ₹2,500 a year per person.",
          "Labour welfare fund contributions are also set by individual states, with different amounts and frequencies.",
        ],
      },
      {
        heading: "Managing several states",
        paragraphs: [
          "Deductions follow the employee's place of work, so transfers and remote employees need care. A single compliance calendar covering every state you operate in is the simplest way to avoid missed returns.",
        ],
      },
    ],
    sources: [{ label: "National Portal of India", href: "https://www.india.gov.in" }],
  },
  {
    slug: "labour-codes-and-payroll",
    status: "draft",
    type: "article",
    title: "India's labour codes: what changes for payroll",
    metaDescription:
      "How India's four labour codes, in force since November 2025, affect wage definitions, PF, gratuity and payroll processes.",
    excerpt: "The wage definition, fixed-term gratuity and what to review in your salary structure.",
    readingMinutes: 6,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "Four codes in place of 29 laws",
        paragraphs: [
          "The Code on Wages, the Industrial Relations Code, the Code on Social Security and the Occupational Safety, Health and Working Conditions Code took effect on 21 November 2025. Central and state rules are being notified in stages.",
        ],
      },
      {
        heading: "The wage definition",
        paragraphs: [
          "The codes use one definition of wages. Where excluded allowances exceed a set share of total pay, the excess is added back to wages. For salary structures with a low basic component, this can increase PF and gratuity costs and change take-home pay.",
        ],
      },
      {
        heading: "What to review",
        paragraphs: ["Employers are reviewing:"],
        bullets: [
          "Salary structures against the wage definition",
          "Gratuity eligibility for fixed-term employees",
          "Timelines for paying full and final settlements",
          "State rules as they are notified",
        ],
      },
    ],
    sources: [{ label: "Ministry of Labour and Employment", href: "https://labour.gov.in" }],
  },
];
