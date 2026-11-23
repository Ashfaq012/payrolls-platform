import type { ResourceArticle } from "../types";

/**
 * Compliance guides. All remain drafts until reviewed by a qualified
 * UAE payroll or employment-law professional and given a lastReviewed date.
 */
export const resources: ResourceArticle[] = [
  {
    slug: "wps-guide-for-employers",
    status: "draft",
    type: "guide",
    title: "The UAE Wage Protection System: a guide for employers",
    metaDescription:
      "How the UAE Wage Protection System works: who it applies to, paying salaries through approved agents, salary files and what happens when payments are late.",
    excerpt: "Who it applies to, how salaries are paid, and what happens when payments are late.",
    readingMinutes: 5,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "What WPS is",
        paragraphs: [
          "The Wage Protection System is run by the Ministry of Human Resources and Emiratisation. Mainland employers pay salaries electronically through approved banks and exchange houses, with a salary information file, so the Ministry can confirm wages are paid in full and on time.",
        ],
      },
      {
        heading: "Free zones",
        paragraphs: [
          "Free zone companies follow their free zone authority's rules on salary payment. Some require WPS-style payments, others have their own arrangements, so check the rules for each entity.",
        ],
      },
      {
        heading: "Staying compliant",
        paragraphs: ["Employers typically need to:"],
        bullets: [
          "Pay every employee through a WPS-registered agent",
          "Pay by the due date each month",
          "Make sure paid salaries match contracts",
          "Resolve rejected or failed payments quickly",
        ],
      },
    ],
    sources: [{ label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" }],
  },
  {
    slug: "end-of-service-gratuity",
    status: "draft",
    type: "guide",
    title: "End-of-service gratuity in the UAE: what employers should know",
    metaDescription:
      "An overview of end-of-service gratuity under the UAE Labour Law: eligibility, calculation on basic wage, the cap, and alternative savings schemes.",
    excerpt: "Eligibility, calculation on basic wage, the cap, and alternative savings schemes.",
    readingMinutes: 5,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "The basics",
        paragraphs: [
          "Expatriate employees who complete at least one year of service are entitled to an end-of-service gratuity when employment ends. It is calculated on basic wage, with a higher rate for service beyond five years, and the total is capped.",
        ],
      },
      {
        heading: "Alternative schemes",
        paragraphs: [
          "Employers can choose an approved alternative end-of-service savings scheme, which invests contributions during employment. In the DIFC, employers contribute to a workplace savings plan instead of paying gratuity.",
        ],
      },
      {
        heading: "Planning for the liability",
        paragraphs: [
          "Because gratuity builds up every year, many employers accrue it monthly. This avoids surprises when people leave and supports accurate financial statements.",
        ],
      },
    ],
    sources: [{ label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" }],
  },
  {
    slug: "emiratisation-and-payroll",
    status: "draft",
    type: "article",
    title: "Emiratisation and payroll: what employers need in place",
    metaDescription:
      "How Emiratisation targets affect payroll in the UAE: pension registration, WPS payments and the reporting employers need to meet their targets.",
    excerpt: "Pension registration, WPS payments and the reporting that supports your targets.",
    readingMinutes: 4,
    publishedAt: null,
    lastReviewed: null,
    body: [
      {
        heading: "The targets",
        paragraphs: [
          "Private companies above a size threshold must increase the share of UAE nationals in skilled roles each year. Some smaller companies in selected sectors also have hiring requirements. Shortfalls lead to financial contributions.",
        ],
      },
      {
        heading: "Why payroll matters",
        paragraphs: [
          "Emirati hires generally count towards targets only when they are registered for pension contributions and paid through WPS. Getting both right from day one is a payroll task.",
        ],
      },
    ],
    sources: [
      { label: "Ministry of Human Resources and Emiratisation", href: "https://www.mohre.gov.ae" },
      { label: "General Pension and Social Security Authority (GPSSA)", href: "https://gpssa.gov.ae" },
    ],
  },
];
