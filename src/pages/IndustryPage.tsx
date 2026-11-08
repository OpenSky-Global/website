import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { MediaSplitCard, StepBadge } from "../components/MediaSplitCard";
import { Reveal } from "../components/Reveal";
import { INDUSTRY_IMAGE_POSITION, INDUSTRY_IMAGES, isIndustrySlug } from "../data/industryVisuals";
import { useI18n } from "../i18n/context";

export function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  if (!isIndustrySlug(slug)) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center text-white/70">Sector not found.</div>
    );
  }

  const card = t.industriesHub.cards[slug];

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="type-kicker text-signal">{t.industriesHub.kicker}</p>
          <Link
            to="/industries"
            className="type-body mt-2 inline-block text-white/60 hover:text-signal"
          >
            ← {t.nav.industriesOverview}
          </Link>
        </Reveal>

        <Reveal variant="up" delayMs={60} className="mt-8">
          <MediaSplitCard
            image={INDUSTRY_IMAGES[slug]}
            imageClassName={INDUSTRY_IMAGE_POSITION[slug]}
            title={card.title}
            body={card.body}
            badge={<StepBadge index={1} label={t.industries[slug]} />}
          >
            <Link
              to="/request"
              className="cta-glow group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-signal px-5 py-2.5 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
            >
              {t.nav.requestDemo}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </MediaSplitCard>
        </Reveal>
      </div>
    </div>
  );
}
