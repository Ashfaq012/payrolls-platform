import type { SourceLink } from "./types";

/** Official-source review; not a substitute for entity-specific professional approval. */
export const gccReviewedOn = "2026-11-23";
export const gccSources = {
  uaeHours: { label: "UAE Government: working hours and Ramadan reduction", href: "https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/working-hours" },
  qatarWps: { label: "Qatar Al Meezan: Wage Protection System decision", href: "https://www.almeezan.qa/LawArticles.aspx?LawID=6679&LawTreeSectionID=16929&language=ar" },
  "saudiGosi": {
    "label": "GOSI: contribution base, coverage and new-law eligibility",
    "href": "https://awareness.gosi.gov.sa/businessJourney.html"
  },
  "saudiRates": {
    "label": "GOSI: phased annuity contribution schedule, 2024–2028",
    "href": "https://awareness.gosi.gov.sa/pdf/Contributions.pdf"
  },
  "saudiExisting": {
    "label": "GOSI: existing contributor and SANED FAQs",
    "href": "https://www.gosi.gov.sa/GOSIOnline/FAQ_Contributor?locale=en_US"
  },
  "saudiLabour": {
    "label": "HRSD: Labour Law, end-of-service Articles 84–88",
    "href": "https://www.hrsd.gov.sa/en/%D8%B9%D9%84%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%B9%D9%85%D9%84"
  },
  "saudiHours": {
    "label": "HRSD: working conditions, overtime and leave",
    "href": "https://www.hrsd.gov.sa/en/%D8%B4%D8%B1%D9%88%D8%B7-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%88%D8%B8%D8%B1%D9%88%D9%81%D9%87"
  },
  "saudiWps": {
    "label": "HRSD: Mudad file submission period from 1 March 2025",
    "href": "https://www.hrsd.gov.sa/en/media-center/news/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B1%D8%AF-%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D8%AA%D9%86%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AC%D8%AA%D9%85%D8%A7%D8%B9%D9%8A%D8%A9-%D8%AA%D8%B9%D9%84%D9%86-%D8%B9%D9%86-%D8%AA%D8%B9%D8%AF%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%AF%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D9%85%D9%88%D8%AD%D8%A9-%D9%84%D8%B1%D9%81%D8%B9-%D9%85%D9%84%D9%81%D8%A7%D8%AA-%D8%AD%D9%85%D8%A7%D9%8A%D8%A9-%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%B1-%D9%81%D9%8A"
  },
  "saudiContracts": {
    "label": "HRSD: documented contract wage clause and Mudad verification",
    "href": "https://www.hrsd.gov.sa/sites/default/files/2025-10/aldlyl-ala-rshady-lmbadrt--qd-al-ml-almwthq-sndana-tnfydhyana---en.pdf"
  },
  "saudiNitaqat": {
    "label": "HRSD: Nitaqat calculator and activity-based assessment",
    "href": "https://www.hrsd.gov.sa/en/ministry-services/services/%D8%AD%D8%A7%D8%B3%D8%A8%D8%A9-%D9%86%D8%B7%D8%A7%D9%82%D8%A7%D8%AA"
  },
  "saudiHealth": {
    "label": "Council of Health Insurance: employer obligations and eligibility",
    "href": "https://www.chi.gov.sa/en/aboutchi/Pages/FAQ.aspx"
  },
  "saudiPrivacy": {
    "label": "SDAIA: Personal Data Protection Law",
    "href": "https://sdaia.gov.sa/en/SDAIA/about/Documents/Personal%20Data%20English%20V2-23April2023-%20Reviewed-.pdf"
  },
  "saudiPrivacyRules": {
    "label": "SDAIA: PDPL Implementing Regulations, Article 16",
    "href": "https://sdaia.gov.sa/en/SDAIA/about/Documents/ExecutiveRegulationsEn.pdf"
  },
  "saudiTax": {
    "label": "Saudi National Portal: personal income tax statement",
    "href": "https://my.gov.sa/en/news/8534"
  },
  "uaeLaw": {
    "label": "UAE Government: Federal Labour Law and amendments, Articles 19, 29, 51–53",
    "href": "https://u.ae/-/media/Documents-2023/Federal-DecreeLaw-No-33-of-2021-Regarding-the-Regulation-of-Employment-Relationship-and-its-amendmen.pdf"
  },
  "uaeWps": {
    "label": "MOHRE: Wage Protection System",
    "href": "https://observatory.mohre.gov.ae/en/uae-labour-market-priorities/cutting-edge-labour-market-solutions"
  },
  "uaeEmployers": {
    "label": "MOHRE: employer guide, Emiratisation and insurance",
    "href": "https://www.mohre.gov.ae/assets/download/fa35564a/Awareness%20Guide%20for%20New%20Employers%20Companies%20-%20EN.pdf.aspx"
  },
  "uaeHealth": {
    "label": "MOHRE: health insurance and residence-renewal transition",
    "href": "https://www.mohre.gov.ae/assets/download/e3e2259/Awareness%20Guide%20for%20New%20Employers%20Companies%20-%20EN.pdf.aspx"
  },
  "uaePensions": {
    "label": "GPSSA: insured registration and jurisdiction",
    "href": "https://www.gpssa.gov.ae/pages/en/services/registration-insured"
  },
  "uaePensionRates": {
    "label": "GPSSA: 1999 and 2023 law contribution differences",
    "href": "https://www.gpssa.gov.ae/pages/en/media-center/news/gpssa-insureds-contribution-payment-may-be-extended-15th-day-each-month"
  },
  "gccPensions": {
    "label": "GPSSA: GCC insurance protection extension",
    "href": "https://www.gpssa.gov.ae/pages/en/services/gcc-overview"
  },
  "uaeIloe": {
    "label": "UAE Government: unemployment insurance and excluded categories",
    "href": "https://u.ae/en/information-and-services/jobs/insurance/unemployment-insurance-scheme"
  },
  "uaeDews": {
    "label": "DIFC: workplace savings scheme introduced in February 2020",
    "href": "https://www.difc.com/whats-on/news/difcs-dews-savings-scheme-surpasses-usd-1-billion-in-assets-marking-a-landmark-milestone"
  },
  "uaeAdgm": {
    "label": "ADGM: Employment Regulations effective 1 April 2025",
    "href": "https://www.adgm.com/media/announcements/adgm-publishes-new-employment-regulations/"
  },
  "uaePrivacy": {
    "label": "UAE legislation: Federal Decree-Law 45/2021, personal data protection",
    "href": "https://www.uaelegislation.gov.ae/en/legislations/1972/download"
  },
  "uaeTax": {
    "label": "Federal Tax Authority: wages excluded from natural-person business income",
    "href": "https://www.tax.gov.ae/en/taxes/corporate.tax/corporate.tax.topics/basis.of.taxation.natural.person.aspx"
  },
  "qatarGratuity": {
    "label": "Qatar Al Meezan: Labour Law, Article 54",
    "href": "https://www.almeezan.qa/LawArticles.aspx?LawArticleID=51848&LawID=3961&language=en"
  },
  "qatarWages": {
    "label": "Qatar Ministry of Labour: minimum wage and allowances",
    "href": "https://www.mol.gov.qa/admin/Publications/Report%20on%20the%20Ministry's%20Efforts%20in%20the%20Labour_AR.gif.pdf"
  },
  "qatarInsurance": {
    "label": "Qatar GRSIA: Social Insurance Law 1/2022 coverage",
    "href": "https://www.grsia.gov.qa/ar/studies-and-researches/Lists/AnnualReports/Attachments/53/2022.pdf"
  },
  "kuwaitLabour": {
    "label": "Kuwait Public Authority for Manpower: Labour Law, Articles 51–55",
    "href": "https://www.manpower.gov.kw/docs/LaborLaw/Labor_Law_Eng.pdf"
  },
  "kuwaitInsurance": {
    "label": "Kuwait Government: PIFSS insurance services",
    "href": "https://e.gov.kw/sites/kgoenglish/Pages/eServices/PIFFS/ElectronicServiceForIndividuals.aspx"
  },
  "bahrainGratuity": {
    "label": "Bahrain Prime Minister: Edict 109/2023 effective 1 March 2024",
    "href": "https://www.pmo.gov.bh/en/article/hrh-the-crown-prince-and-prime-minister-issues-edict-109-of-2023"
  },
  "bahrainTransition": {
    "label": "Bahrain LMRA: wages and indemnity, including pre-March-2024 service",
    "href": "https://www.lmra.gov.bh/files/cms/shared/wt-a6-booklet-wages-and-indemnity.pdf"
  },
  "omanLabour": {
    "label": "Oman Ministry of Labour: Labour Law, Article 61",
    "href": "https://www.mol.gov.om/Laborlaw"
  },
  "omanProtection": {
    "label": "Oman Social Protection Fund: implementation timetable, June 2026",
    "href": "https://www.spf.gov.om/wp-content/uploads/2026/06/20260602-Oman_summary-report-ILO-SPF-web.pdf"
  },
  "omanTax": {
    "label": "Oman Tax Authority: personal income tax effective from 2028",
    "href": "https://tms.taxoman.gov.om/portal/w/issuance-of-personal-income-tax-pit-law"
  }
} satisfies Record<string, SourceLink>;
