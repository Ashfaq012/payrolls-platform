import type { ComplianceContent } from "../types";
import { gccReviewedOn, gccSources as sources } from "../gcc-sources";

/** Official sources reviewed; business and publication approval remain separate. */
export const compliance: ComplianceContent = {
  heading: "Saudi payroll compliance, explained",
  intro:
    "Saudi payroll is closely linked to government platforms, and the rules differ for Saudi and expatriate employees. Here is an overview of the main obligations and how we support each one.",
  disclaimer:
    "This overview is general information, not legal advice. Requirements depend on your workforce and activity, and they change over time, so always confirm them against the official sources listed.",
  lastReviewed: gccReviewedOn,
  topics: [
    {
      id: "gosi",
      name: "GOSI",
      fullName: "General Organization for Social Insurance",
      icon: "landmark",
      summary:
        "GOSI administers annuities, SANED unemployment insurance and occupational hazards for eligible workers. Non-Saudi workers generally have employer-funded occupational hazard cover; GCC nationals may also fall under their home-country pension extension rules.",
      keyPoints: [
        "The contribution base includes basic salary and housing; GOSI also specifies treatment for commissions and housing provided in kind. Apply the relevant scheme limits",
        "The new law covers new entrants without prior civil-retirement or social-insurance contribution periods on 3 July 2024. A new job after that date alone does not establish eligibility",
        "Joiners, leavers and wage changes must be updated on GOSI, and contributions paid monthly",
      ],
      weHandle: [
        "Contribution calculations for Saudi and expatriate employees",
        "Monthly GOSI updates for joiners, leavers and wage changes",
        "Reconciliation of the GOSI invoice against payroll",
      ],
      figures: [
        { label: "Annuities under the previous scheme", value: "9% employee + 9% employer", verified: true },
        { label: "New-law annuities: July 2026–June 2027", value: "10% employee + 10% employer", verified: true },
        { label: "Saudi unemployment insurance (SANED)", value: "0.75% employee + 0.75% employer", verified: true },
        { label: "Occupational hazards (covered workers; usual rate)", value: "2% employer", verified: true },
        { label: "Contribution wage ceiling", value: "SAR 45,000 a month", verified: true },
      ],
      sources: [sources.saudiTax, sources.saudiGosi, sources.saudiRates, sources.saudiExisting, sources.gccPensions],
    },
    {
      id: "wps",
      name: "WPS",
      fullName: "Wage Protection System (Mudad)",
      icon: "wallet",
      summary:
        "A Ministry of Human Resources programme that checks private-sector salaries are paid on time and in line with employment contracts.",
      keyPoints: [
        "Covered establishments pay wages through approved banking channels; the file-submission window does not extend the salary payment due date",
        "Submit the monthly wage-protection file through Mudad. HRSD reduced the permitted upload period from 60 to 30 days from 1 March 2025",
        "Reconcile contractual wages, actual payments and GOSI records using their respective definitions; document lawful deductions and explain discrepancies",
      ],
      weHandle: [
        "Monthly WPS wage file preparation",
        "Bank salary files in your bank's format",
        "Checks that payroll, contracts and GOSI wages match before submission",
      ],
      sources: [sources.saudiWps, sources.saudiContracts],
    },
    {
      id: "eosb",
      name: "End of service",
      fullName: "End-of-service benefit",
      icon: "scale",
      summary:
        "A lump-sum benefit owed under the Labour Law when employment ends, based on the employee's last wage and length of service.",
      keyPoints: [
        "The award grows with service: a lower rate for the first five years, a higher rate after that",
        "Ordinary resignation: one-third after 2–5 years, two-thirds after more than 5 but under 10 years, and full award from 10 years; statutory exceptions can change entitlement",
        "Article 88 requires final dues within one week, or two weeks where the worker terminates the contract; Article 80 and other statutory exceptions must be checked",
      ],
      weHandle: [
        "Monthly end-of-service accruals",
        "Final settlement calculations at exit",
        "Liability reports to support financial statements",
      ],
      figures: [
        { label: "First five years", value: "Half a month's wage per year", verified: true },
        { label: "After five years", value: "One month's wage per year", verified: true },
      ],
      sources: [sources.saudiLabour],
    },
    {
      id: "saudization",
      name: "Saudization",
      fullName: "Nitaqat localisation programme",
      icon: "chart",
      summary:
        "The programme that sets the share of Saudi nationals a business must employ, depending on its activity and size, and grades compliance into bands.",
      keyPoints: [
        "Required Saudi percentages vary by economic activity and company size",
        "A business's band affects its access to Ministry services such as work visas and permits",
        "Some roles and sectors are reserved fully or partly for Saudi nationals",
      ],
      weHandle: [
        "Payroll data that supports accurate Nitaqat reporting",
        "Headcount reports by nationality",
        "Alignment of payroll, GOSI and Qiwa records",
      ],
      sources: [sources.saudiNitaqat],
    },
    {
      id: "labour-law",
      name: "Labour Law",
      fullName: "Working time, leave and contracts",
      icon: "book",
      summary:
        "The Saudi Labour Law sets working hours, overtime, leave and contract rules. Amendments took effect in February 2025.",
      keyPoints: [
        "Employment contracts are documented on the Qiwa platform",
        "Overtime uses the hourly wage plus 50% of the basic hourly wage. With employee consent, paid compensatory leave may be substituted under the amended law and regulations",
        "Annual leave increases with length of service, and working hours are reduced for Muslim employees during Ramadan",
      ],
      weHandle: [
        "Overtime and leave calculations to the statutory rules",
        "Leave balance tracking and encashment at exit",
        "Payroll changes when contract terms are updated",
      ],
      figures: [
        { label: "Overtime rate", value: "Hourly wage + 50% of basic hourly wage", verified: true },
        { label: "Annual leave", value: "21 days; 30 after 5 years", verified: true },
      ],
      sources: [sources.saudiHours, sources.saudiContracts],
    },
    {
      id: "medical-insurance",
      name: "Medical insurance",
      fullName: "Mandatory health insurance",
      icon: "heart-pulse",
      summary:
        "Private-sector employers must insure Saudi and non-Saudi employees and family members covered by the health-insurance rules, including employees on probation.",
      keyPoints: [
        "Cover is regulated by the Council of Health Insurance",
        "Insurance status is linked to residency and other government services for expatriates",
        "The employer bears mandatory employee and eligible-dependant premiums; maintain cover as employment and family eligibility change",
      ],
      weHandle: [
        "Joiner and leaver lists for your insurer",
        "Premium cost allocation in payroll reports",
        "Dependant data kept consistent with HR records",
      ],
      sources: [sources.saudiHealth],
    },
  ],
};
