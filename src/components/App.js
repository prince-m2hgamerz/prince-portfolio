/* ============================================================
 * App — top-level shell: scroll progress, navbar, sections.
 * Mounts to #root.
 * ============================================================ */
(function () {
  function ScrollProgress() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      let ticking = false;
      const update = () => {
        const h = document.documentElement;
        const total = h.scrollHeight - h.clientHeight;
        const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
        el.style.transform = `scaleX(${pct / 100})`;
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
      <div className="progress-fixed fixed top-0 left-0 right-0 h-[2px]">
        <div
          ref={ref}
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, rgba(167,139,250,0.95), rgba(249,115,22,0.95))",
            transform: "scaleX(0)",
            transition: "transform 120ms linear",
          }}
        />
      </div>
    );
  }

  function App() {
    React.useEffect(() => {
      // scroll-margin-top is also set in CSS, but reapply for older browsers.
      document.querySelectorAll("main section[id]").forEach((s) => {
        s.style.scrollMarginTop = "84px";
      });
    }, []);

    return (
      <>
        <ScrollProgress />
        <window.Navbar />
        <main className="bg-black text-white" id="main">
          <window.Hero />
          <window.Capabilities />
          <window.TechStack />
          <window.Work />
          <window.Services />
          <window.FAQ />
          <window.Connect />
        </main>
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
})();
