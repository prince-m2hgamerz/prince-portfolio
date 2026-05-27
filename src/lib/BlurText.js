/* ============================================================
 * BlurText — word-by-word blur-in animation triggered on viewport.
 * Spec from design.md: 3-step keyframes, 100ms stagger.
 * Exposed at window.BlurText
 * ============================================================ */
(function () {
  const { motion } = window.Motion;
  const { useEffect, useRef, useState } = React;

  function BlurText({ text, className = "", as: Tag = "p", stagger = 100 }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && e.intersectionRatio >= 0.1) {
              setInView(true);
              obs.disconnect();
            }
          });
        },
        { threshold: [0.1] }
      );
      obs.observe(ref.current);
      return () => obs.disconnect();
    }, []);

    const words = text.split(" ");

    return (
      <Tag
        ref={ref}
        className={className}
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em" }}
      >
        {words.map((w, i) => (
          <motion.span
            key={`${w}-${i}`}
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={
              inView
                ? {
                    filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
                    opacity: [0, 0.5, 1],
                    y: [50, -5, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.7,
              times: [0, 0.5, 1],
              ease: "easeOut",
              delay: (i * stagger) / 1000,
            }}
            style={{ display: "inline-block", marginRight: "0.28em" }}
          >
            {w}
          </motion.span>
        ))}
      </Tag>
    );
  }

  window.BlurText = BlurText;
})();
