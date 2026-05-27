/* ============================================================
 * Connect — contact card with aurora bg, copy-email button,
 * social pills, availability strip, and footer.
 * Exposed at window.Connect
 * ============================================================ */
(function () {
  const Ic = window.Icons;
  const LH = window.LiquidHover;
  const C = window.Content;
  const email = C.contact.email;
  const socials = C.contact.socials;

  function CopyButton({ text, label }) {
    const [copied, setCopied] = React.useState(false);
    const onClick = async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      } catch {
        window.location.href = `mailto:${text}`;
      }
    };

    return (
      <LH
        as="button"
        tight
        onClick={onClick}
        className="liquid-glass tap-44 rounded-full px-4 py-3 sm:py-2.5 text-[13px] sm:text-sm font-medium text-white inline-flex items-center justify-center gap-2 relative shrink-0"
        aria-label={`Copy ${label}`}
      >
        {copied ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </>
        )}
      </LH>
    );
  }

  function AvailItem({ dot, title, sub }) {
    const c = { emerald: "bg-emerald-400", violet: "bg-violet-400", orange: "bg-orange-400" }[dot];
    return (
      <div className="liquid-glass rounded-2xl p-4 flex items-center gap-3 text-left">
        <span className={`w-2 h-2 rounded-full ${c} pulse-dot shrink-0`} />
        <div className="min-w-0">
          <div className="text-white font-body font-medium text-sm truncate">{title}</div>
          <div className="text-[11px] text-white/55 font-body truncate">{sub}</div>
        </div>
      </div>
    );
  }

  function SocialPill({ href, icon, label }) {
    return (
      <LH
        as="a"
        tight
        href={href}
        target="_blank"
        rel="noreferrer"
        className="liquid-glass tap-44 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white inline-flex items-center gap-2"
      >
        {icon}
        {label}
      </LH>
    );
  }

  function Connect() {
    return (
      <section
        id="contact"
        className="relative ambient-bg overflow-hidden py-20 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20"
      >
        <window.Reveal>
          <div className="liquid-glass rounded-[1.25rem] sm:rounded-[2rem] p-5 sm:p-12 md:p-16 lg:p-20 max-w-6xl mx-auto text-center overflow-hidden relative">
            <div className="aurora" />

            <div className="relative">
              <div className="text-xs sm:text-sm font-body text-white/60 tracking-widest uppercase mb-5 sm:mb-6">
                <span className="text-white/30">//</span> Get In Touch
              </div>
              <h2 className="font-heading italic text-white text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.9] tracking-[-3px]">
                Let's build
                <br />
                <span className="text-white/70">something real.</span>
              </h2>
              <p className="mt-6 text-white/85 max-w-xl mx-auto font-body font-light leading-snug text-sm md:text-base">
                Whether it's a freelance project, a bug worth chasing, or just a hello —
                I read every message and reply within a day.
              </p>

              {/* Email card */}
              <div className="mt-9 max-w-2xl mx-auto">
                <div className="liquid-glass rounded-[1.5rem] sm:rounded-full p-1.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-1">
                  <LH
                    as="a"
                    tight
                    href={`mailto:${email}`}
                    className="flex-1 min-w-0 liquid-glass-strong tap-44 rounded-full px-4 sm:px-5 py-3 text-[12.5px] sm:text-sm font-medium text-white inline-flex items-center justify-center sm:justify-start gap-2 break-anywhere overflow-hidden"
                  >
                    <Ic.Mail size={16} className="shrink-0" />
                    <span className="truncate">{email}</span>
                  </LH>
                  <CopyButton text={email} label="email" />
                </div>
                <p className="mt-3 text-[11px] text-white/45 font-body inline-flex items-center gap-1.5 justify-center w-full flex-wrap">
                  <kbd className="kbd">Tap</kbd>
                  to email me, or
                  <kbd className="kbd">Copy</kbd>
                  to share.
                </p>
              </div>

              {/* Quick links */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <SocialPill href={C.contact.website} icon={<Ic.ExternalLink size={16} />} label="m2hio.in" />
                <SocialPill href={socials.github} icon={<Ic.Github size={16} />} label="GitHub" />
                <SocialPill href={socials.linkedin} icon={<Ic.Linkedin size={16} />} label="LinkedIn" />
                <SocialPill href={socials.twitter} icon={<Ic.Twitter size={16} />} label="Twitter / X" />
                <SocialPill href={socials.instagram} icon={<Ic.Instagram size={16} />} label="Instagram" />
              </div>

              {/* Availability strip */}
              <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
                <AvailItem dot="emerald" title="Available" sub="for freelance" />
                <AvailItem dot="violet" title="< 24h" sub="reply time" />
                <AvailItem dot="orange" title="India 🇮🇳" sub="serving globally" />
              </div>
            </div>
          </div>
        </window.Reveal>

        {/* Footer */}
        <window.Reveal delay={1}>
          <footer
            role="contentinfo"
            className="max-w-6xl mx-auto mt-12 sm:mt-14 liquid-glass rounded-[1.25rem] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 text-sm text-white/65 font-body"
          >
            <div className="flex items-center gap-3">
              <div className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                <span className="font-heading italic text-xl text-white leading-none" style={{ marginTop: "-2px" }}>
                  p
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-white font-medium truncate">Prince Kumar</div>
                <div className="text-xs truncate">Founder, M2H Web Solution · India 🇮🇳</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#stack" className="hover:text-white transition-colors">Stack</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="text-xs text-white/55 md:text-right">
              © {new Date().getFullYear()} Prince Kumar
              <br />
              <span className="font-heading italic text-white/70">Self-taught. Still learning. Shipping anyway.</span>
            </div>
          </footer>
        </window.Reveal>
      </section>
    );
  }

  window.Connect = Connect;
})();
