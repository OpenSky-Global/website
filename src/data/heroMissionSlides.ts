/** Hero carousel stills; order must match `hero.slides` in i18n (3 slides). */
export const HERO_MISSION_SLIDES = [
  {
    src: "/images/hero-slides/slide-hero-satellite-downlink.jpg",
    position: "object-center md:object-[50%_35%]",
  },
  {
    src: "/images/hero-slides/slide-hero-atlas-drone.jpg",
    position: "object-center md:object-[50%_40%]",
  },
  {
    src: "/images/hero-slides/slide-hero-fields-drone.jpg",
    position: "object-center md:object-[50%_45%]",
  },
] as const;

export const HERO_ROTATE_MS = 5000;
export const HERO_FADE_MS = 1400;
