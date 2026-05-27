/* ============================================================
 * content.js — All copy, projects, services, FAQ, stack groups
 * Edit this file to update site content without touching components.
 * Exposed at window.Content
 * ============================================================ */
(function () {
  const Content = {
    /* ─────────────────── Hero ─────────────────── */
    hero: {
      badge: "Now booking Q3 builds — APIs, web apps, AI",
      headline: "Self-taught. Still learning. Shipping anyway.",
      srContext:
        "Prince Kumar — founder of M2H Web Solution, a full-stack web development studio based in India. I design, build, and ship production web apps, REST APIs, and AI-integrated tools end-to-end.",
      stats: [
        { value: "4+", label: "Years shipping", fullLabel: "Years Shipping Production Code" },
        { value: "9+", label: "Languages", fullLabel: "Languages I Build With" },
        { value: "20+", label: "Projects shipped", fullLabel: "Projects Shipped to Real Users" },
      ],
      partners: [
        "React", "Next.js", "Node", "Hono", "MongoDB",
        "Postgres", "Cloudflare", "TypeScript", "Python", "Go",
      ],
    },

    /* ─────────────────── Capabilities ─────────────────── */
    capabilities: [
      {
        iconPath:
          "M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z",
        tags: ["Full-Stack", "End-to-End", "Production-Ready", "Solo Built"],
        title: "Web Apps That Ship",
        body:
          "I design, build, and deploy complete products — frontend, backend, infra, the lot. From client dashboards to live restaurants serving real orders.",
      },
      {
        iconPath:
          "M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z",
        tags: ["REST", "Edge-First", "Hono.js", "Cloudflare"],
        title: "APIs Built to Scale",
        body:
          "Type-safe APIs running on Cloudflare Workers, Node, or Go. Auth, rate limiting, and clean docs included — no Postman screenshots required.",
      },
      {
        iconPath:
          "M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z",
        tags: ["LLMs", "Bots", "Workflow", "Automation"],
        title: "AI & Automation Tools",
        body:
          "LLM-powered tools, Telegram bots, and pipelines that quietly run in the background and replace hours of busywork with one webhook.",
      },
    ],

    /* ─────────────────── Tech Stack ─────────────────── */
    stackGroups: [
      {
        label: "Languages",
        count: "9 langs",
        items: [
          { name: "Python", level: 5, note: "Bots · Flask · Scraping · APIs" },
          { name: "JavaScript", level: 5, note: "Node · Workers · DOM · APIs" },
          { name: "PHP", level: 5, note: "REST · cURL · cPanel hosting" },
          { name: "TypeScript", level: 4, note: "Type-safe APIs · Workers" },
          { name: "Go", level: 4, note: "High-perf APIs · CLIs" },
          { name: "Bash", level: 4, note: "Termux · Server automation" },
          { name: "C / C++", level: 3, note: "Low-level · Reverse eng." },
          { name: "Ruby", level: 3, note: "Sinatra · Scripting" },
        ],
      },
      {
        label: "Frontend",
        count: "7 tools",
        items: [
          { name: "React", level: 4, note: "SPA · State · Hooks" },
          { name: "Next.js", level: 4, note: "App Router · SSR · Full-stack" },
          { name: "Tailwind", level: 4, note: "Utility-first · Dark UIs" },
          { name: "Vite", level: 4, note: "Fast dev · Bundling" },
          { name: "Vue.js", level: 3, note: "Reactive UIs · Composition" },
          { name: "Svelte", level: 3, note: "Compiler-driven UIs" },
          { name: "Framer Motion", level: 3, note: "Motion · Page transitions" },
        ],
      },
      {
        label: "Backend & Edge",
        count: "6 runtimes",
        items: [
          { name: "Node.js", level: 5, note: "REST · WebSockets · Auth" },
          { name: "Hono.js", level: 4, note: "Edge-first APIs" },
          { name: "Express", level: 4, note: "Classic Node servers" },
          { name: "Flask", level: 4, note: "Python REST APIs" },
          { name: "Gin (Go)", level: 3, note: "High-perf Go APIs" },
          { name: "CF Workers", level: 4, note: "Globally-distributed APIs" },
        ],
      },
      {
        label: "Data & Infra",
        count: "8 tools",
        items: [
          { name: "MongoDB", level: 4, note: "Document stores · Aggregations" },
          { name: "PostgreSQL", level: 4, note: "Relational · Indexing" },
          { name: "MySQL", level: 4, note: "Transactional workloads" },
          { name: "Redis", level: 3, note: "Cache · Pub/sub" },
          { name: "Firebase", level: 4, note: "Auth · Firestore · Hosting" },
          { name: "Cloudflare", level: 4, note: "DNS · Workers · R2 · KV" },
          { name: "Docker", level: 3, note: "Containerization" },
          { name: "Linux / Nginx", level: 4, note: "Reverse proxy · TLS" },
        ],
      },
    ],

    stackHighlights: [
      { name: "Python", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "Node.js", level: 5 },
      { name: "PHP", level: 5 },
      { name: "Cloudflare", level: 4 },
      { name: "MongoDB", level: 4 },
    ],

    /* ─────────────────── Featured Work ─────────────────── */
    featuredProject: {
      emoji: "🍽️",
      tag: "Flagship Build",
      title: "QR Smart Ordering System",
      blurb:
        "A full restaurant management platform serving real customers daily. QR-code table ordering, real-time WebSocket order updates, and an admin dashboard covering menu, orders, pricing, and analytics — zero customer app install required.",
      stack: ["Node.js", "MongoDB", "WebSockets", "React", "Express"],
      highlights: [
        "Live order status sync via WebSockets",
        "Admin panel — menu, orders, pricing, reports",
        "Deployed to a real client and serving customers",
      ],
      metrics: [
        { v: "100%", k: "Uptime" },
        { v: "<200ms", k: "Order latency" },
        { v: "Live", k: "Production" },
      ],
      accent: "orange",
      href: "https://farresidency.prince.m2hio.in/",
      display: "farresidency.prince.m2hio.in",
    },

    projects: [
      {
        emoji: "☁️",
        title: "TeleCloud",
        subtitle: "Serverless storage",
        blurb:
          "Unlimited file storage powered by the Telegram Bot API. No server costs, no GB caps. Built for devs who hate paying for storage.",
        stack: ["Telegram API", "Node", "Cloudflare"],
        accent: "cyan",
        href: "https://telecloud.prince.m2hio.in/",
        display: "telecloud.prince.m2hio.in",
      },
      {
        emoji: "🔌",
        title: "M2H API Playground",
        subtitle: "Browser-native HTTP client",
        blurb:
          "Postman without the bloat or the sign-in wall. All HTTP methods, custom headers, auth tokens, real-time response inspection.",
        stack: ["Vanilla JS", "Fetch API", "CSS"],
        accent: "violet",
        href: "https://m2h-api-playground.vercel.app/",
        display: "m2h-api-playground.vercel.app",
      },
      {
        emoji: "🔧",
        title: "MobileRepairXYZ",
        subtitle: "Repair shop platform",
        blurb:
          "End-to-end repair shop platform commissioned by a real client. Service booking, live status tracking, full admin panel.",
        stack: ["React", "Node", "MongoDB"],
        accent: "emerald",
        href: "https://mobilerepairxyz.in/",
        display: "mobilerepairxyz.in",
      },
      {
        emoji: "💬",
        title: "PrinceVChat",
        subtitle: "P2P video calling",
        blurb:
          "Real-time peer-to-peer video. No login, no app install, shareable links. WebRTC signaling built from scratch — no SDKs.",
        stack: ["WebRTC", "TypeScript", "Vite"],
        accent: "rose",
        href: "https://chat.prince.m2hio.in/",
        display: "chat.prince.m2hio.in",
      },
      {
        emoji: "🌐",
        title: "Personal Portfolio",
        subtitle: "Developer site",
        blurb:
          "Performance-focused developer portfolio with smooth motion design. Showcases all M2H projects, skills, and contact info.",
        stack: ["React", "Tailwind", "Framer"],
        accent: "slate",
        href: "https://prince.m2hio.in",
        display: "prince.m2hio.in",
      },
    ],

    /* ─────────────────── Services ─────────────────── */
    services: [
      {
        title: "Web App Development",
        body:
          "Full-stack apps from design to deployment. React, Next.js, Node.js — built end-to-end with production architecture.",
        tags: ["React", "Next.js", "Node"],
        tone: "violet",
      },
      {
        title: "API Design & Development",
        body:
          "RESTful, GraphQL, and microservices. Type-safe, well-documented, and built to scale on the edge.",
        tags: ["REST", "GraphQL", "Edge"],
        tone: "orange",
      },
      {
        title: "AI & Automation",
        body:
          "LLM integrations, Telegram bots, and workflow pipelines that take repetitive busywork off your plate.",
        tags: ["LLM", "Bots", "Pipelines"],
        tone: "violet",
      },
      {
        title: "Edge & Cloud Deploy",
        body:
          "Cloudflare Workers, Vercel, Docker, and CI/CD. Fast, cheap, globally distributed by default.",
        tags: ["Cloudflare", "Vercel", "Docker"],
        tone: "orange",
      },
      {
        title: "Auth & Security",
        body:
          "JWT, OAuth 2.0, session-based auth, and secure backend architecture done right the first time.",
        tags: ["JWT", "OAuth", "RBAC"],
        tone: "violet",
      },
      {
        title: "Open Source Collab",
        body:
          "Feature additions, bug fixes, and documentation improvements. Always happy to contribute upstream.",
        tags: ["OSS", "Docs", "Reviews"],
        tone: "orange",
      },
    ],

    process: [
      { n: "01", t: "Discovery call", d: "Free 30-min chat to understand what you're building and the constraints." },
      { n: "02", t: "Scope & quote", d: "A short doc with the plan, timeline, and a fixed-fee quote — no surprises." },
      { n: "03", t: "Build & ship", d: "I build in public to a staging URL with weekly demos and quick feedback loops." },
      { n: "04", t: "Handoff & support", d: "Production deploy, full docs, and 30 days of free post-launch support." },
    ],

    /* ─────────────────── FAQ ─────────────────── */
    faq: [
      {
        q: "Who is Prince Kumar?",
        a: "Prince Kumar is a self-taught full-stack engineer based in India and the founder of M2H Web Solution. He designs, builds, and ships production web applications, REST APIs, and AI-integrated tools end-to-end — without a team, without shortcuts.",
      },
      {
        q: "What is M2H Web Solution?",
        a: "M2H Web Solution is a one-person full-stack product studio founded by Prince Kumar. The studio builds web apps, edge-deployed APIs, AI tooling, and automation pipelines for clients across India and globally. Live work includes a QR-based restaurant ordering system, a serverless storage platform (TeleCloud), a browser-native API testing tool, and a peer-to-peer video chat product.",
      },
      {
        q: "What technologies does Prince work with?",
        a: "Prince works in 9+ programming languages with daily-driver expertise in Python, JavaScript, TypeScript, PHP, and Go. On the frontend he uses React, Next.js, Tailwind CSS, and Framer Motion. On the backend he builds with Node.js, Hono.js, Express, Flask, and Cloudflare Workers, backed by MongoDB, PostgreSQL, MySQL, and Firebase.",
      },
      {
        q: "Is Prince available for freelance projects?",
        a: "Yes. Prince is currently accepting freelance and consulting work for full-stack web apps, REST/GraphQL APIs, AI integrations, edge deployments, and authentication systems. Replies are sent within 24 hours via email at m2hgamerz.prince@gmail.com.",
      },
      {
        q: "How does Prince charge for projects?",
        a: "Every engagement starts with a free 30-minute discovery call, followed by a fixed-fee quote with a defined scope and timeline. Build progress is shared on a staging URL with weekly demos. The fee covers production deployment, full handover documentation, and 30 days of post-launch support.",
      },
      {
        q: "How do I contact Prince Kumar?",
        a: "The fastest way to reach Prince is email at m2hgamerz.prince@gmail.com. He also responds on LinkedIn (linkedin.com/in/prince-kumar-m2h), Twitter / X (@m2hgamerz), and through the contact form on prince.m2hio.in.",
      },
    ],

    /* ─────────────────── Contact ─────────────────── */
    contact: {
      email: "m2hgamerz.prince@gmail.com",
      website: "https://prince.m2hio.in",
      socials: {
        github: "https://github.com/prince-m2hgamerz",
        linkedin: "https://linkedin.com/in/prince-kumar-m2h",
        twitter: "https://twitter.com/m2hgamerz",
        instagram: "https://instagram.com/m2hgamerz",
      },
    },

    /* ─────────────────── Background videos ─────────────────── */
    videos: {
      hero:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4",
      capabilities:
        "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4",
    },

    /* ─────────────────── Navigation ─────────────────── */
    nav: [
      { label: "Home", href: "#home" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Stack", href: "#stack" },
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  };

  window.Content = Content;
})();
