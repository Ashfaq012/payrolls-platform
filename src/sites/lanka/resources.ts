import type { ResourceArticle } from "../types";

/**
 * Compliance guides. All remain drafts until reviewed by a qualified
 * Sri Lankan payroll/tax professional and given a lastReviewed date.
 */
export const resources: ResourceArticle[] = [
  {
    slug: "epf-etf-guide-for-employers",
    status: "draft",
    type: "guide",
    title: "EPF and ETF: a practical guide for employers in Sri Lanka",
    metaDescription:
      "How EPF and ETF contributions work for Sri Lankan employers: who is covered, how contributions are calculated, and how to stay on top of monthly obligations.",
    excerpt: "Who is covered, how contributions are calculated, and how to keep monthly remittances on track.",
    readingMinutes: 6,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "What EPF and ETF are",
        paragraphs: [
          "The Employees' Provident Fund (EPF) and the Employees' Trust Fund (ETF) are two separate statutory schemes. EPF is funded by employee and employer contributions. ETF is funded by the employer.",
          "Both are calculated on an employee's total earnings, so the definition of earnings used in your payroll matters.",
        ],
      },
      {
        heading: "Monthly responsibilities",
        paragraphs: ["Employers typically need to:"],
        bullets: [
          "Calculate contributions for every covered employee each month",
          "Deduct the employee's EPF share from salary",
          "Remit contributions with member-wise details by the applicable deadline",
          "Keep records that reconcile contributions to payroll",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "Leaving allowances out of the earnings base, registering new joiners late, and remitting late are among the most common problems. Each can lead to surcharges and member complaints.",
        ],
      },
    ],
    sources: [
      { label: "Employees' Provident Fund — Central Bank of Sri Lanka", href: "https://epf.lk" },
      { label: "Employees' Trust Fund Board", href: "https://www.etfb.lk" },
    ],
  },
  {
    slug: "apit-for-employers",
    status: "draft",
    type: "guide",
    title: "APIT explained: tax withholding on employment income",
    metaDescription:
      "An employer's overview of Advance Personal Income Tax (APIT) in Sri Lanka: how withholding works, keeping tax tables current and year-end responsibilities.",
    excerpt: "How withholding works, why tax tables must stay current, and what happens at year end.",
    readingMinutes: 5,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "What APIT is",
        paragraphs: [
          "Advance Personal Income Tax (APIT) is the tax employers withhold from employees' employment income under the Inland Revenue Act and remit to the Inland Revenue Department.",
        ],
      },
      {
        heading: "Keeping tables current",
        paragraphs: [
          "The Inland Revenue Department publishes the tax tables used for withholding. When tables or thresholds change, payroll must apply them from the effective date.",
        ],
      },
      {
        heading: "Year-end",
        paragraphs: [
          "Employers have year-end reporting obligations and should provide employees with the information they need for their own tax affairs.",
        ],
      },
    ],
    sources: [{ label: "Inland Revenue Department", href: "https://www.ird.gov.lk" }],
  },
  {
    slug: "gratuity-in-sri-lanka",
    status: "draft",
    type: "guide",
    title: "Gratuity in Sri Lanka: what employers should know",
    metaDescription:
      "An overview of gratuity obligations under Sri Lanka's Payment of Gratuity Act: eligibility, calculation basis and planning for the liability.",
    excerpt: "Eligibility, calculation basis, and why it pays to plan for the liability early.",
    readingMinutes: 5,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "The basics",
        paragraphs: [
          "Gratuity is a lump-sum payment owed to eligible employees when their employment ends after a qualifying period of service, under the Payment of Gratuity Act.",
        ],
      },
      {
        heading: "Planning for the liability",
        paragraphs: [
          "Because gratuity builds up with every year of service, many employers track the liability throughout employment rather than meeting it only when someone leaves.",
        ],
      },
    ],
    sources: [{ label: "Department of Labour", href: "https://www.labourdept.gov.lk" }],
  },
];
