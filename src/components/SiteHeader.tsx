import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useI18n } from "../i18n/context";
import type { Locale } from "../i18n/types";

const industryPaths = [
  { key: "mining" as const, path: "/industries/mining" },
  { key: "ports" as const, path: "/industries/ports" },
  { key: "utilities" as const, path: "/industries/utilities" },
  { key: "pipelines" as const, path: "/industries/pipelines" },
  { key: "projects" as const, path: "/industries/projects" },
];

function navClass({ isActive }: { isActive: boolean }) {
  return [
    "border-b-2 px-2.5 py-2 font-display text-[13px] transition-colors xl:px-3.5",
    isActive
      ? "border-signal text-signal"
      : "border-transparent text-white/80 hover:text-white",
  ].join(" ");
}

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-navy">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/os-mark.svg" alt="" className="h-8 w-8" draggable={false} />
          <span className="font-display text-[15px] font-semibold tracking-[0.12em] text-white">
            OPEN<span className="text-signal">SKY</span>
            <span className="ml-1 text-[10px] font-medium tracking-[0.2em] text-white/50">
              CORP
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <NavLink to="/" end className={navClass}>
            {t.nav.home}
          </NavLink>
          <NavLink to="/solutions" className={navClass}>
            {t.nav.solutions}
          </NavLink>
          <NavLink to="/platform" className={navClass}>
            {t.nav.platform}
          </NavLink>
          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 border-b-2 border-transparent px-2.5 py-2 font-display text-[13px] text-white/80 transition-colors hover:text-white xl:px-3.5"
              aria-expanded="false"
            >
              {t.nav.industries}
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-0 top-full w-56 translate-y-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="mt-2 rounded-xl border border-white/10 bg-navy-2 p-1.5 shadow-lg">
                {industryPaths.map(({ key, path }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block rounded-lg px-3 py-2 font-display text-sm text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {t.industries[key]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <NavLink to="/about" className={navClass}>
            {t.nav.about}
          </NavLink>
          <div className="ml-2 flex rounded-full border border-white/15 p-0.5">
            {(["en", "fr"] as Locale[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLocale(l)}
                className={`rounded-full px-2.5 py-1 font-display text-xs font-semibold uppercase ${
                  locale === l ? "bg-signal text-navy" : "text-white/70 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            to="/request"
            className="ml-3 rounded-full bg-signal px-4 py-2 font-display text-sm font-semibold text-navy transition-colors hover:bg-signal-dim"
          >
            {t.nav.requestDemo}
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-navy-2 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1 font-display text-sm">
            <NavLink to="/" end className="py-2" onClick={() => setOpen(false)}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/solutions" className="py-2" onClick={() => setOpen(false)}>
              {t.nav.solutions}
            </NavLink>
            <NavLink to="/platform" className="py-2" onClick={() => setOpen(false)}>
              {t.nav.platform}
            </NavLink>
            <NavLink to="/about" className="py-2" onClick={() => setOpen(false)}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/request" className="mt-2 rounded-full bg-signal py-3 text-center font-semibold text-navy" onClick={() => setOpen(false)}>
              {t.nav.requestDemo}
            </NavLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
