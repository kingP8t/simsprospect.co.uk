"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from "@/app/lib/site";

/**
 * UK GDPR cookie consent banner.
 *
 * Non-essential cookies (e.g. analytics) must NOT load until the visitor
 * actively consents — so any analytics/tracking script should be gated on
 * `localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted"`.
 *
 * "Reject" is given equal prominence to "Accept", as the regulation requires.
 *
 * Visibility is read from localStorage via useSyncExternalStore so there is
 * no SSR/client mismatch and no state-in-effect.
 */

/** Re-run the snapshot whenever consent changes (this tab or another). */
function subscribe(callback: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** The banner is visible until the visitor has made a choice. */
function getSnapshot(): boolean {
  try {
    return !localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return true; // localStorage unavailable — still offer the choice
  }
}

/** On the server we cannot know the visitor's choice, so render nothing. */
function getServerSnapshot(): boolean {
  return false;
}

function choose(choice: "accepted" | "rejected") {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
  } catch {
    /* ignore — choice simply won't persist */
  }
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function CookieBanner() {
  const visible = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-slate-200 bg-white shadow-[0_-4px_24px_rgba(15,23,42,0.08)]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm leading-relaxed text-slate-600">
          We use essential cookies to make this site work. With your consent,
          we&apos;d also use analytics cookies to understand how the site is
          used and improve it. Read our{" "}
          <Link
            href="/cookies"
            className="font-medium text-brand underline hover:text-brand-dark"
          >
            cookie policy
          </Link>
          .
        </p>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Accept all
          </button>
        </div>
      </div>
    </aside>
  );
}
