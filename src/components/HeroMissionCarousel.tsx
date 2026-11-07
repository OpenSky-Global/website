import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  HERO_FADE_MS,
  HERO_MISSION_SLIDES,
  HERO_ROTATE_MS,
} from "../data/heroMissionSlides";

type HeroMissionState = {
  index: number;
  fadeMs: number;
  slideCount: number;
  goToSlide: (i: number) => void;
  setCarouselPaused: (paused: boolean) => void;
};

const HeroMissionContext = createContext<HeroMissionState>({
  index: 0,
  fadeMs: HERO_FADE_MS,
  slideCount: HERO_MISSION_SLIDES.length,
  goToSlide: () => { },
  setCarouselPaused: () => { },
});

export function useHeroMissionIndex(): HeroMissionState {
  return useContext(HeroMissionContext);
}

export function HeroMissionProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((i: number) => {
    setIndex(i % HERO_MISSION_SLIDES.length);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || carouselPaused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_MISSION_SLIDES.length);
    }, HERO_ROTATE_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [reduceMotion, carouselPaused]);

  useEffect(() => {
    HERO_MISSION_SLIDES.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const value = useMemo(
    () => ({
      index,
      fadeMs: HERO_FADE_MS,
      slideCount: HERO_MISSION_SLIDES.length,
      goToSlide,
      setCarouselPaused,
    }),
    [index, goToSlide],
  );

  return <HeroMissionContext.Provider value={value}>{children}</HeroMissionContext.Provider>;
}

/** Pause auto-rotate while the pointer is over the hero (e.g. reading copy or using dots). */
export function HeroMissionHoverRegion({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { setCarouselPaused } = useHeroMissionIndex();
  return (
    <div
      className={className}
      onMouseEnter={() => setCarouselPaused(true)}
      onMouseLeave={() => setCarouselPaused(false)}
      onFocusCapture={() => setCarouselPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setCarouselPaused(false);
        }
      }}
    >
      {children}
    </div>
  );
}

export function HeroMissionBackdrop() {
  const { index, fadeMs } = useHeroMissionIndex();
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className="absolute inset-0"
      aria-hidden
      style={{ ["--hero-ken-ms" as string]: `${HERO_ROTATE_MS}ms` }}
    >
      {HERO_MISSION_SLIDES.map((mission, i) => {
        const active = i === index;
        return (
          <div
            key={mission.src}
            className={[
              "hero-mission-layer absolute inset-0",
              "motion-safe:transition-opacity motion-reduce:transition-none",
              active ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={reduceMotion ? undefined : { transitionDuration: `${fadeMs}ms` }}
          >
            <img
              key={active ? `active-${index}` : "idle"}
              src={mission.src}
              alt=""
              decoding="async"
              className={[
                "h-full w-full object-cover",
                mission.position,
                active && !reduceMotion ? "hero-ken-burns" : "",
              ].join(" ")}
            />
          </div>
        );
      })}
    </div>
  );
}

export function HeroSlideDots({ labels }: { labels: string[] }) {
  const { index, slideCount, goToSlide } = useHeroMissionIndex();
  const count = Math.min(slideCount, labels.length);

  return (
    <div
      className="mt-6 flex flex-wrap items-center gap-2"
      role="tablist"
      aria-label="Mission stories"
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={labels[i]}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-label={labels[i]}
          onClick={() => goToSlide(i)}
          className={[
            "hero-dot rounded-full transition-all duration-300",
            i === index ? "hero-dot--active w-8 bg-signal" : "w-2 bg-white/35 hover:bg-white/55",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
