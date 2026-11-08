/** Pipeline step art for home cards and /solutions (no baked-in marketing copy on watch). */
export const SOLUTION_CARD_IMAGES = [
  "/images/hero-slides/slide-hero-satellite-downlink.jpg",
  "/images/hero-slides/slide-08-analyst.jpg",
  "/images/hero-slides/slide-hero-atlas-drone.jpg",
  "/images/solutions/solution-04-evidence.jpg",
] as const;

export const SOLUTION_CARD_IMAGE_POSITION = [
  "object-center md:object-[50%_40%]",
  "object-center md:object-[50%_42%]",
  "object-center md:object-[50%_32%]",
  "object-center md:object-[50%_38%]",
] as const;

/** Marketing composites with UI chrome; use contain so captions are not cropped. */
export const SOLUTION_CARD_IMAGE_FIT: readonly ("cover" | "contain")[] = [
  "cover",
  "cover",
  "cover",
  "contain",
] as const;
