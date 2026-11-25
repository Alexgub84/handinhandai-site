# Work Log — handinhandai-site

Chronological log of completed work. Most recent first.

## 2026-11-24/25 — Findability review, growth ruling, and four guides published

Session run by a manager session (no code written by the manager; architect drafted
orders, writer agents drafted guides, an independent agent fact-checked the legal one).
Alex's standing instruction for the session, 2026-11-24: *"I give you permission to
draft what you need. Check with Fable and the council based on the data. And you can
implement this and publish, just give me a summary of what you did."* No issue was
created for any of this work except #85, which already existed.

### Step 1 — Read what the site's own numbers say
Ran the `site-usage-review` skill. First pass covered a single day and misled: it showed
the WhatsApp Cloud API guide abandoned at 4% after 5s. Re-run over 1 day / 7 days /
30 days reversed that: over 30 days, 542 visitors, and that guide holds readers ~467s
(longest of any guide) with 40% reaching its download card, against the store guide's
~349s and 27%. **Lesson recorded: never report a shape off one day.** Report:
`local/usage/2026-11-24.md`. Reader-facing page: `local/review/usage-2026-11-24.html`.

### Step 2 — Read what Google says
Ran `site-findability` in Alex's Brave. Search Console: 5 clicks / 169 impressions in
3 months; none of the target Hebrew phrases appears in the query report. The
store-publishing guide ranks ~6.7 and is cited in Google's AI answer; its twin guide
carrying the *identical* skill gets a fifth of the impressions and no citation. Found a
live bug: `/contact/` with a trailing slash 404'd. Reports:
`docs/seo/2026-11-24-findability-audit.md`,
`docs/seo/2026-11-24-console-capabilities-and-growth-evidence.md`.
Skill updated with a new chapter on what Search Console can analyse, plus the rule that
a signed-in browser's ranking read must be corroborated by Console impressions.

### Step 3 — Fixed the dead contact link (PR #226, merged)
`public/_redirects` gained trailing-slash entries for `/contact/` and `/en/contact/`.

### Step 4 — Ruled on the growth question
Evidence says the attached skill is not what makes a page rank (twin-guide pair above),
so **publishing more skills is not the growth lever**. Council run 1
(`docs/council/2026-11-25-seo-strategy-fork.md`): 3 of 4 seats put distribution into
channels ahead of search, all 4 rejected building skills to chase developer reach.

### Step 5 — Ruled against mirroring six third-party skills
Alex sent six collectivebrain.de skills. Research
(`docs/seo/2026-11-24-collectivebrain-skills-research.md`): all six are MIT or Apache,
so mirroring is *legal*; all six install in one command and two are Anthropic's own,
already present in every paid Claude account. Ruling: **not a legal problem, an audience
problem** — five of six bring developers who take a free tool and leave. Only the
security subject survives, reframed for a business owner.

### Step 6 — Chose the 10-guide programme
Demand map read off real Hebrew Google, 24–25 Nov
(`docs/seo/2026-11-25-vibe-coding-demand-map.md`): of 21 subjects, exactly 1 has an open
field. Council run 2 (`docs/council/2026-11-25-vibe-coding-10-guides.md`), unanimous:
pick subjects by what the Facebook groups argue about, Google openness as tiebreaker
only; cap new skills at 2–3 of 10 on a "runnable procedure, not a decision" test; no
pitch in the group post; measure by hand-logged group engagement, not impressions.
First 3 committed, remaining 7 deliberately held open pending the room's reaction.
Programme record: `docs/seo/2026-11-25-vibe-coding-programme.md`.

### Step 7 — Published four guides
Each was looked at by the manager at 390px and 1440px before publishing; a passing build
was never accepted as done.

- **#227 — `do-you-need-a-mac`** (closes #85). The one open Hebrew query, which a
  competitor had just moved into. The writer's own anonymity gate caught a client-identifying
  inference and fixed it. Alex's product disclosure (a release date and two build errors)
  was genericised pending his word; where it is withheld is recorded in the fact-check.
- **#228 — `app-got-tangled`** (group guide 1). Signs table converted to a list.
- **#229 — `sell-an-ai-built-app`** (group guide 2). The one open-field subject. Store
  commissions and the עוסק פטור ceiling verified and dated inline; VAT rate, lawyer and
  provider pricing deliberately left unstated.
- **#230 — `terms-of-use-privacy-cost`** (group guide 3). Kept deliberately even though
  its honest answer sends the reader to a lawyer. An independent agent verified every
  legal, store-policy, money and date claim against primary sources (Privacy Protection
  Authority, EUR-Lex, Apple, Google): **all hold**. Two facts remain open on the page by
  design: Israeli lawyer pricing (none published anywhere) and whether a subscription is
  "מידע כהגדרתו בחוק המחשבים" for cancellation.

### Step 8 — Recorded the session (PR #231, merged)
Six dated research and council records committed verbatim under `docs/council/` and
`docs/seo/`.

### Standing limitation found, needs a design-system fix
**A comparison table is unreadable at 390px in this design system.** Below 768px it stacks
into cards with a narrow label column, so any table whose values are sentences collapses
one word per line. It cost two guides a rebuild. Until the design system fixes it
properly: write a list with short bold handles instead, and **no page may hand-patch it
with CSS** — not in `overrides.css`, not in `article.css`, not inline.

### Also learned
- `npx astro check` does **not** type-check `functions/` (0 matches in its output);
  a regression there must be caught with `tsc` directly.
- `/stats` could not render a guide with no download asset; `functions/stats.ts` now
  guards on an optional asset, omits the hand-off row for a skill-less guide, and labels
  its WhatsApp click as a hire route rather than a GitHub click.

## 2026-05-29 — Russian + Ukrainian i18n + responsive polish (#23)

- Added complete Russian and Ukrainian translation blocks to `src/i18n/ui.ts` (homepage, both fitness pages, and `[lang]` compatibility keys). Four languages now ship: Hebrew (default, RTL), English, Russian, Ukrainian.
- `getRouteFromUrl` now strips any non-default language prefix (`en`/`ru`/`uk`) so the language switcher keeps the current route across all four languages.
- `[lang]/index.astro` rewritten to render the same `SimpleLayout` + homepage section components as the root `/` (was a legacy `CinematicLayout` + `ScrollHero`).
- LanguageSwitcher shows short language codes on mobile, full native labels from `sm:` up — prevents header overflow with four languages.
- Removed the broken translation helper scripts.
- Verified `npm run build` (astro check + build) generates all `/ru/` and `/uk/` routes; Playwright suite green.

## 2026-06-15 — Recreated homepage from handinhand-production design

Replaced the Tailwind homepage at `/` with a static Astro port of the `handinhand-production` design: Hebrew-only, Discovery font, custom CSS in `src/styles/handinhand/`, 14 section components in `src/components/handinhand/`. Dropped GSAP/Lenis/React — animations re-expressed CSS-first (keyframes, scroll-driven `animation-timeline`, SVG SMIL) with a single small vanilla-JS layer for reveals, nav, ChatDemo and DiagChat. Added `ProfessionalService` JSON-LD + full static HTML for SEO/AI-findability. WhatsApp links centralised in `site-contact.ts`. Fitness/contact and localized homepages untouched. New Playwright smoke test `tests/home.spec.ts`.
