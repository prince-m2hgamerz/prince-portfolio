/* ============================================================
 * hooks.js — Custom hooks and small wrapper components
 *   • useLiquidHover / LiquidHover  — mouse-tracked spotlight
 *   • Reveal                        — scroll-in fade + blur
 *   • useTilt                       — 3D tilt on hover
 *   • useMagnetic                   — magnetic pull toward cursor
 * Exposed at window.useLiquidHover, window.LiquidHover,
 *           window.Reveal, window.useTilt, window.useMagnetic
 * ============================================================ */
(function () {
  /* ---- Liquid hover spotlight ---- */
  function useLiquidHover() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        el.style.setProperty("--mx", `${x}%`);
        el.style.setProperty("--my", `${y}%`);
      };
      el.addEventListener("mousemove", onMove);
      return () => el.removeEventListener("mousemove", onMove);
    }, []);
    return ref;
  }

  function LiquidHover({ as: Tag = "div", className = "", tight = false, children, ...rest }) {
    const ref = useLiquidHover();
    const cls = `liquid-hover ${tight ? "liquid-hover-tight" : ""} ${className}`;
    return (
      <Tag ref={ref} className={cls} {...rest}>
        {children}
      </Tag>
    );
  }

  /* ---- Reveal on scroll ---- */
  function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              el.classList.add("in-view");
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      obs.observe(el);
      return () => obs.disconnect();
    }, []);

    const delayClass = delay ? `reveal-delay-${delay}` : "";
    return (
      <Tag ref={ref} className={`reveal ${delayClass} ${className}`} {...rest}>
        {children}
      </Tag>
    );
  }

  /* ---- 3D Tilt ---- */
  function useTilt(intensity = 6) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--ry", `${x * intensity}deg`);
        el.style.setProperty("--rx", `${-y * intensity}deg`);
      };
      const onLeave = () => {
        el.style.setProperty("--ry", `0deg`);
        el.style.setProperty("--rx", `0deg`);
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    }, [intensity]);
    return ref;
  }

  /* ---- Magnetic pull ---- */
  function useMagnetic(strength = 0.25) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
      };
      const onLeave = () => {
        el.style.transform = "translate3d(0,0,0)";
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    }, [strength]);
    return ref;
  }

  window.useLiquidHover = useLiquidHover;
  window.LiquidHover = LiquidHover;
  window.Reveal = Reveal;
  window.useTilt = useTilt;
  window.useMagnetic = useMagnetic;
})();
