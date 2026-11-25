# Findability audit — 2026-11-24

Read-only, per the `site-findability` skill. Browser: Alex's own Brave, Claude
extension, already signed into Search Console as the `handinhandai.com`
business account (no sign-in prompt appeared). Technical checks via `curl`.
Google reads via `google.com` with `hl=he&gl=il`, not logged out — same
discipline the skill's own prior research used, with the same caveat that
applies to it (see "How much to trust the live reads" below).

## 1. Technical — sitemap, robots, indexing contradictions

`reference/audit-site.sh handinhandai.com`: robots.txt allows all, points at
`sitemap-index.xml`. 14 URLs listed, **all 14 return 200 with no noindex** —
zero sitemap/noindex contradictions. The issue #160 bug (sitemap listing a
noindexed `/articles/`) is fully resolved; `/articles/` is live and indexable
now that 8 articles are published.

Search Console confirms: sitemap status **Success**, 14 discovered pages,
last read 16 Nov 2026.

## 2. Indexing — Search Console "Page indexing"

**16 indexed, 38 not indexed**, sorted into Google's own 6 reasons:

| Reason | Pages | Verdict |
|---|---|---|
| Page with redirect | 20 | Expected — retired/`www`/`en` variants, bucket 2 |
| Alternative page, proper canonical | 8 | Expected — duplicate canonicalisation, bucket 2 |
| Not found (404) | 7 | **Mixed — see below, one real bug found** |
| Blocked by robots.txt | 1 | Expected, already triaged in `gsc-triage.md` (a stale `/wa/` shortlink rule) |
| Duplicate, Google chose different canonical | 1 | Expected, bucket 2 |
| Crawled, currently not indexed | 1 | `www.handinhandai.com/en/privacy-sasha` — stale, last crawled 17 Jun 2026, predates the `/en` removal. Bucket 3. |
| Excluded by 'noindex' tag | **0** | The #160 bug stays fixed. |

**The 7 "Not found (404)" examples, checked live:**

| URL Google has on record | Live status today | Verdict |
|---|---|---|
| `/articles/install-skill/` | 404 (real page is `/install-skill/`, no trailing-slash issue) | No internal link produces this (`grep`ped the repo — nothing references `articles/install-skill`). Likely an external/AI-guessed URL. Not fixable from our side. |
| `www.handinhandai.com/api/e` | — | The analytics collector endpoint on the old `www` host. Scanner/bot noise, not a page. |
| `handinhandai.com/ru/` | 404 live | Never real content. Expected. |
| `www.handinhandai.com/uk/` | 404 live | Never real content. Expected. |
| `handinhandai.com/contact/` (trailing slash) | **404 live, confirmed by curl today** | **Real, fixable bug — see below.** |
| `en/terms/`, `www.../en/privacy-sasha/` | 301 to `/` live | Stale crawl of the retired `/en` route, already redirected. Bucket 3. |

**Bug found: `/contact/` (with trailing slash) still 404s.** `public/_redirects`
has `/contact → /#contact` and `/en/contact → /#contact`, but — unlike every
other retired path in that file (`/fitness-studio` and `/fitness-studio/` are
both listed, same for `/examples`) — **no `/contact/` line exists.** `curl`
confirms live: `/contact` redirects 301 to `/#contact`; `/contact/` 404s.
Google's crawler is still hitting the slash variant (last crawled 29 Oct
2026) — this is the same bug class issue #158 fixed, with the trailing-slash
sibling missed. One-line fix: add `/contact/ /#contact 301` next to the
existing line.

## 3. Live Google reads, in Hebrew, today

Each published article's `primaryQuery` from its own frontmatter, read live.
"AI Overview" = Google's AI summary at the top of the page; "cited" means the
page or a named competitor appears in its citation carousel.

| Article | Primary query | handinhandai.com on page 1? | AI Overview cites us? | Verdict |
|---|---|---|---|---|
| `freelancer-or-agency` | פרילנסר או חברת פיתוח | **Yes — organic #2**, right after NPCoding | **Yes**, named in the citation carousel | Winning today, but see caveat below — GSC shows only 1 lifetime impression for this exact page, a real mismatch worth re-checking in a few days |
| `publish-app-to-stores` | איך מעלים אפליקציה לחנויות | **Yes — organic #2**, right after Base44's own docs | **Yes**, named in the citation carousel | Winning, and independently confirmed by Search Console's own "Generative AI features" report (below) — this one is solid, not a one-off |
| `app-or-website` | אפליקציה או אתר | No | No (cites Globalbit, NPCoding, דניאל זריהן) | Not ranking. Matches the 2026-11-04 brief's "CONTESTED" call — still true 3 weeks later |
| `off-the-ai-builder` | לצאת מלאבבל | No (query still auto-corrects to Jewish mourning customs; forced-literal page is thin, mostly Facebook) | No | Still an unusable primary query, exactly as flagged 2026-11-04. Not fixed, not written around |
| `get-verified-for-whatsapp-cloud-api` | אימות עסק בפייסבוק | No | No (cites Facebook's own help pages + פאנר) | Crowded field of Hebrew agency guides (STRA, Mumble, Kala CRM, Pulseem...). Not ranking |
| `custom-vs-off-the-shelf-construction` | מערכת ניהול לחברת בנייה | No | No (cites real competing products: רמדור, PROBUILD, זיו, Conqum, קיפר) | Expected and correct per the council ruling — this article was never meant to win the product-comparison query, only the decision-framework angle |
| `site-app-without-signal` | תוכנה לניהול אתר בנייה | No | No (same competitor set as above) | Same as above — expected |
| `web-app-to-store-shell` | להפוך אתר לאפליקציה | No | No (cites WebToApp, AppFly.AI, Andromo, דניאל זריהן — all selling the wrapper as a product) | Published 11 days ago, last verified 6 days ago — too young to expect ranking yet, but worth re-checking in a few weeks |

**Named territory with no article at all — "האם צריך מק לאפליקציה" (do you
need a Mac):** confirmed **still OPEN** today, same as the 2026-11-04 brief
called it ("the cleanest opening of all ten queries"). Google's AI Overview
answers it correctly and cites only Reddit; the one page one real hit
(`devoria.fr`, "פרסום אפליקציית iOS בלי Mac") is itself a competitor that
**did not exist on 2026-11-04** — it was published 2026-10-09 and has since
shown up on this exact query. A live Facebook post in Vibe Coding - Israel
(3 weeks old) is still asking this unanswered. Issue #85 (the already-drafted
Hebrew body for this exact article) remains unpublished three weeks after it
was named the easiest win of the whole programme, and the open field is
visibly narrowing while it waits.

