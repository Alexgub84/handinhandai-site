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

## Round 2: Facebook demand, Trends, and People-also-ask

Researched 2 Nov 2026, via Claude-in-Chrome driving Alex's own logged-in Chrome.
Read-only throughout: no post, comment, like, join, or message was sent on any
site. Facebook was searched with Facebook's own in-group search
(`facebook.com/groups/<id>/search/?q=<term>`), which free-texts the term rather
than matching an exact phrase, so some hits below are the engine's fuzzy match,
not a literal occurrence — noted per row. Timestamps were read off rendered
screenshots, not the page's text extraction, because Facebook obfuscates
timestamps with invisible characters when the page is read as text (visible
fine on screen, scrambled in `get_page_text`). Facebook limits each in-group
search to what its own search surfaces, not a full-text index, so a search
returning few results does not prove a term never appeared, only that it
doesn't surface under that engine — flagged as "no data found" rather than
"doesn't exist."

### 1. Facebook group demand

**Candidate groups** (found by scanning Alex's full joined-groups list,
929 groups, filtered by name for developer / startup / no-code / vibe-coding /
AI-tools / entrepreneur / freelancer relevance, before any searching began):

- קלוד קוד ישראל - וייב קודינג (Claude Code Israel – Vibe Coding)
- קלוד קוד - הקבוצה הרשמית | Claude Code Israel
- Claude Code IL - קלוד קוד ישראל
- פיתוח אפליקציות (App Development)
- יזמים | סטארטאפיסטים - הקבוצה הרשמית
- מפתחי WEB ישראל
- דרושים בתחום Ai בינה מלאכותית
- אוטומציה - עסקים אוטונומיים
- AI Community Hub, Ai Israel - בינה מלאכותית, בינטק, בינה להשכיר, מדברים
  בינה (general AI groups — candidate list only, not searched, see below)

Of these, five were actually searched (time budget did not allow all).
**Vibe Coding - Israel** and **מפתחי משחקים | Israeli Game Developers** turned
up as relevant groups too, but only via a Google result pointing at a thread
inside them (job 3) — not searched directly, so not in the table below.
`קהילת העצמאים - פרסום חופשי` and `הלפטופיסטים` (freelancers/nomads) were
promising names but Alex's join requests are still pending, so their content
isn't visible to this account.

