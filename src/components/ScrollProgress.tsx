import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScale(max > 0 ? doc.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px]">
      <div
        className="h-full origin-left bg-signal shadow-[0_0_12px_rgba(201,162,39,0.55)] transition-transform duration-100 linear"
        style={{ transform: `scaleX(${scale})` }}
      />
    </div>
  );
}
