# Council: app-publishing-premortem-b

- Date: 2026-11-02
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

CONTEXT

This is a PRE-MORTEM. Do not evaluate whether the business is a good idea. Assume it has already failed and write the autopsy.

THE BUSINESS

A solo technical founder in Israel (owns a small software house, builds AI agents and custom business systems, bills consulting rates far above the prices below) launched a side service publishing other people's finished mobile apps to Google Play and the Apple App Store.

Mechanics, verified against both stores' policies:
- Google Play: a NEW PERSONAL developer account must run closed testing with 12 testers for 14 continuous days per app before requesting production access. Organisation accounts with a verified D-U-N-S are EXEMPT. He has such an account. So he publishes the client's Android app from HIS OWN organisation account within days, and later transfers it to the client's own account via Google's official transfer process.
- Apple: forbids this model (Guideline 5.2.1 IP ownership, 4.2.6 template/generation services, 4.3 spam from many unrelated apps on one account). So the client opens their own Apple Developer account ($99/year) and invites him as Admin. His value is the Mac, Xcode, certificates, provisioning, TestFlight, privacy labels, age rating, and handling App Review rejections.
- Every package starts with a free "developer readiness check" before payment: real-device install, permissions, privacy policy accuracy, in-app account deletion, SDK target level, store-payment compliance, assets, name availability.

Prices (ILS, ex VAT, store fees paid by client): Google launch 590, Apple launch 790, both 1,290; each with up to 2 updates/month for 3 months and Hebrew WhatsApp support. Then 150/190/290 per month, or 290 to transfer the Google app out. Extra update 120/store. Rejection consulting 250/hour.

MARKET FACTS (2 November 2026)
- Fiverr: 25 to 100 USD per store, 10 to 21 day delivery, no contract, no Hebrew, approval excluded.
- Tester brokers: about 15 USD for "12 testers, 14 days".
- Median.co: done-for-you publishing at 1,490 USD + 579/year, but only for apps built on their platform.
- app2store.co.il: an Israeli competitor already selling the identical service in Hebrew at 2,490 to 3,990 ILS, two to four times his price.
- Another operator published a Hebrew guide to the 12-tester rule four days before this research.
- October 2026: Google began letting anyone publish a vibe-coded Android app privately to their own devices from AI Studio, free (US and select markets, not Israel yet).
- In Israeli Facebook groups, people ask weekly about the 12-tester gate and about needing a Mac. A reply to his own test post immediately asked "how do I know you won't keep my app" and noted cheap tester services exist.

Decisions already taken from a prior round: Hebrew only for now, English later and Apple-only if ever; never promise approval; the ownership question answered prominently; content-led landing page that explains the stores' rules before pitching.

Two findings from a hostile internal review that you should treat as evidence, not as settled truth, and may dispute:
- At these prices a realistic both-stores job including a rejection loop works out to roughly 46 ILS/hour, about 1.3x the Israeli minimum wage, against consulting that bills many times that.
- Hosting strangers' apps on his own verified organisation account risks that account; Google suspends accounts associated with suspended ones, and his own live client products sit on it.

YOUR TASK

It is now 2 November 2027, one year later. The service is dead, or alive but not worth continuing. Write the autopsy.

1. Give the SINGLE most likely cause of death, named concretely, with the sequence of events that produced it month by month. Not a list of risks: one story, with dates.
2. Give the three next most likely causes, each in a short paragraph, each distinct from the first and from each other.
3. For each of the four, name the EARLIEST OBSERVABLE SIGNAL he could have noticed, and the month he would have noticed it if he was watching the right thing. Be specific about what to measure.
4. Name the failure modes that are invisible from inside: things he would rationalise as temporary or as bad luck while they were actually killing the business.
5. Name which of his stated assumptions, if wrong, breaks the whole thing. Rank them by how load-bearing they are and say how he could test the top one cheaply, this month, before building more.
6. State plainly whether the most likely death is slow (quiet starvation, no clients, boredom, drifting back to consulting) or fast (account suspension, a legal problem, a client dispute, a platform rule change). Say which, and why.

CONSTRAINTS TO RESPECT
One person. No ad budget. No employees. A side service beside consulting work that pays far better. Hebrew native, English good but not native-marketer level. The Google organisation account is an existing asset carrying his own clients' live products.

WHAT A GOOD ANSWER LOOKS LIKE
A specific, dated, mechanical story of failure, not a risk register. Name numbers where you can. Be willing to say the most likely death is simply that he loses interest because the money is bad, if that is what you believe. Do not propose solutions: this round is diagnosis only.

NOTE: keep your answer under 1200 words. Be concrete and fast; do not pad.


## Attachments

none

## Round 1: answers

### D = openai/gpt-6.1-sol

