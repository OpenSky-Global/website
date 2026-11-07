import { useI18n } from "../i18n/context";
import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { SOLUTION_CARD_IMAGES } from "../data/solutionVisuals";

const anchors = ["watch", "review", "confirm", "prove"] as const;

export function SolutionsPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="fade">
          <p className="type-kicker text-signal">{t.nav.solutions}</p>
          <h1 className="type-h1-page mt-3 max-w-3xl">{t.solutions.title}</h1>
          <p className="type-body mt-4 max-w-2xl text-white/85">{t.solutions.lead}</p>
        </Reveal>

        <div className="mt-14 space-y-20">
          {t.solutions.cards.map((card, i) => (
            <article
              key={card.title}
              id={anchors[i]}
              className={`scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal variant={i % 2 === 0 ? "left" : "right"}>
                <div>
                  <span className="type-kicker text-signal">
                    0{i + 1}
                  </span>
                  <h2 className="type-h2 mt-2 text-white">{card.title}</h2>
                  <p className="type-body mt-3 text-white/80">{card.body}</p>
                </div>
              </Reveal>
              <Reveal variant={i % 2 === 0 ? "right" : "left"} delayMs={100}>
                <ParallaxImage
                  src={SOLUTION_CARD_IMAGES[i]}
                  alt=""
                  speed={0.1}
                  wrapperClassName="overflow-hidden rounded-xl border border-white/10 shadow-xl"
                  className="aspect-[4/3] w-full scale-110 object-cover"
                />
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
