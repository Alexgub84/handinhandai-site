# Keyword briefs, two skill-article subjects — read on 2026-11-08

Work order `.claude/work-orders/142-2-keyword-briefs.md`, issue #144, parent epic
#142. Two Hebrew articles are planned, each paired with a public Claude skill:
getting an app into Google Play and the App Store, and getting a business
verified with Meta and onto the official WhatsApp Cloud API. This file is the
brief for both, read off the real Google results page before either article is
drafted, per the `hebrew-article` skill and `docs/seo/content-programme-2026-11.md`.

**Source and browser.** Headless Playwright (`mcp__browser__*`) was tried first
and was blocked by Google with HTTP 429 on the first query (`/sorry/index`
page) — the same block already documented for construction-briefs research.
All queries below were then read with the **headed Playwright browser**
(`mcp__browser-headed__*`, a plain Chromium profile at
`~/.config/claude-browser/profile` — not Brave, not a logged-in Chrome), typed
character-by-character into `google.co.il` with `hl=he&gl=il`, IP-geolocated to
Ramat Gan. No login, no captcha, no ads clicked. Autocomplete was read from the
real suggest dropdown before every search was submitted. Fourteen distinct
queries were run across the two subjects (listed inline below); "PAA" means
Google's own "אנשים שאלו גם" box, "related" means "אנשים חיפשו גם" — where
either did not appear for a query, that is stated plainly rather than guessed.

Read in full before this file: `docs/seo/keyword-briefs-2026-11.md` and
`docs/seo/keyword-briefs-construction-2026-11.md`, to match format and to check
overlap with brief 5 (`play-testers-requirement`, `בודקים גוגל פליי`) and
brief 9 (`whatsapp-ai-cloud-api`, `סוכן AI לעסק` / `בוט וואטסאפ לעסק`), the two
adjacent briefs already in the programme.

---

## 1. App publishing — "getting an app into Google Play and the App Store"

