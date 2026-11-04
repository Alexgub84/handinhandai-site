# Council: app-publishing-redesign

- Date: 2026-11-02
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

CONTEXT

This is round three. Round one framed a business, round two killed it in a pre-mortem, this round fixes it. Six independent pre-mortems reached a near-unanimous verdict, which you must now treat as given facts and design against. Do not re-litigate the diagnosis.

THE BUSINESS (unchanged facts)

A solo technical founder in Israel, owner of a small software house, bills high consulting rates on his main work. Side service: publishing other people's finished mobile apps to Google Play and the Apple App Store.

- Google Play: new PERSONAL developer accounts must run 12 testers for 14 continuous days per app before production access. Verified ORGANISATION accounts with a D-U-N-S are exempt. He has one. Today's model: publish the client's app from HIS organisation account within days, transfer later to the client's own account via Google's official transfer. His own real clients' live products sit on that same account.
- Apple: forbids this model (5.2.1 IP ownership, 4.2.6 template services, 4.3 spam). The client opens their own account ($99/yr) and invites him as Admin. His value is the Mac, Xcode, certificates, provisioning, TestFlight, privacy labels, age rating, and App Review rejection handling.
- Today's packages include a FREE developer readiness check before payment.
- Today's prices (ILS, ex VAT): Google 590, Apple 790, both 1,290, each including up to 2 updates/month for 3 months plus Hebrew WhatsApp support. Then 150/190/290 per month. Transfer out 290. Extra update 120/store. Rejection consulting 250/hour.
- Market: Fiverr does uploads at 25-100 USD. Tester brokers sell 12 testers for ~15 USD. An Israeli competitor, app2store.co.il, sells the same service in Hebrew at 2,490-3,990 ILS. Google is making AI-built app publishing progressively easier.
- Decided already: Hebrew only for now; never promise approval; content-led landing page that explains the stores' rules before pitching.

THE VERDICT TO DESIGN AGAINST (from six independent pre-mortems; treat as given)

1. PRIMARY CAUSE OF DEATH, named first by all six seats: opportunity-cost starvation. The free readiness check plus a three-month support tail consume founder hours worth far more in consulting. Measured: roughly 46-55 ILS/hour blended, against consulting worth many times that. One seat's trajectory: Nov 2026, 2,400 ILS over 35 hours; by Jun 2027, ~15,000 ILS over ~280 hours. He does not quit in a crisis; he quietly stops wanting the next client, stops posting in the Facebook groups that are his only acquisition channel by Apr-May 2027, and the business fades out. Quote: "He got customers. He stopped wanting the next one."
2. Named secondary by all six: account contagion. One client app draws enforcement onto the shared organisation account that also carries his own clients' live products. An in-house review computed the breakeven: hosting a stranger's app only pays if the probability of an account-level strike is under 0.24 percent per job, and concluded the correct number of unvetted hosted apps is zero.
3. Named secondary by four: the content-led page teaches the workaround, readers self-serve with a $15 tester broker or a friend's Mac and never pay.
4. Named secondary by three: the custody fear ("how do I know you won't keep my app") blocks the sale before economics matter.
5. Named secondary by two: in a market of a few thousand people, one refused fee or one blamed rejection halves inbound permanently.
6. The most load-bearing assumption, named first by four seats: that clients' "finished" apps are actually store-ready without unpaid engineering. If false, acquisition cost in free hours destroys the economics before any money changes hands.
7. All six called the death SLOW, not catastrophic.

YOUR TASK

Redesign the offer so that each of those causes is structurally impossible or materially defanged. Not mitigations bolted onto the current design: if the shape of the offer has to change, change it.

Answer these, concretely:

1. THE SHAPE. What is the offer, precisely? What is sold, in what order, at what price, with what explicitly excluded? If the free readiness check must become paid, price it and say how it is positioned so it still generates leads. If the three-month inclusive support tail must go, say what replaces it. Give the actual package list with numbers.
2. THE ECONOMICS. Show the arithmetic. For a realistic job including one rejection loop, what is the hour count and the resulting hourly rate under your design? State the target rate you are designing toward and justify it against his consulting alternative. If your design means fewer, larger jobs, say how many per month make this worth doing at all, and name the number below which he should shut it down.
3. THE GOOGLE ACCOUNT. Decide: does he host client apps on his verified organisation account or not? If yes, state the vetting gate, the maximum concurrent hosted apps, and what makes the expected value positive against the 0.24 percent breakeven. If no, say what replaces the Android half of the offer and whether the offer still works without its only real structural advantage.
4. THE UNPAID-WORK LEAK. How does the first contact stop being free engineering? Design the intake so that an app that is not ready is identified at near-zero cost to him, and so that discovering it is itself monetised or automated.
5. THE SELF-SERVE LEAK. The page must rank in search, which means it must be genuinely useful, which teaches people to do it themselves. Resolve that tension concretely. What is published, what is withheld, and what makes a reader who CAN do it themselves still pay?
6. THE SCALE QUESTION. Under your design, is this a business, a lead magnet for the software house, or a productised one-off that should be run for six months and then killed? Answer plainly. If it is a lead magnet, say what it feeds and how the handover works.
7. THE KILL CRITERIA. Three to five pre-registered, numeric, observable conditions that mean stop. Each with the metric, the threshold and the date by which it is evaluated. These must be checkable by one person with no tooling.

CONSTRAINTS
One person, no ad budget, no employees, side service next to better-paying consulting. Hebrew native. The organisation account is an existing asset carrying his own clients' live products. He cannot guarantee store approval and says so.

WHAT A GOOD ANSWER LOOKS LIKE
A single coherent redesign, stated as decisions with numbers, not a menu of options. Where you keep something from the current design, say why it survives. Where you kill something, say so plainly. If your honest conclusion is that no redesign makes this worth a competent person's time, say that and defend it. Under 1400 words.


## Attachments

none

## Round 1: answers

### A = openai/gpt-6.1-sol

## Recommendation

**Kill account rental and cheap uploading. Replace them with a paid, tightly scoped store-release service, entirely inside client-owned accounts.** Run a six-month pilot as a productised service within the software house—not a separate growth business.

The proposition becomes: **“Your app, your accounts; I handle the release process.”** Not faster Google eligibility, guaranteed approval, or unlimited troubleshooting.

### 1. The offer and prices

All prices below are ILS, excluding VAT and store fees.

| Product | Price | Precisely included |
|---|---:|---|
| Release assessment—one app, up to two stores | **790** | Up to 45 minutes of review; written ready/not-ready verdict; missing-items checklist; fixed release quote |
| Android release | **2,490** | One submission in the client’s account; listing configuration from supplied materials; declarations with client sign-off |
| Apple release | **3,290** | One submission in the client’s account; signing, provisioning, upload, supplied listing configuration and declarations |
| Both stores | **4,490** | The two release scopes above for the same app |
| Additional release/rejection work | **990/hour**, prepaid | One-hour blocks; further work requires approval |

**The assessment is mandatory, paid upfront and not credited.** It is a deliverable, not a deposit disguising free presales.

Each release includes **one administrative rejection-response round, capped at 45 minutes**, used within 30 days of submission. It excludes code changes, new builds requiring engineering, legal arguments, policy appeals and additional submission cycles.

Also excluded:

- App development, debugging and SDK remediation.
- Writing privacy policies or validating legal compliance.
- Producing screenshots, translations or marketing copy.
- Recruiting testers or guaranteeing production access.
- Approval guarantees, ongoing monitoring and account recovery.

**Kill the three-month support tail, subscriptions and transfer fee.** Later updates are new work, billed in prepaid blocks. WhatsApp survives only for logistics on an active order; technical questions become paid work.

Provider-caused submission mistakes are corrected without charge.

### 2. Economics

Design target: **at least 1,000 ILS per founder hour, counting acquisition, administration and unpaid corrections—not just submission time.**

