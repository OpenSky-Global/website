import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export function PlatformPage() {
  const { t } = useI18n();

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-signal">
            {t.platform.kicker}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-[36px] font-semibold md:text-[44px]">
            {t.platform.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85">{t.platform.lead}</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {t.platform.products.map((p, i) => (
            <Reveal key={p.title} delayMs={i * 70}>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <span className="font-display text-xs font-semibold tracking-[0.14em] text-signal">
                  {p.tag}
                </span>
                <h2 className="mt-2 font-display text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delayMs={200}>
          <img
            src="/images/hero-drone-water-infrastructure.jpg"
            alt=""
            className="mt-12 w-full rounded-2xl border border-white/10 object-cover max-h-[420px]"
          />
        </Reveal>
      </div>
    </div>
  );
}