## Autopsy: 2 November 2027

**The most likely cause of death was founder withdrawal after discovering that a “launch package” was actually a three-month support obligation priced like a small installation task.**

He got customers. He stopped wanting the next one.

The dated events below are a plausible reconstruction, not claimed historical facts.

## 1. Primary cause: low-priced obligations displaced high-paid consulting

**November 2026:** He publishes the explanatory Hebrew page and answers Facebook questions. The free readiness check generates conversations. Prospects send unfinished builds, inaccurate privacy policies and missing assets. He treats this unpaid diagnosis as launch investment rather than acquisition cost.

**December:** Three customers buy both-store packages: **3,870 ILS collected**, excluding VAT. Initial submissions seem manageable. He measures time to first submission, not total time promised through February.

**January 2027:** Apple rejection correspondence, replacement builds and Google updates arrive alongside new enquiries. Customers interpret “Hebrew WhatsApp support” as help understanding everything between their app builder and the stores. His package boundary is publishing; their problem boundary is getting an app working.

**February:** The first cohorts’ remaining included updates overlap with newer launches. A plausible three-client cohort consumes 60–84 hours across checks, setup, submissions, troubleshooting, updates and messages: **46–65 ILS/hour**, before unsuccessful prospects. The hostile review’s 46 ILS estimate was not inevitable, but the bundled tail makes it credible.

**March:** He realises that rejection consulting at 250 ILS/hour does not automatically rescue the economics. Clients dispute whether a rejection is “extra consulting” or part of the launch they already bought. He absorbs borderline work rather than argue over a few hundred shekels.

**April:** Consulting becomes busy. Publishing tasks are small individually but deadline-sensitive and scattered. He starts answering store-service messages between higher-value work, creating interruptions that his time records undercount.

**May:** The first renewal results arrive. Some clients stop updating; some choose the 290 ILS transfer; others expect ongoing assistance but resist a subscription. Launch revenue does not turn into a sufficiently valuable recurring base.

**June:** Content production slips. This looks like the consequence of being busy, but it is the beginning of withdrawal: acquiring another customer now means acquiring another obligation.

**July:** Response times lengthen. Leads who need an immediate release disappear. He describes them as price shoppers rather than recognising that he no longer wants to serve them at the advertised price.

**August:** He accepts only “straightforward” apps. Determining which apps are straightforward still requires the free readiness check. Screening becomes another unpaid job.

**September:** One difficult customer consumes the margin from several easy launches. Nothing catastrophic happens; this merely confirms his reluctance to sell.

**October:** He stops actively promoting the service while retaining outstanding obligations. Consulting supplies both income and a respectable explanation for the retreat.

**2 November:** The page remains online. The business is effectively dead.

**Earliest observable signal: November 2026.** Measure **all founder minutes per paid customer, including unsuccessful readiness checks and the full promised support tail**. The first warning is not a low accounting profit; it is acquisition and fulfilment time already exceeding what he willingly exchanges for the package revenue.

## 2. Three alternative deaths

### A. Trust blocks purchases before economics can matter

The organisation-account shortcut solves a procedural obstacle but introduces a custody concern. Prospects ask who controls the listing, what happens if he disappears, and whether transfer will be straightforward for their particular account. His prominent ownership explanation is necessary, not necessarily persuasive. Cheap testers provide an alternative that preserves direct ownership. By March 2027, he has educated many people and sold almost nobody.

**Earliest signal: November 2026.** Track qualified prospects who receive the ownership explanation and a payment link, then decline. Record their stated reason. Repeated “I want it on my own account from day one” losses distinguish a trust barrier from insufficient traffic.

### B. One hosted app contaminates the existing account asset

An apparently acceptable client app contains deceptive behaviour, problematic SDKs or undisclosed connections to an enforcement history. Review passes initially; enforcement comes later. A suspension or associated-account investigation threatens unrelated live products. Even without permanent account loss, remediation and existing-client anxiety overwhelm the service’s accumulated revenue. This is a low-frequency, disproportionate-loss death—not the base case.

**Earliest signal: November 2026.** Measure how many intake checks cannot establish app provenance, backend behaviour and who controls subsequent changes. A successful real-device install is not evidence that hosting risk is bounded. There may be no reliable warning immediately before enforcement.

### C. The procedural bottleneck becomes less valuable

During 2027, customers increasingly arrive with easier testing, publishing or device-distribution routes. Some never needed a public store listing; others discover that cheap testers are sufficient. Apple assistance retains value, but the headline Google shortcut no longer reliably brings leads. With no advertising budget and little appetite for English expansion, the narrow Hebrew funnel shrinks below worthwhile volume.

**Earliest signal: November–December 2026.** Track the share of qualified enquiries whose need disappears after explaining existing alternatives. The supplied AI Studio development is a warning about direction, **not evidence that it already replaces public Play distribution**.

