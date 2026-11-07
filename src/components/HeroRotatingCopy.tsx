import type { Messages } from "../i18n/types";
import { useHeroMissionIndex } from "./HeroMissionCarousel";

type Slide = Messages["hero"]["slides"][number];

export function HeroRotatingCopy({ slides }: { slides: Slide[] }) {
  const { index, fadeMs } = useHeroMissionIndex();

  return (
    <div
      className="hero-copy relative min-h-[13.5rem] md:min-h-[15rem] lg:min-h-[16rem]"
      aria-live="polite"
      aria-atomic="true"
    >
      {slides.map((slide, i) => {
        const active = i === index;
        const TitleTag = active ? "h1" : "p";
        return (
          <div
            key={slide.kicker + slide.title}
            className={[
              "absolute inset-0 motion-safe:transition-opacity motion-reduce:transition-none",
              active ? "opacity-100" : "pointer-events-none opacity-0",
            ].join(" ")}
            style={{ transitionDuration: `${fadeMs}ms` }}
            aria-hidden={!active}
          >
            <p className="type-kicker text-signal">{slide.kicker}</p>
            <TitleTag className="type-hero mt-4">
              {slide.title}{" "}
              <span className="text-signal">{slide.titleAccent}</span>
            </TitleTag>
            <p className="type-lead mt-5 max-w-xl text-white/90">{slide.lead}</p>
          </div>
        );
      })}
    </div>
  );
}