A realistic dual-store job with one administrative rejection loop:

| Activity | Hours |
|---|---:|
| Allocated content/acquisition time | 0.75 |
| Sales administration, payment and handover | 0.50 |
| Paid assessment | 0.75 |
| Preparation and two-store submission | 2.25 |
| One rejection-response round | 0.75 |
| Contingency | 0.25 |
| **Total** | **5.25** |

Revenue: **790 + 4,490 = 5,280**.  
Realised rate: **5,280 ÷ 5.25 = 1,006 ILS/hour**, before tax and ordinary software-house overhead.

This is a pilot hypothesis, not a claimed industry benchmark. Android-only and Apple-only work must meet the same measured hurdle.

The actual hurdle is **the greater of 1,000 ILS/hour or 125% of his realised consulting rate**, compared on the same basis. The premium compensates for fragmented work and consumer-facing friction. If his consulting rate exceeds 800 ILS/hour, this example does not clear the hurdle; raise prices before launch or do not launch.

**Two release customers per month** make the experiment worth maintaining: approximately 8,000–10,500 ILS revenue depending on package mix, plus diagnostic-only sales. Below two monthly releases sustainably, stop promoting it.

### 3. Google: no shared-account hosting

**Maximum client apps hosted on his organisation account: zero.** No exceptions, including “temporary” publication.

Android becomes account setup guidance, release preparation and submission support:

- Existing eligible client account: proceed.
- Genuine organisation: client obtains its own verification and D-U-N-S where required.
- New personal account: client completes the required testing process; release work starts after the necessary eligibility is established.

No invented organisations, rented identities or promises to bypass testing.

This removes the former structural advantage. The remaining advantage is competent Hebrew-language execution, particularly for dual-store launches. **Demand at these prices must prove that this is enough.** The existing account is protected infrastructure, not inventory for sale.

### 4. Stop unpaid engineering at intake

The landing page leads to a structured form, not “send me your app.”

Required before purchase:

- Platform/framework and account status.
- A short screen recording of the principal user journey.
- Confirmation of a reproducible build and source access.
- Privacy-policy URL, app assets and support contact.
- Authentication/demo-access details.
- Answers on payments, children, sensitive data and third-party content.

Deterministic rules reject incomplete forms automatically. Passing the form means **eligible to buy an assessment**, not store-ready.

The founder does not open repositories, install builds or diagnose errors before payment. Initial responses use templates and take at most five minutes.

If the paid assessment finds engineering work, the customer receives the promised findings. No unpaid repair follows. A repair project requires a separate software-house discovery order and schedule.

### 5. Resolve the self-serve leak

Publish genuinely useful Hebrew guides:

- Account ownership and fees.
- Google testing requirements and legitimate organisation eligibility.
- Apple signing and submission basics.
- Readiness checklists and common rejection categories.
- Realistic timelines and explicit service boundaries.

**Do not withhold essential instructions to manufacture dependence.** Withhold only client-specific analysis, execution and responsibility for coordinating a release.

The page has two honest outcomes:

1. “Use this checklist and publish yourself.”
2. “Buy an assessment; delegate the release if ready.”

People capable of DIY pay to avoid learning, interruptions and release administration—not for a secret workaround. Those unwilling to pay are not failed conversions worth pursuing.

Marketing has a **90-minute monthly ceiling**, including Facebook activity and content maintenance. No personalised troubleshooting in comments or messages.

### 6. What this is

**A six-month productised-service pilot inside the software house.** It is neither an account-hosting business nor a deliberately loss-making lead magnet.

It can generate consulting work incidentally: a not-ready assessment may produce a separate paid discovery engagement, followed by a normal engineering proposal. The customer receives the assessment regardless; no obligation to hire him. Engineering revenue must not conceal a loss-making publishing service.

The main risk is straightforward: the market may not buy convenience at economically acceptable prices. That is preferable to winning customers whose work he resents.

### 7. Pre-registered kill criteria

