import type { ComplianceContent } from "../types";

/**
 * Educational compliance content for Saudi Arabia.
 *
 * Figures are `verified: false` until a qualified Saudi payroll or labour-law
 * professional checks them against the official source. The new Social
 * Insurance Law (in force from July 2024) phases in higher annuity rates for
 * new Saudi entrants, and Labour Law amendments took effect in February 2025,
 * so rates and rules here need careful review. See docs/CONTENT-APPROVALS-SAUDI.md.
 */
export const compliance: ComplianceContent = {
  heading: "Saudi payroll compliance, explained",
  intro:
    "Saudi payroll is closely linked to government platforms, and the rules differ for Saudi and expatriate employees. Here is an overview of the main obligations and how we support each one.",
  disclaimer:
    "This overview is general information, not legal advice. Requirements depend on your workforce and activity, and they change over time, so always confirm them against the official sources listed.",
  lastReviewed: null,
  topics: [
    {
      id: "gosi",
      name: "GOSI",
      fullName: "General Organization for Social Insurance",
      icon: "landmark",
      summary:
        "Social insurance covering pensions, unemployment and occupational hazards. Saudi employees and employers both contribute; for expatriates, the employer pays occupational hazard cover only.",
      keyPoints: [
        "Contributions are calculated on basic salary plus housing allowance, within a minimum and maximum",
        "Under the Social Insurance Law in force from July 2024, annuity rates rise in stages for Saudis who join after that date",
        "Joiners, leavers and wage changes must be updated on GOSI, and contributions paid monthly",
      ],
      weHandle: [
        "Contribution calculations for Saudi and expatriate employees",
        "Monthly GOSI updates for joiners, leavers and wage changes",
        "Reconciliation of the GOSI invoice against payroll",
      ],
      figures: [
        { label: "Saudi annuities (existing members)", value: "9% employee + 9% employer", verified: false },
        { label: "Saudi unemployment insurance (SANED)", value: "0.75% employee + 0.75% employer", verified: false },
        { label: "Occupational hazards (all employees)", value: "2% employer", verified: false },
        { label: "Contribution wage ceiling", value: "SAR 45,000 a month", verified: false },
      ],
      sources: [{ label: "General Organization for Social Insurance", href: "https://www.gosi.gov.sa" }],
    },
    {
      id: "wps",
      name: "WPS",
      fullName: "Wage Protection System (Mudad)",
      icon: "wallet",
      summary:
        "A Ministry of Human Resources programme that checks private-sector salaries are paid on time and in line with employment contracts.",
      keyPoints: [
        "Salaries must be paid through banks, not in cash",
        "A monthly wage file is submitted through the Mudad platform",
        "Paid wages are compared with contract and GOSI data, and non-compliance can restrict Ministry services",
      ],
      weHandle: [
        "Monthly WPS wage file preparation",
        "Bank salary files in your bank's format",
        "Checks that payroll, contracts and GOSI wages match before submission",
      ],
      sources: [
        { label: "Mudad", href: "https://mudad.com.sa" },
        { label: "Ministry of Human Resources and Social Development", href: "https://www.hrsd.gov.sa" },
      ],
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
        "Employees who resign may receive a reduced award, depending on their length of service",
        "Many employers accrue the liability monthly for financial reporting",
      ],
      weHandle: [
        "Monthly end-of-service accruals",
        "Final settlement calculations at exit",
        "Liability reports to support financial statements",
      ],
      figures: [
        { label: "First five years", value: "Half a month's wage per year", verified: false },
        { label: "After five years", value: "One month's wage per year", verified: false },
      ],
      sources: [{ label: "Ministry of Human Resources and Social Development — Labour Law", href: "https://www.hrsd.gov.sa" }],
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
      sources: [
        { label: "Ministry of Human Resources and Social Development", href: "https://www.hrsd.gov.sa" },
        { label: "Qiwa", href: "https://www.qiwa.sa" },
      ],
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
        "Overtime is paid at a premium over the basic hourly wage",
        "Annual leave increases with length of service, and working hours are reduced for Muslim employees during Ramadan",
      ],
      weHandle: [
        "Overtime and leave calculations to the statutory rules",
        "Leave balance tracking and encashment at exit",
        "Payroll changes when contract terms are updated",
      ],
      figures: [
        { label: "Overtime rate", value: "Hourly wage + 50% of basic", verified: false },
        { label: "Annual leave", value: "21 days; 30 after 5 years", verified: false },
      ],
      sources: [
        { label: "Ministry of Human Resources and Social Development", href: "https://www.hrsd.gov.sa" },
        { label: "Qiwa", href: "https://www.qiwa.sa" },
      ],
    },
    {
      id: "medical-insurance",
      name: "Medical insurance",
      fullName: "Mandatory health insurance",
      icon: "heart-pulse",
      summary:
        "Private-sector employers must provide approved health insurance for their employees and, in many cases, eligible dependants.",
      keyPoints: [
        "Cover is regulated by the Council of Health Insurance",
        "Insurance status is linked to residency and other government services for expatriates",
        "Policies must be kept current as employees join and leave",
      ],
      weHandle: [
        "Joiner and leaver lists for your insurer",
        "Premium cost allocation in payroll reports",
        "Dependant data kept consistent with HR records",
      ],
      sources: [{ label: "Council of Health Insurance", href: "https://chi.gov.sa" }],
    },
  ],
};
