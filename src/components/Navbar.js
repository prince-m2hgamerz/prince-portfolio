/* ============================================================
 * Navbar — fixed top navigation with liquid-hover desktop pill,
 * mobile hamburger + glass drawer menu.
 * Exposed at window.Navbar
 * ============================================================ */
(function () {
  const { useState, useEffect } = React;
  const { ArrowUpRight } = window.Icons;
  const LH = window.LiquidHover;

  function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const links = window.Content.nav;
    const email = window.Content.contact.email;

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 16);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
      const onResize = () => {
        if (window.innerWidth >= 1024) setOpen(false);
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    return (
      <>
        <header role="banner">
          <nav
            className={`nav-fixed fixed top-3 sm:top-4 left-0 right-0 px-3 sm:px-6 lg:px-12 transition-all duration-300 ${
              scrolled ? "scale-[0.985]" : "scale-100"
            }`}
            aria-label="Primary"
          >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* Logo */}
              <LH
                as="a"
                href="#home"
                tight
                className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center text-white shrink-0"
                aria-label="Prince Kumar — home"
              >
                <span
                  className="font-heading italic text-2xl leading-none"
                  style={{ marginTop: "-2px" }}
                >
                  p
                </span>
              </LH>

              {/* Desktop pill */}
              <div className="hidden lg:block">
                <div className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-0.5">
                  {links.map((l) => (
                    <LH
                      as="a"
                      key={l.href}
                      href={l.href}
                      tight
                      className="rounded-full px-3.5 py-2 text-sm font-medium text-white/85 hover:text-white font-body transition-colors"
                    >
                      {l.label}
                    </LH>
                  ))}
                  <LH
                    as="a"
                    href={`mailto:${email}`}
                    tight
                    className="ml-1 inline-flex items-center gap-1.5 bg-white text-black rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap hover:bg-white/90 transition-colors"
                  >
                    Hire Me
                    <ArrowUpRight size={16} />
                  </LH>
                </div>
              </div>

              {/* Mobile right side */}
              <div className="lg:hidden flex items-center gap-2">
                <LH
                  as="a"
                  href={`mailto:${email}`}
                  tight
                  className="hidden sm:inline-flex items-center gap-1.5 bg-white text-black rounded-full px-3.5 py-2 text-xs font-semibold"
                >
                  Hire
                  <ArrowUpRight size={12} />
                </LH>
                <LH
                  as="button"
                  tight
                  aria-label="Toggle menu"
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                  className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center text-white"
                >
                  <div className="w-5 h-4 relative flex flex-col justify-between">
                    <span
                      className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                        open ? "translate-y-[7px] rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`block h-[1.5px] bg-white rounded-full transition-opacity duration-200 ${
                        open ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      className={`block h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                        open ? "-translate-y-[7px] -rotate-45" : ""
                      }`}
                    />
                  </div>
                </LH>
              </div>

              {/* Right spacer (desktop) */}
              <div className="hidden lg:block w-12 h-12" />
            </div>
          </nav>
        </header>

        {/* Mobile menu */}
        {open && (
          <div className="fixed inset-0 lg:hidden" style={{ zIndex: 69 }}>
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <div className="absolute top-20 left-3 right-3 menu-in">
              <div className="liquid-glass rounded-[1.5rem] p-3">
                <div className="flex flex-col">
                  {links.map((l) => (
                    <LH
                      as="a"
                      key={l.href}
                      href={l.href}
                      tight
                      onClick={() => setOpen(false)}
                      className="rounded-2xl px-4 py-3.5 text-base font-medium text-white/90 font-body flex items-center justify-between"
                    >
                      <span>{l.label}</span>
                      <ArrowUpRight size={16} className="opacity-60" />
                    </LH>
                  ))}
                  <div className="accent-line my-2 mx-4" />
                  <LH
                    as="a"
                    href={`mailto:${email}`}
                    tight
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3.5 text-base font-semibold bg-white text-black flex items-center justify-between mt-1"
                  >
                    Hire Me
                    <ArrowUpRight size={16} />
                  </LH>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  window.Navbar = Navbar;
})();
