import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";

const CONTACT_EMAIL = "jarjuadama101@gmail.com";
const BROCHURE_URL = "/opensky-company-brochure.pdf";

const industryPaths = [
  { key: "mining" as const, path: "/industries/mining" },
  { key: "ports" as const, path: "/industries/ports" },
  { key: "utilities" as const, path: "/industries/utilities" },
  { key: "pipelines" as const, path: "/industries/pipelines" },
  { key: "projects" as const, path: "/industries/projects" },
];

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer-shell scroll-mt-20 border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-14">
        <div className="site-footer-cta flex flex-col gap-5 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="type-kicker text-signal">{t.footer.pillars}</p>
            <h2 className="type-h3 mt-2 text-white">{t.footer.ctaTitle}</h2>
            <p className="type-body mt-2 max-w-xl text-white/75">{t.footer.ctaLead}</p>
          </div>
          <Link
            to="/request"
            className="cta-glow inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
          >
            {t.nav.requestDemo}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/os-mark.svg" alt="" className="h-9 w-9" />
              <img
                src="/brand/opensky-global-logo-reversed.svg"
                alt="OpenSky Global"
                className="h-8 w-auto max-w-[160px]"
              />
            </Link>
            <p className="type-kicker mt-5 text-signal">{t.footer.category}</p>
            <p className="type-body mt-2 max-w-md text-white/72">{t.footer.tagline}</p>
            <p className="mt-3 text-sm font-medium text-teal">{t.footer.region}</p>
            <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex max-w-md items-center gap-4 rounded-xl border border-white/12 bg-white/[0.04] p-4 transition-colors hover:border-signal/40 hover:bg-white/[0.06]"
            >
              <span className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-signal/15 font-display text-xs font-bold text-signal">
                PDF
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-sm font-semibold">{t.hero.ctaBrochure}</span>
                <span className="mt-0.5 block text-xs text-white/60">{t.footer.brochureNote}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-signal transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="lg:col-span-2">
            <p className="type-kicker text-signal">{t.footer.explore}</p>
            <ul className="type-body mt-4 space-y-2.5">
              <li>
                <Link to="/" className="text-white/72 transition-colors hover:text-white">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/72 transition-colors hover:text-white">
                  {t.nav.solutions}
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-white/72 transition-colors hover:text-white">
                  {t.nav.productsOverview}
                </Link>
              </li>
              <li>
                <Link
                  to="/platform/atlas"
                  className="text-white/72 transition-colors hover:text-white"
                >
                  {t.nav.atlas}
                </Link>
              </li>
              <li>
                <Link
                  to="/platform/os-fields"
                  className="text-white/72 transition-colors hover:text-white"
                >
                  {t.nav.osFields}
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-white/72 transition-colors hover:text-white">
                  {t.nav.industriesOverview}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/72 transition-colors hover:text-white">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/about/responsible-use"
                  className="text-white/72 transition-colors hover:text-white"
                >
                  {t.nav.responsible}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="type-kicker text-signal">{t.footer.industriesNav}</p>
            <ul className="type-body mt-4 space-y-2.5">
              {industryPaths.map(({ key, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/72 transition-colors hover:text-white">
                    {t.industries[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="type-kicker text-signal">{t.footer.contact}</p>
            <ul className="type-body mt-4 space-y-3">
              <li>
                <Link to="/request" className="font-medium text-white/85 hover:text-white">
                  {t.nav.requestDemo}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-start gap-2 text-white/72 hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                  <span className="break-all">{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/opensky-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/72 hover:text-white"
                >
                  <Linkedin className="h-4 w-4 text-signal" />
                  {t.footer.linkedin}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/55">
                <MapPin className="h-4 w-4 shrink-0 text-white/40" />
                {t.footer.offices}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {t.footer.copyright}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/privacy" className="hover:text-white">
              {t.footer.privacy}
            </Link>
            <span className="hidden text-white/25 md:inline">|</span>
            <span>{t.footer.pillars}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
