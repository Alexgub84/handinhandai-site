# App-publishing page — Hebrew query research

Researched 2 Nov 2026 for `/app-publishing`. Method: Google's autocomplete
suggest endpoint (`suggestqueries.google.com/complete/search`, two levels deep,
`client=firefox` and `client=chrome`, `hl=iw&gl=il`), a WebSearch pass for
related/question-shaped phrasing and for who ranks, and a direct fetch of a
live Google results page (blocked — see below). Follows `docs/seo/content-plan.md`'s
honesty convention: every row is marked **Verified** (real autocomplete
suggestion, or an exact phrase used as a title/H1/H2/FAQ by a live page) or
**Guessed** (no supporting evidence found, flagged as inference). No number
below is a volume estimate — the suggest endpoint ranks by relevance, not by
search count, and no tool used here returns a count.

**Google results pages via curl were blocked.** A direct `curl` to
`google.com/search` (with a normal browser User-Agent, Hebrew query, `hl=iw&gl=il`)
returned a 200 with a JavaScript-only consent/redirect shell (`noscript` meta
refresh to `/httpservice/retry/enablejs`), not real results. Did not fight it
further — this is the "say so plainly and move on" case from the brief.
Related-searches and People-Also-Ask boxes specifically were not reachable by
any method tried. The WebSearch tool was used instead for section 2 and 3
below; it returns real indexed pages and snippets but not a ranked SERP, so
"who ranks #1" positions are not available, only "who shows up at all."

## 1. The headline finding: the Hebrew market is not empty

The offer document (`docs/specs/app-publishing/offer.md`) states "Hebrew
results for every one of these were nearly empty... the only Hebrew page on
the topic is a generic hosting-company guide." That is **contradicted** by
this research. **app2store.co.il** is a live, direct competitor selling the
identical service — publish an AI-built app to Google Play and the App Store,
including the 12-tester requirement, no login sharing — at **2,490 ₪ per
store / 3,990 ₪ for both**, roughly 3 to 4 times Hand In Hand's planned
590–1,290 ₪. It has dedicated guides for Base44, Lovable, Flutter/Expo,
D-U-N-S, Apple rejections, and "how much it really costs," and an FAQ block
that validates several of this plan's own phrasing choices almost word for
word. Secondary Hebrew guide sites also compete on the generic how-to query
(cloudrocket.co.il, mrcoral.co.il, itayost.com, a forum thread on fxp.co.il).
Section 3 has the detail. This changes the competitive picture the offer
document was written against — see the decision this raises in the article's
companion note, not repeated here since this file is research, not a plan.

## 2. Every phrase found

