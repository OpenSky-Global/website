import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade";

const variantClass: Record<RevealVariant, string> = {
  up: "reveal--up",
  down: "reveal--down",
  left: "reveal--left",
  right: "reveal--right",
  scale: "reveal--scale",
  fade: "reveal--fade",
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  variant?: RevealVariant;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      className={[
        "reveal",
        variantClass[variant],
        visible ? "is-visible" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
