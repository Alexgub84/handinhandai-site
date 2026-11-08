# Hebrew/English script mixing: what the rule should be

Research task, 2026-11-04. Question: when should an English technical term appear
in Hebrew prose as Latin script, when as a genuine Hebrew word, and when (if ever)
spelled out phonetically in Hebrew letters. Alex's starting complaint: transliterating
an English word into Hebrew letters reads wrong, and the current article mixes
scripts badly. This file settles it with primary-source evidence, then audits the
live article against the rule.

Every claim below is tagged **[sourced]** (traceable to a primary source, linked)
or **[judgement]** (my own call, because no primary source settled it, flagged as such).

## 1. How the platforms render their own Hebrew

**[sourced]** Google's own Hebrew developer documentation keeps code identifiers and
console/feature names in Latin script, embedded directly in Hebrew sentences with no
transliteration:

> "אי אפשר להעלות קובץ APK לחנות Play עם versionCode שכבר השתמשתם בו בגרסה קודמת"
> — [Android Studio versioning docs, Hebrew](https://developer.android.com/studio/publish/versioning?hl=iw)

That single sentence shows three Latin-kept terms inline: `APK`, `Play` (as part of
"חנות Play"), `versionCode`. The field name is camelCase exactly as it appears in the
build file — never respelled.

**[sourced]** Google Play Console's Hebrew help center keeps every proper feature
name in Latin — `Play Console`, `Google Play`, `Data safety`, `Asset Library`,
`A/B tests`, `APK` — while all surrounding grammar (prefixes, plurals, sentence
structure) stays Hebrew. Source:
[Play Console Help, Hebrew](https://support.google.com/googleplay/android-developer/?hl=iw).

**[sourced]** Popular Hebrew tech journalism (not platform documentation) sometimes
transliterates the Google Play brand name itself into Hebrew letters as a colloquial,
headline-friendly form:

> "גוגל פליי (Play) — חנות אפליקציות במקום אנדרואיד מרקט" — [mako](https://www.mako.co.il/nexter-internet/Article-450eeb3e1dce531006.htm)

Note mako glosses "(Play)" in parens right after the transliteration — even the
colloquial form hedges by showing the real Latin name once. Hebrew Wikipedia's own
article title, by contrast, keeps the brand in Latin: `Google Play`
([he.wikipedia.org/wiki/Google_Play](https://he.wikipedia.org/wiki/Google_Play)).

**[judgement]** Apple does not publish a comparable Hebrew help corpus for App Store
Connect — searches turned up only English-language Apple Developer help pages. No
primary Apple Hebrew source exists to cite for `App Store Connect`, `Build`, or
`TestFlight`. Absent that, the working rule has to come from the Google evidence plus
the general principle every source agrees on: a name that labels a button or field
the reader will actually click stays in the script it's printed in on that screen.

**Takeaway, sourced:** platform UI copy (Google's own) never transliterates a product,
console, or field name. It stays Latin. The one counter-example (mako's "גוגל פליי")
is informal journalism, not documentation the reader will match against their own
screen — and it still glosses the real name in parens.

## 2. Hebrew tech journalism and reference

**[sourced]** Geektime headlines and body text use `API`, `SDK` in Latin script with a
Hebrew maqaf (מקף) attaching the prefix, never transliterated:

> "בנקים גילו את ה-Open API" — [Geektime](https://www.geektime.co.il/the-banks-discover-the-open-api/)
> "המפתחים הישראליים... בשימוש ב-SDK" — [Geektime](https://www.geektime.co.il/safedk-january-2017-report/)

**[sourced]** Geektime does, however, transliterate `Native` into Hebrew letters when
naming the development approach (not a UI label, an industry category):

> "אפליקציית נייטיב" — [Geektime](https://www.geektime.co.il/google-android-vibe-coding-google-play/)

and Hebrew Wikipedia has a standing article titled "ריאקט נייטיב" (React Native) —
confirming `נייטיב` is the dominant, settled industry term for this specific concept,
not a one-off slip. **[judgement]** That settles the term for *developer-facing*
writing. It does not settle it for a small-business marketing article whose reader is
not a developer — see the article audit below.

**[sourced]** Hebrew Wikipedia's own computing articles mix scripts the same way
Google's docs do — Latin for the technical term, maqaf for the prefix, no
transliteration:

> "ל-API", "ה-web API", "ב-API", "בקשות ה-HTTP", "מתחלק לשני תקנים עיקריים: REST ו-SOAP"
> — [ממשק תכנות יישומים (API), Hebrew Wikipedia](https://he.wikipedia.org/wiki/%D7%9E%D7%9E%D7%A9%D7%A7_%D7%AA%D7%9B%D7%A0%D7%95%D7%AA_%D7%99%D7%99%D7%A9%D7%95%D7%9E%D7%99%D7%9D)

**[sourced]** Verbs built from an English noun (*deploy*) get a real Hebrew
translation in official documentation, not a transliteration — `דיפלוי` does not
appear in Google's own Hebrew docs; `פריסה` / `לפרוס` does, consistently:

> "פריסה אוטומטית של אפליקציית אינטרנט..." — [Google Codelabs, Hebrew](https://codelabs.developers.google.com/codelabs/deploy-from-github/gen-ai-go?hl=he)
> definition: "Deployment (דיפלוי, בעברית פריסה) הוא השלב שבו גרסה חדשה... עולה לאוויר" — [Mobius glossary](https://www.mobiusbiz.co.il/he/glossary/technology/deployment)

Even the glossary that mentions the slangy transliteration "דיפלוי" immediately gives
the real Hebrew word "פריסה" as the one to actually use.

## 3. The Academy of the Hebrew Language

**[sourced, partial — primary PDF blocked by Cloudflare to automated fetches]** The
Academy's transliteration rulings (`taatik-loazit-2020.pdf` and related pages at
hebrew-academy.org.il) were not directly fetchable in this session (Cloudflare bot
protection returned 403 to both the PDF and the English summary page). The content is
described secondhand via search-indexed summaries of those same pages:

- Academy transliteration rules were formally re-approved in plenary session,
  21 May 2007 — [hebrew-academy.org.il search index].
- The Academy publishes a joint technical-terminology body with the Technion (the
  "Haifa office") specifically for computing/engineering vocabulary.
- English acronyms used as inline Latin fragments inside Hebrew text ("ה-API"-style
  notation) are explicitly described, in secondary summaries of Academy material, as
  "mainly used in technical writing and regarded nonstandard by the Hebrew Academy" —
  i.e. the Academy's own prescriptive preference is to translate or fully Hebraize an
  acronym where a Hebrew name exists (e.g. `ממשק תכנות יישומים` over `API`), even
  though real-world technical and journalistic usage (section 2) does not follow that
  preference. **[judgement]**: for this site, real-world usage wins over the
  Academy's purist preference, because the reader needs to recognize the term on
  their own screen (`API`, `SDK`, `AAB` do not appear in Hebrew anywhere a reader will
  encounter them) — but the Academy's underlying principle, *translate when a real
  Hebrew word already exists and is in active use*, is exactly why `דיפלוי`/`בילד`/
  `פוש`/`נייטיב` (all of which have live Hebrew alternatives already used elsewhere in
  the same article) are the ones to fix.
- Acronyms pronounced as a word (not spelled letter-by-letter) take Hebrew plural and
  definite-article morphology directly on the acronym — e.g. "המנכ"ל → מנכ"לים",
  "האג"ח → אג"חים" — with the gershayim (״) kept in place. This is the model for how
  a Latin acronym should *not* simply get an English "-s": Hebrew supplies the plural
  via a carrier noun instead (see §4).

## 4. Typography and bidi mechanics

**[sourced]** Maqaf (מקף), not a regular hyphen, attaches a Hebrew prefix (ה־/ב־/ל־/ו־)
to what follows, always flush with no space, and the rule is stated generically for
numerals and extends in observed practice to Latin words:

> "מקף (־) המשמש להפרדה בין אות יחס לבין מספר יהיה תמיד צמוד ללא רווחים" — example
> given: "ב־2008" — [Wikipedia:לשון style guide](https://he.wikipedia.org/wiki/%D7%95%D7%99%D7%A7%D7%99%D7%A4%D7%93%D7%99%D7%94:%D7%9C%D7%A9%D7%95%D7%9F)

In real usage this is the identical mechanism applied to Latin terms: "ל-API",
"ה-web API", "ב-API" (Hebrew Wikipedia, §2), "ב-Open API" (Geektime, §2). The current
site article itself already does this correctly once: "ב־Trusted Web Activity".

**[sourced]** Plurals of a Latin acronym are not formed by appending an English "s"
nor by appending a Hebrew suffix directly onto Latin letters. The real convention,
confirmed across Google's own Hebrew docs and casual tech-forum Hebrew, is to put the
*plural Hebrew carrier noun* in front and leave the Latin acronym singular and
unchanged: "קובץ APK" → "קבצי APK" (not "APKs" or "APK-ים"). This mirrors the Academy's
acronym-plural pattern in §3 (plural morphology lands on a Hebrew element, never
mid-Latin-string).

**[judgement — no Hebrew-specific primary source found; this is general bidi/Unicode
engineering practice]** A Hebrew sentence that ends directly on a bare Latin word, with
no Hebrew word or parenthesis after it, risks the trailing punctuation (period/comma)
rendering on the visually wrong side under the Unicode Bidirectional Algorithm — this
is a well-documented bidi failure mode (see
[W3C: Creating HTML Pages in Arabic, Hebrew and Other RTL Scripts](https://www.w3.org/International/tutorials/bidi-xhtml/)),
not something the Hebrew language authorities rule on, since it's a rendering problem,
not a language one. Two independent fixes, both seen in real editorial practice:
(1) never end a Hebrew sentence on a bare Latin word — add a Hebrew word, parenthesis,
or gloss after it (exactly what Google's and Wikipedia's Hebrew docs do everywhere in
§1–§2); (2) in markup, wrap a Latin run with an explicit directional isolate
(`<span dir="ltr">…</span>` or the Unicode isolate characters U+2066/U+2069) so the
run can't visually merge with adjacent Hebrew punctuation or reverse mid-line. This
site's HTML does not currently do (2) anywhere — out of scope for this research file,
flagging for the dev backlog, not fixing here.

## 5. Decision table

| Kind of term | Rule | Correct example | Wrong example |
|---|---|---|---|
| Platform/product proper names the reader clicks on (`Play Console`, `App Store Connect`, `Google Play`, `Chrome`) | Latin script always — the reader must recognize the exact string on their own screen | `דרך Play Console` | `דרך פליי קונסול` |
| Console screens/features with no Hebrew UI name (`Play App Signing`, `Data safety`, `Asset Library`) | Latin script, matches the console exactly | `בלי Play App Signing` | `בלי חתימת-פליי-אפ` |
| Acronyms with a real Hebrew expansion in active technical use (`API`, `SDK`, `HTTP`, `TWA`) | Latin script with maqaf (ה־/ב־/ל־) attaching the Hebrew prefix, no space | `ה-API`, `ב־Trusted Web Activity` | `ה-איי.פי.איי`, `בטריסטד ובאקטיביטי` |
| File formats and code-level identifiers (`AAB`, `IPA`, `versionCode`, `package name`) | Latin script, exact spelling/casing as the field itself — plural lands on a Hebrew carrier noun, never on the Latin string | `קבצי AAB`, `ה-versionCode` | `AAB-ים`, `ה-ורז'ן קוד` |
| Fully absorbed consumer brand/platform names (`Android`, `iPhone`, `Facebook`, `YouTube`) | Hebrew-letter transliteration is correct and standard — these are nativized loanwords, not code-switches | `גרסת אנדרואיד`, `אפל הודיעה` | n/a (Latin here just reads stiff, not wrong) |
| Common nouns with a settled Hebrew word (`server`, `browser`, `file`, `code`, `icon`, `status`) | Use the Hebrew word, not an English respelling | `שרת`, `דפדפן`, `קובץ`, `קוד`, `אייקון`, `סטטוס` | `סרבר`, `בראוזר` |
| English verbs built from a tech noun (`deploy`, `push (a change)`) | Translate to the real Hebrew verb already in use in official docs, don't transliterate the noun-as-verb | `לפרוס גרסה חדשה` (deploy) | `לדפלוי גרסה חדשה` |
| Developer-jargon nouns with a live informal Hebrew transliteration (`build`, `native`, `push (notification)`) | For a non-technical reader (this site's audience): use the real Hebrew word or gloss the English in Latin in parens on first use. For developer-facing docs: the industry transliteration (`נייטיב`, `בילד`) is attested and acceptable | `מספר בנייה (build)`, `קוד שרץ ישירות על המכשיר` | `מספר בילד`, `קוד נייטיב` *(in a lay-reader article)* |
| Acronyms with no live Hebrew name and no screen presence (`PWA`) | Latin, expanded once in full, abbreviation kept Latin after | `Progressive Web App, או PWA בקיצור` | `פי.וו.איי` |
| Hebrew sentence ending on a bare Latin term | Add a Hebrew word/gloss after it; never leave Latin as the literal last token before a period | `...בלי Play App Signing (תהליך החתימה האוטומטי)` | `...בלי Play App Signing.` *(risks bidi punctuation flip)* |
| Own brand/company name | Always Latin, never transliterated, never translated | `Hand in Hand AI` | `הנד אין הנד איי איי` |
| Acronym glossed for a lay reader | Hebrew word first, English acronym in Latin parens on first mention only | `העוזר הדיגיטלי שלי (AI)` | `העוזר הדיגיטלי שלי (איי-איי)` |

## 6. Audit of the live article

Source fetched 2026-11-04 from
`https://feat-issue-100-article-app-o.handinhandai-site.pages.dev/articles/app-or-website/`
(raw HTML parsed directly, not summarized, to get every script-collision point).

**32 script-meeting points found, grouped by verdict:**

| Verdict | Count | Terms |
|---|---|---|
| Correct as-is — Latin, matches screen/jargon with no Hebrew name | 16 | `versionCode`, `Trusted Web Activity` ×3, `Progressive Web App`/`PWA`, `Chrome`, `Android/iOS` (table), `TWA` (table), `Play Console`, `Play App Signing`, `package name / bundle id`, `upload key`, `בנייה (build)` gloss, `(AI)` gloss, `HandInHandAI` ×2 |
| Correct as-is — absorbed Hebrew-letter loanword, no fix needed | 9 | `אנדרואיד` ×2, `אפל` ×2, `אייקון` ×4, `סטטוס` ×1 |
| Should be Latin (fix: switch to Latin script) | 5 | `גוגל פליי` ×3, `בילד` ×2 |
| Should be reworded (fix: replace with the Hebrew word already used elsewhere in the same article) | 2 | `קוד נייטיב` ×1, `התראת פוש` ×1 |

### 5 worst offenders

1. **`גוגל פליי`** (3 places: "בחשבון מפתח פרטי בגוגל פליי"; "בגוגל פליי כל העלאה חדשה חייבת..."; "גוגל פליי חותם מחדש כל חבילה..."). This is the exact name of the console the reader is about to open — spelling it phonetically in Hebrew letters means it no longer matches what's on their screen. **Fix:** write `Google Play` in Latin every time.
2. **`בילד`** (2 places, same sentence: "באפל כל בילד חייב מספר בילד גבוה מהקודם"). Apple's own field in App Store Connect is literally labelled *Build* — the reader will not find a field called "בילד". **Fix:** `מספר הבנייה (Build)`, matching the pattern the article itself already uses correctly for the same word elsewhere.
3. **`קוד נייטיב`** ("אפליקציה עם קוד נייטיב שרץ על המכשיר"). Spells "native" in Hebrew letters, for a concept the same article already named correctly in plain Hebrew two sections earlier ("האפליקציה הטבעית"). **Fix:** `קוד שרץ ישירות על המכשיר` or `קוד טבעי`, matching that earlier phrasing.
4. **`התראת פוש`** ("לא יכול לשלוח התראת פוש למשתמש"). Hebrew already has the real word. **Fix:** `התראת דחיפה`.
5. **The inconsistency itself**, not just the individual words: *build* is correctly handled once as `בנייה (build)` and incorrectly handled once as `בילד`; *native* is correctly handled once as `טבעית` and incorrectly handled once as `נייטיב`. A reader who notices the same concept written two different ways in one article reads it as sloppy even before noticing which spelling is "wrong." **Fix:** pick one treatment per concept and apply it everywhere the concept appears — the two fixes above (#2 and #3) resolve both halves of this if applied consistently.

## Sources

- [Android Studio — Version your app, Hebrew](https://developer.android.com/studio/publish/versioning?hl=iw)
- [Google Play Console Help, Hebrew](https://support.google.com/googleplay/android-developer/?hl=iw)
- [mako — גוגל פליי](https://www.mako.co.il/nexter-internet/Article-450eeb3e1dce531006.htm)
- [Hebrew Wikipedia — Google Play](https://he.wikipedia.org/wiki/Google_Play)
- [Hebrew Wikipedia — ממשק תכנות יישומים (API)](https://he.wikipedia.org/wiki/%D7%9E%D7%9E%D7%A9%D7%A7_%D7%AA%D7%9B%D7%A0%D7%95%D7%AA_%D7%99%D7%99%D7%A9%D7%95%D7%9E%D7%99%D7%9D)
- [Geektime — Open API](https://www.geektime.co.il/the-banks-discover-the-open-api/)
- [Geektime — SafeDK / SDK report](https://www.geektime.co.il/safedk-january-2017-report/)
- [Geektime — Google Android vibe coding / native app](https://www.geektime.co.il/google-android-vibe-coding-google-play/)
- [Google Codelabs — deploy-from-github, Hebrew](https://codelabs.developers.google.com/codelabs/deploy-from-github/gen-ai-go?hl=he)
- [Mobius — Deployment glossary, Hebrew](https://www.mobiusbiz.co.il/he/glossary/technology/deployment)
- [Hebrew Academy — transliteration rulings index](https://hebrew-academy.org.il/) (PDF/English pages 403'd to automated fetch this session; described via search-index summaries, flagged above)
- [Wikipedia:לשון style guide, Hebrew](https://he.wikipedia.org/wiki/%D7%95%D7%99%D7%A7%D7%99%D7%A4%D7%93%D7%99%D7%94:%D7%9C%D7%A9%D7%95%D7%9F)
- [W3C — Creating HTML Pages in Arabic, Hebrew and Other RTL Scripts](https://www.w3.org/International/tutorials/bidi-xhtml/)
- Article under audit: [`/articles/app-or-website/` preview](https://feat-issue-100-article-app-o.handinhandai-site.pages.dev/articles/app-or-website/)