## 3. What was invisible from inside

- **“Launch investment”:** unpaid checks repeatedly fail to become cheaper acquisition.
- **“One unusually difficult rejection”:** several exceptional cases reveal the normal variance the price must absorb.
- **“Only five minutes on WhatsApp”:** interruption and context-recovery costs disappear from the ledger.
- **“Consulting is temporarily busy”:** he consistently prioritises it because its economics are structurally better.
- **“Customers are not ready”:** readiness screening is the product’s unpaid workload, not an external inconvenience.
- **“Google approved it”:** approval gets mistaken for protection against later account enforcement.

## 4. Load-bearing assumptions, ranked

1. **The complete customer lifecycle fits inside an economically tolerable amount of founder time.** If false, demand accelerates withdrawal.  
   **Cheap November 2026 test:** take one paid, representative both-store job at the advertised terms. Log every minute, including acquisition and messages; separately enumerate the remaining three-month obligations. One job cannot establish average rejection incidence, but it can quickly falsify an implausibly small time budget.

2. **Publishing strangers’ apps does not expose the existing organisation account to unacceptable collateral loss.** If false, launch margins are irrelevant.

3. **Enough Hebrew-speaking buyers prefer paid execution over cheap testing or self-service—and accept the ownership arrangement.** Questions in Facebook groups establish confusion, not purchase intent.

4. **“Finished app” and “publishing support” have boundaries customers will accept.** If false, fixed-price publishing becomes disputed development and compliance work.

5. **The procedural advantage persists long enough to repay acquisition and learning costs.** If false, a specialised service loses its entry point before building repeat business.

## Verdict

**Slow death is most likely:** modest sales, accumulating obligations, declining enthusiasm, then drift back to consulting. Account enforcement could kill it faster and damage more valuable assets, but it requires a particular trigger. The opportunity-cost mechanism operates on every ordinary job—even when both stores approve the app.

### B = google/gemini-4-argon

### 1. The Single Most Likely Cause of Death: Opportunity Cost Starvation via Unpaid Triage and WhatsApp Sprawl

The business did not blow up; the founder quietly suffocated under low-margin friction and abandoned it to protect his high-rate consulting.

*   **November–December 2026:** He launches the Hebrew content page and answers queries in Facebook groups. He gets 12 inquiries and runs 12 free "developer readiness checks." Each check takes 2.5 hours (downloading source/binaries, compiling on physical devices, checking SDK targets, auditing privacy flows). 9 of the 12 are broken "vibe-coded" apps (missing account deletion, wrapped webviews, hardcoded keys). The clients expect him to fix these bugs as part of the 1,290 ILS launch fee. When he quotes his standard consulting rate to fix the code, 8 ghost him. He closes 4 clients (3,960 ILS total revenue) for 30 hours of unpaid triage plus 28 hours of actual submission work.
*   **January–February 2027:** The first 4 apps are live, triggering the included "3 months of up to 2 updates/month and Hebrew WhatsApp support." In the Israeli market, "WhatsApp support" for 1,290 ILS is interpreted by amateur app owners as an on-demand fractional CTO. Clients message him at 10 PM asking why push notifications failed or why a user in Haifa can't log in. He spends 15 hours a month managing updates and arguing over whether a broken build is a "submission issue" or a "code issue."
*   **March–April 2027:** A core AI/systems consulting client offers him a 45,000 ILS contract enlargement. Simultaneously, an Apple client from January gets flagged under Guideline 4.2 (Minimum Functionality) on their second update and refuses to pay the 250 ILS/hour rejection fee, blaming the founder's initial readiness check. The founder eats 6 hours of unpaid remediation to protect his reputation in the Facebook groups.
*   **May 2027:** The 3-month free support window ends for the winter cohort. Zero clients convert to the 290 ILS/month recurring tier; they don't update their apps frequently enough to justify a retainer. Two pay 290 ILS to transfer their Google apps out; two leave them rotting on his org account without paying. 
*   **June–August 2027:** Tired of trading 350+ ILS/hour consulting time for 50 ILS/hour arguments on WhatsApp, he stops answering Facebook threads. Organic leads drop to zero. He processes the occasional 120 ILS update for existing stragglers and quietly deletes the landing page link from his bio in September.

### 2. The Next Three Most Likely Causes

