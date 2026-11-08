import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaSplitCard, StepBadge } from "../components/MediaSplitCard";
import { Reveal } from "../components/Reveal";
import {
  SOLUTION_CARD_IMAGE_FIT,
  SOLUTION_CARD_IMAGE_POSITION,
  SOLUTION_CARD_IMAGES,
} from "../data/solutionVisuals";
import { useI18n } from "../i18n/context";

const anchors = ["watch", "review", "confirm", "prove"] as const;

export function SolutionsPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="type-kicker text-signal">{t.solutions.kicker}</p>
          <h1 className="type-h1-page mt-3 max-w-3xl">{t.solutions.title}</h1>
          <p className="type-body mt-4 max-w-2xl text-white/85">{t.solutions.lead}</p>
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-14 md:space-y-8">
          {t.solutions.cards.map((card, i) => {
            const step = t.pipeline.steps[i];
            return (
              <Reveal key={card.title} variant="up" delayMs={i * 60}>
                <MediaSplitCard
                  id={anchors[i]}
                  image={SOLUTION_CARD_IMAGES[i]}
                  imageClassName={SOLUTION_CARD_IMAGE_POSITION[i]}
                  imageFit={SOLUTION_CARD_IMAGE_FIT[i]}
                  imageRight={i % 2 === 1}
                  title={card.title}
                  body={card.body}
                  footnote={step?.body}
                  badge={<StepBadge index={i + 1} label={step?.title ?? card.title} />}
                />
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade" delayMs={120} className="mt-14">
          <div className="rounded-2xl border border-white/10 bg-navy-2/80 p-8 text-center md:p-10">
            <p className="type-kicker text-signal">{t.pilot.kicker}</p>
            <h2 className="type-h3 mt-2 text-white">{t.pilot.title}</h2>
            <p className="type-body mx-auto mt-3 max-w-xl text-white/75">{t.pilot.body}</p>
            <Link
              to="/request"
              className="cta-glow group mt-6 inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
            >
              {t.pilot.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
