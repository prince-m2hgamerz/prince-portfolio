# Prince Kumar — Personal Portfolio

A single-page portfolio site built with React + Tailwind via CDN. Zero build step, zero npm install. Just open `index.html` and it runs.

## Stack

- React 18 + ReactDOM (UMD, production minified)
- Babel Standalone (in-browser JSX compilation)
- Tailwind CSS (Play CDN)
- Framer Motion 11 (UMD)
- Custom liquid-glass design system

## Local preview

```bash
npx serve .
```

Or just double-click `index.html` and any modern browser will render it.

## Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

When prompted:

- **Set up and deploy?** → `Y`
- **Which scope?** → your account
- **Link to existing project?** → `N`
- **Project name?** → `prince-portfolio` (or anything)
- **In which directory is your code located?** → `./`
- **Want to modify settings?** → `N`

Vercel auto-detects this as a static site, uses the included `vercel.json`, and deploys in ~5 seconds. Subsequent pushes:

```bash
vercel --prod
```

### Option B — GitHub + Vercel dashboard

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/prince-portfolio.git
   git push -u origin main
   ```
2. Open https://vercel.com/new
3. Import the repo. Framework preset: **Other** (auto-detected). Build command: leave empty. Output directory: leave empty.
4. Click **Deploy**.

### Custom domain (m2hio.in)

After first deploy:

1. Vercel dashboard → Project → **Settings** → **Domains**
2. Add `m2hio.in` and `www.m2hio.in`
3. At your DNS provider, add the records Vercel shows you (usually an A record `76.76.21.21` and a CNAME for `www`)
4. SSL is issued automatically within a few minutes

## Files

| File | Purpose |
|---|---|
| `index.html` | Entire site — markup, styles, React app |
| `vercel.json` | Headers, clean URLs, cache rules |
| `robots.txt` | Search engine crawl policy |
| `sitemap.xml` | Single-URL sitemap |
| `package.json` | Just for the `npm run dev` shortcut |
| `.gitignore` | Standard ignores incl. `.vercel` |

## Notes

- All third-party assets (React, Tailwind, fonts, hero videos) load over CDN. No bundling or build step required.
- Hero/Capabilities video URLs point to a Cloudfront distribution — replace with your own hosted MP4s if you want full control.
- Edit content directly in `index.html`. The structure is broken into clearly labeled `<script type="text/babel">` sections (`Hero`, `Capabilities`, `TechStack`, `Work`, `Services`, `Connect`).
