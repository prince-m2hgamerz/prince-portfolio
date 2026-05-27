/* ============================================================
 * TechStack — highlights ribbon, category tabs, animated bars.
 * Exposed at window.TechStack
 * ============================================================ */
(function () {
  const LH = window.LiquidHover;
  const C = window.Content;

  function AnimatedBar({ pct }) {
    const ref = React.useRef(null);
    const [shown, setShown] = React.useState(false);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, []);
    return (
      <div ref={ref} className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: shown ? `${pct}%` : "0%",
            transition: "width 1100ms cubic-bezier(.2,.7,.2,1)",
            background: "linear-gradient(90deg, rgba(167,139,250,0.95), rgba(249,115,22,0.85))",
          }}
        />
      </div>
    );
  }

  function SkillRow({ name, level, note }) {
    const pct = (level / 5) * 100;
    return (
      <div>
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <div className="flex items-baseline gap-2 min-w-0 flex-1">
            <span className="text-sm font-body font-medium text-white truncate">{name}</span>
            <span className="hidden sm:inline text-[11px] text-white/45 font-body font-light truncate">
              {note}
            </span>
          </div>
          <span className="text-[11px] text-white/55 font-body tabular-nums shrink-0">
            {level}/5
          </span>
        </div>
        <AnimatedBar pct={pct} />
      </div>
    );
  }

  function StackGroup({ label, count, items }) {
    return (
      <LH className="liquid-glass rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-7 md:p-8 h-full">
        <div className="flex items-center justify-between mb-4 sm:mb-6 gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="liquid-glass rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[10px] sm:text-[11px] font-body text-white/80 font-medium shrink-0">
              {String(items.length).padStart(2, "0")}
            </span>
            <h3 className="font-heading italic text-white text-xl sm:text-3xl md:text-[2.25rem] tracking-[-1px] leading-none truncate">
              {label}
            </h3>
          </div>
          <span className="text-[10px] sm:text-[11px] text-white/55 font-body uppercase tracking-widest shrink-0">
            {count}
          </span>
        </div>
        <div className="space-y-3 sm:space-y-3.5">
          {items.map((it) => (
            <SkillRow key={it.name} {...it} />
          ))}
        </div>
      </LH>
    );
  }

  function TechStack() {
    const groups = C.stackGroups;
    const highlights = C.stackHighlights;
    const [active, setActive] = React.useState("All");
    const tabs = ["All", ...groups.map((g) => g.label)];
    const visible = active === "All" ? groups : groups.filter((g) => g.label === active);

    return (
      <section
        id="stack"
        className="relative ambient-bg overflow-hidden py-20 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20"
      >
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        <div className="relative z-10">
          <window.SectionHeader
            kicker="The Stack"
            line1="Tools I trust,"
            line2="picked for the job."
            blurb="Four years of building production systems means I pick boring tech where it matters and reach for the new stuff only when it earns its place."
          />

          {/* Highlights ribbon */}
          <window.Reveal>
            <div className="liquid-glass rounded-[1rem] sm:rounded-[1.25rem] p-3 sm:p-5 mb-6 sm:mb-10">
              <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
                <div className="text-[10px] sm:text-[11px] text-white/55 font-body uppercase tracking-widest">
                  Most used · daily drivers
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-white/50 font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  Beginner
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 ml-2" />
                  Expert
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {highlights.map((h) => (
                  <span
                    key={h.name}
                    className="liquid-glass rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs text-white/95 font-body inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    {h.name}
                    <span className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="w-1 h-1 rounded-full"
                          style={{
                            background:
                              i < h.level
                                ? "rgba(249,115,22,0.9)"
                                : "rgba(255,255,255,0.15)",
                          }}
                        />
                      ))}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </window.Reveal>

          {/* Category tabs */}
          <window.Reveal delay={1}>
            <div className="mb-8 sm:mb-10 -mx-5 px-5 sm:mx-0 sm:px-0 h-scroll h-scroll-mask overflow-x-auto">
              <div className="liquid-glass rounded-full p-1 inline-flex gap-1 whitespace-nowrap">
                {tabs.map((t) => (
                  <LH
                    as="button"
                    tight
                    key={t}
                    onClick={() => setActive(t)}
                    className={`tap-44 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium font-body whitespace-nowrap transition-colors ${
                      active === t ? "bg-white text-black" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {t}
                  </LH>
                ))}
              </div>
            </div>
          </window.Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {visible.map((g, i) => (
              <window.Reveal delay={Math.min(i + 1, 4)} key={g.label}>
                <StackGroup {...g} />
              </window.Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  window.TechStack = TechStack;
})();