**A. Catastrophic Google Play Account Contagion (The Fast Death)**
In March 2027, a client whose app passed the initial readiness check pushes one of their included "free updates." The update secretly activates a remote-config webview pointing to an unregulated crypto/gambling funnel, or integrates a predatory ad SDK. Google’s automated scanners flag the app for Malicious Behavior / Deceptive Ads. Because the app sits directly on the founder’s D-U-N-S organisation account, Google issues a severe policy strike. Two weeks later, a second client's personal account (to which an app was transferred in January) gets terminated for buying fake reviews; Google’s " Associated Developer Accounts" algorithm links the terminated account back to the founder's org account via the transfer history and shared signing keys, terminating the founder's entire D-U-N-S account and taking his high-paying software-house clients' apps offline simultaneously.

**B. The "Forever Hostage" Liability Trap**
Clients pay the 590 ILS Google launch fee to bypass the 12-tester rule, intending to transfer the app to their own personal account later. However, to accept a transfer, the client must still register, pay $25, and pass Google’s strict ID and address verification. Half the amateur clients procrastinate or fail verification, refusing to pay the 290 ILS transfer fee or the 150 ILS/month hosting fee. The founder is trapped: he cannot keep maintaining their target SDK compliance for free, but if he unpublishes their live apps, they threaten small-claims lawsuits ("Tviot Ktanot") and public shaming in Israeli tech groups for "stealing their app"—the exact fear raised in his first Facebook test post.

**C. The Apple "Guilt by Association" Admin Lockout**
While Apple apps sit on the clients' own $99 accounts, the founder is invited as Admin and compiles/uploads builds from the same Mac, same Xcode installation, and same IP address across 15+ unrelated low-quality accounts. In April 2027, one client commits payment fraud or uploads egregious IP infringement. Apple’s anti-fraud heuristics flag the founder's Apple ID and hardware UUIDs as a commercial "spam mill" operator (Guideline 4.3), revoking his Admin access across all client accounts and blacklisting his primary Mac from uploading to App Store Connect.

### 3. Earliest Observable Signals

1.  **Opportunity Cost Starvation:** *Signal:* The ratio of "Readiness Check + WhatsApp onboarding hours" to "Paid Launch hours" exceeds 1:1, or conversion from completed Readiness Check to Paid Client falls below 50%. *When noticed:* **December 2026** (after the first 5 leads).
2.  **Google Account Contagion:** *Signal:* A client submits an update binary containing obfuscated code, dynamic code loading, or unvetted third-party SDKs that weren't in v1.0, or requests a transfer to an unverified personal account with mismatched identity details. *When noticed:* **January 2027** (first client update request).
3.  **The "Forever Hostage" Trap:** *Signal:* The percentage of Google Play clients who have opened and verified their own target Google Play Console account by Day 30 post-launch is below 20%. *When noticed:* **January 2027**.
4.  **Apple Admin Lockout:** *Signal:* Apple App Review begins placing newly submitted client apps into "Extended Review" status (taking 5–10 days instead of 24 hours), indicating the submitter's hardware/Apple ID trust score has been downgraded by automated heuristics. *When noticed:* **March 2027** (around the 8th Apple submission).

### 4. Invisible Failure Modes (Internal Rationalisations)

*   **"The readiness check takes long now because I’m still building my checklist; I’ll automate it soon."** (False: Every amateur app breaks in a unique, un-automatable way, and walking non-technical founders through Apple/Google bureaucracy cannot be scripted).
*   **"These first clients are needy because they are vibe-coders; once I get established, better clients will come."** (False: Funded startups and competent agencies have Macs, D-U-N-S numbers, and CI/CD pipelines. The 590–1,290 ILS price point *exclusively* selects for the lowest-budget, highest-friction amateurs).
*   **"The free Readiness Check builds trust and filters out bad apps, saving me time later."** (False: It shifts the unpaid labour to the very top of the funnel, turning the founder into a free QA tester for people who never pay a shekel).
*   **"app2store.co.il charges 3,990 ILS because they are greedy/inefficient; my 1,290 ILS price is a competitive moat."** (False: The competitor charges 3,990 ILS because they already discovered that each client consumes 15+ hours of hand-holding and WhatsApp support).

### 5. Load-Bearing Assumptions (Ranked)

1.  **Clients delivering "finished apps" actually have store-ready binaries that pass the Readiness Check without code changes.** (Most load-bearing. If false, his customer acquisition cost in unpaid engineering hours destroys the unit economics before a single shekel is collected).
2.  **Google's automated abuse systems treat "publish on my D-U-N-S account then transfer out" as a legitimate workflow rather than a policy-circumvention farm.** (If false, it destroys his primary consulting business's developer account).
3.  **Clients will accept the boundary between "store submission" (included) and "rejection consulting / bug fixing" (250 ILS/hour).** (If false, every rejection turns into a billing dispute or unpaid labour).
4.  **Clients will willingly pay 150–290 ILS/month after month 3, or pay 290 ILS to transfer out.** (If false, LTV is capped at the initial low ticket price while hosting liability continues indefinitely).

