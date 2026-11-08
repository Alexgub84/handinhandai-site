# Keyword briefs, construction programme — read from Google on 2026-11-05

New ten-article programme aimed at **construction companies in Israel** —
contractors (קבלני ביצוע), residential developers (יזמים), project-management
and supervision firms — replacing the solo-builder / vibe-coder targeting of
`docs/seo/content-programme-2026-11.md`. The positioning the owner set today:
this desk builds **real applications and management systems**, not small
automations. The reader we want is somebody inside a construction company,
mid-problem, searching for a way out.

**Source:** real Google (Hebrew UI, `hl=he&gl=il`, location Ramat Gan, Alex's
logged-in Chrome via the Chrome extension, fresh tab, closed afterwards).
**21 queries run** — the 15 seed queries plus 6 corrective or gap-filling
variants the real pages pointed to. Autocomplete was read from Google's own
suggest endpoint in the page context **before** the result page was judged, for
every query. No ads clicked, no sign-in, no captcha, no 429. "AIO" below means
Google's Hebrew **תקציר מ-AI** box; "PAA" means **אנשים שאלו גם**; "related"
means **אנשים חיפשו גם**. Where a box did not appear, that is stated.

A note on the headless browser: it is blocked by Google (429 / sorry page), so
every page here was read in the owner's real Chrome, as the project's CLAUDE.md
requires.

---

## 0. What this desk can prove, and what it may never say

Read before any of these articles is drafted. Sources:
`docs/seo/capability-ledger.md` (B2, B3, D1, D2, D3, E3 and the CONFIDENTIALITY
section), `docs/handoff/case-01-construction-qc.md`,
`docs/handoff/case-02-construction-ordering.md`.

### 0.1 Hard confidentiality rules (absolute, no exceptions)

- **Case 1 — residential-developer quality-control client.** The product ships
  on both app stores under the client's own developer account, so the product
  name *is* the client's identity. Never the product name, its real domain, a
  store link, a store badge, an alt text, a file name, or a commit message.
  The only permitted stand-ins are the generic descriptor `יזם בנייה למגורים`
  and the invented hostname `qc.site-control.co.il`.
- **Case 2 — materials-ordering / AI delivery-verification client.** Also
  anonymous, and must read as a **different, unrelated** client from case 1:
  `קבלן ביצוע`, `בנייה ותשתיות`. Invented hostname
  `orders.site-materials.co.il`.
- **No published figure may be invented or extrapolated and presented as
  measured.** The 2026-10-16 ruling removed every metric tile from both
  anonymous case cards: a figure a reader cannot verify costs more trust than
  it buys. **Therefore: every article drawing on cases 1 and 2 describes what
  the system does, not how much of it there was** — unless the client
  re-clears specific figures for publication. Case 2's annualised figures
  (1,800+ orders/year, 500+ shortages/year) are a run-rate projection from a
  75-day window and may only ever appear labelled as such.
- **Plumberg / Koma are NOT cleared for public naming.** The ledger names the
  product, its package id and its client (a construction company) because the
  ledger is internal. Only **Chillist** was explicitly cleared for public use
  (2026-10-15). Treat the D1/D2/D3 material as *anonymised operational
  experience* — the technique may be published, the client and product name may
  not, until the owner says otherwise. **This is an open approval question for
  the owner, flagged, not assumed.**
- Every app-publishing-service client is client material by default and may not
  appear even as a "for example."

### 0.2 First-hand material, mapped to topics

This is the deciding factor in the ranking below. A topic our own hands have
touched is worth more than a higher-volume topic they have not.

| Ledger | What we can speak to from experience | Feeds topics |
|---|---|---|
| **B2** | A field app that works with **no network at all** on site; checklists organised building → floor → apartment; a defect-fix cycle; a signature; a locked PDF report at the end; a separate office screen showing where every apartment stands; 4 full languages including RTL; two app-store apps plus a web system on one backend. Real structural scale handled on the first site (publishable only as "hundreds of apartments, thousands of inspection points", not as the figure). | 1, 2, 4, 5, 8 |
| **B3** | Orders raised from the site on a phone; purchase approval; the order sent to the supplier **over WhatsApp from inside the system**; an AI vision model that reads the **photographed delivery note** and reconciles it **line by line** against the original order; short and absent lines surfaced; 11 automatic notification triggers. Installable PWA, Hebrew, mobile-first. | 3, 6 |
| **D1** | A real legacy-to-new migration in construction QC: the old vendor's API had introspection disabled and had to be reverse-engineered from the compiled bundle; the page's own CSP blocked any direct export; every internal record id hashed to a stable short reference so ids survive the transfer; the import is **idempotent and reversible** — every script has an undo, writes are soft-deletes, and any unit type with no equivalent in the new system is **blocked and reported for a human decision rather than guessed**. Runs 1–2 hours at production scale. | 7, 2 |
| **D2** | Operating a construction management product in **daily** use: every production data change goes through an operator script calling the product's own domain function, stamped in the audit trail, dry-run by default; a real incident where a **successful-looking deploy ran on a broken database for half an hour** because the health check never touched the new columns; database access for a repair opens a temporary scoped network rule and closes it in the same breath, verified empty. | 2, 7, 9 |
| **D3** | Proof instead of a green test suite: a mutating action is never "passed" from a screenshot — it is UI result **plus** a backend log line **plus** a database row, in that order. The real client opens the app every working day and sends feedback after every release; every build reaches every internal tester the moment it is uploaded, so it never waits behind store review. | 2, 9, 10 |
| **E3** | The honest service shape: AI agents and WhatsApp bots on the **official** Meta Cloud API (distinguished from grey-market bridges), custom management systems for orders / inventory / quality control / CRM, MVP app builds, fractional CTO. And the honestly-reported fact that organic search has so far produced **zero** real inbound for this business — which is why this programme exists. | 2, 9, 10 |

### 0.3 Where we have **no** first-hand material

Said plainly so no article bluffs: **site safety** (בטיחות, בקר בטיחות,
תוכנית בטיחות, the 2025/2026 regulations reform), **BIM / 3D / drones /
360° capture**, **tendering and cost estimation** (מכרזים, כתב כמויות,
תמחור), **ERP finance** (budget control, subcontractor accounts,
חשבונות ביצוע), and **בדק בית as an inspection service**. These are large,
real demand pools that we would be guessing at. Where one of them appears
below, the verdict says so.

---

## 1. `site-management-software` — תוכנה לניהול אתר בנייה

**Primary query:** `תוכנה לניהול אתר בנייה`

**Secondary queries:** תוכנה לניהול פרויקטים בבניה, מערכת לניהול אתרי בנייה, אפליקציה לניהול אתר בנייה, תוכנה לניהול אתר בנייה בלי קליטה

**Autocomplete (read before judging the page):** only two suggestions, both
near-exact — `תוכנה לניהול אתר בנייה וניהול`, `תוכנה לניהול אתר בנייה`. A real
but narrow phrase: Google recognises it, nothing broadens it.

**AI Overview:** none.

**PAA:** none shown.

**Related searches:** תוכנה לניהול פרויקטים בבניה, תוכנה לניהול פרויקטים בבניה חינם, רמדור ניהול פרויקטים, רמדור כניסה, רמדור נט, טופ רמדור, רמדור מכרזים, רמדור תמיכה — **six of eight are Ramdor brand searches.** Ramdor owns the category's brand demand.

**Paid:** one sponsored result, **Insight Pro** (insight-pro.io) — "רכש, חוזים,
תקציב, חשבוניות, יומני עבודה ומלאי בפלטפורמה אחת לחברות בנייה", with the ad
copy "כל הזמנה מוצלבת לתעודת המשלוח ולחשבונית. כפילויות נתפסות ומשלמים רק על
מה שהגיע." **Somebody is paying money for our case-2 claim.** Worth knowing
before we write a word about delivery notes.

**Top organic:**
- websiteplanet.com — "6 התוכנות הטובות ביותר לניהול פרויקטי בניה ב-2026" (20 May 2023 — stale, and it lists monday.com / ClickUp / Jira, i.e. generic tools)
- ramdor.co.il — קונסטרו / רמדור 360, "מערכת ניהול אתרי בניה עם צילום 360 ומעקב BIM"
- benarit.com — תוכנה לניהול פרויקטים ומשימות
- probuild.co.il — PROBUILD
- civileng.co.il — תוכנות מקצועיות (a directory page)
- ziv.co.il — ERP for contractors
- projecteam.tools — generic project tool
- conqum-ltd.com — Conqum (Google flagged "חסר: אתר" — the page does not actually contain "אתר")
- building.org.il — "10 כלים ותוכנות שכל מנהל פרוייקטים חייב להכיר"

