import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaSplitCard, StepBadge } from "../components/MediaSplitCard";
import { Reveal } from "../components/Reveal";
import { ABOUT_SECTION_IMAGE_POSITION, ABOUT_SECTION_IMAGES } from "../data/aboutVisuals";
import { useI18n } from "../i18n/context";

export function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="type-kicker text-signal">{t.about.kicker}</p>
          <h1 className="type-h1-page mt-3 max-w-3xl">{t.about.title}</h1>
          <p className="type-body mt-4 max-w-2xl text-white/85">{t.about.lead}</p>
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-14 md:space-y-8">
          {t.about.sections.map((section, i) => (
            <Reveal key={section.title} variant="up" delayMs={i * 50}>
              <MediaSplitCard
                image={ABOUT_SECTION_IMAGES[i]}
                imageClassName={ABOUT_SECTION_IMAGE_POSITION[i]}
                imageRight={i % 2 === 1}
                title={section.title}
                body={section.body}
                badge={<StepBadge index={i + 1} label={section.label} />}
              >
                {i === 1 ? (
                  <Link
                    to="/platform/atlas"
                    className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-signal hover:text-signal-dim"
                  >
                    OS Atlas
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
                {i === 2 ? (
                  <Link
                    to="/platform/os-fields"
                    className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-signal hover:text-signal-dim"
                  >
                    OS Fields
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : null}
              </MediaSplitCard>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delayMs={80} className="mt-10">
          <Link
            to="/about/responsible-use"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-white/75 hover:text-signal"
          >
            {t.about.responsibleLink}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

export function ResponsibleUsePage() {
  const { t } = useI18n();
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="type-kicker text-signal">{t.responsible.kicker}</p>
          <h1 className="type-h1-page mt-3">{t.responsible.title}</h1>
        </Reveal>
        <Reveal variant="up" delayMs={60} className="mt-10">
          <MediaSplitCard
            image="/images/hero-slides/slide-08-analyst.jpg"
            imageClassName="object-center"
            title={t.responsible.title}
            body={t.responsible.body}
            badge={<StepBadge index={1} label={t.responsible.kicker} />}
          />
        </Reveal>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <h1 className="type-h1-page">Privacy</h1>
        </Reveal>
        <Reveal variant="up" delayMs={60} className="mt-10">
          <MediaSplitCard
            image="/images/hero-slides/slide-03-satellite-clock.jpg"
            imageClassName="object-center"
            imageRight
            title="Privacy"
            body="OpenSky Global processes contact form data only to respond to demo requests. We do not sell personal data. Hosting location follows the customer deployment model described on this site. A full notice under Morocco Law 09-08 will be published before production launch."
            badge={<StepBadge index={1} label="Notice" />}
          />
        </Reveal>
      </div>
    </div>
  );
}
