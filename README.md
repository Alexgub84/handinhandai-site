# Hand in Hand AI

Hebrew-only marketing site for Hand in Hand AI, built with Astro 5.

**Live site:** https://handinhandai.com

---

## How to run locally

### Requirements

- **Node.js 20+**
- A **GitHub personal access token** with the `read:packages` scope. The dependency `@alexgub84/whatsapp-chat-mock` is installed from GitHub Packages (see `.npmrc`).

### Setup

1. **Clone the repo** and enter the project directory.

2. **Expose the token** so npm can authenticate (example for zsh/bash):

   ```bash
   export GITHUB_TOKEN=ghp_your_token_here
   ```

   Add the same export to your shell profile if you install often. For **Cloudflare Pages** builds, add `GITHUB_TOKEN` under **Settings → Environment variables** so `npm ci` succeeds.

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Environment file for the contact form** — copy the example and set your Make.com webhook (never commit real URLs):

   ```bash
   cp .env.example .env
   ```

   Edit `.env`:

   ```
   PUBLIC_WEBHOOK_URL=https://hook.eu1.make.com/your-webhook-id
   ```

5. **Start the dev server:**

   ```bash
   npm run dev
   ```

   Open **http://localhost:4321**.

### Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server (default port 4321) |
| `npm run build` | Typecheck (`astro check`) + production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run check` | Astro/TS diagnostics only |
| `npm test` | Playwright E2E (contact form; webhook is mocked) |
| `npm run test:ui` | Playwright with UI |
| `npm run test:headed` | Playwright in a visible browser |

---

## Where to change things

| What | Where |
|------|--------|
| Copy / translations (UI strings) | `src/i18n/ui.ts` |
| Main site chrome (nav, footer, meta) | `src/layouts/Layout.astro`, `src/components/Header.astro`, `src/components/Footer.astro` |
| Contact form + webhook wiring | `src/components/ContactForm.astro` |


---

## Routes

| URL | Notes |
|-----|--------|
| `/` | `src/pages/index.astro` → `src/components/home/HomeDocumentShell.astro` (self-contained doc, `src/styles/home/*`, Heebo + JetBrains Mono via Google Fonts) | Hero (top nav + headline with rotating word + portrait) · Services (two tracks: business systems / startup CTO) · WhyAlex (4 value cards) · About (photo + word-reveal story + years counter) · CaseStudies (sticky stack of client cards) · WhyToggle (dark "היום / אפשרי" switch) · Contact (methods + WhatsApp/mail form) · Footer (dark, legal links) · FloatingWhatsApp. Hebrew-only, RTL, spec in `docs/specs/homepage-v3/`. |
| `/app-publishing` | **On hold** (`.claude/work-orders/82-hold-page.md`) — `noindex, nofollow`, excluded from the sitemap, no footer link; reachable only by direct URL until the rewrite in `.claude/work-orders/82-article.md` ships. `src/pages/app-publishing.astro` → homepage design system via `src/components/home/HomeDocumentShell.astro` (same frozen prototype CSS/head as `/`, `src/components/app-publishing/*` sections). Sells app-store publishing (Google Play from HIH's org account, App Store from the client's own), as a content-led page: renders `sections` (`src/data/app-publishing.ts`) in order, dispatching on each entry's `kind` — the page lists no section component by hand. Article + Service + FAQPage JSON-LD. Hebrew-only, RTL, copy from `docs/specs/app-publishing/offer.md`, `docs/specs/app-publishing/landing-best-practices.md` and `docs/seo/app-publishing-queries.md`. |
| `/about`, `/terms`, `/privacy-sasha` | Legal pages |

---

## Page structure

Each page's sections in render order. Update this table whenever a page is created, deleted, or has sections added/removed/reordered.

|| Page | File | Sections (in order) |
|------|------|---------------------|
| `/` | `src/pages/index.astro` → `src/components/home/HomeDocumentShell.astro` | Hero (top nav + rotating headline + portrait + benefit chips) · Services (two tracks) · WhyAlex (value cards) · About (photo + story + years counter) · CaseStudies (sticky stack of client cards) · Guides (up to 3 guide cards, gated on a published or, off `main`, draft article existing — #124) · WhyToggle (dark "היום / אפשרי" switch) · Contact (methods + WhatsApp/mail form) · Footer · FloatingWhatsApp. Hebrew-only, RTL, spec in `docs/specs/homepage-v3/`. |
| `/about` | `src/pages/about.astro` | Legal-identity page (brand → legal entity + full contact block incl. address) · Hebrew section · English section |
| `/terms` | `src/pages/terms.astro` | Terms of use (identity · service description · WhatsApp terms · acceptable use · IP · liability · governing law · changes) · Hebrew section · English section |
| `/privacy-sasha` | `src/pages/privacy-sasha.astro` | General privacy policy (website + Sasha assistant + client WhatsApp lines) · Hebrew section · English section |
| `/articles` | `src/pages/articles/index.astro` | מדריכים index — H1 + intro · entries grouped under static per-cluster headings. On the production branch, non-draft entries only (empty today, one seed `draft: true` entry). On any other build (Cloudflare preview deploy, local build, `astro dev`), drafts are included too and labelled `טיוטה — לא פורסם` (#101). |
| `/articles/<slug>` | `src/pages/articles/[slug].astro` → `ArticleLayout.astro` | Homepage-design-system document (header + reading column), in order: sticky header (logo + WhatsApp CTA) · H1 · byline (published/verified dates, or a single draft badge in place of the whole dates row) · answer box · body · table slot · first-hand-note slot · one closing WhatsApp CTA + AI-answers disclosure · sibling-article cards. Design: `docs/specs/article-page-design.md` (#107). A draft page is built everywhere except the production branch, always `noindex`ed (#101); the seed entry exercises the route/layout/guard with no real copy. |
| `/404` | `src/pages/404.astro` | Not-found page (Hebrew copy, `noindex`, link back to `/`). Astro builds this to `dist/404.html`, served by Cloudflare Pages for any unmatched route. |
| `/app-publishing` | `src/pages/app-publishing.astro` | **On hold, `noindex, nofollow`, not in the sitemap or footer** (`.claude/work-orders/82-hold-page.md`) — PageHeader (logo + WhatsApp CTA, not the homepage nav) · Hero (H1 + byline + soft link down the page) · Google explainer (the 12-testers/14-days rule) · Apple explainer (why you open your own account) · Rejection (what a rejection looks like, and what we do) · WhatWeDo (the process, a diagram, and this page's first WhatsApp CTA) · WhoForNot (who it fits, who it doesn't) · Ownership (ownership/agreement terms) · About (about-Alex, reused homepage copy, background-free portrait cutout, the one dark band on the page) · Pricing (table ≥768px / cards <768px, add-ons, exclusions, a WhatsApp CTA) · Faq (accordion) · ClosingCta (the final WhatsApp CTA) · Footer · FloatingWhatsApp. Content-led ("advertorial") order settled in `docs/specs/app-publishing/landing-best-practices.md`; render order comes entirely from the `sections` array in `src/data/app-publishing.ts`, not from this file's import list. Hebrew-only, RTL. |

---

## Project layout (essentials)

```
src/
├── components/       # Header, Footer, LegalFooter, SEOHead, home/ (homepage v3)
├── data/
│   ├── site-contact.ts   # Shared phone + email + WhatsApp greeting
│   ├── case-studies.ts   # Homepage case studies (one entry per card)
│   └── home-profile.ts   # Name, years in field, homepage WhatsApp greeting
├── i18n/             # ui.ts (strings), utils.ts
├── layouts/          # Layout.astro (legal pages); homepage is a standalone document
├── pages/
│   ├── index.astro
│   ├── contact.astro
│   └── about.astro, terms.astro, privacy-sasha.astro
├── styles/           # global.css, home/ (homepage v3)
functions/api/        # Cloudflare Pages Functions (e.g. error logging)
public/               # Static assets
```

There is also a **`hand-in-hand-agents-design-system/`** folder with reference HTML/CSS/JSX — not imported by the Astro app at runtime.

---

## Tech stack

| Piece | Role |
|-------|------|
| Astro 5 | Static pages, islands |
| React | Interactive pieces (e.g. WhatsApp mock) via `@astrojs/react` |
| Tailwind CSS 4 | Main marketing pages |
| TypeScript | Strict typing |
| Playwright | E2E tests |
| Make.com | Contact form webhook (`PUBLIC_WEBHOOK_URL`) |
| Cloudflare Pages | Hosting (see below) |

---

## Deployment & env vars

**Hosting:** The production site is deployed with **Cloudflare Pages connected to this Git repository**. Pushes to the connected branch trigger a build on Cloudflare — you do **not** deploy via a separate GitHub Actions deploy workflow.

Configure in **Cloudflare → Pages → Project → Settings → Environment variables** (per environment):

- `PUBLIC_WEBHOOK_URL` — Make.com custom webhook URL for the contact form
- `GITHUB_TOKEN` — PAT with `read:packages` so the build can install `@alexgub84/*`

---

## CI (GitHub Actions)

Pull requests against `main` run **`.github/workflows/test.yml`**: install → build → Playwright. If `npm ci` fails on private packages, ensure the workflow has access to a token with package read permissions (same idea as local `GITHUB_TOKEN`).

---

## Before you push (team convention)

Bump the patch version so deployed HTML can be traced to a release:

```bash
npm version patch --no-git-tag-version
```

Commit the updated `package.json` with your changes.