first read on 2026-11-08, approx. 20:47-20:55 UTC; re-read on 2026-11-08,
21:09-21:12 UTC after a second reader reported a contradiction (see "Second
reading, 2026-11-08 21:09 UTC" below)

```
primaryQuery: איך מעלים אפליקציה לחנויות
secondaryQueries:
  - איך מעלים אפליקציה לגוגל פליי
  - כמה זמן לוקח לאשר אפליקציה באפסטור
  - דרישות להעלאת אפליקציה לגוגל פליי
answersQuestions:
  - איך אני מעלים אפליקציה לאפסטור?
  - איך אני יכול להעלות אפליקציה לגוגל פליי?
  - איך מפעילים עדכון אוטומטי של אפליקציות?
```

**Primary query:** `איך מעלים אפליקציה לחנויות`

**Secondary queries tested (each a separate real search):** `איך מעלים
אפליקציה לגוגל פליי`, `כמה זמן לוקח לאשר אפליקציה באפסטור`, `דרישות להעלאת
אפליקציה לגוגל פליי`.

**Autocomplete for the stem `איך מעלים אפליקציה ל`:** `איך מעלים אפליקציה
לגוגל פליי`, `איך מעלים אפליקציה לאפסטור`, `איך מעלים אפליקציה באייפון` — three
clean, exact continuations, strong real volume. Autocomplete for the primary
query typed in full (`איך מעלים אפליקציה לחנויות`) found **no exact-match
suggestion** — Google offered `איך מעלים אפליקציה`, `איך מעלים אפליקציה
באייפון`, `איך מעלים אפליקציה לאפסטור` instead, meaning the generic "לחנויות"
(to the stores) phrasing itself has weaker recognition than naming the specific
store. Autocomplete for `דרישות להעלאת אפליקציה לגוגל פליי` found **zero
exact-match recognition** — Google rewrote it to `איך להעלות אפליקציה לגוגל
פליי` and, oddly, `איך להעלים אפליקציה` (to *delete/uninstall* an app, a
one-letter misread) — confirming that real searchers ask "how," not "what are
the requirements."

**AI Overview (primary query):** Yes. States the two-store procedure in four
numbered stages — preparation (`AAB`/`APK` for Android, a `Build` uploaded via
`Xcode` or `Transporter` for iOS, ASO assets), opening a developer account
(**Google Play Console: $25 one-time**; **Apple Developer Program: $99/year**),
uploading to Google Play, uploading to the App Store — and embeds a 22:27
YouTube tutorial ("איך לפרסם אפליקציה ב google play", 7.7K views, 6 years old).
Cites **Base44** (docs.base44.com), **Android Developers** (official),
**aiterra.co.il**, and **a-2-z.co.il**.

**People Also Ask:** none shown on the primary query's page. On the secondary
query `איך מעלים אפליקציה לגוגל פליי` a PAA box ("אנשים שאלו גם על") **did**
appear and was expanded; the three questions it surfaced, verbatim:
- `איך אני מעלים אפליקציה לאפסטור?`
- `איך אני יכול להעלות אפליקציה לגוגל פליי?`
- `איך מפעילים עדכון אוטומטי של אפליקציות?`

**Related searches** (primary query): `העלאת אפליקציה לגוגל פליי`, `גוגל פליי
קונסול`, `בייס 44` — only three, thin.

**Top organic results (primary query, all fresh, no incumbent older than
2025):**
- **Base44 Docs** (docs.base44.com) — "הגשת האפליקציה שלכם לחנויות אפליקציות"
  — ranks #1 organically
- itayost.com — "מדריך העלאת אפליקציה לחנויות | App Store ו-Google Play 2025"
  (1 Jan 2025)
- Android Developers (developer.android.com) — "העלאת האפליקציה ל-Play
  Console" (official)
- **aiterra.co.il** — "איך מעלים אפליקציה לגוגל פליי ולאפ סטור (2026)"
  (25 Oct 2026) — the same site already cited by the AI Overview for the
  original `app-publishing-costs` query in `keyword-briefs-2026-11.md`, so this
  is a recurring competitor across the whole store-publishing cluster
- **Sponsored: Base44** — "Launch Your App Today - AI for Mobile App
  Development" — present on the first read (see "Second reading" below: the
  ad was **not** present ~2 hours later, so "Base44 buys the ad on this exact
  query" is a first-read observation, not a standing fact)
- Reddit r/SaaS — "איך אני בונה אפליקציות ומפרסם אותן בחנויות האפליקציות של
  גוגל..." (4 comments, 1 year old) — "אין לי שום רקע ב-IT", the same
  no-technical-background framing the Facebook group demand research found
- level-app.com (לבל אפ) — "פיתוח אפליקציה לחנות: הסודות להצלחה שאתה חייב
  לדעת" (21 Feb 2026)
- digiapps.co.il — "איך לקדם אפליקציה בחנויות האפליקציות – App Store &
  Google..." (ASO-focused)
- appdevelopment.co.il — "העלאת אפליקציה ל-App Store ול-Google Play: מדריך
  לעסקים (2026)" (19 Oct 2026)
- sys-tech.co.il — "פיתוח אפליקציה לעסקים: מדריך שלם מהרעיון ועד ההשקה
  בחנויות"

**Second reading, 2026-11-08 21:09 UTC (same exact query string, `איך מעלים
אפליקציה לחנויות`, typed character-by-character into a fresh `google.co.il`
page, same headed-browser profile, ~2 hours after the first read).** This
re-read was triggered by an independent checker who reported, for "the
app-publishing primary query," an organic order of קורל טכנולוגיות, AskPavel,
shareit.co.il, Reddit r/androiddev, Apple's own listing page, Reddit r/swift,
Google Help, digiapps.co.il, dogma.co.il — no Base44 anywhere (no organic, no
ad, no AI Overview citation), only digiapps.co.il overlapping with the set
above. The checker's message did not quote the exact string they searched.

Re-reading `איך מעלים אפליקציה לחנויות` itself produced the **identical
9-result organic order, verbatim snippets included**, as the first read above
— **Base44 Docs still #1**, then itayost.com, Android Developers,
aiterra.co.il, Reddit r/SaaS, level-app.com, digiapps.co.il,
appdevelopment.co.il, sys-tech.co.il, in the same order. Two things did
change: the **sponsored Base44 ad was gone** (no "תוצאה ממומנת" block at all
on the re-read), and the **AI Overview's inline citation list changed** — the
first read's overview text named Base44 by name; the second read's overview
text cites digiapps.co.il, aiterra.co.il, Android Developers, Andromo and
itayost.com, with no Base44 mention in the prose (Base44 still appears
organically below it, unaffected).

Since the checker's reported organic order shares only one result
(digiapps.co.il) with either of my two reads of the literal primary query —
and digiapps.co.il recurs across several queries in this cluster, so is weak
evidence of a match — and since my own re-read reproduced the first read's
organic ranking exactly, word for word, the most likely explanation is a
**query-string mismatch**: the checker was almost certainly reading a
different phrasing (something closer to a bare "להעלות/איך מעלים אפליקציה"
without "לחנויות," or a more Apple/iOS-leaning phrasing, given "Apple's own
listing page" and "Reddit r/swift" in their result set), not the string this
brief's `primaryQuery` field actually names. That could not be confirmed
either way without the checker's literal query string, which was not
supplied.

**What this means for the claim below:** Base44 ranking organic #1 on
`איך מעלים אפליקציה לחנויות` is **confirmed**, reproduced twice, ~2 hours
apart, word for word. Base44 running a **paid ad** on this exact query, and
being **named in the AI Overview's prose**, are **not** stable — both were
true on the first read and both were absent on the second. The brief below is
corrected to reflect this: the organic-ranking claim stands; the ad and
in-prose-citation claims are stated as first-read-only observations.

**Secondary-query findings worth carrying into the article:**
- `כמה זמן לוקח לאשר אפליקציה באפסטור` — AI Overview states Apple's own figures
  (**50% of submissions reviewed in under 24 hours, ~90% in under 48 hours**)
  and **cites `devoria.fr`** — the exact same site already flagged in
  `keyword-briefs-2026-11.md` as "the strongest single competitor found in the
  whole research set" on the `apple-rejection-copycat` article. Real-world
  average per appfly.ai (23 Jun 2026) and hybridapplication.co.il: **3-7 days**
  including the review queue, longer after a rejection.
- `דרישות להעלאת אפליקציה לגוגל פליי` — AI Overview gives a full, checkable
  requirements list: `AAB` format mandatory (not plain `APK`), `Play App
  Signing` mandatory since August 2021, 4GB max download size, 1024×1024 icon,
  1024×500 feature graphic, Privacy Policy, `Data Safety Form`, Closed/Internal
  Testing recommended before public release. Citing Android Developers
  (official), Andromo, aiterra.co.il. Organic #2 here: קורל טכנולוגיות (Coral
  Technologies), a Hebrew third-party guide not seen on the primary query.

**Entities to be credible:** `AAB` / `APK`, `Xcode`, `Transporter`, `IPA`,
`Bundle ID`, `Play Console`, `App Store Connect`, Google Play $25 one-time fee,
Apple Developer Program $99/year, `Play App Signing`, `Data Safety Form`, ASO,
Closed/Internal Testing, `Submit for Review`.

**How this differs from briefs 5, 7 and 8 (already in the programme):**
- Brief 5 (`play-testers-requirement`) and brief 8 (`app-publishing-costs`) are
  narrow sub-angles (the 12-tester requirement; the $25/$99 fees specifically).
  This subject is the **full, ordered, cross-platform procedure** — prepare
  assets, open both accounts, build, submit, pass review — which none of the
  existing briefs cover end to end.
- Brief 7 (`who-owns-the-developer-account`) is about account custody and
  ownership. This subject assumes the account already exists and is about the
  mechanics of actually getting an app through both stores.
- The one genuinely new finding none of briefs 5/7/8 surfaced: **Base44's own
  publishing docs now rank #1 organically** on the generic "how do I publish"
  query — reproduced twice, ~2 hours apart, word for word (see "Second
  reading" above). On the first read only, Base44 also ran a paid ad and was
  named in the AI Overview's prose; neither held up on the re-read, so those
  two narrower claims are reported as first-read-only, not as a standing
  fact. The organic #1 ranking is the part of this finding to trust.

**Who ranks / what beats them:** Base44's own docs own the literal query's
top organic slot (confirmed on two independent reads); four to five fresh
(2026) Hebrew agency guides (itayost.com, aiterra.co.il, appdevelopment.co.il,
sys-tech.co.il, level-app.com) already cover the generic procedure
competently; Android/Apple's own docs own the literal step-by-step. None of
them states the irreversible traps up front (package name can never be
reused, EU DSA trader verification, the account landing on the wrong person's
name) or ties the procedure to a desk that actually does this as a paid
service rather than a no-code builder's documentation page.

**Verdict: CONTESTED.** Real, fresh, competent Hebrew competition plus a
no-code AI-builder platform that owns the top organic slot on the generic
phrasing (confirmed twice; its paid ad and AI Overview citation were present
once and gone on the re-check, so treat those two as volatile, not the
organic ranking). Not open, but not closed either — the angle that beats it
is the cross-platform account-ownership and irreversible-mistakes framing,
which nothing on page one states plainly.

**Recommended slug:** `publish-app-to-stores`.

---

## 2. Meta business verification + the official WhatsApp Cloud API

read on 2026-11-08

```
primaryQuery: אימות עסק בפייסבוק
secondaryQueries:
  - חיבור וואטסאפ API לעסק
  - אימות עסק מטא נדחה
  - כמה זמן לוקח אימות עסק בפייסבוק
  - WhatsApp Business API מול Green API
  - איך מתחברים ל WhatsApp Cloud API
  - מה זה WhatsApp Business API
answersQuestions:
  - למה הבקשה שלי לאימות העסק נדחתה ב-Meta Business Suite?
  - מה ההבדל בין WhatsApp Business לבין WhatsApp API?
  - וואטסאפ עסקי או WhatsApp API? מה ההבדל, ומי צריך מה?
  - מה זה WhatsApp Business API ובמה הוא שונה מאפליקציית הוואטסאפ העסקי?
```

**Primary query:** `אימות עסק בפייסבוק` — **not** `אימות עסק מטא`. The literal
word "מטא" (Meta, written in Hebrew letters) is **unstable and comparatively
weak**, not reliably zero — this was checked four separate times today, and
produced four different suggestion sets:
- First read (2026-11-08, ~20:55 UTC): `מטאור` (meteor), `מטאפורה`
  (metaphor) — no form of "מטא" itself offered back.
- An independent second reader's own check (reported, not reproduced here;
  exact timestamp not given): 7 suggestions, 4 of which were "מטא" forms,
  including `אימות עסק במטא` directly.
- My own re-check #1 just now (2026-11-08, 21:11 UTC, same headed-browser
  profile): a **single** suggestion — the typed string itself, `אימות עסק
  מטא`, echoed back with no elaboration.
