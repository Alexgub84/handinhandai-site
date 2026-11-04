# Site inventory — 2026-11-04

Snapshot of what exists today (on `main`) plus what three open PRs would add, so a content programme can be planned without re-reading the repo. Not a plan, not a decision document — those live in the files cited below.

## 1. Routes that exist on `main` today

| Route | File | What it is |
|---|---|---|
| `/` | `src/pages/index.astro` → `src/components/home/HomeDocument.astro` | Homepage v3, personal-brand "Alex" site. Own `<html>` document, frozen prototype CSS, case studies, about, contact form that opens WhatsApp/`mailto:`. |
| `/about` | `src/pages/about.astro` | Plain Tailwind legal/identity page: brand, osek details, contact info. Uses shared `Layout.astro`. |
| `/terms` | `src/pages/terms.astro` | Terms of use, same plain Tailwind layout. |
| `/privacy-sasha` | `src/pages/privacy-sasha.astro` | Privacy policy (bilingual sections), describes analytics collection and WhatsApp data processing. Same plain layout. |
| `/404` | `src/pages/404.astro` | Not-found page, `noindex` set. |
| `/stats` | `functions/stats.ts` (Pages Function, not an Astro page) | Analytics dashboard, gated by Cloudflare Access or a token; 404s if neither secret is set. |
| `/wa/*` | `functions/wa/[slug].ts` (Pages Function) | WhatsApp short-links with bot-aware OG preview HTML, 302 for humans. |
| `/api/e`, `/api/log-error` | `functions/api/*.ts` | Analytics collector + error log endpoint, not pages. |

No `/en` route (removed in PR #78/#80); `_redirects` 301s any `/en*` hit to `/`. `/examples` 301s to `/#example`. `/fitness-studio`, `/fitness-chain` (and their old `/en`/`/he` variants) 301 to `/` — retired 2026-10-13.

## 2. What the three open PRs add

- **PR #91** — `feat: /app-publishing landing page (#82)`. Adds a new Hebrew route `/app-publishing` selling the app-store-publishing service, built in the homepage design system (not the Tailwind layout). Ships: `Hero`, `ArticleSection`, `WhatWeDo`, `About`, `Pricing`, `Faq`, `ClosingCta` components reading from `src/data/app-publishing.ts` (sections, FAQ, pricing table, WhatsApp message, article dates); its own title/meta description/canonical via a new shared `HomeDocumentShell.astro` (the homepage's own `<html>` chrome, extracted so `/` and `/app-publishing` both call it rather than duplicating it — `HomeDocument.astro` is deleted, `index.astro` becomes a thin caller too); three JSON-LD blocks (`Article`, `Service` with `Offer` entries built from the pricing table, `FAQPage`). CTA is WhatsApp only (no intake form — that's #83). No sample-contract link (doesn't exist yet). No OG image yet (`ogImagePath` placeholder points at `/og/default.jpg`).
- **PR #92** — `fix: name Meta WhatsApp Cloud API as the Sasha connector, drop Green API (#50)`. Content-only fix to `/privacy-sasha`: removes "Green API" from sections 6/7/9 (it's no longer true — the bot now runs on Meta's Cloud API), names Meta's WhatsApp Business Platform instead. No new infrastructure.
- **PR #93** — `fix: background-free portrait in the hero's green circle (#82)`. Visual-only: swaps in a cutout portrait photo for the homepage hero/about green circle, fixes a badge-color collision on short phone screens, moves the "years" badge off the photo into its own card. No content or SEO plumbing change.

## 3. What the untracked docs already decided

**Council deliberations** (`docs/council/2026-11-02-*.md`) — four pre-mortem/redesign council runs plus one second-opinion run. All end with an unfilled "Chairman: ... replace this line" placeholder — **no synthesis was ever written into these files**; they are raw multi-model deliberation transcripts, not decisions. The actual decisions that came out of this process are recorded in `docs/specs/app-publishing/positioning-v2.md` (see below) and `offer.md`'s v2 section. Key facts the panels converged on, now baked into the settled spec:
- Never host a client app on the verified Google organisation account for the Android half going forward (unanimous across redesign panels) — though note `offer.md`'s v2 landing copy as shipped in PR #91 still describes Google publishing "מהחשבון העסקי המאומת שלנו" (from Hand In Hand AI's own verified account); the positioning doc marks "whether the Android half is still published from his own organisation account" as **still open**, so there's a live contradiction between the council's "zero" verdict and what PR #91 actually ships.
- Kill the free, uncredited readiness check and the 3-month inclusive support/retainer tail — named by every panel as the main cause of a slow, unprofitable death.
- Hebrew only, no English page, for at least six months; the market is capacity-constrained, not demand-constrained.

