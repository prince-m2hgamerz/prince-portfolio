/* ============================================================
 * FAQ — accordion. JSON-LD FAQPage is injected at runtime from
 * the same data array, so the structured data and visible
 * answers can never drift apart.
 * Exposed at window.FAQ
 * ============================================================ */
(function () {
  const C = window.Content;

  function FAQItem({ q, a, index }) {
    const num = String(index + 1).padStart(2, "0");
    return (
      <details className="liquid-glass rounded-[1rem] sm:rounded-[1.25rem] group overflow-hidden">
        <summary className="cursor-pointer list-none p-4 sm:p-5 flex items-start gap-3 sm:gap-4 select-none">
          <span className="liquid-glass rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[10px] sm:text-[11px] font-body text-white/85 font-medium shrink-0">
            {num}
          </span>
          <h3 className="flex-1 font-body text-white text-[15px] sm:text-base font-medium leading-snug pt-1">
            {q}
          </h3>
          <span className="liquid-glass rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 transition-transform duration-300 group-open:rotate-45">
            <svg
              xmlns="http://www.w3.org/2000/svg" width="14" height="14"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" className="text-white/85"
            >
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>
          </span>
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-[60px] sm:pl-[72px] -mt-1">
          <p className="text-[13.5px] sm:text-sm text-white/80 font-body font-light leading-relaxed">
            {a}
          </p>
        </div>
      </details>
    );
  }

  function FAQ() {
    // Inject FAQPage JSON-LD generated from the SAME data the visible
    // accordion renders — guaranteed to match, no drift, no duplicates.
    React.useEffect(() => {
      const id = "faq-jsonld";
      const existing = document.getElementById(id);
      if (existing) existing.remove();

      const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://prince.m2hio.in/#faq",
        "mainEntity": C.faq.map((it) => ({
          "@type": "Question",
          "name": it.q,
          "acceptedAnswer": { "@type": "Answer", "text": it.a },
        })),
      };
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(data);
      document.head.appendChild(script);

      return () => {
        const s = document.getElementById(id);
        if (s) s.remove();
      };
    }, []);

    return (
      <section
        id="faq"
        className="relative ambient-bg overflow-hidden py-20 md:py-32 px-5 sm:px-8 md:px-16 lg:px-20"
      >
        <window.SectionHeader
          kicker="Frequently Asked"
          line1="Quick answers"
          line2="before we talk."
          blurb="Everything most people email about, answered up front. Want something more specific? The contact section is right below."
        />

        <div className="max-w-4xl mx-auto grid gap-3 sm:gap-4">
          {C.faq.map((it, i) => (
            <window.Reveal delay={Math.min(i + 1, 4)} key={it.q}>
              <FAQItem {...it} index={i} />
            </window.Reveal>
          ))}
        </div>
      </section>
    );
  }

  window.FAQ = FAQ;
})();
