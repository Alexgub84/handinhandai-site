# handinhandai-site

Astro 5 marketing site for Hand in Hand AI. Deployed to Cloudflare Workers.

## Setup

```bash
npm install        # no auth needed — no private registries
npm run dev        # http://localhost:4321
npm run build      # astro check + build
```

## No private registries (tokenless installs)

The site has **no GitHub Packages / private npm dependencies**, so `npm ci`
needs no token in local, GitHub Actions, or Cloudflare. There is no `.npmrc`
and no `GITHUB_TOKEN`/`NPM_TOKEN` requirement. If you ever re-add a private
dependency, restore `.npmrc` + the CI secret + the Cloudflare build env var.

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
- **Styles**: Homepage uses the frozen prototype CSS in `src/styles/home/`; legal pages use Tailwind 4 via `src/styles/global.css`
- **React**: `@astrojs/react` integration is installed but currently unused (no React islands on any page)
- **i18n**: `src/i18n/ui.ts` (Hebrew default, English secondary), `[lang]/` route prefix for non-default

## Homepage (v3, personal-brand "Alex" site)

`/` and `/en` render `src/components/home/HomeDocument.astro`. It is a standalone
document (own `<html>`), ported 1:1 from the designer's prototype in
`docs/specs/homepage-v3/alex-site-light.html` (see that folder's README for the
spec review). Rules:

- `src/styles/home/app.css` is the prototype CSS **verbatim** and
  `src/styles/home/tailwind.css` is the prototype's compiled Tailwind 3 utilities,
  frozen. Put any local tweaks in `src/styles/home/overrides.css`, never in those two,
  so they can be re-synced from the HTML file.
- No React on the homepage: each component carries a small vanilla-TS `<script>` that
  reproduces the prototype's React state (rotating word, היום/אפשרי switch, count-ups,
  sticky case-study stack, contact form). `prefers-reduced-motion` disables motion.
- **Fillable content lives in data files, not components:** case studies in
  `src/data/case-studies.ts` (`logo`/`image`/`href` optional; a metric `value` animates as a
  count-up when it contains a digit, thousands separators included), name / years / WhatsApp greeting in
  `src/data/home-profile.ts`, phone + email in `src/data/site-contact.ts`.
- Homepage form opens WhatsApp / `mailto:` with the composed message; it does **not**
  post to Make.com (only `/contact` does).
- Icons: Lucide paths in `src/components/home/icons.ts` rendered by `LucideIcon.astro`.
- Hero layout is a 3-area grid (`.ah-head`, `.ah-visual`, `.ah-actions`) defined in
  `overrides.css`: phone order is headline → portrait → buttons, desktop keeps the text
  column beside the portrait. The portrait shrinks with the viewport but never below
  250px; under 720px tall the floating chips are hidden so they don't cover it.
- **WhatsApp is answered first by an AI assistant** — `AiAnswersNote.astro` states this
  next to every place someone is about to write (hero CTA, contact card, contact form,
  floating button tooltip). Keep that disclosure if you touch the WhatsApp copy.
- A case card whose product ships as a mobile app sets `stores` in the data file and
  gets App Store / Google Play badges (`StoreBadges.astro`, drawn inline — no store
  assets are downloaded). Card copy is **Hebrew first**: technical names live in the
  stack chips, not in running sentences.
- `CaseStudies.astro` is mounted **only on `/examples`**, the private review copy of the
  homepage (`HomeDocument` takes `showCases` and `noindex`; `/` and `/en` stay without it,
  and the "דוגמה" nav link plus the "דוגמאות" footer link appear only when `showCases` is
  set). The review page is `noindex, nofollow` and filtered out of the sitemap. When the
  examples are approved, mount the section on `/` and delete `src/pages/examples.astro`.
- The section renders one card per
  entry in `src/data/case-studies.ts` (one card today, the construction QC client). The
  section subtitle switches between singular and plural on the entry count. Adding an entry
  needs no component change.
