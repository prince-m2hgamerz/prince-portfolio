/* ============================================================
 * Capabilities — second viewport with looping background video.
 * Three glass cards summarising what I build.
 * Exposed at window.Capabilities
 * ============================================================ */
(function () {
  const FadingVideo = window.FadingVideo;
  const LH = window.LiquidHover;
  const C = window.Content;

  function CapabilityCard({ iconPath, tags, title, body }) {
    return (
      <LH className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-[300px] sm:min-h-[360px] flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <div className="liquid-glass rounded-[0.75rem] w-11 h-11 flex items-center justify-center shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24"
              fill="currentColor" className="text-white h-6 w-6"
            >
              <path d={iconPath} />
            </svg>
          </div>
          <div className="flex flex-wrap sm:justify-end gap-1.5 sm:max-w-[70%]">
            {tags.map((t) => (
              <span
                key={t}
                className="liquid-glass rounded-full px-2.5 py-1 text-[10.5px] sm:text-[11px] text-white/90 font-body whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1" />

        <div className="mt-5 sm:mt-6">
          <h3 className="font-heading italic text-white text-[1.75rem] sm:text-3xl md:text-4xl tracking-[-1px] leading-[0.95]">
            {title}
          </h3>
          <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-sm text-white/90 font-body font-light leading-snug max-w-[34ch]">
            {body}
          </p>
        </div>
      </LH>
    );
  }

  function Capabilities() {
    return (
      <section
        id="capabilities"
        className="relative min-h-screen w-full overflow-hidden bg-black"
      >
        <FadingVideo
          src={C.videos.capabilities}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        <div className="relative z-10 px-5 sm:px-8 md:px-16 lg:px-20 pt-24 pb-16 flex flex-col min-h-screen">
          <div className="mb-auto">
            <div className="text-[10.5px] sm:text-sm font-body text-white/70 tracking-widest uppercase mb-3 sm:mb-6">
              <span className="text-white/30">//</span> What I Do
            </div>
            <h2 className="font-heading italic text-white text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px] sm:tracking-[-3px]">
              Engineering,
              <br />
              <span className="text-white/70">end to end.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-12 sm:mt-16">
            {C.capabilities.map((c, i) => (
              <window.Reveal delay={Math.min(i + 1, 3)} key={c.title}>
                <CapabilityCard {...c} />
              </window.Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  window.Capabilities = Capabilities;
})();
