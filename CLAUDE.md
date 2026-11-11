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

## `canvas` is deliberately not a dependency (issue #139)

`scripts/generate-og-canvas.mjs` draws OG images with the `canvas` package, a
native graphics library (it bundles Cairo/pixman and compiles from source
whenever no matching prebuilt binary exists for the runner's Node/OS/arch).
Nothing else imports it, and CI never runs this script — yet while it sat in
`devDependencies`, every `npm ci` on GitHub Actions had to resolve and build
it, so a documentation-only PR could fail CI on a native-build error with no
code changed (the runner image moved and the prebuilt Linux binary stopped
matching). `canvas` is not in `package.json` or `package-lock.json`: install
it by hand, once, only when you need to regenerate an OG image —
`npm install --no-save canvas@3.2.3` — then run the script and let `npm
install` drop it again on the next `npm ci`. If the import is missing, the
script prints that exact command and exits non-zero instead of throwing a raw
module-not-found error.

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
`docs/seo/content-programme-2026-11.md`. Four standing rules, enforced by the
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
- **A guide may declare `parts` to track engagement inside the body (issue
  #174).** An ordered `{ id, heading }[]` in frontmatter: `id` a short English
  slug, `heading` the exact H2 text that starts that part, 4-6 body parts.
  `scripts/check-articles.mjs` fails the build when a declared `heading` isn't
  an H2 in the body, or when two parts share an `id`. Each declared part gets
  wrapped in a tracked `<section data-track-section="<id>">` at build time
  (`src/lib/rehype-article-devices.mjs`'s `rehypeArticleParts`). `parts` is
  optional — a guide that declares none still tracks exactly 3 fixed parts
  (`answer`, `closing`, `related`) plus `skill-handoff` when it carries a
  skill, never zero.
- **The brief comes from the real Google page.** Read it off Google itself in a
  browser, in Hebrew — autocomplete, "אנשים שאלו גם", related searches, who
  actually ranks, whether an AI overview appears and whom it cites — never from
  memory or a keyword tool's guess, and record the date it was read. See
  `docs/seo/content-programme-2026-11.md` for the required step.

**The sitemap must never list a noindexed page — Google flagged exactly this
contradiction on 2026-11-09 (issue #160).** `/articles/` sets
`<meta name="robots" content="noindex">` in `src/pages/articles/index.astro`
when the collection has no published (non-draft) article — a real state right
after an article programme starts, and again any time every article is pulled
back to draft. `astro.config.mjs`'s sitemap `filter` excludes that same URL
under the identical condition, read from `src/lib/articles-index-noindex.mjs`
(`isArticlesIndexNoindexed`) — the one function both the page and the config
call, so they cannot drift apart the way they did on 2026-11-09. The config
can't call `getCollection()` (it runs outside the content-collections
runtime), so it reads each article's `draft` flag off disk with `gray-matter`
instead and passes that array into the same shared function. **Never
hardcode `/articles/` into the filter's exclusion list** — the day a guide is
published this condition must flip the sitemap back on with no further edit,
and a hardcoded path would silently stop doing that.

**Skill hand-off (issue #155, second half).** An article whose frontmatter
sets `skill` (a key into the registry at `src/data/skills.ts`) gets
`SkillHandoff.astro` rendered right after its body — a download button for
that skill's release ZIP, a link to `/install-skill` (the one dated page
that teaches the three browser clicks every skill-carrying guide links to
instead of narrating them itself), and the developer command line as the
secondary route. The registry is the only place the release-asset URL shape
is encoded; a hand-typed asset URL anywhere else is drift the council's
decision record (`docs/council/2026-11-09-skill-distribution.md`) already
refused. The card's `data-track` label is always computed from the prop —
`skill-handoff-download-${skillKey}` — never hand-typed per guide, so a
future third skill gets it for free; its root element also carries
`data-track-section="skill-handoff"` so the analytics dashboard can tell a
reader *reached* the card from a reader who clicked the download. A shell
command or a repo path never goes inside `.art-term` (it has no
`overflow-x` and no `direction` on its own container, so a run that long
pushes the page past the viewport at 390px) — use the
`.skill-cmd-row`/`.skill-cmd` (and `.skill-repo-row`/`.skill-repo`)
primitives in `src/styles/home/article.css` instead.

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

**Local/concurrent-session port (issue #104).** `playwright.config.ts` derives
its own dev-server port per git worktree (a hash of `git rev-parse
--show-toplevel` into 4400-4499, passed to `astro dev --port` and threaded
into `webServer.url`/`use.baseURL` from one value) instead of the fixed 4321
`npm run dev` uses. Two worktrees running the suite at once now get two
servers, each reused only by the worktree that started it — a run in
worktree B can no longer silently assert against worktree A's server and
report a false pass. `npm run dev` still serves plain 4321, unchanged.
Nothing in the suite may hardcode 4321 again.

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
- **Fails closed without `ANALYTICS_SALT` (issue #138).** There is no
  generated or repo-committed fallback salt. If the secret is missing, the
  collector (`functions/api/e.ts`) returns its normal silent 204 to the
  browser's beacon but writes nothing to D1 — a visitor hashed with a salt
  anyone could read in this public repo's history is worse than not counting
  them at all. The absence is logged once per isolate lifetime (a module-scope
  flag; Cloudflare can evict and respawn an isolate, so this is "once per
  isolate", not "once ever") as `[ANALYTICS_COLLECTOR] ANALYTICS_SALT is not
  set — collection is paused`. The 180-day retention prune still runs on its
  usual ~1% chance even while collection is paused, so old rows keep getting
  deleted — it no longer depends on a write having happened first.
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
  requests) because Pages Functions have no cron handler. Any later,
  non-idempotent change to the table (a new column, a new index that isn't
  `CREATE INDEX IF NOT EXISTS`) goes in its own file under
  `db/migrations/NNNN-description.sql`, applied to the remote database by
  hand once — never folded into the re-runnable `CREATE TABLE IF NOT EXISTS`
  above, which only has to match what a fresh local/dev bootstrap produces.
- **Environment tagging (issue #149).** Every row carries `env`: `'live'`
  when the request's Host header is `handinhandai.com`
  (`PRODUCTION_HOSTNAME`, exported from `functions/lib/environment.mjs`'s
  `classifyEnvironment(host)`), `'preview'` otherwise (the pages.dev preview
  alias, a branch preview, local `wrangler pages dev`), and `NULL` on any row
  written before this column existed — read by `/stats` as "unknown", never
  silently reclassified as either. `functions/_middleware.ts` keeps its own
  copy of the same hostname literal for an unrelated purpose (the noindex
  guard); import `PRODUCTION_HOSTNAME` from `functions/lib/environment.mjs`
  instead of adding a third copy. **Migration-before-deploy, always:** the
  collector's `INSERT` names its columns explicitly, so a collector that
  writes `env` deployed before `db/migrations/0001-add-env-column.sql` is
  applied to the remote database fails every write with a D1 error that its
  own catch-all swallows silently — collection looks fine from outside while
  nothing is being recorded. Apply the migration (`npx wrangler d1 execute
  hih-analytics --remote --file db/migrations/0001-add-env-column.sql`)
  first, deploy the collector second, every time.
- **Preview rows are hidden by default.** `/stats` shows a row when `env` is
  `'live'`, `NULL` ("unknown"), or when `?preview=1` is on the URL (a toggle
  next to the day-range tabs, preserving `k`/`days`) — `'preview'` rows are
  the only thing ever hidden by default, and a note next to the toggle says
  once that unknown-environment rows are shown, not hidden.
- **Per-guide funnel.** A "Per guide" section on `/stats` shows, per entry in
  `functions/stats.ts`'s hardcoded `GUIDES` array (no access to Astro's
  content collection from a standalone edge function — one line to extend
  by hand when a third guide ships): arrived, reached the hand-off section
  (`data-track-section="skill-handoff"`, owned by `SkillHandoff.astro` —
  issue 155-2 — not duplicated here), clicked through to GitHub, the top
  referrer, and the GitHub release's total download count for that guide's
  asset. Each guide's `clickLabels` matches **both** the plain-Markdown
  hand-off link's visible text (today) and the `data-track` label
  `SkillHandoff.astro` sets once it ships, so this needs no follow-up query
  change the moment that component replaces the Markdown paragraph.
- **Per-part funnel (issue #174).** Under that same per-guide card, a row per
  declared body part: reach as a count and as % of arrived, median dwell in
  seconds where dwell was recorded. Filtered by the guide's own path, so two
  guides reusing a part id (`procedure` appears on both skill guides today)
  never merge into one number. This is a single query grouped by `(path,
  section)`, with a window function ranking each group's dwell values for the
  median — **not** a `UNION ALL` branch per (guide, part) pair: that was the
  first implementation, and D1 (confirmed locally) refuses a compound
  `SELECT` past 5 terms, which 2 guides × 6 parts already exceeds. Do not go
  back to one branch per part as the guide/part count grows; extend the
  single grouped query instead.
- **GitHub download count.** `functions/lib/github-releases.mjs` sums
  `download_count` for a named asset across *every* release returned by
  `GET https://api.github.com/repos/Alexgub84/claude-skills/releases` (a
  filename's count resets to 0 on a new release carrying a same-named asset,
  so only a release-wide sum is accurate). The actual `fetch()` — with a
  required `User-Agent` header (GitHub 403s an unauthenticated request
  without one) and a 5-minute module-scope cache, same "resets on isolate
  eviction" pattern as `loggedMissingSalt` above — lives inline in
  `functions/stats.ts`, to stay under GitHub's 60 req/hour unauthenticated
  limit. On any fetch failure, non-200, or no matching asset, the dashboard
  renders a dash and a short note instead of blocking the rest of the page —
  same fail-soft contract as a D1 query failure.
- **Bindings:** the D1 binding `ANALYTICS_DB` is committed in `wrangler.toml`
  (top-level for production, `[env.preview.d1_databases]` for preview) — that
  file is the source of truth, Cloudflare rebuilds the dashboard's binding
  config from it on every deploy, so a binding added only in the dashboard is
  silently wiped on the next merge to `main`. Secrets stay out of the file and
  stay dashboard-only (Production *and* Preview): `ANALYTICS_SALT`, and either
  `ACCESS_AUD` (Cloudflare Access on `/stats*`) or `STATS_TOKEN`
  (`/stats?k=...`). With neither auth secret set, `/stats` answers 404 — it
  never opens by accident. Confirmed against the Cloudflare Pages API
  (issue #117): the top-level `[[d1_databases]]` block **does** apply to the
  Production environment on its own — no `[[env.production.d1_databases]]`
  block is needed. A fresh deploy can take a short time (single-digit
  minutes) to roll the new binding out across the whole edge network; a
  write tested in the first minute or two after a deploy finishes can still
  fail even though the binding is correctly configured and will work shortly
  after. That propagation lag, not a config mistake, was the actual cause
  behind #117.
- **Staleness signal:** `/stats` shows "last event …m/h/d ago" in the header,
  in red once the most recent row is more than 12 hours old (or if there are
  no rows at all) — so a dead counter is visible without running a query.
  This reads `MAX(ts)` only; it changes nothing about what is collected.
- **Salt-missing signal:** when `ANALYTICS_SALT` is not set on this
  environment, `/stats` shows a second red line next to the staleness pulse —
  "ANALYTICS_SALT is not set — collection is paused" — so the dashboard says
  why it's quiet instead of just looking quiet. This is a plain env check
  (`!env.ANALYTICS_SALT`), no DB query.
- **Headless browsers are invisible on purpose.** The collector
  (`functions/api/e.ts`) deliberately drops any request whose User-Agent
  contains `headless`, and still answers the browser's beacon with its normal
  silent 204 — so a headless-browser walk of the site records nothing while
  looking completely successful from the browser's side. This is correct
  behaviour and must stay: a headless visit is a bot, not a visitor.
  **Collection can only be verified end to end with a headed browser** — a
  headless walk proves nothing about the funnel. [Reason: on 2026-11-10 a
  session lost an hour checking the funnel with a headless browser and seeing
  nothing recorded.]
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
