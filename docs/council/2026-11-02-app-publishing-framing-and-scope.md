# Council: app-publishing-framing-and-scope

- Date: 2026-11-02
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

CONTEXT

A solo technical founder in Israel (owns a small software house, builds AI agents and custom business systems for clients) is launching a side service: publishing other people's finished mobile apps to Google Play and the Apple App Store.

The mechanics, already verified against both stores' documented policies:
- Google Play: a NEW PERSONAL developer account must run a closed test with 12 testers for 14 continuous days per app before it can request production access. One tester uninstalling mid-cycle resets the count. Organisation accounts with a verified D-U-N-S number are EXEMPT from this. He has such a verified organisation account. So he can publish a client's Android app from his own org account within days, and later transfer it to the client's own account through Google's official app-transfer process (reviews, ratings and installs carry over).
- Apple: does NOT permit this model. Guideline 5.2.1 requires the IP owner to submit; 4.2.6 rejects apps from template/generation services; 4.3 flags many unrelated apps under one account. So on Apple the client opens their own Apple Developer account ($99/year, individual, no company needed) and invites him as Admin. His value there is the Mac, Xcode, certificates, provisioning, TestFlight, privacy labels, age rating, and handling App Review rejections.
- Every package includes a "developer readiness check" before payment: he installs the build on a real device and checks permissions, privacy policy accuracy, in-app account deletion, SDK target levels, store-payment compliance, assets, name availability. The client pays only after that check passes.

Current pricing (Israeli shekels, excluding VAT, excluding store fees which the client pays directly): Google launch 590, Apple launch 790, both stores 1,290. Each includes up to 2 updates/month for 3 months and WhatsApp support in Hebrew. After 3 months: 150/190/290 per month, or transfer the Google app out for 290. Extra update 120 per store. Rejection-diagnosis consulting 250/hour.

MARKET FACTS, gathered 2 November 2026:
- Fiverr sellers worldwide do the upload for 25 to 100 USD per store, 10 to 21 day delivery, no contract, no Hebrew, approval explicitly excluded from the gig.
- Tester-broker services sell "12 testers for 14 days" for about 15 USD. This is the cheap substitute for patient Android clients.
- Median.co (a web-to-app platform) sells done-for-you publishing at 1,490 USD plus 579/year for updates, but only for apps built on their platform.
- One Israeli competitor exists and was not known when pricing was set: app2store.co.il sells the identical service in Hebrew (AI-built app to both stores, testers included) at 2,490 to 3,990 shekels, i.e. two to four times his price.
- A Hebrew guide page about the 12-tester rule went live four days before this research from another operator.
- Google launched (Oct 2026) a feature letting anyone publish a vibe-coded Android app privately to their own devices from AI Studio, free, US and select markets, not Israel. Signal that Google expects a flood of AI-built apps and that "graduating to real distribution" is the step being sold.
- In Israeli Facebook groups, real posters ask about the 12-tester gate and about needing a Mac, in their own words, weekly. One reply to his own test post immediately raised: "how do I know you won't keep my app", and pointed out cheap tester services exist.

The buyer: people who built an app with AI tools (Claude, Cursor, Lovable, Base44, Expo, Flutter) or hired someone who vanished, and are now stuck at the store gate. Also small businesses and pre-seed startups needing an MVP listed this week.

He is building a Hebrew landing page for this now. It is structured as a content-led page: it explains Google's gate and Apple's rules and what a rejection looks like, before it pitches, with prices near the end.

THE QUESTION

Two parts, and I want a clear recommendation on each, not a survey.

1. FRAMING AND ADVERTISING. How should this be positioned and sold? Is "I publish your app to the stores" the right frame at all, or is the real product something else (compliance, rescue, a readiness audit, an outsourced release manager, a route to a first paying client for his software house)? What should the headline promise be, what should be given away free to create demand, and which channels realistically produce the first ten paying clients for a one-person operation with no ad budget? Be specific about what he should say and where.

2. MARKET SCOPE. He initially planned Israel-only, Hebrew-only, because the differentiator is "a reachable Hebrew-speaking human with a contract". He now worries that is too limiting. Should he publish the site in English as well, and sell internationally? Consider: the Hebrew market may be a few hundred relevant buyers a year; the English market is enormous but is where the 25-dollar Fiverr sellers live and where he has no trust advantage, no local legal standing, and a timezone problem. Consider also that the Apple half of the service (Mac, certificates, review handling) is the part that travels well internationally, while the Google half (publishing from his verified org account) carries account risk that scales badly with volume and with clients he cannot vet in person. Give a clear call: Hebrew only, English too and when, or something else. If English, say what the English page should NOT copy from the Hebrew one.

CONSTRAINTS
- One person. No ad budget. No employees. This is a side service next to his main consulting work; it must not consume all his time.
- His Google organisation developer account is a real asset with real risk: every policy strike lands on it, and Google suspends accounts associated with banned ones. Losing it would be serious.
- He cannot guarantee approval, and says so.
- Hebrew is his native-level language; his English is good but he is not a native marketer in it.

