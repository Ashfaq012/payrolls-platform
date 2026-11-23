import type { Service } from "../types";

/**
 * GCC regional service catalogue.
 * Status reflects what management has confirmed is offered under the
 * Payroll Arabia brand. See docs/CONTENT-APPROVALS-GCC.md.
 */
export const services: Service[] = [
  {
    slug: "gcc-payroll",
    status: "published",
    group: "payroll",
    icon: "map",
    name: "GCC Payroll",
    summary: "Payroll in all six GCC countries, run through one process with consolidated reporting.",
    metaTitle: "GCC Payroll Outsourcing — Six Countries, One Partner",
    metaDescription:
      "Outsource payroll across Saudi Arabia, the UAE, Qatar, Kuwait, Bahrain and Oman with one partner, one process and consolidated regional reporting.",
    eyebrow: "GCC Payroll",
    h1: "Payroll across the GCC, run as one",
    intro:
      "Running payroll in several GCC countries usually means several providers, formats and calendars. We bring them together: each country handled to its own rules, all of them through one process, one calendar and one set of reports.",
    includes: [
      {
        title: "Country payrolls",
        body: "Monthly payroll in each GCC country, with local social insurance, salary payment and end-of-service rules applied.",
        icon: "wallet",
      },
      {
        title: "One input format and calendar",
        body: "A common template and cut-off schedule for every country, so your team works one way across the region.",
        icon: "clipboard",
      },
      {
        title: "Consolidated reporting",
        body: "Regional payroll cost, headcount and liabilities in one report, converted to your reporting currency.",
        icon: "chart",
      },
      {
        title: "Regional point of contact",
        body: "One accountable contact for the region, supported by country specialists.",
        icon: "headset",
      },
      {
        title: "End-of-service across the region",
        body: "Accruals and settlements calculated to each country's rules, reported together.",
        icon: "scale",
      },
      {
        title: "Transfers between countries",
        body: "Employees moving between GCC entities handled cleanly in both payrolls.",
        icon: "globe",
      },
    ],
    idealFor: [
      "Groups with entities in two or more GCC countries",
      "Regional headquarters that want one view of payroll cost",
      "Companies expanding from one GCC country into others",
    ],
    local: {
      heading: "Six countries, six sets of rules",
      body: "Social insurance for nationals, wage protection systems, end-of-service rules and localisation targets differ across the GCC, and several have changed recently. We track these changes in every country and apply them consistently.",
      points: [
        "Saudi Arabia: GOSI, WPS and end of service",
        "UAE: WPS, gratuity and pensions for nationals",
        "Qatar, Kuwait, Bahrain and Oman: social insurance and end-of-service rules",
        "Localisation reporting for each country",
      ],
    },
    faqs: [
      {
        q: "Do we need a separate contract for each country?",
        a: "Usually one regional agreement covers all countries, with country schedules for scope and pricing. We confirm the structure during the proposal.",
      },
      {
        q: "Can each country approve its own payroll?",
        a: "Yes. Approvals can sit with local managers, a regional finance team, or both, depending on how you work.",
      },
    ],
    related: ["payroll-outsourcing", "managed-payroll", "payroll-compliance"],
    approvalNote:
      "Confirm the delivery model in Qatar, Kuwait, Bahrain and Oman (own entities, partners or both) before claiming coverage of all six countries.",
  },
  {
    slug: "payroll-outsourcing",
    status: "published",
    group: "payroll",
    icon: "wallet",
    name: "Payroll Outsourcing",
    summary: "End-to-end monthly payroll in any GCC country, from salary inputs to payslips and salary files.",
    metaTitle: "Payroll Outsourcing in the GCC",
    metaDescription:
      "Payroll outsourcing in Qatar, Kuwait, Bahrain, Oman, Saudi Arabia and the UAE: salary calculation, social insurance, wage protection files, end-of-service and reporting.",
    eyebrow: "Payroll Outsourcing",
    h1: "Payroll outsourcing in any GCC country",
    intro:
      "Whether you employ people in one GCC country or several, hand the monthly payroll cycle to a team that does it every day. We calculate pay, apply local contributions, prepare salary files and keep your records audit-ready.",
    includes: [
      {
        title: "Monthly salary processing",
        body: "Gross-to-net calculations covering basic pay, housing and transport allowances, overtime, bonuses, unpaid leave and deductions.",
        icon: "calculator",
      },
      {
        title: "Social insurance",
        body: "Contributions for national employees, and for expatriates where required, calculated to each country's scheme.",
        icon: "landmark",
      },
      {
        title: "Salary payment files",
        body: "Wage protection and bank salary files prepared in the format each country and bank requires.",
        icon: "file-check",
      },
      {
        title: "End-of-service and leave accruals",
        body: "Monthly liability accruals and final settlement calculations for leavers.",
        icon: "scale",
      },
      {
        title: "Payslips",
        body: "Clear, itemised payslips delivered securely every pay period.",
        icon: "clipboard",
      },
      {
        title: "Payroll reporting",
        body: "Payroll registers, cost-centre summaries and variance reports to support finance and audit.",
        icon: "chart",
      },
    ],
    idealFor: [
      "Companies with employees in Qatar, Kuwait, Bahrain or Oman",
      "Businesses without an in-house payroll specialist in a GCC country",
      "International companies setting up in the region",
    ],
    local: {
      heading: "Local rules in every GCC country",
      body: "Each GCC country has its own social insurance scheme, salary payment requirements and end-of-service rules. We apply the right ones to each entity, every month.",
      points: [
        "Social insurance for nationals, and expatriates where required",
        "Wage protection and bank salary files",
        "End-of-service calculated to local rules",
        "Ramadan working hours applied correctly",
      ],
    },
    faqs: [
      {
        q: "What do you need from us each month?",
        a: "Usually attendance and leave data, joiners and leavers, salary changes and any one-off payments. We agree a simple input format and monthly cut-off during setup.",
      },
      {
        q: "Who approves the payroll before payment?",
        a: "You do. We prepare the payroll and reports for your review, and salaries are released only after your approval.",
      },
    ],
    related: ["gcc-payroll", "managed-payroll", "payroll-compliance"],
  },
  {
    slug: "managed-payroll",
    status: "published",
    group: "payroll",
    icon: "settings",
    name: "Managed Payroll",
    summary: "A dedicated regional payroll team that works as an extension of your finance function.",
    metaTitle: "Managed Payroll Services in the GCC",
    metaDescription:
      "Managed payroll across the GCC with a named regional specialist, documented pay policies by country, maker-checker review and consolidated reporting.",
    eyebrow: "Managed Payroll",
    h1: "Managed payroll with a dedicated regional team",
    intro:
      "Managed payroll goes beyond processing. A named specialist learns your pay structures and approval process in every country, and runs each cycle as part of your team.",
    includes: [
      {
        title: "Named regional specialist",
        body: "One accountable point of contact for the region, backed by country specialists and a reviewing team.",
        icon: "headset",
      },
      {
        title: "Policy configuration",
        body: "Allowances, overtime rules, leave policies and approval steps documented for each country.",
        icon: "settings",
      },
      {
        title: "Maker-checker review",
        body: "Every payroll is prepared, then independently reviewed before it reaches you for approval.",
        icon: "shield",
      },
      {
        title: "Change management",
        body: "Salary revisions, restructures and transfers applied accurately with a clear audit trail.",
        icon: "clipboard",
      },
      {
        title: "Regional reporting",
        body: "Headcount, payroll cost, nationality mix and variance reporting across countries.",
        icon: "chart",
      },
      {
        title: "Employee queries",
        body: "Optional first-line support for payslip and deduction questions.",
        icon: "users",
      },
    ],
    idealFor: [
      "Regional groups with complex structures across several countries",
      "Companies replacing several local payroll providers",
      "Businesses that need consistent controls across the region",
    ],
    local: {
      heading: "Regional consistency, local accuracy",
      body: "Your specialist keeps processes consistent across the region while country specialists make sure each payroll follows local rules.",
      points: [
        "Regulatory changes in every country applied when they take effect",
        "Documented processes that survive staff changes on your side",
        "One regional calendar agreed in advance",
      ],
    },
    faqs: [
      {
        q: "How is managed payroll different from payroll outsourcing?",
        a: "Both cover processing. Managed payroll adds a named specialist, documented policy configuration by country, deeper reporting and optional employee query handling.",
      },
    ],
    related: ["gcc-payroll", "payroll-outsourcing", "payroll-compliance"],
  },
  {
    slug: "payroll-compliance",
    status: "published",
    group: "payroll",
    icon: "shield",
    name: "Payroll Compliance",
    summary: "Social insurance, wage protection and end-of-service obligations handled in every GCC country.",
    metaTitle: "GCC Payroll Compliance Services",
    metaDescription:
      "Payroll compliance support across the GCC covering social insurance, wage protection systems, end-of-service benefits, labour law calculations and localisation reporting.",
    eyebrow: "Payroll Compliance",
    h1: "Payroll compliance support across the GCC",
    intro:
      "GCC payroll compliance means keeping up with six sets of rules, several of which have changed recently. We prepare the figures, files and reports so you can meet your obligations in every country.",
    includes: [
      {
        title: "Social insurance",
        body: "Contributions and updates for each country's scheme.",
        icon: "landmark",
      },
      {
        title: "Wage protection",
        body: "Salary files prepared and checked for each country's wage protection requirements.",
        icon: "file-check",
      },
      {
        title: "End-of-service benefits",
        body: "Accruals and settlements calculated to each country's rules.",
        icon: "scale",
      },
      {
        title: "Labour law calculations",
        body: "Overtime, leave, Ramadan hours and final dues calculated to local rules.",
        icon: "book",
      },
      {
        title: "Localisation reporting",
        body: "Nationality reports that support Saudization, Emiratisation and other localisation targets.",
        icon: "chart",
      },
      {
        title: "Regional compliance calendar",
        body: "One calendar of payroll deadlines across every country you operate in.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Regional finance teams that need confidence in every country",
      "Groups preparing for audit or due diligence",
      "Companies adjusting to recent social insurance reforms",
    ],
    local: {
      heading: "What GCC payroll compliance involves",
      body: "Most employers deal with a social insurance authority, a labour ministry and a wage protection system in each country, plus free zone rules where relevant. We confirm what applies to each entity during setup.",
      points: [
        "Social insurance for nationals in every country",
        "Wage protection systems in several countries",
        "End-of-service rules that differ by country",
        "Localisation targets for national employees",
      ],
    },
    faqs: [
      {
        q: "Do you give legal advice?",
        a: "We apply statutory payroll rules in processing and flag issues we notice. For legal opinions on specific situations, we recommend a legal adviser in the relevant country.",
      },
    ],
    related: ["gcc-payroll", "payroll-outsourcing", "managed-payroll"],
  },
  {
    slug: "employer-of-record",
    status: "draft",
    group: "eor",
    icon: "globe",
    name: "Employer of Record",
    summary: "Hire employees in GCC countries without setting up local entities.",
    metaTitle: "Employer of Record (EOR) in the GCC",
    metaDescription:
      "Employ staff anywhere in the GCC without local entities. Our Employer of Record service handles visas, contracts, payroll and HR administration.",
    eyebrow: "Employer of Record",
    h1: "Employ people across the GCC without local entities",
    intro:
      "Our Employer of Record service lets you hire in GCC countries quickly. We act as the legal employer and sponsor, run payroll and statutory obligations, and you direct the employee's day-to-day work.",
    includes: [
      { title: "Visas and contracts", body: "Work permits, residency and local employment contracts.", icon: "file-check" },
      { title: "Payroll and contributions", body: "Monthly payroll and statutory obligations as the legal employer.", icon: "wallet" },
      { title: "Benefits and HR", body: "Health insurance, leave and employee records administered locally.", icon: "clipboard" },
    ],
    idealFor: ["Companies hiring their first employees in a GCC country"],
    local: {
      heading: "How EOR works in the GCC",
      body: "The EOR is the legal employer and sponsor while you manage the employee's work. Responsibilities are set out in a services agreement.",
      points: [],
    },
    faqs: [],
    related: ["gcc-payroll", "hr-outsourcing"],
    approvalNote: "Requires employing entities or partners, licences, contract templates and liability terms in each country offered.",
  },
  {
    slug: "recruitment",
    status: "published",
    group: "recruitment",
    icon: "user-search",
    name: "Recruitment Solutions",
    summary: "Hiring support across the GCC, from role definition to offer.",
    metaTitle: "Recruitment Services in the GCC",
    metaDescription:
      "Recruitment support across the GCC for national and expatriate roles: role scoping, sourcing, screening, interview coordination and offer support.",
    eyebrow: "Recruitment",
    h1: "Recruitment support across the region",
    intro:
      "Hiring across the GCC means balancing skills, local packages and localisation targets in every country. We help define roles, source and screen candidates, and coordinate the process through to an accepted offer.",
    includes: [
      { title: "Role scoping", body: "Role profiles and package benchmarks by country from available market data.", icon: "clipboard" },
      { title: "National talent sourcing", body: "Targeted search for nationals to support localisation goals.", icon: "user-search" },
      { title: "Screening", body: "Structured screening against agreed criteria.", icon: "file-check" },
      { title: "Interview coordination", body: "Scheduling, candidate communication and feedback collection.", icon: "users" },
      { title: "Offer support", body: "Offer preparation and follow-up through to acceptance.", icon: "briefcase" },
      { title: "Onboarding handover", body: "A smooth handover into payroll and social insurance registration.", icon: "settings" },
    ],
    idealFor: [
      "Regional groups hiring in several countries",
      "Businesses working towards localisation targets",
      "Companies building a first team in a new GCC market",
    ],
    local: {
      heading: "Hiring across GCC markets",
      body: "Package expectations, notice periods and localisation rules differ across the region. We plan each search around the market it's in.",
      points: [
        "National and expatriate hiring planned together",
        "Package expectations explained by country",
        "Smooth handover to payroll for new joiners",
      ],
    },
    faqs: [],
    related: ["hr-outsourcing", "gcc-payroll"],
    approvalNote: "Confirm recruitment is offered under the Payroll Arabia brand, and the licences held in each country.",
  },
  {
    slug: "hr-outsourcing",
    status: "published",
    group: "services",
    icon: "users",
    name: "HR Outsourcing",
    summary: "Day-to-day HR administration for teams across the GCC.",
    metaTitle: "HR Outsourcing Services in the GCC",
    metaDescription:
      "HR outsourcing across the GCC: employee records, onboarding and exits, document tracking, leave administration and HR reporting by country.",
    eyebrow: "HR Outsourcing",
    h1: "HR outsourcing for teams across the region",
    intro:
      "Keep HR administration accurate and consistent across countries without growing your internal team. We handle the routine work so your managers can focus on their people.",
    includes: [
      { title: "Employee records", body: "Organised, confidential employee files maintained for every country.", icon: "lock" },
      { title: "Onboarding and exits", body: "Joiner and leaver processes and handovers into payroll.", icon: "users" },
      { title: "Document tracking", body: "Visa, residency and insurance expiry dates tracked, with reminders before renewal.", icon: "clipboard" },
      { title: "Leave administration", body: "Leave balances and entitlements tracked to local rules and your policies.", icon: "settings" },
      { title: "HR letters", body: "Employment letters and salary certificates prepared accurately.", icon: "file-check" },
      { title: "Regional HR reporting", body: "Headcount, nationality mix, attrition and leave reporting across countries.", icon: "chart" },
    ],
    idealFor: [
      "Regional groups with lean HR teams",
      "Companies with small teams in several GCC countries",
    ],
    local: {
      heading: "Consistent HR across the GCC",
      body: "We administer HR to each country's rules and your own policies, and connect it to payroll so there are no gaps.",
      points: [
        "HR and payroll records kept consistent",
        "Document renewals tracked before they lapse",
        "Leave and attendance data ready for each pay cycle",
      ],
    },
    faqs: [],
    related: ["gcc-payroll", "recruitment"],
  },
  {
    slug: "staff-outsourcing",
    status: "draft",
    group: "services",
    icon: "briefcase",
    name: "Staff Outsourcing",
    summary: "Outsourced staff employed and administered by us across the GCC.",
    metaTitle: "Staff Outsourcing in the GCC",
    metaDescription: "Staff outsourcing in GCC countries, with employment, visas, payroll and statutory obligations handled by us.",
    eyebrow: "Staff Outsourcing",
    h1: "Staff outsourcing for flexible teams",
    intro: "Scale your team without adding to your own headcount. We employ and administer the staff; they work under your direction.",
    includes: [
      { title: "Employment administration", body: "Visas, contracts and employee records handled by us.", icon: "file-check" },
      { title: "Payroll and contributions", body: "Salaries and statutory contributions processed every month.", icon: "wallet" },
    ],
    idealFor: ["Project-based teams", "Seasonal staffing"],
    local: { heading: "Licensed labour supply", body: "Supplying staff to other businesses is licensed in each GCC country.", points: [] },
    faqs: [],
    related: ["recruitment", "hr-outsourcing"],
    approvalNote: "Labour supply needs a licence in each country. Publish only for countries where one is held.",
  },
];
