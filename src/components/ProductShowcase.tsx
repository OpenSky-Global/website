import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaSplitCard, StepBadge } from "./MediaSplitCard";
import { Reveal } from "./Reveal";
import {
  SOLUTION_CARD_IMAGE_FIT,
  SOLUTION_CARD_IMAGE_POSITION,
  SOLUTION_CARD_IMAGES,
} from "../data/solutionVisuals";

export type ProductModule = { tag: string; title: string; body: string };

export function ProductShowcase({
  kicker,
  title,
  lead,
  modules,
  heroImage,
  ctaHref,
  ctaLabel,
  secondaryHref,
  secondaryLabel,
}: {
  kicker: string;
  title: string;
  lead: string;
  modules: ProductModule[];
  heroImage: string;
  heroAlt?: string;
  ctaHref?: string;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="type-kicker text-signal">{kicker}</p>
          <h1 className="type-h1-page mt-3 max-w-3xl">{title}</h1>
        </Reveal>

        <Reveal variant="up" delayMs={80} className="mt-10">
          <MediaSplitCard
            image={heroImage}
            imageClassName="object-center md:object-[50%_32%]"
            title={title}
            body={lead}
            badge={<StepBadge index={1} label={kicker} />}
          >
            {ctaHref && ctaLabel ? (
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to={ctaHref}
                  className="cta-glow inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
                >
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {secondaryHref && secondaryLabel ? (
                  <Link
                    to={secondaryHref}
                    className="rounded-full border border-white/20 px-5 py-2.5 font-display text-sm font-semibold text-white hover:border-white/40"
                  >
                    {secondaryLabel}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </MediaSplitCard>
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-14 md:space-y-8">
          {modules.map((p, i) => (
            <Reveal key={p.title} variant="up" delayMs={i * 50}>
              <MediaSplitCard
                image={SOLUTION_CARD_IMAGES[i] ?? heroImage}
                imageClassName={SOLUTION_CARD_IMAGE_POSITION[i] ?? "object-center"}
                imageFit={SOLUTION_CARD_IMAGE_FIT[i] ?? "cover"}
                imageRight={i % 2 === 1}
                title={p.title}
                body={p.body}
                badge={<StepBadge index={i + 1} label={p.tag} />}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