WHAT A GOOD ANSWER LOOKS LIKE
A clear pick on each question with the reasoning, the two or three strongest risks of that pick, and concrete wording and channels he could use this week. Disagree with the premises if they are wrong.


## Attachments

none

## Round 1: answers

### B = openai/gpt-6.1-sol

## 1. Positioning: sell “from finished app to a managed store launch,” not an upload

**Lead with the outcome buyers want; differentiate with the process and accountability.** “Compliance” sounds abstract, “uploading” sounds like a $25 task, and “outsourced release manager” describes the work rather than the buyer’s problem.

The product is: **a reachable professional who checks whether the app is launchable, handles the submission, and manages the review process—with ownership and scope clear upfront.**

Treat it as a profitable, bounded service in its own right. Consulting leads are a bonus, not a justification for unprofitable support.

### What the headline should say

For the Hebrew page:

> **האפליקציה מוכנה. עכשיו צריך להביא אותה לחנויות.**  
> בדיקת מוכנות ללא עלות, הכנת ההגשה וטיפול בתהליך הבדיקה — עם איש טכני זמין בעברית, מחיר ידוע והסכם מסודר.

CTA:

> **שלחו את האפליקציה לבדיקת מוכנות**

Immediately below—not hidden in the FAQ:

> הזכויות באפליקציה נשארות שלכם. ב־Apple ההגשה מתבצעת בחשבון שלכם. ב־Google נסכם מראש באיזה חשבון מפרסמים ואיך מתבצעת העברה. אישור החנויות אינו מובטח.

**Move a price anchor and the ownership explanation above the long educational content.** Keep the detailed guide below. Someone arriving from a Facebook discussion already knows they are stuck; do not make them read an essay before discovering what you offer.

A useful page sequence:

1. Outcome, CTA, starting price.
2. Who it is for—and what “finished app” means.
3. Ownership and account arrangements.
4. What you handle.
5. Google/Apple explanation.
6. Packages, exclusions, FAQ.

### Do not make your Google account the headline advantage

**Make client-owned accounts the default; treat temporary publication under your organisation as a selectively offered exception.**

The speed advantage is real, but it concentrates the wrong risk in your most valuable asset. A contract cannot insulate the account from Google enforcement. Nor does transferring an app later necessarily erase exposure from having published it.

For clients who can wait, explicitly acknowledge the cheaper route:

> אם הזמן לא דחוף ואתם מסתדרים לבד, ייתכן ששירות בודקים זול יספיק לכם. השירות שלי מיועד למי שרוצה שמישהו יבדוק את המוכנות וינהל את ההגשה — לא רק יספק בודקים.

That is a stronger answer to the objection than pretending tester brokers are not substitutes.

For organisation-hosted launches, require identity verification, a live walkthrough, evidence of ownership and SDK/backend disclosure. Initially decline high-risk categories and anything involving suspicious account history. **Do not offer your account as a workaround for a suspended developer.**

Also avoid promising “live within days.” Promise a submission timetable **after readiness passes**, while separating review and production-access decisions from your work.

One wording correction worth checking before publication: Google’s testing requirement concerns continuously opted-in testers; an uninstall is not itself necessarily a reset of the whole cohort. Describe the official requirement precisely rather than amplifying the scariest version.

### What to give away

**Give away diagnosis and instructions—not implementation.**

Offer two things:

- A public Hebrew checklist: **“האפליקציה מוכנה לחנויות? בדיקה לפני שמשלמים על פרסום.”**
- Your existing free readiness check, with a tightly defined output: **ready / blocked, with the principal blockers listed.**

Use a short intake form before doing device work: framework, build availability, login, payments, personal data, privacy-policy URL, existing developer accounts and previous rejections.

State the boundary:

> הבדיקה אינה כוללת תיקון קוד, כתיבת מדיניות פרטיות או פתרון דחיות קיימות. אם האפליקציה אינה מוכנה, תקבלו רשימת חסמים לפני כל תשלום.

Existing rejection investigations belong in paid consulting. Otherwise “free readiness” becomes free debugging.

### Where the first ten clients should come from

**Prioritise referrals and existing intent, not broad audience-building.**

| Channel | What to do this week |
|---|---|
| **Existing clients, developers and designers** | Send 15–20 personal messages. Ask specifically for someone with a finished app stuck before launch—not “anyone needing development.” |
| **Israeli AI-builder and mobile-development groups** | Answer actual questions about testers, Mac/Xcode and rejection notices. Give the useful answer publicly, disclose that you sell help, and link only where permitted. |
| **Small agencies, freelancers and AI-building instructors** | Approach five potential partners with a client-owned, fixed-scope launch handoff. They encounter this problem repeatedly and do not want to support it themselves. |

A personal outreach message:

