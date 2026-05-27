/* ============================================================
 * analytics.js — minimal, privacy-friendly page-view tracker.
 * Loads Google Analytics 4 *if* window.GA_ID is set (set it in
 * index.html or via a meta tag). No-ops otherwise so we never
 * ship a tracking script with no destination.
 * ============================================================ */
(function () {
  // Pull from <meta name="ga-id" content="G-XXXXXX"> or window override.
  const meta = document.querySelector('meta[name="ga-id"]');
  const ID = window.GA_ID || (meta && meta.content) || null;
  if (!ID) return;

  // Respect Do-Not-Track.
  if (typeof navigator !== "undefined" && navigator.doNotTrack === "1") return;

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", ID, {
    anonymize_ip: true,
    send_page_view: true,
  });

  // Track hash-route changes on the SPA homepage.
  let lastPath = location.pathname + location.hash;
  window.addEventListener("hashchange", () => {
    const path = location.pathname + location.hash;
    if (path === lastPath) return;
    lastPath = path;
    gtag("event", "page_view", { page_path: path });
  });
})();
