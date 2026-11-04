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

## AI crawler access (Cloudflare) — deliberately open

Decided 2026-11-04: this site wants to be the page an AI assistant quotes, so
it is open to AI crawlers. Do not re-block them without asking Alex first.

- Cloudflare dashboard → zone `handinhandai.com` → Security → Settings → "AI
  Crawler and Agent access policies": **Training** set to **Allow (do not
  block)** (was "Disallow", which 403'd `GPTBot`, `ClaudeBot`, `Bytespider`
  and others at the edge). `Search` and `Agents` were already Allow.
- Same dialog, **"Enable Bot Preference Sync" turned OFF** and must stay off.
  [Reason: when on, it prepends a Cloudflare-managed `robots.txt` that
  overrides `public/robots.txt` — it was serving a `Content-Signal:
  ai-train=no` header and `Disallow: /` for `Google-Extended` and other
  crawlers, invisibly to anyone reading the repo file.] `curl
  https://handinhandai.com/robots.txt` must keep matching the repo's
  `public/robots.txt` verbatim — if it doesn't, Bot Preference Sync got
  re-enabled somewhere.
- AI Crawl Control → Security also has a per-crawler block list (Amazonbot,
  ClaudeBot, GPTBot, CCBot, Bytespider, Claude-User, etc. were individually
  toggled "Block" on top of the policy above). All toggles are off. A new
  crawler Cloudflare adds to that list in future ships with blocking off by
  default, so this needs no maintenance — just don't flip one back on.
- **Bot Fight Mode stays OFF.** [Reason: it cannot be scoped by path on the
  Free plan, challenges unverified bots indiscriminately, and would risk
  `functions/wa/[slug].ts`'s link-preview fetchers (WhatsApp, Telegram,
  Slack, Discord are not reliably on Cloudflare's verified-bot list) going
  dark with nobody noticing.]
- Scanner noise (`.php`, `/.git`, `/.env`, `wp-*`, `xmlrpc` probes) is not
  handled by blocking bots — this site has none of those paths to protect —
  it is background internet noise that shows up in zone analytics and is
  ignored, not defended against with a bot control.
- Verify after any Cloudflare change: `curl -A "GPTBot"
  https://handinhandai.com/` (and `ClaudeBot`, `Bytespider`,
  `Google-Extended`, `PerplexityBot`) must return `200`; a `/wa/<slug>` link
  must still return preview HTML to `curl -A "WhatsApp/2.23"` and a `302` to
  a plain `curl`.

## Tech stack

- **Framework**: Astro 5 (file-based routing, `src/pages/`)
- **Styles**: Homepage uses the frozen prototype CSS in `src/styles/home/`; legal pages use Tailwind 4 via `src/styles/global.css`
- **React**: `@astrojs/react` integration is installed but currently unused (no React islands on any page)
- **i18n**: `src/i18n/ui.ts` (Hebrew default, English secondary) — Hebrew-only routing, no language-prefixed routes

## Homepage (v3, personal-brand "Alex" site)