| # | Phrase (Hebrew) | Source | Verified? | Intent | Stage |
|---|---|---|---|---|---|
| 1 | איך להעלות אפליקציה לגוגל פליי | Autocomplete pos.1, seed "איך להעלות אפליקציה" (firefox+chrome) AND pos.1, seed "להעלות אפליקציה לגוגל פליי" (firefox) | Verified | How-to, procedural | Has an app, about to start the upload |
| 2 | איך להעלות אפליקציה לאפסטור / לאפ סטור | Autocomplete pos.2, seed 1 (chrome); verbatim top of its own seed (firefox+chrome) | Verified | Same, iOS side | Same |
| 3 | איך מעלים אפליקציה לגוגל פליי | Autocomplete pos.1, seed "איך להעלות אפליקציה לגוגל פליי" (chrome, level 2) | Verified | Same, alt. verb conjugation (מעלים vs. להעלות) | Same |
| 4 | איך מעלים אפליקציה לאפסטור | Autocomplete pos.2, seed "איך להעלות אפליקציה לאפסטור" (chrome, level 2) | Verified | Same, alt. verb | Same |
| 5 | כמה עולה להעלות אפליקציה לגוגל פליי | Autocomplete pos.1, own seed, verbatim relevance 1250 (firefox+chrome); also pos.2 of seed "להעלות אפליקציה לגוגל פליי" | Verified | Price research | Close to ready, pricing it out |
| 6 | כמה עולה להעלות אפליקציה לאפסטור | Autocomplete pos.2, own seed (firefox+chrome) | Verified | Price research, iOS | Same |
| 7 | העלאת אפליקציה לגוגל פליי | Autocomplete, seed "להעלות אפליקציה לגוגל פליי" pos.4 (chrome); recurs as a suggestion for several other seeds | Verified | Noun form of #1 | Same as #1 |
| 8 | העלאת אפליקציה לאפסטור | Autocomplete pos.1, seed "העלאת אפליקציה לאפ סטור" (chrome) | Verified | Noun form, no-space spelling variant | Same |
| 9 | העלאת אפליקציה לאנדרואיד | Autocomplete pos.1–2 across three seeds (chrome) | Verified | Same intent, "אנדרואיד" instead of "גוגל פליי" | Same |
| 10 | פרסום אפליקציה בגוגל פליי | Autocomplete pos.1 (chrome, promoted above the verbatim query) / pos.2 (firefox), seed "פרסום אפליקציה" | Verified | Publish/launch, broader than just "upload" | Early-to-mid |
| 11 | פרסום אפליקציה | Autocomplete verbatim pos.1, own seed (firefox) | Verified, ambiguous | Could mean marketing/publicizing an app, not the technical store step | Unclear — do not treat as a pure publishing-intent phrase |
| 12 | חשבון מפתח גוגל פליי | Autocomplete pos.1 (chrome) / pos.2 (firefox), seed "חשבון מפתח גוגל"; also verbatim top of its own seed | Verified | Wants to know about the dev account itself before publishing | Early research |
| 13 | חשבון מפתח גוגל | Autocomplete verbatim pos.1, own seed (firefox) | Verified | Same, bare form | Early |
| 14 | פתיחת חשבון מפתח אפל | Autocomplete pos.1, seed "חשבון מפתח אפל" (chrome); verbatim top of its own seed | Verified | Wants to open an Apple dev account | Early — this is literally step 1 of app2store's funnel copy too |
| 15 | חשבון מפתח אפל | Autocomplete verbatim pos.1, own seed (firefox) | Verified | Same, bare form | Early |
| 16 | כמה עולה אפליקציה לעסק | Autocomplete, appears as pos.2–3 in three different "כמה עולה" seeds (chrome) | Verified, **adjacent intent** | Cost of a business app overall (development), not specifically publishing | Crowds the "כמה עולה" cluster with dev-cost searchers |
| 17 | כמה עולה לפתח אפליקציה לעסק | Autocomplete pos.5, seed "כמה עולה להעלות אפליקציה לאפסטור" (chrome) | Verified, adjacent intent | Development cost | Same caveat as #16 |
| 18 | בניית אפליקציה בעצמך | Autocomplete pos.1, seed "בניתי אפליקציה" (chrome); verbatim top of own seed (firefox+chrome) | Verified, **wrong funnel stage** | Wants to build an app himself (no-code) | Pre-build — not our target client, who already has a finished app |
| 19 | בניית אפליקציה בחינם | Autocomplete pos.2, seed "בניתי אפליקציה"; verbatim top of own seed, relevance 1250 | Verified, wrong funnel stage | Same DIY intent | Pre-build |
| 20 | בניית/פיתוח אפליקציה עם AI | Autocomplete pos.1–2, seed "אפליקציה עם AI" (firefox) | Verified, **mismatched to our service** | Wants an AI tool to build the app, not publish it | We publish, we don't build — good fit only for the article's opening framing, not the commercial page itself |
| 21 | 12 טסטרים / טסטרים גוגל פליי | Seeds typed directly — **zero autocomplete completions** either client | Guessed (plausible, unconfirmed) | The exact pain phrase named in the offer doc | Matches Google's own English documentation and the Russian-language 12testers.com, but no Hebrew autocomplete signal independently found it |
| 22 | מה עם 12 הבודקים (או: 12 הטסטרים) של גוגל פליי | FAQ heading, verbatim, on app2store.co.il | Verified (competitor usage) | Same pain, phrased as a question | Validates the H1 claim already on our page, and surfaces "בודקים" as a real synonym for "טסטרים" |
| 23 | אפליקציה בלי מק | Seed typed directly — zero autocomplete completions | Guessed | Matches the article's own planned title | No independent confirmation of query volume |
| 24 | D-U-N-S / D-U-N-S number | Heavy autocomplete completions, but almost entirely English/Japanese/Korean "number lookup" — no Hebrew-specific completions | Verified as a recognized term, **not** as a standalone Hebrew query | Confirms D-U-N-S should live inside a longer Hebrew phrase, not alone | — |
| 25 | חשבון מפתח לחברה בגוגל פליי ובאפל: D-U-N-S | Guide title, verbatim, app2store.co.il | Verified (competitor usage) | Org account + D-U-N-S, combined | Matches our own FAQ answer almost word for word already |
| 26 | העלאת אפליקציה שנבנתה ב AI לגוגל פליי ולאפ סטור | Title/H1, verbatim, app2store.co.il (direct competitor) | Verified | Exactly our offer | Ready to buy |
| 27 | אפל דחתה את האפליקציה | Guide title, app2store.co.il ("מדריך לפי מספר ההנחיה") | Verified (competitor usage) | Just got rejected, wants next steps | Mid-process, already submitted |
| 28 | וייב קודינג: איך מוציאים את האפליקציה לחנות | Guide title, verbatim, app2store.co.il | Verified (competitor usage) | Vibe-coder who doesn't yet know the store step exists | Early |
| 29 | Base44 לגוגל פליי | Guide title, app2store.co.il ("אפליקציית Base44 לגוגל פליי: המדריך המלא 2026") | Verified (competitor usage) | Tool-specific publishing question | Has a finished Base44 app — **our page never mentions Base44** |
| 30 | Lovable לאפ סטור | Guide title, app2store.co.il | Verified (competitor usage) | Tool-specific, iOS side | Our page already names Lovable — good |
| 31 | בניתם אפליקציה בעצמכם? (Flutter, Expo, מנוע) | Nav label, verbatim, app2store.co.il | Verified (competitor usage) | Self-built app, non-AI-builder stack | Matches our own FAQ phrasing ("בניתי בעצמי, ב Flutter, ב Expo") almost verbatim — validates that wording |
| 32 | כמה זה באמת עולה / כמה עולה להעלות אפליקציה לחנות | Nav + guide title, app2store.co.il | Verified (competitor usage) | Price research, with an implied "no hidden fees" skepticism | Matches cluster #5/#6; the "באמת" (really) nuance is worth echoing — see section 3 |
| 33 | הפרויקט ב-Lovable נחסם | Guide title, app2store.co.il | Verified (competitor usage) | **Different pain**: a Lovable project got blocked, data-loss risk | Not covered by our offer at all — flagged as a future idea, not urgent for this page |
| 34 | איך להעלות אפליקציה לגוגל פליי? | Forum thread title, verbatim, fxp.co.il | Verified (independent of Google autocomplete) | Same as #1 | Independent confirmation from real people, not just Google's model |
| 35 | כמה עולה לעלות אפליקציה לחנות? | Forum thread title, fxp.co.il (note: "לעלות" — the real contraction/typo people type for "להעלות") | Verified | Price research | Worth having this spelling variant somewhere in the article's text |
| 36 | Expo העלאה (לחנות) | Seed typed directly — zero relevant completions (only "Expo Tel Aviv" event noise) | Guessed | Matches our FAQ's own Expo EAS mention | No signal found |
| 37 | Flutter אפליקציה לחנות | Autocomplete pos.1 "פיתוח אפליקציות flutter", pos.5 "flutter app to play store" (chrome) — weak, mostly generic Flutter-dev interest | Guessed/weak | General Flutter interest, not store-specific | — |
| 38 | app store דחייה | Seed typed directly — completions were unrelated ("app store חדש/נמחק/נעלם") | Guessed | No signal for this exact combination | People likely phrase rejection differently (see #27, app2store's own working phrase) |
| 39 | play console עברית | Seed typed directly — zero completions | Guessed | No signal | — |
| 40 | אפל דחייה סעיף 4.2.6 / 5.2.1 | — | Guessed | Specific Apple guideline numbers, from the offer doc's own research | Not confirmed as a search phrase by any tool used here |

## 3. Who currently ranks — contradicting the offer doc's "nearly empty" claim

For the five phrases the brief asked about by name:

1. **איך להעלות אפליקציה לגוגל פליי** — NOT empty. fxp.co.il (forum), andromo.com,
   mrcoral.co.il ("העלאת אפליקציה לגוגל פליי (Google Play) | קורל טכנולוגיות"),
   cloudrocket.co.il ("איך פותחים חשבון מפתח בגוגל פליי"), app2store.co.il,
   itayost.com all show up.
2. **כמה עולה להעלות אפליקציה לחנויות** — crowded, but mostly with adjacent-intent
   "how much does it cost to *develop* an app" guides (dogma.co.il,
   cellosite.co.il, webitnow.co.il, techtlv.co.il, two-solutions.com).
   itayost.com and app2store.co.il are the only two found that specifically
   price the *publishing* step rather than development.
3. **12 טסטרים גוגל פליי** — this one specific phrase stays a real gap. Nothing
   found explains the 12-tester rule as its own Hebrew page; the only
   dedicated page on the concept is the Russian-language 12testers.com.
   app2store.co.il covers it only as one FAQ answer, not a standalone page.
4. **חשבון מפתח גוגל פליי / D-U-N-S** — some competition: cloudrocket.co.il,
   mrcoral.co.il, and app2store.co.il's dedicated D-U-N-S guide. Still thinner
   than cluster #1/#2.
5. **פרסום אפליקציה בגוגל פליי** — app2store.co.il, mrcoral.co.il,
   cloudrocket.co.il all compete here too.

**Bottom line:** the offer document's claim that Hebrew results are "nearly
empty" holds only for the single phrase "12 טסטרים" / the exact tester-count
explainer. Every other phrase checked has at least one, usually several,
Hebrew competitors already writing about it — including one, app2store.co.il,
selling the identical service at several times the planned price.

## 4. What to put on the page — exact strings to copy

- **Title tag:** keep the current one as-is — it already covers טסטרים, מק,
  גוגל פליי, אפ סטור. No change needed.
- **Meta description:** already uses the verb "מעלים" (#3/#4's conjugation).
  No change needed.
- **New FAQ question** (targets #5/#6, verbatim relevance 1250, the strongest
  price-research phrase found): add exactly
  `כמה עולה להעלות אפליקציה לגוגל פליי ולאפ סטור?`
  as a new FAQ entry, answered with the numbers already in the pricing table.
  This phrase currently has no question-shaped match anywhere on the page —
  the pricing lives only in a table under the H2 "מחירים."
- **New FAQ question** (targets #22, validated by a live competitor's own FAQ
  heading, and surfaces the "בודקים" synonym the page currently never uses):
  add exactly
  `מה עם 12 הבודקים (הטסטרים) של גוגל פליי?`
  Answer can reuse the existing H1/hero copy almost verbatim.
- **Article H2** (targets #28, app2store.co.il's own guide title, adapted):
  `וייב קודינג: מה עושים כשהאפליקציה מוכנה אבל אין איך להעלות אותה לחנות`
- **Article H2 or sub-section** (targets #29, a confirmed gap — Base44 is
  never named anywhere on the live page even though it is one of the
  competitor's dedicated guide topics):
  `Base44 וגוגל פליי: מה צריך לפני ההעלאה`
- **Article H2** (targets #27, matches our own existing process-step copy,
  just needs a question-shaped heading to match how people search):
  `אפל דחתה את האפליקציה — מה עכשיו?`
- **Article intro line** (targets #20, to catch the "I built it with AI" crowd
  at the article's true entry point, while keeping the mismatch warning from
  section 2 in mind — this line should immediately redirect from "build" to
  "publish" intent so a developer-tool searcher doesn't bounce):
  `בניתם את האפליקציה עם AI וזה עבד. השלב הבא — גוגל פליי ואפ סטור — הוא שלב אחר לגמרי.`

## 5. What the page currently misses

Checked against the live page at
`https://4e2ae022.handinhandai-site.pages.dev/app-publishing` (fetched directly,
200 OK):

- **No "Base44" anywhere.** The page names six tools (Claude, Cursor, Lovable,
  Replit, Expo, Flutter) but not Base44, Bolt, or v0 — all three are topics a
  live competitor has dedicated content for.
- **No FAQ phrased as "כמה עולה" verbatim.** Pricing exists only as a table
  under the H2 "מחירים," not as a question matching the single
  highest-relevance autocomplete phrase found (#5/#6).
- **No mention of "וייב קודינג" (vibe coding)** as a term, despite it being
  both the target client's own self-description and a competitor's dedicated
  guide topic.
- **No use of "בודקים"** as a synonym for "טסטרים" — the page commits fully to
  one word, while a direct competitor's own FAQ uses the other.
- **D-U-N-S appears only nested inside one FAQ answer**, never as its own
  heading or query-matching unit (low priority — autocomplete shows D-U-N-S
  queries are mostly non-Hebrew anyway).

## 6. What cannot be known from here

- **Real search volume**, for any phrase in this file. The suggest endpoint
  ranks by relevance, not count; WebSearch returns indexed pages, not a
  volume number. Needs Alex's own Google Keyword Planner or Search Console —
  Search Console specifically would show zero history for this page since it
  is new, but would start accumulating real impression/click data per query
  once it's indexed.
- **Actual ranking positions** on a real Israel-located Google SERP. The
  direct curl attempt was blocked by Google's JS/consent wall (confirmed,
  section header above); WebSearch confirms *presence*, not *position*. Needs
  Alex's own browser (logged in or not, Israel IP) or a rank-tracking tool.
- **Facebook group phrasing and volume** — the offer document's own SEO plan
  was built on "what people actually type in the Facebook groups." That
  signal is not reachable from here at all; it needs Alex's logged-in
  Facebook access to the specific groups named in the offer doc.
- **Whether app2store.co.il's phrasing choices actually convert**, or are
  just their own best guess the same way ours would be. Unknowable without
  their analytics — their existence and pricing are facts, their keyword
  strategy's success is not.
