import type { ResourceArticle } from "../types";
import { gccReviewedOn, gccSources as sources } from "../gcc-sources";

/** Official sources reviewed; business and publication approval remain separate. */
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
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "What WPS is",
        paragraphs: [
          "MOHRE operates WPS with the Central Bank to monitor contractual wage payments. Covered establishments use approved financial institutions and salary files; check the applicable establishment and employee exemptions before deciding which workers must be included.",
        ],
      },
      {
        heading: "Free zones",
        paragraphs: [
          "Check each free-zone authority's salary-payment procedures and the applicable employment law. Free-zone status alone does not mean the federal Labour Law is displaced. DIFC and ADGM have separate employment regimes.",
        ],
      },
      {
        heading: "Staying compliant",
        paragraphs: ["Employers typically need to:"],
        bullets: [
          "Pay covered employees through an approved WPS channel and document applicable exceptions",
          "Pay by the due date each month",
          "Make sure paid salaries match contracts",
          "Resolve rejected or failed payments quickly",
        ],
      },
    ],
    sources: [sources.uaeWps, sources.uaeLaw, sources.uaeAdgm],
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
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "The basics",
        paragraphs: [
          "For eligible foreign full-time employees under the federal regime, Article 51 provides 21 days of last basic wage per year for the first five years and 30 days per later year, after at least one year of continuous service. Unpaid absence is excluded; eligible part-years are proportional. The total is capped at two years' wage. Article 53 requires final entitlements within 14 days of termination.",
        ],
      },
      {
        heading: "Alternative schemes",
        paragraphs: [
          "Federal law permits approved alternative end-of-service savings arrangements. DIFC introduced DEWS in February 2020; determine the applicable qualifying scheme, exemptions and treatment of earlier accrued benefits instead of applying the federal gratuity formula to every DIFC employee. ADGM has its own Employment Regulations, effective from 1 April 2025.",
        ],
      },
      {
        heading: "Planning for the liability",
        paragraphs: [
          "Because gratuity builds up every year, many employers accrue it monthly. This avoids surprises when people leave and supports accurate financial statements.",
        ],
      },
    ],
    sources: [sources.uaeLaw, sources.uaeDews, sources.uaeAdgm],
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
    lastReviewed: gccReviewedOn,
    body: [
      {
        heading: "The targets",
        paragraphs: [
          "Covered establishments with 50 or more employees must increase Emiratisation in skilled jobs by one percentage point each half-year, reaching 10% by the end of 2026. Selected establishments with 20–49 employees had to hire one Emirati in 2024 and an additional Emirati in 2025. Applicable shortfalls attract financial contributions; these are distinct requirements.",
        ],
      },
      {
        heading: "Why payroll matters",
        paragraphs: [
          "Maintain genuine employment, valid work permits, the required pension registration and WPS payment evidence. Pension jurisdiction follows the employer and scheme: GPSSA's private-sector coverage excludes employers in Abu Dhabi. Do not assign a pension fund solely from an employee's home emirate.",
        ],
      },
    ],
    sources: [sources.uaeEmployers, sources.uaePensions],
  },
];
