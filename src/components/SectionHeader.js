/* ============================================================
 * SectionHeader — shared kicker + two-line italic heading + blurb.
 * Exposed at window.SectionHeader
 * ============================================================ */
(function () {
  function SectionHeader({ kicker, line1, line2, blurb }) {
    return (
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 sm:mb-14 md:mb-16">
        <div className="flex-1">
          <window.Reveal>
            <div className="text-[10.5px] sm:text-sm font-body text-white/60 tracking-widest uppercase mb-3 sm:mb-6">
              <span className="text-white/30">//</span> {kicker}
            </div>
          </window.Reveal>
          <window.Reveal delay={1}>
            <h2 className="font-heading italic text-white text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px] sm:tracking-[-3px]">
              {line1}
              <br />
              <span className="text-white/70">{line2}</span>
            </h2>
          </window.Reveal>
        </div>
        {blurb && (
          <window.Reveal delay={2}>
            <p className="text-white/75 max-w-md font-body font-light leading-snug text-[13.5px] sm:text-base">
              {blurb}
            </p>
          </window.Reveal>
        )}
      </div>
    );
  }

  window.SectionHeader = SectionHeader;
})();
