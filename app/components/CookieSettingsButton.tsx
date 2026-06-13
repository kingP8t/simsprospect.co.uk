"use client";

import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from "@/app/lib/site";

/** Footer link that lets visitors change their cookie choice at any time. */
export function CookieSettingsButton() {
  function reopen() {
    try {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
  }

  return (
    <button
      type="button"
      onClick={reopen}
      className="text-sm text-slate-600 transition-colors hover:text-slate-900"
    >
      Cookie settings
    </button>
  );
}
