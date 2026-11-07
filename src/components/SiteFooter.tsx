import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/context";

const CONTACT_EMAIL = "jarjuadama101@gmail.com";
const BROCHURE_URL = "/opensky-company-brochure.pdf";

export function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-16 border-t border-border bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src="/os-mark.svg" alt="" className="h-8 w-8" />
              <span className="font-display text-[15px] font-semibold tracking-[0.12em]">
                OPEN<span className="text-signal">SKY</span> GLOBAL
              </span>
            </div>
            <p className="type-body mt-4 max-w-md text-white/70">{t.footer.tagline}</p>
            <div className="mt-6">
              <p className="type-kicker text-signal">{t.footer.inquiries}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1.5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
            </div>
            <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex max-w-md items-center justify-between gap-4 rounded-xl border border-white/12 bg-white/[0.04] p-5 transition-colors hover:border-white/30 hover:bg-white/[0.07]"
            >
              <span>
                <span className="block font-display text-sm font-semibold">
                  {t.hero.ctaBrochure}
                </span>
                <span className="mt-0.5 block text-sm text-white/70">PDF · EN company brochure</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-signal transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div>
            <div className="type-kicker text-signal">{t.footer.explore}</div>
            <ul className="type-body mt-4 space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-white">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-white/70 hover:text-white">
                  {t.nav.solutions}
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-white/70 hover:text-white">
                  {t.nav.platform}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/about/responsible-use" className="text-white/70 hover:text-white">
                  {t.nav.responsible}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="type-kicker text-signal">{t.footer.contact}</div>
            <ul className="type-body mt-4 space-y-2">
              <li>
                <Link to="/request" className="text-white/70 hover:text-white">
                  {t.nav.requestDemo}
                </Link>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/70 hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/opensky-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex text-white/70 hover:text-white"
                >
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/50">{t.footer.built}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} {t.footer.copyright}
            <span className="mx-2">·</span>
            <Link to="/privacy" className="hover:text-white">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
