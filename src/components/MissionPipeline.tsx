import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

export type PipelineStep = { title: string; body: string };

export function MissionPipeline({
  steps,
  onActiveStepChange,
}: {
  steps: PipelineStep[];
  onActiveStepChange?: (index: number) => void;
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const updateProgress = () => {
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const end = window.innerHeight * 0.25;
      const raw = (start - rect.top) / (rect.height + start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const updateActiveStep = () => {
      const viewportCenter = window.innerHeight * 0.42;
      let bestIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      stepRefs.current.forEach((stepEl, i) => {
        if (!stepEl) return;
        const rect = stepEl.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - viewportCenter);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = i;
        }
      });
      setActiveIndex((prev) => (prev === bestIndex ? prev : bestIndex));
    };
    const onScroll = () => {
      updateProgress();
      updateActiveStep();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  useEffect(() => {
    onActiveStepChange?.(activeIndex);
  }, [activeIndex, onActiveStepChange]);

  return (
    <ol ref={listRef} className="pipeline relative mt-8 space-y-8 pl-0">
      <div
        className="pipeline-track motion-reduce:hidden"
        aria-hidden
        style={{ transform: `scaleY(${progress})` }}
      />
      {steps.map((step, i) => (
        <li
          key={step.title}
          ref={(node) => {
            stepRefs.current[i] = node;
          }}
          className={[
            "pipeline-step list-none transition-opacity duration-500",
            i === activeIndex ? "opacity-100" : "opacity-55",
          ].join(" ")}
        >
          <Reveal variant="right" delayMs={i * 90} className="flex gap-5">
            <span
              className={[
                "pipeline-node font-display text-lg font-bold text-navy transition-shadow duration-500",
                i === activeIndex ? "pipeline-node-active" : "",
              ].join(" ")}
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="pt-0.5">
              <h3
                className={[
                  "font-display text-lg font-semibold transition-colors duration-500",
                  i === activeIndex ? "text-white" : "text-white/80",
                ].join(" ")}
              >
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/75">{step.body}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
