/* ============================================================
 * Work — featured flagship card + 5 project tiles with browser
 * mock previews and animated gradient borders.
 * Exposed at window.Work
 * ============================================================ */
(function () {
  const { ArrowUpRight } = window.Icons;
  const LH = window.LiquidHover;
  const C = window.Content;

  const ACCENT_COLORS = {
    violet: "rgba(167,139,250,0.55)",
    orange: "rgba(249,115,22,0.55)",
    emerald: "rgba(52,211,153,0.55)",
    cyan: "rgba(34,211,238,0.55)",
    rose: "rgba(244,114,182,0.55)",
    slate: "rgba(148,163,184,0.55)",
  };

  function BrowserPreview({ accent = "violet", label }) {
    const c = ACCENT_COLORS[accent] || ACCENT_COLORS.violet;
    return (
      <div className="relative w-full h-28 sm:h-36 rounded-[0.75rem] sm:rounded-[0.9rem] overflow-hidden liquid-glass">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(80% 60% at 30% 20%, ${c}, transparent 60%), radial-gradient(60% 50% at 80% 90%, rgba(255,255,255,0.05), transparent 70%)`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-6 sm:h-7 flex items-center gap-1.5 px-2.5 sm:px-3 border-b border-white/10">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/20" />
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/15" />
          <span className="ml-1.5 sm:ml-2 text-[9px] sm:text-[10px] font-body text-white/45 truncate">
            {label}
          </span>
        </div>
        <div className="absolute top-9 sm:top-10 left-2.5 sm:left-3 right-2.5 sm:right-3 space-y-1 sm:space-y-1.5">
          <div className="h-1 sm:h-1.5 w-2/3 rounded-full bg-white/20" />
          <div className="h-1 sm:h-1.5 w-1/2 rounded-full bg-white/10" />
          <div className="h-1 sm:h-1.5 w-3/5 rounded-full bg-white/10" />
        </div>
        <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 grid grid-cols-3 gap-1 sm:gap-1.5">
          <div className="h-5 sm:h-6 rounded-md bg-white/[0.04]" />
          <div className="h-5 sm:h-6 rounded-md bg-white/[0.06]" />
          <div className="h-5 sm:h-6 rounded-md bg-white/[0.04]" />
        </div>
      </div>
    );
  }

  function HoverArrow({ size = 16, label = "Visit" }) {
    return (
      <span className="inline-flex items-center gap-1.5 overflow-hidden">
        {label}
        <span className="relative inline-block w-4 h-4 overflow-hidden">
          <ArrowUpRight
            size={size}
            className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-3 group-hover:-translate-y-3"
          />
          <ArrowUpRight
            size={size}
            className="absolute inset-0 -translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </span>
      </span>
    );
  }

  function FeaturedCard({ emoji, tag, title, blurb, stack, highlights, metrics, accent, href, display }) {
    return (
      <LH
        as="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        className="liquid-glass grad-border rounded-[1.25rem] sm:rounded-[1.5rem] p-5 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 group"
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4 sm:mb-6 flex-wrap">
            <span className="liquid-glass rounded-full px-2.5 sm:px-3 py-1 text-[10.5px] sm:text-[11px] text-white/90 font-body inline-flex items-center gap-1.5">
              Live
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            </span>
            <span className="liquid-glass rounded-full px-2.5 sm:px-3 py-1 text-[10.5px] sm:text-[11px] text-white/90 font-body">
              {tag}
            </span>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="liquid-glass rounded-[0.9rem] w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-2xl sm:text-4xl shrink-0">
              <span>{emoji}</span>
            </div>
            <h3 className="font-heading italic text-white text-3xl sm:text-5xl md:text-6xl tracking-[-2px] leading-[0.9]">
              {title}
            </h3>
          </div>

          <p className="mt-4 sm:mt-5 text-[13.5px] sm:text-[15px] text-white/85 font-body font-light leading-relaxed max-w-2xl">
            {blurb}
          </p>

          <div className="grid grid-cols-3 gap-2 mt-5 sm:mt-6 sm:max-w-md">
            {metrics.map((m) => (
              <div key={m.k} className="liquid-glass rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-left">
                <div className="font-heading italic text-white text-base sm:text-2xl tracking-[-1px] leading-none break-anywhere">
                  {m.v}
                </div>
                <div className="text-[9px] sm:text-[11px] text-white/60 font-body mt-1 sm:mt-1.5 uppercase tracking-widest break-anywhere leading-tight">
                  {m.k}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-5 sm:mt-6">
            {stack.map((s) => (
              <span
                key={s}
                className="liquid-glass rounded-full px-2.5 sm:px-3 py-1 text-[10.5px] sm:text-[11px] text-white/90 font-body whitespace-nowrap"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="lg:border-l lg:border-white/10 lg:pl-8 flex flex-col justify-between gap-5 sm:gap-6">
          <BrowserPreview accent={accent} label={display} />
          <ul className="space-y-3">
            {highlights.map((h, i) => (
              <li
                key={h}
                className="flex gap-3 text-[13px] sm:text-sm text-white/85 font-body font-light leading-snug"
              >
                <span className="liquid-glass rounded-full w-6 h-6 shrink-0 flex items-center justify-center text-[10px] text-white/80 font-body">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-4 sm:pt-5 border-t border-white/10 gap-3">
            <span className="text-[11px] sm:text-xs text-white/60 font-body truncate min-w-0">
              {display}
            </span>
            <span className="text-sm text-white font-medium shrink-0">
              <HoverArrow />
            </span>
          </div>
        </div>
      </LH>
    );
  }

  function ProjectCard({ emoji, title, subtitle, blurb, stack, accent, href, display }) {
    return (
      <LH
        as="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        className="liquid-glass grad-border rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-6 flex flex-col group transition-transform duration-300 hover:-translate-y-1 h-full"
      >
        <BrowserPreview accent={accent} label={display} />

        <div className="flex items-start justify-between gap-3 mt-4 sm:mt-5">
          <div className="liquid-glass rounded-[0.75rem] w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-xl sm:text-2xl shrink-0">
            <span>{emoji}</span>
          </div>
          <span className="liquid-glass rounded-full px-2.5 sm:px-3 py-1 text-[10.5px] sm:text-[11px] text-white/90 font-body inline-flex items-center gap-1.5">
            Live
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
          </span>
        </div>

        <h3 className="mt-3 sm:mt-4 font-heading italic text-white text-[1.6rem] sm:text-[2rem] md:text-[2.25rem] tracking-[-1px] leading-[0.95]">
          {title}
        </h3>
        <div className="mt-1 text-[10.5px] sm:text-[11px] text-white/55 font-body uppercase tracking-widest">
          {subtitle}
        </div>
        <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-sm text-white/85 font-body font-light leading-snug">
          {blurb}
        </p>

        <div className="flex-1" />

        <div className="flex flex-wrap gap-1.5 mt-4 sm:mt-5">
          {stack.map((s) => (
            <span
              key={s}
              className="liquid-glass rounded-full px-2.5 py-1 text-[10px] sm:text-[10.5px] text-white/85 font-body whitespace-nowrap"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-white/70 font-body gap-3">
          <span className="truncate min-w-0">{display}</span>
          <span className="text-white/95 group-hover:text-white shrink-0">
            <HoverArrow size={14} />
          </span>
        </div>
      </LH>
    );
  }

  function Work() {
    return (
      <section
        id="work"
        className="relative ambient-bg overflow-hidden py-20 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20"
      >
        <window.SectionHeader
          kicker="Featured Work"
          line1="Real products,"
          line2="real users."
          blurb="Six projects I've shipped recently — every one of them designed, coded, and deployed by me. Click through, they're live."
        />

        <window.Reveal>
          <FeaturedCard {...C.featuredProject} />
        </window.Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-6">
          {C.projects.map((p, i) => (
            <window.Reveal delay={Math.min((i % 3) + 1, 3)} key={p.title}>
              <ProjectCard {...p} />
            </window.Reveal>
          ))}
        </div>
      </section>
    );
  }

  window.Work = Work;
})();