- My own re-check #2, seconds later, retyped from a fresh page load: three
  suggestions — `מטאבו`, `מטאטא` (broom), and the literal `מטא` again. No
  `אימות עסק במטא` variant appeared in either of my two re-checks.

So across four independent reads, "מטא" ranged from a dead rewrite (מטאור/
מטאפורה), to a weak literal echo, to — per the second reader only — a real
`במטא` variant appearing in 4 of 7 slots. The direction of the finding holds
every time it was checked: typing the stem `אימות עסק` alone and letting
Google complete it reliably and repeatedly surfaces `אימות עסק בפייסבוק` /
`אימות עסק פייסבוק` as exact-match, stable suggestions — reproduced
identically on every read today, including the fresh one just now — while
"מטא" has never once produced a stable, repeatable suggestion set. Israelis
searching for this still say **"פייסבוק"** more reliably than "מטא," the
same pattern `keyword-briefs-2026-11.md` already found for `פרילנסר מול
חברה` (wrong query) → `פרילנסר או חברת פיתוח` (right query) — but say
precisely that "מטא" is unstable/weak, not that it is dead. **This is a
correction the programme should carry: name the article's primary target
`אימות עסק בפייסבוק`, not any phrasing built on "מטא," because `פייסבוק` is
the one of the two that reads the same way every time.**

