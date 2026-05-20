# handinhandai-site

Astro 5 marketing site for Hand in Hand AI. Deployed to Cloudflare Workers.

## Setup

```bash
npm install        # requires GITHUB_TOKEN in env (see below)
npm run dev        # http://localhost:4321
npm run build      # astro check + build
```

## GitHub Packages auth

The `@alexgub84` scope is served from GitHub Packages. npm reads the token from the shell environment:

```
# in ~/.zshrc
export GITHUB_TOKEN=ghp_...   # needs read:packages scope
```

After updating `.zshrc`, run `source ~/.zshrc` before `npm install`.

For Cloudflare Pages builds: add `GITHUB_TOKEN` as a build environment variable in the dashboard. **Do not rename to `NPM_TOKEN` in `.npmrc`** — Cloudflare's env var is `GITHUB_TOKEN` and renaming silently breaks every deploy with a 401 from GitHub Packages. GitHub Actions also uses `${{ secrets.GITHUB_TOKEN }}` (built-in, no PAT to rotate) — see `.github/workflows/test.yml`.

## Short-link redirects (`/wa/*`)

Two paths depending on whether the shortlink needs a branded social-media preview (Instagram DM, WhatsApp link card, etc.):

**With OG preview — Cloudflare Pages Function (`functions/wa/[slug].ts`).** Slug → `{ whatsappUrl, title, description, image }` registry inside the function. Bot UAs (WhatsApp, facebookexternalhit, Twitterbot, Slackbot, LinkedInBot, TelegramBot, Discordbot, etc.) get HTML with Open Graph + Twitter Card meta tags. Human UAs get `Response.redirect(whatsappUrl, 302)` — no flash. New slug needing a preview = add entry to `SHORTLINKS` + drop a 1200×630 JPEG at `public/og/wa/<slug>.jpg`. Do **not** also add the slug to `_redirects` — the function matches first and the duplicate line is noise.

**Without OG preview — `public/_redirects` line.** Edge 302 with no preview HTML. Use only when you're sure no platform recipient will benefit from a custom link card. Format: `/wa/<segment>  <wa.me URL with percent-encoded ?text=...>  302`. Astro copies `_redirects` verbatim into `dist/`. **Never** use an Astro page with `<meta http-equiv="refresh">` — static-mode HTML redirects produce a visible blank-page flash.

`npm run preview` honors neither path (static server). Verify in a Cloudflare Pages preview deploy. To test the UA-sniff behavior, curl with `-H "User-Agent: WhatsApp/2.23"` (expect 200 + HTML) vs default UA (expect 302 to wa.me).

## Cloudflare Pages — Linux native binaries

The lockfile is generated on macOS-arm64, which means npm only resolves darwin-arm64 binary packages. CF Pages runs Linux-x64-gnu and `npm ci` will skip optional binaries that aren't in the lockfile's `packages` section — silently failing at build time with `Cannot find module '../lightningcss.linux-x64-gnu.node'` (or the rollup / oxide variant).

Fix: pin Linux x64 GNU binaries explicitly in `package.json` → `optionalDependencies`. macOS installs ignore them (platform mismatch); Linux CI installs them; lockfile carries the full `node_modules/...` entry. Currently pinned:

- `@rollup/rollup-linux-x64-gnu`
- `@tailwindcss/oxide-linux-x64-gnu`
- `lightningcss-linux-x64-gnu`

If any of these packages get bumped (Astro/Vite/Tailwind/Rollup upgrade), bump the matching Linux binary version in `optionalDependencies` to match and regenerate the lockfile.

## Tech stack

- **Framework**: Astro 5 (file-based routing, `src/pages/`)
- **Styles**: Custom CSS with design tokens (`src/styles/hiha-tokens.css`, `src/styles/fitness.css`)
- **React**: `@astrojs/react` integration — use `client:load` or `client:visible` on interactive components
- **i18n**: `src/i18n/ui.ts` (Hebrew default, English secondary), `[lang]/` route prefix for non-default

## WhatsApp Mock Component

Package: `@alexgub84/whatsapp-chat-mock`

All WhatsApp mock UI lives in `src/components/whatsapp-mock/`:

```
src/components/whatsapp-mock/
  WhatsAppMock.tsx        ← React wrapper (auto-loops, RTL, no controls)
  index.ts                ← re-exports component + all scenarios
  scenarios/
    trial-booking.ts      ← booking a trial class after hours
    waitlist.ts           ← waitlist management (kettlbel scenario)
    followup.ts           ← post-trial follow-up + handoff
```

### Using in an Astro page

```astro
---
import WhatsAppMock from '@components/whatsapp-mock/WhatsAppMock';
import { waitlistMessages } from '@components/whatsapp-mock/scenarios/waitlist';
---

<!-- Inside a .fs-mock-slot container: -->
<div class="fs-mock-slot">
  <WhatsAppMock
    client:visible
    messages={waitlistMessages}
    headerName="סטודיו שלך · בוט"
    avatarUrl="/scenarios/avatar.png"
  />
</div>
```