> אני פותח שירות ממוקד למי שכבר בנה אפליקציה ונתקע לפני ההשקה ב־Google Play או ב־App Store. אני בודק מוכנות לפני תשלום ומטפל בהגשה ובתהליך הבדיקה, עם הסכם ברור לגבי הבעלות והחשבונות. אם יש אצלך לקוח כזה, אשמח לחיבור — לא צריך להעביר אליי את פיתוח האפליקציה.

A group reply:

> יש כאן שני דברים שונים: דרישת הבדיקה של Google, והאם האפליקציה עצמה עומדת בדרישות הפרסום. שירות בודקים יכול לפתור את הראשון, לא בהכרח את השני. [תשובה מעשית לשאלה.] גילוי נאות: אני מציע גם שירות הגשה ובדיקת מוכנות בעברית.

**Do not spend this week on paid ads, Product Hunt or generic English SEO.** Those are distractions from identifiable buyers already expressing the problem.

### Pricing and scope

You do not need to match the Israeli competitor immediately, but **do not let the current prices become permanent before measuring labour**. Their prices establish that yours are not obviously too high; they do not establish demand or profitability.

Use the current rates as a **limited first-five-client offer**, then review actual hours.

More urgently, replace three months of loosely defined support with:

- A defined submission and review-response allowance.
- A short post-launch defect/submission window.
- Precisely defined updates: client supplies a working build; feature development and compliance remediation are excluded.
- Explicit ownership, termination and Google-transfer terms.

At ₪590, six included updates plus WhatsApp access can consume the entire margin. Cheap launch pricing is less dangerous than unbounded obligations.

## 2. Market scope: Hebrew-first now; narrow English expansion after ten paid launches

**Do not launch a full bilingual acquisition operation now.** Win the first ten customers in Hebrew, measure support load and refine the scope. The local market does not need to sustain a large company to sustain a solo side service.

The immediate bottleneck is not the global number of buyers. It is finding qualified buyers, earning trust and delivering without disrupting your consulting work.

After ten completed paid launches, add **one English service page**, provided the work is profitable at your actual hours. If English referrals arrive sooner, take suitable ones manually; you do not need a second marketing operation to accept one.

### What the English offer should be

Lead with:

> **Your iOS app is built. Get it ready for App Store submission.**  
> Hands-on submission support in your own Apple Developer account: signing, TestFlight, store metadata and review responses. Fixed scope, readiness check before payment.

**Start internationally with Apple, in the client’s account.** Offer Android assistance in client-owned accounts as appropriate, but do not export the organisation-account hosting model as your international hook.

The English page should **not copy**:

- The Google-account shortcut as its central promise.
- Unlimited or open-ended WhatsApp availability.
- Hebrew-market pricing without checking labour economics.
- A long explanation of the tester gate as the main sales narrative.
- Any implication that you are an official Apple/Google partner or can secure approval.

Use asynchronous communication, stated response hours, a clear contract and capped review work. Acquire English clients first through developer and agency referrals—not by competing head-on with Fiverr search results.

## The three biggest risks

1. **Account concentration:** one unsuitable Android client can threaten an asset worth far more than the fee. Client-owned accounts and selective exceptions matter more than volume.
2. **Support economics:** novice AI builders may have unfinished software, not a publishing problem. Enforce readiness and distinguish submission work from development.
3. **Trust friction:** temporary custody creates a legitimate ownership objection. Explain account ownership and exit terms before selling speed—not after payment.

**Bottom line:** launch a Hebrew-first, ownership-explicit, fixed-scope store-launch service. Sell technical accountability, not a loophole. Expand into English later with client-owned-account submission support, initially focused on Apple.

### D = google/gemini-4-argon

### DISAGREEMENT WITH PREMISES

1. **You are radically underpriced and selling a loss-leader without realizing it.** At 1,290 ILS (~$350) for both stores—including a pre-payment device check, launch, *and* up to 12 updates over 3 months with WhatsApp support—you are pricing yourself like a desperate freelancer while your local competitor (app2store) charges 2,490–3,990 ILS. Worse, doing the "developer readiness check" *before* payment means you will spend hours diagnosing broken AI-generated spaghetti code for free, only for the client to take your checklist to a $25 Fiverr seller. 
2. **Hosting third-party apps on your main Google Org account is a fatal operational flaw.** Google’s "associated account" ban bots are ruthless and automated. If one "vibe-coder" client later pushes an update with a shady SDK, copyright infringement, or broken privacy policy, or if their own previously banned account links to yours during the transfer, **your primary software house loses its Google Play account permanently.**

---

### PART 1: FRAMING AND ADVERTISING

#### The Recommendation
**Do not frame this as an "upload service." Frame it as "The Last-Mile Rescue & Compliance Engineering for AI-Built Apps"—and treat it explicitly as a paid lead-generation funnel for your software house.**

Your real product is not bypassing the 12-tester rule; it is **getting poorly structured AI-generated apps past human reviewers without the creator needing to learn DevOps or buy a Mac.** Furthermore, because 80% of apps built with Lovable/Base44/Cursor will fail your readiness check (missing account deletion flows, hardcoded API keys, wrong SDK targets), your true revenue will come from charging them 1,500–4,000 ILS to *fix* the code so it passes.

