import { FormEvent, useState } from "react";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export function RequestPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-xl px-6 lg:px-10">
        <Reveal>
          <h1 className="font-display text-[36px] font-semibold">{t.request.title}</h1>
          <p className="mt-4 text-base text-white/85">{t.request.lead}</p>
        </Reveal>
        <Reveal delayMs={80}>
          <form onSubmit={onSubmit} className="mt-10 space-y-4">
            {(
              [
                ["name", "text", t.request.name],
                ["email", "email", t.request.email],
                ["company", "text", t.request.company],
              ] as const
            ).map(([id, type, label]) => (
              <label key={id} className="block text-sm">
                <span className="text-white/80">{label}</span>
                <input
                  required={id !== "company"}
                  name={id}
                  type={type}
                  className="mt-1 w-full rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2.5 text-white outline-none focus:border-signal"
                />
              </label>
            ))}
            <label className="block text-sm">
              <span className="text-white/80">{t.request.sector}</span>
              <select
                name="sector"
                className="mt-1 w-full rounded-lg border border-white/15 bg-navy-2 px-3 py-2.5 text-white"
              >
                <option>Mining</option>
                <option>Port</option>
                <option>Utilities</option>
                <option>Pipeline / power</option>
                <option>Construction / DFI project</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block text-sm">
              <span className="text-white/80">{t.request.message}</span>
              <textarea
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2.5 text-white outline-none focus:border-signal"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-signal py-3 font-display text-sm font-semibold text-navy hover:bg-signal-dim"
            >
              {t.request.submit}
            </button>
            <p className="text-xs text-white/55">{t.request.note}</p>
            {sent ? (
              <p className="text-sm text-teal">Request recorded locally (demo). Use email for now.</p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </div>
  );
}
