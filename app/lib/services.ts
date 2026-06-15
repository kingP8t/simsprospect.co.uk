/**
 * Service data. Each entry here drives:
 *   - the service card on the homepage `#services` section
 *   - the full service landing page at /services/{slug}
 *
 * Add a new service by appending an object to `services` — the route,
 * homepage card, and footer links update automatically.
 *
 * The page structure mirrors a high-converting B2B agency service page:
 * hero + proof stats → the problem → outcomes band → what's included →
 * how it works → why us → FAQ → CTA.
 */
export type Service = {
  slug: string;
  /** Full service name, e.g. "Cold calling". */
  name: string;
  /** One-line summary used on the homepage card. */
  cardDescription: string;
  /** The outcome line on the homepage card. */
  cardOutcome: string;
  /** SEO title (slotted into the layout title template). */
  metaTitle: string;
  metaDescription: string;

  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    /** Two proof stats shown in the hero. */
    stats: { value: string; label: string }[];
  };

  /** "Is this you?" — the problem the service solves. */
  problem: {
    title: string;
    intro: string;
    points: string[];
  };

  /** Big-number outcomes shown on the dark band. */
  outcomes: { value: string; label: string; sublabel: string }[];

  /** What's included / deliverables grid. */
  deliverables: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };

  /** Numbered "how it works" steps. */
  process: {
    title: string;
    steps: { title: string; body: string }[];
  };

  /** Differentiators. */
  why: {
    title: string;
    points: { title: string; body: string }[];
  };

  /** Service-specific FAQ. `links` turns phrases in the answer into
      internal links (first occurrence of each phrase). */
  faqs: {
    question: string;
    answer: string;
    links?: { text: string; href: string }[];
  }[];

  /** Slug of a case study that proves this service, shown mid-page. */
  caseStudy?: string;

  /** Slugs of related services shown at the foot of the page. */
  related: string[];
};

