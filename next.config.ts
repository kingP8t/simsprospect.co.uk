import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next.js doesn't pick up an unrelated
  // lockfile higher up the filesystem.
  turbopack: {
    root: import.meta.dirname,
  },

  // Serve modern formats and sensible responsive breakpoints.
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 768, 1024, 1280, 1536],
  },

  /* Legacy WordPress URLs still in Google's index. These 301s recover
     traffic and pass link equity to the new pages once the domain is
     switched to this build. After launch, check Search Console →
     Pages → "Not found (404)" and add any extra legacy paths here. */
  async redirects() {
    return [
      { source: "/about", destination: "/#team", permanent: true },
      { source: "/services", destination: "/#services", permanent: true },
      { source: "/contact", destination: "/#audit", permanent: true },
      { source: "/case_study", destination: "/#cases", permanent: true },
      { source: "/case_study/:slug*", destination: "/#cases", permanent: true },
      { source: "/industry", destination: "/", permanent: true },
      { source: "/industry/:slug*", destination: "/", permanent: true },
      { source: "/blogs", destination: "/", permanent: true },
      { source: "/blogs/:slug*", destination: "/", permanent: true },
      { source: "/get-free-audit", destination: "/#audit", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:slug*", destination: "/", permanent: true },
      { source: "/category/:slug*", destination: "/", permanent: true },
      { source: "/tag/:slug*", destination: "/", permanent: true },
      { source: "/author/:slug*", destination: "/#team", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
    ];
  },

  /* Baseline security headers applied to every response. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          /* No includeSubDomains/preload: those force HTTPS on every
             subdomain and are hard to undo. Add them only once all
             subdomains are confirmed HTTPS. */
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
