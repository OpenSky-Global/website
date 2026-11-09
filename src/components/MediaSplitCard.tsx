import type { ReactNode } from "react";

export function MediaSplitCard({
  image,
  imageClassName = "object-center",
  imageFit = "cover",
  imageRight = false,
  badge,
  title,
  body,
  footnote,
  id,
  scrollMargin = "scroll-mt-28",
  className = "",
  children,
}: {
  image: string;
  imageClassName?: string;
  /** `contain` shows the full frame (letterboxed); `cover` fills the pane. */
  imageFit?: "cover" | "contain";
  imageRight?: boolean;
  badge?: ReactNode;
  title: string;
  body: string;
  footnote?: string;
  id?: string;
  scrollMargin?: string;
  className?: string;
  children?: ReactNode;
}) {
  const fitClass = imageFit === "contain" ? "object-contain p-1 sm:p-2" : "object-cover";

  return (
    <article
      id={id}
      className={[
        "card-shine overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]",
        scrollMargin,
        className,
      ].join(" ")}
    >
      <div className="grid lg:grid-cols-2 lg:items-center">
        <div
          className={[
            "relative w-full overflow-hidden bg-navy/60",
            "aspect-[16/10] sm:aspect-[3/2] lg:aspect-[5/4] lg:max-h-[min(26rem,72vh)] xl:max-h-[min(30rem,75vh)]",
            imageRight ? "lg:order-2" : "",
          ].join(" ")}
        >
          <img
            src={image}
            alt=""
            className={["h-full w-full", fitClass, imageClassName].join(" ")}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent lg:from-transparent"
            aria-hidden
          />
          <div
            className={[
              "pointer-events-none absolute inset-y-0 hidden w-16 from-navy/85 to-transparent lg:block xl:w-24",
              imageRight ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l",
            ].join(" ")}
            aria-hidden
          />
        </div>
        <div
          className={[
            "flex flex-col justify-center p-6 md:p-8 lg:p-10",
            imageRight ? "lg:order-1" : "",
          ].join(" ")}
        >
          {badge}
          <h2 className="type-h2 text-white">{title}</h2>
          <p className="type-body mt-3 text-white/80">{body}</p>
          {footnote ? <p className="type-body mt-2 text-sm text-white/55">{footnote}</p> : null}
          {children}
        </div>
      </div>
    </article>
  );
}

export function StepBadge({ index, label }: { index: number; label: string }) {
  return (
    <div className="mb-4 flex w-fit items-center gap-2.5 rounded-lg border border-signal/30 bg-signal/10 px-3 py-2 text-signal">
      <span className="font-display text-xs font-bold tracking-[0.12em]">
        {String(index).padStart(2, "0")}
      </span>
      <span className="font-display text-sm font-semibold">{label}</span>
    </div>
  );
}

export function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="type-kicker mb-3 block text-signal">{tag}</span>
  );
}