**How to test #1 cheaply this month (November 2026):**
Before building the landing page, offer the "Free Readiness Check" to 5 people currently complaining in the Israeli Facebook groups. Time the check with a stopwatch from the first WhatsApp message to the final report. Count how many of the 5 pass without needing code changes, and when they fail, quote them 250 ILS/hour to fix the issues or 1,290 ILS to publish once they fix it themselves. Measure how many pay within 7 days.

### 6. Slow vs. Fast Death: The Verdict

The most likely death is **SLOW** (quiet starvation and drifting back to consulting). 

While the fast death (Google D-U-N-S ban) is the highest-severity risk, it requires a specific trigger (a malicious client or a linked ban) that might take 10–20 apps to statistically manifest. He will never reach 20 apps. Because he is a solo founder who already commands high consulting rates, his tolerance for 46 ILS/hour administrative misery is exceptionally low. Within 90 to 120 days, the stark contrast between chasing a frugal client for 590 ILS on WhatsApp versus billing thousands of shekels for AI agent work will cause him to quietly starve the side business of his own attention.

### C = x-ai/grok-4.7

**Verdict:** The service died slowly of rate collision. It was not suspended, sued, or outcompeted in a visible fight. By November 2027 it was an untouched page and a founder who had stopped answering.

## 1. Most likely cause

**Consulting crowd-out once real jobs cleared ~40 ILS/hour.**

- **Nov 2026:** Page goes up. The only channel is him replying in Facebook groups. Two inquiries; one Google-only at 590 closes. The free readiness check already burns unpaid hours. He calls it marketing.
- **Dec 2026:** One both-stores job at 1,290. The client stalls on the $99 Apple account. Apple then rejects (functionality or privacy). Three rounds, evening WhatsApp, listing edits. About 30 hours all-in. Realized rate ~40 ILS/hour, under the hostile review’s 46. He tells himself the next one will be clean.
- **Jan 2027:** Another Google job. Transfer is not a 290 ILS button: the client has no payments profile, so he coordinates for free. Apple half of the offer is already the part buyers abandon.
- **Feb 2027:** A normal consulting invoice lands, several times the side service’s monthly ceiling. He delays a packaged update. The client writes in the same group that used to send leads.
- **Mar 2027:** The December client’s “two updates a month” window is still open. A “small change” needs a new binary. They cite the package; he eats it. He starts dreading the WhatsApp more than he wants the next 590.
- **Apr–May 2027:** He stops posting. That was the entire acquisition engine. No ad budget, no one else to reply. Inquiries fall to zero not because the market vanished, but because he left the room.
- **Jun 2027:** One stale lead. He quotes, then disappears for five days into a client demo. They buy from app2store or a Fiverr seller.
- **Jul–Oct 2027:** No new jobs. The cheap retainers lapse because he was slow. He says he will restart after the next project. He does not.
- **2 Nov 2027:** Not shut down. Last client message months ago. Dead by absence.

Volume never got high enough to make money or to draw the suspension lottery often. Low demand and a better day job did the killing.

## 2. Next three

**Account contamination, then a forced stop.** A client app on his organisation account is removed for payments, data-safety, or deceptive behavior the readiness check missed, or that the client shipped in an “update” he rubber-stamped. Google warns the organisation that also hosts his real clients’ live products. He freezes publishing, emergency-transfers what he can, and kills the offer. One strike outweighs a year of 590 ILS jobs. Distinct from crowd-out: here he still wanted the work, and the platform ended it.

**The page taught the workaround.** The differentiator was skipping the 12-tester wait. A Hebrew guide to that rule was already public, tester brokers were ~15 USD, and his own page explained the rule before the pitch. Readers thanked him, used a broker or a nephew’s Mac, and never paid. Weekly “how do I” posts were curiosity, not orders. Distinct from crowd-out: even a founder with free time would have starved, because the content converted to DIY.

**One ownership or admin dispute in a small Hebrew graph.** The trust objection had already been said aloud on his test post. A client later claimed he was holding the app hostage, blamed him for an Apple warning while he was Admin, or refused the transfer and disputed the fee. No contract culture, no staff, reputation as the only channel. He stopped taking new admins and let the offer die rather than risk the software house’s name. Distinct: demand and rates were tolerable; one conflict made the tail risk unacceptable.

## 3. Earliest signals

