"use client";

import { useEffect, useRef, useState } from "react";

/** Pulls a leading number out of a display string: "$575K" → ["$", "575", "K"]. */
const NUMERIC = /^(\D*)([\d][\d,]*)(.*)$/;

/**
 * Animates a numeric stat from 0 to its value when it scrolls into view.
 * Keeps any prefix/suffix ("$", "%", "K", "×") intact, and renders the
 * value as-is for ranges (e.g. "2–3 wks") or anything without a clean
 * leading number. Respects prefers-reduced-motion.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(NUMERIC);
  const isRange = /\d\s*[–-]\s*\d/.test(value);
  const animatable = !!match && !isRange;
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = value.match(NUMERIC);
    if (!parsed || /\d\s*[–-]\s*\d/.test(value)) return;
    const el = ref.current;
    if (!el) return;

    const prefix = parsed[1];
    const suffix = parsed[3];
    const target = parseInt(parsed[2].replace(/,/g, ""), 10);
    const format = (n: number) => prefix + n.toLocaleString("en-US") + suffix;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(format(target));
      return;
    }

    setDisplay(format(0));
    let raf = 0;
    let startTs = 0;
    const duration = 1400;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setDisplay(format(Math.round(ease(p) * target)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            raf = requestAnimationFrame(tick);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {animatable ? display : value}
    </span>
  );
}