- **Client anonymity:** the construction QC client ships the product under their own
  developer account, so the product name identifies the client. Never put the product name,
  its real domain or a store link in copy, alt text, file names or commit messages; keep
  `client` generic and keep the invented hostname in `url`. Source of truth:
  `docs/handoff/case-01-construction-qc.md`. The ordering/AI-verification client
  (card 2) is likewise anonymous, and its card figures are a **yearly run rate** from
  a three-month window — never present them as a completed year. Derivation:
  `docs/handoff/case-02-construction-ordering.md`. Card 3 (Chillist) is a named
  product on the `02` track and carries **build facts, not usage figures** — the
  product has no traffic to report, and invented metrics do not go on this site.

## Routes

| Path | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` → `components/home/HomeDocument.astro` | Homepage v3 (see section above) |

## Page structure docs

The README has a `## Page structure` section listing every page's sections in render order. **Each time a page is created, deleted, or has sections added/removed/reordered, update that section of the README in the same change.** Section list is purpose-only (one line per section) — copy/translation details stay out.

## CI

GitHub Actions workflow at `.github/workflows/test.yml` runs on every PR to `main`:
1. Install deps (`npm ci`) — no token needed (no private registries)
2. Build (`npm run build`)
3. Install Playwright browsers (Chromium only)
4. Run tests (`npm run test` → `playwright test`; specs in `tests/`: homepage, CSS integrity, style smoke)

**Scripts:**
- `npm run test` — Playwright E2E
- `npm run test:ui` — Playwright UI mode
- `npm run test:headed` — headed browser

## Retired pages

`/fitness-studio` and `/fitness-chain` (plus `/en`, `/he` variants) were removed on 2026-10-13 along with `FitnessLayout`, the vendored WhatsApp chat mock and `src/styles/fitness.css`. `public/_redirects` 301s those paths to `/`. Do not recreate them without a new spec.

## Favicon / app icons

Every icon in `public/` is generated from `docs/brand/logo-master.png` (the 1.1 MB
brand master, deliberately outside `public/` so it is never shipped) by
`scripts/generate-icons.py` (needs Pillow). Regenerate with
`python3 scripts/generate-icons.py` after any logo change, never by hand:

| File | Size | Used by |
|---|---|---|
| `favicon.ico` | 16/32/48 | legacy browsers, default `/favicon.ico` fetch |
| `favicon-32.png` | 32 | `<link rel="icon">` in both heads |
| `apple-touch-icon.png` | 180, flattened on white | iOS home screen (transparency renders black there) |
| `icon-192.png` | 192 | manifest, `Header.astro` logo |
| `icon-512.png` | 512 | manifest, JSON-LD `logo` |

Both document heads (`src/layouts/Layout.astro` and
`src/components/home/HomeDocument.astro`) must link the same four files plus
`/site.webmanifest`. Keep them in sync — they are separate documents.

## Social Sharing / OG Images

All Open Graph images (WhatsApp previews, Facebook, Twitter/X, LinkedIn) live in `public/og/`.

| Route | Image | Notes |
|---|---|---|
| Site default | `public/og/default.png` | Used by `Layout.astro` when no `ogImage` is passed |

### Image requirements

- **Size:** 1200 × 630 px (2:1 ratio)
- **Format:** JPEG preferred for photos; PNG only for graphics with hard-edged logos/text
- **File size:** under 300 KB — WhatsApp silently drops previews for larger files
- **Safe zone:** keep important content within the central 960 × 504 px

### Per-route configuration

Pass `ogImage` and `description` props to any layout to customise what appears in social previews:

```astro
<Layout
  lang={lang}
  title="אודות — HandInHandAI"
  description="מי עומד מאחורי HandInHandAI"
  ogImage="/og/about/og.jpg"
/>
```

`Layout.astro` accepts the three props: `title`, `description`, `ogImage`. If omitted they fall back to sensible defaults.

### Adding an OG image for a new route

1. Create a subfolder `public/og/<slug>/`
2. Save the image as `og.png` inside it (1200 × 630 px)
3. Pass `ogImage="/og/<slug>/og.png"` to the layout in the page file
4. Update the table above
5. See `public/og/README.md` for the full specification
