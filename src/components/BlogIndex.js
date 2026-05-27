/* ============================================================
 * BlogIndex — index of all posts (rendered on /blog/).
 * Exposed at window.BlogIndex
 * ============================================================ */
(function () {
  const LH = window.LiquidHover;
  const { ArrowUpRight } = window.Icons;

  function PostCard({ slug, title, summary, tags, published, readMin, accent }) {
    const accentColor = {
      violet: "rgba(167,139,250,0.55)",
      orange: "rgba(249,115,22,0.55)",
      cyan: "rgba(34,211,238,0.55)",
      emerald: "rgba(52,211,153,0.55)",
      rose: "rgba(244,114,182,0.55)",
    }[accent] || "rgba(167,139,250,0.55)";

    const date = new Date(published);
    const dateStr = date.toLocaleDateString("en-US", {
      year: "numeric", month: "short", day: "numeric"
    });

    return (
      <LH
        as="a"
        href={`/blog/${slug}/`}
        className="liquid-glass grad-border rounded-[1rem] sm:rounded-[1.25rem] p-5 sm:p-6 flex flex-col group h-full transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Accent ribbon */}
        <div
          className="h-1 w-16 rounded-full mb-5"
          style={{ background: accentColor }}
        />

        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-white/55 font-body mb-3">
          <time dateTime={published}>{dateStr}</time>
          <span>·</span>
          <span>{readMin} min read</span>
        </div>

        <h3 className="font-heading italic text-white text-[1.6rem] sm:text-[1.9rem] md:text-[2.1rem] tracking-[-1px] leading-[1] mb-3">
          {title}
        </h3>
        <p className="text-[13.5px] sm:text-sm text-white/80 font-body font-light leading-relaxed">
          {summary}
        </p>

        <div className="flex-1" />

        <div className="flex flex-wrap gap-1.5 mt-5">
          {tags.map((t) => (
            <span
              key={t}
              className="liquid-glass rounded-full px-2.5 py-1 text-[10.5px] text-white/85 font-body whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70 font-body gap-3">
          <span>Read post</span>
          <ArrowUpRight size={14} className="text-white/95 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
        </div>
      </LH>
    );
  }

  function BlogIndex() {
    const posts = window.Posts || [];

    return (
      <main className="bg-black text-white" id="main">
        <section className="relative ambient-bg overflow-hidden pt-28 sm:pt-36 pb-20 md:pb-32 px-5 sm:px-8 md:px-16 lg:px-20">
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-12 md:mb-16">
              <div className="flex-1">
                <window.Reveal>
                  <div className="text-[10.5px] sm:text-sm font-body text-white/60 tracking-widest uppercase mb-3 sm:mb-6">
                    <span className="text-white/30">//</span> Writing
                  </div>
                </window.Reveal>
                <window.Reveal delay={1}>
                  <h1 className="font-heading italic text-white text-[2.4rem] sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px] sm:tracking-[-3px]">
                    Notes from
                    <br />
                    <span className="text-white/70">the workshop.</span>
                  </h1>
                </window.Reveal>
              </div>
              <window.Reveal delay={2}>
                <p className="text-white/75 max-w-md font-body font-light leading-snug text-[13.5px] sm:text-base">
                  Long-form writeups on the systems I've shipped. Real architecture, real
                  numbers, real tradeoffs — not motivational dev fluff.
                </p>
              </window.Reveal>
            </div>

            {/* Author byline */}
            <window.Reveal>
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-body text-white/55 mb-8 sm:mb-10">
                <span>By</span>
                <a rel="author" href="/" className="text-white/85 font-medium hover:text-white transition-colors">
                  Prince Kumar
                </a>
                <span className="text-white/25">·</span>
                <span>Founder, M2H Web Solution</span>
                <span className="text-white/25">·</span>
                <time dateTime="2026-05-28">Updated May 28, 2026</time>
              </div>
            </window.Reveal>

            <h2 className="sr-only">Latest posts</h2>
            <h2 className="sr-only">Engineering writeups</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {posts.map((p, i) => (
                <window.Reveal delay={Math.min((i % 3) + 1, 3)} key={p.slug}>
                  <PostCard {...p} />
                </window.Reveal>
              ))}
            </div>

            <window.Reveal delay={3}>
              <div className="mt-12 sm:mt-16 flex justify-center">
                <LH
                  as="a"
                  tight
                  href="/"
                  className="liquid-glass rounded-full tap-44 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2"
                >
                  <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
                    <ArrowUpRight size={16} />
                  </span>
                  Back to home
                </LH>
              </div>
            </window.Reveal>
          </div>
        </section>
      </main>
    );
  }

  window.BlogIndex = BlogIndex;
})();
