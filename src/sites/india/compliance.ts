import type { ComplianceContent } from "../types";
import { reviewedOn, sources } from "./sources";

/** Official-source review; see docs/CONTENT-APPROVALS-INDIA.md. */
export const compliance: ComplianceContent = {
  heading: "Indian payroll compliance, explained",
  intro:
    "Indian payroll combines central social security and tax law with rules that vary by state. Here is an overview of the main obligations and how we support each one.",
  disclaimer:
    "This overview is general information, not legal or tax advice. Requirements depend on your workforce and states, and they change over time, so always confirm them against the official sources listed.",
  lastReviewed: reviewedOn,
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
        "For eligible pension members, part of the employer contribution goes to EPS; EDLI and administration charges are additional",
        "The Ministry's October 2026 FAQs refer to an EPF ceiling of ₹25,000. Check the applicable scheme and membership rules; this is not a verified EPS ceiling",
      ],
      weHandle: [
        "Contribution calculations on the correct wage base",
        "Monthly ECR preparation and UAN management for joiners and leavers",
        "Reconciliation of contributions against payroll",
      ],
      figures: [
        { label: "Employee contribution", value: "Usually 12%; 10% for specified establishments", verified: true },
        { label: "Employer contribution", value: "Usually 12%; 10% for specified establishments", verified: true },
        { label: "EPF establishment coverage", value: "Generally 20 or more employees", verified: true },
      ],
      sources: [sources.labour, sources.pf],
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
        "The ordinary entry ceiling is ₹21,000 a month; ESIC specifies ₹25,000 for persons with disabilities",
        "Employees earning average daily wages up to ₹176 are exempt from their own contribution; the employer contribution remains payable",
      ],
      weHandle: [
        "Eligibility checks as wages change",
        "Monthly contribution calculations and filings support",
        "Registration of new joiners with an IP number",
      ],
      figures: [
        { label: "Employee contribution", value: "0.75% of wages", verified: true },
        { label: "Employer contribution", value: "3.25% of wages", verified: true },
        { label: "Ordinary entry wage ceiling", value: "₹21,000 a month", verified: true },
      ],
      sources: [sources.esi, sources.labour],
    },
    {
      id: "tds",
      name: "TDS",
      fullName: "Tax deducted at source on salary",
      icon: "file-check",
      summary:
        "Income tax employers deduct from salaries each month and deposit with the government, based on each employee's estimated annual income and chosen tax regime.",
      keyPoints: [
        "The new regime is the default; obtain the employee's annual regime intimation and apply eligible deductions for that regime",
        "For tax year 2026-27, salary TDS is under section 392; Form 138 is the quarterly statement and Form 130 is the salary TDS certificate",
        "The Income-tax Act, 2025 applies from 1 April 2026, replacing the 1961 Act and renumbering its sections and forms",
      ],
      weHandle: [
        "Regime-wise TDS computation every month",
        "Investment declaration and proof collection",
        "Quarterly TDS statements and annual employee tax certificates",
      ],
      sources: [sources.tds, sources.quarterly, sources.forms],
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
        "PT and LWF checks against applicable state law, establishment coverage and employee exemptions",
        "Employer registrations and periodic returns support",
        "A state-by-state compliance calendar",
      ],
      figures: [{ label: "Constitutional cap on professional tax", value: "₹2,500 a year per person", verified: true }],
      sources: [sources.pt, sources.maharashtra, sources.lwf],
    },
    {
      id: "gratuity",
      name: "Gratuity",
      fullName: "Payment of gratuity",
      icon: "scale",
      summary:
        "A lump-sum benefit owed to eligible employees when they leave after a qualifying period of service, now governed by the Code on Social Security, 2020.",
      keyPoints: [
        "Five years of continuous service is usual; death, disablement and qualifying fixed-term expiry have exceptions",
        "Ministry guidance confirms fixed-term gratuity after one year under the contract, on a pro-rata basis",
        "For monthly-rated employees, the usual calculation is last drawn monthly wages × 15/26 × qualifying years; service over six months rounds up. Better contractual benefits remain protected",
      ],
      weHandle: [
        "Service-period tracking for every employee",
        "Gratuity calculations at exit",
        "Liability estimates to support financial reporting",
      ],
      figures: [
        { label: "Typical calculation basis", value: "15 days' wages per year of service", verified: true },
        { label: "Statutory ceiling", value: "₹20 lakh", verified: true },
      ],
      sources: [sources.labour],
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
        "Specified excluded payments above 50% of remuneration are added back to statutory wages; this is not a blanket rule that basic salary must equal half of CTC",
        "This can change the base for PF, gratuity and other wage-linked calculations",
      ],
      weHandle: [
        "A review of your salary structure against the wage definition",
        "Impact estimates for PF, gratuity and take-home pay",
        "Updates applied as central and state rules are notified",
      ],
      figures: [{ label: "Wage definition guideline", value: "Specified exclusions over 50% of remuneration added back", verified: true }],
      sources: [sources.labour],
    },
  ],
};
