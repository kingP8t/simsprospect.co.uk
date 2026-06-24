/**
 * Case study data. Each entry here drives:
 *   - the featured card on the homepage `#cases` section
 *   - the full detail page at /case-studies/{slug}
 *
 * Add a new case study by appending an object to `caseStudies` —
 * the route and homepage update automatically.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  /** Human-readable month + year, e.g. "January 2025". */
  date: string;
  headline: string;
  /**
   * Optional hero image. Drop a file at `/public{src}` (e.g.
   * `/public/case-studies/home-lead-gen.jpg`) and the styled placeholder
   * is automatically replaced. Leave undefined to use the placeholder.
   */
  image?: { src: string; alt: string; width: number; height: number };
  /** Two-stat summary shown on the homepage card. */
  summary: {
    body: string;
    primaryMetric: { value: string; label: string };
    secondaryMetric: { value: string; label: string };
  };
  about: string;
  challenges: { title: string; body: string }[];
  solution: {
    intro: string;
    sections: { title: string; body: string; bullets: string[] }[];
  };
  results: { value: string; label: string; sublabel: string }[];
  testimonial: { quote: string; author: string; role?: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "home-lead-gen",
    client: "Home Lead Gen",
    industry: "Digital marketing agency",
    date: "January 2025",
    headline:
      "Marketing agency 3× their pipeline without adding headcount — 186 qualified appointments booked.",
    summary: {
      body: "Home Lead Gen wanted to grow without building an internal sales team. We ran their outbound end-to-end, with messaging tuned for the home services niche they serve.",
      primaryMetric: { value: "186", label: "qualified appointments" },
      secondaryMetric: { value: "£450K", label: "new revenue" },
    },
    about:
      "Home Lead Gen is a specialised marketing agency focused on the home services industry. They help contractors, home improvement companies, and service providers generate qualified leads through digital marketing — SEO, PPC, and social media advertising.",
    challenges: [
      {
        title: "Scale without hiring",
        body: "The agency wanted to grow their client base significantly but couldn't absorb the overhead of building an internal sales team. They needed a way to scale lead generation without increasing fixed costs.",
      },
      {
        title: "Niche industry expertise",
        body: "Reaching home services contractors required understanding their pain points, seasonal patterns, and communication preferences — not a templated outbound playbook.",
      },
    ],
    solution: {
      intro:
        "We ran their outbound motion end to end, from prospecting through to booked appointments, with weekly reporting back to leadership.",
      sections: [
        {
          title: "Done-for-you appointment setting",
          body: "End-to-end ownership of the outbound process so the agency's leadership could focus on delivery and client relationships.",
          bullets: [
            "Built targeted lists of home services companies by trade",
            "Developed seasonal messaging aligned with industry cycles",
            "Multi-channel outreach combining LinkedIn and email",
          ],
        },
        {
          title: "Industry-specific messaging",
          body: "Crafted campaigns that spoke directly to contractor pain points instead of recycled marketing-agency copy.",
          bullets: [
            "Lead-quality-over-quantity positioning",
            "ROI-focused proof points from similar businesses",
            "Seasonal campaign adjustments for peak periods",
          ],
        },
      ],
    },
    results: [
      {
        value: "186",
        label: "Qualified appointments",
        sublabel: "Meetings with home services business owners",
      },
      {
        value: "£450K",
        label: "New revenue",
        sublabel: "Direct revenue attributed to booked appointments",
      },
      {
        value: "3×",
        label: "ROI",
        sublabel: "Return on investment within the first 6 months",
      },
      {
        value: "88%",
        label: "Show rate",
        sublabel: "Consistent appointment attendance throughout the campaign",
      },
    ],
    testimonial: {
      quote:
        "They became an extension of our team. 186 qualified appointments delivered. The ROI was undeniable — and we didn't have to hire a single salesperson.",
      author: "Mikhail Antonchanka",
    },
  },

  {
    slug: "ecommerce-development-agency",
    client: "E-commerce development agency",
    industry: "E-commerce development",
    // ⚠️ CONFIRM exact month — engagement is ongoing at time of writing.
    date: "Q1 2026 — ongoing",
    headline:
      "15 qualified sales meetings in 90 days for an e-commerce development agency.",
    summary: {
      body: "An e-commerce development agency needed a steady pipeline of discovery calls with founders and heads of e-commerce. In three months we delivered 15 qualified appointments and hit 100% of the agreed KPIs — and the engagement is still running.",
      primaryMetric: { value: "15", label: "qualified sales meetings" },
      secondaryMetric: { value: "100%", label: "of KPIs met" },
    },
    about:
      "An e-commerce development agency that builds platforms for growing online retailers. Strong delivery work and a steady flow of referrals — but no repeatable outbound channel to put them in front of new founders and heads of e-commerce.",
    challenges: [
      {
        title: "Outbound was the missing channel",
        body: "Strong work and steady referrals couldn't substitute for a repeatable way to reach the right brands. Without outbound, growth was capped at whoever happened to walk through the door.",
      },
      {
        title: "Messaging that sounded like them, not a script",
        body: "They didn't want a generic “quick question” template that would burn their domain and embarrass the brand. They needed outreach that reflected the platforms they build on and the kind of brand they work with.",
      },
    ],
    solution: {
      intro:
        "We rebuilt the targeting from the ground up, owned deliverability, and handed the team only meetings that were qualified, confirmed, and on the calendar.",
      sections: [
        {
          title: "Built the right list",
          body: "Their existing target list was too broad. We redefined the ICP and re-sourced contacts against the sharper profile — verified, enriched, and ready for outreach.",
          bullets: [
            "Rebuilt the ICP around firmographics, tech stack, and buying triggers",
            "Re-sourced the prospect list against the new profile",
            "Enriched every contact with decision-maker name, role, verified email, and LinkedIn",
          ],
        },
        {
          title: "Outreach that sounded like the client",
          body: "Email sequences and LinkedIn touches written around their actual positioning — not recycled templates. We owned deliverability and replies end-to-end.",
          bullets: [
            "Sequences built around the specific platforms they build on and the results they get",
            "Domain warm-up and deliverability managed — campaigns landed in primary inboxes",
            "Replies, objections, and scheduling handled until each meeting was on the calendar",
          ],
        },
      ],
    },
    results: [
      {
        value: "15",
        label: "Qualified meetings",
        sublabel: "Booked in the first 90 days",
      },
      {
        value: "100%",
        label: "Of KPIs met",
        sublabel: "Appointment volume, quality, and response rates",
      },
      {
        value: "✓",
        label: "Deliverability",
        sublabel: "Inboxes stayed warm, sender reputation intact",
      },
      {
        value: "Ongoing",
        label: "Engagement",
        sublabel: "Client extended past the initial pilot term",
      },
    ],
    testimonial: {
      quote:
        "The project started slowly while we figured out the best way to work together — but once everything clicked, results came fast. In three months, SIMS PROSPECTS delivered 15 qualified appointments and met all our KPIs. They learned our product, refined our ICP, and built outreach that worked. We're happy with the results and still working with them.",
      author: "Mr Burn",
      role: "Director, e-commerce development agency",
    },
  },

  {
    slug: "fast-digital-marketing",
    client: "Fast Digital Marketing",
    industry: "B2B SaaS",
    date: "January 2026 — ongoing",
    headline:
      "137 qualified demos and a steady 12–13 booked appointments every month for a B2B SaaS team.",
    summary: {
      body: "Fast Digital Marketing needed to scale into new markets but couldn't make outbound stable on their own. We took over the motion end-to-end — and turned an unpredictable channel into a reliable monthly pipeline.",
      primaryMetric: { value: "137", label: "qualified demos" },
      secondaryMetric: { value: "12–13/mo", label: "booked appointments" },
    },
    about:
      "Fast Digital Marketing is a B2B SaaS company that needed a partner to help them scale into new markets and reach the right audiences. Strong product, capable team — but no consistent way to put themselves in front of the right buyers.",
    challenges: [
      {
        title: "Scale into new markets, reliably",
        body: "They needed a partner to open conversations with the right audiences in new segments. Outbound on their own had been inconsistent — meetings came in fits and starts, with no rhythm to plan revenue around.",
      },
      {
        title: "Lead quality, not just volume",
        body: "Generic outbound was burning calendar time on demos that weren't real fits. They needed every meeting to land with a verified decision-maker who actually matched their ICP.",
      },
    ],
    solution: {
      intro:
        "We built and ran a complete outbound program with 2–5 SIMS PROSPECTS team members on the day-to-day — owning prospecting, messaging, scheduling, and qualification end-to-end.",
      sections: [
        {
          title: "Done-for-you outbound",
          body: "We refined the ICP into three core segments, built targeted lead lists for each, and ran short personalised sequences tuned to what each group actually responds to.",
          bullets: [
            "Refined the ICP into three core segments and built targeted lead lists for each",
            "Short personalised email + LinkedIn sequences per segment",
            "Tested angles, CTAs, and message lengths to improve engagement",
          ],
        },
        {
          title: "Systematic appointment setting",
          body: "Every demo on their calendar was a vetted, qualified meeting — not a lead to sort through. Daily outreach kept the volume up; qualification kept the quality up.",
          bullets: [
            "Daily outreach via email and LinkedIn, including follow-ups and re-engagement",
            "Qualification criteria applied to every lead before scheduling",
            "Warm handoff and weekly progress updates to the client team",
          ],
        },
      ],
    },
    results: [
      {
        value: "137",
        label: "Qualified demos",
        sublabel: "Booked since January",
      },
      {
        value: "12–13",
        label: "Per month",
        sublabel: "Consistent monthly cadence",
      },
      {
        value: "✓",
        label: "Customers won",
        sublabel: "Several demos converted to long-term customers",
      },
      {
        value: "Ongoing",
        label: "Engagement",
        sublabel: "Outbound now stable and reliable",
      },
    ],
    testimonial: {
      quote:
        "SIMS PROSPECTS took over the outbound process, and the demos came in steadily — the lead quality was exceptionally strong. Outbound became stable and reliable, something we couldn't achieve on our own before.",
      author: "Fatima Ahmed",
      role: "Product Lead Manager, Fast Digital Marketing",
    },
  },
];

/** Look up a single case study by slug. */
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
