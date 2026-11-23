import type { ComplianceContent } from "../types";

/**
 * Educational compliance content for India.
 *
 * Figures are `verified: false` until a qualified Indian payroll or tax
 * professional checks them against the official source. The four labour codes
 * took effect on 21 November 2025, and state rules under them are still being
 * notified, so wage definitions and some thresholds may change. The
 * Income-tax Act, 2025 replaces the 1961 Act from 1 April 2026, which renumbers
 * sections and forms. See docs/CONTENT-APPROVALS-INDIA.md.
 */
export const compliance: ComplianceContent = {
  heading: "Indian payroll compliance, explained",
  intro:
    "Indian payroll combines central social security and tax law with rules that vary by state. Here is an overview of the main obligations and how we support each one.",
  disclaimer:
    "This overview is general information, not legal or tax advice. Requirements depend on your workforce and states, and they change over time, so always confirm them against the official sources listed.",
  lastReviewed: null,
  topics: [
    {
      id: "pf",
      name: "PF",
      fullName: "Employees' Provident Fund",
      icon: "landmark",
      summary:
        "A retirement savings and pension scheme run by the EPFO, funded by employee and employer contributions on an employee's wages.",
      keyPoints: [
        "Applies to establishments with 20 or more employees, now under the Code on Social Security, 2020",
        "The employer's share is split between the provident fund and the Employees' Pension Scheme",
        "Contributions and the electronic challan-cum-return (ECR) are due monthly against each member's UAN",
      ],
      weHandle: [
        "Contribution calculations on the correct wage base",
        "Monthly ECR preparation and UAN management for joiners and leavers",
        "Reconciliation of contributions against payroll",
      ],
      figures: [
        { label: "Employee contribution", value: "12% of wages", verified: false },
        { label: "Employer contribution", value: "12% of wages (incl. 8.33% to EPS)", verified: false },
        { label: "EPS wage ceiling", value: "₹15,000 a month", verified: false },
      ],
      sources: [{ label: "Employees' Provident Fund Organisation", href: "https://www.epfindia.gov.in" }],
    },
    {
      id: "esi",
      name: "ESI",
      fullName: "Employees' State Insurance",
      icon: "heart-pulse",
      summary:
        "A health and social insurance scheme run by ESIC for employees earning up to a wage threshold, funded by employee and employer contributions.",
      keyPoints: [
        "Applies to covered establishments, generally with 10 or more employees, in notified areas",
        "Covers employees whose monthly wages are at or below the threshold",
        "Contributions are paid monthly, with half-yearly contribution periods",
      ],
      weHandle: [
        "Eligibility checks as wages change",
        "Monthly contribution calculations and filings support",
        "Registration of new joiners with an IP number",
      ],
      figures: [
        { label: "Employee contribution", value: "0.75% of wages", verified: false },
        { label: "Employer contribution", value: "3.25% of wages", verified: false },
        { label: "Wage threshold", value: "₹21,000 a month", verified: false },
      ],
      sources: [{ label: "Employees' State Insurance Corporation", href: "https://www.esic.gov.in" }],
    },
    {
      id: "tds",
      name: "TDS",
      fullName: "Tax deducted at source on salary",
      icon: "file-check",
      summary:
        "Income tax employers deduct from salaries each month and deposit with the government, based on each employee's estimated annual income and chosen tax regime.",
      keyPoints: [
        "Employees choose between the new (default) and old tax regimes, which changes the TDS calculation",
        "Tax is deposited monthly, with quarterly TDS statements and an annual certificate for each employee",
        "The Income-tax Act, 2025 applies from 1 April 2026, replacing the 1961 Act and renumbering its sections and forms",
      ],
      weHandle: [
        "Regime-wise TDS computation every month",
        "Investment declaration and proof collection",
        "Quarterly TDS statements and annual employee tax certificates",
      ],
      sources: [
        { label: "Income Tax Department", href: "https://www.incometaxindia.gov.in" },
        { label: "TDS Reconciliation Analysis and Correction Enabling System (TRACES)", href: "https://www.tdscpc.gov.in" },
      ],
    },
    {
      id: "pt",
      name: "PT and LWF",
      fullName: "Professional tax and labour welfare fund",
      icon: "map",
      summary:
        "State-level levies. Professional tax is deducted from salary in states that levy it; labour welfare fund contributions apply in some states, from employees and employers.",
      keyPoints: [
        "Professional tax slabs, due dates and registration rules differ by state, and some states don't levy it",
        "The Constitution caps professional tax for an individual at ₹2,500 a year",
        "Labour welfare fund amounts and frequencies (monthly, half-yearly or annual) are set by each state",
      ],
      weHandle: [
        "State-wise PT and LWF deductions based on work location",
        "Employer registrations and periodic returns support",
        "A state-by-state compliance calendar",
      ],
      figures: [{ label: "Constitutional cap on professional tax", value: "₹2,500 a year per person", verified: false }],
      sources: [{ label: "State commercial tax and labour departments (varies by state)", href: "https://www.india.gov.in" }],
    },
    {
      id: "gratuity",
      name: "Gratuity",
      fullName: "Payment of gratuity",
      icon: "scale",
      summary:
        "A lump-sum benefit owed to eligible employees when they leave after a qualifying period of service, now governed by the Code on Social Security, 2020.",
      keyPoints: [
        "Permanent employees generally qualify after five years of continuous service",
        "Under the labour codes, fixed-term employees qualify after one year of service",
        "The amount is based on last drawn wages and years of service, up to a statutory ceiling",
      ],
      weHandle: [
        "Service-period tracking for every employee",
        "Gratuity calculations at exit",
        "Liability estimates to support financial reporting",
      ],
      figures: [
        { label: "Typical calculation basis", value: "15 days' wages per year of service", verified: false },
        { label: "Statutory ceiling", value: "₹20 lakh", verified: false },
      ],
      sources: [{ label: "Ministry of Labour and Employment", href: "https://labour.gov.in" }],
    },
    {
      id: "labour-codes",
      name: "Labour codes",
      fullName: "The four labour codes",
      icon: "book",
      summary:
        "The Code on Wages, the Industrial Relations Code, the Code on Social Security and the Occupational Safety, Health and Working Conditions Code consolidate 29 earlier labour laws.",
      keyPoints: [
        "The codes took effect on 21 November 2025, with central and state rules being notified in stages",
        "A uniform definition of wages means allowances above a set share of pay count towards wages",
        "This can change the base for PF, gratuity and other wage-linked calculations",
      ],
      weHandle: [
        "A review of your salary structure against the wage definition",
        "Impact estimates for PF, gratuity and take-home pay",
        "Updates applied as central and state rules are notified",
      ],
      figures: [{ label: "Wage definition guideline", value: "Exclusions above 50% of pay added back", verified: false }],
      sources: [{ label: "Ministry of Labour and Employment — labour codes", href: "https://labour.gov.in" }],
    },
  ],
};
