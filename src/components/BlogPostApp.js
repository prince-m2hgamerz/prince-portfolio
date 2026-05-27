/* ============================================================
 * BlogPostApp — mounts the BlogPost layout to #root.
 * Reads meta from #post-body[data-meta] and injects matching
 * BlogPosting + BreadcrumbList JSON-LD at runtime so it never
 * drifts from the visible content.
 * ============================================================ */
(function () {
  function inject(meta) {
    if (!meta || !meta.slug) return;
    const url = `https://prince.m2hio.in/blog/${meta.slug}/`;
    const wordCount = meta.wordCount || 1500;

    const post = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#post`,
      "headline": meta.title,
      "description": meta.description || "",
      "datePublished": (meta.published || "") + "T00:00:00+05:30",
      "dateModified": (meta.modified || meta.published || "") + "T00:00:00+05:30",
      "author": { "@type": "Person", "name": "Prince Kumar", "url": "https://prince.m2hio.in/" },
      "publisher": { "@type": "Person", "name": "Prince Kumar", "url": "https://prince.m2hio.in/" },
      "image": "https://prince.m2hio.in/og.png",
      "mainEntityOfPage": url,
      "keywords": (meta.tags || []).join(", "),
      "wordCount": wordCount,
      "inLanguage": "en"
    };

    const crumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://prince.m2hio.in/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://prince.m2hio.in/blog/" },
        { "@type": "ListItem", "position": 3, "name": meta.title }
      ]
    };

    [post, crumbs].forEach((d, i) => {
      const id = `post-jsonld-${i}`;
      document.getElementById(id)?.remove();
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
      s.text = JSON.stringify(d);
      document.head.appendChild(s);
    });
  }

  // Read meta now so we can inject JSON-LD before React mounts.
  const node = document.getElementById("post-body");
  let meta = {};
  if (node) {
    try { meta = JSON.parse(node.dataset.meta || "{}"); } catch (_) {}
  }
  inject(meta);

  function PostApp() {
    return (
      <>
        <window.Navbar />
        <window.BlogPost />
      </>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<PostApp />);
})();
