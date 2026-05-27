/* ============================================================
 * posts.js — blog post metadata used by the blog index card list
 * and the `prev/next` controls on each post page.
 * Exposed at window.Posts. Sorted newest-first.
 * ============================================================ */
(function () {
  const Posts = [
    {
      slug: "how-much-does-a-website-cost",
      title: "How Much Does a Website Cost in 2026? A Founder's Real Pricing Breakdown",
      summary:
        "I quote websites for a living. Here's the honest breakdown of what landing pages, business sites, web apps, and full SaaS products cost in 2026 — what changes the price, and what's worth paying for.",
      tags: ["Pricing", "Freelance", "Business"],
      published: "2026-05-22",
      readMin: 8,
      accent: "orange",
    },
    {
      slug: "how-long-to-build-a-website",
      title: "How Long Does It Take to Build a Website? Realistic Timelines by Project Type",
      summary:
        "Honest delivery estimates for landing pages, business sites, web apps, and SaaS — based on what I actually ship, not aspirational sales-page claims.",
      tags: ["Process", "Timelines", "Freelance"],
      published: "2026-05-08",
      readMin: 6,
      accent: "violet",
    },
    {
      slug: "how-to-hire-a-web-developer",
      title: "How to Hire a Web Developer Without Getting Burned",
      summary:
        "What to look for, what to avoid, and the exact questions to ask before signing a contract. Written from the developer side — so you know what good answers sound like.",
      tags: ["Hiring", "Freelance", "Business"],
      published: "2026-04-26",
      readMin: 9,
      accent: "emerald",
    },
    {
      slug: "modern-web-design-principles",
      title: "Modern Web Design Principles That Still Work in 2026",
      summary:
        "Trends come and go. The principles behind sites that convert haven't changed in a decade. Hierarchy, contrast, motion that earns its place, and why 'clean' isn't a design system.",
      tags: ["Design", "UX", "Principles"],
      published: "2026-04-12",
      readMin: 7,
      accent: "rose",
    },
    {
      slug: "qr-ordering-system",
      title: "Building a QR Ordering System with Node.js, MongoDB, and WebSockets",
      summary:
        "How I built a real-time restaurant ordering platform serving live customers — with QR-code menus, WebSocket order tracking, and an admin dashboard. Lessons from production.",
      tags: ["Node.js", "MongoDB", "WebSockets", "Case Study"],
      published: "2026-04-12",
      readMin: 9,
      accent: "orange",
    },
    {
      slug: "website-vs-web-app",
      title: "Website vs Web App: Which Do You Actually Need?",
      summary:
        "The difference matters more than most clients realize, and it changes the budget by 3-10x. Here's a clear framework for picking the right one for what you're building.",
      tags: ["Strategy", "Architecture", "Business"],
      published: "2026-03-30",
      readMin: 6,
      accent: "cyan",
    },
    {
      slug: "telecloud-telegram-storage",
      title: "TeleCloud: Building Unlimited Cloud Storage on the Telegram API",
      summary:
        "I built a serverless file storage platform on the Telegram Bot API. Zero infra cost, zero GB limits. Here's the architecture, tradeoffs, and what I'd change.",
      tags: ["Telegram API", "Node.js", "Architecture"],
      published: "2026-03-18",
      readMin: 7,
      accent: "cyan",
    },
    {
      slug: "responsive-design-mistakes",
      title: "8 Responsive Design Mistakes That Quietly Kill Conversions",
      summary:
        "Most 'mobile-friendly' sites still fail in subtle ways. Tap targets, font sizing, broken forms, fold problems — the list of fixes that actually move the needle.",
      tags: ["Design", "Mobile", "UX"],
      published: "2026-03-04",
      readMin: 8,
      accent: "rose",
    },
    {
      slug: "edge-apis-cloudflare-workers-hono",
      title: "Edge-First APIs with Cloudflare Workers and Hono.js",
      summary:
        "A practical guide to shipping production APIs on Cloudflare's edge — auth, rate limiting, KV caching, type-safety with Hono. Real config, real numbers.",
      tags: ["Cloudflare", "Hono.js", "TypeScript", "Tutorial"],
      published: "2026-02-22",
      readMin: 11,
      accent: "violet",
    },
  ];

  window.Posts = Posts;
})();