**Secondary queries tested (each a separate real search):** `חיבור וואטסאפ API
לעסק`, `אימות עסק מטא נדחה`, `כמה זמן לוקח אימות עסק בפייסבוק`, `WhatsApp
Business API מול Green API`, `איך מתחברים ל WhatsApp Cloud API`, `מה זה
WhatsApp Business API`. A further variant, `אימות עסק בוואטסאפ`, was tested and
**rejected** — its autocomplete (`...ווב`, `...במחשב`) shows it is read as
"verifying your account on WhatsApp Web," a different intent entirely (the
blue-checkmark-style verification inside the WhatsApp app, not Meta's business
verification).

**Autocomplete for `אימות עסק בפייסבוק`:** exact match plus two close variants
(`אימות עסק פייסבוק`, `אימות העסק בפייסבוק`) — real, specific recognition,
unlike the "מטא" phrasing.

**AI Overview (primary query):** Yes. Opens by naming the English term
directly: `"אימות עסק בפייסבוק (Meta Business Verification)"`, defines it as
Meta confirming the Business Portfolio and its assets belong to a real legal
entity and an authorised representative. Two facts worth carrying into the
article, both sourced to Facebook's own page:
- **It does not give a blue checkmark** — explicitly distinguished from `Meta
  Verified`, which is a different, paid product. (Google even sells a paid ad
  for `Meta One`/`Meta Verified` — "קבלו גישה לתג אימות Meta" — on this exact
  query, which is a real, documented source of reader confusion worth
  addressing head-on in the article.)
