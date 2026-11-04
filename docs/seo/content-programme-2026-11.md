# Content programme, November 2026 — ten articles for discoverability

Ruling source: `docs/council/2026-11-04-content-architecture-discoverability.md`
(§ Synthesis). Demand evidence: `docs/seo/demand-research-2026-11.md`. Source
material for every article: `docs/seo/capability-ledger.md`. Site state:
`docs/seo/site-inventory-2026-11.md`.

## Settled architecture (do not re-decide)

- Flat canonical URLs: `/articles/<latin-slug>`. One Astro content collection, one
  index at `/articles` labelled מדריכים, grouped under static service headings.
  No tag routes, no nesting under service paths, no second URL per article.
  Slugs are frozen at birth.
- Hebrew only. No hreflang, no `/en`, no English article variants.
- No construction or building-management landing page. Industry expertise ships as
  articles under the custom-software pillar.
- Build: content collection, one article layout, author page with `Person` schema
  wired to the existing `ProfessionalService` node, `Article` schema with
  `dateModified` from `lastVerified`, articles in the sitemap.
- Do not build: `llms.txt`, RSS, `HowTo` schema, `FAQPage` schema on new articles,
  a glossary page, tag archives.

## Page template (every article)

1. H1 = the reader's question, in Hebrew.
2. Answer box on the first screen: one liftable sentence, then ~50 words with the
   hard numbers in it. This is what an assistant quotes.
3. Visible byline linking to the author page, published date, "נבדק לאחרונה" date.
4. Who this is for / not for.
5. The procedure or decision framework, with the exact screen, form and field names
   as they appear in the console (English strings kept verbatim beside the Hebrew).
6. A comparison or cost table, placed in the top half of the page.
7. One short first-hand note, anonymised where the client requires it.
8. One CTA to the pillar page, immediately after the procedure or table.
9. Two hand-picked sibling articles. No automated related-posts block.

Length roughly 1,200-1,800 Hebrew words so the procedure still sits in the first
half. No FAQ block unless it kills a real objection a buyer actually raises.

## Fact discipline (the programme's main risk)

The council's peer round caught two confident platform errors and one
self-contradiction among the seats' own article plans. Treat every fee, screen
name, requirement and timeline as unverified until it is traced to the first-hand
operational record in `docs/seo/capability-ledger.md` or re-checked live in the
console. No article ships with a platform fact a language model supplied. A
plausible generic summary is worse than no article: it is the one failure mode
architecture cannot fix.

## Required step before drafting: the keyword brief (issue #108)

No article is drafted from a model's guess about what people search. Before
drafting, read the brief off the real Google results page yourself, in a browser,
in Hebrew, and record it:

- The primary query exactly as people type it.
- 3-8 secondary queries.
- The questions to answer verbatim in Hebrew, taken from Google's "אנשים שאלו גם"
  and from autocomplete.
- The entities the page must name to be credible (console names, form names,
  guideline numbers, fee names).
- Who currently ranks, and what would have to be better than what they have.
- A verdict: OPEN, CONTESTED, or CROWDED.

This has to come from the live page, not from memory and not from a keyword
tool's guess: autocomplete, People Also Ask, related searches, who actually
ranks, whether an AI overview appears and whom it cites — all read in the
browser, in Hebrew. **Record the date it was read.**

Three of these fields are checkable later because they also live in the
article's own frontmatter — `primaryQuery`, `secondaryQueries` (2+),
`answersQuestions` — required on any non-draft article and enforced by
`scripts/check-articles.mjs`. They are audit material only: never rendered on
the page, never emitted as a meta keywords tag. The rest of the brief (entities,
competitor read, verdict, the date it was read) is recorded on the article's
GitHub issue, not in frontmatter.

## The ten articles

Revised 2026-11-04 after reading 52,400-member Hebrew group "Vibe Coding - Israel"
(`docs/seo/fb-group-demand-2026-11.md`). That group is not a developers' guild: it is
solo and hobbyist builders shipping apps made with Lovable, Base44 and Claude Code, and
their top complaints are this desk's service list almost line for line. Seven posts
looking for a freelancer or a technical partner, five stuck on store review, four hitting
the ceiling of the AI builder they started in, two asking who writes their terms of use.
Every article below now has observed demand behind it, not just keyword volume.

Waves are release order. Wave 1 targets open queries with no Hebrew incumbent (fastest to
index on a new domain); wave 2 is the operational moat; wave 3 is two probes.

### Wave 1 — buyer decisions (open queries, all three observed in the group)

| # | Slug | Hebrew H1 (working) | Target query | Pillar |
|---|---|---|---|---|
| 1 | `app-or-website` | אפליקציה או אתר - מה העסק שלך באמת צריך | `אפליקציה או אתר` | custom software |
| 2 | `freelancer-or-agency` | פרילנסר מול חברת פיתוח: מה מקבלים, מה מאבדים | `פרילנסר מול חברה` | custom software |
| 3 | `off-the-ai-builder` | בניתי בלאבבל ויש לי לקוחות: מתי ואיך יוצאים משם | `לצאת מלאבבל` | custom software |

