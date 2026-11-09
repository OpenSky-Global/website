import { ProductShowcase } from "../components/ProductShowcase";
import { useI18n } from "../i18n/context";

export function AtlasProductPage() {
  const { t } = useI18n();

  return (
    <ProductShowcase
      kicker={t.atlas.kicker}
      title={t.atlas.title}
      lead={t.atlas.lead}
      modules={t.atlas.modules}
      heroImage="/images/hero-slides/slide-hero-atlas-drone.jpg"
      ctaHref="/request"
      ctaLabel={t.atlas.requestCta}
      secondaryHref="/platform/os-fields"
      secondaryLabel={t.atlas.otherProduct}
    />
  );
}