**`docs/specs/app-publishing/positioning-v2.md`** — supersedes the "skip the 12 testers" framing:
- The buyer is someone who built an app with AI only and needs it turned into a shippable product, not someone shopping for a tester workaround (testers are already solved for free in Hebrew Facebook groups).
- Manager recommendation adopted from the council: 390 ₪ gate (credited against the package) / 2,290 ₪ one store / 3,490 ₪ both stores / 450 ₪ per hour engineering — but this is marked as a **recommendation**, and what actually shipped in PR #91 is the older 590/790/1,290 ₪ table from `offer.md` v2. Pricing is still unresolved between these two documents.
- Kill criteria are pre-registered (blended rate under 350 ₪/hour by the 5th client, fewer than 3 paying clients by 31 Dec 2026, fewer than 4 jobs in any trailing 90 days, immediate stop on any client app landing on the org account or any Play enforcement mail).

**`docs/specs/app-publishing/offer.md`** — the longest, most concrete spec, explicitly "v2, implement this" (supersedes an earlier v1 in the same file):
- Full market research (Fiverr anchors $25-100, Israeli competitor app2store.co.il at 2,490-3,990 ₪), platform rules (Google org-account exemption from the 12-tester gate; Apple requires client-owned account, Admin invite, guidelines 5.2.1/4.2.6/4.3), and a client intake checklist.
- Three pages specified: landing (`/app-publishing`, shipped in #91), intake form (`/app-publishing/send`, issue #83, not built), post-payment client instructions (`/app-publishing/next`, issue #84, not built).
- Full Hebrew landing copy (H1, H2s, FAQ, pricing table at 590/790/1,290 ₪) — this is what PR #91 implements.
- An SEO plan naming target Hebrew phrases, and a separate article doc (`/blog/publish-app-without-mac`, issue #85, blocked on Alex handing over the drafted Hebrew body).

**`docs/specs/app-publishing/landing-best-practices.md`** — research-backed page structure (not yet fully matching what #91 shipped):
- Names the pattern as an "advertorial / content-led / pre-sell" page: explain the stores' real rules first, thread soft CTA links through the content, put the price table near the end, one hard WhatsApp CTA repeated 2-3 times.
- Specifies 7 real screenshots/diagrams to produce (Play Console 12-tester screen, App Store Connect invite screen, annotated rejection email, 5-step process diagram, etc.) — none of these exist yet; PR #91 ships with a placeholder OG image and no custom screenshots.
- WCAG alt-text and image-weight guidance for those images.

**`docs/seo/app-publishing-queries.md`** — Hebrew keyword research:
- Verified (via Google Autocomplete, not volume data) a list of real Hebrew phrases people type: "איך להעלות אפליקציה לגוגל פליי", "כמה עולה להעלות אפליקציה לגוגל פליי", "חשבון מפתח גוגל פליי", "פתיחת חשבון מפתח אפל", etc.
- **Key correction to `offer.md`'s own claim**: the Hebrew market is NOT empty. `app2store.co.il` is a live, direct Hebrew competitor with dedicated guides for Base44/Lovable/Flutter/Expo, pricing 3-4x higher than the 590-1,290 ₪ table — this contradicts `offer.md`'s market-research section and is a fact any content plan needs to account for.

## 4. SEO plumbing — what exists, what's missing

| Item | Status | Detail |
|---|---|---|
| Sitemap | **Exists** | `@astrojs/sitemap` integration wired in `astro.config.mjs`; generates `sitemap-index.xml` + `sitemap-0.xml` at build, referenced from `robots.txt`. |
| `robots.txt` | **Exists** | `public/robots.txt`: allow all, points to the sitemap. |
| `llms.txt` | **Absent** | No `public/llms.txt` anywhere in the repo. |
| JSON-LD / schema.org | **Exists, two separate implementations** | `src/data/organization-schema.ts` exports one shared `buildOrganizationSchema()` (`@type: ProfessionalService`, one `@id` everywhere, deliberately no `sameAs` — no social profile URL exists yet). Consumed by: `SEOHead.astro` (About/Terms/Privacy, wraps it in a `ContactPoint`), `HomeDocument.astro` (homepage, extends it with `areaServed`, `founder`, `knowsAbout`, `slogan`). PR #91's `/app-publishing` additionally emits `Article`, `Service` (with `Offer` entries), and `FAQPage` blocks, referencing the same `@id` via `provider: {"@id": ...}`. |
| hreflang | **Absent** | Zero occurrences in the codebase; removed entirely in PR #78/#80 when `/en` was deleted. |
| Canonical | **Exists** | Every page sets `<link rel="canonical">`: `SEOHead.astro` computes it from `Astro.url.pathname`; `HomeDocument.astro` hardcodes `/` since `/` and the old `/en` rendered identical Hebrew content. |
| Meta description | **Exists, per-page** | `Layout.astro`/`SEOHead.astro` take a `description` prop with a site-wide fallback; `HomeDocument.astro` and the new `/app-publishing` page set their own. |
| OG images | **Exists, partially populated** | `public/og/default.(png/jpg)` site default; `/og/home/og.jpg` for the homepage. `/app-publishing` (PR #91) has **no real OG image yet** — placeholder points at `/og/default.jpg` with a code comment flagging it needs a real 1200×630 asset. |
| `_redirects` | **Exists** | `public/_redirects`: retired fitness pages → `/`, `/en*` → `/`, `/examples` → `/#example`. `/wa/*` is handled by a Function, deliberately not duplicated here. |
| Analytics | **Exists, first-party** | `Analytics.astro` → `functions/api/e.ts` → Cloudflare D1 → `/stats`. No cookies, no third-party script, salted daily-rotating visitor id. Fully documented in project `CLAUDE.md`. |
| Facebook domain verification | **Exists** | Meta tag present in both document heads (unrelated to Google SEO, but present). |

## 5. Blog/article infrastructure: none exists

No content collection (`src/content/` does not exist), no `/blog` or `/articles` route, no markdown rendering pipeline, no RSS feed, no shared article layout. Issue #85 says this explicitly: *"The site has no `/blog` route today, so this issue also establishes whatever minimal article layout the first post needs."*

Where it would go in this Astro 5 project, if built: a `src/content/blog/` content collection (Astro 5's native content-collections API, `src/content.config.ts`) feeding a `src/pages/blog/[slug].astro` dynamic route, with a new shared article layout likely living in `src/components/home/` (to match the "homepage design system, not plain Tailwind" constraint issue #85 states) or as its own `ArticleDocumentShell` sibling to the new `HomeDocumentShell.astro` PR #91 introduces. No RSS integration (`@astrojs/rss`) is installed. The one article currently planned (`/blog/publish-app-without-mac`, issue #85) is blocked on Alex handing over the already-drafted Hebrew body text.

## 6. Open content-related issues

| Issue | Asks for |
|---|---|
| #17 (epic) | "Site v2": broader repositioning epic (AI agents team, geo-aware HE/EN routing, 4 service landing pages, About page). Largely superseded in practice — `/en` routing was since removed (#78), and only one sub-issue (#7, design research) is tracked under it. Mostly stale against where the site actually went. |
| #79 | Three Hebrew SEO explainer pages in the homepage design system targeting specific search phrases (`/סוכן-ai-לעסק`, `/מערכת-ניהול-לעסק`, `/cto-במיקור-חוץ-לסטארטאפים`), each with its own FAQ, meta, canonical, sitemap entry and nav/footer links. **Blocked on Alex approving the copy.** |
| #82 | The `/app-publishing` landing page — this is what PR #91 implements (see section 2). Still open because the PR hasn't merged. |
| #83 | The `/app-publishing/send` intake form (12 fields, conditional sections, hidden source-tracking field). Depends on #82's branch. Open question for whoever plans it: whether phase 1 accepts file uploads or defers them to WhatsApp. |
| #84 | The `/app-publishing/next` post-payment client-instructions page (what happens after payment, the three App Store Connect actions only the client can do). Depends on #82's branch. Low design weight, not linked from public nav. |
| #85 | The SEO pillar article `/blog/publish-app-without-mac`. **Blocked until Alex hands over the drafted Hebrew article body** — do not write it from scratch. Also establishes the first article layout since none exists. |

## 7. Hebrew/RTL and i18n reality

- The site is **Hebrew-only in practice**. `src/i18n/ui.ts` still defines both `he` and `en` translation dictionaries with `defaultLang = "he"`, but the `/en` route was deleted in PR #78/#80 along with all hreflang plumbing — the `en` dictionary is now dead code with nothing routing to it.
- `Layout.astro` still takes a `lang` prop and sets `dir` dynamically (via `getDirection(lang)`), but every page in the repo today passes `lang={defaultLang}` (Hebrew) — nothing calls it with `en`.
- The homepage (`HomeDocument.astro`) and the new `/app-publishing` page (PR #91) don't use the `Layout.astro`/`i18n` system at all — they're standalone documents hardcoded `<html lang="he" dir="rtl">`, explicitly noted in `app-publishing.astro`'s own comment: *"Hebrew-only: this page never imports `src/i18n/ui.ts`."*
- There is no English article path today. If `/blog/publish-app-without-mac` or any future article needed an English version, there is no mechanism to serve it — no language switcher, no `/en` prefix, no hreflang annotation to tell Google two versions exist. An English article would need its own new route with no i18n scaffolding to lean on.