**Entities to be credible:** offline-first field capture, one backend serving a
phone app and an office screen, audit trail, Hebrew RTL, BIM and 360° capture
(named as what we do *not* do), monday.com/ClickUp as the generic alternative.

**Who ranks / what beats them:** nine vendor and directory pages, plus one
stale roundup that answers the question with generic project tools. **Nobody
writes editorially about the one thing that decides whether site software is
used at all: what happens when there is no signal on the floor.** Every vendor
page assumes connectivity. Our offline-first field app is the whole answer, and
it is first-hand.

**Verdict: CONTESTED.** A mature vendor field with strong brand gravity
(Ramdor), but zero editorial content on the question a site manager actually
has, and the incumbents' own pages cannot make the offline argument because
most of them are web dashboards.

---

## 2. `construction-inspection-app` — אפליקציה לפיקוח בנייה

**Primary query:** `אפליקציה לפיקוח בנייה`

**Secondary queries:** תוכנה לפיקוח בניה, אפליקציה לבדק בית, אפליקציית בנייה, דוח פיקוח בניה

**Autocomplete:** תוכנה לפיקוח בניה, אפליקציה לבניה, אפליקציה לבדק בית, אפליקציית בנייה, אפליקציה לבניית בית — **no exact-match suggestion**; Google rewrites the intent toward "תוכנה לפיקוח".

**AI Overview:** yes, and it **names four products in the first screen**:
רפורטו (Reporto), אינספקטרה (Inspectra), plus Inspector and Sabaza further
down. The Reporto description is unusually specific — "מאגר של מעל 1,000
ליקויים לפי תקנים, סימון על גבי תמונות, הפקת דוחות PDF ממותגים, חתימה
דיגיטלית וקישור ייעודי לעדכון סטטוסים על ידי קבלנים ללא צורך בססמה."

**PAA:** none shown.

**Related searches:** ריפורטו, ריפורטו טלפון, דוח פיקוח בניה, תוכנה לניהול פרויקטים בבניה חינם, Sabaza, דוק איט, אפליקציה לניהול בטיחות, בילי בדק בית — **Reporto appears twice as a brand search, including a support-intent one (טלפון).**