**Immediate Pricing & Packaging Adjustments:**
*   **Raise your base prices:** 1,190 ILS (Google), 1,490 ILS (Apple), 2,190 ILS (Both). You are still undercutting app2store.co.il while signaling professional engineering quality.
*   **Kill the free pre-payment check:** Make the "Readiness Audit" a **290 ILS paid diagnostic** (credited 100% toward the launch package if they proceed). If their app fails, they get a concrete Hebrew report of what is broken in their code, and a quote from your software house to fix it.
*   **Cap the updates:** Include *1 post-launch hotfix* within 14 days. Move all ongoing updates to the monthly retainer immediately. 
*   **Address the IP theft objection up front:** State on the page that you sign a standard Israeli NDA/IP waiver before seeing their code, backed by your registered Israeli company (ח.פ. / עוסק מורשה).

#### Concrete Wording (Translate to natural Israeli Hebrew)
*   **Headline:** בניתם אפליקציה עם AI? אנחנו נעביר אותה את הגיהנום של Apple ו-Google תוך 7 ימים – עם חוזה, חשבונית, ואחריות על הבעלות שלכם. *(Built an app with AI? We’ll get it through the Apple and Google gauntlet in 7 days—with a contract, tax invoice, and guaranteed IP ownership.)*
*   **Sub-headline:** בלי לקנות מק, בלי לגייס 12 טסטרים ל-14 יום, ובלי להסתכן בחסימת חשבון על סעיפי פרטיות שלא הכרתם. בית תוכנה ישראלי סוגר לכם את הפינה הטכנית מול החנויות. *(Without buying a Mac, without recruiting 12 testers for 14 days, and without risking account bans over privacy rules you didn't know existed. An Israeli software house handles the technical wall for you.)*
*   **The Trust Hook (for the landing page):** *"איך אני יודע שלא תגנבו לי את האפליקציה?"* – Address this in an H2. Explain that Fiverr sellers hold your keys hostage, whereas you operate on their Apple account via Admin invite, and on Google you sign a binding Israeli legal agreement guaranteeing transfer on demand.

#### What to Give Away Free (Lead Magnet)
Do not give away free manual labor (the device check). Give away **"הצ'קליסט השחור של Apple ו-Google ל-2026: 9 הסיבות שבגללן אפליקציות שנבנו ב-Lovable, Base44 ו-Cursor נדחות אוטומטית"** *(The 2026 Apple & Google Blacklist: 9 reasons apps built in Lovable/Base44/Cursor get auto-rejected)*. Put it directly on the page (no email gate) with a WhatsApp button at the bottom: *"לא בטוחים אם האפליקציה שלכם עומדת בזה? שלחו לי הודעה."*

#### Channels for the First 10 Clients (Zero Ad Budget)
1.  **Search-Driven Sniping in Israeli Facebook Groups:** Do not just post pitches. Every morning, search groups (*"עושים תוכנה"*, *"סטארטאפים ישראלים"*, Lovable/Base44/Cursor Israel communities, *"בונים עם AI"*) for keywords: `טסטרים`, `Apple Developer`, `נדחתה`, `אפסטור`, `גוגל פליי`, `מפתח פרילנסר נעלם`. Reply publicly with the exact technical solution to their problem, then add: *"אני עושה את זה כשירות סגור דרך בית התוכנה שלי, שלחתי לך פרטית."*
2.  **B2B Partnerships with Israeli "No-Code / AI" Educators & Agencies:** Dozens of Israelis are currently selling courses and workshops on how to build apps with Base44, Lovable, and Cursor. None of them want to deal with Xcode certificates or Google Play compliance for their students. Offer them a 15% referral fee (or a white-label rate) to be their official "Store Publishing Partner." Two educators will get you 10 clients.

---

### PART 2: MARKET SCOPE

#### The Recommendation
**Stay 100% Hebrew-only and Israel-only right now. Do NOT launch an English site.**

#### The Reasoning
1.  **Your moat does not cross borders:** In Israel, your moat is huge: you speak Hebrew on WhatsApp, issue a recognized tax invoice (חשבונית מס), operate under Israeli law (solving the "will you steal my app" fear), and are priced 40% below the only local competitor. In the English market, you are just another offshore developer competing with $25 Fiverr gigs, with no legal recourse for the buyer and a higher price tag.
2.  **The Google Account Risk is Fatal Internationally:** If you let anonymous international clients publish through your verified D-U-N-S Google Org account, it is not a matter of *if* your account gets banned, it is *when*. Scammers, crypto-drainers, and previously banned developers actively hunt for "publish on my org account" services to launder their apps. You cannot vet them in English over text.
3.  **Capacity Constraints:** You are a solo founder running a software house. Ten Israeli clients at ~2,000 ILS + 3–4 code-fix upsells at 3,000 ILS gives you ~30,000 ILS/month of high-margin side revenue and a pipeline of local B2B retainers. That will already max out your spare time. You only *need* 50–100 buyers a year; the Israeli market easily holds that.

*(Note: If you ever do expand to English later, you must **never** offer the Google Org Account bypass to international clients—only offer "Apple App Store Submission & Rejection Rescue" operating strictly inside the client's own accounts, priced at $499+ as a premium engineering service.)*

---

### RISKS OF THIS RECOMMENDATION

1.  **Google Play Contagion Risk (Even in Israel):** Even a well-meaning Israeli client can get your Google Org account flagged or suspended if they violate policies or if they transfer the app to a personal account that Google has previously linked to a banned developer. **Mitigation:** Consider helping Israeli clients pass the 12-tester gate on *their own* personal account (using a vetted local tester pool you manage) as the default, and reserve publishing on your Org account only for registered Israeli companies/clients you have thoroughly vetted and who pay a premium for "48-Hour Express Launch."
2.  **The "Support Swamp" with Non-Technical Founders:** Vibe-coders do not understand the difference between a store rejection (your scope) and a bug in their AI-generated code (their problem). Once you touch their build, they will blame you on WhatsApp for every crash. **Mitigation:** Your contract must draw a hard line: you fix *configuration, build, and metadata* issues. Any change to application logic or UI required by Apple/Google (e.g., building an account deletion screen or fixing a broken login) is billed separately at your software house hourly rate (250–350 ILS/hr).
3.  **Platform Obsolescence:** AI coding platforms (Lovable, Replit, AI Studio) are actively building one-click cloud Mac compilation and automated store submission pipelines. Within 12–18 months, the mechanical upload part of this service will be commoditized by the platforms themselves. **Mitigation:** Use this service *now* to capture non-technical founders with budget, solve their launch headache, and immediately convert them into long-term clients for your core business (custom AI agents and backend systems).

### C = x-ai/grok-4.7

**Recommendation:** Sell a Hebrew store-rescue, not an upload. Stay Hebrew-only on the Google org-account product. Do not open an English “I’ll publish your app” page.

## 1. Framing

**Pick:** The product is “your finished app is stuck at the store; a local person with a contract gets it through review, or tells you why it cannot, before you pay.” It is not “I upload apps.”

“I publish your app” is what Fiverr sells for $25–100 and what the trust objection already attacked (“how do I know you won’t keep my app”). Your org account makes that fear concrete: on Google, the listing starts in your name. The Israeli competitor at 2,490–3,990₪ shows local buyers will pay for a Hebrew human. Your 590/790/1,290₪ prices you as the cheap upload, which attracts the worst builds and the most WhatsApp. Do not cut price. If anything, hold it and narrow what is included.

The software-house angle is the real upside, but it is a back-end filter, not the headline. Publishing margin will not pay for two updates a month for three months plus rejection handling. Cap concurrent clients (about four). Tighten the package to: readiness check, one submission per store, one rejection round, 30 days of critical fixes. Extra updates stay at 120₪. The 150/190/290₪ retainer is optional and easy to refuse.

**Headline:**  
האפליקציה כבר בנויה. אני מוציא אותה לחנות — בחוזה, בעברית, ואתם משלמים רק אחרי שבדקתי שהיא באמת מוכנה.

**Subhead:**  
בגוגל: פרסום מחשבון ארגון מאומת, בלי 14 יום של 12 בודקים, והעברה רשמית לחשבון שלכם. באפל: החשבון שלכם מהיום הראשון; אני מביא את המק, התעודות, TestFlight ואת הטיפול בדחייה. אני לא מבטיח אישור.

**Above the fold, answer the theft fear in one line:** חוזה ישראלי, אתם בעלי ה-IP, באפל אתם הבעלים של החשבון, בגוגל תאריך העברה קבוע מראש.

**Give away:** the Hebrew explainer you are already writing, plus a one-page checklist titled “לפני שאתם משלמים למישהו שיעלה אפליקציה” — whose account, what “transfer” means, what a rejection looks like, what you refuse. That page is the ad. Do not give away submission, certificates, or tester-hacks.

**CTA:** שלחו בילד או מייל דחייה. אם בדיקת המוכנות נכשלת — לא סוגרים.

**This week, no ads:**
- Answer, in full, the weekly Facebook posts about the 12-tester rule and “I need a Mac.” Link the explainer, not a price list.
- One personal post, same wording as the headline, in the founder groups you already read.
- Ten direct messages to people who already paid you, or who build with Lovable, Base44, Cursor, Expo, or Flutter and do not do stores. Offer a referral, not a partnership deck.
- One note to two Israeli freelancers who ship builds and disappear before review: you are the release step, they keep the build fee.

**Risks:** The included-support package will eat the consulting week if you do not cap it. Publishing from your org account is the trust problem and the ban problem in one feature — one policy strike can associate-suspend the account you actually need. Underpricing versus app2store.co.il selects clients who comparison-shop uploads, not clients who will hire the software house.

## 2. Market scope

**Pick:** Hebrew only for now. English later, as a different product, only after the Hebrew offer has a few paid clients and a written refusal list. Not a translation of this page.

A few hundred relevant Hebrew buyers a year is enough. The constraint is your hours and that Google account, not TAM. The English market is where $25 sellers and $15 tester brokers already cleared the price, and where you cannot look a client in the eye before their app sits on the account Google can ban.

**If you add English, the page must not copy:**
- Publishing Android apps from your org account, or any “I’ll be the developer of record, then we transfer.”
- Shekel prices, WhatsApp-in-Hebrew, or “testers included.”
- The promise that many unrelated apps can live under one publisher. That is how org accounts get flagged, even with a D-U-N-S exemption from the 14-day test.
- A guarantee-shaped headline. You still cannot promise approval.

**What an English page may sell, later:** client-owned Apple account only. You are the Mac, certificates, TestFlight, privacy labels, and rejection diagnosis. Fixed scope, async, priced in USD well above Fiverr (think several hundred dollars, not 790₪ translated). Google help on that page is advice and a readiness audit, not your account.

**Risks of this pick:** The competitor’s Hebrew guide can outrank you if you delay the explainer. Some good English-speaking clients in Israel will bounce off a Hebrew-only page — add a short English paragraph that says the service is Israel-contract, Hebrew support, client-owned Apple account, no international Android publishing. Going English now, even “just a page,” will produce support load and account exposure before you have a vetting habit.

**Account rule, both languages:** refuse kids, gambling, crypto, health claims, scraped content, and anything you would not put your own name on. Transfer Google listings as soon as Google allows. Short dwell time on your org account matters more than another 590₪.

### A = moonshotai/kimi-k3

## TL;DR

1. **Framing:** Don't sell "uploading." Sell "the last mile" — a managed launch with a named, reachable human, where the free readiness check is the front door and approval is never promised. The launch fee is acquisition; the retainer, rejection consulting, and downstream dev work for your software house are the real revenue.
2. **Scope:** Hebrew only. Revisit English only after ~15–20 paying Hebrew clients or two consecutive months of idle capacity. The org-account fast lane — your actual moat — must never be offered to unvetted foreigners.

---

## 1. Framing and advertising

**The call:** The product is not "I publish your app." It's **"your app, finally live, with someone who answers on WhatsApp when Google says no."** Your buyer's emotional state is not "I need an uploader" — it's "I spent three months building this and I'm stuck at the gate." Fiverr sells uploads for $25; you cannot out-cheap them, and at ₪590/₪790 you're not trying to. You sell completion: readiness check → submission → rejection handling → 3 months of updates → a clean exit (official transfer). "Managed launch" (השקה מנוהלת), not "upload service."

**Headline (Hebrew):**
> **"בניתם אפליקציה? נשאר הקילומטר האחרון."**
> אני מעלה אותה לגוגל פליי ולאפסטור — בלי 12 בודקים, בלי מק, בלי סיבובים מול App Review. בדיקת מוכנות חינם. משלמים רק אם האפליקציה באמת מוכנה.

**Trust block — this is your conversion lever, because the "will he keep my app" objection already surfaced:**
> "באפל: החשבון על שמכם מהיום הראשון, אני אורח שאפשר להסיר בלחיצה. בגוגל: חוזה שמחייב העברה רשמית לחשבון שלכם ב־290 ₪, מתי שתבקשו — עם הביקורות וההתקנות."

Putting the transfer price on the page converts the objection into a feature.

**Approval FAQ, verbatim:**
> "מי שמבטיח לכם אישור מראש — משקר. אני מבטיח ש־90% מסיבות הדחיה יתגלו בבדיקה החינמית, ושאם החנות דוחה, תדעו בעברית פשוטה למה ומה מתקנים."

**Tester-broker FAQ:**
> "12 בודקים ב־15 דולר: בודק אחד שמסיר באמצע מאפס את הספירה, בסוף עוד מחכה בקשת גישה לפרודקשן, וצד האפל בכלל לא נפתר. זה לא פתרון, זה הימור זול."

**What to give away free:**
- The readiness check — already free, make it the *only* hero CTA ("שלחו את האפליקציה לבדיקה חינם"). Require the actual build file plus a short intake form; timebox it to ~45 minutes; cap at 3/week. A "no" from the free check is itself a trust-builder — publish anonymized stats ("החודש בדקתי 9 אפליקציות; 4 נתקעו על מדיניות פרטיות").
- A free "rejection decoder": "קיבלתם מייל דחייה מגוגל או אפל? שלחו לי — אסביר בעברית מה כתוב שם." Ten minutes of your time, captures the highest-pain segment, naturally upsells to ₪250/hr diagnosis.
- The definitive Hebrew guide to the 12-tester rule with every option honestly priced (DIY, brokers, you). A competitor's guide went live 4 days ago — the SEO window is open *now* and won't be for long.

**Channels for the first ten clients, ranked:**
1. **Course and community instructors.** Base44's Israeli community, Hebrew vibe-coding course teachers. Their students hit the store wall the week after the course ends — that's your exact moment. Offer a student discount or a 10–15% referral fee. Highest intent, weekly cohorts, zero budget.
2. **The Facebook threads you already found.** Answer the weekly "12 testers / need a Mac" questions fully, under your real name, no pitch, profile links to the guide. Two or three substantive answers a week.
3. **Build-in-public case posts** after every launch (with permission): what got flagged, how long each store took, screenshots. Proof compounds; promises don't.
4. **Reciprocal referrals** from web agencies and Mac-less freelance devs: "you don't touch app stores, I don't build websites." Slower, but each partner is a stream, not a client.
5. Don't list on Fiverr — it drags you into the $25 bracket under platform rules.

**One premise I'll push back on: price.** The one local competitor charges 2–4x you. At ₪1,290 for both stores you read as confusingly cheap to a buyer whose problem is trust, not money. Mark current prices on the page as **"מחיר השקה ל־10 הלקוחות הראשונים"** and raise ~50% after (still half the competitor). This creates urgency for the first ten and stops the Fiverr comparison. Also remember your own unit economics: the launch fee is acquisition; ₪290/month retainers and eventual software-house work are the margin. This service is negative-CAC lead gen for your main business — say that in your spreadsheet, not on the page.

**Risks of this framing:**
1. **Free-check abuse.** One person, no employees — tire-kickers will eat your week. The intake form + build-file requirement + weekly cap are non-negotiable.
2. **Expectation gap.** "Managed launch" still sounds like guaranteed approval to an anxious buyer. Define "done" contractually: submission plus store-process rejections handled; content/policy rejections are the client's fix. One public blowup in a small Hebrew community costs you the market.
3. **The org account is a single point of failure.** Every fast-lane launch is strike exposure. Vet builds (permissions, SDK scan), refuse whole categories (VPN, finance, crypto, health, kids, gambling), cap concurrent org-account apps, and treat the 3-month transfer-out as the default path, not an upsell.

## 2. Market scope

**The call: Hebrew only. Do not build the English page now.**

- **Capacity math settles it.** As a side service you can handle maybe 8–15 launches a month. A Hebrew market of a few hundred buyers a year, with one competitor at 2–4x your price and no incumbent Hebrew content, is enough to saturate your capacity through next year. You don't have a demand problem yet; you have an execution problem.
- **Your moat doesn't travel.** In Hebrew, "a reachable human with a contract" is a differentiator because the alternative is a faceless Fiverr gig. In English you *are* the faceless gig — non-native marketing copy, no local legal standing, a timezone mismatch, and zero SEO chance on generic terms ("how to publish app to Google Play" is unwinnable; the Hebrew equivalent is wide open).
- **The Google half must not be exported.** Publishing strangers' apps from your verified org account, for people you can't vet, in jurisdictions you can't pursue, is how you lose the account — and Google bans by association. This is the one asset that scales badly and fails catastrophically. Don't.
- **The Apple half travels but is the most commoditized** — it's exactly what Fiverr sells, minus your language advantage.

**Trigger to revisit:** add English only after 15–20 paying Hebrew clients *and* a documented playbook, or after two straight months of under-used launch capacity. When you do, the English page must **not** copy the Hebrew one:
- **No org-account fast lane.** Apple-side only (client's own account, your Mac/certificates/review handling), or a fixed-scope productized readiness audit delivered async as a document — no account risk, no timezone pain, arguably sellable as "overnight turnaround" to the US.
- **No "reachable human" trust angle** — it dies in English. Replace with niche specificity: "App Store submission for Expo/React Native apps," or "App Review rejection rescue." Generic English publishing = race to $25.
- **No shekel pricing benchmarked against Fiverr.** Anchor to Median.co's $1,490 or to agency rates; in English, cheap reads as suspect, not attractive.
- **No generic SEO content.** Only tool-specific, guideline-specific deep content where expertise, not language, ranks.

**Risks of staying Hebrew-only:**
1. **Ceiling.** The market caps fast. That's fine *if* you treat this as a side service plus lead-gen — the growth path is retainers and downstream dev, not geography.
2. **Policy decay.** Google's AI Studio private-publishing move signals the 12-tester gate may soften. Your org-account exemption is a temporary loophole — a wedge, not a foundation. Build the brand on release-management skill and the Apple labor, which survive any policy change.
3. **The Hebrew content race is on now** (competitor guide, 4 days old). Every hour spent on an English page is an hour not spent owning the Hebrew conversation while it's still ownable. Speed beats scope this quarter.

**Bottom line:** sell the last mile in Hebrew with the free check as the door and the transfer guarantee as the trust anchor; win the instructors and the Facebook threads this month; keep the English page in a drawer until the Hebrew engine is full.

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | B: Best balance of actionable positioning, Hebrew acquisition tactics, bounded scope, account-risk controls, and a clear staged English expansion; avoids unsupported approval promises.; C: Clear, practical Hebrew-first recommendation with useful ownership wording and differentiated future English offer, but still foregrounds org-account publishing despite its acknowledged risks.; A: Strong messaging and channel suggestions, but undermined by an invented 90% diagnostic guarantee, misleading tester-broker dismissal, and speculative lead-generation economics.; D: Useful warnings about pricing and account exposure, but unsupported failure-rate claims, alarmist competitor accusations, and seven-day approval-shaped promises contradict the service’s constraints. |
| google/gemini-4-argon | D: Best challenges the dangerous premises (free manual labor, severe underpricing, and catastrophic Google account contagion risk) while giving the sharpest commercial strategy and Hebrew copy.; A: Excellent structure, punchy Hebrew copy, and great actionable tactics (like the rejection decoder and launch pricing), though keeping the manual device check free is riskier than D's approach.; B: Very sensible operational advice on de-centering the Google org account risk and tightening scope boundaries, though the marketing copy is a bit dry.; C: Covers all parts of the prompt concisely and accurately, but offers less strategic depth and weaker copy than the top contenders. |
| x-ai/grok-4.7 | B: Most correct and usable: client-owned accounts as the default, no invented guarantees, fixed scope, concrete Hebrew copy and this-week channels, and a later Apple-only English offer that does not export the risky Google org account.; C: Clear, constraint-aware picks with strong capacity caps, trust wording, and a sharp English exclusion list, but it still advertises the org-account fast lane as a core feature.; A: Strong structure, channels, and English boundaries, but the headline sells an upload/loophole and it invents a 90% rejection claim plus an unconditional transfer promise.; D: Good pricing and account-risk instincts, but internally contradictory: it promises a 7-day gauntlet and org-account bypass, overstates revenue and failure rates, and would overload a solo side service. |
| moonshotai/kimi-k3 | A: Most complete: uses nearly every market fact (Median.co anchor, AI Studio policy-decay signal, tester brokers, 4-day-old competitor guide SEO window), gives verbatim Hebrew copy and FAQs, operational caps (45-min timebox, 3/week checks, concurrent app caps), explicit triggers for English expansion, and turns the transfer price into a trust feature.; D: Boldest and best-argued premise challenge (paid credited audit, price raise, fix-broken-apps as real revenue), highly specific channels with actual Hebrew search keywords and educator referral terms; docked slightly for a 7-day headline promise that conflicts with the can't-guarantee-approval constraint and for discarding the free-check differentiator.; B: Most risk-sophisticated account posture (client-owned accounts default, org hosting as vetted exception), corrects the uninstall premise, smart page-restructure advice and outreach templates; but less decisive on pricing and leverages fewer of the given market facts.; C: Tight, correct calls with good Hebrew copy, a refusal list, dwell-time rule, and the English-paragraph nuance, but thinnest on channel mechanics, weaker fact usage, and mildly inconsistent on whether to hold or raise price. |

| Model | Label | Points | Mean position |
|---|---|---|---|
| openai/gpt-6.1-sol | B | 12 | 2.00 |
| moonshotai/kimi-k3 | A | 11 | 2.25 |
| google/gemini-4-argon | D | 9 | 2.75 |
| x-ai/grok-4.7 | C | 8 | 3.00 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 9960 | 2218 | 0.0471 |
| google/gemini-4-argon | 10696 | 2296 | 0.0444 |
| x-ai/grok-4.7 | 12869 | 7333 | 0.0663 |
| moonshotai/kimi-k3 | 10847 | 13881 | 0.1596 |
| Total | 44372 | 25728 | 0.3173 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-11-02-app-publishing-framing-and-scope.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1793652743-A5tnwBMenhASJEgiQ6uQ | 200 | 35593 |
| openai/gpt-6.1-sol | 1 | gen-1793652743-Qbk7YWQVXuyj2IfO0Ncm | 200 | 59711 |
| x-ai/grok-4.7 | 1 | gen-1793652743-KtZzn7uzz8xU9Jb7hv4I | 200 | 92524 |
| moonshotai/kimi-k3 | 1 | gen-1793652743-mnGsVQ7YpOQjc5LtHZuu | 200 | 107451 |
| google/gemini-4-argon | 2 | gen-1793652850-uYxnQiHLhm8wUx5FO85u | 200 | 5495 |
| openai/gpt-6.1-sol | 2 | gen-1793652850-8got3egLDhc1uWjMiWqI | 200 | 6938 |
| moonshotai/kimi-k3 | 2 | gen-1793652850-SkexR6Jizqro2PqZsYwn | 200 | 42709 |
| x-ai/grok-4.7 | 2 | gen-1793652850-EppjVVaGrWBl78qYixxb | 200 | 50585 |

## Synthesis

_Chairman: the calling Claude session. Read the rounds above and replace this line with: Agreement, Disagreements, Recommendation, Confidence._
