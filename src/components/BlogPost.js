/* ============================================================
 * BlogPost — chrome around static post HTML.
 *
 * Each post page contains:
 *   <article id="post-body" data-meta='{ ... }'>
 *     ...full prose, headings, code blocks (plain HTML)...
 *   </article>
 *
 * This component reads the DOM, hides the static article, and
 * re-renders it inside the styled blog layout. If JS fails the
 * static article is still visible — it's just below the fold.
 * Exposed at window.BlogPost
 * ============================================================ */
(function () {
  const LH = window.LiquidHover;
  const { ArrowUpRight, Linkedin, Twitter } = window.Icons;

  function ShareBar({ url, title }) {
    const enc = encodeURIComponent;
    const items = [
      {
        label: "X",
        icon: <Twitter size={14} />,
        href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
      },
      {
        label: "LinkedIn",
        icon: <Linkedin size={14} />,
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
      },
    ];
    return (
      <div className="flex flex-wrap items-center gap-2 mt-8 sm:mt-10">
        <span className="text-[11px] text-white/55 font-body uppercase tracking-widest mr-2">
          Share
        </span>
        {items.map((l) => (
          <LH
            key={l.label}
            as="a"
            tight
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass rounded-full px-3.5 py-2 text-[12px] font-medium text-white inline-flex items-center gap-1.5"
          >
            {l.icon}
            {l.label}
          </LH>
        ))}
      </div>
    );
  }

  function BlogPost() {
    // Pull the static article HTML out of the DOM and read its meta.
    const [bodyHtml, setBodyHtml] = React.useState("");
    const [meta, setMeta] = React.useState({});

    React.useEffect(() => {
      const node = document.getElementById("post-body");
      if (!node) return;
      try {
        const m = JSON.parse(node.dataset.meta || "{}");
        setMeta(m);
      } catch (_) {}
      setBodyHtml(node.innerHTML);
      node.style.display = "none";
    }, []);

    const allPosts = window.Posts || [];
    const idx = allPosts.findIndex((p) => p.slug === meta.slug);
    const prev = idx > 0 ? allPosts[idx - 1] : null;
    const next = idx >= 0 && idx < allPosts.length - 1 ? allPosts[idx + 1] : null;

    const dateStr = meta.published
      ? new Date(meta.published).toLocaleDateString("en-US", {
          year: "numeric", month: "long", day: "numeric"
        })
      : "";
    const url = meta.slug ? `https://prince.m2hio.in/blog/${meta.slug}/` : "";

    return (
      <main className="bg-black text-white" id="main">
        <article className="relative ambient-bg overflow-hidden pt-28 sm:pt-36 pb-16 md:pb-24 px-5 sm:px-8 md:px-16 lg:px-20">
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="text-[11px] sm:text-xs text-white/55 font-body mb-6 sm:mb-8 flex flex-wrap items-center gap-2"
            >
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="text-white/25">/</span>
              <a href="/blog/" className="hover:text-white transition-colors">Blog</a>
              <span className="text-white/25">/</span>
              <span className="text-white/85 truncate">{meta.title}</span>
            </nav>

            <window.Reveal>
              <div className="flex flex-wrap items-center gap-2 mb-5">
                {(meta.tags || []).map((t) => (
                  <span
                    key={t}
                    className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/85 font-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </window.Reveal>

            <window.Reveal delay={1}>
              <h1 className="font-heading italic text-white text-[2.2rem] sm:text-5xl md:text-6xl tracking-[-2px] leading-[0.95]">
                {meta.title}
              </h1>
            </window.Reveal>

            <window.Reveal delay={2}>
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-[13px] font-body text-white/65">
                <span className="inline-flex items-center gap-2">
                  <span className="liquid-glass rounded-full w-7 h-7 flex items-center justify-center font-heading italic text-white">
                    p
                  </span>
                  By <a rel="author" href="/" className="text-white/95 font-medium hover:text-white">Prince Kumar</a>
                </span>
                <span className="text-white/25">·</span>
                <time dateTime={meta.published}>{dateStr}</time>
                {meta.readMin && (
                  <>
                    <span className="text-white/25">·</span>
                    <span>{meta.readMin} min read</span>
                  </>
                )}
              </div>
            </window.Reveal>

            <window.Reveal delay={3}>
              <div
                className="post-body mt-10 sm:mt-12 text-[15px] sm:text-[16px] text-white/85 font-body font-light leading-[1.75]"
                dangerouslySetInnerHTML={{ __html: bodyHtml }}
              />
            </window.Reveal>

            <ShareBar url={url} title={meta.title || ""} />

            <div className="mt-12 sm:mt-16 liquid-glass rounded-[1.25rem] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <div className="liquid-glass rounded-full w-14 h-14 flex items-center justify-center shrink-0">
                <span className="font-heading italic text-3xl text-white leading-none" style={{ marginTop: "-2px" }}>p</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-medium font-body text-base">Prince Kumar</div>
                <p className="text-[13px] text-white/70 font-body font-light leading-snug mt-1">
                  Founder of M2H Web Solution. I build full-stack apps, APIs, and AI tools end-to-end.
                  Currently accepting freelance work.
                </p>
              </div>
              <LH
                as="a"
                tight
                href="mailto:m2hgamerz.prince@gmail.com"
                className="liquid-glass-strong rounded-full px-4 py-2.5 text-sm font-medium text-white inline-flex items-center justify-center gap-2 shrink-0"
              >
                Hire Me
                <ArrowUpRight size={14} />
              </LH>
            </div>

            {(prev || next) && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prev ? (
                  <LH
                    as="a"
                    href={`/blog/${prev.slug}/`}
                    className="liquid-glass rounded-2xl p-5 flex flex-col group"
                  >
                    <div className="text-[10.5px] text-white/55 uppercase tracking-widest font-body mb-2">
                      ← Previous
                    </div>
                    <div className="font-heading italic text-white text-xl tracking-tight leading-tight">
                      {prev.title}
                    </div>
                  </LH>
                ) : <div />}
                {next ? (
                  <LH
                    as="a"
                    href={`/blog/${next.slug}/`}
                    className="liquid-glass rounded-2xl p-5 flex flex-col items-end text-right group"
                  >
                    <div className="text-[10.5px] text-white/55 uppercase tracking-widest font-body mb-2">
                      Next →
                    </div>
                    <div className="font-heading italic text-white text-xl tracking-tight leading-tight">
                      {next.title}
                    </div>
                  </LH>
                ) : <div />}
              </div>
            )}

            <div className="mt-12 flex justify-center">
              <LH
                as="a"
                tight
                href="/blog/"
                className="liquid-glass rounded-full tap-44 px-5 py-2.5 text-sm font-medium text-white inline-flex items-center gap-2"
              >
                All posts
                <ArrowUpRight size={16} />
              </LH>
            </div>
          </div>
        </article>
      </main>
    );
  }

  window.BlogPost = BlogPost;
})();