export const services: Service[] = [
  {
    slug: "cold-calling",
    name: "Cold calling",
    cardDescription:
      "Outbound calling into your target accounts, run by trained callers using messaging built around your offer.",
    cardOutcome: "Conversations with decision-makers, not gatekeepers.",
    metaTitle: "B2B Cold Calling Services",
    metaDescription:
      "Trained UK-based cold callers open conversations with decision-makers in your target accounts — and book qualified meetings straight onto your calendar.",
    hero: {
      eyebrow: "Cold calling",
      title: "Conversations with decision-makers, booked by people who do this all day",
      subtitle:
        "We run outbound calling into your target accounts with trained callers, sharp messaging, and a number to plan around — so your reps spend their time closing, not dialling.",
      stats: [
        { value: "100+", label: "dials per caller, per day" },
        { value: "2–3 wks", label: "to first booked meetings" },
      ],
    },
    problem: {
      title: "Cold calling works — when it's done properly",
      intro:
        "Most teams know the phone still books meetings. The problem is making it consistent. Done off the side of a desk, it stalls fast:",
      points: [
        "Reps avoid the phone, so dial volume never reaches the level that produces meetings.",
        "Scripts sound like scripts — gatekeepers screen them out before they reach the decision-maker.",
        "No call data, so you can't tell what's working or what to change.",
        "Hiring and training an in-house caller takes months and carries real overhead.",
      ],
    },
    outcomes: [
      {
        value: "100+",
        label: "Dials per day",
        sublabel: "Per caller — the volume that actually produces conversations",
      },
      {
        value: "Decision-makers",
        label: "Who we reach",
        sublabel: "Past the gatekeeper, into the people who can say yes",
      },
      {
        value: "Weekly",
        label: "Reporting",
        sublabel: "Dials, connects, conversations, and booked meetings",
      },
      {
        value: "Month-to-month",
        label: "Commitment",
        sublabel: "Scale activity up or down without hiring or firing",
      },
    ],
    deliverables: {
      title: "What's included",
      intro:
        "Everything needed to turn the phone into a reliable channel — without you managing any of it.",
      items: [
        {
          title: "Trained callers on your campaign",
          body: "UK-based callers who run outbound for a living, briefed on your offer and objection-handling before they make a single dial.",
        },
        {
          title: "Messaging built around your offer",
          body: "Call openers, talk tracks, and objection responses written around what you sell and who you sell to — approved by you before anything goes out.",
        },
        {
          title: "Verified target list",
          body: "Built and verified against your ideal customer profile, refreshed monthly so callers are always working a clean, accurate list.",
        },
        {
          title: "Meetings booked direct to your calendar",
          body: "Interested, qualified prospects are booked straight onto your reps' calendars — confirmed and ready to run.",
        },
        {
          title: "Call-level reporting",
          body: "Dials, connects, conversations, and meetings reported weekly so you can see exactly what the channel is producing.",
        },
        {
          title: "Continuous message testing",
          body: "We test openers, angles, and CTAs every few weeks and keep what books meetings — so results compound over time.",
        },
      ],
    },
    process: {
      title: "How we run it",
      steps: [
        {
          title: "ICP & offer workshop",
          body: "We map your ideal customer, your offer, and the objections you hear most — then turn that into talk tracks you approve.",
        },
        {
          title: "List build & caller briefing",
          body: "We build and verify your target list and brief the callers so they sound like they know your business — because they will.",
        },
        {
          title: "Dial, connect, book",
          body: "Callers run daily outbound at volume, get past gatekeepers, qualify interest, and book meetings straight onto your calendar.",
        },
        {
          title: "Report & refine",
          body: "Every week you get the numbers and a clear view of what we're changing. Messaging sharpens, and booked meetings climb.",
        },
      ],
    },
    why: {
      title: "Why teams hand us the phone",
      points: [
        {
          title: "No ramp, no overhead",
          body: "A trained team and a proven process from week one — no recruiting, onboarding, or management on your side.",
        },
        {
          title: "Quality over noise",
          body: "We agree the qualification bar up front and only book meetings that clear it. You get conversations worth your reps' time.",
        },
        {
          title: "You keep the controls",
          body: "You approve the scripts and positioning before anything goes out. We represent your brand the way you want it represented.",
        },
      ],
    },
    faqs: [
      {
        question: "Are the callers UK-based?",
        answer:
          "Yes. Our cold-calling and account-management team is UK-based. Where we use specialist sub-teams for high-volume list building, they sit under our day-to-day management and follow your approved messaging.",
      },
      {
        question: "How quickly will we see booked meetings?",
        answer:
          "Most clients see their first qualified meetings within two to three weeks, once the list is built and your talk tracks are approved. Volume builds steadily from there.",
      },
      {
        question: "Do we approve the script?",
        answer:
          "Always. You sign off the openers, talk tracks, and objection responses before any dials are made — and we refine them with you as the campaign runs.",
      },
      {
        question: "Is your data GDPR-compliant?",
        answer:
          "Yes. We source from licensed B2B data providers and verify every record. All processing is in line with UK GDPR, with documented lawful basis and immediate honouring of opt-outs.",
      },
    ],
    caseStudy: "home-lead-gen",
    related: ["b2b-appointment-setting", "b2b-lead-generation"],
  },

  {
    slug: "linkedin-inbound-marketing",
    name: "LinkedIn inbound marketing",
    cardDescription:
      "Content and outreach that builds your authority and pulls qualified prospects toward a conversation with your team.",
    cardOutcome: "Warmer prospects who already know who you are.",
    metaTitle: "LinkedIn Inbound Marketing & Outreach",
    metaDescription:
      "We build your authority on LinkedIn with content and targeted outreach that pulls qualified, warmer prospects toward a conversation with your team.",
    hero: {
      eyebrow: "LinkedIn inbound marketing",
      title: "Become the company buyers already know before the first call",
      subtitle:
        "We combine authority-building content with targeted LinkedIn outreach so qualified prospects come to a conversation already warm — not cold and sceptical.",
      stats: [
        { value: "Warmer", label: "every conversation starts ahead" },
        { value: "2-way", label: "content + outreach, run together" },
      ],
    },
    problem: {
      title: "Your buyers are on LinkedIn — but they don't know you yet",
      intro:
        "LinkedIn is where your market researches, compares, and decides. Most B2B teams leave that ground uncovered:",
      points: [
        "Founders and leaders know they should post, but never find the time — so the profile goes quiet.",
        "Pure cold outreach gets ignored because there's no presence behind it to make it credible.",
        "Connections pile up but nothing turns into a conversation, let alone a meeting.",
        "No system ties the content and the outreach together, so neither compounds.",
      ],
    },
    outcomes: [
      {
        value: "Authority",
        label: "Built for you",
        sublabel: "A consistent presence that makes outreach land warm",
      },
      {
        value: "Targeted",
        label: "Outreach",
        sublabel: "Connection and conversation with people who fit your ICP",
      },
      {
        value: "Inbound",
        label: "Replies",
        sublabel: "Prospects who reach out because they already know you",
      },
      {
        value: "Booked",
        label: "Meetings",
        sublabel: "Warm conversations converted to calls on your calendar",
      },
    ],
    deliverables: {
      title: "What's included",
      intro:
        "A complete LinkedIn motion — presence and outreach run as one system, so they reinforce each other.",
      items: [
        {
          title: "Content that builds authority",
          body: "A steady stream of posts written in your voice, around the problems your buyers care about — so your profile works for you while you work.",
        },
        {
          title: "Optimised profile",
          body: "We turn your profile from a CV into a landing page: clear positioning, proof, and a reason for the right people to connect.",
        },
        {
          title: "Targeted connection campaigns",
          body: "We connect with decision-makers who match your ICP and open conversations that feel personal, not automated.",
        },
        {
          title: "Conversation & qualification",
          body: "We nurture replies, answer questions, and qualify interest — then book the genuinely interested onto your calendar.",
        },
        {
          title: "Engagement that compounds",
          body: "Thoughtful commenting and engagement in your space keeps you visible to the buyers you want, between posts.",
        },
        {
          title: "Reporting on what matters",
          body: "Connections, replies, conversations, and booked meetings — reported weekly so you can see the pipeline building.",
        },
      ],
    },
    process: {
      title: "How we run it",
      steps: [
        {
          title: "Positioning & profile",
          body: "We sharpen how you're positioned, rewrite your profile to convert, and agree the themes your content will own.",
        },
        {
          title: "Content engine",
          body: "We plan and write posts in your voice on a consistent cadence, so your authority builds week over week.",
        },
        {
          title: "Targeted outreach",
          body: "We connect with ICP-fit decision-makers and start real conversations — warmed by the presence you now have.",
        },
        {
          title: "Convert & report",
          body: "Interested prospects are qualified and booked. You get weekly reporting and a content calendar you can see ahead.",
        },
      ],
    },
    why: {
      title: "Why this beats outreach alone",
      points: [
        {
          title: "Presence makes outreach land",
          body: "When a prospect checks your profile and sees a credible, active leader, your message gets read instead of deleted.",
        },
        {
          title: "Written in your voice",
          body: "You approve the positioning and tone. The content sounds like you — not like a content mill.",
        },
        {
          title: "Built to compound",
          body: "Content and outreach reinforce each other, so every week of activity makes the next one easier and warmer.",
        },
      ],
    },
    faqs: [
      {
        question: "Do you post from my personal profile or a company page?",
        answer:
          "Usually your personal profile — personal brands drive far more reach and trust on LinkedIn than company pages. We can support the company page alongside it if that fits your strategy.",
      },
      {
        question: "Will the content actually sound like me?",
        answer:
          "Yes. We start from your positioning, your stories, and your point of view, and you approve the voice and themes up front. Nothing publishes without your sign-off in the early weeks.",
      },
      {
        question: "Is this automated outreach?",
        answer:
          "Outreach is targeted and personal, kept within LinkedIn's limits to protect your account. We focus on real conversations with ICP-fit people, not blasting connection requests.",
      },
      {
        question: "How is this different from cold calling?",
        answer:
          "Cold calling opens conversations directly by phone; LinkedIn inbound warms prospects so they come to you. Many clients run both — see our cold calling and appointment setting services.",
        links: [
          { text: "cold calling", href: "/services/cold-calling" },
          {
            text: "appointment setting",
            href: "/services/b2b-appointment-setting",
          },
        ],
      },
    ],
    caseStudy: "fast-digital-marketing",
    related: ["cold-calling", "b2b-appointment-setting"],
  },

  {
    slug: "b2b-appointment-setting",
    name: "B2B appointment setting",
    cardDescription:
      "We qualify interest and book vetted meetings straight onto your sales team's calendar — confirmed and ready to run.",
    cardOutcome: "A calendar of meetings that fit your ideal customer.",
    metaTitle: "B2B Appointment Setting Services",
    metaDescription:
      "We qualify interest and book vetted, confirmed meetings straight onto your sales team's calendar — so your reps walk into conversations with real, ICP-fit buyers.",
    hero: {
      eyebrow: "B2B appointment setting",
      title: "A calendar full of meetings that actually fit your ideal customer",
      subtitle:
        "We own the outbound motion end-to-end — prospecting, messaging, and qualification — and hand your reps only meetings that are vetted, confirmed, and ready to run.",
      stats: [
        { value: "Vetted", label: "every meeting clears your bar" },
        { value: "Direct", label: "booked onto your reps' calendars" },
      ],
    },
    problem: {
      title: "Your reps should be closing, not chasing",
      intro:
        "Appointment setting is where outbound either pays off or falls apart. Without a dedicated motion, the cracks show fast:",
      points: [
        "Reps spend their best hours prospecting instead of selling — so quota slips.",
        "Calendars fill with unqualified meetings that waste time and dent morale.",
        "Pipeline is lumpy and unpredictable, so you can't forecast revenue with confidence.",
        "No-shows go unmanaged, quietly eating into the meetings you did book.",
      ],
    },
    outcomes: [
      {
        value: "Qualified",
        label: "Every meeting",
        sublabel: "Clears the criteria you set before it's booked",
      },
      {
        value: "Confirmed",
        label: "On your calendar",
        sublabel: "Booked direct, with reminders to protect show rate",
      },
      {
        value: "Predictable",
        label: "Pipeline",
        sublabel: "A steady monthly cadence you can plan revenue around",
      },
      {
        value: "Weekly",
        label: "Reporting",
        sublabel: "Booked meetings, show rate, and pipeline created",
      },
    ],
    deliverables: {
      title: "What's included",
      intro:
        "A done-for-you appointment-setting motion — you focus on the close, we handle everything up to it.",
      items: [
        {
          title: "ICP & qualification criteria",
          body: "We agree exactly who counts as a qualified meeting up front, so every booking lands with a real fit — not just anyone who said yes.",
        },
        {
          title: "Multi-channel outreach",
          body: "Phone, email, and LinkedIn run together to reach prospects where they respond — managed end-to-end by our team.",
        },
        {
          title: "Interest qualification",
          body: "We qualify every prospect against your criteria before booking, so reps walk into conversations that can actually progress.",
        },
        {
          title: "Direct calendar booking",
          body: "Confirmed meetings land straight on your reps' calendars, with the context they need to run the call.",
        },
        {
          title: "No-show management",
          body: "We confirm, remind, re-engage no-shows, and reschedule — and report show rate every week so it stays high.",
        },
        {
          title: "Weekly pipeline reporting",
          body: "Meetings booked, show rate, and pipeline created — plus a clear view of what we're changing to lift results.",
        },
      ],
    },
    process: {
      title: "How we run it",
      steps: [
        {
          title: "Define the fit",
          body: "We lock down your ICP and qualification criteria so 'a meeting' always means a meeting worth your rep's time.",
        },
        {
          title: "Build & launch outreach",
          body: "We build the verified target list and launch multi-channel outreach with messaging you've approved.",
        },
        {
          title: "Qualify & book",
          body: "We qualify interest against your criteria and book confirmed meetings straight onto your reps' calendars.",
        },
        {
          title: "Protect & report",
          body: "We manage confirmations and no-shows and report show rate and pipeline weekly — then refine to lift both.",
        },
      ],
    },
    why: {
      title: "Why teams trust us with their calendar",
      points: [
        {
          title: "Quality is the whole point",
          body: "We're measured on qualified, attended meetings — not vanity volume. Your reps' time is the metric we protect.",
        },
        {
          title: "An extension of your team",
          body: "We work as part of your sales motion, with warm handoffs and the context each meeting needs to convert.",
        },
        {
          title: "Show rate, managed",
          body: "Confirmations, reminders, and no-show re-engagement are built in — so booked meetings actually happen.",
        },
      ],
    },
    faqs: [
      {
        question: "How do you make sure meetings are actually qualified?",
        answer:
          "We agree your ICP and qualification criteria up front, and only meetings that clear that bar get booked. We report on quality every week so the definition stays sharp.",
      },
      {
        question: "What happens if a meeting no-shows?",
        answer:
          "We re-engage no-shows and reschedule wherever possible. We report show rate weekly, and if a campaign trends below benchmark we adjust qualification criteria at our cost, not yours.",
      },
      {
        question: "Which channels do you use to book meetings?",
        answer:
          "Whichever your buyers respond to — typically a mix of cold calling, email, and LinkedIn run together. We tune the channel mix to your market.",
        links: [{ text: "cold calling", href: "/services/cold-calling" }],
      },
      {
        question: "How soon will meetings start landing?",
        answer:
          "Most clients see their first qualified meetings within two to three weeks, once lists are built and messaging is approved, then a steady cadence builds from there.",
      },
    ],
    caseStudy: "fast-digital-marketing",
    related: ["cold-calling", "b2b-lead-generation"],
  },

  {
    slug: "b2b-lead-generation",
    name: "B2B lead generation",
    cardDescription:
      "Sourcing and qualifying leads that match your ideal customer profile, so your pipeline is built on fit, not volume.",
    cardOutcome: "A steady supply of leads worth your reps' time.",
    metaTitle: "B2B Lead Generation Services",
    metaDescription:
      "We source, enrich, and qualify leads that match your ideal customer profile — so your pipeline is built on fit, not volume, and your reps only work leads worth their time.",
    hero: {
      eyebrow: "B2B lead generation",
      title: "A pipeline built on fit, not volume",
      subtitle:
        "We source, enrich, and qualify leads that match your ideal customer profile — so every lead your reps touch is one worth their time, and your pipeline grows on quality.",
      stats: [
        { value: "Verified", label: "every contact, before outreach" },
        { value: "ICP-fit", label: "leads matched to your profile" },
      ],
    },
    problem: {
      title: "More leads isn't the goal — better-fit leads is",
      intro:
        "Volume-first lead generation feels productive and quietly kills pipeline. The symptoms are familiar:",
      points: [
        "Lists are broad and stale, so reps waste time chasing people who were never a fit.",
        "Contact data is wrong — bounced emails and dead numbers burn your sender reputation and your reps' patience.",
        "No clear ICP, so 'lead' means anything, and conversion stays low.",
        "Building and verifying lists in-house eats hours your team should spend selling.",
      ],
    },
    outcomes: [
      {
        value: "ICP-fit",
        label: "Targeting",
        sublabel: "Leads matched to firmographics, tech stack, and triggers",
      },
      {
        value: "Verified",
        label: "Contact data",
        sublabel: "Email, phone, and LinkedIn checked before outreach",
      },
      {
        value: "Enriched",
        label: "Every record",
        sublabel: "Decision-maker name, role, and context attached",
      },
      {
        value: "Refreshed",
        label: "Monthly",
        sublabel: "Lists kept clean and current as your market shifts",
      },
    ],
    deliverables: {
      title: "What's included",
      intro:
        "A clean, qualified, ready-to-work lead list — so your outreach starts from fit instead of guesswork.",
      items: [
        {
          title: "ICP definition",
          body: "We build a sharp ideal customer profile around firmographics, tech stack, and buying triggers — the foundation every list is sourced against.",
        },
        {
          title: "Targeted list building",
          body: "We source prospects that match the profile, not a broad scrape — so your reps work fit, not volume.",
        },
        {
          title: "Contact enrichment",
          body: "Every record gets a decision-maker name, role, verified email, phone, and LinkedIn — ready for outreach on any channel.",
        },
        {
          title: "Data verification",
          body: "We verify contact data before it reaches you, protecting deliverability and keeping your sender reputation intact.",
        },
        {
          title: "Lead qualification",
          body: "We screen for fit and intent so the leads you act on are genuinely worth your reps' time.",
        },
        {
          title: "Monthly refresh",
          body: "Lists are refreshed and re-verified monthly, so your pipeline never runs on stale data.",
        },
      ],
    },
    process: {
      title: "How we run it",
      steps: [
        {
          title: "Define the ICP",
          body: "We work with you to define exactly who fits — firmographics, tech stack, and the buying triggers that signal intent.",
        },
        {
          title: "Source & enrich",
          body: "We source prospects against that profile and enrich each one with verified, decision-maker-level contact data.",
        },
        {
          title: "Verify & qualify",
          body: "Every record is verified and screened for fit, so the list you receive is clean and ready to work.",
        },
        {
          title: "Deliver & refresh",
          body: "We hand over a ready-to-work list and refresh it monthly — and can run the outreach for you if you want it done end-to-end.",
        },
      ],
    },
    why: {
      title: "Why fit beats volume",
      points: [
        {
          title: "Built on your ICP",
          body: "Every lead is sourced against a profile we define with you — so conversion starts higher because fit is higher.",
        },
        {
          title: "Data you can trust",
          body: "Verified before delivery. Fewer bounces, protected deliverability, and reps who don't waste time on dead records.",
        },
        {
          title: "Plug into outreach",
          body: "Take the list and run it yourself, or let us run the cold calling, LinkedIn, and appointment setting end-to-end.",
        },
      ],
    },
    faqs: [
      {
        question: "Where does your data come from, and is it compliant?",
        answer:
          "We source from licensed B2B data providers and verify every record before delivery. All processing is in line with UK GDPR — legitimate interest for B2B contact, documented lawful basis, and immediate opt-out handling.",
      },
      {
        question: "Do you just provide a list, or run the outreach too?",
        answer:
          "Either. We can hand over a clean, qualified list for your team to work, or run the full motion — cold calling, LinkedIn, and appointment setting — on top of it.",
        links: [
          { text: "cold calling", href: "/services/cold-calling" },
          {
            text: "appointment setting",
            href: "/services/b2b-appointment-setting",
          },
        ],
      },
      {
        question: "How do you define our ideal customer profile?",
        answer:
          "We run an ICP workshop covering firmographics, tech stack, and buying triggers, then source every lead against that profile and refine it as results come in.",
      },
      {
        question: "How fresh is the data?",
        answer:
          "Lists are verified before delivery and refreshed monthly, so your pipeline runs on current, accurate contact data rather than a one-off scrape that decays.",
      },
    ],
    caseStudy: "ecommerce-development-agency",
    related: ["b2b-appointment-setting", "cold-calling"],
  },
];

/** Look up a single service by slug. */
export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
