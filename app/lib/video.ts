/**
 * Central video configuration.
 *
 * Every video on the site is gated behind an `enabled` flag here. They are
 * all OFF by default so the live site is unchanged until you have a real
 * file to show — no broken players.
 *
 * To turn a video on:
 *   1. Export the MP4 from your video tool (e.g. Higgsfield).
 *   2. Drop it (and an optional poster .jpg) into `/public/videos/`.
 *      A path of "/videos/founder-intro.mp4" maps to
 *      `public/videos/founder-intro.mp4`.
 *   3. Set `enabled: true` for that entry below.
 *
 * ⚠️ Honesty note: AI-generated video is fine for explainers, founder
 * intros, and background motion. Do NOT use it to fabricate client
 * testimonials — present only genuine, attributable recordings as
 * "what clients say". Misleading social proof can breach UK ASA/CAP
 * rules and destroys the credibility you're trying to build.
 */
export type VideoSource = {
  enabled: boolean;
  /** Path under /public, e.g. "/videos/founder-intro.mp4". */
  src: string;
  /** Optional still shown before play, e.g. "/videos/founder-intro.jpg". */
  poster?: string;
  /** Accessible label / heading for the video. */
  title?: string;
  /** Optional caption shown under the player. */
  caption?: string;
};

type VideoConfig = {
  /** Founder / explainer video shown in the homepage hero. */
  hero: VideoSource;
  /** Muted, looping background B-roll behind the hero text. */
  heroBackground: Omit<VideoSource, "poster" | "caption">;
  /** "How it works" explainer shown on the homepage and service pages. */
  explainer: VideoSource;
};

export const video: VideoConfig = {
  hero: {
    enabled: true, // ⚠️ Placeholder clip — swap in your real Higgsfield export.
    src: "/videos/founder-intro.mp4",
    poster: "/videos/founder-intro.jpg",
    title: "Meet SIMS PROSPECTS",
    caption: "60 seconds on how we book qualified meetings for your team.",
  },
  heroBackground: {
    enabled: false,
    src: "/videos/hero-broll.mp4",
    title: "Background motion",
  },
  explainer: {
    enabled: false,
    src: "/videos/how-it-works.mp4",
    poster: "/videos/how-it-works.jpg",
    title: "How it works",
    caption: "A 2-minute walkthrough of our process, start to finish.",
  },
};
