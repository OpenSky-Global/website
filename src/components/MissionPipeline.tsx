import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

export type PipelineStep = { title: string; body: string };

export function MissionPipeline({ steps }: { steps: PipelineStep[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.25;
      const raw = (start - rect.top) / (rect.height + start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={listRef} className="pipeline relative mt-8 space-y-8 pl-0">
      <div
        className="pipeline-track motion-reduce:hidden"
        aria-hidden
        style={{ transform: `scaleY(${progress})` }}
      />
      {steps.map((step, i) => (
        <li key={step.title} className="pipeline-step list-none">
          <Reveal variant="right" delayMs={i * 90} className="flex gap-5">
            <span className="pipeline-node font-display text-lg font-bold text-navy" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-0.5">
              <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/75">{step.body}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
