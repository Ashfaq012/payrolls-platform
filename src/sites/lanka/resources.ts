import type { ResourceArticle } from "../types";

/**
 * Official-source checks completed on 2026-11-23. Review dates record those
 * checks; draft status is retained pending editorial/professional approval.
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
    readingMinutes: 2,
    publishedAt: null,
    lastReviewed: "2026-11-23",
    body: [
      {
        heading: "What EPF and ETF are",
        paragraphs: [
          "The Employees' Provident Fund (EPF) and the Employees' Trust Fund (ETF) are two separate statutory schemes. EPF is funded by employee and employer contributions. ETF is funded by the employer.",
          "For covered employees, EPF contributions are at least 8% from the employee and 12% from the employer. ETF is a separate 3% employer contribution and must not be deducted from the employee's pay.",
          "Use each scheme's definition of total monthly earnings, not basic salary alone. CBSL's EPF guidance includes qualifying allowances, holiday pay, food benefits, commissions and piece-rate payments. Check the linked earnings definitions when classifying pay components.",
        ],
      },
      {
        heading: "Monthly responsibilities",
        paragraphs: ["EPF and ETF contributions must reach the respective fund by the last working day of the following month. Late payment can attract surcharges."],
        bullets: [
          "Calculate contributions for every covered employee each month",
          "Deduct the employee's EPF share from salary",
          "Submit contribution details using the applicable fund's return process",
          "Keep records that reconcile contributions to payroll",
        ],
      },
      {
        heading: "Electronic returns and coverage",
        paragraphs: [
          "CBSL requires monthly electronic EPF returns from employers with at least 50 employees. For ETF, employers with at least 15 employees must pay electronically and submit monthly electronic returns under the rules effective from 1 February 2023.",
          "A small headcount does not by itself exempt an employer from ETF. Coverage and specific exemptions should be checked against the ETF Board's employer guidance.",
        ],
      },
    ],
    sources: [
      { label: "CBSL — EPF rates, earnings, deadlines and returns", href: "https://epf.lk/?p=171" },
      { label: "ETF Board — coverage, earnings and contribution rate", href: "https://etfb.lk/employer-details/" },
      { label: "ETF Board — payment deadlines and electronic returns", href: "https://etfb.lk/payment-of-contributions/" },
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
    readingMinutes: 2,
    publishedAt: null,
    lastReviewed: "2026-11-23",
    body: [
      {
        heading: "What APIT is",
        paragraphs: [
          "APIT is income tax withheld by employers from taxable employment income and paid to the Inland Revenue Department (IRD). Section 83A of the Inland Revenue Act, as amended, requires deductions when remuneration is paid, using the applicable IRD tables.",
        ],
      },
      {
        heading: "Choose the table for the payment",
        paragraphs: [
          "APIT is not a single flat percentage applied to every salary. IRD publishes separate instructions for regular primary-employment income, lump sums, terminal benefits, secondary employment and other cases.",
          "Use the tables and instructions applicable to the payment period and employee's circumstances. The official index separates the 2025–2026 tables from older years; check effective dates and subsequent IRD notices before processing payroll.",
        ],
      },
      {
        heading: "Monthly payment and annual filing",
        paragraphs: [
          "The normal deadline for remitting APIT deducted in a month is the 15th of the following month. IRD states that the Annual Statement of Employer is submitted online by 30 April of the following year of assessment.",
          "Check IRD notices for any period-specific extensions. Reconcile payroll deductions with payments and use the relevant assessment year's forms and filing instructions.",
        ],
      },
    ],
    sources: [
      { label: "IRD — APIT obligations and filing deadlines", href: "https://www.ird.gov.lk/en/Type%20of%20Taxes/SitePages/Advance%20Personal%20Income%20Tax%20%28APIT%29.aspx" },
      { label: "IRD — official APIT tables and application instructions", href: "https://www.ird.gov.lk/en/publications/sitepages/apit_tax_tables.aspx?menuid=1502" },
    ],
  },
  {
    slug: "gratuity-in-sri-lanka",
    status: "draft",
    type: "guide",
    title: "Gratuity in Sri Lanka: what employers should know",
    metaDescription:
      "An overview of gratuity obligations under Sri Lanka's Payment of Gratuity Act: eligibility, calculation basis and planning for the liability.",
    excerpt: "Eligibility, calculation basis, and why it pays to plan for the liability early.",
    readingMinutes: 2,
    publishedAt: null,
    lastReviewed: "2026-11-23",
    body: [
      {
        heading: "Who qualifies under section 5",
        paragraphs: [
          "The Payment of Gratuity Act covers a worker with at least five completed years under an employer that employed 15 or more workers on any day in the 12 months before employment ended. This includes resignation, retirement and death, subject to the Act's conditions and exclusions.",
        ],
      },
      {
        heading: "How the amount is calculated",
        paragraphs: [
          "Section 6 provides half the last-drawn monthly wage or salary per completed year for monthly-paid workers. Other workers receive 14 days' wages per completed year. For piece-rate workers, the daily rate uses earnings divided by days worked over the preceding three months.",
          "Use the Act's wage definition in section 20. More favourable agreements can apply under section 10; the statutory amount is not automatically an additional payment on top of those benefits.",
        ],
      },
      {
        heading: "Payment and exceptions",
        paragraphs: [
          "Payment is due within 30 days after employment ends; late payment attracts statutory surcharges. Section 7 excludes private-household domestic servants and personal chauffeurs, and workers entitled to a non-contributory pension. Other special provisions may apply. For cases outside section 5, seek advice on any separate contractual or Labour Tribunal entitlement.",
        ],
      },
    ],
    sources: [{ label: "Department of Labour — Payment of Gratuity Act, sections 5–7, 10, 17 and 20", href: "https://labourdept.gov.lk/downloads/labour_code/55.pdf" }],
  },
];
