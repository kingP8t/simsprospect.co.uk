"use client";

import { useState } from "react";
import { site } from "@/app/lib/site";

/**
 * Hero lead-capture form (Leadium-style form-first hero).
 *
 * Posts directly to Web3Forms — no backend needed, works on a static
 * deploy. Set the access key in an env var before going live:
 *
 *   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-from-web3forms.com
 *
 * Until the key is set, the form still renders and the "book a call"
 * fallback below it always works.
 */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields, humans don't.
    if (data.get("botcheck")) return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setError(
        "The form isn't connected yet. Please book a call below instead.",
      );
      return;
    }

    setStatus("submitting");
    setError("");
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New free pipeline audit request — SIMS PROSPECTS");
    data.append("from_name", site.name + " website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error — please try again, or book a call below.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-200">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-tint text-brand">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-slate-900">
          Request received
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Thanks — we&apos;ll be in touch within one working day to set up your
          free pipeline audit.
        </p>
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Or grab a time now
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
      <h2 className="text-lg font-bold tracking-tight text-slate-900">
        Get a free pipeline audit
      </h2>
      <p className="mt-1 text-sm text-slate-600">
        Tell us where you are now. We&apos;ll show you where the meetings are.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        {/* Honeypot field — visually hidden, off-screen for a11y */}
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px]"
        />

        <div>
          <label htmlFor="lead-name" className="sr-only">
            Full name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div>
          <label htmlFor="lead-email" className="sr-only">
            Work email
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Work email"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div>
          <label htmlFor="lead-company" className="sr-only">
            Company
          </label>
          <input
            id="lead-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company"
            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-lg bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Get my free audit"}
        </button>

        {status === "error" && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <p className="text-center text-xs text-slate-500">
          No spam. No long contracts. Just a clear read on your pipeline.
        </p>
      </form>
    </div>
  );
}
