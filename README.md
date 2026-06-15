# Hand in Hand AI

Bilingual (Hebrew default / English) marketing site for Hand in Hand AI, built with Astro 5.

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
| **Phone & email in footers** (main site + fitness) | `src/data/site-contact.ts` — single source of truth |
| Main site chrome (nav, footer, meta) | `src/layouts/Layout.astro`, `src/components/Header.astro`, `src/components/Footer.astro` |
| Contact form + webhook wiring | `src/components/ContactForm.astro` |
| Fitness Studio landing (standalone layout, no shared Header) | `src/pages/fitness-studio.astro`, `src/pages/[lang]/fitness-studio.astro` |
| Fitness Chain landing (shares layout + CSS with Studio) | `src/pages/fitness-chain.astro`, `src/pages/[lang]/fitness-chain.astro` |
| Shared fitness layout + styles | `src/layouts/FitnessLayout.astro`, `src/styles/fitness.css` |
| WhatsApp demo chats on fitness pages | `src/components/whatsapp-mock/` |

Fitness copy: `fitness-studio.*` and `fitness-chain.*` keys in `src/i18n/ui.ts`. Fitness images: `public/fitness-studio/`, `public/fitness-chain/`.

---

## Routes

| URL | Notes |
|-----|--------|
| `/` | Homepage (Hebrew, default language — no prefix) |
| `/contact` | Contact (Hebrew) |
| `/en/`, `/ru/`, `/uk/` (and `/he/`) | Homepage per locale (Hebrew default also served at `/`) |
| `/{lang}/fitness-studio` | Fitness Studio per locale — `lang` ∈ he/en/ru/uk |
| `/fitness-studio` | Fitness Studio landing (Hebrew) |
| `/{lang}/fitness-chain` | Fitness Chain per locale — `lang` ∈ he/en/ru/uk |
| `/fitness-chain` | Fitness Chain landing (Hebrew) |

---

## Page structure

Each page's sections in render order. Update this table whenever a page is created, deleted, or has sections added/removed/reordered.

|| Page | File | Sections (in order) |
|------|------|---------------------|
| `/` | `src/pages/index.astro` (self-contained doc, `src/styles/handinhand/*`, Discovery font) | ScrollProgress · NavBar (anchor nav) · Hero (headline + IntegrationHub visual) · AlexSection (founder) · Capabilities (bento grid + DiagChat) · ExampleSection (4 use-cases + phone previews + live ChatDemo) · HowItWorks (3-step timeline) · AudienceSection (chains) · FinalCTA (dark panel) · Footer · FloatingWhatsApp. Hebrew-only, RTL, CSS-first animations, WhatsApp-only CTAs. |
| `/contact` | `src/pages/contact.astro` | Hero · Contact form |
| `/fitness-studio` | `src/pages/fitness-studio.astro` | TopBar · Hero (image + WhatsApp CTA + WhatsAppMock) · Core Promise band · Three Jobs grid · Scenario 2: Loyal Attendee · Scenario 3: No-Show Re-engagement · Channel Options band · How It Works (3 steps) · About · FAQ · Final CTA · Footer |
| `/fitness-chain` | `src/pages/fitness-chain.astro` | Identical structure to `/fitness-studio` (clone — sections diverge as copy is updated) |
| `/en` | `src/pages/[lang]/index.astro` → `HomeDocument` | Serves the **same** new homepage as `/` (identical Hebrew content; canonical → `/`). Only `en` is generated. |
| `[lang]/*` fitness variants | `src/pages/[lang]/` | Same section order as default-lang counterparts; fitness `[lang]/` variants use static dashed-border mock placeholders instead of live `WhatsAppMock`. Site languages are Hebrew + English only (Russian/Ukrainian removed). |

---

## Project layout (essentials)

```
src/
├── components/       # Header, Footer, ContactForm, whatsapp-mock, …
├── data/
│   └── site-contact.ts   # Shared phone + email for footers
├── i18n/             # ui.ts (strings), utils.ts
├── layouts/          # Layout.astro (main), FitnessLayout.astro
├── pages/
│   ├── index.astro
│   ├── contact.astro
│   ├── fitness-studio.astro
│   ├── fitness-chain.astro
│   └── [lang]/       # /he/*, /en/* (index, contact, fitness-studio, fitness-chain)
├── styles/           # global.css, hiha-tokens.css, fitness.css
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