1. **Crowd-out — January 2027.** After the December rejection loop, measure all-in hours per closed job (readiness, WhatsApp, review, transfer) divided into cash received. Signal: under ~80 ILS/hour, plus any consulting task delayed for store work, plus WhatsApp first-response slipping past a few hours. That gap is the business dying.
2. **Account strike — the first policy warning, likely Feb–Apr 2027 if it happens.** Measure weekly: Play Console policy status and “associated account” mail for every package he does not own. A single removal or account-level warning is the stop signal, not the third one.
3. **DIY cannibalization — December 2026.** Measure readers of the rules explainer versus people who send an app or a deposit within 14 days, and count group replies that ask for the tester-broker method after his answer. Signal: dozens of reads or thanks, fewer than two paid starts. He would have seen it by January.
4. **Dispute — already fired, 2 Nov 2026,** in the reply “how do I know you won’t keep my app.” Next measure: that question recurring after the ownership FAQ, or any written scope fight in job one or two (by January 2027). Recurrence means the FAQ did not buy trust.

## 4. Invisible from inside

He would call empty months “seasonal” while the channel only worked when he replied within hours. He would call included support “retention” while it was unpaid interruption that made him avoid the phone. He would trust the readiness check and still eat 4.2 and payments rejections. He would read app2store’s 2,490–3,990 as proof of willingness to pay, not as a competitor he never reached without ads, possibly also a side hobby. He would count “interested” as demand. He would treat the organisation exemption as a moat while 15 USD testers commoditized the wait. He would say “I’ll raise prices once I have case studies” as the first clients anchored 590 in the only groups that mattered.

## 5. Assumptions, load-bearing first

1. **Paid Hebrew demand exists at 590–1,290 without ads, and will not DIY.** If wrong, nothing else matters. Most load-bearing and most likely false.
2. **He will still do the work when consulting pays more.** If wrong, demand dies at the inbox.
3. **Strangers’ apps on the organisation account will not touch his live client products.** If wrong, the side service can injure the real business.
4. **Readiness checks keep rejection loops inside the quoted hours.** If wrong, every job is a loss.
5. **Clients will open and maintain their own Apple account and stay cooperative as Admin.** If wrong, the bundle collapses to Google-only on his account — cheaper and riskier.
6. **Explaining the rules before the pitch creates buyers rather than self-servers.**
7. **A prominent ownership answer closes the trust objection.**

**Cheap test of #1 this month, before more building:** Post the real offer — price, no approval promise, ownership line — in the two or three groups where the weekly questions already are. Success is not likes. It is two people in 30 days who pay or send the binary for a paid readiness start at the stated price. Fewer than that and the core assumption is already false. Cost is a few hours.

## 6. Speed

**Slow.** Modal path is quiet starvation and drift back to consulting: a handful of painful jobs, then he leaves the only channel. Suspension, a lawsuit, or a rule change would be fast, and each is plausible, but low volume means few draws on those lotteries. The money was bad on job one; the day job did not have to wait for Google to agree.

**Risk in this diagnosis:** If he is unusually stubborn about side projects, a single bad app on the organisation account could kill it faster than boredom. The economics still say he was unlikely to stay in the channel long enough for that to be the common case.

### A = moonshotai/kimi-k3

# AUTOPSY: App-Publishing Side Service (Nov 2026 – Nov 2027)

## 1. Primary cause of death: Slow starvation by opportunity cost, fed by adverse selection

Not a suspension, not a lawsuit. He drifted back to consulting because the money was bad and got worse with every client.

**Nov 2026:** Launch posts in three Facebook groups + LinkedIn. ~15 chats, 6 free readiness checks, 3 paid jobs (2 Google-only, 1 both). Revenue ≈2,400 ILS on ~35 hours including content. Feels like traction.

**Dec 2026:** Four more jobs off the launch tail. First Apple rejection loop: a vibe-coded app flagged under 4.2.6. Eleven unpaid-ish extra hours; the client balks at the 250/hr rejection fee, he eats half to protect the relationship. Effective rate on that job: ~40 ILS/hr.

**Jan 2027:** Launch audience exhausted. Inbound only moves on days he posts. Two clients. Five maintenance subscribers (≈1,000 ILS/mo). He tells himself MRR is compounding.

**Feb 2027:** A real consulting project starts — at 5–8x the side service's effective rate. WhatsApp response time slips from hours to a day. One prospect churns over a Friday silence.

**Mar 2027:** First Google rejection cascade (permissions/privacy mismatch he flagged in the free check; the client insisted). Two weeks of ping-pong, ~9 extra hours. New inbound: 3 chats, 1 job.

**Apr 2027:** Passover + consulting crunch. Zero posts, zero new clients. The maintenance tail is now 7 clients ≈1,500 ILS/mo consuming ~15 hrs/mo. He notices he dreads the WhatsApp pings.

**May 2027:** Google I/O brings easier self-publishing announcements and transfer-flow friction. He quietly stops onboarding new strangers' apps to the org account — "temporarily."

**Jun 2027:** He finally runs the numbers: ~15,000 ILS cumulative revenue over 8 months, ~280 hours, ≈55 ILS/hr — versus roughly 60–90k ILS the same hours would have billed in consulting. Two maintenance clients lapse ("the app isn't going anywhere").