- **Review time: up to 14 business days.**

Five ordered steps follow (Security Center → Start Verification → enter
business details exactly as they appear on official documents → upload a
supporting document if asked → choose a verification method: email, phone,
SMS, WhatsApp, or domain verification), citing Facebook (official), **פאנר**
(funner.co.il), mumble.co.il, and smoove.

**On the secondary query `אימות עסק מטא נדחה`** (what to do when verification
is rejected) the AI Overview is even more specific: the usual cause is a
**mismatch between the submitted details and the official documents** (exact
business name, address, phone, website must match the bank letter / osek
patur certificate down to punctuation), recommends waiting **at least 24
hours** before resubmitting, and after **two rejections** stopping to fix the
documents at the root rather than resubmitting again. It names the exact
screen: **Security Center** inside **Meta Business Suite**. This matches, fact
for fact, the private runbook already in `meta-business-setup` — a real,
independent confirmation that the private procedure is accurate, not a
coincidence worth noting but not treated as new information.

**People Also Ask:** **none shown**, on any of the nine distinct queries run
for this subject (the primary query, the five secondary queries above, plus
`אימות עסק בפייסבוק תקוע` and `אימות עסק בוואטסאפ`, tried specifically to
trigger the box). This is stated plainly rather than invented. Substitute
verbatim questions, pulled from real page titles and snippets that function the
same way (a buyer's actual framing of the problem), used in place of a PAA box
per the same convention `keyword-briefs-2026-11.md` applied to query 4
(`do-you-need-a-mac`), where PAA also did not appear:
- `למה הבקשה שלי לאימות העסק נדחתה ב-Meta Business Suite?` (Facebook's own
  official help-page title, phrased as the reader's own question)
- `מה ההבדל בין WhatsApp Business לבין WhatsApp API?` (FixDigital CRM article
  title)
- `וואטסאפ עסקי או WhatsApp API? מה ההבדל, ומי צריך מה?` (Flowi article title)
- `מה זה WhatsApp Business API ובמה הוא שונה מאפליקציית הוואטסאפ העסקי?`
  (VeloLinx article title)

**Related searches** (on `מה זה WhatsApp Business API`): `פרסום בקבוצות
וואטסאפ`, `מערכת לשליחת הודעות וואטסאפ`, `מערכת ווצאפ`, `פרסום בוואטסאפ`, `בוט
ווצאפ לעסקים` — all five drift toward **bulk-marketing and messaging tools**,
confirming that this query cluster is, by Google's own classification, a
messaging/marketing-SaaS market first and a "how do I get verified" market
second.

**Top organic results, combined across the primary and secondary queries —
a crowded field of Israeli WhatsApp-API resellers and CRM vendors, all fresh:**
- **פאנר (funner.co.il)** — ranks **twice** on the primary query alone:
  "מדריך מלא לאימות עסק בפייסבוק (Meta Business Verification)" and "אימות עסק
  בפייסבוק - התהליך המלא צעד אחר צעד" — the single strongest incumbent found
  for this subject, directly on-topic, and the one the AI Overview cites by
  name
- Facebook's own official help pages (he-il.facebook.com) — "איך לאמת את העסק
  שלכם ב-Meta Business Suite", "מידע על אימות העסק ב-Meta Business Suite" —
  unbeatable on the literal "how do I do this" slot, as with Google's own pages
  in the original `who-owns-the-developer-account` brief
- mumble.co.il — "אימות העסק במטא שלב אחר שלב" (8 Oct 2026, very fresh) and
  "WhatsApp Business API: המדריך המלא לעסקים בישראל (2026)"
- smoove — "אימות העסק בפייסבוק - מרכז הידע של smoove" (CRM vendor's own
  knowledge base, 3 Apr 2022, dated)
- Flashyapp, inforu, Allchat, WeTech CRM — WhatsApp API resellers/BSPs named by
  the AI Overview as the "official platform or authorised Meta provider" a
  business connects through
- FixDigital CRM, flowi-crm.ai, VeloLinx, Wiseflow, Fullness CRM,
  brostudio.co.il, michaelsolution.com — at least seven more Israeli CRM/agency
  sites explaining "what is WhatsApp Business API," all dated 2026

**Entities to be credible:** `Meta Business Suite`, `Security Center`,
Business Verification vs `Meta Verified` (the paid blue-checkmark product —
explicitly different), WhatsApp Cloud API vs the WhatsApp Business app vs
unofficial bridge tools (Green API named directly by searchers), WABA,
per-product phone-number isolation, message template approval, the 24-hour
customer-service window, osek patur / bank-letter document matching, the
14-business-day review window.

**How this differs from brief 9 (`whatsapp-ai-cloud-api`, already in the
programme, verdict CROWDED):** brief 9's query (`סוכן AI לעסק` / `בוט וואטסאפ
לעסק`) targets the **AI-agent/bot sales pitch** — "I want an AI assistant for
my business" — and found ten-plus competitors, two running paid ads, selling
chatbots and automation. This subject targets a narrower, earlier, more
operational step the AI-agent article never has to cover: **getting the
business itself verified by Meta and the number moved onto the official Cloud
API**, before any bot is built on top of it. The competitive field here is
different in kind — WhatsApp-API resellers and CRM vendors documenting the
onboarding mechanics for their own signup funnel, not AI-agent sales pages —
and the one strong incumbent (פאנר) covers only the verification half, not the
Cloud-API-connection half. Brief 9's own "unclaimed sub-angle" (what to do when
verification has been stuck for a month) is also this subject's strongest
angle, independently confirmed here by the AI Overview's own 24-hour/two-
rejection guidance.

**Who ranks / what beats them:** פאנר is the one genuine, fresh, directly
on-topic competitor on the verification half; a dozen-plus CRM/reseller sites
already explain the Cloud-API-vs-unofficial-tools distinction competently
(fresher than brief 9's own research found). No single page anywhere in this
read combines "get verified" and "land on the official Cloud API, not a
grey-market bridge" into one procedure told from the business owner's side
rather than a reseller's signup-funnel side — that gap, plus a real,
first-hand account of a rejection and the resubmission that cleared it, is what
beats the field.

**Verdict: CONTESTED.** One strong, fresh, directly on-topic incumbent (פאנר)
on the verification step; a crowded, fresh field of resellers on the Cloud-API
step; no PAA signal despite nine real attempts to find it; real related-search
drift toward bulk-marketing tools that the article must not get pulled into
being classified as.

**Recommended slug:** `get-verified-for-whatsapp-cloud-api`.

---

## Summary table

| Subject | Primary query tested | Correction from assumption | AI Overview? | PAA? | Verdict | Slug |
|---|---|---|---|---|---|---|
| App publishing | `איך מעלים אפליקציה לחנויות` | none — the assumed framing held | Yes | Yes (on `איך מעלים אפליקציה לגוגל פליי`) | CONTESTED | `publish-app-to-stores` |
| Meta verification + Cloud API | `אימות עסק בפייסבוק` | **"מטא" has near-zero recognition; real searchers say "פייסבוק"** | Yes | No, on 9 distinct queries tried | CONTESTED | `get-verified-for-whatsapp-cloud-api` |

## Where the real page contradicted the programme's assumption

- **The subject itself should never be keyworded on "מטא."** The working
  assumption going into this research was that Israelis search using the
  company's name, "Meta." The autocomplete evidence for "מטא" turned out to
  be unstable across four separate reads today (dead rewrite, weak literal
  echo, or a real `במטא` variant in 4 of 7 slots, depending on the read) —
  but "פייסבוק" was stable and exact-match on every single read, including a
  fresh one just now. The directional correction holds even though "מטא" is
  not flatly dead: any future brief, slug, or H1 for this subject should be
  built on `פייסבוק`, the one of the two phrasings that reads the same way
  every time.
- **Base44 (the no-code AI builder) owns the top organic result** on the
  generic "how do I publish my app" query — reproduced word for word on two
  independent reads of the literal primary query, ~2 hours apart. An
  independent checker, reading what they called "the app-publishing primary
  query" without quoting the exact string, found a completely different
  organic set with no Base44 at all; a re-read of this brief's actual
  `primaryQuery` string did not reproduce that set, so the likeliest
  explanation is the checker used a different phrasing, not that the organic
  ranking is unstable. What **is** unstable, confirmed by the same re-read:
  Base44's paid ad and its name-check inside the AI Overview's prose — both
  present on the first read, both absent ~2 hours later. Report both facts
  precisely: organic #1 confirmed twice; ad and in-prose citation seen once,
  not twice.
- **No PAA box appeared for any of the nine Meta-verification-side queries**,
  despite real attempts at five different phrasings (declarative, rejection-
  framed, comparison-framed, "stuck"-framed, definitional). The app-publishing
  side surfaced a PAA box easily by contrast. This is reported as-is rather
  than padded with invented questions; the substitute verbatim questions above
  are sourced from real page titles, not from memory.

## Checked by a second reader, 2026-11-08

An independent checker re-read three claims live on 2026-11-08 and reported
back the same day; this file was then re-read live a second time by the
original author to resolve the one contradiction. What survived: the
מטא-vs-פייסבוק direction (tightened above — "מטא" is unstable, not flatly
dead; "פייסבוק" is the stable one), the absence of a PAA box on `אימות עסק
בפייסבוק`, the `Meta One` sponsored ad, and most of the organic set on that
query (Facebook's own help pages, funner.co.il, mumble.co.il, smoove). What
did not survive as stated: Base44 running a paid ad and being named in the
AI Overview's prose on the app-publishing primary query — both were real on
the first read and absent on a same-string re-read ~2 hours later, so they
are now reported as first-read-only observations, not standing facts. What
survived a direct challenge and was reproduced twice, word for word, on the
literal primary query this brief actually names: **Base44 ranking organic
#1**. The checker's contradicting organic set for "the app-publishing
primary query" could not be reconciled with any read of the literal
`primaryQuery` string above and most likely reflects a different query
string, not a different moment in time — see "Second reading, 2026-11-08
21:09 UTC" under subject 1 for the full comparison.
