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
import { PipelineStepVisual } from "../components/PipelineStepVisual";
import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { SOLUTION_CARD_IMAGE_POSITION, SOLUTION_CARD_IMAGES } from "../data/solutionVisuals";
import { useState } from "react";
import { useI18n } from "../i18n/context";

const WHY_ICONS = [Satellite, Radar, ShieldCheck, Globe2] as const;

export function HomePage() {
  const { t } = useI18n();
  const [pipelineStep, setPipelineStep] = useState(0);

  return (
    <>
      <HeroMissionProvider>
        <HeroMissionHoverRegion className="relative isolate flex min-h-[min(100vh,920px)] flex-col overflow-hidden border-b border-border">
          <HeroMissionBackdrop />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/72 to-navy/20"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-navy/45"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-10 pt-28 sm:pb-14 md:pb-16 lg:px-10 lg:pb-20">
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
              </div>
              <div className="mt-10 grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:items-stretch">
                {[
                  [t.hero.stat1v, t.hero.stat1l],
                  [t.hero.stat2v, t.hero.stat2l],
                  [t.hero.stat3v, t.hero.stat3l],
                ].map(([v, l], i) => (
                  <Reveal key={v} variant="scale" delayMs={200 + i * 80} className="h-full">
                    <div className="flex h-full min-h-[6.75rem] flex-col justify-center rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                      <div className="font-display text-2xl font-bold md:text-3xl">{v}</div>
                      <div className="mt-1.5 flex-1 text-xs leading-snug text-white/75">{l}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </HeroMissionHoverRegion>
      </HeroMissionProvider>

      <section className="section-glow border-b border-border bg-navy-2 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal variant="up">
            <p className="type-kicker text-signal">{t.whatWeDo.kicker}</p>
            <h2 className="type-h2 mt-3 max-w-3xl">{t.whatWeDo.title}</h2>
            <p className="type-body mt-4 max-w-3xl text-white/85">{t.whatWeDo.lead}</p>
            <p className="type-body mt-3 max-w-3xl text-white/60">{t.whatWeDo.challenge}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {t.whatWeDo.pillars.map((pillar, i) => (
              <Reveal key={pillar.href} variant="scale" delayMs={i * 100}>
                <Link
                  to={pillar.href}
                  className="card-shine group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative h-48 overflow-hidden sm:h-56">
                    <img
                      src={pillar.image}
                      alt=""
                      className="h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                    <span className="absolute bottom-4 left-5 type-kicker text-signal">{pillar.badge}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h3 className="type-h3 text-white">{pillar.title}</h3>
                    <p className="type-body mt-3 flex-1 text-white/75">{pillar.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-signal">
                      {t.whatWeDo.exploreCta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
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
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
            {t.solutions.cards.map((card, i) => (
              <Reveal key={card.title} variant="scale" delayMs={i * 100} className="h-full">
                <Link
                  to={card.href}
                  className="card-shine group flex h-full flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03]"
                >
                  <div className="relative h-40 overflow-hidden sm:h-36 lg:h-44">
                    <img
                      src={SOLUTION_CARD_IMAGES[i]}
                      alt=""
                      className={[
                        "h-full w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110",
                        SOLUTION_CARD_IMAGE_POSITION[i],
                      ].join(" ")}
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
          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-4 md:items-stretch md:gap-4">
            {t.why.cards.map((card, i) => {
              const Icon = WHY_ICONS[i] ?? ShieldCheck;
              return (
                <Reveal key={card.title} variant="up" delayMs={i * 70} className="h-full min-w-0">
                  <div className="card-shine group flex h-full flex-col rounded-xl border border-white/[0.08] bg-navy/80 p-4 backdrop-blur-sm md:p-5">
                    <div className="mb-3 flex items-start gap-2.5 rounded-lg border border-signal/30 bg-signal/10 p-2.5 text-signal transition-colors group-hover:border-signal/60 group-hover:bg-signal/15">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                      <h3 className="font-display text-sm font-semibold leading-snug text-signal md:text-base">
                        {card.title}
                      </h3>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-white/75 md:text-[0.9375rem]">
                      {card.body}
                    </p>
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
              <MissionPipeline
                steps={t.pipeline.steps}
                onActiveStepChange={setPipelineStep}
              />
            </Reveal>
            <Reveal variant="right" delayMs={140}>
              <PipelineStepVisual
                activeIndex={pipelineStep}
                labels={t.pipeline.steps.map((s) => s.title)}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border bg-navy-2 py-20 md:py-28">
        <ParallaxImage
          src="/images/hero-slides/slide-07-water.jpg"
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
    </>
  );
}
