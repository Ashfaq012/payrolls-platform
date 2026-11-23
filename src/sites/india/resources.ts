import type { ResourceArticle } from "../types";
import { reviewedOn, sources } from "./sources";

/** Official sources reviewed; publication and professional approval remain separate. */
export const resources: ResourceArticle[] = [
  {
    slug: "pf-and-esi-guide-for-employers",
    status: "draft",
    type: "guide",
    title: "PF and ESI: a practical guide for employers in India",
    metaDescription:
      "How PF and ESI work for Indian employers: who is covered, how contributions are calculated, and how to keep monthly filings on track.",
    excerpt: "Who is covered, how contributions are calculated, and how to keep monthly filings on track.",
    readingMinutes: 3,
    publishedAt: null,
    lastReviewed: reviewedOn,
    body: [
      {
        heading: "Two schemes, two authorities",
        paragraphs: [
          "The Employees' Provident Fund (PF) is administered by the EPFO and provides retirement savings and a pension. Employees' State Insurance (ESI) is administered by ESIC and provides health and social insurance for employees up to a wage threshold.",
          "EPF generally covers establishments with at least 20 employees. The usual employee and employer rate is 12%, with 10% for specified establishments. EPS allocation depends on pension eligibility; EDLI and administration charges are additional. The Ministry's October 2026 FAQs refer to a ₹25,000 EPF ceiling, while EPFO's older contribution sheet still shows ₹15,000. Use the newer guidance with the applicable notified scheme; do not treat either figure as an automatically verified EPS ceiling.",
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
        heading: "ESI eligibility and exemptions",
        paragraphs: [
          "ESI coverage depends on the establishment and applicable notification, generally from 10 employees. ESIC specifies an ordinary monthly wage ceiling of ₹21,000 and ₹25,000 for persons with disabilities. Contributions are 0.75% from employees and 3.25% from employers. Average daily wages up to ₹176 exempt the employee share, but not the employer share. Check continuing coverage during the contribution period before stopping deductions after a pay rise.",
        ],
      },
    ],
    sources: [sources.pf, sources.esi, sources.labour],
  },
  {
    slug: "tds-on-salary",
    status: "draft",
    type: "guide",
    title: "TDS on salary: an employer's guide",
    metaDescription:
      "An employer's overview of TDS on salary in India: tax regimes, monthly deductions, investment declarations and quarterly and annual reporting.",
    excerpt: "Tax regimes, monthly deductions, investment proofs and what's due each quarter and year end.",
    readingMinutes: 3,
    publishedAt: null,
    lastReviewed: reviewedOn,
    body: [
      {
        heading: "What TDS on salary is",
        paragraphs: [
          "Employers deduct income tax from salaries each month, based on each employee's estimated income for the year, and deposit it with the government.",
          "The Income-tax Act, 2025 applies from 1 April 2026. Salary withholding is under section 392 for tax year 2026-27. Returns and corrections relating to earlier periods must use the applicable earlier law and forms; the filing date alone does not determine the regime.",
        ],
      },
      {
        heading: "Old and new regimes",
        paragraphs: [
          "The new regime is the default for salary TDS. Obtain an annual regime intimation, apply the deductions allowed under that regime and collect supporting evidence where required. Payroll intimation does not itself exercise the employee's final tax-return option; eligibility and switching rules also depend on whether there is business or professional income.",
        ],
      },
      {
        heading: "The annual cycle",
        paragraphs: ["A typical year includes:"],
        bullets: [
          "Regime choice and investment declarations at the start of the year",
          "Monthly deduction and deposit",
          "For tax year 2026-27: quarterly Form 138, formerly Form 24Q; ordinary deadlines are 31 July, 31 October, 31 January and 31 May following the year, subject to notified extensions",
          "Evidence under Form 124 where applicable, then salary TDS certificate Form 130 under the 2026 Rules; use the earlier forms for earlier periods",
        ],
      },
    ],
    sources: [sources.tds, sources.forms, sources.quarterly],
  },
  {
    slug: "professional-tax-by-state",
    status: "draft",
    type: "guide",
    title: "Professional tax and labour welfare fund across Indian states",
    metaDescription:
      "How professional tax and labour welfare fund contributions vary across Indian states, and how to manage them when you employ people in several states.",
    excerpt: "Why state levies trip up multi-state employers, and how to stay on top of them.",
    readingMinutes: 3,
    publishedAt: null,
    lastReviewed: reviewedOn,
    body: [
      {
        heading: "State-level obligations",
        paragraphs: [
          "Professional tax is levied by states, not the central government. Slabs, due dates and registration rules differ, and some states don't levy it. The Constitution caps it at ₹2,500 a year per person.",
          "Labour welfare funds are separate from professional tax. Coverage, employee and employer shares, exclusions and payment periods depend on state legislation. The Maharashtra tax law and Labour Welfare Board linked below are state examples, not rules for every Indian state.",
        ],
      },
      {
        heading: "Managing several states",
        paragraphs: [
          "Determine the relevant state law from the establishment and employment arrangements, then check employee categories, salary slabs, exemptions, registrations and deadlines. Work location is an input, not a universal legal test. Reassess transfers and remote working instead of applying one nationwide rate.",
        ],
      },
    ],
    sources: [sources.pt, sources.maharashtra, sources.lwf],
  },
  {
    slug: "labour-codes-and-payroll",
    status: "draft",
    type: "article",
    title: "India's labour codes: what changes for payroll",
    metaDescription:
      "How India's four labour codes, in force since November 2025, affect wage definitions, PF, gratuity and payroll processes.",
    excerpt: "The wage definition, fixed-term gratuity and what to review in your salary structure.",
    readingMinutes: 3,
    publishedAt: null,
    lastReviewed: reviewedOn,
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
          "Apply the statutory wage definition component by component: specified exclusions above 50% of remuneration are added back. This does not prescribe basic salary as 50% of CTC. The effect on contributions depends on scheme coverage and ceilings.",
        ],
      },
      {
        heading: "What to review",
        paragraphs: ["Employers are reviewing:"],
        bullets: [
          "Salary structures against the wage definition",
          "Fixed-term gratuity after one year under the contract; usual five-year eligibility has death and disablement exceptions",
          "Gratuity payment within 30 days of becoming payable; do not assume every exit benefit has the same deadline",
          "State rules as they are notified",
        ],
      },
    ],
    sources: [sources.labour],
  },
];
