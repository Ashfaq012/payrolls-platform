import type { ComplianceContent } from "../types";

/**
 * Educational compliance content for Sri Lanka.
 *
 * Figures are marked `verified: false` until checked against the official
 * source by a qualified reviewer. Unverified figures render with a
 * "verify" badge rather than as settled fact. See docs/CONTENT-APPROVALS.md.
 */
export const compliance: ComplianceContent = {
  heading: "Sri Lankan payroll compliance, explained",
  intro:
    "Every Sri Lankan payroll has to meet several statutory obligations. Here is an overview of the main ones and how we support each of them.",
  disclaimer:
    "This overview is general information, not legal or tax advice. Requirements depend on your workforce and change over time, so always confirm them against the official sources listed.",
  lastReviewed: null,
  topics: [
    {
      id: "epf",
      name: "EPF",
      fullName: "Employees' Provident Fund",
      icon: "landmark",
      summary:
        "A mandatory retirement savings scheme funded by both employee and employer contributions, calculated on an employee's total earnings.",
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
        { label: "Employee contribution (minimum)", value: "8% of total earnings", verified: false },
        { label: "Employer contribution (minimum)", value: "12% of total earnings", verified: false },
      ],
      sources: [
        { label: "Employees' Provident Fund — Central Bank of Sri Lanka", href: "https://epf.lk" },
        { label: "Department of Labour", href: "https://www.labourdept.gov.lk" },
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
        "Funded entirely by the employer under the Employees' Trust Fund Act",
        "Calculated on the same earnings base used for EPF",
        "Periodic member returns are required in addition to payments",
      ],
      weHandle: [
        "Employer contribution calculations",
        "Contribution schedules and supporting returns",
        "Alignment of ETF and EPF earnings bases",
      ],
      figures: [{ label: "Employer contribution", value: "3% of total earnings", verified: false }],
      sources: [{ label: "Employees' Trust Fund Board", href: "https://www.etfb.lk" }],
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
      sources: [{ label: "Inland Revenue Department", href: "https://www.ird.gov.lk" }],
    },
    {
      id: "gratuity",
      name: "Gratuity",
      fullName: "Payment of Gratuity",
      icon: "scale",
      summary:
        "A lump-sum payment owed to eligible employees when they leave after a qualifying period of service, under the Payment of Gratuity Act.",
      keyPoints: [
        "Eligibility depends on completed years of service and the size of the employer",
        "Payable on termination of employment, subject to the Act's conditions",
        "Many employers track and provide for the liability during employment",
      ],
      weHandle: [
        "Service-period tracking for every employee",
        "Gratuity calculations when employees leave",
        "Liability estimates to support financial reporting",
      ],
      figures: [
        { label: "Typical qualifying service", value: "5 completed years", verified: false },
        { label: "Typical calculation basis", value: "Half a month's salary per year of service", verified: false },
      ],
      sources: [{ label: "Department of Labour", href: "https://www.labourdept.gov.lk" }],
    },
  ],
};
