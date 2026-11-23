import type { ComplianceContent } from "../types";

/**
 * Educational compliance content for Sri Lanka.
 *
 * Figures checked against the linked CBSL, ETF Board and Department of Labour
 * sources on 2026-11-23. This records a source check, not professional legal sign-off.
 * Recheck the sources when legislation changes. See docs/CONTENT-APPROVALS.md.
 */
export const compliance: ComplianceContent = {
  heading: "Sri Lankan payroll compliance, explained",
  intro:
    "Every Sri Lankan payroll has to meet several statutory obligations. Here is an overview of the main ones and how we support each of them.",
  disclaimer:
    "This overview is general information, not legal or tax advice. Requirements depend on your workforce and change over time, so always confirm them against the official sources listed.",
  lastReviewed: "2026-11-23",
  topics: [
    {
      id: "epf",
      name: "EPF",
      fullName: "Employees' Provident Fund",
      icon: "landmark",
      summary:
        "A mandatory retirement savings scheme funded by employee and employer contributions, based on total monthly earnings as defined for EPF.",
      keyPoints: [
        "Applies to most private-sector employees under the Employees' Provident Fund Act",
        "Contributions are made by both employee and employer every month",
        "Monthly remittance is supported by member-wise contribution details",
      ],
      weHandle: [
        "Contribution calculations every pay cycle",
        "Member contribution schedules prepared for remittance",
        "Reconciliation of contributions against payroll",
      ],
      figures: [
        { label: "Employee contribution (minimum)", value: "8% of total monthly earnings", verified: true },
        { label: "Employer contribution (minimum)", value: "12% of total monthly earnings", verified: true },
      ],
      sources: [
        { label: "Central Bank of Sri Lanka — EPF contributions and earnings", href: "https://epf.lk/?p=171" },
        { label: "Department of Labour — EPF", href: "https://labourdept.gov.lk/epf-division-new/" },
      ],
    },
    {
      id: "etf",
      name: "ETF",
      fullName: "Employees' Trust Fund",
      icon: "landmark",
      summary:
        "An employer-funded contribution scheme managed by the Employees' Trust Fund Board, paid alongside EPF obligations.",
      keyPoints: [
        "Paid entirely by the employer; it must not be deducted from employees' pay",
        "Calculated on total monthly earnings as defined by the ETF Board",
        "Periodic member returns are required in addition to payments",
      ],
      weHandle: [
        "Employer contribution calculations",
        "Contribution schedules and supporting returns",
        "Alignment of ETF and EPF earnings bases",
      ],
      figures: [{ label: "Employer contribution", value: "3% of total monthly earnings", verified: true }],
      sources: [{ label: "ETF Board — employer contributions and earnings", href: "https://etfb.lk/employer-details/" }],
    },
    {
      id: "apit",
      name: "APIT",
      fullName: "Advance Personal Income Tax",
      icon: "file-check",
      summary:
        "Income tax withheld by employers from employment income under the Inland Revenue Act and remitted to the Inland Revenue Department.",
      keyPoints: [
        "Employers withhold tax from employment income using tax tables issued by the Inland Revenue Department",
        "Tax tables and thresholds are revised periodically, so they must be kept current",
        "Withheld tax is remitted and reported within prescribed deadlines",
      ],
      weHandle: [
        "APIT calculations using the current tables",
        "Monthly withholding reports",
        "Year-end employee tax documentation support",
      ],
      sources: [{ label: "Inland Revenue Department — APIT guidance", href: "https://www.ird.gov.lk/en/Type%20of%20Taxes/SitePages/Advance%20Personal%20Income%20Tax%20%28APIT%29.aspx" }],
    },
    {
      id: "gratuity",
      name: "Gratuity",
      fullName: "Payment of Gratuity",
      icon: "scale",
      summary:
        "A lump-sum payment owed to eligible employees when they leave after a qualifying period of service, under the Payment of Gratuity Act.",
      keyPoints: [
        "Section 5 covers employers with 15 or more workers on any day in the 12 months before employment ends",
        "Payment is due within 30 days of employment ending, subject to the Act's exclusions and conditions",
        "Other than monthly-paid workers: 14 days' wages per completed year; piece-rate daily pay uses earnings divided by days worked over the preceding three months",
        "More favourable agreements may apply; see sections 5–7 and 10 for eligibility and calculation rules",
      ],
      weHandle: [
        "Service-period tracking for every employee",
        "Gratuity calculations when employees leave",
        "Liability estimates to support financial reporting",
      ],
      figures: [
        { label: "Qualifying service under section 5", value: "At least 5 completed years with the employer", verified: true },
        { label: "Monthly-paid workers", value: "Half the last-drawn monthly wage or salary per completed year", verified: true },
      ],
      sources: [{ label: "Department of Labour — Payment of Gratuity Act, sections 5–7 and 10", href: "https://labourdept.gov.lk/downloads/labour_code/55.pdf" }],
    },
  ],
};
