import { useI18n } from "../i18n/context";
import { Reveal } from "../components/Reveal";

const anchors = ["watch", "review", "confirm", "prove"] as const;

export function SolutionsPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
            {t.nav.solutions}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[36px] font-semibold leading-tight md:text-[44px]">
            {t.solutions.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">{t.solutions.lead}</p>
        </Reveal>

        <div className="mt-14 space-y-16">
          {t.solutions.cards.map((card, i) => (
            <Reveal key={card.title}>
              <article id={anchors[i]} className="scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-signal">{card.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-white/80">{card.body}</p>
                </div>
                <img
                  src={
                    [
                      "/images/hero-satellite-orbit-night.jpg",
                      "/images/hero-analyst-review.jpg",
                      "/images/hero-drone-corridor.jpg",
                      "/images/hero-os-atlas-ui-mission.jpg",
                    ][i]
                  }
                  alt=""
                  className="rounded-xl border border-white/10 object-cover shadow-lg"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