| Group | Term searched | Threads seen | Dates (most recent first) | Quoted questions (Hebrew, verbatim) |
|---|---|---|---|---|
| קלוד קוד ישראל - וייב קודינג | טסטרים | 5, "End of results" | Oct 9, Oct 9, Aug 25, plus 2 more (Noam Nissan ×2) whose dates I did not capture | בנימין ויסמן: "עכשיו אם יש פה אנשי אנדרואיד שמעוניינים באפליקציה אני צריך 12 טסטרים לפני שחרור כי אלה דרישות גוגל פליי אז מוזמנים לשלוח לי את המייל שלכם ואשלח לכם קישור להורדה!" · Shay Kempler: "אשמח להמלצות איך יוצאים משלב בטא לאפליקציה באנדרואיד, אני ממש מנסה לקדם את זה אבל אני לא משיג מספיק טראפיק, איך השגתם טסטרים?" · Bar Bur: "מחפש 12 מתנדבים עם אנדרואיד... גוגל דורשת שלפני שאפליקציה של מפתח עצמאי מתפרסמת, 12 אנשים יבדקו אותה במשך 14 יום. בלי זה היא פשוט לא עולה... להישאר מחובר לבדיקה שבועיים (לא למחוק באמצע — זה מאפס לי את הספירה)" |
| קלוד קוד ישראל - וייב קודינג | גוגל פליי | 4 relevant (plus 1 unrelated fuzzy match) | Oct 9, Sep 10, Aug 23 | שי עופר (Aug 23): "מי שמפתח אפליקציות לבד יודע — כדי לפרסם אפליקציה חדשה בגוגל פליי, גוגל דורשת 12 בודקים אמיתיים שמתקינים ופותחים את האפליקציה במשך 14 יום רצופים... קשה למצוא כל פעם 12 אנשים חדשים — במיוחד אם אין לך קהילה של מפתחים סביבך" (started a mutual-tester-help sub-effort off the back of this) · Aviv Ben Haim (Sep 10): "היי חברים, צריך 12 אנדרואידים לשבועיים... מחפש 12 בודקי אנדרואיד" |
| קלוד קוד ישראל - וייב קודינג | חשבון מפתח / אפ סטור / App Store / בלי מק / D-U-N-S / Xcode / Play Console / דחייה מאפל | — | — | **No data found** for any of these as their own topic in this group — Facebook's fuzzy search returned only unrelated posts that happened to share a word. iOS/Apple-side pain is not showing up here the way the Android/testers pain does. |
| קלוד קוד - הקבוצה הרשמית \| Claude Code Israel | טסטרים | 2 (1 unrelated) | not captured | Alex Guberman's own post (not organic demand, flagged separately below) |
| פיתוח אפליקציות | טסטרים | 4, "End of results" | Aug 11, Jul 6, Apr 21, Jan 12 | Liran Goldbaum (Aug 11): "מחפש טסטרים בתשלום שינסו אפליקציה חדשה שבנינו - כלי לניהול, הפקה ותכנון חתונות. מי שמעוניין שיגיב ״אני״" (paid testers wanted, no price stated) · Noam Nissan (Jul 6): "היי חברים התייעצות קטנה. לאחרונה התחלתי להפוך אתרי ווב שנבנו עם וייב קודינג לאפליקציות נייטיב, בשביל להעלות לגוגל פליי וגם לאפ סטור... להעלות לאפ סטור זה פשוט יותר, אבל תמיד זה מגיע להעלאה לגוגל פליי - ששם צריך 12 טסטרים" (see competitive note below) · Noam Nissan (Apr 21): "פיתחתי אפליקציה נחמדה לזמני היום וזמני שבת, וגוגל פליי מחייבים 12 טסטרים, יש פה חבר'ה עם אנדרואיד שישמחו לעזור לי?" · Michal Cohen (Jan 12): "ממש אשמח לאנשים שירצו להתנסות באפליקציה ולעזור בשלבי הבדיקה בחודש הקרוב... הגיבו את כתובת המייל שלכם" |
| יזמים \| סטארטאפיסטים - הקבוצה הרשמית | טסטרים | 2 | Aug 7, not captured | Kobi Shunak (Aug 7): "אני בודק עכשיו את Zoe העוזרת האישית שאני בונה, ואני מחפש 20 אנשים שישתמשו בה באמת ליום-יומיים" (general beta testers, not specifically the Google Play 12-tester gate) |

**Offering the service / asking for a recommendation — direct competitive
intelligence:**

- **Noam Nissan**, in פיתוח אפליקציות (Jul 6 post): offers to convert
  web apps (Lovable/Base44/Claude Code output) into native apps and take them
  through to the Google Play and App Store listing step. States plainly that
  the App Store side is the easy part and Google Play's 12-tester gate is
  what actually blocks people. No price quoted in the post text captured.
  This is upstream of Hand In Hand's offer (he also builds the native
  wrapper) but it overlaps directly on the publishing step.
- **שי עופר**, in קלוד קוד ישראל - וייב קודינג (Aug 23): started an
  informal mutual-aid arrangement ("אם גם אתה מפתח ותצטרך בודקים בעתיד, אני
  (ואחרים בקבוצה) נעזור") rather than a paid service — a free, peer-to-peer
  alternative to both the paid tester services and a paid publishing service.
- **Alex Guberman's own post**, in קלוד קוד - הקבוצה הרשמית (posted ~7h
  before this research, so very recent): tested the exact offer —
  "שוקל להציע שירות: פרסום האפליקציה שלכם בגוגל פליי מהחשבון העסקי שלי, בלי
  12 טסטרים ובלי 14 יום המתנה." This is not organic demand (Alex wrote it),
  but the one reply it drew is real market feedback and worth recording:
  Eliran Bitton pushed back — "בשביל שתציע דבר כזה המערכת צריכה להיות רשומה
  על שמך! זה לא הגיוני והיום יש חברות שמספקות את הטסטרים במחיר זול" (objects
  that the app would need to be registered in Alex's name, calls the idea
  not-sensible, and points at existing cheap paid-tester companies as the
  alternative) — independently confirming the paid-tester-service competitive
  pressure the offer doc already names (Testers Community, TesterBee, ~$15).
  Alex replied that such a service exists elsewhere in the world and operates
  under a written agreement; Eliran wished him luck and did not continue
  objecting.

