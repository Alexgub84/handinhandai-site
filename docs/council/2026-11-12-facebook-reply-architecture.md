# Council: facebook-reply-architecture

- Date: 2026-11-12
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

# Context

Alex is a one-person business in Israel. He publishes a Hebrew teaching
article plus a free installable Claude skill, announces it in an Israeli
Facebook group he belongs to, and readers comment "I want the skill".
Each of them should get a short Hebrew line plus the article link, within
roughly half an hour, for days, for every article he publishes from now
on. Everything must run on his own Mac. No cloud SaaS, no hosted
automation service. He is willing to accept something unofficial.

## What was built today, and the twelve ways it failed

A zero-dependency Node script drives his already-running Brave over the
Chrome DevTools Protocol on 127.0.0.1:9222 (the browser is launched with
remote debugging on). It opens a background tab, loads the group post,
switches the comment sort off "Most relevant", expands comments, reads
Facebook's own /api/graphql/ responses to enumerate comments, clicks a
comment's Reply button, types with execCommand('insertText'), presses
Enter, verifies the reply rendered. State is a JSONL ledger keyed by
comment id. A Claude Code session fires a cron every 15 minutes, runs the
script and writes a report.

Faults found in production today, in order:

1. typed into the post's main comment box instead of the per-comment
   reply box, leaving 4 stray top-level comments that had to be deleted
2. typed the commenter's name although Facebook already inserts a
   mention, so 5 replies read "Name Name https://..."
3. 3 of those were repairable by Edit; 2 offered only Delete and stay wrong
4. read the thread on the default "Most relevant" sort, which hid 2 people
   who had asked hours earlier, while the run reported everyone answered
5. the post renders in a modal with its own scroll container, so window
   scrolling moved nothing
6. trusted the first page_info.has_next_page:false in a GraphQL payload,
   ending the read after 4 of 13 comments and calling it complete
7. read response bodies at Network.responseReceived when they are only
   readable at loadingFinished, so nearly every payload was dropped
8. reply rotation restarted at index 0 every run, so with one new
   commenter per run everybody got the identical sentence
9. adopted the tab Alex was reading instead of owning its own
10. re-clicked every reply expander every iteration, 60 deep, turning a
    26 second job into an hour
11. never closed the WebSocket, so the script finished and sat forever,
    looking hung and holding its lock
12. a "detect replies that vanished" feature reported 9 of 13 existing
    replies as missing; unattended it would have answered 9 people twice

## What the research established (2026 facts)

- No API route exists. publish_actions died in 2018; the Groups API was
  removed from all versions on 2024-04-22; mbasic.facebook.com was retired
  2024-12-03. A Page's own posts still work via pages_manage_engagement
  plus App Review, but his post is in a group, not on his Page.
- Practitioners report GraphQL/Relay interception as more stable than DOM
  scraping, with exactly the pitfalls hit above.
- Every public open-source project for this is READ-ONLY. Nobody publishes
  tooling that posts replies through Facebook's internal endpoints.
- Meta publishes a strike ladder (7/8/9/10+ strikes to 1/3/7/30 day
  restrictions) but no numeric spam thresholds. Domain-level cross-account
  flagging is asserted by vendor blogs with no primary source.

## One adviser's position, to agree with or demolish

A frontier model reviewing the same material said: the foundation is right
and the shape is wrong, because one script did four jobs (read, decide,
write, verify) in one pass with no completeness check. Its prescription:

- Keep intercepting GraphQL but never treat it as truth. Add a
  COMPLETENESS GATE: a read is complete only when the set of collected
  comment ids matches the comment count the post itself displays. On
  mismatch, report incomplete and WRITE NOTHING.
- Keep DOM writing. Calling the comment-create mutation directly is more
  reliable per call and materially more dangerous, because a reply no
  keystroke produced, carrying his domain, repeatedly, in a group, is the
  classic spam signature.
- Move the reader into an unpacked MV3 extension; the biggest single win
  is closing port 9222, which today lets any local process drive his
  logged-in browser.
- Idempotency key is (postId, authorId), not comment id, so a person who
  comments twice gets one answer. Two-phase ledger: `intent` written
  before the click, `confirmed` written with the reply id after. A row in
  any state is never acted on again automatically. Under that rule a
  wrong reader can only under-answer, never double-answer.
