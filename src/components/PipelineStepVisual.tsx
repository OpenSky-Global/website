import { SOLUTION_CARD_IMAGE_POSITION, SOLUTION_CARD_IMAGES } from "../data/solutionVisuals";

export function PipelineStepVisual({
  activeIndex,
  labels,
}: {
  activeIndex: number;
  labels: string[];
}) {
  const idx = Math.min(Math.max(activeIndex, 0), SOLUTION_CARD_IMAGES.length - 1);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl lg:sticky lg:top-28">
      {SOLUTION_CARD_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={[
            "absolute inset-0 h-full w-full scale-110 object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none",
            SOLUTION_CARD_IMAGE_POSITION[i],
            i === idx ? "opacity-100" : "opacity-0",
          ].join(" ")}
          aria-hidden={i !== idx}
        />
      ))}
      <p className="sr-only">{labels[idx]}</p>
    </div>
  );
}