No thread found (in the groups and terms actually searched) where someone
quotes a specific price for app-publishing-as-a-service other than the paid
app2store.co.il pricing already recorded in Round 1 and the unstated "טסטרים
בתשלום" mention above.

### 2. Google Trends, geo=IL, past 12 months

- **`google play` (Latin) dominates `גוגל פליי` (Hebrew) heavily** — the
  Latin term runs 40–100 on the index most weeks; the Hebrew term is flat at
  roughly 10–20 the entire year. Screenshot:
  `01-google-play-vs-gogel-play-IL-12mo.jpg`.
- **`app store` (Latin) dominates `אפ סטור` (Hebrew) even more sharply** —
  Latin runs 20–100; Hebrew shows no visible line at all (effectively zero).
  Screenshot: `02-app-store-vs-af-store-IL-12mo.jpg`.
- **`העלאת אפליקציה`** (upload an app) — no data ("your search doesn't have
  enough data to show here," on its own and in combination).
- **`פרסום אפליקציה`** (publish an app) — no time-series data, but enough
  volume to register one subregion line (Tel Aviv District, index 100) — so
  there is *some* search activity, just too sparse for Trends to chart weekly.
- **`טסטרים`** (testers) — the only one of these five with a real chart: flat
  near zero most of the year, one sharp single-week spike to 100 around
  September 2026, and a smaller sustained plateau (roughly 15–25) in the most
  recent few weeks of the window (partly shown as a dotted/incomplete line,
  i.e. still being finalized by Trends). Screenshot:
  `04-testerim-alone-IL-12mo.jpg`; the three-way comparison against the other
  two near-empty phrases is `03-haalaat-pirsum-testerim-IL-12mo.jpg`.

**Bottom line for spelling:** in Israel, people type the store names in Latin
script (`google play`, `app store`), not Hebrew. Headings and titles should
keep `Google Play` / `App Store` in Latin even inside Hebrew copy — matches
what the page already does. `טסטרים` is the one Hebrew-specific term with real,
if spiky and low-volume, search behavior; the generic verbs (`העלאת
אפליקציה`, `פרסום אפליקציה`) essentially don't get typed into Google on
their own in Israel — people search in fuller or more specific phrases
instead, consistent with Round 1's autocomplete findings.

### 3. People-also-ask and related searches (google.com, Hebrew, hl=iw&gl=il)

Four of the five phrases returned an **AI Overview block instead of a
classic "אנשים שאלו גם" (People also ask) accordion** — for those four, no
PAA questions and no "אנשים חיפשו גם" (related searches) list appeared
anywhere on the results page, confirmed by scrolling to the bottom of page 1.
This is a real, observed behavior change from what the brief assumed, not a
block — stated plainly rather than guessed around.

- **איך להעלות אפליקציה לגוגל פליי** — AI Overview present. No PAA box, no
  related searches. (Notable organic result: a live Facebook thread in
  "מפרגנים לחברים שמפתחים אפליקציות" asking literally "היי חברה, אני רוצה
  לעלות אפליקציה לגוגל פליי ואני צריך עזרה.")
- **12 טסטרים גוגל פליי** — AI Overview present. No PAA box, no related
  searches. (Notable: a Hebrew-language guide at `testers.alphamf.com`
  titled "כלל 12 הטסטרים של Google Play — המדריך המלא (2026)," posted 4 days
  before this research — a new, very recent Hebrew competitor on exactly the
  phrase the offer doc called a content gap. Also a Facebook thread in
  "מפתחי משחקים | Israeli Game Developers," 20+ comments, 5 months old.)
- **האם צריך מק כדי להעלות אפליקציה** — AI Overview present. No PAA box, no
  related searches. (Notable: a Facebook thread in "Vibe Coding - Israel,"
  posted only ~7 hours before this research, 8 comments: "כדי לפתח אפליקציה
  לאייפון, והעלאה לחנות, חייב מק? או שיש פתרוות על ווינדוס? ממה שהבנתי כנראה
  שאין מנוס.")
- **כמה עולה להעלות אפליקציה** — no AI Overview. No PAA box either. Did have
  a related-searches block ("אנשים חיפשו גם"): `כמה עולה לפתח אפליקציה`,
  `בניית אפליקציה בחינם`, `בניית אפליקציה ai`, `פיתוח אפליקציה`, `אפליקציה
  חנות play`. Organic results for this exact phrase are still dominated by
  app-*development*-cost guides, not publishing cost — matches Round 1's
  finding that this cluster is crowded with adjacent-intent dev-cost content.
- **חשבון מפתח גוגל פליי** — no AI Overview. **This is the one query that
  returned a real PAA box**, "אנשים שאלו גם על": `איך פותחים חשבון גוגל
  פליי?`, `איך אני נכנס למצב אורח במייל שלי?` (generic Gmail question,
  unrelated), `איך אני מעלה אפליקציה לגוגל פליי?`, `איך יוצרים חשבון גוגל?`.
  Related searches ("אנשים חיפשו גם"): `גוגל פליי קונסול`, `גוגל קלאוד
  קונסול`, `גוגל פליי להורדה`, `גוגל קונסול`, `התקנה מחדש של גוגל פליי`,
  `גוגל פליי למחשב`, `חנות גוגל פליי`, `גוגל מפתחים` — mostly generic
  "Google Play the app on my phone" noise, not publishing-as-a-service intent,
  which itself is a useful negative finding (this phrase pulls in a lot of
  non-developer searchers).

## What to change on the page

Based only on what was directly observed above:

- **FAQ question, exact wording, highest confidence** (matches a real PAA
  question, a real Facebook question, and both Round 1 autocomplete and the
  live competitor): `איך מעלים אפליקציה לגוגל פליי?` — the page's existing
  FAQ answers this implicitly; giving it this literal question as a heading
  would match what both Google's PAA and real Facebook posters actually type.
- **Keep `Google Play` and `App Store` in Latin script in every heading.**
  Trends shows Israelis search the Latin form by a wide margin over `גוגל
  פליי` / `אפ סטור`; this is a change in Round 1's assumption (Round 1 used
  the Hebrew spellings in its proposed FAQ strings) and should override it.
- **New FAQ or H2, from real Facebook wording**: `12 בודקים לשבועיים —
  למה זה כל כך קשה?` (echoes Aviv Ben Haim's and Bar Bur's actual phrasing,
  "12 בודקים"/"12 מתנדבים", "לא למחוק באמצע — זה מאפס לי את הספירה" — the
  reset-on-uninstall pain point is not currently named anywhere on the page
  and is exactly the kind of concrete detail that signals the page was
  written by someone who's actually watched this happen).
- **New H2, Apple/Mac side** (matches a Facebook thread from the same week as
  this research, and the "האם צריך מק" PAA cluster): `צריך מק כדי להעלות
  לאפ סטור? התשובה הקצרה` — the Mac question is clearly live right now
  (a thread 7 hours old at research time), and the offer doc's existing FAQ
  answer on this already covers the content; it just needs a question-shaped
  heading matching how people actually ask it.
- **Competitive awareness, not page copy**: `testers.alphamf.com`'s guide on
  the 12-testers rule is 4 days old at research time — Round 1's claim that
  this phrase is an uncontested gap needs updating; it's thin competition,
  not zero. Noam Nissan's app2store-adjacent offer (web-app-to-native +
  publishing) in the פיתוח אפליקציות group is a second informal competitor
  worth knowing about even though it's not a formal business listing.