`/` (`src/pages/index.astro`) renders directly via
`src/components/home/HomeDocumentShell.astro` — the shared `<html>` chrome
for every page in this design system (issue #82). It is the thin caller of
the shell that every other page in this system also uses (`page -> shell`);
there is no separate `HomeDocument.astro` anymore (inlined into `index.astro`
in issue #82 round 2). The homepage content was ported 1:1 from the
designer's prototype in `docs/specs/homepage-v3/alex-site-light.html` (see
that folder's README for the spec review). Rules:

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
- `CaseStudies.astro` is mounted on the homepage itself (`/`) since
  2026-10-16, with the "דוגמה" nav link and the "דוגמאות" footer link. The private
  review page `/examples` is gone; `public/_redirects` 301s it to `/#example`.
- The section renders one card per
  entry in `src/data/case-studies.ts` (three today). The
  section subtitle switches between singular and plural on the entry count. Adding an entry
  needs no component change.
- **Client anonymity:** the construction QC client ships the product under their own
  developer account, so the product name identifies the client. Never put the product name,
  its real domain or a store link in copy, alt text, file names or commit messages; keep
  `client` generic and keep the invented hostname in `url`. Source of truth:
  `docs/handoff/case-01-construction-qc.md`. The ordering/AI-verification client
  (card 2) is likewise anonymous. Card 3 (Chillist) is a named
  product on the `02` track. **No card carries metric tiles** since the 2026-10-16
  review: a figure a reader cannot verify costs more trust than it buys. The
  `results` rendering stays for a case whose client agrees to publish numbers.
  **Store badges only for a product a reader can find by name** — Chillist has
  them; the anonymous construction app does not, because its name never appears
  here and a failed search reads as a bluff.

## Articles (`/articles`)

Long-form Hebrew guides, collection schema in `src/content.config.ts`, layout in
`src/layouts/ArticleLayout.astro`, plan and gates in
`docs/seo/content-programme-2026-11.md`. Three standing rules, enforced by the
build (issue #108), not just remembered:

- **Hebrew is right-to-left, always.** Every Hebrew page is `lang="he"` and
  `dir="rtl"` on `<html>`, layout uses logical properties
  (`margin-inline`/`padding-inline`/`border-inline-start`), and only an isolated
  Latin run (a term, a code span, a URL) may be `direction: ltr`, with
  `unicode-bidi: isolate` so it can't flip the sentence around it. `npm run build`
  checks this against the built HTML under `dist/articles/` (`scripts/check-rtl.mjs`).
- **Every article carries a keyword brief, written before the article.** No
  article is drafted from a model's guess about what people search. The brief's
  `primaryQuery`, `secondaryQueries` (2+) and `answersQuestions` live in the
  article's frontmatter (`src/content.config.ts`) — required on any non-draft
  article, enforced by `scripts/check-articles.mjs`, same pattern as
  `lastVerified`. Audit material only: never rendered on the page, never emitted
  as a meta keywords tag.
- **The brief comes from the real Google page.** Read it off Google itself in a
  browser, in Hebrew — autocomplete, "אנשים שאלו גם", related searches, who
  actually ranks, whether an AI overview appears and whom it cites — never from
  memory or a keyword tool's guess, and record the date it was read. See
  `docs/seo/content-programme-2026-11.md` for the required step.

## Routes

| Path | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` → `components/home/HomeDocumentShell.astro` | Homepage v3 (see section above) |

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

`/fitness-studio` and `/fitness-chain` (plus their non-default-language variants) were removed on 2026-10-13 along with `FitnessLayout`, the vendored WhatsApp chat mock and `src/styles/fitness.css`. `public/_redirects` 301s those paths to `/`. Do not recreate them without a new spec.

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

Three document heads must link the same four files plus `/site.webmanifest`:
`src/layouts/Layout.astro` (legal pages), `src/layouts/ArticleLayout.astro`
(articles), and, for every page in the homepage design system (`/`,
`/app-publishing`, …), `src/components/home/HomeDocumentShell.astro` — the
shared `<html>` chrome extracted in issue #82 so a page in that system no
longer has its own copy of this head. `index.astro` and `app-publishing.astro`
are thin callers of the shell (`page -> shell`, the only calling pattern in
this system since `HomeDocument.astro` was inlined into `index.astro` in issue
#82 round 2) and carry no favicon/manifest markup of their own. Keep the three heads in sync —
they are separate documents.
## Visitor analytics (first party, no third-party script)

Nothing on the page talks to anyone but this domain. The chain is
`src/components/Analytics.astro` (client) -> `functions/api/e.ts` (collector)
-> Cloudflare D1 -> `functions/stats.ts` (`/stats` dashboard).

- **No cookies.** Session id lives in `sessionStorage`; the visitor id is
  `sha256(ip + ua + ANALYTICS_SALT + UTC day)` computed in the collector, so it
  rotates daily and no IP is ever written. `DNT=1` disables collection entirely.
- **Events:** `view`, `section` (IntersectionObserver, first reach + dwell),
  `depth` (max scroll %), `click`, `end` (engaged ms). Batched and sent with
  `navigator.sendBeacon` on tab hide; depth and engaged time are cumulative, so
  queries take `MAX(value)` per session, never a sum.
- **Labelling a CTA:** add `data-track="some-label"` to the element. Without it
  the label falls back to `aria-label`, then the trimmed text. Sections are read
  from `section[id]` or `data-track-section`.
- **Schema:** `db/analytics-schema.sql`. Apply with
  `npx wrangler d1 execute hih-analytics --remote --file db/analytics-schema.sql`.
  Rows older than 180 days are pruned lazily inside the collector (~1% of
  requests) because Pages Functions have no cron handler.
- **Bindings:** the D1 binding `ANALYTICS_DB` is committed in `wrangler.toml`
  (top-level for production, `[env.preview.d1_databases]` for preview) — that
  file is the source of truth, Cloudflare rebuilds the dashboard's binding
  config from it on every deploy, so a binding added only in the dashboard is
  silently wiped on the next merge to `main`. Secrets stay out of the file and
  stay dashboard-only (Production *and* Preview): `ANALYTICS_SALT`, and either
  `ACCESS_AUD` (Cloudflare Access on `/stats*`) or `STATS_TOKEN`
  (`/stats?k=...`). With neither auth secret set, `/stats` answers 404 — it
  never opens by accident.
- **Verifying locally:** `npm run build`, then
  `npx wrangler pages dev --binding STATS_TOKEN=x ANALYTICS_SALT=y`. The real
  `ANALYTICS_DB` binding above already covers local D1 access — don't add a
  second, throwaway `[[d1_databases]]` block for a local run; if `wrangler
  pages dev` ever needs a block distinct from the real binding (e.g. to point
  at a separate local-only database), delete it before committing.
- The privacy page (`src/pages/privacy-sasha.astro`, section 13, both languages)
  describes exactly what is collected. **Keep it in sync** with any change here.

## Social Sharing / OG Images

All Open Graph images (WhatsApp previews, Facebook, Twitter/X, LinkedIn) live in `public/og/`.

| Route | Image | Notes |
|---|---|---|
| Site default | `public/og/default.jpg` | Used by `Layout.astro`/`SEOHead.astro` when no `ogImage` is passed (legal pages), and explicitly by `/app-publishing`. Built from the homepage hero look (off-white ground, the deep-orange circle, the cut-out portrait) by `local/og-generator/generate.mjs` — regenerate with that script, never hand-edit the JPEG. |
| Homepage (`/`) | `public/og/home/og.jpg` | Same image/bytes as the site default, kept at its own path since `index.astro` passes its own `ogImagePath`. The generator writes both paths in one run. |

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