**Jul–Aug 2027:** No marketing since April; an organic-only funnel dies within 4–8 weeks of not being fed. Inbound: zero.

**Sep–Oct 2027:** Transfers the last two Google apps out (580 ILS). Declines new inquiries with "booked out," which is technically true.

**Nov 2027:** Maintenance plans not renewed. No announcement, no enemy, no event. Dead.

## 2. The three next most likely causes

**(a) Google enforcement forces amputation of the wedge (fast).** One client app — the cheap prices filter for exactly the apps that couldn't pass review themselves — draws a policy suspension, and the email's "repeated violations may result in account termination" line lands on an account carrying his consulting clients' live products. He doesn't need to be suspended to die; the first warning makes continuing irrational, the Android fast-lane is the entire differentiator, and what's left is a 790-ILS Mac-rental service.

**(b) Reputation collapse in a tiny Hebrew market.** Israel's indie-app Facebook world is a few thousand people. The first reply to his own test post ("how do I know you won't keep my app") was the preview. One dispute — a refused 290 transfer fee, an Apple rejection the client blames on him, a screenshot of a tense WhatsApp thread — halves his inbound permanently. There is no ad budget to buy his way around a bad name.

**(c) Structural demand evaporation.** AI Studio publishing reaches Israel, tester brokers keep commoditizing the gate at $15, and the vibe-coding wave simultaneously increases app volume and collapses willingness to pay ("Fiverr says $25"). His actual product turns out to be hand-holding, which doesn't scale at 590 ILS.

## 3. Earliest observable signals

1. **Starvation:** Hours per job, logged from job #1. By **31 Jan 2027**: effective rate across all jobs <100 ILS/hr, and inbound chats <2/week on weeks he doesn't post. Both numbers were visible; he wasn't logging hours.
2. **Google enforcement:** Any Play Policy Support email, or a rejection citing policy rather than assets, on any client app. Expected **Dec 2026–Feb 2027**, once 3–5 borderline apps are live. Metric: warnings per publish; treat warning #1 as the stop line, not the suspension.
3. **Reputation:** Free-check→paid conversion <25% and check-failure rate >50% — visible by **Dec 2026**; first refusal to pay a rejection invoice, **Mar–May 2027**. Measure objections per sales chat; the trust objection shows up in month 1 because it already did.
4. **Demand evaporation:** Count prospects who mention tester brokers or AI tools in discovery chats (baseline **month 1**); external confirmation at **Google I/O, May 2027** or any change to the transfer workflow's help page.

## 4. Invisible from inside

- **The maintenance tail masquerades as MRR.** It grows even with zero sales and eats exactly the hours marketing needs. "Recurring revenue" was actually an annuity of obligation at <100 ILS/hr.
- **Free checks are unpaid consulting** (1–2 real-device hours each) rationalized as pipeline.
- **The no-incidents fallacy:** every clean publish on the org account feels like evidence of safety; it's evidence of luck so far. Risk compounds silently per app.
- **Consulting subsidy prevents reckoning.** Nothing forces him to compute the true hourly rate, so the business zombies for quarters.
- **The silent funnel:** prospects who balk at "published from my account" never write. He counts post views, not exits.
- **Hebrew WhatsApp intimacy:** clients adopt him as "their app guy"; scope creep disguised as community.

## 5. Load-bearing assumptions, ranked

1. **Reachable demand exists at 4–10x Fiverr prices with zero ad spend.** If the real market is 1–2 clients/month, nothing else matters. **Cheap test, this month:** 30-day pre-registered funnel experiment — fixed cadence of group posts + landing page; count inquiries, completed checks, full-price closes, and hours. Kill line set in advance: <3 paid closes or <150 ILS/hr effective → stop. Cost: nearly zero.
2. **Google tolerates publish-then-transfer at volume on his org account.** Not safely testable — you cannot A/B a suspension. Weak probes only: written support query, hard cap on client apps, warnings watched like telemetry. The untestability is itself the finding.
3. **Disclaimers survive disappointed clients.** "Never promise approval" is untested until the first rejection; proxy-test by making the rejection-fee clause an explicit close conversation and counting who walks.
4. **The 790-ILS Apple value persists** against improving tooling. Lowest priority.

## 6. Slow or fast?

