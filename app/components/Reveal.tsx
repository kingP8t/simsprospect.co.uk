"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Tailwind/layout classes applied to the wrapper element. */
  className?: string;
  /** Stagger the wrapper's direct children instead of the wrapper itself. */
  stagger?: boolean;
  /** Delay (ms) before this element animates in — useful for sequencing. */
  delay?: number;
};

/**
 * Lightweight, dependency-free scroll-reveal. Adds `reveal-in` once the
 * element enters the viewport (fires immediately for content already in
 * view, e.g. above the fold). The actual animation lives in globals.css and
 * is disabled for users who prefer reduced motion.
 */
export function Reveal({
  children,
  className = "",
  stagger = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = stagger ? "reveal-stagger" : "reveal";

  return (
    <div
      ref={ref}
      className={`${base}${shown ? " reveal-in" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
