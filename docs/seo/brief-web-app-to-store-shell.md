## Gate 1 — keyword brief: turning a working web app/site into an app people install from the stores (Android TWA / store shell)

Issue #210, gate 1. Read live from Google, in Hebrew, by hand — never from memory, never from a keyword tool.

- **Date read:** 2026-11-13
- **Settings used:** `https://www.google.com/search?q=<query>&hl=he&gl=IL`, in a signed-in Brave profile (Alex Guberman's own Google account was logged in). This is a caveat, not a clean fact: a signed-in session can personalize ranking slightly (search history, location). Nothing below looked personalized — the results match what unrelated third-party guides cite, and the one handinhandai.com hit (query 5) is a real, recently-indexed URL, not a personalization artifact — but it is not a guaranteed incognito read.
- Each query below is the real page as rendered, quoted, not summarized from training data.

---

### Query 1 — "להפוך אתר לאפליקציה"

**AI overview:** Yes. Three paths: (1) "אפליקציית WebView" — fast/cheap, wraps the existing site, syncs instantly with site changes, but "feels less real," usually no full offline support; examples given: Andromo Builder, "הפיכת אתר לאפליקציה בקליק". (2) "Progressive Web App – PWA" ("חלופת ביניים מומלצת") — install from the browser, skip store fees/bureaucracy, supports push, partial offline; "פחות נתפס כאפליקציה 'אמיתית'" for someone searching for it directly in the App Store — cited to Daniel Zrihen (דניאל זריהן). (3) "אפליקציית Native / No-Code" (APPFLY.AI, WebToApp) — real store presence, deeper hardware integration, costs more, store-policy maintenance. Overview then asks "האם אתם בכלל צריכים אפליקציה?" and states: per "מומחים רבים בדיגיטל," for roughly 90% of businesses an expensive native app is unnecessary — a well-built mobile site or PWA does the job "בעשירית המחיר" — cited again to Daniel Zrihen. Overview offers to ask what platform the site is built on and what the app is for.

**Top organic results, in order:** webtoapp.co.il ("הפיכת אתר לאפליקציה רשמית – מתאים לאתרים ופרויקטים ב-Base44 ו-Loveable"), app-builder.madrichim.ovh ("הפיכת אתר לאפליקציה בקליק"), cloudrocket.co.il ("איך להפוך אתר לאפליקצית אנדרויד בחינם"), *(sponsored: lovable.dev "AI App Builder")*, andromo.com ("המר את אתר האינטרנט שלך לאפליקציה לנייד"), play.google.com (Appy Pie "Convert Website to App, APK"), appfly.ai, msdigital.co.il ("נהפוך אתר לאפליקציית ווב (Webview) | 100% פרסום בחנויות"), Reddit r/reactjs ("מה הדרך הכי פשוטה להמיר אתר לאפליקציה?").

**"אנשים שאלו גם":** None rendered — checked the DOM directly (`find`); only "אנשים חיפשו גם" (related searches) exists on this page.

**Related searches ("אנשים חיפשו גם"), verbatim:** הפיכת אתר לאפליקציה חינם / אתר לאפליקציה בקליק / אפליקציה לעסק / כמה עולה לבנות אפליקציה.

**Hebrew incumbent?** No single owner — a cluster of wrapper-conversion service sellers (webtoapp.co.il, cloudrocket.co.il, appfly.ai, msdigital.co.il), none of them naming or explaining TWA as a mechanism, none laying out store-policy risk.

---

### Query 2 — "איך הופכים אתר לאפליקציה"

**AI overview:** Word-for-word identical to query 1's overview (same three paths, same Daniel Zrihen citations, same follow-up questions) — confirms Google treats these two phrasings as one intent cluster.

**Top organic results, in order:** webtoapp.co.il, cloudrocket.co.il, **danielzrihen.co.il** ("תהליך הפיכת אתר לאפליקציה: האם זה הכרחי?" — new vs. query 1), andromo.com, Reddit r/reactjs, msdigital.co.il, **aviyot.dev** ("מהדפדפן למסך הבית: איך הופכים אתר לאפליקציה בנייד?", dated 29 במרץ 2026 — new, PWA/add-to-home-screen guide), play.google.com (Appy Pie). *Sponsored: lovable.dev "founders" variant.*

**"אנשים שאלו גם":** None (checked via `find`).

**Related searches:** Identical set to query 1.

**Hebrew incumbent?** Same wrapper-seller cluster, plus danielzrihen.co.il arguing against doing it at all for most businesses, plus aviyot.dev covering the free "add to home screen" PWA shortcut specifically. No one here is the TWA/store-shell page.

---

### Query 3 — "אתר לאפליקציה אנדרואיד"

**AI overview:** Yes (took a second fetch to resolve past "בתהליך חשיבה"). Lists no-code tools (Cloud Rocket — free tier or paid tier with store upload; APPFLY.AI — WordPress/Shopify/WooCommerce to Android+iOS with push/sync; Andromo — drag-and-drop) and, separately, "פיתוח רשמי (למתכנתים)": Android Studio, Google's own IDE, "באמצעות טכנולוגיית WebView או פיתוח ייעודי." Asks whether the app should go to Google Play Store officially.

**Top organic results, in order:** play.google.com (a *generic* "Android App" store listing — not conversion-related), cloudrocket.co.il, developer.android.com (Android Studio download), appfly.ai, andromo.com, webtoapp.co.il.

**"אנשים שאלו גם על" (verbatim, 4 questions):**
- איך הופכים אתר לאפליקציה?
- מהי חנות אפליקציות טובה להורדה בחינם?
- איך אני יכול לראות את כל האפליקציות שלי?
- איפה אפשר להוריד גרסאות אנדרואיד?

**Related searches:** חנות אפליקציות להורדה / חנות אפליקציות גוגל / אפליקציה חנות play / הורדת אפליקציות בחינם / הורדת אפליקציות בחינם לאנדרואיד / אפליקציות להורדה לאנדרואיד / אפליקציות של גוגל / שחזור חנות play.

**Verdict on this query:** Diluted. Both the organic page-1 and the PAA box drift straight into "how do I find/download apps on my Android phone" — generic app-store and device-management intent, not "convert my site" intent. Not usable as a target query despite looking like the obvious phrase.

---

### Query 4 — "אפליקציה בלי לפתח מחדש"

**AI overview:** Did not resolve after two checks — stayed on "בתהליך חשיבה" / "ייקח עוד קצת זמן לחשוב" both times, consistent with the organic results below being off-topic (an overview with nothing coherent to summarize).

**Top organic results, in order:** Reddit r/reactnative (personal iOS app re-signing via diawi), Google Play "Phone Restart (No Root)" app, igates.co.il ("בניית אפליקציה בחינם: המדריך המלא"), TheMarker (2020 piece on no-code tools, Wix/Bubble.io), web.dev (PWA definition), support.google.com (changing default apps on Pixel — flagged "חסר: בלי" by Google itself, i.e. it had to drop the word "בלי" to match), Reddit r/dotnet (redeploying a .NET app without redeploy), andromo.com, Google Play "Restart – Auto Reboot" app.

**"אנשים שאלו גם":** None (checked via `find`).

**Related searches:** בניית אפליקציה בחינם בעברית / פיתוח אפליקציה ללא קוד / פיתוח ללא קוד / נו קוד / Glide.

**Verdict on this query:** Unusable. Google reads "בלי לפתח מחדש" as "without restarting/redeploying," not "without rewriting the code from scratch." The organic page is phone-restart apps and .NET redeploy threads — zero overlap with the article's subject.

---

### Query 5 — "להעלות אתר לחנות אפליקציות"

Google itself broadened the match: *"כולל תוצאות עבור להעלות אתר חנות אפליקציות"* with an option to "חיפוש רק להעלות אתר לחנות אפליקציות" — the exact phrase alone has thin direct matches, so Google is already filling in with the nearby variant.

**AI overview:** Yes (resolved on second check). States plainly: a plain website/URL **cannot** be uploaded to the App Store or Google Play as-is, because both require a dedicated app file (APK/AAB for Android, IPA for iPhone) — the site must be converted or wrapped into a real app first. Steps given: (1) make the site responsive/mobile-ready, ideally add push notifications and camera/API hooks; (2) convert via no-code (WebToApp) or AI-based (Base44 Docs) tooling, or build native/React Native tied to the site's own API; (3) open developer accounts — Google Play Console (one-time fee) and Apple App Store Connect (annual subscription); (4) submit for review — explicitly warns that **Apple tends to reject apps that are "just a wrapper" around a website with no added native value.** Cited to Base44, cloudrocket.co.il, Webitnow.

**Top organic results, in order (notable):**
1. **docs.base44.com** — "הגשת האפליקציה שלכם לחנויות אפליקציות," dated 9 בנוב׳ 2026
2. **handinhandai.com/publish-app-to-stores** — this site's own sibling article, already ranking #2, snippet dated "לפני 5 ימים," quoting the 12-tester/14-day Google Play closed-testing fact
3. **vibe.elya-studio.com ("VibeScale")** — a direct competitor managed service: *"הפיכת אתר לאפליקציה + העלאה לגוגל פליי ואפסטור... עטיפה היברידית, פתיחת חשבונות מפתח, הגשה, וטיפול בדחיות של אפל עד לאישור. אתם לא נוגעים בבירוקרטיה."*
4. itayost.com — "מדריך העלאת אפליקציה לחנויות | App Store ו-Google Play 2025," step-by-step with costs/timelines
*(sponsored: GoDaddy domains; drorsoft.com, a custom-software dev agency)*
5. aiterra.co.il — "איך מעלים אפליקציה לגוגל פליי ולאפ סטור (2026)," dated 25 באוק׳ 2026, TL;DR on one-time Google Play fee ($25) and Apple's annual program
6. cloudrocket.co.il, 7. webtoapp.co.il, 8. a Shopify-store YouTube video (irrelevant), 9. Webitnow (cost article)

**"אנשים שאלו גם":** None observed in the rendered page.

**Related searches:** הפיכת אתר לאפליקציה חינם / איך הופכים אתר לאפליקציה / אפליקציה לעסק / **בייס 44** / אתר לאפליקציה בקליק / כמה עולה לבנות אפליקציה. (Base44 — the AI app builder — showing up as a related search here is new information: the market now associates "upload to the stores" with AI-builder output needing a store path.)

**Hebrew incumbent?** The closest thing to one is VibeScale/elya-studio.com, selling exactly the done-for-you wrap-and-submit service this article would otherwise teach a reader to understand before buying (or doing) it. Base44's own docs are the second-strongest result and are written for Base44's own users, not a general Hebrew business audience.

---

### Query 6 — "PWA אפליקציה"

**AI overview:** Yes. Pure definition: PWA = a regular website (HTML/CSS/JS) that behaves and feels like an installed app. Benefits: no app-store approval needed, install straight from the browser; offline support via Service Worker; native-feeling full-screen window with push notifications and device-hardware access; one codebase for mobile and desktop. Core pieces: Web App Manifest (JSON — name, icons, colour, orientation), Service Worker (caching/offline), HTTPS requirement. Cited to Wikipedia, web.dev, YouTube/Adam Khoury.

**Top organic results, in order:** web.dev ("אפליקציות מסוג Progressive Web App"), **he.wikipedia.org** ("יישום אינטרנט מתקדם"), Google Play "PWA APP Store" app, web.dev ("מהן אפליקציות מסוג Progressive Web App?"), **HackerU** blog ("גם אתר וגם אפליקציה? Progressive Web App הוא עתיד המובייל"), developers.google.com (ChromeOS PWAs), YouTube (Chrome for Developers ×2, Adam Khoury), Microsoft Store "PWA Store," developer.chrome.com.

**"אנשים שאלו גם":** None — confirmed via `find`; the whole related-content area is "תוצאות קשורות" link chips, not a PAA accordion.

**Related searches:** None rendered at all for this query (no "אנשים חיפשו גם" box appeared on the page) — a sign this query reads to Google as purely educational/definitional, not commercial.

**Hebrew incumbent?** Wikipedia and web.dev own the definition; HackerU is the only Hebrew business-ish voice, and it argues the PWA angle generally, not the store-listing angle. Nobody here sells or explains the store-shell/TWA route — this query's audience is "what is a PWA," a different question than this article's.

---

### Query 7 — "Trusted Web Activity"

**AI overview:** None — the page went straight to "Web results," no AI summary box at all.

**Top organic results, in order:** developer.android.com ×2 ("Overview of Trusted Web Activities," "Trusted Web Activities Quick Start Guide"), YouTube/Chrome for Developers ("Trusted Web Activities"), developer.chrome.com ("Overview | Web on Android"), mechanicalrock.io blog, Medium/Kevin Kurniawan ("Introduction to PWA & TWA"), Google Play "TWA Demo" app, scand.com corporate blog, YouTube/Chrome for Developers (full-screen TWA talk), blog.doubleslash.de.

**"אנשים שאלו גם על" (verbatim, in English — 4 questions):**
- What is TWA vs PWA?
- Is PWA still a thing?
- Is WebView safe?
- How do I turn off web & app Activity on my Android device? *(a false match — Android's "Web & App Activity" privacy setting, unrelated to Trusted Web Activity)*

**Related searches:** Not rendered on this page.

**Hebrew incumbent?** None — zero Hebrew-language results on page 1. Every single result is an English developer resource (Android Developers, Chrome for Developers, Medium, two corporate dev blogs). This confirms "Trusted Web Activity" has no Hebrew consumer or business demand at all — it is purely a term developers search in English, never something an Israeli business owner types into Google.

---

### Autocomplete

**Typed "להפוך אתר ל" (8 suggestions, verbatim, in order):**
1. להפוך אתר לאפליקציה
2. להפוך אתר לברקוד
3. איך להפוך אתר לדף הבית
4. איך להפוך אתר לאפליקציה
5. איך להפוך אתר לנגיש
6. איך להפוך כתובת אתר לקישור
7. להפוך את המחשב לאנדרואיד
8. להפוך את הטלפון

"לאפליקציה" is the #1 and #4 (plain + "איך") completion out of 8 — the single strongest completion of this root by a clear margin; the rest (ברקוד, דף הבית, נגיש, קישור) are unrelated website-utility tasks.

**Typed "אתר לאפליקציה" (9 suggestions, verbatim, in order):**
1. אתר לאפליקציה
2. אתר לאפליקציה בקליק
3. אתר לאפליקציה מתמחים טוף *(low-confidence transcription — small autocomplete text, couldn't fully resolve at zoom; flagging rather than guessing at meaning)*
4. הפיכת אתר לאפליקציה חינם
5. הפיכת אתר לאפליקציה
6. הפיכת אתר לאפליקציה מתמחים ט... *(same low-confidence tail as #3, truncated in the dropdown)*
7. איך הופכים אתר לאפליקציה
8. להפוך אתר לאפליקציה
9. איך להפוך אתר לאפליקציה

Confirms the same small cluster of phrasings (הפיכת / להפוך / איך הופכים אתר לאפליקציה, plus the free-tier qualifier "חינם" and the one-click competitor-branded "בקליק") dominates this root — consistent with what queries 1, 2 and 5 already showed.

---

### Who already ranks, and what they miss

The Hebrew page-1 results across all seven queries are owned by three groups, and none of them is the article this gate is scoping:

1. **Wrapper-conversion sellers** — webtoapp.co.il, cloudrocket.co.il, appfly.ai, msdigital.co.il, Andromo (international), and now **VibeScale (vibe.elya-studio.com)**, which explicitly sells "hybrid wrapping + dev-account opening + submission + handling Apple rejections" as a managed service under query 5. Every one of these sells the outcome ("we'll turn your site into an app") without naming Trusted Web Activity, without explaining Google Play's and Apple's actual policy stance toward thin wrappers (the AI overview on query 5 says this outright — Apple rejects "wrapper-only" apps), and without the honest decision framework for when a store shell is the right call versus a plain PWA versus real native development.
2. **Definitional/developer resources** — he.wikipedia.org, web.dev, HackerU, Android Developers, Chrome for Developers, Medium, scand.com, doubleslash.de. These explain what a PWA or a TWA *is*, in isolation, but never connect it to "I already have a working site or app, how do I get it into the stores" — and the TWA explainers are 100% in English, written for developers, never for the business owner who will actually be searching in Hebrew.
3. **One cost-skeptic voice** — danielzrihen.co.il, arguing most businesses don't need a native app at all, which the AI overview on queries 1–2 repeats and amplifies (the ~90%/"עשירית המחיר" claim). This is a real objection the article will have to answer honestly, not dismiss.
4. **Base44** (docs.base44.com, plus "בייס 44" itself surfacing as a related search under query 5) is the newest and most important entrant: an AI app builder whose own users are now the ones asking "how do I get this into the stores," and whose documentation is the #1 organic result for that exact question. That is the real-world version of the reader this article is for — someone who already has a working product (built by hand, by an agency, or by an AI builder) and needs the store-shell path explained honestly, in Hebrew, by someone who isn't selling the wrapper service.
5. **This desk's own sibling article** (`publish-app-to-stores`) is already ranking #2 under query 5 after about a week indexed — real evidence this domain can rank in this exact cluster, and a page this new article should link to/from once published.

### Verdict

Real Hebrew demand exists, and it is commercial, not just curious: nine AI overviews rendered across the queries that matter, three separate businesses sell the wrapper-conversion service outright, and a cost-skeptic competitor (danielzrihen.co.il) is actively arguing against the premise — all signs of a live buying decision, not an idle question. There is no single dominant Hebrew incumbent that owns the honest, technically specific version of this topic — the field is split between sales pages for the wrapper service (who have a commercial reason not to mention the store-policy risk the AI overview itself surfaces) and English-only developer documentation that never reaches a Hebrew business audience at all. A business owner's phrasing is generic and outcome-shaped — "להפוך אתר לאפליקציה," "איך הופכים אתר לאפליקציה," "להעלות אתר לחנות אפליקציות" — with zero awareness of the underlying mechanism; "Trusted Web Activity" itself returned not one Hebrew result on page 1 across any query, confirming it is a pure developer term that belongs inside the article's explanation (kept in English per house style) and must never be the target query. "PWA אפליקציה" sits one step closer to mechanism-aware but still reads to Google as definitional, not a route to a store listing — it is the term a business owner reaches for only after rejecting the app idea, which is exactly the objection (query 1/2's AI overview, danielzrihen.co.il) this article needs to answer rather than avoid.

**Recommended `primaryQuery`:** `להפוך אתר לאפליקציה`

**Recommended `secondaryQueries`:**
- `איך הופכים אתר לאפליקציה`
- `להעלות אתר לחנות אפליקציות`
- `הפיכת אתר לאפליקציה חינם`

**Recommended `answersQuestions`:**
- "איך הופכים אתר לאפליקציה?" — PAA, query 3 (`אתר לאפליקציה אנדרואיד`)
- "האם אפשר להעלות אתר כמו שהוא, בלי שום שינוי, לחנויות האפליקציות?" — AI overview, query 5 (`להעלות אתר לחנות אפליקציות`): no, a plain URL cannot be uploaded; it must be converted/wrapped into an APK/AAB or IPA first
- "האם צריך בכלל אפליקציה, או מספיק אתר שמותאם למובייל?" — AI overview, queries 1 and 2 (cites Daniel Zrihen's ~90%-of-businesses claim), and danielzrihen.co.il's own ranking page
- "מה ההבדל בין TWA ל-PWA?" — PAA, query 7 (`Trusted Web Activity`), translated from "What is TWA vs PWA?"
- "האם PWA עדיין רלוונטי ב-2026?" — PAA, query 7, translated from "Is PWA still a thing?"
- "האם אפליקציית WebView בטוחה לשימוש?" — PAA, query 7, translated from "Is WebView safe?"
- "למה אפל עלולה לדחות אפליקציה שהיא רק 'עטיפה' לאתר?" — AI overview, query 5, which states this explicitly as a review risk
- "מהי Progressive Web App (PWA) ולמה היא לא אותו דבר כמו אפליקציה בחנות?" — AI overview, query 6 (`PWA אפליקציה`)