- Use `client:load` for mocks visible on initial page load (e.g. hero)
- Use `client:visible` for mocks below the fold (starts animation when scrolled into view)
- `WhatsAppMock` auto-loops: conversation plays, pauses ~4s, restarts
- Override loop timing with `loopDelayMs` prop (milliseconds)

### Adding a new scenario

1. Create `src/components/whatsapp-mock/scenarios/my-scenario.ts`
2. Export a `Message[]` array (import type from `@alexgub84/whatsapp-chat-mock`)
3. Add a re-export to `src/components/whatsapp-mock/index.ts`

```ts
// src/components/whatsapp-mock/scenarios/my-scenario.ts
import type { Message } from "@alexgub84/whatsapp-chat-mock";

export const myScenarioMessages: Message[] = [
  { id: "1", sender: "incoming", text: "...", timestamp: "10:00", delayBeforeMs: 800 },
  { id: "2", sender: "outgoing", text: "...", timestamp: "10:00", status: "read", delayBeforeMs: 1000 },
];
```

### CSS sizing

The phone frame renders at 390×844px internally. The `.fs-mock-zoom-wrapper` class in `fitness.css` scales it to fit the slot:

| Breakpoint | Slot size | Zoom |
|---|---|---|
| Mobile | 320×640px | 0.820 |
| Tablet ≥768px | 340×680px | 0.872 |
| Desktop ≥1024px | 360×720px | 0.923 |

Wrap the `<WhatsAppMock>` in `<div class="fs-mock-slot">` — the slot provides the size, border-radius, shadow, and `overflow: hidden` clipping.

## Routes

| Path | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Main landing |
| `/fitness-studio` | `src/pages/fitness-studio.astro` | Fitness Studio landing |
| `/fitness-chain` | `src/pages/fitness-chain.astro` | Fitness Chain landing |
| `/contact` | `src/pages/contact.astro` | Contact form |
| `/[lang]/fitness-studio` | `src/pages/[lang]/fitness-studio.astro` | i18n variant |
| `/[lang]/fitness-chain` | `src/pages/[lang]/fitness-chain.astro` | i18n variant |

## Page structure docs

The README has a `## Page structure` section listing every page's sections in render order. **Each time a page is created, deleted, or has sections added/removed/reordered, update that section of the README in the same change.** Section list is purpose-only (one line per section) — copy/translation details stay out.

## Contact Form

- Located at `src/components/ContactForm.astro`
- Submits to Make.com webhook (`hook.eu1.make.com`)
- Field values sent in Hebrew (company type, service type)
- E2E tests in `tests/contact-form.spec.ts` using Playwright
- Tests intercept the Make.com webhook at context level (`context.route`) to avoid real submissions

## CI

GitHub Actions workflow at `.github/workflows/test.yml` runs on every PR to `main`:
1. Install deps (`npm ci`) — requires `GITHUB_TOKEN` secret in repo settings for GitHub Packages
2. Build (`npm run build`)
3. Install Playwright browsers (Chromium only)
4. Run tests (`npm run test` → `playwright test`)

**Scripts:**
- `npm run test` — Playwright E2E
- `npm run test:ui` — Playwright UI mode
- `npm run test:headed` — headed browser

## Fonts

Only Heebo is used on the fitness page (Hebrew-first). Poppins and Outfit are loaded in `FitnessLayout.astro` but unused — remove them if performance is a concern.

## Social Sharing / OG Images

All Open Graph images (WhatsApp previews, Facebook, Twitter/X, LinkedIn) live in `public/og/`.

| Route | Image | Notes |
|---|---|---|
| Site default | `public/og/default.png` | Used by `Layout.astro` when no `ogImage` is passed |
| `/fitness-studio` | `public/og/fitness-studio/og.jpg` | Fitness Studio landing page |
| `/fitness-chain` | `public/og/fitness-chain/og.jpg` | Fitness Chain landing page |
| `/contact` | `public/og/contact/og.png` | Optional; falls back to default |

### Image requirements

- **Size:** 1200 × 630 px (2:1 ratio)
- **Format:** JPEG preferred for photos; PNG only for graphics with hard-edged logos/text
- **File size:** under 300 KB — WhatsApp silently drops previews for larger files
- **Safe zone:** keep important content within the central 960 × 504 px

### Per-route configuration

Pass `ogImage` and `description` props to any layout to customise what appears in social previews:

```astro
<FitnessLayout 
  lang={lang} 
  title="Hand in Hand Agents — עוזר AI לסטודיו"
  description="עוזר חכם בוואטסאפ שעונה ללקוחות, קובע שיעורי ניסיון ומזכיר על אימונים"
  ogImage="/og/fitness/og.png"
/>
```

Both `Layout.astro` and `FitnessLayout.astro` accept the same three props: `title`, `description`, `ogImage`. If omitted they fall back to sensible defaults.

### Adding an OG image for a new route

1. Create a subfolder `public/og/<slug>/`
2. Save the image as `og.png` inside it (1200 × 630 px)
3. Pass `ogImage="/og/<slug>/og.png"` to the layout in the page file
4. Update the table above
5. See `public/og/README.md` for the full specification
