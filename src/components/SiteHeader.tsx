import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/context";
import type { Locale } from "../i18n/types";

const industryPaths = [
  { key: "industriesOverview" as const, path: "/industries" },
  { key: "mining" as const, path: "/industries/mining" },
  { key: "ports" as const, path: "/industries/ports" },
  { key: "utilities" as const, path: "/industries/utilities" },
  { key: "pipelines" as const, path: "/industries/pipelines" },
  { key: "projects" as const, path: "/industries/projects" },
];

const productPaths = [
  { key: "productsOverview" as const, path: "/platform" },
  { key: "atlas" as const, path: "/platform/atlas" },
  { key: "osFields" as const, path: "/platform/os-fields" },
];

const navLinks = [
  { to: "/", end: true, labelKey: "home" as const },
  { to: "/solutions", labelKey: "solutions" as const },
  { to: "/about", labelKey: "about" as const },
];

function NavItem({
  to,
  end,
  children,
  onNavigate,
}: {
  to: string;
  end?: boolean;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) =>
        [
          "site-nav-pill whitespace-nowrap px-3 py-2 font-display text-[13px] font-medium tracking-wide",
          isActive ? "is-active text-signal" : "text-white/78 hover:text-white",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

type NavDropdownItem = { path: string; label: string };

function NavDropdown({
  open,
  setOpen,
  closeSibling,
  routeActive,
  triggerLabel,
  items,
  ariaLabel,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  closeSibling: () => void;
  routeActive: boolean;
  triggerLabel: string;
  items: NavDropdownItem[];
  ariaLabel: string;
}) {
  const toggle = () => {
    closeSibling();
    setOpen(!open);
  };

  return (
    <div
      className="group relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className={[
          "site-nav-pill inline-flex items-center gap-1 px-3 py-2 font-display text-[13px] font-medium tracking-wide",
          routeActive ? "is-active text-signal" : "text-white/78 hover:text-white",
        ].join(" ")}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={ariaLabel}
        onClick={toggle}
      >
        {triggerLabel}
        <ChevronDown
          className={["h-3.5 w-3.5 transition-transform", open ? "rotate-180" : ""].join(" ")}
        />
      </button>
      <div
        className={[
          "absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-1",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-1 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
        ].join(" ")}
      >
        <div className="rounded-xl border border-white/12 bg-navy-2/98 p-1.5 shadow-xl shadow-black/40 backdrop-blur-md">
          {items.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="block rounded-lg px-3 py-2.5 text-sm text-white/82 transition-colors hover:bg-white/[0.07] hover:text-white"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();
  const onIndustryRoute = location.pathname.startsWith("/industries");
  const onProductRoute = location.pathname.startsWith("/platform");

  useEffect(() => {
    setOpen(false);
    setIndustriesOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobile = () => setOpen(false);

  return (
    <div className="site-header-float fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      {open ? (
        <div
          className="fixed inset-0 z-0 bg-black/45 backdrop-blur-[2px] lg:hidden"
          aria-hidden
          onClick={closeMobile}
        />
      ) : null}
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="site-header pointer-events-auto backdrop-blur-xl">
          <div className="relative flex h-16 items-center gap-3 px-4 sm:h-[4.5rem] sm:gap-4 sm:px-5 lg:h-[4.75rem] lg:px-6">
            <Link
              to="/"
              className="site-header-logo block shrink-0 py-0.5"
              onClick={closeMobile}
            >
              <img
                src="/brand/opensky-global-logo-reversed.svg"
                alt="OpenSky Global"
                className="h-11 w-auto max-w-[min(72vw,300px)] sm:h-12 sm:max-w-[320px] lg:h-14 lg:max-w-[360px]"
                width={360}
                height={58}
                draggable={false}
              />
            </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex"
          aria-label="Main"
        >
          {navLinks.map(({ to, end, labelKey }) => (
            <NavItem key={to} to={to} end={end}>
              {t.nav[labelKey]}
            </NavItem>
          ))}
          <NavDropdown
            open={productsOpen}
            setOpen={setProductsOpen}
            closeSibling={() => setIndustriesOpen(false)}
            routeActive={onProductRoute}
            triggerLabel={t.nav.platform}
            ariaLabel={t.nav.platform}
            items={productPaths.map(({ key, path }) => ({
              path,
              label: t.nav[key],
            }))}
          />
          <NavDropdown
            open={industriesOpen}
            setOpen={setIndustriesOpen}
            closeSibling={() => setProductsOpen(false)}
            routeActive={onIndustryRoute}
            triggerLabel={t.nav.industries}
            ariaLabel={t.nav.industries}
            items={industryPaths.map(({ key, path }) => ({
              path,
              label:
                key === "industriesOverview" ? t.nav.industriesOverview : t.industries[key],
            }))}
          />
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <div
            className="flex rounded-full border border-white/12 bg-black/15 p-0.5"
            role="group"
            aria-label="Language"
          >
            {(["en", "fr"] as Locale[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLocale(l)}
                className={[
                  "rounded-full px-2.5 py-1 font-display text-[11px] font-semibold uppercase tracking-wide transition-colors",
                  locale === l
                    ? "bg-signal text-navy shadow-sm"
                    : "text-white/65 hover:text-white",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            to="/request"
            className="cta-glow rounded-full bg-signal px-4 py-2 font-display text-sm font-semibold text-navy transition-colors hover:bg-signal-dim"
          >
            {t.nav.requestDemo}
          </Link>
        </div>

            <button
              type="button"
              className="ml-auto rounded-lg p-2 text-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {open ? (
          <div className="site-header-menu pointer-events-auto mt-2 px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-1 font-display text-[15px]" aria-label="Mobile">
              {navLinks.map(({ to, end, labelKey }) => (
                <NavItem key={to} to={to} end={end} onNavigate={closeMobile}>
                  {t.nav[labelKey]}
                </NavItem>
              ))}
              <p className="type-kicker mb-1 mt-3 text-signal">{t.nav.platform}</p>
              {productPaths.map(({ key, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="rounded-lg py-2 pl-2 text-white/80 hover:bg-white/[0.05] hover:text-white"
                  onClick={closeMobile}
                >
                  {t.nav[key]}
                </Link>
              ))}
              <p className="type-kicker mb-1 mt-3 text-signal">{t.nav.industries}</p>
              {industryPaths.map(({ key, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="rounded-lg py-2 pl-2 text-white/80 hover:bg-white/[0.05] hover:text-white"
                  onClick={closeMobile}
                >
                  {key === "industriesOverview" ? t.nav.industriesOverview : t.industries[key]}
                </Link>
              ))}
              <div className="mt-4 flex w-fit rounded-full border border-white/12 p-0.5">
                {(["en", "fr"] as Locale[]).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLocale(l)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase ${
                      locale === l ? "bg-signal text-navy" : "text-white/70"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <Link
                to="/request"
                className="cta-glow mt-4 rounded-full bg-signal py-3 text-center text-sm font-semibold text-navy"
                onClick={closeMobile}
              >
                {t.nav.requestDemo}
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </div>
  );
}
