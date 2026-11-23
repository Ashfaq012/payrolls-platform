import type { Service } from "../types";

/**
 * UAE service catalogue.
 * Status reflects what management has confirmed is offered under the
 * Payroll Emirates brand. See docs/CONTENT-APPROVALS-UAE.md.
 */
export const services: Service[] = [
  {
    slug: "payroll-outsourcing",
    status: "published",
    group: "payroll",
    icon: "wallet",
    name: "Payroll Outsourcing",
    summary: "End-to-end monthly payroll, from salary inputs to payslips and WPS files.",
    metaTitle: "Payroll Outsourcing in the UAE",
    metaDescription:
      "Outsource payroll in the UAE: salary calculation, WPS salary files, pension contributions, gratuity accruals, payslips and reporting for mainland and free zone companies.",
    eyebrow: "Payroll Outsourcing",
    h1: "Payroll outsourcing for businesses in the UAE",
    intro:
      "Hand over the monthly payroll cycle to a team that does it every day. We calculate pay, prepare WPS files, handle pension contributions for nationals and keep gratuity accruals current, for every entity you run.",
    includes: [
      {
        title: "Monthly salary processing",
        body: "Gross-to-net calculations covering basic pay, housing and transport allowances, overtime, bonuses, unpaid leave and deductions.",
        icon: "calculator",
      },
      {
        title: "WPS salary files",
        body: "Monthly salary information files prepared for your bank or exchange house.",
        icon: "file-check",
      },
      {
        title: "Pension contributions",
        body: "Contributions for UAE and GCC national employees calculated and scheduled every month.",
        icon: "landmark",
      },
      {
        title: "Gratuity and leave accruals",
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
        body: "Payroll registers, entity and cost-centre summaries and variance reports to support finance and audit.",
        icon: "chart",
      },
    ],
    idealFor: [
      "Growing companies without an in-house payroll specialist",
      "Groups with mainland and free zone entities",
      "International companies setting up a regional headquarters in the UAE",
      "Finance teams that want to focus on reporting rather than processing",
    ],
    local: {
      heading: "Built around UAE payroll requirements",
      body: "UAE payroll depends on where each entity is licensed. We apply the right salary payment, end-of-service and leave rules to each one, and keep up with changes as they take effect.",
      points: [
        "WPS salary files prepared every month",
        "Pension contributions for UAE and GCC nationals",
        "Gratuity calculated to the applicable rules",
        "Ramadan working hours and overtime applied correctly",
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
      {
        q: "Do you calculate final settlements?",
        a: "Yes. We calculate gratuity, leave encashment and other final dues for leavers, for your approval.",
      },
    ],
    related: ["managed-payroll", "payroll-compliance", "hr-outsourcing"],
  },
  {
    slug: "managed-payroll",
    status: "published",
    group: "payroll",
    icon: "settings",
    name: "Managed Payroll",
    summary: "A dedicated payroll team that runs your payroll as an extension of your finance function.",
    metaTitle: "Managed Payroll Services in the UAE",
    metaDescription:
      "Managed payroll in the UAE with a named payroll specialist, documented pay policies, maker-checker review and monthly reporting across your entities.",
    eyebrow: "Managed Payroll",
    h1: "Managed payroll with a dedicated team behind it",
    intro:
      "Managed payroll goes beyond processing. A named payroll specialist learns your pay structures, policies and approval process, and runs every cycle as part of your team.",
    includes: [
      {
        title: "Named payroll specialist",
        body: "One accountable point of contact who knows your business, backed by a reviewing team.",
        icon: "headset",
      },
      {
        title: "Policy configuration",
        body: "Allowances, overtime rules, leave policies and approval steps set up and documented for each entity.",
        icon: "settings",
      },
      {
        title: "Maker-checker review",
        body: "Every payroll is prepared, then independently reviewed before it reaches you for approval.",
        icon: "shield",
      },
      {
        title: "Change management",
        body: "Salary revisions, restructures and policy changes applied accurately with a clear audit trail.",
        icon: "clipboard",
      },
      {
        title: "Management reporting",
        body: "Headcount, payroll cost, nationality mix and variance reporting in the format your leadership uses.",
        icon: "chart",
      },
      {
        title: "Employee queries",
        body: "Optional first-line support for payslip and deduction questions.",
        icon: "users",
      },
    ],
    idealFor: [
      "Groups with several entities or emirates",
      "Companies replacing or supplementing an in-house payroll team",
      "Businesses that need stronger controls and segregation of duties",
    ],
    local: {
      heading: "Local expertise, applied consistently",
      body: "Your specialist works with UAE federal, free zone and financial-centre rules every day and applies them consistently across every cycle.",
      points: [
        "Regulatory changes reviewed and applied when they take effect",
        "Documented processes that survive staff changes on your side",
        "Monthly cut-off and payment calendars agreed in advance",
      ],
    },
    faqs: [
      {
        q: "How is managed payroll different from payroll outsourcing?",
        a: "Both cover processing. Managed payroll adds a named specialist, documented policy configuration, deeper reporting and optional employee query handling.",
      },
      {
        q: "Can we keep some payroll work in-house?",
        a: "Yes. We can agree a split of responsibilities, for example your team collects inputs and we handle calculation, review, WPS and reporting.",
      },
    ],
    related: ["payroll-outsourcing", "payroll-compliance", "managed-services"],
  },
  {
    slug: "payroll-compliance",
    status: "published",
    group: "payroll",
    icon: "shield",
    name: "Payroll Compliance",
    summary: "WPS, gratuity, pensions and Labour Law obligations handled with care.",
    metaTitle: "Payroll Compliance Services in the UAE — WPS, Gratuity, Pensions",
    metaDescription:
      "Payroll compliance support in the UAE covering WPS, end-of-service gratuity, pension contributions for nationals, Labour Law calculations and Emiratisation reporting.",
    eyebrow: "Payroll Compliance",
    h1: "Payroll compliance support for employers in the UAE",
    intro:
      "UAE payroll compliance depends on where each entity is licensed and who it employs. We prepare the figures, files and reports so you can meet your obligations with confidence.",
    includes: [
      {
        title: "Wage Protection System",
        body: "Monthly WPS salary files and checks that payments match contracts.",
        icon: "file-check",
      },
      {
        title: "Pension contributions",
        body: "GPSSA, Abu Dhabi Pension Fund and GCC national contributions calculated and scheduled.",
        icon: "landmark",
      },
      {
        title: "End-of-service gratuity",
        body: "Accruals during employment and final calculations at exit.",
        icon: "scale",
      },
      {
        title: "Labour Law calculations",
        body: "Overtime, leave, Ramadan hours and final dues calculated to the applicable rules.",
        icon: "book",
      },
      {
        title: "Emiratisation reporting",
        body: "Headcount and nationality reports that support your Emiratisation targets.",
        icon: "chart",
      },
      {
        title: "Compliance calendar",
        body: "One calendar of monthly and annual payroll deadlines across your entities.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Employers who want certainty on WPS and pension compliance",
      "Businesses preparing for audit or due diligence",
      "Companies approaching Emiratisation thresholds",
    ],
    local: {
      heading: "What UAE payroll compliance involves",
      body: "Most mainland employers deal with MOHRE for WPS and Emiratisation, the GPSSA or an emirate pension fund for national employees, and insurers for health cover. Free zones, the DIFC and ADGM add their own rules, so we confirm what applies to you during setup.",
      points: [
        "WPS and Emiratisation — MOHRE",
        "Pensions — GPSSA or Abu Dhabi Pension Fund",
        "Gratuity, leave and overtime — federal Labour Law",
        "DIFC and ADGM — their own employment laws",
      ],
    },
    faqs: [
      {
        q: "Do you give legal advice?",
        a: "We apply statutory payroll rules in processing and flag issues we notice. For legal opinions on specific situations, we recommend your legal adviser.",
      },
      {
        q: "Can you help us fix past payroll errors?",
        a: "We can review historical payroll data, identify discrepancies and prepare corrected calculations for you and your advisers to act on.",
      },
    ],
    related: ["payroll-outsourcing", "managed-payroll", "hr-outsourcing"],
  },
  {
    slug: "employer-of-record",
    status: "draft",
    group: "eor",
    icon: "globe",
    name: "Employer of Record",
    summary: "Hire employees in the UAE without setting up a local entity.",
    metaTitle: "Employer of Record (EOR) in the UAE",
    metaDescription:
      "Employ staff in the UAE without a local entity. Our Employer of Record service handles visas, contracts, payroll, WPS and HR administration.",
    eyebrow: "Employer of Record",
    h1: "Employ people in the UAE without a local entity",
    intro:
      "Our Employer of Record service lets you hire in the UAE quickly. We become the legal employer and visa sponsor, run payroll and statutory obligations, and you direct the employee's day-to-day work.",
    includes: [
      {
        title: "Visas and contracts",
        body: "Work permits, residency and employment contracts arranged in line with UAE rules.",
        icon: "file-check",
      },
      {
        title: "Payroll and WPS",
        body: "Monthly payroll and WPS salary payments handled as the legal employer.",
        icon: "wallet",
      },
      {
        title: "Onboarding",
        body: "Employee onboarding, documentation and medical and Emirates ID formalities.",
        icon: "users",
      },
      {
        title: "Benefits and HR administration",
        body: "Health insurance, leave and employee records administered locally.",
        icon: "clipboard",
      },
    ],
    idealFor: [
      "Foreign companies hiring their first employees in the UAE",
      "Businesses testing the market before setting up an entity",
    ],
    local: {
      heading: "How EOR works in the UAE",
      body: "The EOR is the legal employer and sponsor while you manage the employee's work. Responsibilities are set out in a services agreement.",
      points: ["Legal employment through our UAE entity", "Statutory obligations handled locally"],
    },
    faqs: [],
    related: ["payroll-outsourcing", "hr-outsourcing"],
    approvalNote:
      "Requires the UAE entity and licences that allow it to employ and sponsor on behalf of clients, contract templates and liability terms before publishing.",
  },
  {
    slug: "recruitment",
    status: "published",
    group: "recruitment",
    icon: "user-search",
    name: "Recruitment Solutions",
    summary: "Permanent and contract hiring support, from role definition to offer.",
    metaTitle: "Recruitment Services in the UAE",
    metaDescription:
      "Recruitment support in the UAE for Emirati and expatriate roles: role scoping, sourcing, screening, interview coordination and offer support.",
    eyebrow: "Recruitment",
    h1: "Recruitment support that finds the right people",
    intro:
      "Hiring in the UAE means competing for talent while meeting Emiratisation targets. We help define the role, source and screen candidates, and coordinate the process through to an accepted offer.",
    includes: [
      {
        title: "Role scoping",
        body: "Clear role profiles, salary and allowance benchmarks from available market data and a realistic hiring plan.",
        icon: "clipboard",
      },
      {
        title: "Emirati talent sourcing",
        body: "Targeted search for UAE nationals to support your Emiratisation goals.",
        icon: "user-search",
      },
      {
        title: "Screening",
        body: "Structured screening against agreed criteria, so you only interview relevant candidates.",
        icon: "file-check",
      },
      {
        title: "Interview coordination",
        body: "Scheduling, candidate communication and feedback collection handled for you.",
        icon: "users",
      },
      {
        title: "Offer support",
        body: "Offer preparation and candidate follow-up through to acceptance.",
        icon: "briefcase",
      },
      {
        title: "Onboarding handover",
        body: "A smooth handover into payroll, pension registration and HR administration.",
        icon: "settings",
      },
    ],
    idealFor: [
      "Companies hiring for several roles at once",
      "Businesses working towards Emiratisation targets",
      "International firms building a first team in the UAE",
    ],
    local: {
      heading: "Hiring in the UAE market",
      body: "We understand package and allowance expectations, notice periods and Emiratisation requirements, and we use that to plan your search.",
      points: [
        "Emirati and expatriate hiring planned together",
        "Package and allowance expectations explained up front",
        "Smooth handover to payroll and pensions for new joiners",
      ],
    },
    faqs: [
      {
        q: "Do you recruit UAE nationals and expatriates?",
        a: "We support both, subject to the applicable licensing and work permit rules for each role.",
      },
    ],
    related: ["hr-outsourcing", "payroll-outsourcing"],
    approvalNote: "Confirm recruitment is offered under the Payroll Emirates brand and the MOHRE licence held for it.",
  },
  {
    slug: "hr-outsourcing",
    status: "published",
    group: "services",
    icon: "users",
    name: "HR Outsourcing",
    summary: "Day-to-day HR administration handled by experienced HR professionals.",
    metaTitle: "HR Outsourcing Services in the UAE",
    metaDescription:
      "HR outsourcing in the UAE: employee records, onboarding and exits, leave administration, HR letters and policy support for mainland and free zone companies.",
    eyebrow: "HR Outsourcing",
    h1: "HR outsourcing that keeps your people operations running",
    intro:
      "Keep HR administration accurate and consistent without growing your internal team. We handle the routine work so your managers can focus on their people.",
    includes: [
      {
        title: "Employee records",
        body: "Organised, confidential employee files and HR data maintained on your behalf.",
        icon: "lock",
      },
      {
        title: "Onboarding and exits",
        body: "Joiner and leaver processes, documentation and handovers into payroll.",
        icon: "users",
      },
      {
        title: "Document tracking",
        body: "Visa, Emirates ID, labour card and insurance expiry dates tracked, with reminders before renewal.",
        icon: "clipboard",
      },
      {
        title: "Leave administration",
        body: "Leave balances, entitlements and records tracked to the applicable rules and your policies.",
        icon: "settings",
      },
      {
        title: "HR letters and policies",
        body: "Employment letters, salary certificates and help maintaining your employee handbook.",
        icon: "file-check",
      },
      {
        title: "HR reporting",
        body: "Headcount, nationality mix, attrition and leave reporting for management.",
        icon: "chart",
      },
    ],
    idealFor: [
      "SMEs without a full-time HR function",
      "Companies with lean HR teams that need administrative support",
      "International businesses with a small UAE workforce",
    ],
    local: {
      heading: "Aligned with UAE employment practice",
      body: "We administer HR processes in line with the rules that apply to each entity and your own policies, and connect them to payroll so there are no gaps.",
      points: [
        "HR and payroll records kept consistent",
        "Joiner and leaver dates flow straight into payroll",
        "Document renewals tracked before they lapse",
      ],
    },
    faqs: [
      {
        q: "Can HR outsourcing be combined with payroll?",
        a: "Yes. Most clients combine them, which removes double data entry and keeps employee records aligned with payroll.",
      },
    ],
    related: ["payroll-outsourcing", "recruitment", "payroll-compliance"],
    approvalNote: "Confirm whether government transaction (PRO) services are in scope, and under what authorisations.",
  },
  {
    slug: "staff-outsourcing",
    status: "draft",
    group: "services",
    icon: "briefcase",
    name: "Staff Outsourcing",
    summary: "Outsourced staff employed and administered by us, working under your direction.",
    metaTitle: "Staff Outsourcing in the UAE",
    metaDescription:
      "Staff outsourcing in the UAE: we employ and administer outsourced staff, including visas, payroll and WPS, while they work on your projects.",
    eyebrow: "Staff Outsourcing",
    h1: "Staff outsourcing for flexible, compliant teams",
    intro:
      "Scale your team for projects, seasonal demand or ongoing roles without adding to your own headcount. We employ and administer the staff; they work under your direction.",
    includes: [
      {
        title: "Employment administration",
        body: "Visas, contracts, onboarding and employee records handled by us.",
        icon: "file-check",
      },
      {
        title: "Payroll and WPS",
        body: "Salaries and WPS payments processed for every outsourced employee.",
        icon: "wallet",
      },
      {
        title: "Flexible headcount",
        body: "Add or reduce staff as your needs change, within agreed terms.",
        icon: "trending-up",
      },
    ],
    idealFor: ["Project-based teams with defined timelines", "Seasonal or peak-period staffing"],
    local: {
      heading: "Compliant outsourced employment",
      body: "Supplying temporary staff to other businesses is a licensed activity in the UAE.",
      points: [],
    },
    faqs: [],
    related: ["recruitment", "hr-outsourcing"],
    approvalNote:
      "Temporary work and labour supply require a MOHRE licence. Publish only once the employing entity holds it and the service agreement is approved.",
  },
  {
    slug: "managed-services",
    status: "draft",
    group: "services",
    icon: "building",
    name: "Managed Services",
    summary: "Outcome-based management of defined business functions.",
    metaTitle: "Managed Services in the UAE",
    metaDescription:
      "Managed workforce services in the UAE, where we take responsibility for delivering a defined business function to agreed service levels.",
    eyebrow: "Managed Services",
    h1: "Managed services for defined business functions",
    intro:
      "Hand over a defined function, such as back-office administration, and we take responsibility for delivering it to agreed service levels.",
    includes: [
      { title: "Defined scope", body: "Clear scope and service levels agreed up front.", icon: "clipboard" },
      { title: "Managed team", body: "We recruit, manage and administer the delivery team.", icon: "users" },
      { title: "Performance reporting", body: "Regular reporting against agreed service levels.", icon: "chart" },
    ],
    idealFor: ["Organisations outsourcing a complete function"],
    local: { heading: "Local delivery", body: "To be completed with approved scope.", points: [] },
    faqs: [],
    related: ["hr-outsourcing", "payroll-outsourcing"],
    approvalNote: "Which functions are offered as managed services is not yet defined.",
  },
];