- Kill the Claude cron. A launchd job runs a dumb reader every 15 minutes
  and exits silently when nothing is new. The expensive model is invoked
  only twice: once per campaign to write 8-10 Hebrew variants, and
  per-comment only when a cheap rule says the comment is non-trivial
  (more than ~12 words, a question mark, or words beyond "want/me
  too/please"). Everything else is a template pick costing no tokens.
- Cap at 5 replies a day. The biggest risk is not code, it is that 20
  near-identical replies carrying one domain from one profile in one
  group over two days is spam by Facebook's definition however carefully
  typed, and a restriction on his personal profile costs more than every
  bug above combined.

# The question

What is the right durable architecture for this job, and where is the
adviser above wrong?

Rule on each:

1. **Completeness gate.** Is "collected ids == displayed comment count"
   actually achievable and reliable on Facebook, or is the displayed
   count itself unreliable (it counts replies, hidden and deleted
   comments differently)? If it is unreliable, what is the correct
   completeness test, or is completeness simply not provable and the
   design must assume under-reading forever?
2. **Where the automation lives.** Rank these for a one-person shop that
   must still work in six months: external CDP script against the real
   browser (today), unpacked MV3 extension with content scripts, a
   userscript, Playwright with a persistent profile, or replaying
   GraphQL with the session cookie and no browser at all. Say what each
   costs to maintain when Facebook reshuffles, and settle the security
   question about leaving port 9222 open.
3. **Writing.** DOM click-and-type versus calling the internal mutation.
   Is the "a reply no keystroke produced looks like spam" argument real,
   or is it folklore? Does Facebook actually distinguish them server
   side, and how?
4. **Idempotency.** Is (postId, authorId) right, or does it wrongly merge
   two genuine questions from the same person? What is the minimum
   durable state, and how should an `intent` with no `confirmed` be
   resolved without ever risking a second reply?
5. **Orchestration and cost.** Is the split between a free local daemon
   and an occasional expensive model call right? What exactly should
   wake the model? Is a daily digest enough, or does a person waiting
   half a day for an answer defeat the purpose?
6. **The honest alternative.** Given that no public project posts
   replies and every API door is shut, is automating this at all the
   right call for a business whose owner's personal Facebook profile is
   a real asset? If the answer is a smaller intervention (a pinned first
   comment with the link, an edit to the post, drafts he taps to send
   from his phone), say so plainly and say what it costs him in reach.
7. **Scalability.** He will do this for every article. What does the
   design need so that post number ten costs him nothing new, and what
   breaks first as the number of live campaigns grows?

# What a good answer looks like

A clear recommendation with the pieces named and the order to build them.
Say explicitly which of the adviser's six points you would keep, change
or delete, and why. Give the daily cap you would set and the reasoning.
Name the single thing most likely to end this badly. Distinguish what you
know from what you are inferring, and do not pad.


## Attachments

none

## Round 1: answers

### A = openai/gpt-6.1-sol

## Recommendation

**Do not turn today’s script into an unattended responder yet.** Build a local campaign service with a read-only collector, durable reply queue, and a separately armed writer. Start with Alex approving replies; allow limited automatic delivery only after the reader and writer pass explicit acceptance tests.

For this business, the safest durable product is **“the link is already available; automation helps people find it”**, not “Facebook comments are the only way to obtain the link.” Put the link in the article announcement or an accessible first comment, subject to group rules.

There is no architecture that can promise all three:

- every requester answered within half an hour;
- indefinite unattended operation through Facebook’s private interface;
- negligible risk to Alex’s personal account.

The adviser is right about separation and durable state, but overstates the completeness test, the case against mutations, and the benefit of moving into an extension.

## 1. Completeness: delete the count-equality gate

**“Collected comment IDs equal displayed comment count” is not a reliable completeness proof.**

The UI count and the collected set may have different scopes: top-level comments versus replies, filtered or unavailable comments, and counts captured at different times. A changing thread also means there is no atomic snapshot. Equality can happen despite omissions; inequality can persist despite collecting everything Alex can access.

Instead, record **coverage evidence**:

- selected sort and filters;
- successful traversal of the relevant top-level connection;
- exhaustion of its cursor chain, rather than an arbitrary nested `has_next_page`;
- successful loading and parsing of every requested page;
- any cursor loops, authorization errors, or unexpected schemas;
- a second overlapping pass to catch arrivals during traversal.

Treat the displayed count as an **anomaly signal**, not an invariant.

Distinguish:

- **Candidate validity:** Is this specific comment a genuine request on the correct post?
- **Scan coverage:** How confident are we that this run found other requests?

An incomplete scan need not prevent answering a positively identified request. A corrupted parser or uncertain post identity should stop writing; an unexplained count discrepancy should normally trigger a rescan and warning.

**Completeness is not generally provable through this interface.** Design for eventual discovery through repeated overlapping reads, and report “scan incomplete” rather than “everyone answered.” Even eventual discovery cannot be guaranteed for comments Facebook never exposes to this account.

## 2. Where it lives: keep the browser, simplify ownership

For this particular one-person operation, my ranking is:

| Rank | Option | Maintenance and operational cost |
|---|---|---|
| **1** | **Playwright with a dedicated persistent browser profile** | Good lifecycle management, locators, network capture, screenshots and debugging. Still needs repairs when Facebook changes. Login checkpoints require Alex. Do not concurrently open the same profile elsewhere. |
| **2** | **External CDP controller, with its own browser/profile** | Smallest migration from today. Same Facebook breakage, plus more home-built lifecycle and protocol handling. The current shared daily-use browser arrangement is substantially worse. |
| **3** | **Unpacked MV3 extension** | Reasonable for an in-browser approval panel. Adds extension lifecycle, permissions, distribution and possibly native-messaging maintenance. Content scripts alone do not simply expose all response bodies; interception needs additional machinery. |
| **4** | **Userscript** | Excellent cheap prototype or assisted workflow. Weak unattended scheduling and lifecycle control; remains dependent on the browser and page staying in a suitable state. |
| **5** | **Cookie-based GraphQL replay without a browser** | Least attractive here: undocumented queries, tokens, request context, session handling and challenge recovery become Alex’s problem. Fewer UI dependencies, more protocol dependencies. |

The first two are close. **I would not rewrite a working CDP collector solely to obtain Playwright.** I would first give it exclusive ownership of a dedicated browser profile and put a clean browser-adapter boundary around it.

### Port 9222

An unauthenticated debugging endpoint is a powerful browser-control interface. Binding it to `127.0.0.1` prevents ordinary remote connections; **it does not protect it from local processes**. Do not expose it through a LAN binding, tunnel or permissive proxy.

Prefer a process-owned browser using a debugging pipe where supported, or launch a loopback-only endpoint only for the run and close it afterward. Keep unrelated personal browsing out of that profile.

Closing 9222 is worthwhile, but **an extension with broad Facebook permissions is also privileged software**. Moving authority into an extension is not automatically the largest security improvement. Profile separation reduces collateral exposure; it does not protect the Facebook account from restrictions.

## 3. Writing: keep DOM interaction, reject the keystroke story

**There is no established evidence here that “no keystroke produced this reply” is itself a server-side spam signature.**

Both methods ultimately cause a network request. Facebook can potentially observe differences in request context, client telemetry and behavior, but its actual detection features and weights are not public. DOM automation is not undetectable, and typing does not make repetitive promotional replies acceptable.

Keep DOM writing initially for practical reasons:

- it follows Facebook’s currently functioning client;
- it avoids owning the private mutation’s changing contract;
- it provides visible context for approval and debugging;
- it can expose permission failures and checkpoints before sending.

That is an engineering choice, not a proven anti-spam advantage.

Before submission, the writer must assert:

1. correct post and parent comment;
2. correct reply editor, scoped to that comment;
3. expected sending account;
4. expected text and URL, without manually duplicating Facebook’s mention.

After submission, capture the reply ID, parent ID, author and rendered content. If the result is ambiguous, **stop that item; never retry merely because the reply was not observed**.

Do not adopt direct mutations until they have a compelling maintenance benefit. They do not solve discovery, idempotency or account risk.

## 4. Idempotency: separate delivery policy from message identity

`(postId, authorId)` is reasonable for **“send this article’s link once to this person on this post.”** It is wrong as the universal identity of a reply: the same person can ask two genuine questions.

Use separate concepts:

- **Request identity:** campaign/post plus source comment ID.
- **Delivery suppression:** campaign plus author ID, if the policy is one link delivery per person.
- **Question handling:** separate tasks attached to their source comments.

Do not fall back to display names when author IDs are unavailable. Queue those cases for review.

Use SQLite rather than an increasingly complicated JSONL ledger. Minimum useful state:

- campaign, post, URL and policy version;
- observed comments and scan health;
- request classification;
- exact frozen outgoing text;
- delivery identity and unique constraints;
- attempt ID, timestamps and status;
- confirmed reply ID and parent ID;
- evidence or error for uncertain attempts.

Persist a prepared item, then durably mark the attempt **before** submission. Serialize writers.

An attempted submission without confirmation becomes **unknown**, not retryable. Reconcile by finding positive evidence of the outgoing reply. If found, confirm it. If not found, Alex reviews it.

There is no transaction spanning SQLite and Facebook. Consequently:

> You cannot guarantee both eventual delivery and no duplicates after every crash.

For this account, choose **at-most-once automatic attempts** and accept occasional missed replies. The adviser’s principle is sound, but “any row blocks action forever” is too crude: prepared-but-never-attempted work should remain executable.

## 5. Orchestration and cost: keep the split, remove the model from the delivery path

Use `launchd`, not a Claude session as the scheduler.

Every 10–15 minutes, a local worker should:

1. acquire a process lock;
2. scan due campaigns;
3. store observations and health;
4. classify straightforward requests;
5. prepare or send permitted replies;
6. reconcile uncertain attempts without resending;
7. close connections and exit.

Add timeouts, reliable lock cleanup and local alerts. A sleeping Mac, expired session or challenge breaks the half-hour target; configure power appropriately and detect these failures.

**A model is unnecessary for routine link delivery.** Use one short approved Hebrew response, perhaps a few editorial variants. Variety is not an established safety control.

Wake human review—or an optional local model—for ambiguity, substantive questions, complaints or sensitive content. Word count and question marks can be useful triage hints, but are not reliable decision rules. Never let difficult comments hold up obvious requests.

The requirement says everything runs locally. **Hosted model calls violate that requirement unless Alex explicitly grants an exception.** A small local classifier is optional, not foundational.

A daily digest is adequate for maintenance statistics, not delivery or urgent failures. Send local notifications promptly for authentication failures, uncertain submissions and queue backlog. A daily digest alone defeats the stated response-time goal.

## 6. The honest alternative and the cap

**My recommended unattended cap today is zero.** The production history does not justify autonomous posting yet.

After an approval-only pilot and fault-injection tests, if Alex accepts the account risk, I would start at **10 automatic replies per rolling 24 hours across all campaigns**, serialized and spread through normal polling—not as a claimed safe Facebook threshold, but as a deliberately small exposure budget.

There is no evidence that five is safe or ten is unsafe. The adviser’s five-per-day number is arbitrary. Any finite cap also conflicts with “everyone within half an hour” when demand exceeds it; excess work must become manual or remain unanswered. Say that explicitly.

For the lower-risk workflow:

- include the link in the announcement or an accessible first comment;
- use the collector to prepare replies Alex approves;
- stop automation on warnings, restrictions or suspicious session behavior;
- consider publishing future discussions on a Page if official API automation matters enough to change the distribution strategy.

A first comment may not be pinnable by Alex in that group, and comment ranking can bury it. An in-post link is easier to find. **The reach cost cannot honestly be quantified here**: group rules, member behavior and ranking all matter. Removing the “comment to receive” mechanism may reduce comment activity; that is not proof of a particular reach penalty.

Phone approval also needs a real interface. Under the no-cloud rule, the Mac approval queue is simplest; secure phone access adds networking and maintenance work.

## 7. Make article ten configuration, not another script

Build these pieces in this order:

1. **Campaign registry:** post ID/URL, article URL, approved Hebrew text, matching policy, active dates and limits.
2. **Read-only collector:** explicit coverage reporting, saved sanitized fixtures and parser tests.
3. **SQLite queue and reconciliation:** crash tests before any new writing.
4. **Approval-only writer:** exact target assertions and reply-ID capture.
5. **`launchd` runner and health alerts.**
6. **Optional narrowly bounded automatic delivery.**

Keep Facebook-specific selectors and response parsers behind adapters. Save evidence for failures, not unrestricted archives of group members’ activity.

As campaigns grow, the first limits are likely **scan time and the shared account’s activity budget**, not CPU or model cost. Poll recently active campaigns frequently, older ones less often, and retire campaigns explicitly. Serialize writes across all campaigns. Do not let ten independent campaigns each consume a supposedly safe personal cap.

### Verdict on the adviser’s six points

- **Completeness gate:** **Replace.** Coverage evidence, not count equality.
- **DOM writing:** **Keep**, but delete the unsupported keystroke-based spam rationale.
- **MV3 migration:** **Do not prioritize.** Dedicated browser ownership and lifecycle control come first.
- **Idempotency:** **Keep the durable-attempt principle; change the keys and states.**
- **Local scheduler and selective model use:** **Keep**, with no hosted model unless permitted and no model required for routine delivery.
- **Five-per-day cap:** **Reject as a safety claim.** Start approval-only; a later cap is an exposure budget, not protection.

**The single thing most likely to end this badly is a restriction on Alex’s personal Facebook account from repetitive automated link replies.** Better engineering can sharply reduce duplicates and wrong-box posts. It cannot establish that Facebook permits—or will continue tolerating—the underlying activity.

### C = google/gemini-4-argon

# The Recommendation

Do not build a fully autonomous write-bot. Build a **Human-in-the-Loop (HITL) Queue** using **Playwright with a dedicated persistent browser profile** triggered by `launchd`. 

If Alex insists on full automation, he must **stop pasting the URL in the replies**. Instead, place the URL in the **first comment on the post** (or edit it into the post body after 1 hour), and have the automation reply strictly with text: *"Sent! Look at the first comment under the post for the link [Name]."* This eliminates the primary spam vector (repeated external URL insertion) while keeping the algorithmic velocity of replies.

### Build Order
1. **State & Ledger (`sqlite3`):** Create a single local SQLite database (`campaigns`, `comments`, `deliveries`). 
2. **Isolated Browser Environment:** Configure Playwright to launch Brave/Chrome pointing to `~/.alex-fb-bot-profile` (logged into Facebook once, isolated from his daily browser).
3. **Reader Worker (Node + Playwright):** Runs via `launchd` every 20 minutes. Navigates to active campaign URLs, forces "Newest" sort, intercepts `loadingFinished` GraphQL responses for comment nodes, writes new comments to SQLite.
4. **Decider & Notifier:** Matches simple comments against a regex; routes complex ones to Claude API. Instead of auto-sending, it sends a local macOS notification (or Telegram message to Alex) with a 1-click "Approve Batch" prompt, OR auto-types up to the cap without URLs.
5. **Writer Worker:** Uses Playwright’s native `locator.pressSequentially()` (which triggers real DOM keyboard events) scoped strictly to the target comment's container.

---

# Verdict on the Adviser’s Six Points

1. **Completeness Gate (`collected == displayed count`):** **DELETE.** This is a guaranteed deadlock. Facebook’s displayed comment count includes nested replies, spam-filtered comments, deleted comment stubs, and comments from blocked users that the GraphQL API will never return to the client. If you gate writes on exact equality, the script will never write a single reply once a thread hits ~10 comments.
2. **Keep DOM Writing over Direct Mutations:** **KEEP.** Direct GraphQL mutations lack client-side telemetry payloads and behavioral sequence events.
3. **Move to Unpacked MV3 Extension to close Port 9222:** **CHANGE.** Closing port 9222 on his daily browser is mandatory, but MV3 extensions are the wrong vehicle. MV3 service workers go to sleep aggressively, cannot cleanly write to local SQLite ledgers without a Native Messaging host, and still share his main browser session. Use Playwright with a dedicated user data directory instead.
4. **Idempotency via `(postId, authorId)` and Two-Phase Ledger:** **KEEP AND REFINE.** The two-phase ledger (`intent` -> `confirmed`) is the only way to prevent double-posting when verification flakes.
5. **Kill the Claude Cron for `launchd` + Templates:** **KEEP.** Burning LLM tokens to run a cron loop and write identical 5-word Hebrew replies is pure waste.
6. **Cap at 5 Replies a Day:** **CHANGE.** A cap of 5 makes the automation useless—it takes 20 seconds to paste 5 replies by hand. If you include links, 5 is safe and 20 is dangerous. If you **remove the link from the replies** (pointing users to the first comment), you can safely cap at **25–30 replies/day**, spaced out by human intervals (2–5 minutes between replies).

---

# Rulings on the Seven Architectural Questions

### 1. Completeness Gate
* **Fact:** Facebook’s top-level `comment_count` metric does not equal deliverable top-level comment nodes. 
* **The Rule:** Abandon provable completeness. Your design must assume **partial reads** forever and rely entirely on the idempotency ledger to safely process whatever window it sees. To maximize read accuracy without scrolling 60 threads deep: switch sort to **Newest ("החדשים ביותר")**, read the initial GraphQL payload plus *at most* two pagination cursors down, and stop. Since the job runs every 20 minutes, reading the 20 newest comments is mathematically sufficient to catch everyone without ever needing the full tree.

### 2. Where the Automation Lives (Ranked for 6-Month Durability)
* **Security Ruling on Port 9222:** Leaving `--remote-debugging-port=9222` open on Alex’s primary browser is a critical vulnerability. Any malicious npm package, local script, or browser vulnerability can dump his cookies, bank sessions, and passwords with zero authentication. Close it immediately.

**Ranking:**
1. **Playwright with a dedicated persistent profile (Winner):** Launches headless/minimized only when `launchd` fires, uses a separate Chrome profile (`--user-data-dir`), closes cleanly when done. Zero exposed ports when idle. Survives Facebook reshuffles well because you combine network interception with scoped Playwright locators.
2. **Userscript (Tampermonkey) in a dedicated browser profile:** Very easy to maintain, runs in page context, zero CDP overhead. Loses to Playwright because orchestrating tab lifecycle, waking from sleep, and writing to disk on macOS are clunky.
3. **Unpacked MV3 Extension:** High maintenance. Passing data between Main world (to monkey-patch `fetch`/`XHR` for GraphQL), Isolated content script world, and a sleeping background Service Worker is fragile and miserable to debug for one person.
4. **External CDP against primary browser (Today):** Dangerous (port 9222), collides with human usage (Bug #9), leaves hanging sockets (Bug #11).
5. **Raw GraphQL replay (No browser):** Dead on arrival. Requires maintaining `fb_dtsg` tokens, `lsd` tokens, doc_ids that rotate weekly, and forging request signatures without triggering instant automated account locks.

### 3. Writing: DOM vs. Internal Mutation
* **Fact:** Facebook’s comment creation mutation (`UFI2CreateCommentMutation`) includes client-generated metadata (session IDs, surface routing, composer interaction timestamps). Furthermore, firing `focus`, `keydown`, `input`, and `keyup` events interacts with React’s internal state tracking (`__reactProps`).
* **Inference:** Nobody outside Meta's Integrity team knows the exact weights of their classifier, but sending a raw GraphQL mutation when the client never requested the composer UI state or fired focus events is trivial to detect server-side. 
* **How to fix Today’s DOM Bugs (Bugs #1, #2):** Do not use `document.execCommand('insertText')` blindly. Using Playwright, locate the specific `<div role="article">` containing the commenter's GraphQL ID or text, click the Reply button *inside that container*, wait for the new `[contenteditable="true"]` box to mount *inside that container*, move the cursor to the `End` key (after the auto-inserted `@Name` mention pill so you never type the name—fixing Bug #2), and type using `pressSequentially(text, { delay: 80 })`.

### 4. Idempotency
* **Key:** `(postId, authorId)` is correct for automated link delivery. If a user comments twice ("I want the skill" and then "Does this work on Windows?"), the automation should only ever deliver the link once.
* **Handling Genuine Follow-ups:** If the script sees a comment from an `authorId` already in the ledger for that `postId`, it sets status to `ignored_duplicate`. If that second comment fails the "trivial regex test" (i.e., it contains a `?` or is >10 words), flag it as `needs_human_review` in the notification digest.
* **Resolving Stuck `intent` States:** Write `intent` to SQLite immediately before clicking Reply. If the script crashes or verification fails, the row stays in `intent`. **Never retry `intent` rows automatically.** Instead, include them in Alex’s notification: *"1 reply to [Name] is in unknown state (check manually)."* Under-answering by 1% is fine; double-answering looks like a broken bot.

### 5. Orchestration and Cost
* **Architecture:** `launchd` (`StartInterval` = 1200 seconds) runs a local Node script.
* **Classification Rule:** Normalize Hebrew text. If the comment is $\le 8$ words and matches common roots (`רוצה`, `אשמח`, `שלח`, `לינק`, `תודה`, `אני`, `סקיל`, `גם`), pick from a pre-generated rotation array stored in SQLite (persisting `last_used_index` in the DB to fix Bug #8). Cost: $0.
* **Waking the Model:** If the comment does not match the trivial pattern, do **not** have an LLM auto-reply in a public group. Hallucinating or giving a weird robotic answer in Hebrew to a nuanced question ruins Alex's credibility. Instead, fire a push notification (via a free Telegram bot or macOS `osascript` alert) straight to Alex with the comment text and a direct link to the comment.

### 6. The Honest Alternative
The whole reason creators do the "Comment X and I'll reply" dance is to juice Facebook's edge-rank algorithm during the golden first 3 hours of a post. 

**The Honest Assessment:** Using a personal profile to paste the same external domain 30 times an hour in a third-party group is the highest-risk activity on Facebook. 
**The Alternative:** 
1. Publish the group post *without* the link ("Comment below and I'll send you the skill").
2. Immediately post the link yourself as the **First Comment** (or put the link on a clean Notion/Google Doc bridge page).
3. Wait 2 hours as comments roll in (boosting the post).
4. **Intervention:** Open the post on desktop, spend 4 minutes pressing `Reply -> Cmd+V -> Enter` using a text-expander (like Raycast or macOS Text Replacement) with 5 variations of *"Here you go, placed the link in the first comment above!"* 
* **What it costs in reach:** Zero. You get the exact same comment velocity.
* **What it saves:** 100% of engineering maintenance and 90% of account-ban risk.

### 7. Scalability (Post #1 to Post #10)
* **How Post #10 costs nothing:** A local CLI command `node campaign.js add <post_url> <article_url>` adds a row to the `campaigns` table in SQLite with `created_at` and `status = 'active'`.
* **What breaks first:** Polling 10 active posts every 20 minutes means 30 page loads an hour, which triggers Facebook’s rate-limiting ("You’re going too fast" temporary blocks on GraphQL endpoints) and balloons execution time.
* **The Fix (Decay Schedule):** Polling frequency must decay by post age:
  * **Age 0–24 hours:** Poll every 20 minutes.
  * **Age 1–3 days:** Poll every 2 hours.
  * **Age 3–7 days:** Poll twice a day.
  * **Age > 7 days:** Mark campaign `archived` automatically.

---

# Summary of Risks & The Single Most Likely Failure

* **Known Facts:** Port 9222 is an open backdoor; Facebook's displayed comment count never matches fetched GraphQL nodes; GraphQL responses in CDP are only readable after `Network.loadingFinished`; typing the `@mention` manually duplicates Facebook's automatic reply tagging.
* **Inferences:** Facebook's spam heuristics weight identical outbound URLs inside short time windows far higher than identical Hebrew text strings; Playwright’s synthesized input events are indistinguishable from human typing at the DOM layer if delayed properly (`50-120ms` per keystroke).

**The Single Thing Most Likely to End This Badly:**
Not a DOM change and not a CDP bug. It is **outbound URL velocity triggering an automated Integrity checkpoint on Alex's personal account.** By the third or fourth article, when a post goes mildly viral and the script dutifully pastes `https://alex-domain.co.il/...` 35 times in two hours inside a group he doesn't own, Meta's automated link-spam filter will flag the URL as spam, retroactively hide all 35 replies (making him think the script is broken), and slap his personal profile with a 3-to-7-day group-posting restriction. **Take the URL out of the automated replies.**

### x-ai/grok-4.7 (abstained: The operation was aborted due to timeout)

### B = moonshotai/kimi-k3

## Recommendation, up front

Unpacked MV3 extension; reader that paginates to convergence and fails closed; writer that clicks and types in the human path; three-key go/no-go before every send; launchd every 15 minutes; model woken only to mint variants per campaign; non-trivial comments routed to Alex, not to the model; cap 5/day, 2/hour. Keep the adviser's architecture. Demote his completeness gate from proof to smoke alarm.

## Rulings

**1. Completeness gate — change it.** The displayed count counts threaded replies, counts comments hidden by quality filters, lags deletes, and diverges from the enumerable set by ordinary platform behavior, not reader error (known practitioner behavior; the counter's exact composition is opaque). A strict equality gate therefore either deadlocks — permanent mismatch, never writes, silence for days — or gets "temporarily" bypassed and becomes decoration. The correct test, in descending strength: (a) *pagination convergence* — walk every cursor chain to termination, aggregate `has_next_page` across all payloads, never trust the first `false` (fault #6); (b) *set stability* — two scans 15 minutes apart return the same id set; (c) the count as an *advisory* tripwire with tolerance — if |count − ids| jumps or exceeds ~2, report and write nothing that run. Completeness on Facebook is not provable. Design assumes permanent under-reading and makes it safe — which is exactly what the ledger does. Under-read costs a late notification; over-read costs a double answer. The asymmetry is the whole argument.

**2. Where it lives.** Ranking for six-month survival: **extension > userscript > CDP > Playwright > cookie replay**. The extension wins on harness durability, not just security: content scripts reattach on every load, chrome.storage holds state, and faults #9 (tab adoption) and #11 (socket leak) don't exist because there is no socket to leak and no tab to adopt. On 9222: the local-malware exposure is real but modest on a one-user Mac — the realistic vector is a compromised npm package, which owns his session either way. The decisive fact is that since Chrome 136 (2025) Chrome refuses `--remote-debugging-port` on the default profile *because infostealers abused it* (known). CDP-against-your-daily-browser is a path the platform is closing; building new work on it in 2026 borrows time. Userscript: same page-world technique, one extra dependency, acceptable fallback. Playwright: wants to own the browser — a second browser life or profile-lock fights with his daily one; worst fit for "must live in the browser he uses." Cookie replay: delete from consideration — doc_ids rotate, fb_dtsg handling is fragile, failures are silent 200s with error payloads, and it produces the cleanest possible forensic record of automation. When Facebook reshuffles, the core cost (selectors, GraphQL envelope) is identical for every option; harness cost is ~zero for extension, constant friction for CDP, rewrite risk for replay.

**3. Writing — keep DOM, change the reason.** "A reply no keystroke produced looks like spam" is folklore-grade inference. Facebook indisputably collects rich client-side interaction telemetry and runs server-side behavioral classification (known); that any individual comment is validated against its producing keystrokes has no public primary evidence. DOM wins without the folklore: it exercises the human code path so failures look like human failures and are visible; the UI inserts the mention (kills fault #2); no dependence on doc_id/fb_dtsg; and a direct mutation fails silently in exactly the way his verifier already proved it cannot judge (#12). Rules from today's scars: assert focus is inside the *specific comment's* composer before typing (#1); type body only, let Facebook insert the mention; treat verify-failure as *unknown*, never as *absent*.

**4. Idempotency — keep (postId, authorId), three additions.** For this campaign the deliverable is per-person; a second question from the same person routes to Alex as non-trivial anyway, so merging is a feature. Additions: store the answered commentId; make the *page*, not the ledger, the final arbiter — before acting on any comment, check its thread for an existing reply from his profile id and mark confirmed-from-page if found (also covers replies he taps out by hand); an `intent` with no `confirmed` is **never retried automatically** — it goes to a review queue, resolved by a human looking at the page, then marked confirmed or void. Act only when all three say go: ledger clean, his reply absent in-thread, comment present. A wrong reader or verifier can then only under-answer. Minimum state: the append-only JSONL he has, plus {postId, authorId, commentId, state, replyId?, ts}. No database.

**5. Orchestration — keep the split, redirect the escalation.** launchd every 15 min with jitter; dumb daemon; exits silent when idle. Model wakes exactly once per campaign to mint 8–10 variants. Change the adviser's per-comment rule: non-trivial comments (the >12-words / question-mark test is fine) go to **Alex via notification**, optionally with a model-drafted suggestion for one-tap use — not auto-sent, because an unattended model answer to a substantive question is reputational risk, and those comments carry no 30-minute promise. The half-hour SLA applies to the template path, which is the product. Daily digest: right as a one-line health report (scanned X, replied Y, anomalies Z), wrong as the delivery mechanism. Steady-state cost: ~zero.

**6. The honest alternative — say it plainly.** For ~10–20 commenters per article, tapping prepared replies from his phone is 5–10 minutes, zero account risk, and loses only latency — and the 30-minute SLA is his own invention; nobody promised it, and the notification fires whenever the reply lands. Automation is justified only by volume growth or his unavailability. What tips me to still build it, capped: he publishes indefinitely, the job is perfectly stereotyped, and every safeguard above fails closed. Name the reach cost honestly: a pinned comment with the link turns the thread from engagement into a billboard, and "comment to receive" is the canonical engagement-bait pattern Facebook has demoted since 2017 (known) — the mechanic is demoted *regardless of automation*. So: build the daemon, cap it hard, and A/B one article with a pinned comment to measure what the mechanic actually buys. If the delta is small, retire the daemon.

**7. Scalability.** Campaign as data, not code: one JSON per campaign {postId, link, variants, active window}; daemon iterates active campaigns; variant chosen by hash(postId, authorId) mod n — stable per person, no global index (kills fault #8 permanently); one global send queue, cap enforced across campaigns, newest campaign first. What breaks first, in order: (1) **the reader on a Facebook deploy** — certain; fail-closed means silence, and the health line is how he notices; (2) reply-composer selectors (#1-class) — same treatment; (3) **the same ~20 members receiving a link reply under every article** — the cumulative cross-campaign pattern is what a classifier or group admin sees; (postId, authorId) permits this by design and there is no technical fix, only the cap and his judgment; (4) token cost never breaks. Do not build: a dashboard beyond the ledger; multi-group support; auto-repair of "vanished" replies — #12 proved he cannot trust absence.

## Verdict on the six points

1. **Change** — gate is an alarm, not a proof; strict equality deadlocks.
2. **Keep**, strengthened — the platform is closing 9222 regardless.
3. **Keep the choice, change the justification** — failure-visibility and mention handling, not keystroke forensics.
4. **Keep with additions** — store commentId, reconcile from the page, unresolved intent → human.
5. **Keep the split; route non-trivial to Alex**, model drafts only.
6. **Keep** — 5/day, plus ≤2/hour and ≥20 min jittered gaps.

## Cap, and why

5/day global, 2/hour, 20+ minutes between sends, no consecutive variant repeat. No numeric thresholds are published (known), so the cap must sit inside plausible human behavior: five same-link replies spread across a day reads like a member answering people; thirteen in an hour reads like a tool — to Facebook and to the group admin, whose delete-and-ban is the *nearer* threat. Anyone quoting a precise safe number is guessing (inference), mine included.

## The single thing most likely to end this badly

Not a code bug. The accumulated pattern — same profile, same group, same domain, same dozen recipients, article after article — crossing a behavioral threshold or an admin's patience around post six, while the system runs perfectly. The loss is a restriction on the personal profile that *is* his distribution channel: asymmetric, escalating, effectively unappealable on any useful timeline. Every engineering control above is subordinate to the cap for this reason. Runner-up: the group admin ends it before Facebook does.

Known vs inferred, flagged inline; the load-bearing inferences are the safe-velocity number and the telemetry argument — both judgment, neither evidenced.

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | A: Most accurate and actionable: replaces count equality with coverage evidence, handles uncertain writes rigorously, respects local-only constraints, and distinguishes engineering choices from unsupported spam claims.; B: Useful architecture and risk analysis, but overstates extension durability, introduces arbitrary completeness tolerances, understates manual-posting risk, and leaves local-only model execution and extension orchestration unresolved.; C: Contains substantial unsupported claims about safe posting rates, telemetry, reach and ban risk; bounded reads cannot guarantee discovery, and proposed cloud services and slower polling violate core requirements. |
| google/gemini-4-argon | C: Most actionable and well-reasoned architecture: correctly identifies Playwright with an isolated profile over MV3, fixes the specific DOM bugs with concrete mechanisms, and offers the smartest anti-spam workaround (putting the link in the first comment and replying with text only).; A: Thorough, rigorous, and honest engineering analysis with great distinctions between message identity and delivery suppression, though slightly more abstract than C on specific Facebook workarounds.; B: Sharp and well-written, with a great point about Chrome 136+ deprecating default-profile remote debugging, but recommends an MV3 extension coupled to launchd without addressing how a background daemon cleanly drives and persists state in an extension. |
| moonshotai/kimi-k3 | A: Most accurate and complete: rejects unprovable completeness, separates identity from delivery, prioritizes account risk and local operation, and avoids unsupported safety claims.; B: Sharp, actionable architecture with excellent failure-mode analysis, though its extension ranking and some platform claims are less convincing than A's cautions.; C: Contains useful implementation tactics, but makes overconfident spam-threshold and reach claims, proposes a cloud notification option, and understates first-comment visibility and policy risks. |

| Model | Label | Points | Mean position |
|---|---|---|---|
| openai/gpt-6.1-sol | A | 8 | 1.33 |
| google/gemini-4-argon | C | 5 | 2.33 |
| moonshotai/kimi-k3 | B | 5 | 2.33 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 11197 | 3262 | 0.0606 |
| google/gemini-4-argon | 11681 | 2944 | 0.0528 |
| x-ai/grok-4.7 | 0 | 0 | 0.0000 |
| moonshotai/kimi-k3 | 11328 | 10581 | 0.1638 |
| Total | 34206 | 16787 | 0.2772 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-11-12-facebook-reply-architecture.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1794487458-BPiAwgjZbFOQiauUmQo6 | 200 | 68190 |
| openai/gpt-6.1-sol | 1 | gen-1794487458-ZnNrGyyGEUtEhK5p5itD | 200 | 88263 |
| moonshotai/kimi-k3 | 1 | gen-1794487582-hnrGmsAvh30nMJEKf2iZ | 200 | 75275 |
| openai/gpt-6.1-sol | 2 | gen-1794487966-7Aadu4vgbaVV7SlvLOjG | 200 | 5823 |
| google/gemini-4-argon | 2 | gen-1794487966-3h3rYFSdUPWLuLaCxZ5Y | 200 | 9051 |
| moonshotai/kimi-k3 | 2 | gen-1794487966-UZeD3uDyRTnBSstVyQ9V | 200 | 10678 |

## Synthesis

**Agreement.** All three answering seats agreed on the shape: a local scheduler
(launchd, not a Claude session) runs a read-only collector, durable state lives in
SQLite rather than an append-only text ledger, writing stays with the DOM through a
real browser, and the model is removed from the routine delivery path entirely. All
three also agreed that the single thing most likely to end this badly is not a bug
but enforcement against Alex's personal Facebook account, and that no amount of
engineering can establish that Facebook tolerates the underlying activity.

**Disagreements.** The sharpest split was with the adviser whose position the brief
put up for demolition, and the top seat demolished three of its six points. The
completeness gate ("collected ids must equal the displayed comment count") was
rejected outright: the displayed count scopes replies, hidden and deleted comments
differently, the thread changes while you read it, so equality can hold while
comments are missing and fail while nothing is. Completeness through this interface
is **not provable**; the replacement is recorded coverage evidence plus overlapping
repeated reads, and a candidate positively identified as a request may still be
answered even when the scan was incomplete. The "a reply no keystroke produced looks
like spam" argument was rejected as folklore with no public evidence; DOM writing is
still right, but for maintenance reasons, not safety. Moving into an MV3 extension
was demoted: an extension with broad Facebook permissions is privileged software
too, and the real win is a dedicated browser profile the automation owns, not a
shared daily-use browser. On the key, `(postId, authorId)` is right for "deliver
this link once to this person" but wrong as the identity of a reply, since one
person can ask two genuine questions; request identity stays the comment id and
delivery suppression is the author.

**Recommendation.** Build in the council's order: campaign registry, read-only
collector with coverage reporting, SQLite queue with reconciliation, approval-only
writer, launchd runner, and only then any automatic delivery. Keep the attempt
durable before submission and treat an unconfirmed attempt as **unknown and never
retryable**: at-most-once, accepting an occasional missed reply, because no
transaction spans SQLite and Facebook. Port 9222 bound to loopback still exposes the
logged-in browser to every local process; give the automation its own profile and
stop sharing the browser Alex banks in. The unattended cap the top seat would set
today is zero, rising to about 10 a day only after an approval-only pilot, and
explicitly as an exposure budget rather than a safe threshold. Five a day was
rejected as an arbitrary number dressed as protection.

**Confidence.** High on the architecture and on completeness being unprovable, since
all three seats converged and the reasoning is mechanical rather than empirical.
High on the API facts, which were verified against Meta's own documentation. Low on
every number: no seat could cite a real spam threshold, and the honest position is
that any cap is a chosen exposure, not a known-safe limit. One seat abstained, so
this run rests on 3 opinions rather than 4.
