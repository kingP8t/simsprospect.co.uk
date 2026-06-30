import { headers } from "next/headers";

export type Currency = "usd" | "gbp";

/**
 * Pick the display currency from the visitor's country.
 *
 * Vercel injects `x-vercel-ip-country` on every request and overwrites any
 * client-supplied value at the edge, so the header is safe to trust in
 * production. UK visitors see GBP; everyone else sees USD. Falls back to USD
 * when the header is absent (e.g. local dev, or geo lookup unavailable).
 *
 * Note: reading request headers opts the calling route into dynamic
 * rendering, which is required for per-visitor currency.
 */
export async function getCurrency(): Promise<Currency> {
  const country = (await headers()).get("x-vercel-ip-country");
  return country === "GB" ? "gbp" : "usd";
}
