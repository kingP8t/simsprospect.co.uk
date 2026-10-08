"use client";

import { useState, useMemo } from "react";
import { Cta } from "@/app/components/Cta";

/* ─── Tier configuration ─────────────────────────────────────── */

interface Tier {
  label: string;
  range: [number, number]; // min/max turnover in £
  costPerMeeting: number;
  defaultDealSize: number;
  recommendedMeetings: number;
  conversionRate: number; // decimal
  setupFee: number;
}

const TIERS: Tier[] = [
  {
    label: "Under £1m",
    range: [0, 999_999],
    costPerMeeting: 500,
    defaultDealSize: 25_000,
    recommendedMeetings: 6,
    conversionRate: 0.2,
    setupFee: 1500,
  },
  {
    label: "£1m – £5m",
    range: [1_000_000, 4_999_999],
    costPerMeeting: 600,
    defaultDealSize: 75_000,
    recommendedMeetings: 8,
    conversionRate: 0.22,
    setupFee: 1500,
  },
  {
    label: "£5m – £10m",
    range: [5_000_000, 9_999_999],
    costPerMeeting: 750,
    defaultDealSize: 150_000,
    recommendedMeetings: 10,
    conversionRate: 0.25,
    setupFee: 2500,
  },
  {
    label: "£10m – £50m",
    range: [10_000_000, 49_999_999],
    costPerMeeting: 900,
    defaultDealSize: 300_000,
    recommendedMeetings: 12,
    conversionRate: 0.25,
    setupFee: 3500,
  },
  {
    label: "£50m – £100m",
    range: [50_000_000, 99_999_999],
    costPerMeeting: 1100,
    defaultDealSize: 500_000,
    recommendedMeetings: 15,
    conversionRate: 0.25,
    setupFee: 4000,
  },
  {
    label: "£100m+",
    range: [100_000_000, Infinity],
    costPerMeeting: 1350,
    defaultDealSize: 750_000,
    recommendedMeetings: 20,
    conversionRate: 0.25,
    setupFee: 5000,
  },
];

/* ─── Helpers ────────────────────────────────────────────────── */

function fmt(n: number): string {
  if (n >= 1_000_000) return `£${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}m`;
  if (n >= 1_000) return `£${(n / 1_000).toFixed(0)}k`;
  return `£${n.toLocaleString("en-GB")}`;
}

function fmtFull(n: number): string {
  return `£${n.toLocaleString("en-GB")}`;
}

/* ─── Component ──────────────────────────────────────────────── */

