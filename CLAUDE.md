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
  `src/data/case-studies.ts` (bracketed Hebrew + `XX` are placeholders, with
  `logo`/`image`/`href` optional), name / years / WhatsApp greeting in
  `src/data/home-profile.ts`, phone + email in `src/data/site-contact.ts`.
- Homepage form opens WhatsApp / `mailto:` with the composed message; it does **not**
  post to Make.com (only `/contact` does).
- Icons: Lucide paths in `src/components/home/icons.ts` rendered by `LucideIcon.astro`.
- `CaseStudies.astro` is built but **not mounted** in `HomeDocument.astro` until the
  placeholders in `src/data/case-studies.ts` are replaced with real clients. When mounting
  it back, also restore the "דוגמה" nav link (Hero) and "דוגמאות" footer link.

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