**Slow.** The fast deaths are probabilistic and he's already alert to them — he'd amputate the Android wedge at the first warning, converting fast risk into slow decline. The slow death has a forcing event every single month: the consulting invoice he didn't send. The corpse: last new client May 2027, tail wound down by October, no post written. Cause of death: the founder correctly, silently, did the math.

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | D: Best calibrated and most coherent autopsy: dated economic mechanism, distinct alternatives, measurable early signals, and careful separation of platform facts from speculation.; C: Strong, concrete slow-death narrative and differentiated alternatives, but its proposed paid readiness test contradicts the free-check premise and its demand threshold overstates what a small test proves.; A: Useful opportunity-cost and maintenance-tail diagnosis, weakened by inconsistent subscription timing, speculative platform developments, and conflating private device distribution with public-store publishing.; B: Identifies unpaid triage and support sprawl well, but relies on unsupported Apple hardware-blacklisting and trust-score claims, overly deterministic Google linkage mechanics, and inconsistent cohort timing. |
| google/gemini-4-argon | B: Best mechanical breakdown of the exact business rules and platform mechanics, with highly specific numbers, Israeli context, and the sharpest cheap test.; D: Exceptionally well-structured month-by-month progression showing how the 3-month support tail and unpaid triage compound into founder withdrawal.; A: Strong, crisp narrative with good numbers and realistic Israeli seasonal context, though it slightly miscalculates when the 3-month free maintenance window converts to paid MRR.; C: Good insights on DIY cannibalization and rate collision, but the prose is overly telegraphic and less mechanically detailed than the top responses. |
| x-ai/grok-4.7 | C: Best match to the brief: one dated slow crowd-out story, distinct next causes (account strike, DIY from the rules page, trust dispute), measurable signals, and a cheap demand test without invented enforcement mechanics.; D: Careful and correct on the support-tail economics and slow withdrawal, with honest hedging, but thinner use of the given market structure and a less sharp acquisition-failure diagnosis.; A: Concrete numbered autopsy and strong invisible-mode section, but the primary story is muddied by a speculative Google I/O beat and an implausibly healthy retainer tail.; B: Vivid unit-economics narrative, but the three next causes are sensational platform/legal failures with shaky mechanics and it underweights demand, DIY, and price competition the facts make more likely. |
| moonshotai/kimi-k3 | A: Tightest execution of all six tasks: dated numeric timeline, adverse selection, 'no-incidents fallacy', the insight that org-account tolerance is untestable (and that this is itself the finding), and the sharpest slow-vs-fast logic — he'd amputate the Android wedge at first warning, converting fast risk into slow decline.; B: Richest mechanisms and most operational signals (day-30 verification rate, extended-review as trust-score tell, price point selecting for worst clients, competitor's 3,990 as revealed true cost), but likely over the 1,200-word cap and the Apple hardware-blacklist mechanism is speculative.; C: Two unique grounded insights — his own content teaches the DIY workaround, and the trust signal 'already fired' on 2 Nov 2026 — plus honest self-caveat, but thinner numeric grounding than A/B.; D: Calibrated and correct but hedged ('plausible reconstruction'), fewest hard numbers, weakest cheap test (n=1 job), and the least mechanically vivid autopsy of the four. |

| Model | Label | Points | Mean position |
|---|---|---|---|
| openai/gpt-6.1-sol | D | 11 | 2.25 |
| x-ai/grok-4.7 | C | 10 | 2.50 |
| moonshotai/kimi-k3 | A | 10 | 2.50 |
| google/gemini-4-argon | B | 9 | 2.75 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 9519 | 2070 | 0.0445 |
| google/gemini-4-argon | 10130 | 2415 | 0.0444 |
| x-ai/grok-4.7 | 12080 | 10417 | 0.0686 |
| moonshotai/kimi-k3 | 9735 | 13751 | 0.1302 |
| Total | 41464 | 28653 | 0.2877 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-11-02-app-publishing-premortem-b.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1793654260-Iwd7UCFuC9xsNkXWsIR8 | 200 | 41403 |
| openai/gpt-6.1-sol | 1 | gen-1793654260-JSfqS9zJO5sP0SGQcyXn | 200 | 61429 |
| moonshotai/kimi-k3 | 1 | gen-1793654260-YToTxmlMAj49Xl49C9nW | 200 | 101317 |
| x-ai/grok-4.7 | 1 | gen-1793654384-62qh2ZZtGK0h8aRoNlTR | 200 | 116570 |
| google/gemini-4-argon | 2 | gen-1793654500-0NJxIWUNpiJegs3KASBd | 200 | 6126 |
| openai/gpt-6.1-sol | 2 | gen-1793654500-9isF53nvF96W8dmcdurC | 200 | 9278 |
| moonshotai/kimi-k3 | 2 | gen-1793654500-eZQCH1pM4CxapgvUrtcm | 200 | 61950 |
| x-ai/grok-4.7 | 2 | gen-1793654624-WC3tY5wAc4kiSZ2kVp1D | 200 | 87451 |

## Synthesis

_Chairman: the calling Claude session. Read the rounds above and replace this line with: Agreement, Disagreements, Recommendation, Confidence._
