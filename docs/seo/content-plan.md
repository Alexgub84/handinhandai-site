# Content plan — making the site findable and quotable

> This document predates `docs/seo/content-programme-2026-11.md`; that file is the plan of record for the ten-article work.

Scope: content strategy only. No code, copy, or data file was changed to produce
this document. Builds on `.claude/work-orders/seo-audit-repo.md` (technical/markup
bugs: hreflang, canonical, `/en` duplication, JSON-LD split identity) and
`.claude/work-orders/seo-audit-live.md` (live-site confirmation of the same). This
document does not repeat those findings except where a content fix and a technical
fix must land in the same PR (noted explicitly).

Context assumed: the site is going Hebrew-only. English strings quoted below
(`src/i18n/ui.ts`) are dead weight regardless of this plan — that file is not
imported by `HomeDocument.astro` or any of `about.astro` / `terms.astro` /
`privacy-sasha.astro`; those pages hardcode their own Hebrew (and bilingual
English) strings directly. `ui.ts` is leftover from an earlier version of the site
(it even refers to an AI assistant named "סשה", a name that appears nowhere in the
current `AiAnswersNote.astro` disclosure). Flagging this as a fact, not acting on
it — it is a decision for whoever runs the English-removal PR, not this plan.

---

## 1. Who is searching, and what they type

Phrases below were checked against what Israeli providers of adjacent services
actually title their own pages and guides — the working theory being that if five
unrelated competitors all use the same phrase as an H1 or page title, that is the
phrase real searchers type, not a guess. Search volume itself is not available
from this research and is marked **unknown** throughout — no number below should
be read as a volume estimate.

| # | Phrase (Hebrew) | Verified? | Intent | Stage |
|---|---|---|---|---|
| 1 | בוט וואטסאפ לעסק | Verified — exact phrase titles 6+ competitor guides | Wants automated WhatsApp replies for the business | Reading/comparing — "guide" and "price" pages dominate this phrase, meaning most searchers are still pricing it out |
| 2 | כמה עולה בוט וואטסאפ לעסק | Verified — exact phrase is a page title (`stsiconic.com`) | Price research before a call | Reading, close to ready |
| 3 | סוכן AI לעסק | Verified — exact phrase is the H1/title on 5+ competitor pages (`netanelai.co.il`, `focusai.co.il`, `stsiconic.com`) | Wants an AI worker handling leads/replies, not just a chatbot | Mixed — some reading, some ready to talk |
| 4 | סוכן AI לוואטסאפ | Verified — near-exact match (`netanelai.co.il`: "סוכן AI לוואטסאפ לעסק") | Same as above, WhatsApp-specific | Ready to hire — this phrasing already names the channel, a strong buying signal |
| 5 | מערכת ניהול לקוחות בהתאמה אישית | Verified — exact phrase pattern used by `kala-crm.co.il`, `uni-tech.co.il` | Current CRM/spreadsheet setup doesn't fit the business, wants something built around it | Reading — comparing off-the-shelf CRM vs custom build |
| 6 | מערכת CRM מותאמת אישית לעסקים קטנים | Verified — exact title (`uni-tech.co.il`) | Same as #5, smaller-business framing | Reading |
| 7 | אוטומציה לעסק | Verified — generic but exact phrase, dozens of competitor guides | Knows manual work is costing time, doesn't yet know what to automate | Early reading |
| 8 | CTO במיקור חוץ | Verified — exact phrase, used by `mrcoral.co.il` and `kendoo.co` as their own service name | Non-technical founder needs senior technical leadership without a full hire | Ready to hire — this is a decision-stage phrase, not a learning one |
| 9 | CTO חלקי לסטארטאפ | Verified — exact phrase (`weccelerate.co.il`: "CTO חלקי לסטארטאפ בלי מייסד טכני") | Same as #8 | Ready to hire |
| 10 | שותף טכנולوגי למיזם | Verified — close paraphrase found across founder/startup content (Geektime, Seedbiz) | Founder explicitly wants a partner, not a vendor | Ready to hire — "partner" language signals they've already ruled out freelancers |
| 11 | פיתוח אפליקציה MVP לסטארטאפ מחיר | Verified — exact phrase pattern, multiple pricing guides, 2026 ranges ₪80,000–280,000 quoted | Pre-funding or pre-seed founder scoping a build | Reading, price-sensitive |
| 12 | פיתוח מערכת ניהול הזמנות / מלאי לעסק | Guessed — no direct competitor title found, built from the real problem in Alex's own case study ("תעודות משלוח הלכו לאיבוד") | Operations pain specific to suppliers/contractors | Reading |
| 13 | מה זה סוכן AI | Guessed — plausible top-of-funnel definitional query, not confirmed via search | Doesn't yet know the category exists | Early reading |
| 14 | פיתוח תוכנה מותאמת אישית לעסק | Guessed — natural extension of #5/#6, not independently verified | Wants custom build over SaaS | Reading |
| 15 | פרילנסר CTO ישראל | Guessed — plausible variant of #8/#9, not independently verified | Same as #8 but shopping specifically for an Israeli, possibly local-market reason | Ready to hire |

