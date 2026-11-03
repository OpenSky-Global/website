import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative min-h-[92vh] border-b border-border pt-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-drone-mining-site.jpg"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
              {t.hero.kicker}
            </p>
            <h1 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] md:text-[52px]">
              {t.hero.title}{" "}
              <span className="text-signal">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85">{t.hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/request"
                className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
              >
                {t.hero.ctaDemo}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="/opensky-company-brochure.pdf"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-display text-sm font-semibold text-white hover:border-white/40"
              >
                {t.hero.ctaBrochure}
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                [t.hero.stat1v, t.hero.stat1l],
                [t.hero.stat2v, t.hero.stat2l],
                [t.hero.stat3v, t.hero.stat3l],
              ].map(([v, l]) => (
                <div
                  key={v}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-4"
                >
                  <div className="font-display text-2xl font-bold md:text-3xl">{v}</div>
                  <div className="mt-1 text-xs leading-snug text-white/60">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={120} className="relative hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src="/images/hero-mission-loop-split.jpg"
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-[55%] overflow-hidden rounded-xl border border-white/15 shadow-xl">
              <img
                src="/images/hero-os-atlas-ui-mission.jpg"
                alt=""
                className="aspect-video w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-navy-2 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
              {t.problem.kicker}
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-[30px] font-semibold leading-tight md:text-[36px]">
              {t.problem.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{t.problem.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
              {t.solutions.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[30px] font-semibold leading-tight md:text-[36px]">
              {t.solutions.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{t.solutions.lead}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.solutions.cards.map((card, i) => (
              <Reveal key={card.title} delayMs={i * 80}>
                <Link
                  to={card.href}
                  className="group flex h-full flex-col rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 transition-colors hover:border-signal/40 hover:bg-white/[0.06]"
                >
                  <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{card.body}</p>
                  <ArrowRight className="mt-4 h-4 w-4 text-signal transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-navy-2 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
              {t.why.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[30px] font-semibold leading-tight md:text-[36px]">
              {t.why.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{t.why.lead}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.cards.map((card, i) => (
              <Reveal key={card.title} delayMs={i * 60}>
                <div className="rounded-xl border border-white/[0.08] bg-navy p-5">
                  <h3 className="font-display text-base font-semibold text-signal">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
                {t.pipeline.kicker}
              </p>
              <h2 className="mt-3 font-display text-[30px] font-semibold leading-tight md:text-[36px]">
                {t.pipeline.title}
              </h2>
              <ol className="mt-8 space-y-6">
                {t.pipeline.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display text-2xl font-bold text-signal/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delayMs={100}>
              <img
                src="/images/hero-satellite-orbit-night.jpg"
                alt=""
                className="rounded-2xl border border-white/10 object-cover shadow-xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-navy-2 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
              {t.sovereignty.kicker}
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[30px] font-semibold md:text-[36px]">
              {t.sovereignty.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">{t.sovereignty.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
              {t.pilot.kicker}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[30px] font-semibold md:text-[36px]">
              {t.pilot.title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/85">{t.pilot.body}</p>
            <Link
              to="/request"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
            >
              {t.pilot.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
