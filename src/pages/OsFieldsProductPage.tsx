import { ProductShowcase } from "../components/ProductShowcase";
import { useI18n } from "../i18n/context";

export function OsFieldsProductPage() {
  const { t } = useI18n();

  return (
    <ProductShowcase
      kicker={t.osFields.kicker}
      title={t.osFields.title}
      lead={t.osFields.lead}
      modules={t.osFields.modules}
      heroImage="/images/hero-slides/slide-hero-fields-drone.jpg"
      ctaHref="/request"
      ctaLabel={t.osFields.requestCta}
      secondaryHref="/platform/atlas"
      secondaryLabel={t.osFields.otherProduct}
    />
  );
}