## 4. Search Console — Performance (last 3 months, all queries/pages)

Real measured numbers, not a live snapshot: **5 total clicks, 169 total
impressions**, average position 6.7.

Top queries by impressions: `handsai` (brand misspelling), `koma` (the
`koma.handinhandai.com` subdomain), `כו/ץבםצ` (garbled keyboard-layout text),
plus five more with 1 impression each. **None of the real target Hebrew
informational queries above shows up in Search Console's top-query list at
all** — not `אפליקציה או אתר`, not `פרילנסר או חברת פיתוח`, not `איך מעלים
אפליקציה לחנויות`.

Top pages by impressions: `publish-app-to-stores` (47), homepage (37),
`about` (12), the `koma` subdomain (23), `terms` (17), `privacy-sasha` (15),
`app-or-website` (14), `install-skill` (12), `off-the-ai-builder` (8),
`web-app-to-store-shell` (8), `get-verified-for-whatsapp-cloud-api` (5),
`site-app-without-signal` (2), `freelancer-or-agency` (1),
`custom-vs-off-the-shelf-construction` (1), plus a stale `/en/fitness-studio`
impression (1, expected crawl remnant).

## 5. Search Console — Generative AI features report (Beta)

This is Google's own measurement of real AI Overview/AI Mode impressions —
not a single live read. **21 total impressions in the last 3 months**,
trending upward in the most recent two weeks. Broken down by page:

- `publish-app-to-stores` — **15 impressions**
- homepage — 4
- `terms` — 2
- `install-skill` — 1

**This independently confirms the live read above for `publish-app-to-stores`
— the site really is being surfaced inside Google's AI answers for the
store-publishing query, repeatedly, not just in the one browser session read
today.** `freelancer-or-agency` does **not** appear in this report at all
(0 recorded AI-feature impressions) despite today's live read showing it
organic #2 and AI-cited — see the caveat below for why that one claim needs
a few more days before it's treated as solid.

## 6. How much to trust the live reads

Two independent cautions, both already documented in this skill and both
confirmed again today:

1. **Personalisation.** This session read Google from Alex's own signed-in
   Brave profile — the same profile used to build and research this whole
   content programme. A search history full of these exact queries and this
   exact domain is a plausible, real bias toward seeing handinhandai.com
   rank higher than a stranger would. This is the standard practice the
   skill's own prior research used too (same browser, same account), so it
   is not a new problem — but it is the most likely explanation for why
   `freelancer-or-agency` showed up organic #2 and AI-cited live today while
   Search Console's own measurement (which reflects real searchers, not this
   session) shows that exact page at 1 lifetime impression, 0 recorded AI
   impressions. `publish-app-to-stores`' live result does not carry this
   doubt — it is independently corroborated by Search Console's own
   Generative AI report (§5).
2. **Instability.** The keyword-briefs research already documented that
   `איך מעלים אפליקציה לחנויות`'s page one is not reproducible between
   independent sessions on the same day. Today's single read is one more
   data point, not a settled ranking — consistent with, not contradicting,
   that finding.

## 7. Verdict and the single biggest cause

**Technical plumbing is not the blocker.** Sitemap is clean, all 8 published
articles are indexed, the #160 noindex bug stays fixed, and one small new
bug (`/contact/` 404s) is cosmetic and already has a one-line fix named above.

**The real cause is the one the skill's own §11 names: there is still very
little published, and the easiest, most open query in the whole programme —
"do you need a Mac" — has sat unwritten for three weeks while a competitor
moved into exactly that gap.** Of the ten target queries, only two
(`publish-app-to-stores`, and `freelancer-or-agency` with the caveat above)
show any real evidence of being found; the other six published or
construction-cluster articles are not ranking, mostly against crowded,
well-established Hebrew competitor fields that were already crowded on
2026-11-04 and still are today. Total Search Console traffic over three
months is 5 clicks. The site is doing everything the architecture asked of
it — it is just early, and the one easy, uncontested win identified three
weeks ago is still not live.

## Proposed issues (not created — Alex's yes required first)

- Add `/contact/ /#contact 301` to `public/_redirects` (the trailing-slash
  sibling of the existing `/contact` rule is missing; Google's crawler is
  still hitting the 404 as of 29 Oct 2026).
- Publish issue #85 (`do-you-need-a-mac` / `האם צריך מק לאפליקציה`) — still
  the single most open query in the programme, and a real competitor
  (devoria.fr) has entered the space since the 2026-11-04 brief was written.
