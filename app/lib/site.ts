/**
 * Central site configuration.
 * ⚠️ CONFIRM the placeholder values below before going live.
 */
export const site = {
  name: "SIMS PROSPECTS",
  tagline: "B2B Lead Generation Agency",
  description:
    "SIMS PROSPECTS builds a predictable pipeline of qualified meetings for B2B teams through cold calling, LinkedIn outreach, and appointment setting.",
  url: "https://simsprospects.co.uk",
  email: "hello@simsprospects.co.uk", // project support enquiries — ⚠️ CONFIRM mailbox exists
  salesEmail: "king@simsprospects.co.uk", // sales enquiries — ⚠️ CONFIRM mailbox exists
  // Cal.com discovery-call link
  bookingUrl: "https://cal.com/simsprospect/30min",
} as const;

/**
 * Founder / lead contact shown on the team section and the final CTA.
 * ⚠️ CONFIRM — replace placeholder bio/photo before going live.
 */
export const founder = {
  name: "King",
  role: "Founder, SIMS PROSPECTS",
  /** Drop a square photo at /public/founder.jpg or update the path. */
  photoSrc: "/videos/founder-intro.jpg",
  bio: "King founded SIMS PROSPECTS to give B2B teams a predictable pipeline without growing their headcount. He works hands-on with every client to design the campaign, sharpen the offer, and book the meetings that move your number.",
  linkedinUrl: "https://www.linkedin.com/in/kingoladpeter/", // ⚠️ CONFIRM
} as const;

/**
 * Pricing tiers shown on the Pricing section.
 * ⚠️ CONFIRM — adjust prices, names, and inclusions to match your offer.
 */
export const pricing = [
  {
    name: "Outbound",
    priceMonthly: "£2,500",
    cadence: "/month",
    tagline: "Cold calling + LinkedIn outreach run as one campaign.",
    features: [
      "Ideal customer profile workshop",
      "Built-and-verified target list (refreshed monthly)",
      "Trained cold callers into decision-makers",
      "LinkedIn outreach + content support",
      "Weekly activity & results report",
    ],
    cta: "Book a call",
    highlighted: false,
  },
  {
    name: "Full Pipeline",
    priceMonthly: "£3,500",
    cadence: "/month",
    tagline: "Outbound + appointment setting + lead generation, end to end.",
    features: [
      "Everything in Outbound",
      "B2B appointment setting — meetings booked direct to your calendar",
      "Inbound lead qualification & follow-up",
      "Account-management + monthly sales review",
      "Custom messaging & A/B testing every 4 weeks",
    ],
    cta: "Book a call",
    highlighted: true,
  },
] as const;

/**
 * Company / legal details shown on the legal pages.
 * ⚠️ CONFIRM every value below before publishing — these appear in
 * legally significant text.
 */
export const legal = {
  companyName: "Awesome Creations LTD TRADING AS SIMS PROSPECTS", // registered company name
  companyNumber: "[Companies House number]", // e.g. 12345678
  address: "[registered office address]",
  icoNumber: "[ICO registration number]",
  jurisdiction: "England and Wales",
} as const;

/** Key used to store the visitor's cookie choice in localStorage. */
export const COOKIE_CONSENT_KEY = "sims-cookie-consent";

/** Window event fired whenever the cookie choice changes, so the banner re-evaluates. */
export const COOKIE_CONSENT_EVENT = "sims:cookie-consent-change";

/** Primary in-page navigation links. */
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case studies", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;
