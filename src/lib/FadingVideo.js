/* ============================================================
 * FadingVideo — manual rAF-driven crossfade looping video.
 * Spec from design.md: FADE_MS=500, FADE_OUT_LEAD=0.55s.
 * Exposed at window.FadingVideo
 * ============================================================ */
(function () {
  const { useEffect, useRef } = React;
  const FADE_MS = 500;
  const FADE_OUT_LEAD = 0.55;

  function FadingVideo({ src, className = "", style, lazy = false }) {
    const videoRef = useRef(null);
    const rafRef = useRef(null);
    const fadingOutRef = useRef(false);
    const [shouldLoad, setShouldLoad] = React.useState(!lazy);

    // For lazy videos, only set the src once the wrapper is near the viewport.
    useEffect(() => {
      if (!lazy) return;
      const v = videoRef.current;
      if (!v) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry && entry.isIntersecting) {
            setShouldLoad(true);
            io.disconnect();
          }
        },
        { rootMargin: "300px 0px" }
      );
      io.observe(v);
      return () => io.disconnect();
    }, [lazy]);

    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;

      const fadeTo = (target, duration = FADE_MS) => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const start = performance.now();
        const from = parseFloat(v.style.opacity || "0");
        const delta = target - from;
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          v.style.opacity = String(from + delta * t);
          if (t < 1) rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
      };

      const onLoaded = () => {
        v.style.opacity = "0";
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
        fadeTo(1);
      };

      const onTimeUpdate = () => {
        if (!fadingOutRef.current && v.duration) {
          const remaining = v.duration - v.currentTime;
          if (remaining > 0 && remaining <= FADE_OUT_LEAD) {
            fadingOutRef.current = true;
            fadeTo(0);
          }
        }
      };

      const onEnded = () => {
        v.style.opacity = "0";
        setTimeout(() => {
          try {
            v.currentTime = 0;
            const p = v.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
          } catch (_) {}
          fadingOutRef.current = false;
          fadeTo(1);
        }, 100);
      };

      v.addEventListener("loadeddata", onLoaded);
      v.addEventListener("timeupdate", onTimeUpdate);
      v.addEventListener("ended", onEnded);

      // Pause when offscreen — saves significant battery + CPU on mobile.
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry) return;
          if (entry.isIntersecting) {
            const p = v.play();
            if (p && typeof p.catch === "function") p.catch(() => {});
          } else {
            v.pause();
          }
        },
        { threshold: 0.05 }
      );
      io.observe(v);

      // Pause when the tab is hidden too.
      const onVisibility = () => {
        if (document.hidden) v.pause();
      };
      document.addEventListener("visibilitychange", onVisibility);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        v.removeEventListener("loadeddata", onLoaded);
        v.removeEventListener("timeupdate", onTimeUpdate);
        v.removeEventListener("ended", onEnded);
        document.removeEventListener("visibilitychange", onVisibility);
        io.disconnect();
      };
    }, [src]);

    return (
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        autoPlay
        muted
        playsInline
        preload={lazy ? "metadata" : "auto"}
        className={className}
        style={{ opacity: 0, ...style }}
      />
    );
  }

  window.FadingVideo = FadingVideo;
})();
