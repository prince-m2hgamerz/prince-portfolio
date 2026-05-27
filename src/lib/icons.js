/* ============================================================
 * icons.js — Lucide-style inline SVG icon set
 * Exposed at window.Icons
 * ============================================================ */
(function () {
  const Icon = ({ d, size = 24, strokeWidth = 2, fill = "none", className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {d}
    </svg>
  );

  const ArrowUpRight = (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </>
      }
    />
  );

  const Play = ({ size = 24, className = "" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <polygon points="6 4 20 12 6 20 6 4" />
    </svg>
  );

  const Mail = (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      }
    />
  );

  const Github = (p) => (
    <Icon
      {...p}
      d={
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.27-1.7-1.27-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
      }
      fill="currentColor"
      strokeWidth={0}
    />
  );

  const Linkedin = (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      }
    />
  );

  const Twitter = (p) => (
    <Icon
      {...p}
      d={<path d="M18 2H21l-7 8 8 12h-6l-5-7-6 7H2l8-9-8-11h6l5 7Z" />}
      fill="currentColor"
      strokeWidth={0}
    />
  );

  const Instagram = (p) => (
    <Icon
      {...p}
      d={
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
        </>
      }
    />
  );

  const ExternalLink = (p) => (
    <Icon
      {...p}
      d={
        <>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
        </>
      }
    />
  );

  const Code = (p) => (
    <Icon
      {...p}
      d={
        <>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </>
      }
    />
  );

  const Sparkle = (p) => (
    <Icon
      {...p}
      d={<path d="M12 2v6m0 8v6M2 12h6m8 0h6M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4" />}
    />
  );

  window.Icons = {
    ArrowUpRight, Play, Mail, Github, Linkedin, Twitter, Instagram, ExternalLink, Code, Sparkle,
  };
})();
