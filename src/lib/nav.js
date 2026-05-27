/* ============================================================
 * nav.js — global hash-link click delegation.
 *
 * Loaded on every page (homepage + blog) so any anchor click
 * targeting a same-page section gets smooth-scrolled with the
 * navbar offset honored. Cross-page links are left to the
 * browser. Runs once at import time, no React dependency.
 * ============================================================ */
(function () {
  if (window.__navHandlerInstalled__) return;
  window.__navHandlerInstalled__ = true;

  const onClick = (e) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (e.button !== undefined && e.button !== 0) return;

    let el = e.target;
    while (el && el !== document.body && el.tagName !== "A") el = el.parentElement;
    if (!el || el.tagName !== "A") return;

    const href = el.getAttribute("href");
    if (!href) return;
    if (el.target && el.target !== "" && el.target !== "_self") return;

    // Pure same-page hash (#contact, #work).
    if (href.startsWith("#")) {
      let target = null;
      try { target = document.querySelector(href); } catch (_) { return; }
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== href) {
        try { history.pushState(null, "", href); } catch (_) {}
      }
      return;
    }

    // Path-prefixed hash (/#contact). Same-page only when on the homepage.
    if (href.startsWith("/#") || href.startsWith("/index.html#")) {
      const onHome =
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html";
      if (!onHome) return;
      const hash = "#" + href.split("#")[1];
      let target = null;
      try { target = document.querySelector(hash); } catch (_) { return; }
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== hash) {
        try { history.pushState(null, "", hash); } catch (_) {}
      }
    }
  };

  document.addEventListener("click", onClick);

  // Cross-page hash navigation. When a user lands on /#contact from another
  // page, the section may not exist yet (React hasn't rendered it). Watch
  // until it appears, then scroll into view.
  function scrollToInitialHash() {
    const hash = window.location.hash;
    if (!hash || hash === "#" || hash === "#main") return;

    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "auto", block: "start" });
        });
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    const obs = new MutationObserver(() => {
      if (tryScroll()) obs.disconnect();
    });
    obs.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => obs.disconnect(), 4000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scrollToInitialHash, { once: true });
  } else {
    scrollToInitialHash();
  }
})();
