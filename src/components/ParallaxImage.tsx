import { useEffect, useRef, useState, type CSSProperties, type ImgHTMLAttributes } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type ParallaxImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  speed?: number;
  wrapperClassName?: string;
};

export function ParallaxImage({
  speed = 0.12,
  wrapperClassName = "",
  className = "",
  alt = "",
  ...imgProps
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewMid = window.innerHeight * 0.5;
      const elMid = rect.top + rect.height * 0.5;
      setOffset((elMid - viewMid) * speed);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed, reduceMotion]);

  const style: CSSProperties = reduceMotion ? {} : { transform: `translate3d(0, ${offset}px, 0)` };

  return (
    <div ref={wrapRef} className={`overflow-hidden ${wrapperClassName}`}>
      <img
        {...imgProps}
        alt={alt}
        className={`will-change-transform motion-reduce:transform-none ${className}`}
        style={style}
      />
    </div>
  );
}
