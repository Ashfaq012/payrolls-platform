"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavData, NavLink, NavMenu } from "@/lib/nav";
import type { SiteConfig } from "@/sites/types";
import { ButtonLink } from "@/components/ui/Button";
import { Brand } from "./Brand";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Header({ nav, brand }: { nav: NavData; brand: SiteConfig["brand"] }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // When hover has just opened a menu, the click that follows shouldn't close it.
  const hoverOpenedAt = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close everything on navigation (state adjusted during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  // Escape and outside click close the desktop menu.
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        const id = openMenu;
        setOpenMenu(null);
        document.getElementById(`trigger-${id}`)?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);
  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const solid = scrolled || !!openMenu || mobileOpen;
  const active = nav.menus.find((m) => m.id === openMenu);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 ${solid ? "" : "on-dark"}`}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      {/* Background lives on its own layer: a backdrop-filter on <header> itself would
          become the containing block for the fixed mobile panel and collapse it. */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ${
          solid
            ? "border-line bg-white/90 shadow-[0_8px_30px_-20px_rgb(11_24_51/0.35)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      />
      <a
        href="#main"
        className="sr-only rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-[60]"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Brand brand={brand} tone={solid ? "dark" : "light"} />

        <nav aria-label="Main" className="ms-2 hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {nav.menus.map((menu) =>
              menu.items.length === 1 ? (
                <li key={menu.id}>
                  <TopLink href={menu.items[0].href} solid={solid} onMouseEnter={() => setOpenMenu(null)}>
                    {menu.label}
                  </TopLink>
                </li>
              ) : (
                <li key={menu.id}>
                  <button
                    id={`trigger-${menu.id}`}
                    type="button"
                    aria-expanded={openMenu === menu.id}
                    aria-controls="mega-panel"
                    onClick={() => {
                      const recentHover = Date.now() - hoverOpenedAt.current < 500;
                      setOpenMenu((cur) => (cur === menu.id && !recentHover ? null : menu.id));
                    }}
                    onMouseEnter={() => {
                      cancelClose();
                      if (openMenu !== menu.id) hoverOpenedAt.current = Date.now();
                      setOpenMenu(menu.id);
                    }}
                    className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[0.9rem] font-medium transition-colors ${
                      solid
                        ? openMenu === menu.id
                          ? "bg-soft text-brand"
                          : "text-ink hover:bg-soft hover:text-brand"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {menu.label}
                    <ChevronDown
                      aria-hidden
                      className={`size-3.5 opacity-70 transition-transform duration-200 ${openMenu === menu.id ? "rotate-180" : ""}`}
                    />
                  </button>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="ms-auto hidden items-center gap-0.5 xl:flex">
          {nav.utility.map((l) => (
            <TopLink key={l.href} href={l.href} solid={solid} onMouseEnter={() => setOpenMenu(null)}>
              {l.label}
            </TopLink>
          ))}
          <ButtonLink href={nav.cta.href} variant={solid ? "primary" : "accent"} className="ms-2 whitespace-nowrap">
            {nav.cta.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          className={`ms-auto inline-flex size-11 items-center justify-center rounded-full transition-colors xl:hidden ${
            solid ? "text-ink hover:bg-soft" : "text-white hover:bg-white/10"
          }`}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          {mobileOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {active && (
          <motion.div
            id="mega-panel"
            key="mega"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.15 } }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute inset-x-0 top-full hidden xl:block"
            onMouseEnter={cancelClose}
          >
            <div className="mx-auto max-w-7xl px-8 pt-2">
              <MegaPanel menu={active} cta={nav.cta} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <MobileNav open={mobileOpen} nav={nav} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function TopLink({
  href,
  solid,
  children,
  onMouseEnter,
}: {
  href: string;
  solid: boolean;
  children: React.ReactNode;
  onMouseEnter?: () => void;
}) {
  const pathname = usePathname();
  const current = pathname === href;
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      onMouseEnter={onMouseEnter}
      className={`inline-flex whitespace-nowrap rounded-full px-3 py-2 text-[0.9rem] font-medium transition-colors ${
        solid ? "text-ink hover:bg-soft hover:text-brand" : "text-white/85 hover:bg-white/10 hover:text-white"
      } ${current ? (solid ? "text-brand" : "text-white") : ""}`}
    >
      {children}
    </Link>
  );
}

function DraftTag() {
  return (
    <span className="rounded-full bg-warn-soft px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-warn">
      Draft
    </span>
  );
}

function MegaPanel({ menu, cta }: { menu: NavMenu; cta: NavLink }) {
  return (
    <div className="grid grid-cols-[260px_1fr] overflow-hidden rounded-2xl border border-line bg-white shadow-menu">
      <div className="relative bg-navy p-7 text-white">
        <p className="relative font-display text-xl font-bold">{menu.label}</p>
        <p className="relative mt-2 text-sm leading-relaxed text-white/70">{menu.blurb}</p>
        <Link
          href={cta.href}
          className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-white"
        >
          {cta.label} <span aria-hidden>→</span>
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-1 p-4">
        {menu.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group block rounded-xl p-4 transition-colors hover:bg-canvas focus-visible:bg-canvas"
            >
              <span>
                <span className="flex items-center gap-2 font-semibold text-ink group-hover:text-brand">
                  {item.label}
                  {item.draft && <DraftTag />}
                </span>
                {item.description && <span className="mt-1 block text-sm leading-snug text-muted">{item.description}</span>}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileNav({ open, nav, onClose }: { open: boolean; nav: NavData; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto border-t border-line bg-white xl:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-2xl flex-col px-4 pb-10 pt-4 sm:px-6">
            <ul className="divide-y divide-line">
              {nav.menus.map((menu) =>
                menu.items.length === 1 ? (
                  <li key={menu.id}>
                    <Link href={menu.items[0].href} className="flex py-4 font-display text-lg font-semibold text-ink">
                      {menu.label}
                    </Link>
                  </li>
                ) : (
                  <li key={menu.id}>
                    <button
                      type="button"
                      aria-expanded={expanded === menu.id}
                      onClick={() => setExpanded((cur) => (cur === menu.id ? null : menu.id))}
                      className="flex w-full items-center justify-between py-4 font-display text-lg font-semibold text-ink"
                    >
                      {menu.label}
                      <ChevronDown
                        aria-hidden
                        className={`size-5 text-muted transition-transform duration-200 ${expanded === menu.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded === menu.id && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: EASE }}
                          className="overflow-hidden"
                        >
                          {menu.items.map((item) => (
                            <li key={item.href}>
                              <Link href={item.href} className="flex items-center gap-3 rounded-lg px-2 py-3 text-body hover:bg-canvas">
                                <span className="font-medium">{item.label}</span>
                                {item.draft && <DraftTag />}
                              </Link>
                            </li>
                          ))}
                          <li className="h-3" aria-hidden />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ),
              )}
              {nav.utility.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex py-4 font-display text-lg font-semibold text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ButtonLink href={nav.cta.href} size="lg" arrow className="mt-6 w-full">
              {nav.cta.label}
            </ButtonLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
