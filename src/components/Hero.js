/* ============================================================
 * Hero — first viewport. Background video, headline, stats, ribbon.
 * Exposed at window.Hero
 * ============================================================ */
(function () {
  const { motion } = window.Motion;
  const { ArrowUpRight, Play } = window.Icons;
  const FadingVideo = window.FadingVideo;
  const BlurText = window.BlurText;
  const LH = window.LiquidHover;
  const C = window.Content;

  const fade = (delay = 0) => ({
    initial: { filter: "blur(10px)", opacity: 0, y: 20 },
    animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
  });

  function StatCard({ iconPath, value, label, fullLabel }) {
    return (
      <LH className="liquid-glass p-3 sm:p-5 rounded-[1rem] sm:rounded-[1.25rem] flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22" height="22" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="text-white sm:hidden"
        >
          {iconPath}
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28" height="28" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          className="text-white hidden sm:block"
        >
          {iconPath}
        </svg>
        <div className="mt-2 sm:mt-3 text-left">
          <div className="font-heading italic text-white text-[1.7rem] sm:text-4xl tracking-[-1px] leading-none">
            {value}
          </div>
          <div className="text-[10px] sm:text-xs text-white font-body font-light mt-1.5 sm:mt-2 leading-snug">
            <span className="sm:hidden">{label}</span>
            <span className="hidden sm:inline">{fullLabel || label}</span>
          </div>
        </div>
      </LH>
    );
  }

  const STAT_ICONS = [
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </>,
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </>,
    <>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M14 7h7v7" />
    </>,
  ];

  function Hero() {
    return (
      <section
        id="home"
        className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col"
      >
        <FadingVideo
          src={C.videos.hero}
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 pointer-events-none"
          style={{ width: "120%", height: "120%" }}
        />

        <div className="relative z-10 flex flex-col flex-1 min-h-screen">
          {/* Center content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pt-28 pb-12 px-4">
            {/* Badge */}
            <motion.div {...fade(0.4)} className="max-w-full">
              <div className="liquid-glass rounded-full pl-1 pr-3 py-1 inline-flex items-center gap-2 max-w-full">
                <span className="bg-white text-black rounded-full px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold shrink-0">
                  New
                </span>
                <span className="text-[12px] sm:text-sm text-white/90 font-body truncate">
                  {C.hero.badge}
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="mt-6 max-w-3xl">
              <BlurText
                as="h1"
                text={C.hero.headline}
                className="hero-headline text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.85] tracking-[-3px]"
              />
              <span className="sr-only">{C.hero.srContext}</span>
            </div>

            {/* Subheading */}
            <motion.p
              {...fade(0.8)}
              className="mt-5 text-sm md:text-base text-white max-w-2xl font-body font-light leading-snug px-2"
            >
              In short, I'm Prince Kumar — founder of{" "}
              <span className="font-heading italic text-white text-lg md:text-xl">
                M2H Web Solution
              </span>
              . I design, build, and ship full-stack web apps, APIs, and AI tools end-to-end.
              No team, no shortcuts — just real products for real clients.
            </motion.p>

            {/* Byline + freshness */}
            <motion.div
              {...fade(0.95)}
              className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-body text-white/60"
            >
              <span className="liquid-glass rounded-full px-3 py-1 inline-flex items-center gap-1.5">
                By
                <a rel="author" href="https://prince.m2hio.in/" className="text-white/90 font-medium hover:text-white transition-colors">
                  Prince Kumar
                </a>
              </span>
              <span className="liquid-glass rounded-full px-3 py-1 inline-flex items-center gap-1.5">
                Updated
                <time dateTime="2026-05-27">May 2026</time>
              </span>
              <span className="liquid-glass rounded-full px-3 py-1 inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                4+ years shipping production code
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              {...fade(1.1)}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-7"
            >
              <LH
                as="a"
                href="#work"
                tight
                className="liquid-glass-strong tap-44 rounded-full px-5 py-3 text-sm font-medium text-white inline-flex items-center gap-2"
              >
                See My Work
                <ArrowUpRight size={20} />
              </LH>
              <a
                href="https://m2hio.in"
                target="_blank"
                rel="noreferrer"
                className="tap-44 px-2 text-sm text-white inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
              >
                Visit M2H
                <Play size={16} />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              {...fade(1.3)}
              className="grid grid-cols-3 gap-2 sm:gap-4 mt-10 w-full max-w-2xl"
            >
              {C.hero.stats.map((s, i) => (
                <StatCard key={s.value} iconPath={STAT_ICONS[i]} {...s} />
              ))}
            </motion.div>
          </div>

          {/* Partner ribbon */}
          <motion.div
            {...fade(1.4)}
            className="flex flex-col items-center gap-3 sm:gap-4 pb-6 sm:pb-8 px-4"
          >
            <div className="liquid-glass rounded-full px-3 py-1 text-[10.5px] sm:text-xs font-medium text-white text-center">
              Building with the modern web's most reliable tooling
            </div>
            <div className="w-full max-w-5xl overflow-hidden mask-fade">
              <div className="marquee-track flex items-center gap-8 sm:gap-12 md:gap-16 whitespace-nowrap will-change-transform">
                {[...C.hero.partners, ...C.hero.partners].map((n, i) => (
                  <span
                    key={`${n}-${i}`}
                    className="font-heading italic text-white text-lg sm:text-2xl md:text-3xl tracking-tight"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  window.Hero = Hero;
})();