**The sharpest gap:** phrases #8, #9, #10 (CTO/technical-partner track) are
decision-stage phrases that match Alex's own vocabulary almost word for word
(`src/components/home/Services.astro` track 02 title is literally "שותף טכנולוגי
ו-CTO למיזמים וסטארטאפים") — yet there is no page that phrase can rank for on its
own; it only exists as one `<h3>` among many on the homepage. Phrases #1–#4
(WhatsApp AI agent) are the highest-competition, highest-intent cluster found,
and the site currently has zero page built around that exact framing even though
one of the three case studies is literally a WhatsApp AI agent.

---

## 2. Homepage critique, section by section

Render order per `src/components/home/HomeDocument.astro`: Hero → Services →
WhyAlex → About → CaseStudies → WhyToggle → Contact → Footer.

### Hero (`#top`, `Hero.astro`)
> "אני **אלכס**, אני כאן כדי להפוך רעיון **למציאות / למערכת / לפיצ'ר**."
> Benefit chips: "מאפיון ועד מוצר" · "פתרון מותאם לצורך" · "צוות מפתחים" · "CTO
> במיקור חוץ"

**Visitor learns:** this is a person, not a studio; something about turning an
idea into a product; a few fragments (CTO, custom fit, a dev team) hint at scope
without stating it.
**Search engine learns:** almost nothing. The H1 contains zero service nouns —
no "AI", no "CRM", no "וואטסאפ", no "מערכת ניהול". The only real keyword on the
whole visible hero is the chip "CTO במיקור חוץ" (3 words in a `<li>`). There is no
subheadline paragraph at all — the markup jumps from `<h1>` straight to the
benefit chips `<ul>` and then the buttons. This is the single biggest content gap
on the page: the first screen a person or a crawler sees never states, in a full
sentence, what Alex actually builds.

### Services (`#services`, `Services.astro`)
> "איך נוכל **להתפתח ביחד**?" / "שני מסלולים, מטרה אחת: טכנולוגיה שמזיזה את העסק
> קדימה."
> Track 01: "פיתוח מערכות ניהול וטכנולוגיה לעסקים"
> Track 02: "שותף טכנולוגי ו-CTO למיזמים וסטארטאפים"

**Visitor learns:** the two tracks and who each is for, in plain language — this
section carries almost the whole weight of "what do you actually sell."
**Search engine learns:** this is the strongest section on the page. The two
track titles match verified phrases #8–#10 almost exactly, and the step lists
underneath ("שילוב סוכני AI ואוטומציות מתקדמות לעסק", "פיתוח אפליקציה / MVP
מהיר") pick up #3, #11 and #12. The heading itself ("איך נוכל להתפתח ביחד?")
carries no keyword, but that is fine — the body under it does the work. The
defect is placement, not wording: this is the *only* section where Alex states
plainly what he sells, and it is one scroll below a hero that says nothing.

### WhyAlex (`#why-alex`, `WhyAlex.astro`)
> "למה **אלכס**?" / "כי טכנולוגיה טובה מתחילה בהבנה של העסק — ונמדדת בתוצאות."
> Four cards: "חשיבה עסקית לפני הטכנולוגיה" · "תכליתיות ויעילות (בלי מריחות)" ·
> "תקשורת ישירה ושקופה" · "צוות פיתוח חזק מאחוריי"

**Visitor learns:** Alex's working style and differentiators — useful trust
content for someone already considering him.
**Search engine learns:** nothing searchable. Zero service nouns, zero problem
language. This is fine *as a section* — not every section needs to carry
keywords, and stuffing "AI agent" into a section about communication style would
be the keyword-stuffing this plan is explicitly told to avoid. Flagging it only so
no one mistakes "says nothing to Google" for a defect here; the defect is that
sections like this outnumber the one section that does say something.

### About (`#about`, `About.astro`)
> "נעים להכיר,<br/>אני אלכס." Identity badges: "אבא של רון" · "יזם" · "איש של
> אנשים וטכנולוגיה"
> Opening line: "כבר **חמש שנים** שאני חי את העולם הזה. אני מת על הכלים החדשים
> שיוצאים היום – **AI, אוטומציות, פתרונות חכמים** – אבל מבחינתי הם לא שווים כלום
> אם הם לא עושים לכם את **החיים קלים יותר**."

**Visitor learns:** personal story, values, the "not a black box of code" promise
— strong trust content.
**Search engine learns:** partial credit. "AI, אוטומציות, פתרונות חכמים" are
real words but they're the vaguest possible phrasing of what Alex builds — none
of "סוכן AI", "בוט וואטסאפ", or "מערכת ניהול" (the exact phrases from section 1)
appear here, in the one paragraph most likely to be read as his personal
positioning statement.

### CaseStudies (`#example`, `CaseStudies.astro`)
> "לא רק מבטיחים. **מראים.**" Case 1 challenge: "באתר עם מאות דירות אי אפשר היה
> לדעת מה כבר הותקן, מה נבדק ומה נפתח מחדש..." Case 2 challenge: "קבלן בתחום
> הבנייה התמודד עם ערימות של ניירת, תעודות משלוח הלכו לאיבוד..." Case 3
> challenge: "תכנון של טיול או אירוע קבוצתי נגמר בגיליון אלקטרוני ובשרשור
> וואטסאפ מבולגן..."

**Visitor learns:** concrete, specific proof — the most substantive content on
the page by far.
**Search engine learns:** the most *factual* content on the page, but a missed
exact-match. Case 3's solution text says "עם סוכן AI שיושב בוואטסאפ" — that is
the exact phrase from search result #4 (סוכן AI לוואטסאפ) sitting inside a real,
specific proof story — exactly the kind of sentence that should be ranking and
currently has no dedicated page to anchor it. Case 2 (the AI-vision order
matching) never uses the words "סוכן AI" or "אוטומציה" even though it is one of
the two best-matching examples for phrase #7.

### WhyToggle (`#why`, `WhyToggle.astro`)
> "מי מנהל לכם היום **את העסק**?" / "אתם — או הבלגן?..." Card pair: "ידניות
> מיותרת" → "**סוכני AI ואוטומציות** — לידים מטופלים אוטומטית, התקשורת בוואטסאפ
> מנוהלת..."

**Visitor learns:** the same chaos-vs-order pitch as Services, retold with an
interactive before/after toggle — a strong visual, a repeated argument.
**Search engine learns:** this section restates Services' pitch in different
words, after the case studies instead of before them. It is the third time the
page makes the same "I fix the chaos" argument (hero chips → Services → here),
each time with slightly different vocabulary, which dilutes rather than
reinforces which exact phrase should rank. It also sits in render order *after*
the proof section, which is backwards for a human reader too — proof usually
closes an argument, it shouldn't be followed by more pitching.

### Contact (`#contact`, `Contact.astro`)
> "מוכנים לעשות<br/>את **הקפיצה?**" / "ספרו לי בכמה מילים איפה אתם עומדים,
> ונקבע שיחת אבחון קצרה. השיחה הראשונה עליי — בלי התחייבות."

**Visitor learns:** how to reach Alex and what to expect (AI assistant answers
first, then Alex directly).
**Search engine learns:** nothing service-related, as expected for a contact
block. No address appears here — correct per the project's own rule that the
full address only lives on `/about`.

**Bottom line for this section:** the page states what Alex sells plainly exactly
once (Services), restates it vaguely three times in different words (Hero chips,
About, WhyToggle), and never states it at all in the one place — the hero — that
carries the most weight with both a search engine and a first-time visitor.

---

## 3. Proposed homepage changes

Voice stays first-person, direct, no corporate register. No phrase below is
repeated more than once on the page — the goal is one clear statement, not
density.

**Hero — add a subheadline (new; there isn't one today).**
Insert directly under the `<h1>` in `Hero.astro`, before the benefit chips:

> "בונה סוכני AI, בוטי וואטסאפ, מערכות ניהול ואפליקציות מותאמות לעסקים — ומשמש
> כ-CTO במיקור חוץ למיזמים וסטארטאפים בישראל."

*Why:* this is the one sentence missing from the entire homepage — a plain
statement of what Alex sells, in the exact nouns from the verified search
phrases (#3, #5, #8), on the first screen. It does not touch the existing H1 or
its rotating word, which stays as the personal/brand line.

**About — rewrite the opening sentence's vague middle clause.**
Current: "...אני מת על הכלים החדשים שיוצאים היום – **AI, אוטומציות, פתרונות
חכמים** – אבל מבחינתי הם לא שווים כלום..."
Proposed: "...אני מת על הכלים החדשים שיוצאים היום – **סוכני AI, בוטי וואטסאפ,
מערכות ניהול** – אבל מבחינתי הם לא שווים כלום..."

*Why:* same sentence shape, same rhythm, same honesty about not caring about the
tools for their own sake — just trades three generic words for the three exact
nouns people search, in the one paragraph that reads as Alex's personal
positioning.

**Services, WhyAlex, CaseStudies, WhyToggle, Contact headings — no change.**
*Why:* Services already carries the keywords it needs in its track titles and
body (section 2 above); WhyAlex is legitimately a non-keyword trust section and
forcing search terms into it would be exactly the stuffing this plan was told to
avoid; CaseStudies' heading ("לא רק מבטיחים. מראים.") is doing its job as a
transition into proof, and the fix there is a case-copy wording tweak, not a
heading rewrite (see below); WhyToggle and Contact headings are fine as
emotional/CTA hooks and don't need to say anything to a search engine.

**CaseStudies — one-line copy tweak inside case 2's solution text (not the
heading).**
Current: "...ומודל AI שקורא את תעודת המשלוח המצולמת ומשווה אותה שורה-שורה
להזמנה."
Proposed: add four words so the sentence names the category explicitly:
"...**סוכן AI** שקורא את תעודת המשלוח המצולמת ומשווה אותה שורה-שורה להזמנה."

*Why:* the system described already *is* an AI agent reading documents and
acting on them — this just names it with the exact phrase (#3/#7) instead of the
vaguer "מודל AI", with no change to the actual claim.

No other homepage string needs to change for this plan. The repo audit's own
H3 (title/description too long for SERP display) and M1 (two disconnected JSON-LD
identities) are real content-adjacent defects but are already filed there with
their own fix — not repeated here.

---

## 4. Three service pages

Each targets one problem the homepage currently only gestures at. Slugs are
Hebrew to match how competitors in this market title their own pages (every
competitor URL/title found in section 1 is Hebrew-first) — flagging that Astro's
file-based routing and Cloudflare Pages both handle non-ASCII route segments, so
this is a content decision, not a technical blocker, but **NEEDS ALEX:** confirm
comfort with Hebrew URLs over ASCII transliterations (e.g. `/cto-chuz` vs
`/cto-במיקור-חוץ`) before a builder implements routing — this is a one-time
decision, changing it later means losing any links/indexing the original slug
earned.

### Page 1 — `/סוכן-ai-לעסק` (AI agent / WhatsApp bot for the business)
- **Title:** סוכן AI ובוט וואטסאפ לעסק — אלכס גוברמן, HandInHandAI
- **Meta description:** סוכן AI שעונה בוואטסאפ, מסנן לידים ומחבר למערכות שלכם. בניתי בפועל לעסקים בישראל — לא תבנית, פתרון שמתאים לתהליך שלכם.
- **H1:** סוכן AI לעסק — מי שעונה בוואטסאפ כשאתם לא יכולים
- **Section outline:**
  1. הבעיה — לידים שלא נענים מהר מספיק, שאלות חוזרות שגוזלות זמן, מידע שמתפזר בין וואטסאפ למייל.
  2. מה זה בפועל — ההבדל בין "צ'אטבוט" לבין סוכן שקורא מידע (כמו תעודת משלוח), כותב למערכות, ומעביר לאדם כשצריך.
  3. דוגמה מהשטח — case 2 (הזמנות/תעודות משלוח) וcase 3 (Chillist) כהדגמה של שני סוגי סוכן.
  4. איך זה מתחבר — WhatsApp API הרשמי של מטא, לא פתרון מתווך לא רשמי.
  5. CTA — שיחת אבחון קצרה.
- **Targets phrases:** #1, #2, #3, #4, #7, #13.
- **Proof needed:** case 2 and case 3 already qualify and can be reused as-is
  (no new client work needed). **NEEDS ALEX:** a pricing-model sentence for the
  FAQ this page should carry (see section 6) — even a range or "תלוי בהיקף, שיחת
  אבחון קודם" is enough; leaving it blank defeats the point of the page.

### Page 2 — `/מערכת-ניהול-לעסק` (custom management system / CRM)
- **Title:** מערכת ניהול מותאמת אישית לעסק — אלכס גוברמן, HandInHandAI
- **Meta description:** מערכת ניהול שבנויה סביב התהליך שלכם, לא תבנית שאתם מתכופפים אליה. מעקב לקוחות, הזמנות ומלאי, בקרת איכות — דוגמאות מהשטח בישראל.
- **H1:** מערכת ניהול שבנויה סביב העסק שלכם, לא להפך
- **Section outline:**
  1. הבעיה — גיליונות, וואטסאפ וניירת שלא מדברים אחד עם השני; תוכנת מדף שלא מתאימה לתהליך האמיתי.
  2. מה בונים — Custom CRM / מערכת ניהול הזמנות-מלאי-בקרת איכות, לפי הצורך הספציפי.
  3. דוגמה מהשטח — case 1 (בקרת איכות בבנייה) וcase 2 (הזמנות ותעודות משלוח).
  4. איך מתחילים — אפיון קצר לפני כל שורת קוד.
  5. CTA — שיחת אבחון קצרה.
- **Targets phrases:** #5, #6, #7, #12, #14.
- **Proof needed:** case 1 and case 2 already qualify, anonymity rules from
  `docs/handoff/case-01-construction-qc.md` carry over unchanged (no product
  name, no real domain, no store link). **NEEDS ALEX:** none beyond the pricing
  question already raised for page 1 — if the FAQ is shared across pages, one
  answer covers both.

### Page 3 — `/cto-במיקור-חוץ-לסטארטאפים` (fractional CTO / technical partner)
- **Title:** CTO במיקור חוץ לסטארטאפים — אלכס גוברמן, HandInHandAI
- **Meta description:** שותף טכנולוגי שחי ונושם ביזנס, לא רק קוד. ארכיטקטורה, הובלת צוות פיתוח ו-MVP מהיר לגיוס — לסטארטאפים ומיזמים בישראל.
- **H1:** CTO במיקור חוץ — שותף טכנולוגי, לא עוד פרילנסר
- **Section outline:**
  1. הבעיה — יזם לא-טכני (או עם צוות קטן) שצריך החלטות ארכיטקטורה ומהירות, לא עוד איש שצריך לנהל במיקרו-מנג'מנט.
  2. מה זה כולל — ארכיטקטורה, הובלת צוות פיתוח, MVP מהיר, מעורבות עסקית ולא רק טכנית.
  3. דוגמה מהשטח — case 3 (Chillist), כולל שם המוצר כי הוא לא אנונימי.
  4. למי זה מתאים — יזם רציני עם רעיון מוכח או מוצר קיים (לשחזר את הניסוח הקיים ב-Services.astro).
  5. CTA — שיחת אבחון קצרה.
- **Targets phrases:** #8, #9, #10, #11, #15.
- **Proof needed:** Chillist (case 3) is already named and usable in full. **NEEDS
  ALEX:** a one-line, nameable outcome for Chillist beyond what's in
  `case-studies.ts` today (the card deliberately carries no metric tiles per the
  2026-10-16 review) — even a qualitative line like "באפליקציה בשני חנויות" (already
  true via store badges) is enough; do not invent a number.

---

## 5. Local signals (Israel)

**What exists today:**
- `src/data/site-contact.ts` → `legal` object has the real facts: legal name
  (אלכס גוברמן), עוסק פטור מס' `323227199`, city רמת גן, full address "האשל 8,
  רמת גן", phone `054-505-3620`.
- Those facts are printed as plain text on `/about` (`src/pages/about.astro`) —
  readable by a person and by a crawler, but **not marked up as structured
  data** anywhere. `/about` has no JSON-LD of its own.
- `SEOHead.astro`'s `Organization` schema (used by about/terms/privacy) has
  `name`, `url`, `logo`, and a `contactPoint` with `telephone` + `availableLanguage:
  ['Hebrew', 'English']` — **no `address`, no `areaServed`, no `@id` linking it to
  the homepage's schema** (this last point is also the repo audit's M1).
- `HomeDocument.astro`'s `ProfessionalService` schema has `areaServed: {Country:
  Israel}` and `availableLanguage: "he"` — country-level only, no city, no
  address, no `@id`.
- No `sameAs` (LinkedIn, Facebook, etc.) on either schema — **NEEDS ALEX:** does
  a public profile exist that should be linked? Social-profile `sameAs` entries
  are a real (if minor) entity-confidence signal Google and AI answer engines use.

**What's missing, concretely:**
1. A `PostalAddress` block (street, city, country, `addressRegion` if used) on
   the one, unified Organization entity — currently the address only exists as
   human-readable prose on `/about`, invisible to structured-data consumers.
2. `areaServed` should name the service area at the city/region level, not just
   "Israel" — e.g. `Ramat Gan` plus the fact that work is remote/nationwide. A
   solo remote consultancy legitimately serves the whole country; the schema
   should say both ("based in Ramat Gan, serves all of Israel") rather than only
   the country-level claim it has today.
3. `telephone` only lives nested inside `contactPoint` today; it's valid schema
   either way, no actual defect here — noted only so no one "fixes" something
   that isn't broken.
4. The `availableLanguage` mismatch (`['Hebrew', 'English']` on SEOHead's schema)
   needs to become `Hebrew`-only the moment English is formally removed from the
   site, or it tells Google the business serves a language the site no longer
   has content in.

**Google Business Profile — is it worth it for this business?**
Worth claiming, but as a secondary trust signal, not a lead channel. Alex is a
remote, one-person technical consultancy — the people searching phrases #8–#11
(CTO, technical partner, MVP pricing) are not browsing Google Maps' local pack,
they're reading guides and comparing people. A GBP listing mainly helps by: (a)
feeding a Knowledge Panel entry that ties the business name to a real,
verified Israeli entity, which both Google and AI answer engines treat as a
trust signal; (b) collecting reviews. The catch is **the review source is
thin**: two of the three case-study clients are contractually anonymous (per
`docs/handoff/case-01-construction-qc.md` and the matching rule for the ordering
client) and cannot leave an identifiable public review without breaking that
anonymity. Only Chillist, or future clients, could realistically review. **NEEDS
ALEX:** decide whether to claim a GBP listing as a Service Area Business (no
public storefront address shown) — low effort, a genuine but secondary signal,
contingent on being able to get even two or three real reviews over time.

---

## 6. Being quoted by AI assistants

Separate axis from classic SEO: an AI assistant answering "who builds WhatsApp
AI agents in Israel" or "what does a fractional CTO cost in Israel" needs a
self-contained sentence it can lift and attribute, not a page it has to
interpret. Concretely, for this site:

1. **One factual, quotable identity sentence, stated once, verbatim-ready.**
   Nothing on the site currently combines who + what + where in one sentence an
   assistant could quote directly. Proposed, for the About page or a new
   service page's opening line:
   > "אלכס גוברמן הוא מפתח ו-CTO עצמאי מרמת גן, שבונה סוכני AI, בוטי וואטסאפ,
   > מערכות ניהול ואפליקציות לעסקים קטנים ובינוניים בישראל, ומשמש כ-CTO במיקור
   > חוץ לסטארטאפים."
   This is the Hero subheadline from section 3 plus the name and city from
   `/about` — the two halves exist separately today, never combined.

2. **A real FAQ section, question-shaped headings, on the homepage or split
   across the service pages.** None exists anywhere on the six current pages.
   Proposed questions, each answerable in 2–3 sentences, seeded from the
   verified intents in section 1:
   - "כמה עולה בוט וואטסאפ / סוכן AI לעסק?" (#1, #2) — **NEEDS ALEX:** the actual
     answer; even a stated model ("תלוי בהיקף — שיחת אבחון ראשונה כדי להעריך,
     לרוב נע בין X ל-Y") beats silence.
   - "מה ההבדל בין צ'אטבוט רגיל לסוכן AI?" (#3, #13) — answerable from what
     already exists in the case studies (reads documents, writes to systems,
     hands off to a human).
   - "מה זה CTO במיקור חוץ, ולמי זה מתאים?" (#8, #9, #10) — answerable almost
     verbatim from Services.astro's existing track-02 copy.
   - "כמה זמן לוקח לבנות MVP?" (#11) — **NEEDS ALEX:** a real timeframe range
     from past projects, or decline to publish one.
   - "איך מתחילים לעבוד איתך?" — answerable from the existing "שיחת אבחון ראשונה
     — בלי התחייבות" line already on the hero.
   Mark this section up with `FAQPage` JSON-LD — that is the one schema type most
   directly built for AI-answer extraction, and the site currently ships none.

3. **A stated pricing model, anywhere.** Not a price list — a model. Today
   nothing on the site states whether engagements are fixed-scope, retainer, or
   hourly, at any level of vagueness. This is the single biggest blocker to
   being quoted on any "how much does X cost" query, which is a huge share of
   the verified phrases in section 1. **NEEDS ALEX:** pick the one sentence to
   disclose, even directionally.

4. **`llms.txt` — worth shipping, low effort.** Proposed content for
   `public/llms.txt` (not created by this plan — a future PR):
   - One paragraph: who Alex is, what he builds, who for, based where, serving
     Israel, Hebrew-language business.
   - Links to `/` and `/about` and the three new service pages once they exist.
   - One line stating the contact method (WhatsApp) and that an AI assistant
     answers first, mirroring `AiAnswersNote.astro`'s existing disclosure —
     useful for an assistant to know before recommending a reader actually
     message the number.
   - Explicit mention that the two anonymous case studies are intentionally
     unnamed, so a crawling assistant doesn't try to "complete" the redacted
     client names from context (this is the one site-specific risk a generic
     `llms.txt` template would never flag).

---

## 7. Order of work

1. **Add the Hero subheadline and the About opening-line swap (section 3).**
   Smallest possible change, fixes the single sharpest gap found in this plan —
   the homepage currently never states what Alex sells in a full sentence.
2. **Build a real FAQ section with `FAQPage` schema, seeded with the five
   questions in section 6**, pricing and MVP-timeline answers pending Alex's
   input. Highest quotability-per-effort item; can ship even with two "pending"
   answers if Alex defers the pricing decision.
3. **Ship the three service pages from section 4** (`/סוכן-ai-לעסק`,
   `/מערכת-ניהול-לעסק`, `/cto-במיקור-חוץ-לסטארטאפים`), reusing existing
   case-study content — the largest PR here, but it is the only item that gives
   the ten decision-stage phrases in section 1 (#1, #2, #3, #4, #8, #9, #10,
   #11) any page to actually rank on.
4. **Unify the local-business structured data** — one `Organization`/
   `ProfessionalService` entity with a shared `@id`, a real `PostalAddress`, and
   city-level `areaServed` (section 5), landing together with the repo audit's
   M1 fix since both touch the same JSON-LD blocks.
5. **Ship `public/llms.txt`** per the content spec in section 6 — trivial size,
   one-time.
6. **Decide and action the Google Business Profile question** (section 5) — not
   a PR, an operational task gated on Alex's call about reviews and the
   anonymity constraint on two of three case studies.