export function PipelineCalculator() {
  const [tierIndex, setTierIndex] = useState<number | null>(null);
  const [customDealSize, setCustomDealSize] = useState<string>("");
  const [customMeetings, setCustomMeetings] = useState<string>("");

  const tier = tierIndex !== null ? TIERS[tierIndex] : null;

  const dealSize = customDealSize
    ? parseInt(customDealSize.replace(/[^0-9]/g, ""), 10) || 0
    : tier?.defaultDealSize ?? 0;

  const meetingsPerMonth = customMeetings
    ? parseInt(customMeetings, 10) || 0
    : tier?.recommendedMeetings ?? 0;

  const results = useMemo(() => {
    if (!tier) return null;

    const monthlyInvestment = meetingsPerMonth * tier.costPerMeeting;
    const quarterlyMeetings = meetingsPerMonth * 3;
    const winsPerQuarter = Math.round(quarterlyMeetings * tier.conversionRate);
    const revenuePerQuarter = winsPerQuarter * dealSize;
    const quarterlyInvestment = monthlyInvestment * 3 + tier.setupFee;
    const roi =
      quarterlyInvestment > 0
        ? revenuePerQuarter / quarterlyInvestment
        : 0;
    const annualRevenue = revenuePerQuarter * 4;
    const annualInvestment = monthlyInvestment * 12 + tier.setupFee;
    const annualRoi = annualInvestment > 0 ? annualRevenue / annualInvestment : 0;

    return {
      costPerMeeting: tier.costPerMeeting,
      monthlyInvestment,
      setupFee: tier.setupFee,
      quarterlyMeetings,
      winsPerQuarter,
      revenuePerQuarter,
      quarterlyInvestment,
      roi,
      annualRevenue,
      annualInvestment,
      annualRoi,
      conversionRate: tier.conversionRate,
    };
  }, [tier, meetingsPerMonth, dealSize]);

  return (
    <div className="mx-auto max-w-4xl">
      {/* ── Inputs ── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
        <h3 className="text-lg font-bold text-slate-900">
          Tell us about your business
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          We&rsquo;ll estimate the pipeline and ROI you can expect from
          our construction lead generation service.
        </p>

        {/* Turnover selector */}
        <fieldset className="mt-8">
          <legend className="text-sm font-semibold text-slate-900">
            Annual turnover / value of goods &amp; services
          </legend>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {TIERS.map((t, i) => (
              <button
                key={t.label}
                type="button"
                onClick={() => {
                  setTierIndex(i);
                  setCustomDealSize("");
                  setCustomMeetings("");
                }}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  tierIndex === i
                    ? "bg-brand text-white ring-2 ring-brand ring-offset-2"
                    : "bg-slate-50 text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </fieldset>

        {/* Deal size + meetings — only show after turnover is picked */}
        {tier && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="deal-size"
                className="block text-sm font-semibold text-slate-900"
              >
                Average project / order value
              </label>
              <p className="mt-0.5 text-xs text-slate-500">
                Suggested: {fmtFull(tier.defaultDealSize)} for your tier
              </p>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                  £
                </span>
                <input
                  id="deal-size"
                  type="text"
                  inputMode="numeric"
                  placeholder={tier.defaultDealSize.toLocaleString("en-GB")}
                  value={customDealSize}
                  onChange={(e) => setCustomDealSize(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-7 pr-4 text-sm text-slate-900 shadow-sm ring-1 ring-slate-900/5 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="meetings"
                className="block text-sm font-semibold text-slate-900"
              >
                Meetings per month
              </label>
              <p className="mt-0.5 text-xs text-slate-500">
                Recommended: {tier.recommendedMeetings} for your tier
              </p>
              <input
                id="meetings"
                type="number"
                min={1}
                max={50}
                placeholder={String(tier.recommendedMeetings)}
                value={customMeetings}
                onChange={(e) => setCustomMeetings(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm ring-1 ring-slate-900/5 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Results ── */}
      {results && results.monthlyInvestment > 0 && (
        <div className="mt-8 space-y-6">
          {/* Investment summary */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Your investment
            </h3>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Cost per meeting
                </dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  {fmtFull(results.costPerMeeting)}
                </dd>
              </div>
              <div className="rounded-xl bg-slate-50 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Monthly investment
                </dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  {fmtFull(results.monthlyInvestment)}
                </dd>
                <dd className="mt-0.5 text-xs text-slate-500">
                  {meetingsPerMonth} meetings × {fmtFull(results.costPerMeeting)}
                </dd>
              </div>
              <div className="rounded-xl bg-slate-50 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  One-off setup fee
                </dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  {fmtFull(results.setupFee)}
                </dd>
                <dd className="mt-0.5 text-xs text-slate-500">
                  List build, sequences &amp; infrastructure
                </dd>
              </div>
            </dl>
          </div>

          {/* Pipeline projection */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-900/5 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              Your projected pipeline
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Based on a conservative {Math.round(results.conversionRate * 100)}%
              meeting-to-win conversion rate
            </p>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-slate-50 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Meetings / quarter
                </dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900">
                  {results.quarterlyMeetings}
                </dd>
              </div>
              <div className="rounded-xl bg-slate-50 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Specification wins / quarter
                </dt>
                <dd className="mt-1 text-2xl font-bold text-brand">
                  {results.winsPerQuarter}
                </dd>
              </div>
              <div className="rounded-xl bg-slate-50 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Revenue / quarter
                </dt>
                <dd className="mt-1 text-2xl font-bold text-brand">
                  {fmt(results.revenuePerQuarter)}
                </dd>
              </div>
              <div className="rounded-xl bg-slate-50 px-5 py-4">
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Annual revenue
                </dt>
                <dd className="mt-1 text-2xl font-bold text-brand">
                  {fmt(results.annualRevenue)}
                </dd>
              </div>
            </dl>
          </div>

          {/* ROI highlight */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/20 blur-3xl"
            />
            <div className="relative">
              <h3 className="text-lg font-bold text-white">
                Return on investment
              </h3>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    First-quarter investment
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    {fmtFull(results.quarterlyInvestment)}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Includes {fmtFull(results.setupFee)} setup
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    First-quarter revenue
                  </p>
                  <p className="mt-1 text-2xl font-bold text-brand-light">
                    {fmtFull(results.revenuePerQuarter)}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    From {results.winsPerQuarter} specification win{results.winsPerQuarter !== 1 ? "s" : ""}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    ROI multiple
                  </p>
                  <p className="mt-1 text-4xl font-bold text-brand-light">
                    {results.roi.toFixed(0)}x
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {fmtFull(results.annualRevenue)} annual at {results.annualRoi.toFixed(0)}x
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-relaxed text-slate-300">
                  This projection is conservative — it doesn&rsquo;t include
                  repeat orders, framework agreements, or the long-term
                  specification relationships that can multiply a single
                  win&rsquo;s value by 5–10x.
                </p>
                <div className="shrink-0">
                  <Cta size="lg">Book Your Free Pipeline Audit</Cta>
                </div>
              </div>
            </div>
          </div>

          {/* Assumptions footnote */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-5">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Assumptions
            </h4>
            <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate-500">
              <li>
                • Conversion rate of {Math.round(results.conversionRate * 100)}% from qualified meeting to
                specification win (industry benchmarks range 20–30%)
              </li>
              <li>
                • Revenue figures represent first-order value only — lifetime
                value from repeat specifications and framework agreements is
                typically 3–10x higher
              </li>
              <li>
                • Setup fee is a one-time cost in the first quarter covering
                prospect list building, sequence creation, and campaign
                infrastructure
              </li>
              <li>
                • Actual results depend on your product, market positioning,
                target regions, and sales team capacity
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Empty state prompt */}
      {!tier && (
        <div className="mt-8 rounded-2xl border-2 border-dashed border-slate-200 px-6 py-12 text-center">
          <p className="text-sm font-medium text-slate-500">
            Select your annual turnover above to see your projected pipeline and&nbsp;ROI.
          </p>
        </div>
      )}
    </div>
  );
}
