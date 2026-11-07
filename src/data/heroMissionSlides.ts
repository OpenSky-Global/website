/** Hero carousel stills — order must match `hero.slides` in i18n. */
export const HERO_MISSION_SLIDES = [
  {
    src: "/images/hero-mission-loop-split.jpg",
    position: "object-[62%_center] md:object-[58%_42%]",
  },
  {
    src: "/images/hero-os-atlas-ui-mission.jpg",
    position: "object-center md:object-[55%_center]",
  },
  {
    src: "/images/hero-satellite-orbit-night.jpg",
    position: "object-center",
  },
  {
    src: "/images/hero-drone-mining-site.jpg",
    position: "object-center md:object-[50%_35%]",
  },
  {
    src: "/images/hero-drone-port-site.jpg",
    position: "object-center",
  },
  {
    src: "/images/hero-drone-corridor.jpg",
    position: "object-center md:object-[48%_40%]",
  },
  {
    src: "/images/hero-drone-water-infrastructure.jpg",
    position: "object-center",
  },
  {
    src: "/images/hero-analyst-review.jpg",
    position: "object-[40%_center] md:object-center",
  },
] as const;

export const HERO_ROTATE_MS = 5000;
export const HERO_FADE_MS = 1400;
