"use client";

import { useEffect, useState } from "react";
import { Cta } from "@/app/components/Cta";

/**
 * Persistent booking bar for mobile. The desktop header CTA is hidden on
 * small screens, so this keeps a always-reachable "Book a call" in front of
 * mobile visitors. Slides in once the user scrolls past the hero, and is
 * hidden on md+ where the header CTA is visible.
 */
export function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_20px_rgba(15,23,42,0.1)] backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex items-center gap-3">
        <Cta href="#audit" variant="secondary" size="md" className="flex-1">
          Free audit
        </Cta>
        <Cta size="md" className="flex-1">
          Book a call
        </Cta>
      </div>
    </div>
  );
}
