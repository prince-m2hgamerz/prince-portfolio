/* ============================================================
 * Services — six service cards + 4-step process strip + trust CTA.
 * Exposed at window.Services
 * ============================================================ */
(function () {
  const LH = window.LiquidHover;
  const C = window.Content;
  const { ArrowUpRight, Sparkle } = window.Icons;

  const SERVICE_ICONS = [
    <><path d="M3 7h18M3 12h18M3 17h12" /></>,
    <><path d="M16 18 22 12 16 6"/><path d="M8 6 2 12 8 18"/></>,
    <><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></>,
    <><path d="M18 10a6 6 0 0 0-12 0c0 1 .2 2 .5 3H4a3 3 0 0 0 0 6h14a3 3 0 0 0 .5-6"/></>,
    <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
    <><circle cx="12" cy="12" r="9"/><path d="M9 9 3 9M9 15l-6 0M21 9l-6 0M21 15l-6 0M12 3v6M12 21v-6"/></>,
  ];

  function ServiceCard({ index, iconPath, title, body, tags, tone = "violet" }) {
    const num = String(index + 1).padStart(2, "0");
    const glow = tone === "orange" ? "rgba(249,115,22,0.35)" : "rgba(167,139,250,0.45)";

    return (
      <LH className="liquid-glass rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-6 flex flex-col h-full group">
        <div className="flex items-start justify-between gap-3">
          <div className="relative shrink-0">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-500"
              style={{ background: glow }}
            />
            <div className="relative liquid-glass rounded-[0.75rem] w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                className="text-white transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 sm:w-[22px] sm:h-[22px]"
              >
                {iconPath}
              </svg>
            </div>
          </div>
          <span className="font-heading italic text-white/35 text-xl sm:text-2xl tracking-tight leading-none mt-1 group-hover:text-white/60 transition-colors">
            {num}
          </span>
        </div>

        <h3 className="mt-5 sm:mt-6 font-heading italic text-white text-[1.6rem] sm:text-[2rem] tracking-[-1px] leading-[0.95]">
          {title}
        </h3>
        <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-sm text-white/85 font-body font-light leading-snug max-w-[34ch]">
          {body}
        </p>

        <div className="flex-1" />

        <div className="flex flex-wrap gap-1.5 mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-white/10">
          {tags.map((t) => (
            <span
              key={t}
              className="liquid-glass rounded-full px-2.5 py-1 text-[10px] sm:text-[10.5px] text-white/85 font-body whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
      </LH>
    );
  }

  function Services() {
    return (
      <section
        id="services"
        className="relative ambient-bg overflow-hidden py-20 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20"
      >
        <window.SectionHeader
          kicker="Services"
          line1="What I build"
          line2="for clients."
          blurb="Currently accepting freelance projects and collaborations. Email is the fastest way to reach me — I reply to everyone."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {C.services.map((s, i) => (
            <window.Reveal delay={Math.min((i % 3) + 1, 3)} key={s.title}>
              <ServiceCard index={i} iconPath={SERVICE_ICONS[i]} {...s} />
            </window.Reveal>
          ))}
        </div>

        {/* Process strip */}
        <window.Reveal>
          <div className="mt-12 sm:mt-16 relative liquid-glass rounded-[1.25rem] sm:rounded-[1.5rem] p-5 sm:p-8 md:p-10 overflow-hidden">
            <div
              className="pointer-events-none absolute -right-24 -top-24 w-72 h-72 rounded-full opacity-40"
              style={{ background: "radial-gradient(closest-side, rgba(167,139,250,0.40), transparent 70%)" }}
            />

            <div className="flex items-center justify-between mb-6 sm:mb-10 flex-wrap gap-3 relative">
              <div className="text-xs sm:text-sm text-white/60 font-body uppercase tracking-widest">
                <span className="text-white/30">//</span> How we'd work together
              </div>
              <span className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/85 font-body">
                4 step process
              </span>
            </div>

            <div className="hidden lg:block absolute left-10 right-10 top-[calc(50%+8px)] h-px bg-white/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
              {C.process.map((s, i) => (
                <div key={s.n} className="flex flex-col relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="liquid-glass rounded-full w-9 h-9 flex items-center justify-center text-[11px] font-body text-white/85 font-medium">
                      {s.n}
                    </span>
                    {i < C.process.length - 1 && (
                      <div className="hidden lg:flex items-center text-white/30">
                        <span className="text-xs">→</span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-base font-medium text-white font-body">{s.t}</h4>
                  <p className="mt-1.5 text-[12.5px] text-white/70 font-body font-light leading-snug">
                    {s.d}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 text-xs sm:text-[13px] font-body">
              <div className="flex items-center gap-2 text-white/85">
                <span className="liquid-glass rounded-full w-7 h-7 flex items-center justify-center shrink-0">
                  <Sparkle size={14} />
                </span>
                <span>Fixed-fee · Weekly demos · 30 days post-launch support</span>
              </div>
              <LH
                as="a"
                tight
                href={`mailto:${C.contact.email}`}
                className="liquid-glass-strong shimmer-on-hover tap-44 rounded-full px-4 py-2.5 text-[13px] font-medium text-white inline-flex items-center justify-center gap-2"
              >
                Start a project
                <ArrowUpRight size={14} />
              </LH>
            </div>
          </div>
        </window.Reveal>
      </section>
    );
  }

  window.Services = Services;
})();
