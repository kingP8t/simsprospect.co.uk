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
  email: "hello@simsprospects.co.uk", // project support enquiries
  salesEmail: "king@simsprospects.co.uk", // sales enquiries
  // Cal.com discovery-call link
  bookingUrl: "https://cal.com/simsprospect/30min",
  // Company LinkedIn page
  linkedinUrl: "https://www.linkedin.com/company/sims-prospects",
} as const;

/**
 * Founder / lead contact shown on the team section and the final CTA.
 * ⚠️ CONFIRM — replace placeholder bio/photo before going live.
 */
export const founder = {
  name: "King",
  role: "CEO & Founder, SIMS PROSPECTS",
  /**
   * Square photo, ~600×600, kept under ~200 KB. Drop the file at
   * /public/team/king.jpg (it maps to "/team/king.jpg"). Until the file
   * exists, a clean initials tile shows in its place — no broken image.
   */
  photoSrc: "/team/king.jpg",
  bio: "You get a predictable pipeline without adding headcount. King is hands-on with every account, designing the campaign, sharpening your offer, and booking the meetings that grow your revenue.",
} as const;

/**
 * Additional team members shown as a row beneath the founder.
 * Leave empty to show just the founder. To add someone:
 *   1. Drop a square photo (~400×400, under ~150 KB) in /public/team/,
 *      e.g. /public/team/jane-doe.jpg
 *   2. Add an entry below pointing `photoSrc` at "/team/jane-doe.jpg".
 * A clean initials tile shows for anyone without a photo yet.
 */
export const team: {
  name: string;
  role: string;
  photoSrc: string;
  linkedinUrl?: string;
}[] = [
  {
    name: "Ayuba Tomy",
    role: "Creative Director",
    photoSrc: "/team/ayuba-tomy.webp",
  },
  {
    name: "S Vijaya",
    role: "Copywriter & Marketing",
    photoSrc: "/team/s-vijaya.webp",
  },
  {
    name: "V Amalash",
    role: "Performance Marketing Manager",
    photoSrc: "/team/v-amalash.webp",
  },
  {
    name: "Upasana Jain",
    role: "Email Marketing Specialist",
    photoSrc: "/team/upasana-jain.webp",
  },
  {
    name: "Nana Namrata",
    role: "Social Media Manager",
    photoSrc: "/team/nana-namrata.webp",
  },
];

/**
 * Pricing tiers shown on the Pricing section.
 * ⚠️ CONFIRM — adjust prices, names, and inclusions to match your offer.
 */
export const pricing = [
  {
    name: "LinkedIn Outreach",
    volume: "600+ prospects per month",
    priceMonthly: "$397",
    cadence: "/month",
    tagline: "Land in the inboxes of decision-makers who fit your ICP.",
    features: [
      "Qualified, verified prospect lists built for you",
      "Personalised outreach copy that gets replies",
      "Connection + InMail campaigns managed end to end",
      "Dedicated account manager",
      "A/B testing & weekly results report",
    ],
    cta: "Book a call",
    highlighted: false,
  },
  {
    name: "Cold Email Outreach",
    volume: "10,000+ emails per month",
    priceMonthly: "$1,995",
    cadence: "/month",
    tagline: "Done-for-you email campaigns built to start conversations.",
    features: [
      "Unlimited, done-for-you email campaigns",
      "Inbox warmup & deliverability handled",
      "AI-powered personalisation at scale",
      "Intent signals to reach buyers ready now",
      "CRM integration, tracking & account management",
    ],
    cta: "Book a call",
    highlighted: false,
  },
  {
    name: "Cold Call Outreach",
    volume: "5,000+ calls per month",
    priceMonthly: "$3,500",
    cadence: "/month",
    tagline: "A dedicated SDR dialling your market every day.",
    features: [
      "Dedicated SDR making 300 dials/day",
      "Breakthrough call scripts built for your offer",
      "B2B appointments booked direct to your calendar",
      "Power dialer, call recordings & ongoing coaching",
      "Monthly sales review & account management",
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
  companyNumber: "12111166", // Companies House number
  address: "[registered office address]",
  icoNumber: "12111100", // ICO registration number
  jurisdiction: "England and Wales",
} as const;

/**
 * True while a legal detail still holds its bracketed placeholder
 * (e.g. "[ICO registration number]"). Legal pages use this to omit the
 * clause entirely rather than render raw brackets to visitors.
 */
export function isPlaceholder(value: string): boolean {
  return value.trim().startsWith("[");
}

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
