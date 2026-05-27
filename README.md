# Prince Kumar — Personal Portfolio

A static, single-page portfolio for Prince Kumar (founder of M2H Web Solution). Built with React + Tailwind via CDN. **Zero build step. Zero `npm install`.** Just open `index.html` and it runs.

## Project Structure

```
prince-portfolio/
├── index.html                  ← shell: <head>, meta, JSON-LD, script load order
├── src/
│   ├── styles/
│   │   └── main.css            ← liquid-glass design system + utilities
│   ├── data/
│   │   └── content.js          ← all copy: hero, projects, services, FAQ, stack, nav
│   ├── lib/                    ← reusable primitives
│   │   ├── icons.js            ← lucide-style inline SVGs (window.Icons)
│   │   ├── FadingVideo.js      ← rAF-driven crossfade looping video
│   │   ├── BlurText.js         ← word-by-word blur-in animation
│   │   └── hooks.js            ← LiquidHover, Reveal, useTilt, useMagnetic
│   └── components/             ← one file per section
│       ├── SectionHeader.js
│       ├── Navbar.js
│       ├── Hero.js
│       ├── Capabilities.js
│       ├── TechStack.js
│       ├── Work.js
│       ├── Services.js
│       ├── FAQ.js
│       ├── Connect.js
│       └── App.js              ← mounts <App /> to #root
│
├── docs/
│   ├── design.md               ← liquid-glass design spec
│   └── githubreadme.md         ← Prince's source bio + project list
│
├── skills/                     ← optional SEO/GEO audit skills
├── robots.txt                  ← AI crawler-friendly
├── sitemap.xml                 ← deep-anchored
├── vercel.json                 ← headers, clean URLs, cache rules
├── package.json                ← `npm run dev` shortcut only
├── .gitignore                  ← standard + .vercel
└── README.md
```

### How modules wire together

Each file in `src/lib/` and `src/components/` runs as a Babel-compiled `<script>` and registers its export on `window` (e.g. `window.Hero`, `window.LiquidHover`). They're loaded in dependency order from `index.html`:

1. **data** — `content.js` populates `window.Content`
2. **lib** — primitives that components depend on (icons, FadingVideo, BlurText, hooks)
3. **components** — section components in any order, all depend on lib + data
4. **App** — mounts to `#root`

This pattern lets you keep every section in its own file without a build step. To edit content, change `src/data/content.js`. To restyle a section, edit its file in `src/components/`.

## Stack

- **React 18** + **ReactDOM** (UMD, production minified)
- **Babel Standalone** (in-browser JSX)
- **Tailwind CSS** (Play CDN) + custom config
- **Framer Motion 11** (UMD)
- **Custom liquid-glass design system** (per `docs/design.md`)

## Local preview

```bash
npx serve .
```

Or just double-click `index.html`. Any modern browser will render it.

> Note: serving over `file://` works for the most part, but Chrome/Edge will refuse to load `<script type="text/babel" src="/src/...">` from disk in some configurations. If you hit that, run `npx serve .` and visit `http://localhost:3000`.

## Deploy to Vercel

### Option A — CLI (fastest)

```bash
npm i -g vercel
vercel
```

Press Enter through the prompts. Vercel auto-detects this as a static site, uses `vercel.json`, and deploys in ~5 seconds. For production:

```bash
vercel --prod
```

### Option B — GitHub + Vercel dashboard

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/prince-portfolio.git
   git push -u origin main
   ```
2. Open https://vercel.com/new and import the repo.
3. Framework preset: **Other**. Build command and output directory: leave empty.
4. Click **Deploy**.

### Custom domain

In Vercel dashboard → Project → **Settings** → **Domains**, add `m2hio.in` and `www.m2hio.in`, then point your DNS at the records Vercel shows you. SSL is automatic.

## Editing content

To change projects, services, FAQ answers, stack proficiency, or any other text — edit `src/data/content.js`. Component files only handle layout and styling.

## SEO + GEO

The site is structured for both classic SEO and Generative Engine Optimization (AI citation readiness):

- Single `<h1>` with the primary subject
- Semantic `<header>`, `<main>`, `<footer>`, and `<nav>` landmarks
- JSON-LD: `Person`, `Organization`, `WebSite`, `ProfilePage`, `FAQPage` (linked via `@id` graph)
- FAQ section uses `FAQPage` schema microdata for rich results
- `<noscript>` fallback with the full content tree (indexable even if JS is blocked)
- Author byline with `rel="author"`, visible `<time>` modified date
- `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.
- Sitemap with deep anchor links and `lastmod`

Run the included audit:

```bash
python skills/geo-fundamentals/SKILL.md .
```

Current score: **100%** GEO readiness.
