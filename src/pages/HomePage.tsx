import { ArrowRight, Globe2, Radar, ShieldCheck, Satellite } from "lucide-react";
import { Link } from "react-router-dom";
import {
  HeroMissionBackdrop,
  HeroMissionHoverRegion,
  HeroMissionProvider,
  HeroSlideDots,
} from "../components/HeroMissionCarousel";
import { HeroRotatingCopy } from "../components/HeroRotatingCopy";
import { MissionPipeline } from "../components/MissionPipeline";
import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { SOLUTION_CARD_IMAGES } from "../data/solutionVisuals";
import { useI18n } from "../i18n/context";

const WHY_ICONS = [Satellite, Radar, ShieldCheck, ShieldCheck, Globe2, Globe2] as const;

export function HomePage() {
  const { t } = useI18n();

  return (
    <>
      <HeroMissionProvider>
        <HeroMissionHoverRegion className="relative isolate min-h-[min(100vh,920px)] overflow-hidden border-b border-border">
          <HeroMissionBackdrop />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/72 to-navy/20"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-navy/45"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-end px-6 pb-16 pt-36 md:min-h-[min(100vh,920px)] md:justify-center md:pb-24 md:pt-28 lg:px-10">
            <div className="max-w-2xl">
              <HeroRotatingCopy slides={t.hero.slides} />
              <HeroSlideDots labels={t.hero.slides.map((s) => s.kicker)} />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/request"
                  className="cta-glow group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-display text-sm font-semibold text-navy shadow-lg shadow-black/25 hover:bg-signal-dim"
                >
                  {t.hero.ctaDemo}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="/opensky-company-brochure.pdf"
                  className="inline-flex items-center rounded-full border border-white/25 bg-black/20 px-6 py-3 font-display text-sm font-semibold text-white backdrop-blur-sm hover:border-white/45"
                >
                  {t.hero.ctaBrochure}
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  [t.hero.stat1v, t.hero.stat1l],
                  [t.hero.stat2v, t.hero.stat2l],
                  [t.hero.stat3v, t.hero.stat3l],
                ].map(([v, l], i) => (
                  <Reveal key={v} variant="scale" delayMs={200 + i * 80}>
                    <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                      <div className="font-display text-2xl font-bold md:text-3xl">{v}</div>
                      <div className="mt-1 text-xs leading-snug text-white/75">{l}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </HeroMissionHoverRegion>
      </HeroMissionProvider>

      <section className="section-glow border-b border-border bg-navy-2 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-10">
          <Reveal variant="left">
            <p className="type-kicker text-signal">
              {t.problem.kicker}
            </p>
            <h2 className="type-h2 mt-3">
              {t.problem.title}
            </h2>
            <p className="type-body mt-4 text-white/85">{t.problem.lead}</p>
          </Reveal>
          <Reveal variant="right" delayMs={120}>
            <ParallaxImage
              src="/images/hero-drone-port-site.jpg"
              alt=""
              speed={0.1}
              wrapperClassName="rounded-2xl border border-white/10 shadow-2xl"
              className="aspect-[4/3] w-full scale-110 object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal variant="fade">
            <p className="type-kicker text-signal">
              {t.solutions.kicker}
            </p>
            <h2 className="type-h2 mt-3 max-w-2xl">
              {t.solutions.title}
            </h2>
            <p className="type-body mt-4 max-w-2xl text-white/85">{t.solutions.lead}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.solutions.cards.map((card, i) => (
              <Reveal key={card.title} variant="scale" delayMs={i * 100}>
                <Link
                  to={card.href}
                  className="card-shine group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03]"
                >
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={SOLUTION_CARD_IMAGES[i]}
                      alt=""
                      className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-signal">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="type-h3 text-white">{card.title}</h3>
                    <p className="type-body mt-2 flex-1 text-white/70">{card.body}</p>
                    <ArrowRight className="mt-4 h-4 w-4 text-signal transition-transform group-hover:translate-x-1.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-glow border-b border-border bg-navy-2 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal variant="up">
            <p className="type-kicker text-signal">
              {t.why.kicker}
            </p>
            <h2 className="type-h2 mt-3 max-w-2xl">
              {t.why.title}
            </h2>
            <p className="type-body mt-4 max-w-2xl text-white/85">{t.why.lead}</p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.why.cards.map((card, i) => {
              const Icon = WHY_ICONS[i] ?? ShieldCheck;
              return (
                <Reveal key={card.title} variant="up" delayMs={i * 70}>
                  <div className="card-shine group rounded-xl border border-white/[0.08] bg-navy/80 p-5 backdrop-blur-sm">
                    <div className="mb-3 inline-flex rounded-lg border border-signal/30 bg-signal/10 p-2 text-signal transition-colors group-hover:border-signal/60 group-hover:bg-signal/15">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="type-h3 text-signal">{card.title}</h3>
                    <p className="type-body mt-2 text-white/75">{card.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal variant="left">
              <p className="type-kicker text-signal">
                {t.pipeline.kicker}
              </p>
              <h2 className="type-h2 mt-3">
                {t.pipeline.title}
              </h2>
              <MissionPipeline steps={t.pipeline.steps} />
            </Reveal>
            <Reveal variant="right" delayMs={140}>
              <ParallaxImage
                src="/images/hero-mission-loop-split.jpg"
                alt=""
                speed={0.14}
                wrapperClassName="rounded-2xl border border-white/10 shadow-xl lg:sticky lg:top-28"
                className="aspect-[4/3] w-full scale-110 object-cover object-[70%_center]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border bg-navy-2 py-20 md:py-28">
        <ParallaxImage
          src="/images/hero-drone-water-infrastructure.jpg"
          alt=""
          speed={0.08}
          wrapperClassName="absolute inset-0"
          className="h-[120%] w-full object-cover opacity-25"
          aria-hidden
        />
        <div className="absolute inset-0 bg-navy/80" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal variant="scale">
            <p className="type-kicker text-signal">
              {t.sovereignty.kicker}
            </p>
            <h2 className="type-h2 mt-3 max-w-2xl">
              {t.sovereignty.title}
            </h2>
            <p className="type-lead mt-4 max-w-2xl text-white/90">{t.sovereignty.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-glow py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left">
              <p className="type-kicker text-signal">
                {t.pilot.kicker}
              </p>
              <h2 className="type-h2 mt-3 max-w-xl">
                {t.pilot.title}
              </h2>
              <p className="type-body mt-4 max-w-xl text-white/85">{t.pilot.body}</p>
              <Link
                to="/request"
                className="cta-glow group mt-8 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
              >
                {t.pilot.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal variant="right" delayMs={100}>
              <ParallaxImage
                src="/images/hero-analyst-review.jpg"
                alt=""
                speed={0.11}
                wrapperClassName="rounded-2xl border border-signal/20 shadow-2xl"
                className="aspect-video w-full scale-105 object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