Assume launch **1 September 2026**, ending **28 February 2027**. Track time and receipts in one spreadsheet.

1. **Demand:** Fewer than **three paid release orders by 30 November 2026** → stop acquisition and finish existing commitments.
2. **Hourly economics:** After five completed releases, or **30 November**, whichever comes first, realised publishing revenue divided by **all associated hours** is below the defined hurdle → stop selling at these prices.
3. **Scope failure:** By **31 December**, more than **20% of release orders** require over **30 minutes of unpaid out-of-scope work** → suspend sales; the scope boundary has failed.
4. **Minimum useful volume:** Fewer than **six paid release orders during December–February**, evaluated **28 February 2027** → close the standalone offer.
5. **Risk boundary:** **Any client publication on his shared organisation account**, or any request for credentials handled outside client-controlled access arrangements → pause immediately and correct the process before accepting another order.

**Bottom line:** sell bounded professional execution at professional rates. If buyers only want the former cheap shortcut, let this service die quickly rather than subsidising its slow death.

### C = google/gemini-4-argon

### 1. THE SHAPE

Kill the cheap upload utility, the free readiness check, the hosting model, and the three-month support tail. Reposition as a high-trust, zero-custody **Store Compliance & Release Engineering** service on the client’s own accounts, priced beneath `app2store.co.il` (2,490–3,990 ILS) but at consulting-grade hourly yields. 

**The Offer Sequence & Pricing (ILS, ex VAT):**

*   **Stage 0: Automated Pre-Flight Gate (Free, 0 founder minutes).** A web form requiring checkboxes: I have an Apple/Google account (or D-U-N-S), a privacy policy URL, raw source/build files, and a 390 ILS budget for an initial audit.
*   **Stage 1: Paid Diagnostic & Compliance Audit — 390 ILS.** (Credited 100% toward Stage 2 if the build passes on the first try; kept if it fails). He spends 45 minutes maximum checking the binary/repo against a 25-point store compliance rubric. Output: a green light, or a specific red-light ticket list for their developer.
*   **Stage 2: Turnkey Store Submission (Client’s Account Only).**
    *   **Google Play (Managed 14-Day Track or Client Org):** 1,490 ILS.
    *   **Apple App Store:** 1,890 ILS.
    *   **Both Stores (Bundle):** 2,790 ILS.
    *   *Included:* Store listing setup, privacy nutrition labels, age ratings, certificates/provisioning, initial submission, and **one** store-rejection remediation cycle ( administrative/metadata only).
    *   *Completion definition:* The moment the app hits "Published" (or "Ready for Production" after the 14-day loop on Google), the contract ends. No 3-month tail.
*   **Stage 3: Post-Launch & Exceptions (Strict A La Carte).**
    *   **Single Version Update:** 450 ILS per store.
    *   **Code-Level Rejection Remediation / Engineering:** 450 ILS/hour (minimum 2 hours, pre-paid).
    *   *Killed:* Monthly retainers (150–290 ILS/mo is paid servitude) and WhatsApp support (all comms move to asynchronous email/ticket threads).

---

### 2. THE ECONOMICS

*   **Target Hourly Rate:** **450 ILS/hour**. High enough that he does not resent the work compared to his main consulting; low enough to allow productized package pricing below `app2store`.
*   **The Arithmetic (Dual-Store Bundle at 2,790 ILS):**
    *   Diagnostic Audit: 0.75 hours.
    *   Account permissions, certs, provisioning, privacy labels: 1.5 hours.
    *   Build upload, metadata input, screenshots formatting: 1.5 hours.
    *   Google 14-day tester dispatch (via vetted sub-vendor, cost ~60 ILS) + monitoring: 0.5 hours.
    *   One standard Apple rejection loop (e.g., demo account credentials, metadata clarification, Guideline 2.1 reply): 1.25 hours.
    *   Client comms (async): 0.5 hours.
    *   **Total Time:** 6.0 hours.
    *   **Net Revenue:** 2,790 - 60 (tester cost) = 2,730 ILS.
    *   **Blended Yield:** **455 ILS/hour**.
