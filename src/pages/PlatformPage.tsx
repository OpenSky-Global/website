import { ParallaxImage } from "../components/ParallaxImage";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export function PlatformPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal variant="up">
          <p className="type-kicker text-signal">{t.platform.kicker}</p>
          <h1 className="type-h1-page mt-3 max-w-3xl">{t.platform.title}</h1>
          <p className="type-body mt-4 max-w-2xl text-white/85">{t.platform.lead}</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.platform.products.map((p, i) => (
            <Reveal key={p.title} variant="scale" delayMs={i * 80}>
              <div className="card-shine h-full rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <span className="type-kicker text-signal">
                  {p.tag}
                </span>
                <h2 className="type-h3 mt-2">{p.title}</h2>
                <p className="type-body mt-2 text-white/75">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal variant="fade" delayMs={200}>
          <ParallaxImage
            src="/images/hero-os-atlas-ui-mission.jpg"
            alt=""
            speed={0.09}
            wrapperClassName="mt-12 overflow-hidden rounded-2xl border border-white/10"
            className="max-h-[420px] w-full scale-105 object-cover"
          />
        </Reveal>
      </div>
    </div>
  );
}
