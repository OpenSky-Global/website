export const INDUSTRY_SLUGS = ["mining", "ports", "utilities", "pipelines", "projects"] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export const INDUSTRY_IMAGES: Record<IndustrySlug, string> = {
  mining: "/images/hero-slides/slide-04-mining.jpg",
  ports: "/images/hero-slides/slide-05-port.jpg",
  utilities: "/images/hero-slides/slide-07-water.jpg",
  pipelines: "/images/hero-slides/slide-06-corridor.jpg",
  projects: "/images/hero-slides/slide-01-africa-portfolio.jpg",
};

export function isIndustrySlug(slug: string | undefined): slug is IndustrySlug {
  return INDUSTRY_SLUGS.includes(slug as IndustrySlug);
}

export const INDUSTRY_IMAGE_POSITION: Record<IndustrySlug, string> = {
  mining: "object-center",
  ports: "object-center",
  utilities: "object-center md:object-[50%_35%]",
  pipelines: "object-center",
  projects: "object-center",
};