*   **Volume Thresholds:**
    *   **Target:** 3 to 4 jobs/month = ~8,500–11,000 ILS for ~20 hours of work.
    *   **Shutdown Floor:** Fewer than 2 jobs/month (under ~5,000 ILS/month) isn't worth the context-switching cost.

---

### 3. THE GOOGLE ACCOUNT

**Decision: ZERO client apps hosted on his verified organization account.** 

The 0.24% strike breakeven is mathematically fatal when his core software house clients live on that account. Furthermore, hosting on his account causes the **Custody Fear** (Verdict #4) and requires two migrations.

**What replaces the Android advantage:**
1.  **Path A (B2B/Funded Clients):** Guided D-U-N-S & Organization Account verification on the client’s own entity (takes ~5 days, bypasses the 14-day tester rule legally).
2.  **Path B (Personal Accounts):** Managed 14-Day Closed Testing on the client’s account. He includes the tester management in his 1,490 ILS fee, outsourcing the 12 testers to a trusted vendor for $15, while he manages the Google Play Console releases and production application writings (where DIYers actually fail).

**Does the offer still work?** Yes. `app2store.co.il` charges up to 3,990 ILS without hosting client apps on their own account. The true friction is console bureaucracy, certificates, and rejection anxiety—not waiting 14 days. And because the app never touches his account, Custody Fear drops to zero.

---

### 4. THE UNPAID-WORK LEAK

First contact is no longer a WhatsApp chat or a free code check. 

1.  **No Free Phone/WhatsApp Consultations:** The landing page funnel leads strictly to the **390 ILS Diagnostic Audit** checkout.
2.  **Automated Intake Form:** Before paying the 390 ILS, the user must submit their `.ipa`/`.aab` or repo link and confirm 5 binary statements (e.g., "My app is not a webview wrapper," "I have an active account deletion link inside the app"). 
3.  **Monetized Discovery:** If the app is unready (missing account deletion, broken target SDK, missing privacy manifest), he discovers it *during* the paid 390 ILS audit. He delivers a PDF listing the exact failures. He keeps the 390 ILS for his 45 minutes of work, and pitches his 450 ILS/hour software house rate to fix the code. Unready apps become profitable leads rather than unpaid drain.

---

### 5. THE SELF-SERVE LEAK

**The Strategy:** Publish the *What* and the *Why* (which ranks in Google and builds terrifying credibility); withhold the *Operational Templates* and highlight the cost of mistakes.

*   **Published on the Page (SEO Magnet):** Complete Hebrew breakdown of Apple’s 4.2/4.3/5.1.1 rules, the mandatory account deletion rule, Google’s 20-tester/14-day policies, and why cheap Fiverr tester pools trigger "High Risk Behavior" account terminations.
*   **Withheld:** The exact Reviewer Notes copy that passes Apple Review, the Google Production Access questionnaire answers, privacy manifest configurations, and Xcode provisioning troubleshooting.
*   **Why Capable Readers Still Pay:** Frame the pitch around **Account Survival and Opportunity Cost**: *"Yes, you can hire 12 testers on Fiverr for $15. If one of those testers is on a flagged device farm IP, Google permanently bans your developer identity and your app's package name forever. And yes, you can borrow a Mac, spend 9 hours fighting Xcode certificates, and get rejected three times over 3 weeks. Or you can pay 2,790 ILS and have an Israeli R&D vet put it through cleanly while you work on your business."*

---

### 6. THE SCALE QUESTION

**This is a Paid-Discovery Lead Magnet for his software house.**

It will never scale into a standalone venture without hiring cheap labor, which ruins quality. Instead, it is a self-funding top-of-funnel filter that targets non-technical founders, vibe-coders (AI-built apps that break at the last mile), and small businesses who have a "finished" app built by an offshore or junior dev.

**The Handover:** 
1. Client pays 390 ILS for the Audit (or 2,790 ILS for Submission).
2. Founder discovers the app needs native bug fixes, backend compliance (e.g., GDPR/deletion endpoints), or ongoing feature work.
3. Founder upsells a 10,000–30,000 ILS software house maintenance/refactoring block at his full consulting rate. Even if only 1 in 5 publishing clients converts to a development client, the side service is wildly profitable.

---

### 7. THE KILL CRITERIA

Evaluate on the 1st of the month. If **any** of these four conditions are met, take down the landing page immediately:

1.  **Blended Hourly Rate Floor:** By **September 1, 2026** (or after the 5th completed client, whichever is first), total gross revenue divided by total tracked hours spent (including all sales messages, audits, and admin) is **under 350 ILS/hour**.
2.  **Audit Conversion Dead-End:** Out of the first **15 inquiries** that complete the intake form, **fewer than 3** pay for the 390 ILS Diagnostic Audit (proving the market will only buy if discovery is free).
3.  **Volume Starvation:** Total gross revenue from this service across **September, October, and November 2026 combined** is **under 12,000 ILS** (fewer than ~1.5 bundles/month).
4.  **Reputation/Refund Contagion:** More than **1 client out of the first 10** demands a refund after an unfixable store rejection (e.g., Apple 4.3 Spam) or threatens public negative posting in Israeli Facebook groups.

---

### RISKS OF THIS REDESIGN

*   **Top-of-funnel drop-off:** Charging 390 ILS up front will kill 80% of raw leads compared to a free check. *Mitigation:* That 80% was the exact cohort causing the opportunity-cost death in the pre-mortem. Losing them is the point.
*   **Direct price comparison with `app2store.co.il`:** Moving prices from 1,290 ILS to 2,790 ILS puts him in the same bracket as an established competitor. *Mitigation:* He differentiates as a boutique software house owner (direct senior engineer access) rather than an assembly-line agency.

### B = x-ai/grok-4.7

Recommendation: keep the side offer only as a capped, prepaid, client-account service with a paid gate. Kill hosting, the free check, WhatsApp, and the support tail. If it cannot hold about 450 ILS/hour inside 15 hours a month, it is not worth doing.

## 1. The shape

Sold in this order only. His Play organisation account is never part of the product.

**A. Readiness — 390 ILS, required.** They pay, then a form. He spends at most 30 minutes and returns green / yellow / red. Credited in full against a publish package booked within 21 days. Position it as the product, not a sample: “the check is a paid verdict on your binary; the public page is the rules.” No call, no WhatsApp, no code.

**B. One store — 2,290 ILS. Both stores — 3,490 ILS.** Their developer accounts only. He is Admin / release user. Includes one submission per store and one resubmission per store for metadata, privacy labels, age rating, or review notes. Stated in the offer: fee is for submission work, not approval.

**C. Update — 650 ILS per store, prepaid, 90-minute cap.** No monthly plan.

**D. Engineering — 450 ILS/hour, prepaid 3-hour block (1,350), separate software-house SOW.** This is where yellow and red go. Not discounted to win the upload.

**Explicitly excluded, and killed from today’s offer:** free readiness; three-month inclusive updates; 150/190/290 retainers; transfer-out (nothing is hosted, so nothing to transfer); tester supply; publishing from his organisation account; WhatsApp; a second rejection loop; any code, assets, or policy rewrite inside A–C. Further review rounds are the engineering block or he stops.

What survives, and why: Hebrew only; never promise approval; client-owned Apple account. That last pattern becomes the pattern for Google too. The content page survives only in the cut-down form in §5.

## 2. The economics

Target: **450 ILS/hour**, near a high consulting rate, not a discount. Side work has switching cost and reputation cost, so it does not get to be cheap. Design point is a green app plus one rejection loop, SOP’d:

- Readiness 0.5h
- Google console work 2h
- Apple (certs, provisioning, TestFlight, labels, submit) 3h
- One rejection resubmit 1h

One store, Apple, the heavy case: 4.5h, revenue 2,290 → **about 510 ILS/hour**. Both stores: 6.5h, revenue 3,490 → **about 540 ILS/hour**. A Google-only job at the same price is faster; do not discount it. Readiness alone, if they never continue: 390 / 0.5h = **780 ILS/hour**. That is the point of charging for the no.

Worth doing at **2–3 publish jobs a month and at most 15 hours**. Four is the ceiling; above that, refuse. **Below 2 in a month, do not hustle for the next one.** Trailing 90 days under 4 publish jobs means shut it down. One job a month does not pay for staying current on store policy.

## 3. The Google account

**No. Zero client apps on the organisation account. No vetting gate, because the correct maximum is zero.** The 0.24% breakeven already says unvetted hosting is negative EV; vetted hosting still puts his live client products on the same blast radius, and a strike is not a line item he can insure with a 2,290 fee.

Android half, replaced: same as Apple. Company clients open their own Play account; a verified organisation account is their asset if they want to skip the 14-day test, and he will not chase D-U-N-S for them. Individuals use a personal account and sit the 14 days themselves. He does not recruit testers and does not lend his. The offer still works. The old speed advantage was the contagion. What buyers actually pay an Israeli for is not touching the consoles. Speed-seekers who wanted the bypass are the wrong customers; let them go.

## 4. The unpaid-work leak

First contact is a form that does not notify him until payment has cleared and the artifacts exist: AAB or IPA attached, version set, privacy-policy URL returning a live page, support URL, the required screenshots, and a 12-field content questionnaire. A script checks presence and HTTP 200. Failures get a canned mail. He does not open the binary.

He looks only after 390 ILS. Green proceeds. Yellow or red is a punch-list and a link to the 1,350 engineering block. “Can you just fix this one crash” is outside A–C; the form reply says so before he has spent the hour. Discovering unreadiness is the readiness fee, not a lead cost.

## 5. The self-serve leak

Publish, in Hebrew, the rules that rank: personal vs organisation accounts, the 14-day test, Apple 5.2.1 / 4.2.6 / 4.3, what a privacy policy must contain, what Review rejects on sight. End the page with an open split: “If you have a Mac and a weekend, do it yourself. If you want it off your plate, pay for a verdict.”

Withhold the runbooks: provisioning sequence, rejection-reply language, privacy-label decision tree, review-notes phrasing, the exact console clicks. A reader who can do it themselves is not the customer; teaching them to leave is cheaper than a bad job. What they still pay for is judgment on their binary, a Mac they do not have, and someone else absorbing a rejection loop. The paid punch-list is specific. The page is generic. That is the whole resolution.

Also refuse, in public, before money: clones and template spam, adult, gambling, and anything he would not put his own name on as Admin. A refusal costs nothing. A blamed rejection in a few-thousand-person market does not.

## 6. The scale question

**Not a business.** A productised one-off, capped at 15 hours a month, which also feeds the software house. Run it against the kill dates below. Do not extend it because it is “almost working.”

Handover: the readiness note has two next steps only. Green → package B. Yellow/red → engineering SOW at 450 ILS/hour, scoped and invoiced separately, no store SLA mixed in. He does not fold fixes into the upload price to save the lead. The side service is allowed to lose the upload. The house is not allowed to inherit a fake “finished app” on a handshake.

## 7. Kill criteria

Checkable from a notebook, the bank, and the Play console. No tooling.

1. **Rate.** On 31 Dec 2026, store-service revenue divided by hours logged since start is under **350 ILS/hour**. Stop new sales that day.
2. **Hours.** Any month before 31 Mar 2027 exceeds **20 hours**. Stop new sales for the next month. If it happens twice, kill the offer on 31 Mar 2027.
3. **Volume.** Trailing 90 days ending 31 Mar 2027 contain **fewer than 4 paid publish jobs**. Kill.
4. **Channel quality.** Of the first **15** paid readiness checks, if **more than 5** are red, stop posting in those Facebook groups on the day the 15th is delivered. If there is no other inbound by 31 Mar 2027, kill.
5. **Contagion or reputation, immediate.** Any client package name on his organisation account, or any Play enforcement mail that names an app he does not own, or **two** public posts in the acquisition groups blaming him for a rejection. Stop. The first should be impossible; that is why it is a tripwire rather than a metric to manage.

## Risks

The Facebook-group crowd will compare 2,290 with Fiverr and leave. That is a successful filter, not a pricing error. Holding the line is the actual risk: one “small fix” on WhatsApp recreates the 50 ILS/hour death. No number on the page. AI-built apps will fail the green test often; if he publishes them anyway, both the hourly rate and cause 5 come back. Policy changes can make a rigid SOP wrong; that is what the 20-hour cap is for, not a reason to re-open hosting.

### moonshotai/kimi-k3 (abstained: OpenRouter response choices[0].message.content is not a string: null)

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | A: Most coherent redesign: protects the organisation account, prices all-in founder time against consulting, bounds support and discovery, and sets dated, measurable pilot kill criteria.; B: Strong practical scope controls and client-owned-account model, but economics omit acquisition/admin time, assume an unsupported consulting-rate benchmark, and conflict with the monthly hours cap.; C: Contains useful paid-intake ideas, but introduces incorrect tester requirements, unsupported enforcement scare claims and verification timelines, while undercounting overhead and assuming lucrative consulting conversions. |
| google/gemini-4-argon | B: Sharpest, most realistic redesign with realistic Israeli market rates, clear operational boundaries, and zero policy risk.; C: Well-structured and effectively uses the competitor benchmark and lead-magnet handover, though sub-vending $15 tester pools introduces unnecessary account ban risk for clients.; A: Follows all instructions cleanly and accounts for acquisition time in the economics, but prices the upload service higher than the established Israeli competitor while offering less. |
| x-ai/grok-4.7 | A: Most correct redesign: zeros hosting, ends free work and the support tail, includes acquisition in a rate hurdle above consulting, and pre-commits to shutdown if buyers will not pay.; B: Highly usable and internally consistent, with the sharpest intake, reputation tripwires, and notebook kill rules, but the ~450–540 target omits acquisition time and may not beat high consulting.; C: Priced packages and a paid audit are concrete, but it misstates the 12-tester rule, sells the cheap tester path it says causes bans, and treats underpriced publishing as a lead magnet. |

| Model | Label | Points | Mean position |
|---|---|---|---|
| openai/gpt-6.1-sol | A | 7 | 1.67 |
| x-ai/grok-4.7 | B | 7 | 1.67 |
| google/gemini-4-argon | C | 4 | 2.67 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 8799 | 2330 | 0.0453 |
| google/gemini-4-argon | 9434 | 2449 | 0.0434 |
| x-ai/grok-4.7 | 11437 | 14221 | 0.1047 |
| moonshotai/kimi-k3 | 0 | 0 | 0.0000 |
| Total | 29670 | 19000 | 0.1934 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-11-02-app-publishing-redesign.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1793654957-INZqdrypibnAp4MIF915 | 200 | 45521 |
| openai/gpt-6.1-sol | 1 | gen-1793654957-6ElWKEJMOmgPREmrpJtW | 200 | 63846 |
| x-ai/grok-4.7 | 1 | gen-1793654957-5wRvXuyIkIkMsQXKCIbr | 200 | 111418 |
| google/gemini-4-argon | 2 | gen-1793655397-jhrKzpS0RThUdYFTf9ZY | 200 | 5104 |
| openai/gpt-6.1-sol | 2 | gen-1793655397-a8g5quIO2ZVnV5gbThPF | 200 | 5323 |
| x-ai/grok-4.7 | 2 | gen-1793655397-sgeMzeycb9Fpcnfgayum | 200 | 117620 |

## Synthesis

_Chairman: the calling Claude session. Read the rounds above and replace this line with: Agreement, Disagreements, Recommendation, Confidence._