What only this desk can say:
1. The maintenance and store-review cost a website never pays, and the specific cases
   where a web app inside a store shell is the honest answer (shipping product changes
   with no store review).
2. Code ownership, who holds the developer and hosting accounts, what a handover actually
   contains, and what happens when one person is unavailable. Top theme in the group.
3. The real exit points from a no-code AI builder: where the data lives, what breaks under
   real customers, what has to be rebuilt and what can be carried across. Four separate
   people in the group are standing exactly there, with paying customers.

### Wave 2 — app publishing, the operational moat

| # | Slug | Hebrew H1 (working) | Target query | Pillar |
|---|---|---|---|---|
| 4 | `do-you-need-a-mac` | האם צריך מק כדי להעלות אפליקציה לחנויות | `האם צריך מק לאפליקציה` | app publishing |
| 5 | `play-testers-requirement` | דרישת הבודקים של גוגל פליי: איך עוברים אותה בלי לחפש אנשים | `בודקים גוגל פליי` | app publishing |
| 6 | `apple-rejection-copycat` | אפל דחתה את האפליקציה כהעתק: מה הכוונה ומה עושים | `דחיית אפליקציה אפל` | app publishing |
| 7 | `who-owns-the-developer-account` | חשבון המפתח צריך להיות שלך, לא של המפתח | `חשבון מפתח גוגל פליי` | app publishing |
| 8 | `app-publishing-costs` | כמה באמת עולה להעלות אפליקציה לחנויות (2026) | `עלות העלאת אפליקציה` | app publishing |

Notes:
- #4 is the already-filed issue #85, whose Hebrew body is drafted. Asked twice in the
  group in the window read.
- #5 answers a direct, frustrated question from the group: finding testers for every
  single app. Verify the current requirement and its exact wording in the console before
  drafting; do not restate a number from memory, and do not repeat the figure a council
  seat volunteered, which peer review flagged as wrong.
- #6 covers the rejection reason that hits AI-built apps hardest (an app judged a copy or
  too thin), plus the Hebrew listing mistakes that cause a second rejection. Observed in
  the group as a live, unanswered question.
- #7 carries the individual-versus-company question, the Israeli registration angle (osek
  patur), Apple's EU trader verification as a named section, and the two irreversible
  traps: a package name that can never be reused, and an app that ends up on the wrong
  account.
- #8 lists platform charges, recurring charges and the service fee separately, with
  currency and a verification date. No competitor naming, no price smear.

### Wave 3 — two probes

| # | Slug | Hebrew H1 (working) | Target query | Pillar |
|---|---|---|---|---|
| 9 | `whatsapp-ai-cloud-api` | עוזר AI בוואטסאפ: מה צריך, מה זה עולה, ואיך לא מאבדים את המספר | `סוכן AI לעסק` | WhatsApp AI |
| 10 | `construction-defect-tracking` | מה חייבת לדעת לעשות אפליקציה לליקויי בנייה בשטח | `אפליקציה לפיקוח בניה` | custom software |

- #9: the official Cloud API versus the WhatsApp Business app, what business verification
  actually requires and what to do when it has been sitting in review for a month (asked
  in the group, and the one question here answerable from a finished runbook), per-product
  number isolation, and handing a conversation to a human. The site's rule that an AI
  answers WhatsApp first applies to this article's copy too.
- #10: anonymised absolutely. No product name, client name, real domain, store link or
  branded screenshot - not in the body, slug, image filename, alt text, OG image or
  JSON-LD. Offline-first field work, photo evidence, status history and audit trail are
  the substance. Illustrative unbranded diagrams only, labelled as such. No group demand
  observed, so this stays a probe on the strength of the delivery record alone.
- Zero articles on building management (ועד בית): eight live competitors, a new domain, and
  the product is not sold as public SaaS. It stays as delivery proof on a service page.

### Reserve, in priority order

Promoted only if a wave-1 or wave-2 slot proves already well covered by the Hebrew
incumbent:
1. Terms of use and a privacy policy before publishing: what the stores actually demand,
   and what it costs to get them (two askers in the group, both assuming a lawyer).
2. Wiring an Israeli app to local invoicing and payment providers (two askers).

### Dropped from the first draft of this plan

- `spec-before-quotes` (how to write a spec before asking for quotes): no observed demand;
  its substance folds into #2.
- `apple-dsa-trader-israel` as a standalone: becomes a named section of #7. Real blocker,
  but nobody searches for it until they are already stuck inside the form.
- `hebrew-rtl-store-rejections` as a standalone: folds into #6, which has observed demand.

## Review gates

- After wave 1: Search Console impressions and indexing per article, plus first-party
  CTA events. Sparse data on a new domain is not a verdict; absence of indexing is.
- After wave 2: if the publishing cluster shows impressions, promote the strongest
  procedure into the `/app-publishing` page's own supporting block.
- Only after wave 3 shows construction impressions does a construction vertical page
  become a question worth asking.