**Top organic:** reporto.co.il (twice — home and the פיקוח product page), a
third-party "Building Inspection" app on Google Play (3.0★, 24 ratings),
inspectorprojects.com, ramdor.co.il/apps, sabaza.com + its civileng.co.il
listing, app.arazim-eng.co.il ("מתמללים את הביקור בשטח ועורכים את הדו״ח בעזרת
בינה מלאכותית"), reject.co.il.

**Entities:** defect tied to a photo, status history, assignment to a
responsible party with a due date, a password-less link for the subcontractor,
locked PDF, Israeli standards references. **No product names, per the
anonymity rule.**

**Who ranks / what beats them:** eight-plus named, actively-marketed Israeli
products, one (Reporto) with real brand-search volume and an AI Overview that
recommends it by name. This is a mature vertical SaaS market, not a content
gap — and the same conclusion the 2026-11-04 briefs reached for the adjacent
spelling. Competing as "another inspection app" loses. The only thing we have
that they do not is a **delivery account**: what it actually took to put a
checklist on hundreds of apartments with no signal, and the operational
discipline behind it (D2, D3).

**Verdict: CROWDED.** Do not target this as a vertical bet. If it is written at
all, it is written as a teardown of a real build, not as a category page.

---

## 3. `material-order-reconciliation` — ניהול הזמנות חומרי בניין

**Primary query:** `ניהול הזמנות חומרי בניין`

**Secondary queries:** מערכת רכש לאתר בנייה, הזמנת חומרים מהאתר, חוסרים בתעודת משלוח, ניהול מלאי באתר בנייה

**Autocomplete:** the suggestions are Google's auto-generated location and
filler variants — `...תל אביב`, `...אונליין`, `...pdf`, `...בטווח של 1 מייל`,
`...בטווח של 0.2 מייל`. **That pattern means there is no real phrase volume**;
Google is padding. Treat the query as an intent, not a phrase.

**AI Overview:** yes, cited to punct.co.il, priority-software.com, telesto.app,
insight-pro.io, ramo.co.il. It describes the process as connecting field,
procurement and supplier.

**PAA:** none shown.

**Related searches:** only `פונקט יידיש` and `Punct` — i.e. one brand, and one
of the two is a misspelling cluster. Thin.

**Local pack:** Google serves a **map pack of building-materials shops**
(חומרי בנין בע"מ, א. אטלסוביץ ובניו, כל בו לבניין אמרוסי) **above** the
organic results. Part of this query reads to Google as "where do I buy
materials." Any article must be worded so it is not pulled into that
classification.

**Top organic:**
- punct.co.il (twice) — "מערכת לניהול רכש בעולם הבנייה", and explicitly
  **"התאמת תעודות משלוח לאספקת החומרים בפועל"** — the closest competitor to
  our case-2 claim anywhere on this page
- priority-software.com — ERP for building-materials *retailers*
- ramo.co.il — "חומרי בניין למשלוח: איך מארגנים הזמנה חכמה" (6 days old, and
  Google flagged "חסר: ניהול")
- keeperforms.co.il — "ניהול מלאי חומרים ומחסן באתר בנייה: מה מאוחסן, מי מוציא"
- erp.co.il (SIMO), telesto.app, centoro.com, mmn.co.il (dibble)

**Entities:** תעודת משלוח, הזמנת רכש, אישור רכש, שורות הזמנה, חוסרים, OCR vs a
vision model, WhatsApp as the supplier channel.

**Who ranks / what beats them:** PUNCT claims delivery-note matching on its own
site and Insight Pro buys ads for it, so the *claim* is contested. But neither
publishes a **first-hand account of a vision model reading a photographed
delivery note and reconciling it line by line against the order, and what it
gets wrong**. That is case 2, measured in production over a real field window,
and it is the single strongest piece of material this desk owns for this
audience.

**Verdict: CONTESTED.** Real intent, no real phrase, a local-pack hazard, two
competitors circling the same claim — and a first-hand account nobody else can
write.

---

## 4. `handover-protocol` — פרוטוקול מסירת דירה

**Primary query:** `פרוטוקול מסירת דירה`

**Secondary queries:** טופס פרוטוקול מסירת דירה מקבלן, פרוטוקול מסירה ראשוני, פרוטוקול מסירת דירה חדשה מקבלן, ניהול מסירת דירות

**Autocomplete:** ten suggestions, all exact-prefix — `...יד שניה`, `...מקבלן`,
`...שכירות`, `...pdf`, `...בשכירות`, `...לדוגמא`, `...חדשה מקבלן`, `...לשוכר`,
`...מושכרת`. **The strongest, most clearly real demand signal of all 21
queries.** Intent splits three ways: rental handover, second-hand apartment,
and new-from-contractor.

**AI Overview:** yes, cited to elkayamlaw.co.il, dsegev-law.co.il, aac-law.co.il,
nadlancenter.co.il, gov.il, kolzchut.org.il, m-dlaw.co.il, lt-law.co.il —
**seven of eight sources are law firms or statutory sites.**

**PAA:** none shown.

**Related searches:** פרוטוקול מסירת דירה שכורה, ...יד שניה, פרוטוקול מסירה pdf,
**טופס פרוטוקול מסירת דירה מקבלן**, ...יד שנייה pdf, פרוטוקול מסירה דוגמא,
פרוטוקול מסירה doc, **פרוטוקול מסירה ראשוני** — strong template-download intent
plus a clear contractor-side cut.

**Top organic:** nadlancenter.co.il ("המדריך השלם לשנת 2026", 10 May 2026, and
the only page that explains the **two** protocols — ראשוני and מסירת חזקה),
dsegev-law.co.il (a PDF form), elkayamlaw.co.il, **keeperforms.co.il** ("הסיור
עם הקונה, הליקויים והחתימה" — the one page written from the contractor's side),
reporto.co.il glossary, s-sarfati.co.il, a gov.il DOCX form, aac-law.co.il.

**Entities:** פרוטוקול מסירה ראשוני vs מסירת חזקה, אי-התאמה, חוק המכר (דירות),
רשימת ליקויים גלויים, מדידות שטח, תעודות אחריות, signature, locked PDF.

**Who ranks / what beats them:** the page is owned by lawyers writing for the
**buyer**. Exactly two pages (Keeper, Reporto) address the side that actually
runs the handover. And **nobody at all** addresses the operational version of
the question: how a developer runs hundreds of handovers in sequence — which
apartment is ready, who signed what, which defect reopened, and how the
protocol comes out as a document that cannot be edited afterwards. That is
case 1's signature-and-locked-PDF cycle plus the office matrix, first-hand.

**Verdict: CONTESTED.** The highest real demand on the list, a buyer-skewed
page one, and a contractor-side operational angle with two weak incumbents.

---

## 5. `defect-cycle-on-site` — ניהול ליקויים באתר בנייה

**Primary query:** `ניהול ליקויים באתר בנייה` — **this is the corrected query.**
The seed query `ניהול ליקויי בנייה` is a different topic; see §13.

**Secondary queries:** מעקב ליקויים בשטח, סגירת ליקוי באתר בנייה, הקצאת ליקוי לקבלן משנה, בקרת ביצוע באתר

**Autocomplete:** no exact match — ניהול אתר בניה, ניהול אתרי בניה, ניהול
פרוייקטים בנייה, ניהול בניין אפליקציה, ניהול פרויקטי בנייה. Low literal volume
for the phrase; the demand sits in the neighbouring phrases.

**AI Overview:** yes, cited to reporto.co.il, webuildsafe.com, keeperforms.co.il,
gov.il, consworkers.co.il, bob.co.il, facebook.com, kolzchut.org.il. It
describes identify → document with a photo and a standards reference → assign →
track → verify. **Note the drift:** Google blends construction defects with
*safety* defects.

**PAA:** none shown. **Related searches:** none shown.

**Top organic:**
- reporto.co.il — **"איך מנהלים ליקויים באתר בנייה — שיטת עבודה למפקחים ב-2026"
  (20 Apr 2026)** — the exact angle, fresh, by the category leader
- keeperforms.co.il — "תוכנית לניהול הבטיחות באתר בנייה" (16 Oct 2026)
- safetyeng.co.il — "10 ליקויי בטיחות נפוצים באתרי בנייה" (2026 guide)
- building.org.il — "טעויות נפוצות בניהול אתרי בנייה"
- consworkers.co.il — "בקר בטיחות באתר בנייה: המדריך השלם" (5 Oct 2026), which
  name-drops **buildnav**, a contractor CRM not seen on any other query
- inspectorprojects.com, webuildsafe.com (23 Dec 2025)
- gov.il — "תקנות הבטיחות בעבודה (עבודות בנייה) [תיקון], תשפ"ו-2025", 26-page
  pocket book
- osh.org.il — self-audit guide, 37-page PDF

**Entities:** ליקוי, סטטוס, אחראי, תאריך יעד, בדיקת תיקון, תקן ישראלי, photo
evidence, reopened defect.

**Who ranks / what beats them:** Reporto already owns this exact angle with a
2026 piece written for מפקחים. What it cannot write is the thing that breaks a
defect cycle in practice at volume: a defect raised with no signal that must
survive a phone going offline for hours, reopened items, and the point at which
the cycle stops being a list and becomes a system. First-hand from case 1.

**Verdict: CONTESTED.** One strong, fresh, precisely-matched incumbent; a real
angle left over; low literal phrase volume, so this one earns its traffic from
the neighbourhood rather than from the exact string.

---

## 6. `custom-vs-off-the-shelf` — מערכת מדף או פיתוח מותאם

**Primary query:** `מערכת מדף או פיתוח מותאם` (to be cut to construction — see
below)

**Secondary queries:** מערכת מדף או פיתוח מותאם אישית, תוכנה מותאמת אישית מול מערכת מדף, מערכת ניהול לחברת בנייה, מתי כדאי לפתח מערכת

**Autocomplete:** one suggestion only — `מערכת מדף או פיתוח מותאם אישית`. A
recognised phrase with narrow volume.

**AI Overview:** yes, cited to aiterra.co.il, zah-orni.co.il, logicode.biz,
digitise.co.il, oversight.co.il, kamitech.co.il, unit01.co.il. It names
**Monday, Zoho, Fireberry** as the off-the-shelf options and quotes monthly
per-user pricing.

**PAA:** none. **Related searches:** none shown.

**Top organic — nine Hebrew agency blogs, most from 2026:** digitise.co.il,
oversight.co.il, aiterra.co.il (9 Oct 2026), unit01.co.il (25 Aug 2026),
kamitech.co.il (2 Oct 2026), fernet.co.il, logicode.biz (25 Apr 2026),
ravidigitals.co.il (26 Aug 2026), zah-orni.co.il (4 Aug 2026 — and notably it
*is* vertical: "תוכנת שקילה: מדף או פיתוח אישי?").

**Entities:** Monday, Zoho, Fireberry, Priority, Ramdor, per-seat subscription
cost at 40 site users, workarounds, deep integration, who owns the data.

**Who ranks / what beats them:** the generic question is thoroughly answered by
nine competent agencies, so the generic query is **CROWDED** and not worth
entering. **But not one of them cuts it to a vertical** except a weighing-software
page — and the construction cut is the owner's actual positioning: when does a
construction company stop bending Monday and Ramdor around its process and
build the thing. We can argue it from three real systems plus a migration *off*
a vendor product (D1), which is the one argument an agency with no vertical
work cannot make.

**Verdict: CROWDED generically, OPEN on the construction cut.** Target
`מערכת ניהול לחברת בנייה` / `מערכת מדף או מערכת שנבנית לחברת בנייה`, not the
bare generic phrase. See also §14 — the vendor-only page for the
construction-specific query is what makes this openable.

---

## 7. `legacy-migration` — מעבר ממערכת ישנה והעברת נתונים

**Primary query:** `מעבר ממערכת ישנה למערכת חדשה העברת נתונים`

**Secondary queries:** הסבת נתונים, העברת נתונים בלי לאבד היסטוריה, איך עוברים ממערכת בקרת איכות ישנה, data migration בעברית

**Autocomplete:** **zero recognition** — every suggestion was about electricity
meters (מעבר למונה חכם, מעבר מונה חשמל, מעבר למצב שינה, מעבר חשמל ללא מונה
חכם, מעבר למונה חכם חברת החשמל). The phrase has no volume as typed. Demand
exists under `הסבת נתונים` / `העברת נתונים למערכת חדשה`, which the organic
results confirm.

**AI Overview:** yes, cited to ramkedem.com, logicflow-agency.co.il,
careos.co.il, reddit.com. It makes the right point — that an old system
tolerates everything (notes inside phone fields, duplicate customers) and a new
one demands structure.

**PAA:** none. **Related searches:** גיבוי מחשב, מיקרוסופט גיבוי, גיבוי מחשב
לדיסק חיצוני — **Google is half-classifying this as consumer PC backup.**

**Top organic — split page:** four real B2B guides —
logicflow-agency.co.il (20 Oct 2026), veltira.io ("רשימת בדיקה לפני"),
sys-tech.co.il (names zero-downtime migration), careos.co.il (15 Aug 2026) —
alongside consumer noise (Microsoft Support, ptc-j.com, Samsung Smart Switch)
and a two-year-old Reddit r/dataengineering thread in Hebrew.

**Entities:** הסבת נתונים, מיפוי שדות, soft delete, idempotent import, undo
script, blocked unmapped records, GraphQL introspection, CSP, zero-downtime
cutover.

**Who ranks / what beats them:** four generic guides, none vertical, none with a
named real migration behind it. D1 is extraordinary material — reverse-engineering
an undocumented vendor API out of a compiled bundle because the page's own CSP
blocked any export, hashing every record id so it survives the transfer, an undo
script for every import, and a hard rule that an unmappable unit type is
**blocked and reported for a human decision rather than guessed**. Nobody in
this market has published anything like it, and for a construction company
already locked into a vendor product this is the article that makes them call.

**Verdict: CONTESTED.** No phrase volume as typed and a consumer-classification
hazard, offset by the most defensible first-hand content on the whole list.
Must be targeted on `הסבת נתונים` / the construction-specific phrasing, not the
literal seed string.

---

## 8. `quality-control-spec` — בקרת איכות בבנייה

**Primary query:** `בקרת איכות בבנייה`

**Secondary queries:** מפרט כללי לבקרת איכות, בקרת איכות עצמית של הקבלן, הבטחת איכות בבנייה, בקרת איכות בפרויקט בניה

**Autocomplete:** בקרת איכות בנייה, **דרושים** בקרת איכות בנייה, בקרת איכות
בניין, בקרת איכות בניה, בקרת איכות בענף הבניה, בקרת איכות בבנייה. Google also
offered a spelling swap (`בנייה` ↔ `בבנייה`). Note the jobs suggestion.

**AI Overview:** yes, cited to civileng.co.il, bst.co.il, reporto.co.il, gov.il,
squadex.co.il, calibrate-bakara.co.il, inspectorprojects.com, jakoboviz.co.il,
he.wikipedia.org, ramdor.co.il — ten sources, the widest citation set on the
list.

**PAA (present, and partly off-target):** מהי הבטחת איכות? / מה ההבדל בין בקרת
איכות לבין הבטחת איכות? / מה תפקידו של קבלן בניין? / מהן עלויות הבנייה
הממוצעות לשנת 2026?

**Related searches:** בקרת איכות בבניה **דרושים**, בקרת איכות **שכר**, בקרת
איכות **לימודים**, חברות בקרת איכות בבניה, בקרת איכות דרושים, **מפרט כללי בקרת
איכות** — five of six are jobs, salary or training. Intent is badly mixed.

**Top organic:** ramdor.co.il quality module (co-built with שיכון ובינוי),
**gov.il — "מפרט כללי לבקרת איכות בביצוע הקבלן", a 54-page PDF** (the
regulatory anchor), civileng.co.il ("בקרת איכות, הבטחת איכות ומה שביניהן"),
reporto.co.il/sites, epstein.co.il, conqum-ltd.com, squadex.co.il,
calibrate-bakara.co.il, inspectorprojects.com.

**Entities:** מפרט כללי, בקרת איכות עצמית, הבטחת איכות, פרוטוקולי ביצוע,
מסמכים ישימים, תקנים, audit trail.

**Who ranks / what beats them:** service firms selling quality control, two
product modules, and the official 54-page spec sitting there unexplained. The
unclaimed article is the **regulatory explainer**: what the מפרט כללי actually
obliges a contractor to record, and what that means for the system that records
it — which protocols must exist, what has to be reconstructible later, and why
an audit trail is a legal artefact, not a feature. We can back the system half
first-hand (B2 for the checklist structure, D2 for the audit-trail discipline);
we cannot back the quality-engineering half, so the article must stay on the
documentation side of the line.

**Verdict: CONTESTED.** Decent demand diluted by jobs and training intent; the
regulatory explainer angle is genuinely unoccupied.

---

## 9. `work-log` — יומן עבודה באתר בנייה

**Primary query:** `יומן עבודה באתר בנייה`

**Secondary queries:** יומן עבודה לקבלן, יומן עבודה דיגיטלי, יומן עבודה מנהל עבודה, יומן עבודה להורדה

**Autocomplete:** יומן עבודה באתר בנייה **משמש**, יומן עבודה באתר בנייה, יומן
עבודה באתר בניה, יומן עבודה אתר בנייה, יומן עבודה באתר. Real exact-match
recognition. The "משמש" variant is an exam-style question (quizme.co.il ranks
for it).

**AI Overview:** yes — long, structured, and it ends by **asking the user back**
("האם אתה מחפש תבנית להורדה לשימוש יומי, או מידע על מערכת דיגיטלית?"). Cited to
gov.il, reporto.co.il, civileng.co.il, phantom-mp.co.il, keeperforms.co.il,
dekel.co.il, ramdor.co.il, inspectorprojects.com, app.arazim-eng.co.il. It
states the legal weight plainly: the log is evidence and **overrides oral
testimony** in a dispute.

**PAA:** not as a separate box; Reporto's result carried two inline questions
(מי בעצם חייב לנהל יומן עבודה? / מה המעמד המשפטי של יומן עבודה?).

**Related searches:** יומן עבודה יומי להורדה, להדפסה, לקבלן, **דיגיטלי**,
דיגיטלי חינם, חודשי, דיגיטלי לקבלן, מנהל עבודה — a clean split between
"give me a printable template" and "give me a system".

**Top organic:** civileng.co.il PDF template, **reporto.co.il "חובות, מבנה
ודוגמאות 2026" (30 Apr 2026)**, keeperforms.co.il, dekel.co.il,
phantom-mp.co.il (free template, no signup), inspectorprojects.com,
quizme.co.il, app.arazim-eng.co.il (20 Oct 2026).

**Entities:** מנהל עבודה, מזג אוויר, מצבת עובדים לפי מקצוע, ציוד, חומרים
שסופקו, בדיקות מעבדה, אירועים חריגים, חתימה דיגיטלית, legal evidentiary weight.

**Who ranks / what beats them:** seven real incumbents, two of them published in
the last six months, plus free templates that satisfy the download half of the
intent outright. This is the most thoroughly covered of the professional
queries. Our leftover angle is narrow but real and first-hand: a log entry
written with no signal and signed on the phone is only evidence if you can
prove *when* it was written and that nobody changed it afterwards — which is
D2/D3 territory (audit trail, operator-script discipline, proof by log line and
database row, not by screenshot).

**Verdict: CROWDED.** Rank it low. Worth writing only as the narrow
evidence-integrity cut, never as "what goes in a work log".

---

## 10. `subcontractor-management` — ניהול קבלני משנה

**Primary query:** `ניהול קבלני משנה`

**Secondary queries:** מערכת לניהול קבלני משנה, התקשרות עם קבלן משנה, מעקב ביצוע קבלני משנה, אישור עבודה לקבלן משנה

**Autocomplete:** ניהול קבלני משנה, ניהול קבלנים, מנהל קבלני משנה, קבלני משנה
מה זה, קבלני משנה. Exact match present; "מה זה" suggests a chunk of the demand
is definitional.

**AI Overview:** yes, but **thin — a single cited source**, manor-opex.co.il
(and it generalises to industry and logistics, not just construction).

**PAA:** none.

**Related searches:** קבלני ביצוע, קבלני בניין, רשימת קבלן שירות, **Conwize**,
קבלנים מובילים בישראל, מאגר קבלנים, חברות בניה גדולות במרכז, רשימת חברות בניה
בישראל — mostly directory intent, which is a different need.

**Top organic — a genuinely weak page:** quintadb.com (a generic no-code
platform, foreign), conwize.co.il (tendering/pricing, adjacent not core),
exayard.com (27 Mar 2026, a translated foreign blog — the Hebrew reads as
machine-translated: "ויתורים על זכויות עיקול"), siempre.co.il,
**drushim.co.il and jobify360.co.il — two job-board pages on page one**,
college.benarit.com (an ERP training module), help.visitt.io (a *help-centre
article*, 25 Aug 2026), manor-opex.co.il.

**Entities:** התקשרות, חשבון ביצוע, אישור עבודה, מעקב סטטוס, אחראי לליקוי,
תעודת ביטוח, approval chain.

**Who ranks / what beats them:** no Hebrew editorial incumbent at all. Two of
nine results are job boards and one is a product help page, which is what a weak
field looks like. Our material is partial: we can speak first-hand to assigning
a defect to the responsible party and closing the loop with proof (case 1), and
to an approval chain that reaches an outside party over WhatsApp from inside the
system (case 2). We cannot speak to subcontractor **contracts, payments or
insurance**, which is a large part of what the reader wants.

**Verdict: OPEN on the editorial angle, with a demand caveat.** The content gap
is real, but a third of the demand is job-seekers and directory-hunters, and our
coverage of the topic is half, not whole. Say so in the article rather than
padding the contract-and-payment half.

---

## 11. `bedek-year` — שנת בדק

**Primary query:** `שנת בדק`

**Secondary queries:** תיקוני שנת בדק, אחריות שנת בדק, שנת בדק קבלן, תקופת בדק חוק המכר

**Autocomplete:** ten suggestions, all exact-prefix — שנת בדק, **...חוק המכר**,
...כל זכות, **...קבלן**, ...בית, מהי שנת בדק, **תיקוני שנת בדק**, **אחריות שנת
בדק**, מה זה שנת בדק, ...באנגלית. Strong, real, well-understood demand.

**AI Overview:** yes, cited to kolzchut.org.il, midrag.co.il, kolodnylaw.co.il,
pro-eng.co.il, civileng.co.il. It makes a sharp legal point: during תקופת הבדק
the burden is **on the contractor** to show the defect was the owner's fault,
not the reverse.

**PAA:** none shown.

**Related searches:** שנת בדק חוק המכר, חוק המכר אחריות קבלן, חוק הבדק, חוק
המכר דירות pdf, חוק המכר דירות הבטחת השקעות, אחריות קבלן דירה חדשה, בדק בית,
חוק המכר דירות אחריות — **entirely statutory and buyer-side.**

**Top organic:** kolzchut.org.il (19 Oct 2026), midrag.co.il (which makes the
useful distinction that "שנת בדק" is not a legal term at all, only a settled
norm, while "תקופת בדק" is), **reporto.co.il "שנת הבדק ותקופת האחריות: המדריך
המלא 2026" (14 Apr 2026)**, pro-eng.co.il (22 Jul 2025), civileng.co.il,
hadas-bedek.co.il, bam.co.il, kolodnylaw.co.il (18 Aug 2026), ofarimltd.co.il.

**Entities:** חוק המכר (דירות), תקופת בדק (one to seven years by component),
תקופת אחריות, הודעה לקבלן, הוכחת אשם, פרוטוקול מסירה as the start date.

**Who ranks / what beats them:** page one belongs to כל-זכות, law firms and
home-inspection firms writing for the apartment owner. The contractor's side of
the same year — hundreds of residents' repair requests arriving at once, each
with a statutory clock attached to a *component*, each needing a record of when
it was reported and when it was answered — is unwritten by anyone. We can back
the operational half first-hand (case 1's defect-fix cycle and locked report,
D2's audit trail); we cannot back the legal half beyond quoting the statute and
the sources above.

**Verdict: CROWDED on the consumer query.** Only viable retargeted at the
contractor —`ניהול תיקוני שנת בדק` / `איך קבלן מנהל שנת בדק` — and even then it
will attract buyers. Rank mid, write carefully, never pose as legal advice.

---

## 12. `safety-reporting` — דיווח בטיחות באתר בנייה

**Primary query:** `דיווח בטיחות באתר בנייה`

**Autocomplete:** דיווח בטיחות באתר בנייה, ...לא חוקית, ...בלתי מוסדר,
...הגדרה. Exact match present, low volume, and two of four suggestions are
about reporting an *illegal* site — a civilian-complaint intent.

**AI Overview:** yes, cited to gov.il and kolzchut.org.il only. It describes the
Ministry of Labour's **new online reporting services** under the amended
construction-safety regulations.

**PAA:** none.

**Related searches:** מינוי מנהל עבודה באתר בניה, הודעה על פעולות בניה ומינוי
מנהל עבודה, החלפת מנהל עבודה באתר בניה, **בקר בטיחות באתר בנייה**, מינוי בקר
בטיחות, מינוי מנהל עבודה משרד העבודה, הודעה על מינוי בקר בטיחות, בקר בטיחות
תקנות — **all eight are about appointing and reporting role-holders.** That is
the live demand, and it is regulatory, not technological.

**Top organic:** **gov.il — "פורסמו שירותים מקוונים חדשים לדיווח בתחום בטיחות
באתרי בנייה" (15 Oct 2026, three weeks old)**, kolzchut.org.il (18 Mar 2025),
a second gov.il service page, **reporto.co.il — "בקר בטיחות: מי ממנה, מה בודקים
ותוך כמה זמן מדווחים (2026)" (25 Oct 2026)** which already carries the
48-hour written-response rule, osh.org.il קו החיים, haregulator.co.il,
a Facebook thread in הקבוצה למאבק בתאונות בניין ותעשייה,
weller-law-office.com (20 Aug 2026, on the מזמין העבודה liability reform).

**Entities:** בקר בטיחות, מנהל עבודה, מזמין העבודה, תוכנית בטיחות, פנקס כללי,
תקנות הבטיחות בעבודה (עבודות בנייה) תשפ"ו-2025, ההזדהות הלאומית, 48-hour
written response.

**Who ranks / what beats them:** the state's own freshly-published service
pages, a law firm on the liability reform, and Reporto already there three weeks
ago. **And we have no first-hand safety material whatsoever** — §0.3. Writing
this would mean summarising regulations we have never implemented against, which
is precisely the failure mode the programme's fact discipline forbids.

**Verdict: CONTESTED by content, but DISQUALIFIED by our own experience.**
High urgency in the market, nothing behind it from this desk. Do not rank it
high, and do not write it as a regulatory guide. The only honest version is
narrow: what a reporting obligation with a statutory clock demands of the system
that records it.

---

## 13. `defect-claims` — ניהול ליקויי בנייה *(seed query, wrong audience)*

**Primary query as seeded:** `ניהול ליקויי בנייה` — **this is the wrong query
for a construction company.** It belongs to the apartment owner suing one.

**Autocomplete, which gives it away:** ניהול ליקויי בנייה רמת גן, ...עיריית תל
אביב, ...בישראל, ...ספר, **...עו ד**, **...אחריות קבלן**, **...עורך דין**,
**...תביעות קטנות**. Four of nine are legal-action intent.

**AI Overview:** yes, cited to reporto.co.il, agalor.co.il, strn.co.il,
and its described process is: find a defect with a certified engineer → get an
engineering opinion with repair costs → demand repair from the contractor in
writing → supervise the repairs → **exhaust legal remedies**.

**PAA:** none. **Related searches:** none shown.

**Top organic:** inspect-in.co.il, agalor.co.il (28 years of defect detection),
prlaw.co.il ("עורך דין ליקויי בנייה"), reporto.co.il's professional piece
(the one exception), dnengineering.co.il, strn.co.il (23 Feb 2026, "מדריך
משפטי מקיף לרוכשי דירות"), aac-law.co.il, cohenaviram-law.co.il, dvl.co.il,
plus a Google Scholar block that returned a 15th-century rabbinic text
(*Sefer ha-Tashbetz*) — a sign Google has no academic corpus for the phrase.

**Verdict: CROWDED, and the wrong topic.** Six of nine results are law firms or
inspection services selling to the buyer. **Use `ניהול ליקויים באתר בנייה`
instead (§5).** Keep this phrase out of the H1 and out of the primary query
field; at most it is a secondary mention.

---

## 14. `construction-company-system` — מערכת ניהול לחברת בנייה

**Primary query:** `מערכת ניהול לחברת בנייה`

**Autocomplete:** three suggestions, two of them Google's auto-generated filler
(`...תל אביב`, `...בע"מ`) plus the exact phrase. Low real volume as a string.

**AI Overview:** yes, but cited to **one source only** (civileng.co.il) while
naming **Priority ERP** and **בנארית** in its text — an AI Overview doing
vendor-comparison work off a single citation.

**PAA:** none. **Related searches:** תוכנה לניהול פרויקטים בבניה, רמדור ניהול
פרויקטים, תוכנה לניהול פרויקטים בבניה חינם, זיו ניהול פרויקטים להורדה, טופ
רמדור, רמדור כניסה, רמדור נט, רמדור מכרזים — **five of eight are Ramdor.**

**Top organic — vendors only:** probuild.co.il, ramdor.co.il,
darimpo.com, websiteplanet.com (the stale 2023 roundup again),
building.org.il, priority-software.com, ziv.co.il, keeperforms.co.il,
civileng.co.il (Build-e).

**Who ranks / what beats them:** nine vendor pages and one stale roundup.
**There is not a single editorial page** answering the question a construction
company actually asks before it buys: do we take a system off the shelf, or do
we have one built around how we already work — and what does each cost over
three years at 40 site users. This is the construction cut of §6, and it is the
cleanest opening for the owner's new positioning.

**Verdict: OPEN** for the decision-guide angle; CROWDED-by-vendors for the
literal product query, which is not competable with a content page.

---

## 15. `contractor-software` — תוכנה לקבלנים

**Primary query:** `תוכנה לקבלנים`

**Autocomplete:** תוכנה לקבלנים is returned first, but the rest drift to
receipts and invoicing (תוכנה לקבלות, תוכנה לקבלות עוסק פטור, תוכנה לקליניקה,
תוכנה חינמית לקבלות) — Google partly hears "קבלות", not "קבלנים".

**AI Overview:** yes, cited to keeperforms.co.il, ramdor.co.il, conwize.co.il,
cloud.dekel.co.il, facebook.com, rvm.co.il, medatech.com, ziv.co.il,
**insight-pro.io**, greeninvoice.co.il. It segments by business size and leads
with קיפר (Keeper) for the field-diary need.

**PAA:** none. **Related searches:** תוכנה לניהול פרויקטים בבניה חינם, מערכת
שיתוף קבצים, מערכת זיו כניסה, טופ רמדור, טופ רמדור ח פ, יומן עבודה דיגיטלי,
תחזוקנית כניסה, ExtrAXION.

**Paid:** **Insight Pro again**, with a sharper ad this time — "צ'אט AI במקום
הדרכה", "אפליקציה לשטח בלי התקנה", and the same delivery-note cross-check
claim. Two of our 21 queries carry their ads; they are the active advertiser in
this space.

**Top organic:** ramdor.co.il, rvm.co.il ("5 תוכנות מובילות"), ziv.co.il,
greeninvoice.co.il/morning, rog-tech.com, medatech.com (Priority),
conwize.co.il, keeperforms.co.il, insight-pro.io.

**Verdict: CROWDED.** Nine vendors plus ERP houses plus a paying advertiser, and
Google's own confusion with "קבלות" on top. The head term of the category; not
winnable with an article and not worth the attempt.

---

## 16. `construction-project-management` — ניהול פרויקטים בבנייה *(seed query, wrong topic)*

**Primary query as seeded:** `ניהול פרויקטים בבנייה`

**Autocomplete:** ניהול פרויקטים בבנייה, **...טכניון**, **...דרושים**, **קורס**
ניהול פרויקטים בבנייה, ניהול ופיקוח פרויקטים בבנייה, **חברות** ניהול פרויקטים
בבנייה, ...בבניה, **...בבניה קורס**, **...בבניה לימודים**, ...ותשתיות.

**AI Overview:** yes, cited to cont-edu.technion.ac.il, midrag.co.il,
b-apm.co.il, clb.ac.il, icpm.co.il, study.co.il, ashmoret.com, pamniv.co.il,
frontal.co.il, cpm.co.il — **academies, supervision firms and course
providers. Not one software product.**

**Related searches:** חברות ניהול פרויקטים בבניה, **קורס** ניהול פרויקטים בבניה,
קורס ...הטכניון, מנהל פרויקטים בבניה **שכר**, ...**דרושים**, **כמה עולה קורס**
ניהול פרויקטים בבניה, קורס ניהול פרויקטים משרד העבודה, קורס ניהול פרויקטים
אונליין חינם — **eight of eight are courses, jobs or salary.**

**Top organic:** pamniv.co.il, midrag.co.il, Technion continuing education,
cpm.co.il, a local pack of supervision engineers, b-apm.co.il, civileng.co.il,
study.co.il, icpm.co.il — plus a video block of podcasts.

**Verdict: CROWDED and misclassified.** Google reads this as "where do I study
project management / who do I hire to supervise / what does it pay", not as
software. **Drop it from the programme.** Any software intent lives at
`תוכנה לניהול פרויקטים בבניה`, which is §1/§15 territory.

---

## 17. `defect-form` — טופס ליקויי בנייה *(seed query, wrong audience)*

**Primary query as seeded:** `טופס ליקויי בנייה`

**Autocomplete:** ...עיריית תל אביב, ...מקוונת, ...בישראל, **...אחריות קבלן**,
**...תביעות קטנות**, ...ספר, **...עו ד**, **...עורך דין** — the same legal
cluster as §13.

**AI Overview:** yes, and it opens by **equating the term with a בדק בית
report**: "דוח ליקויי בנייה (המוכר גם כטופס בדק בית) הוא מסמך הנדסי מקצועי
המופק על ידי מהנדס מומחה או חברת בדק בית". Cited to reporto.co.il, bhamim.co.il,
elganengineering.co.il, at-terminal.co.il, bedek-mivnim.co.il, aradeng.com,
100bedek.co.il.

**PAA:** none. **Related searches:** דוח בדק בית לדוגמא, דוח בדק בית pdf, דוח
בדק בית להורדה, צ'ק ליסט בדק בית, בדק בית דוח, Reporto, פלס בדק בית, הדס בדק
בית — download intent for a **buyer's** inspection report.

**Top organic:** aradeng.com, **peles-group.co.il — "ממה מורכב טופס ליקויי בניה
לקבלן"**, the one contractor-facing page, hadas-bedek.co.il,
shahar-bedek.co.il (which publishes prices: ₪1,500–2,000 for an apartment,
₪2,000–3,500 for a house), bedek-mivnim.co.il, reporto.co.il glossary,
elganengineering.co.il, 100bedek.co.il.

**Verdict: CROWDED, wrong audience.** This is the home-inspection industry's
own keyword. A construction company does not search for it.
**The right query for the same underlying need is `פרוטוקול מסירת דירה` (§4) or
`ניהול ליקויים באתר בנייה` (§5).** Drop the phrase.

---

## 18. `apartment-handover-operation` — ניהול מסירת דירות

**Primary query:** `ניהול מסירת דירות`

**Autocomplete:** ניהול מסירת דירות **שנמכרו**, ניהול מסירת דירות, ניהול מסירת
דירות **קבלן** — small, but every suggestion is contractor-side. A clean signal
with little volume.

**AI Overview:** yes, cited to nadlancenter.co.il, reporto.co.il, yonilevy.co.il,
gov.il, keeperforms.co.il, midrag.co.il, orpro.co.il. It splits the handover
into a pre-handover stage and a final one.

**PAA:** none. **Related searches:** identical to §4's set — Google treats this
as the same cluster as `פרוטוקול מסירת דירה`.

**Top organic:** nadlancenter.co.il, **ramdor.co.il "פרוטוקול מסירת דירה - ניהול
הדייר" — the תיק דייר product, ranking second**, reporto.co.il,
keeperforms.co.il, elramlaw.co.il (10 Sep 2026), orpro.co.il (11 Jan 2026),
diffe-rent.co.il, m-dlaw.co.il, midrag.co.il.

**Who ranks / what beats them:** this is §4's demand with the operational
wording, and the page reflects it — one vendor product (Ramdor's tenant file)
and two product-side guides among buyer content. Still nobody describes running
handovers **as an operation at volume**: readiness per apartment, scheduling,
who signed, what reopened, and a document that cannot be altered after signing.

**Verdict: CONTESTED.** Low standalone volume; best treated as the secondary
query under §4 rather than a separate article.

---

## 19. `system-cost` — כמה עולה לפתח מערכת ניהול

**Primary query:** `כמה עולה לפתח מערכת ניהול`

**Autocomplete:** one suggestion, and it is unrelated — `כמה עולה לפתח מערכת
ניהול **ספרים**` (bookkeeping). The phrase has no volume as typed, though the
organic page shows the intent is very much alive.

**AI Overview:** yes, cited to codit.co.il, aiterra.co.il, horizon.org.il, and
it publishes hard ranges: ₪15,000–65,000 for an internal tool, ₪80,000–180,000
for a business system or full MVP, ₪180,000–450,000+ for a multi-module
platform.

**PAA:** none. **Related searches:** none shown.

**Top organic — nine agency price guides, nearly all 2026:** start-app.co.il
(15 Oct 2026, with a three-year total of ~₪90,200), aiterra.co.il (9 Oct 2026),
igates.co.il (1 Oct 2026, ₪45,000–150,000 for an MVP), iqdesk.co.il (undercuts
openly: "25,000–40,000 במקום 80,000–150,000"), maybel.io (4 Aug 2026),
horizon.org.il (27 Sep 2026), wetech.co.il (15 Feb 2026), kamitech.co.il
(23 Sep 2026), mrcoral.co.il.

**Who ranks / what beats them:** a price war in article form. Everyone publishes
a range; nobody publishes what a real delivery actually looked like end to end
for a construction client, which is what makes a range believable. We have that
(case 1: a first commit to two app stores plus an office web system, one
backend, four languages — a timeline we can state because we lived it, with no
client-identifying detail and no invented figure).

**Verdict: CROWDED** on the generic phrase. Viable only as the construction cut
(`כמה עולה מערכת לחברת בנייה`), and only if it carries a real delivery account
rather than another range table. Rank low.

---

## 20. `digitisation` — דיגיטציה בענף הבנייה

**Primary query:** `דיגיטציה בענף הבנייה`

**Autocomplete:** **one suggestion only** — `דיגיטציה בענף הבנייה pdf`. Almost
no search volume, and what there is wants a document.

**AI Overview:** yes, cited to hackathons.co.il, bmmeng.co.il, wdi.co.il,
y-tech.net. It opens with "ConTech" and quotes schedule reductions of up to 50%
and cost reductions of over 52% — **figures we could not stand behind and must
not repeat.**

**PAA:** none. **Related searches:** none shown.

**Top organic:** bmmeng.co.il (20 Jun 2025), a video block (CivilEng's YouTube,
DABRU podcast), **gov.il — "חוברת תוכנית אסטרטגית לחדשנות בענף הבנייה 2025",
141 pages**, y-tech.net, hackathons.co.il (7 Jul 2026, quoting a $1.6 trillion
global productivity figure), wdi.co.il, ciment.co.il (16 Oct 2025),
building.org.il, etkes.com (22 Jan 2024).

**Who ranks / what beats them:** trend and thought-leadership content, plus the
state's strategic plan. There is no buyer at the end of this query — it is read
by people who already work in ConTech.

**Verdict: no commercial value.** Not crowded, not open: simply the wrong kind
of query. **Drop it.** The gov.il strategic plan is worth reading as source
material for other articles, not as a target.

---

## 21. `digital-delivery-note` — תעודת משלוח דיגיטלית *(tested as the delivery-note entry point; wrong side of the transaction)*

**Primary query:** `תעודת משלוח דיגיטלית`

**Autocomplete:** תעודת משלוח דיגיטלית, ...להדפסה, ...להורדה, ...מה זה, ...pdf.
Real volume, and it is form/template intent.

**AI Overview:** yes, cited to invoiceonline.co.il, account-it.co.il,
binaw.com, greeninvoice.co.il, ovalotcrm.com, fireberry.com, linet.org.il,
ezbigboss.com, youtube.com. It describes a note **created on the driver's
phone at delivery** — i.e. the supplier issuing it.

**Related searches:** תעודת משלוח להורדה / pdf / לדוגמא / word / באנגלית /
להדפסה / פנקס תעודת משלוח / חינם.

**Top organic:** invoiceonline.co.il, binaw.com, account-it.co.il,
bigboss.co.il, fireberry.com, ezbigboss.com (19 Feb 2025), yeshinvoice.co.il,
ovalotcrm.com (2 Oct 2026).

**Verdict: CROWDED, and the wrong side of the transaction.** Every result is
accounting or CRM software for the party **issuing** a delivery note. Nothing
anywhere serves the party **receiving** one and checking whether what arrived
matches what was ordered. That is a genuine, unserved problem with **no query of
its own in Hebrew** — which is why §3 (`ניהול הזמנות חומרי בניין`) has to carry
it, and why the article's H1 must do the work the keyword cannot.

---

## Query summary

| # | Query run | Autocomplete exact match | AIO | PAA | Verdict |
|---|---|---|---|---|---|
| 1 | תוכנה לניהול אתר בנייה | yes (2 only) | no | no | CONTESTED |
| 2 | אפליקציה לפיקוח בנייה | no | yes (names 4 products) | no | CROWDED |
| 3 | ניהול הזמנות חומרי בניין | padding only | yes | no | CONTESTED |
| 4 | פרוטוקול מסירת דירה | yes (10) | yes (7/8 legal) | no | CONTESTED |
| 5 | ניהול ליקויים באתר בנייה | no | yes | no | CONTESTED |
| 6 | מערכת מדף או פיתוח מותאם | yes (1) | yes | no | CROWDED generic / OPEN vertical |
| 7 | מעבר ממערכת ישנה… העברת נתונים | none (wrong topic) | yes | no | CONTESTED |
| 8 | בקרת איכות בבנייה | yes | yes (10 sources) | **yes** | CONTESTED |
| 9 | יומן עבודה באתר בנייה | yes | yes (asks back) | inline | CROWDED |
| 10 | ניהול קבלני משנה | yes | yes (1 source) | no | OPEN (weak demand) |
| 11 | שנת בדק | yes (10) | yes | no | CROWDED (consumer) |
| 12 | דיווח בטיחות באתר בנייה | yes | yes | no | CONTESTED / disqualified |
| 13 | ניהול ליקויי בנייה | legal cluster | yes | no | CROWDED, wrong audience |
| 14 | מערכת ניהול לחברת בנייה | padding only | yes (1 source) | no | **OPEN** |
| 15 | תוכנה לקבלנים | partial (hears "קבלות") | yes | no | CROWDED |
| 16 | ניהול פרויקטים בבנייה | yes (courses/jobs) | yes | no | CROWDED, wrong topic |
| 17 | טופס ליקויי בנייה | legal cluster | yes | no | CROWDED, wrong audience |
| 18 | ניהול מסירת דירות | yes (3, all contractor) | yes | no | CONTESTED |
| 19 | כמה עולה לפתח מערכת ניהול | no | yes (hard ranges) | no | CROWDED |
| 20 | דיגיטציה בענף הבנייה | 1 (pdf) | yes | no | no commercial value |
| 21 | תעודת משלוח דיגיטלית | yes | yes | no | CROWDED, wrong side |

Ads seen (same advertiser twice): **Insight Pro** on §1 and §15.
Brand gravity: **Ramdor** dominates the related searches of §1 and §14;
**Reporto** dominates §2 and appears as a fresh incumbent on §5, §9, §11, §12.

---

## The ten recommended topics, ranked

Ranked by what will actually bring a construction company to this site: real
demand × beatable competition × **our own first-hand material**. Where a topic
has high demand and nothing behind it from experience, the row says so and it
is ranked accordingly, not promoted.

| # | Slug | Hebrew H1 (the reader's question) | Primary query | Verdict | What this desk can say that the incumbents cannot |
|---|---|---|---|---|---|
| 1 | `custom-vs-off-the-shelf-construction` | מערכת מדף או מערכת שנבנית לכם — מה נכון לחברת בנייה? | `מערכת ניהול לחברת בנייה` | OPEN | Nine vendors sell a system on that page and not one editorial page helps a company choose. We have built three real construction systems **and migrated a client off a vendor product** — so we can say where off-the-shelf actually breaks (a process that is your competitive advantage, deep integration, per-seat cost at 40 site users) instead of arguing for whichever side we sell. |
| 2 | `site-app-without-signal` | מה קורה לאפליקציה באתר בנייה כשאין קליטה? | `תוכנה לניהול אתר בנייה` | CONTESTED | Every vendor page on that query assumes connectivity. Ours is a field app that works with **no network at all**, checklists by building → floor → apartment, sync on return, and a separate office screen showing where each apartment stands. First-hand, and the thing that decides whether site software gets used. |
| 3 | `delivery-note-reconciliation` | איך בודקים שמה שהגיע לאתר הוא מה שהוזמן? | `ניהול הזמנות חומרי בניין` | CONTESTED | A vision model reads the **photographed** delivery note and reconciles it line by line against the order, shortages surface the same day, and approval reaches the supplier over WhatsApp from inside the system. One competitor claims this on its own site and one buys ads for it; neither has published what it is actually like in production, including where the model needs a human. |
| 4 | `handover-protocol-at-volume` | מה חייב להיות בפרוטוקול מסירת דירה — ואיך מנהלים מאות מסירות? | `פרוטוקול מסירת דירה` | CONTESTED | The strongest demand on the list, owned by lawyers writing for the buyer. We can write the operational half nobody has: readiness per apartment, who signed what, which defect reopened, and a report that is **locked** after signing so it stands up later. |
| 5 | `legacy-qc-migration` | איך עוברים ממערכת ישנה בלי לאבד תמונות, ליקויים והיסטוריה? | `הסבת נתונים` / `העברת נתונים למערכת חדשה` | CONTESTED | Four generic guides, none vertical, none with a real migration behind it. We did one in construction QC: an undocumented vendor API read out of a compiled bundle, every record id hashed so it survives the transfer, an undo script for every import, soft deletes, and **anything unmappable blocked for a human decision rather than guessed**. The single most defensible article here, and the one a vendor-locked company calls about. |
| 6 | `defect-cycle-on-site` | איך סוגרים ליקוי באתר בנייה כך שהוא באמת נסגר? | `ניהול ליקויים באתר בנייה` | CONTESTED | Reporto owns the five-step version. What it cannot write is the cycle at volume with no signal: a defect raised offline, assigned, reopened, re-verified, and proven closed by a record rather than by a photo in a WhatsApp group. |
| 7 | `quality-control-spec-explained` | מה המפרט הכללי לבקרת איכות דורש מהקבלן לתעד? | `בקרת איכות בבנייה` | CONTESTED | The state's 54-page spec sits on page one with nobody explaining it. We can explain what it obliges a contractor to **record** and what that means for the system doing the recording — which protocols must exist and what has to be reconstructible months later. Our half is the documentation and audit trail, first-hand; the quality-engineering half we do not claim. |
| 8 | `bedek-year-for-contractors` | איך קבלן מנהל שנת בדק של מאות דירות? | `ניהול תיקוני שנת בדק` | CROWDED (consumer) | Page one is כל-זכות and law firms writing for the owner. Nobody writes the contractor's year: requests arriving at once, each with a statutory clock attached to a component, each needing a record of when it was reported and when it was answered. We can back the operation, not the law — and the article will say which is which. |
| 9 | `subcontractor-loop` | איך יודעים שקבלן המשנה באמת ביצע? | `ניהול קבלני משנה` | OPEN (weak demand) | A genuinely empty editorial field — two of nine results are job boards. We can speak first-hand to assignment, status and proof of completion (UI result + log + database row, never a screenshot). We cannot speak to contracts, payments or insurance, and the article will say so rather than pad. |
| 10 | `what-a-system-costs-construction` | כמה עולה מערכת לחברת בנייה, ומה קובע את המחיר? | `כמה עולה מערכת לחברת בנייה` | CROWDED | Nine agencies publish ranges; none publishes a real delivery. We can describe one end to end — a field app on both stores, an office web system, one backend, four languages including RTL — without a client-identifying detail and without inventing a figure. Ranked last because the generic query is a price war we do not need to enter. |

**Deliberately not in the ten, with the reason:**

- **`אפליקציה לפיקוח בנייה` (§2)** — eight-plus named products, Reporto with its
  own brand demand and an AI Overview recommending it. Mature SaaS market, not a
  content gap. Our delivery story feeds topics 2, 4 and 6 instead.
- **`דיווח בטיחות` (§12)** — real urgency, brand-new gov.il services, Reporto
  already there. **We have no safety material.** Writing it would be guessing,
  which the programme's fact discipline forbids.
- **`יומן עבודה` (§9)** — seven incumbents, two very fresh, and free templates
  that satisfy half the intent. Only the narrow evidence-integrity cut is ours,
  and it is better as a section inside topic 7 than as an article.
- **`תוכנה לקבלנים` (§15), `ניהול פרויקטים בבנייה` (§16)** — the category head
  term and a query Google reads as courses and jobs. Neither is winnable with an
  article.
- **`ניהול ליקויי בנייה` (§13), `טופס ליקויי בנייה` (§17), `תעודת משלוח
  דיגיטלית` (§21)** — all three return a different audience than the one we
  want. Corrected queries are named in those sections.
- **`דיגיטציה בענף הבנייה` (§20)** — one autocomplete suggestion, no buyer at
  the end of it.

---

## Which of these need a different article shape

The existing template (`docs/seo/content-programme-2026-11.md` §"Page template")
is a **decision guide**: H1 as a question, a liftable answer box, who it is for,
a decision framework, a comparison or cost table in the top half, one first-hand
note, one CTA. It fits topics **1, 2, 10** as written. The owner has allowed new
templates where the subject needs one; these are the ones that need it.

1. **Topic 3 (`delivery-note-reconciliation`) — workflow teardown.** The subject
   is not a choice, it is a sequence: order raised on a phone → approval →
   WhatsApp to supplier → delivery → note photographed → model reads it →
   line-by-line reconciliation → shortage raised. A comparison table cannot carry
   that. Needs a stepped layout where each step shows what the person does, what
   the system records, and what fails if the step is skipped — plus an honest
   "where the model needs a human" step, which is the credibility of the whole
   piece. Anonymity: no client, no product name, no numbers unless re-cleared.

2. **Topic 5 (`legacy-qc-migration`) — teardown plus a pre-flight checklist.**
   Half of this is a narrative of a real migration; the other half is what the
   reader must demand of whoever does theirs (is every import reversible, what
   happens to a record with no equivalent, who holds the export, how is success
   verified). The second half is a checklist the reader can take into a meeting,
   not prose, and it is the part that converts.

3. **Topic 7 (`quality-control-spec-explained`) — regulatory explainer.** The
   anchor is a 54-page state document. The shape is: the obligation in the
   state's own words → what it means in practice → what the system has to do
   about it. Needs a clause-to-practice table (obligation, what must be
   recorded, what proves it later) rather than a comparison table, and it must
   quote Hebrew source strings verbatim with the gov.il reference beside them.

4. **Topic 8 (`bedek-year-for-contractors`) — regulatory explainer plus a
   calendar.** The statute attaches a **different period to each component**
   (one year to seven). That is a reference table, and the article is worth
   little without it. It also needs a visible boundary line: this is how the
   obligation is managed operationally, not legal advice — with the statutory
   claims sourced to חוק המכר (דירות) and כל-זכות, never to us.

5. **Topic 4 (`handover-protocol-at-volume`) — decision guide with a document
   anatomy block.** The demand is half template-download ("פרוטוקול מסירה doc",
   "לדוגמא", "pdf"). The article should satisfy that intent with an anatomy of
   the protocol — every field, what it is for, what goes wrong when it is blank —
   before it moves to the operational half. That block is a labelled breakdown,
   not a table.

6. **Topic 6 (`defect-cycle-on-site`) — state machine, drawn.** A defect's life
   (raised → assigned → fixed → verified → closed, with reopen looping back) is
   a diagram, and the article's whole argument is that the loop is where paper
   and WhatsApp fail. One clear diagram plus the offline caveat does more than
   800 words of prose.

7. **Topic 9 (`subcontractor-loop`) — short proof-oriented piece, not a guide.**
   Our coverage is partial by our own admission, so the honest shape is a short
   piece built around one idea (what counts as proof that work was done) with an
   explicit "this article does not cover contracts, payments or insurance" line
   near the top. Padding it to template length would be the failure mode.

Topics **1, 2 and 10** stay on the existing decision-guide template.

---

## Blocked, misclassified and no-volume queries

- **`ניהול ליקויי בנייה`** — returns the apartment-owner's legal fight
  (law firms, home inspectors, an AI Overview whose last step is "exhaust legal
  remedies"). Correct query: `ניהול ליקויים באתר בנייה`.
- **`טופס ליקויי בנייה`** — Google equates it with a בדק בית report; page one
  is the home-inspection industry. Correct queries: `פרוטוקול מסירת דירה` or
  `ניהול ליקויים באתר בנייה`.
- **`ניהול פרויקטים בבנייה`** — reads as courses, jobs and salary (eight of
  eight related searches). Correct query for software intent:
  `תוכנה לניהול פרויקטים בבניה`.
- **`תעודת משלוח דיגיטלית`** — entirely the supplier's side (invoicing and CRM
  software). The receiving side has no Hebrew query of its own; it must be
  reached through `ניהול הזמנות חומרי בניין`.
- **`מעבר ממערכת ישנה למערכת חדשה`** — autocomplete returns only electricity
  meters; related searches are consumer PC backup. Target `הסבת נתונים` /
  `העברת נתונים למערכת חדשה`.
- **`כמה עולה לפתח מערכת ניהול`** — only autocomplete suggestion is
  "...ניהול ספרים" (bookkeeping). The intent is live on the organic page but the
  string is not; target the construction cut.
- **`ניהול הזמנות חומרי בניין`, `מערכת ניהול לחברת בנייה`** — autocomplete
  returns Google's auto-generated location and filler variants ("בטווח של 1
  מייל", "תל אביב", "בע"מ"), which means no real phrase volume. Both are still
  worth targeting on intent, but neither should be treated as a high-volume
  head term.
- **`דיגיטציה בענף הבנייה`** — one suggestion, and it wants a PDF. No buyer.
- **No block, no captcha, no 429** was encountered on any of the 21 queries. No
  query had to be forced past a spelling auto-correction.

## Open question for the owner

**May Plumberg / Koma and their client be named in public articles?** The
capability ledger names the product, package id and client because it is an
internal document, and only Chillist was explicitly cleared for public use
(2026-10-15). Topics 1, 5, 6, 7 and 9 all draw on that operational experience.
They can all be written with the client and product anonymised — that is the
assumption these briefs make — but a named, daily-use construction product would
be materially stronger evidence than "a construction management product in daily
use", and the decision is the owner's, not this desk's.
