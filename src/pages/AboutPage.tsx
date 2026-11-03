import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export function AboutPage() {
  const { t } = useI18n();
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <h1 className="font-display text-[36px] font-semibold">{t.about.title}</h1>
          <p className="mt-6 text-base leading-relaxed text-white/85">{t.about.body}</p>
        </Reveal>
      </div>
    </div>
  );
}

export function ResponsibleUsePage() {
  const { t } = useI18n();
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <h1 className="font-display text-[36px] font-semibold">{t.responsible.title}</h1>
          <p className="mt-6 text-base leading-relaxed text-white/85">{t.responsible.body}</p>
        </Reveal>
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-10 text-sm leading-relaxed text-white/80">
        <h1 className="font-display text-3xl font-semibold text-white">Privacy</h1>
        <p className="mt-6">
          OpenSky Corp processes contact form data only to respond to demo requests. We do not sell
          personal data. Hosting location follows the customer deployment model described on this
          site. A full notice under Morocco Law 09-08 will be published before production launch.
        </p>
      </div>
    </div>
  );
}
