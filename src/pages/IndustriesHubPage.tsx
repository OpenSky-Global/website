import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaSplitCard, StepBadge } from "../components/MediaSplitCard";
import { Reveal } from "../components/Reveal";
import {
  INDUSTRY_IMAGE_POSITION,
  INDUSTRY_IMAGES,
  INDUSTRY_SLUGS,
} from "../data/industryVisuals";
import { useI18n } from "../i18n/context";

export function IndustriesHubPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="type-kicker text-signal">{t.industriesHub.kicker}</p>
          <h1 className="type-h1-page mt-3 max-w-3xl">{t.industriesHub.title}</h1>
          <p className="type-body mt-4 max-w-2xl text-white/85">{t.industriesHub.lead}</p>
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-14 md:space-y-8">
          {INDUSTRY_SLUGS.map((slug, i) => {
            const card = t.industriesHub.cards[slug];
            return (
              <Reveal key={slug} variant="up" delayMs={i * 50}>
                <Link
                  to={`/industries/${slug}`}
                  className="group block transition-opacity hover:opacity-[0.98]"
                >
                  <MediaSplitCard
                    image={INDUSTRY_IMAGES[slug]}
                    imageClassName={INDUSTRY_IMAGE_POSITION[slug]}
                    imageRight={i % 2 === 1}
                    title={card.title}
                    body={card.body}
                    badge={<StepBadge index={i + 1} label={t.industries[slug]} />}
                  >
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-signal">
                      {card.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </MediaSplitCard>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" delayMs={100} className="mt-14">
          <div className="rounded-2xl border border-white/10 bg-navy-2/80 p-8 text-center md:p-10">
            <p className="type-kicker text-signal">{t.pilot.kicker}</p>
            <h2 className="type-h3 mt-2 text-white">{t.footer.ctaTitle}</h2>
            <p className="type-body mx-auto mt-3 max-w-xl text-white/75">{t.footer.ctaLead}</p>
            <Link
              to="/request"
              className="cta-glow group mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
            >
              {t.nav.requestDemo}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
