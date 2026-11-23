import { isVisible, visibleServices } from "@/sites";
import type { IconName, NavGroup, SiteConfig } from "@/sites/types";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: IconName;
  draft?: boolean;
}

export interface NavMenu {
  id: string;
  label: string;
  /** Short line shown in the mega-menu side panel. */
  blurb: string;
  items: NavLink[];
}

export interface NavData {
  menus: NavMenu[];
  utility: NavLink[];
  cta: NavLink;
}

const MENU_ORDER: { id: NavGroup | "resources"; label: string; blurb: string }[] = [
  { id: "payroll", label: "Payroll", blurb: "Accurate, compliant payroll every month." },
  { id: "eor", label: "EOR", blurb: "Employ people without a local entity." },
  { id: "recruitment", label: "Recruitment", blurb: "Find and hire the right people." },
  { id: "services", label: "Services", blurb: "HR and workforce services that scale with you." },
  { id: "solutions", label: "Solutions", blurb: "Payroll shaped around your industry." },
  { id: "resources", label: "Resources", blurb: "Guides and answers on local payroll compliance." },
];

export function buildNav(site: SiteConfig): NavData {
  const services = visibleServices(site);
  const serviceLink = (s: (typeof services)[number]): NavLink => ({
    label: s.name,
    href: `/${s.slug}`,
    description: s.summary,
    icon: s.icon,
    draft: s.status === "draft",
  });

  const pageLink = (key: keyof SiteConfig["pages"], label: string, description: string, icon: IconName): NavLink[] => {
    const page = site.pages[key];
    return isVisible(page.status)
      ? [{ label, href: page.path, description, icon, draft: page.status === "draft" }]
      : [];
  };

  const byGroup = (g: NavGroup) => services.filter((s) => s.group === g).map(serviceLink);

  const items: Record<(typeof MENU_ORDER)[number]["id"], NavLink[]> = {
    payroll: byGroup("payroll"),
    eor: byGroup("eor"),
    recruitment: byGroup("recruitment"),
    services: byGroup("services"),
    solutions: [
      ...pageLink("industries", "Industry Solutions", "Payroll configured for how your industry works.", "building"),
      ...byGroup("solutions"),
    ],
    resources: [
      ...pageLink("resources", "Guides", "Source-referenced payroll compliance guides.", "book"),
      ...pageLink("faqs", "FAQs", "Answers to common payroll outsourcing questions.", "headset"),
      { label: "Compliance overview", href: "/#compliance", description: `${site.country.shortName} payroll obligations at a glance.`, icon: "shield" },
    ],
  };

  return {
    menus: MENU_ORDER.map((m) => ({ ...m, items: items[m.id] })).filter((m) => m.items.length > 0),
    utility: [
      ...pageLink("about", "About Us", "", "building"),
      ...pageLink("contact", "Contact", "", "headset"),
    ],
    cta: { label: "Get a Proposal", href: site.pages.proposal.path },
  };
}
