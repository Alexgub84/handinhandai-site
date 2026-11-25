# Council: vibe-coding-10-guides

- Date: 2026-11-25
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

Context: handinhandai.com is a Hebrew-language personal-brand marketing site for
a one-man AI software development shop in Israel. A council of 4 independent
models already ruled, yesterday, on the site's general growth strategy
(record: docs/council/2026-11-25-seo-strategy-fork.md). That ruling is settled
and should NOT be re-argued here: 3 of 4 seats concluded distribution into
real channels (542 first-party readers/month) is the engine right now, Google
Search Console is secondary (5 clicks in 3 months), and all 4 seats rejected
building downloadable Claude-skills specifically to chase developer reach for
its own sake, because a controlled pair of guides with the identical skill
showed the skill itself does not cause ranking or citation.

New decision, authorised by the site's owner: he will write and publish 10
new Hebrew guides (not yet written), aimed at Hebrew "vibe coding" Facebook
groups (the largest is 52,400 members) that mix hobbyist/solo builders using
AI tools (Lovable, Base44, Claude, Cursor) with actual Israeli business owners
building software for their own businesses inside those same groups. He wants
to be read as the credible professional in that room, for both audiences.
Some guides should be general-interest, some more professional/technical.
Skills get attached "where they help" - undecided which or how many.

New research just completed (full detail in
docs/seo/2026-11-25-vibe-coding-demand-map.md, 21 Hebrew subjects tested live
on Google 2026-11-25) found this territory is far more crowded than the first
10-guide programme's app-publishing niche was. Headline findings:
- Of 21 candidate subjects, only 1 (#19: "how do I sell/monetise an app I
  built with AI") is a confirmed OPEN Google field - no dedicated Hebrew
  competitor, and it is also the exact audience crossover the owner wants
  (a hobbyist whose project now has real users).
- 1 more (#10: the felt pain of an AI-built codebase becoming unmanageable)
  is PROVISIONALLY open on its narrative framing, contested on its generic
  technical framing ("architecture") - needs more testing before committing.
- 16 of 21 are CROWDED - multiple dated, competent Hebrew guides already
  exist from a recurring set of Israeli AI-consultant competitors - including
  the subjects with the loudest real community demand: security of an
  AI-built app, a hacked app / incident response, data leaking through
  Supabase row-level security, and what tools like Lovable or Base44 cost
  per month.
- 2 subjects (#9: "my app got tangled, what do I do", the single
  highest-engagement Facebook post found in the whole scan, 37
  reactions/88 comments; and #13: a clone of the Green Invoice invoicing
  product, 17 reactions/83 comments, the second-highest-engagement post)
  have real, heavy demand INSIDE the Facebook group and literally no
  matching Google search volume at all - Google either misreads the Hebrew
  phrasing entirely (#9, reads as a phone crashing) or drops the key term
  outright (#13, Green Invoice's own pricing pages fill the results instead).
- 3 subjects were separately flagged where the honest, correct answer argues
  AGAINST hiring the owner: #11 (terms of use/privacy policy - the honest
  answer is "pay a lawyer ~1,500-2,000 NIS, or use a named legal-tech
  service"), #12 (Israeli payment processing - the honest first answer is
  "pick an existing provider directly," though wiring one into an app is
  still a real paid service), and #21 (learning vibe coding alone - the
  reader explicitly wants to need no one).

The question for the council: given the first ruling already settled
(distribution over Google, skills are not a ranking lever), how should the
owner choose and sequence these specific 10 guides?

Rule explicitly on this fork - pick one primary position and sequence the
rest, don't survey all four with no pick:
(a) Pick the 10 subjects for Google openness - this yields very few
    qualifying subjects (effectively 1-2 of the 21 tested) and slow returns.
(b) Pick the 10 for demand inside the Facebook groups where he actually
    posts, accepting that most of the 10 will never rank on Google at all -
    treating each guide as a credibility asset and a conversation-starter
    for that room, not a search asset.
(c) A deliberate split of the 10 between (a) and (b) - if you choose this,
    give the exact ratio (e.g. 3 open-for-Google / 7 group-demand) and name
    which 3 subjects should be written first and in what order.
(d) Something the data above suggests this brief has not already named -
    say explicitly what, and why the data points there.

Also rule explicitly on these 4 specific questions:
1. How many of the 10 guides should carry a downloadable Claude skill, and
   by what test or criterion - given the first council's own finding that an
   attached skill does not cause a guide to rank or get cited.
2. How should a guide carry a "hire me" route without reading as a sales
   pitch to a Facebook group that is known to punish self-promotion and
   remove/downrank posts that read as advertising?
3. Does a guide whose honest, correct answer argues AGAINST hiring the owner
   (e.g. "just pay a lawyer," "just pick a payment provider yourself," "here
   is how to learn this with nobody's help") still earn one of the 10 slots -
   and why or why not?
4. What specifically should be measured 30 days after the first 3 guides are
   published to know whether this choice was right - given that Search
   Console cannot see Claude-skill downloads at all, and the site's own
   first-party visitor id rotates every UTC day by design, so a returning
   reader is structurally unknowable from the site's own analytics.

A good answer gives one clear primary recommendation (not a survey), names
which specific numbered subjects from the demand map it would write first,
and engages with the specific numbers and named subjects above rather than
generic content-strategy advice.


## Attachments

none

## Round 1: answers

### C = openai/gpt-6.1-sol

## Recommendation: **(b), group demand first—for all 10 slots**

Choose subjects for the room where the owner actually distributes, then use Google openness as a tie-breaker—not an admission requirement.

This is **not a 1/9 Google/Facebook split**. #19 earns its place because it addresses the desired audience crossover; its open Google field is an additional advantage. With 542 first-party readers/month versus 5 Google clicks in three months, excluding a strong Facebook subject because it cannot rank would optimise for the wrong channel.

The positioning should be: **the professional who helps people understand what changes when their AI project becomes something people depend on.** That serves hobbyists without excluding business owners.

## The 10 guides, in order

The brief supplies subject numbers for some topics but not others; I leave the latter unnumbered rather than invent identifiers.

| Order | Subject | Editorial job |
|---|---|---|
| **1** | **#9: “My app got tangled—what do I do?”** | Address the strongest observed conversation: **37 reactions/88 comments**. Give an immediate rescue sequence: preserve a working version, reproduce the failure, stop uncontrolled changes, and decide whether to repair or rebuild. |
| **2** | **#19: Selling/monetising an AI-built app** | Reach the exact crossover: a builder now facing real customers. Cover validation, support obligations, operating costs and charging—not just adding a payment button. This is also the one confirmed open Google field. |
| **3** | **Supabase row-level-security/data leakage** | Establish technical credibility with a concrete, demonstrable problem: “Can customer A read customer B’s records?” Include a safe two-account test in a test environment. |
| **4** | **What Lovable/Base44 actually cost per month** | Broad usefulness. Use dated, explicit assumptions and distinguish building costs from running costs. Avoid a brittle catalogue of prices without scenarios. |
| **5** | **#12: Israeli payment processing** | Explain choosing an existing provider first; then distinguish that choice from correctly implementing payment states, webhooks and failures. |
| **6** | **Security of an AI-built app** | A broader pre-launch checklist, explicitly distinct from the RLS guide: authentication, secrets, permissions, backups and dependencies. State what a checklist cannot certify. |
| **7** | **A hacked app / incident response** | A calm containment-and-recovery runbook, including when specialist help is necessary. Not a fear-based sales page. |
| **8** | **#13: Building a Green Invoice-style product** | Use the **17 reactions/83 comments** as evidence of discussion interest, not proven purchasing intent. Explain the difference between reproducing screens and operating compliant invoicing software; identify what requires professional verification. |
| **9** | **#10: When the codebase becomes unmanageable** | A deeper maintainability guide: how to keep changing an app safely after it works. Distinguish it sharply from #9’s immediate rescue task. |
| **10** | **#11: Terms of use/privacy policy** | Give the honest route: a lawyer or an appropriate named legal-tech service, with scope and pricing verified before publication. Explain what technical facts the reader should prepare for them. |

**Write #9, #19 and the RLS guide first, in that order.** Together they test immediate pain, commercial transition and professional depth.

Do not write all ten before learning from those three. In particular, #10 must demonstrate a separate reader task from #9 before drafting. Its provisional Google opportunity is not sufficient justification for a second version of the same article.

## 1. Downloadable skills: **two planned, no quota to fill**

Attach skills to:

- **#9:** a read-only project-triage workflow producing a problem inventory and prioritised recovery plan.
- **RLS:** a review-and-test-plan workflow producing an access matrix and verification steps—not a “your app is secure” certificate.

Release each only if it passes this test:

1. It performs a repeatable task better than the article alone.
2. Representative users can use it without the owner interpreting its output.
3. It requires no production secrets or customer data.
4. It defaults to analysis, not destructive changes.
5. Its usefulness survives a realistic project test.

If only one passes, publish one. **Two is a production plan, not an attachment target.** Provide a usable checklist for readers who do not use Claude. Neither download gets justified by ranking or citation expectations.

## 2. The “hire me” route: separate help from solicitation

**In Facebook:** publish a substantial native answer, disclose authorship, follow group rules, and link only where permitted. No gated checklist, “comment AI for the link,” or unsolicited sales DMs.

**On the guide:** finish the useful answer before offering a small, specific escalation route:

> “If this is already serving customers and you cannot establish which users can access which data, I offer a scoped access-control review. Here is what it includes.”

Also say when that service is unnecessary. Link to a clear scope/contact page; do not interrupt the article with pop-ups.

The distinction matters: **a restrained website CTA does not make a promotional Facebook post acceptable.** If links are prohibited, contribute without one.

## 3. Do answers against hiring deserve slots? **Yes—but not automatically**

Include **#11 and #12**. Both help the intended audience make consequential decisions. Correctly saying “this is a lawyer’s job” or “choose a provider directly” demonstrates professional boundaries and makes subsequent paid recommendations more credible.

Exclude **#21, learning entirely alone**, from this batch. Not because generosity is bad, but because ten slots are scarce and its stated goal is less aligned with the transition to operating dependable business software. It needs stronger evidence of distinctive usefulness to displace these ten.

Do not manufacture a development upsell at the end of a referral-to-a-lawyer guide.

## 4. The 30-day test

Record results **30 days after the third publication**, comparing each guide’s first 30 days where available and clearly marking incomplete windows. Track three separate layers:

| Layer | Measure |
|---|---|
| **Distribution** | Which groups permitted publication, post reach where available, removals/admin warnings, and tagged link clicks by post. Membership of **52,400** is not exposure. |
| **Credibility/usefulness** | Substantive non-owner commenters, concrete follow-up questions, reported attempts or outcomes, and unsolicited recommendations. Separate these from likes and generic praise. |
| **Business intent** | Contact-route clicks, submitted enquiries, qualified conversations, and paid work. Ask enquirers which guide/post prompted contact. |

On-site, instrument article views, a defined engaged-read event, CTA clicks and **skill-download events** with guide identifiers. Report downloads separately from successful use; offer an optional usefulness question.

Because visitor IDs rotate daily:

- Do **not** report monthly unique people, returning-reader rates or cross-day journeys.
- Do not sum daily distinct IDs and label them people.
- Do not introduce fingerprinting to repair that limitation.
- Treat attributed enquiries as incomplete attribution, not a complete conversion funnel.

### Decision rule

Before publishing, use this modest operating hurdle—not a claimed industry benchmark:

- **Continue the group-first approach** if at least **two of the first three** produce substantive exchanges with **three or more independent non-owner participants**, and the batch produces at least one concrete follow-through signal: a reported implementation, request for deeper help, or qualified enquiry.
- **Revise packaging/distribution** if permitted posts get little exposure.
- **Revise the subjects or execution** if posts get meaningful exposure but produce only superficial engagement.
- A qualified enquiry or paid engagement strengthens the case; its absence after three guides does not alone invalidate it.

**Main risks:** high-comment threads may reflect argument rather than demand; security content can create false confidence; crowded subjects require concrete demonstrations rather than another generic checklist; and #9/#10 can cannibalise each other. Manage those risks through useful specificity and staged production—not by retreating to the one or two subjects Google currently leaves open.

### D = google/gemini-4-argon

### Primary Recommendation: Option (b) — Pick all 10 for Facebook Group Demand

**The Pick:** Choose **(b)**. Select all 10 guides based strictly on proven engagement inside the 52,400-member Facebook group and the commercial value of the underlying problem, ignoring whether the SERP is crowded or non-existent. 

*(Note: While #19 and #10 happen to have open/provisional Google SERPs, they are selected here because they represent the exact commercial transition from "hobbyist" to "client in need of rescue," not because of their Google openness.)*

**The Sequencing:**
Write and publish the first 3 guides in this exact order:
1. **#9 ("My app got tangled, what do I do"):** Highest community demand (37 reactions / 88 comments) and the exact moment a business owner or serious builder realizes AI prompting alone cannot save their project. Zero Google volume is irrelevant; the audience is waiting in the group.
2. **#19 ("How do I sell/monetise an app I built with AI"):** Captures the exact crossover audience (builders with real users/commercial intent) and gets the one confirmed open Google SERP asset indexing early as a secondary bonus.
3. **Supabase RLS Data Leaks / Security Incident Response (from the crowded high-demand tier):** A business owner leaking customer data or facing a hacked Lovable/Base44 app has an acute, high-willingness-to-pay problem. You do not need to beat the other Israeli AI consultants on Google; you just need to drop the most technically authoritative link in the Facebook comment thread the next time someone panics about a database leak.

For guides **4 through 10**, fill the slots with:
*   **#10** (Unmanageable codebase — framed around the narrative pain, not abstract "architecture").
*   **#12** (Israeli payment processing — wiring Meshulam/Grow/Cardcom into an AI-built app without breaking security).
*   **#13** (The "Green Invoice clone" problem — use the 17 reactions / 83 comments demand to write a tear-down of *why* cloning a regulated Israeli financial product with AI is 10% UI and 90% compliance/edge-case traps).
*   **4 more from the "crowded" technical/commercial tier** (specifically targeting production readiness, auth/security audits, and moving off Lovable/Base44 lock-in—skipping pure beginner topics like "how much does Lovable cost").

---

### Rulings on the 4 Specific Questions

**1. Claude Skills: Attach to 2 to 3 guides maximum.**
*   **The Criterion:** Only attach a skill when the guide describes a **deterministic, read-only diagnostic check** that exposes a problem the reader cannot easily fix themselves. 
*   **Application:** Attach a "Codebase Tangle / Spaghetti Diagnostic" skill to #9/#10, and a "Supabase RLS & Secret Exposure Auditor" skill to the Security guide. Do *not* build skills for #19 (monetisation) or #12 (payments). Since skills don't drive traffic, their only valid function is lead qualification: the skill runs, flags 12 critical architectural or security failures in the user's project, and proves the owner knows what he's doing.

**2. The "Hire Me" Route: The "DIY Ceiling" Architecture.**
*   **The Mechanism:** Never put a sales pitch in the Facebook post. The Facebook post should give away 80% of the value in native text, linking to the guide only for code snippets, checklists, or the full teardown.
*   **On the Site:** Structure the guide as a complete, honest DIY tutorial up to the exact point where non-developers reliably break production. At that friction point, place a matter-of-fact callout box: *"The DIY Ceiling: Steps 1–4 are safe to do with Claude. Step 5 (migrating live user data / securing payment webhooks) is where vibe-coded apps usually break or leak data. If this is a real business and you want a developer to wire this final step safely, I do fixed-price rescue sprints—message me here."* It reads as a safety warning, not an ad.

**3. Subjects that argue AGAINST hiring the owner (#11, #12, #21):**
*   **#12 (Israeli Payment Processing): YES, earns a slot.** Telling the reader "just pick an existing provider directly" only answers the *vendor selection* question. Actually wiring an Israeli gateway's webhooks, handling failed recurring charges, and triggering automated invoices inside a Lovable/Cursor app is a nightmare for non-coders and a prime paid service for the owner.
*   **#11 (Terms of Use / Privacy Policy): NO, drop it.** Saying "pay a lawyer 1,500–2,000 NIS" builds nice-guy credibility, but you only have 10 slots. Legal compliance does not demonstrate software engineering authority, and there is zero natural transition to hiring an AI developer. Answer this in a 2-sentence Facebook comment when it comes up; don't waste a guide on it.
*   **#21 (Learning Vibe Coding Alone): NO, drop it.** This explicitly filters *out* business owners with budgets and selects *for* hobbyists with time on their hands and zero willingness to pay. 

**4. 30-Day Measurement Criteria (After the first 3 guides):**
Because GSC is blind to skills and daily-rotating visitor IDs break cohort retention, you must measure **session-level conversion and channel velocity**. Track these 3 exact metrics 30 days after Guide #3 goes live:
1.  **Referral Volume Baseline:** Did total monthly first-party sessions from Facebook/direct links increase meaningfully above the current 542 readers/month baseline (target: >250 views across the 3 new URLs)?
2.  **Same-Session Action Rate (The Daily-ID Workaround):** Even if the visitor ID rotates at midnight UTC, a user clicking a guide and then clicking a contact button or downloading a skill happens within a *single* session. Measure the percentage of guide readers who trigger a click event on the `skill_download` link or the `whatsapp/contact` CTA within the same UTC day (target: >3% for skills, >1% for contact clicks).
3.  **Inbound "Dark Social" Attribution:** Number of Facebook DMs, WhatsApp messages, or group replies where a prospect explicitly references a guide or says "I read your post on..." (Target: at least 2 to 3 qualified commercial conversations initiated from the first 3 guides).

---

### Reasoning

The first council already settled that distribution (542 readers/mo) beats Google (5 clicks/3mo). Choosing Option (a) or a heavy Google split in Option (c) directly contradicts yesterday's ruling by letting Google SERP saturation dictate content strategy for a Facebook group. 

In a 52,400-person Facebook group, "crowded on Google" means nothing. Group members do not leave Facebook to Google a problem and read five competing consultant blogs; they read the post in their feed and click the link in the top comment. Conversely, #9 and #13 prove that the highest-engagement anxieties in the Israeli vibe-coding community use colloquial framing that Google's Hebrew parser completely fails on. Writing directly to that colloquial pain (#9) gives the owner a monopoly on the group's loudest conversation with zero competition from SEO-chasing consultants.

### Risks

1.  **The "Ephemeral Feed" Treadmill:** Because these guides aren't built to rank on Google (except #19), traffic will drop to zero the moment the owner stops posting or commenting in the Facebook groups. The guides must be treated as reusable ammunition to be pasted into comment threads repeatedly over 6–12 months, not one-off launches.
2.  **Group Admin Ban / Downranking:** If the owner simply drops links to his site in 10 straight posts, group moderators will mute him. He must post the core substance natively inside the Facebook group and use the guide link strictly as an appendix for code, architectural diagrams, or deep technical steps that don't fit in a Facebook post.
3.  **Attracting Broke Hobbyists:** In a mixed group, solving "tangled apps" (#9) can flood the owner's DMs with hobbyists begging for free debugging. The guides must use commercial framing (e.g., "when your app has paying users or runs your business") to filter out hobbyists before they click the contact button.

### A = x-ai/grok-4.7

**Primary position: (b).** Write the 10 for the Facebook room. Google openness is a tiebreaker, not a slot allocator. Do not write all 10 before a 30-day log on the first 3.

**(a) is rejected.** The settled ruling already made distribution the engine and Search Console secondary (5 clicks / 3 months). This scan makes (a) worse, not better: 1 confirmed open field out of 21. A slate built on openness is one guide plus filler.

**(c) is rejected as a strategy.** A pre-set Google ratio would force crowded subjects into “SEO” slots the data says will not rank. The only open subject, **#19**, earns a slot because it is the hobbyist-with-real-users crossover, not because Google is empty. That is audience fit under (b), not a split.

**(d) is not a better fork.** The data does not reveal a third channel. It shows two demand systems that do not overlap: group threads with no Hebrew search volume (#9: 37 reactions / 88 comments, Google reads it as a phone crash; #13: 17 / 83, Google drops the term and serves Green Invoice pricing), and crowded Google guides on the pains the room actually shouts about (security, a hacked app, Supabase RLS leaks, Lovable/Base44 monthly cost). Write for the shout. Rankings are a side effect you do not plan on.

### Sequence
**First 3, in this order:**

1. **#9** — highest demonstrated demand in the room, and it is the work he actually does. Write it as a diagnosis of a tangled AI-built app (what “tangled” means, when more prompting makes it worse, what a restructure is). Use it only as a reply under a real thread, never as a cold post. No skill on this one yet; a download on the first appearance reads as a lead magnet.

2. **#11** — the credibility deposit. Honest answer: pay a lawyer about 1,500–2,000 NIS, or use a named legal-tech service. He is not a lawyer. Short, no skill, no “and then call me.” Publish this before any commercial topic so the room has seen him send money away.

3. **#19** — only after those two exist. This is the conversion moment (the project has users; now how does it make money). Google being open is a bonus. The hire route is a decision boundary inside the guide, not the Facebook post.

**Do not commit the other 7 up front.** After the log below:

- **#12** next, if payment threads are active. Lead with “pick a provider yourself.” The paid work is wiring it in, stated as a bounded condition, not the headline.
- One guide from the loud crowded cluster — security of an AI-built app, hacked-app / incident response, or Supabase RLS leakage — chosen by whichever thread is live that month, not by search volume. I will not invent a subject number the brief did not give. Differentiation is the in-thread specificity and the willingness to say “this is a weekend fix” versus “this is past one,” not a better article than the Israeli consultant set already ranking.
- **#10** only after he tests the phrasing in the group. The scan already says the narrative frame is provisional and the word “architecture” is contested. If the room says “tangled” (#9) and not “unmanageable codebase,” #10 is a duplicate. Cut it.
- **#13** late, and not as a clone tutorial. 83 comments means demand; the professional read is a decision guide: buy, integrate, or build the one workflow Green Invoice does not do, plus what a clone actually costs in tax, payments, and upkeep. A how-to-clone guide attracts the wrong job and the wrong reputation.
- **#21** one slot, late, so he is not defined as the free teacher. The boundary line is: you can learn the tool alone; you cannot learn your business’s failure modes alone.
- Leave two slots unassigned until the log shows which pains recur. Ten guides chosen in advance, in a territory where 16 of 21 are already covered by competent Hebrew competitors, is how a one-man shop wastes the quarter.

### 1. Skills
**Three of the ten, maximum, and none of the first two.** The settled finding stands: a skill does not cause ranking or citation. Attach one only if all four are true: the reader will run it more than once on their own project; the output changes a decision the guide cannot make for them; the Facebook post still stands without the download; it does not impersonate a lawyer or an accountant.

Candidates that can pass: a narrow tangle-diagnosis on #9 later, not at launch; a monetisation diagnostic on #19; a “which Israeli provider fits this app” decision on #12. No skill on #11, #21, or #13. If fewer than three pass the test, ship fewer. Do not decorate.

### 2. Hire route
The group removes ads, so the post must not contain one. No “DM me,” no WhatsApp, no price, no “I help founders like you.”

The post is a member’s answer to an existing thread. The link is “I wrote the long version so I don’t repeat it,” after the useful part is already in the comment. Inside the guide, the only commercial line is a boundary: if these specific conditions are true, this is past a weekend fix, and that is the work he does; if not, stop. Identity lives in the site’s existing one-line author credit. The proof that this is not a pitch is #11 and #12 sending people elsewhere. If those two are missing, every other author line will be read as advertising, correctly.

### 3. Anti-hire guides
**Yes. Two of the ten: #11 for certain, #12 in the honest-first form.** Not #21 as a third anti-hire; one learning guide is enough and it is a different job.

Reason: in a room that punishes self-promotion, the scarce asset is being believed. A named guide that says “pay the lawyer, not me” is how a one-man shop gets read as the professional rather than another AI consultant with a lead magnet. #12 still belongs because the honest first answer (pick a provider) and the real paid service (wire it into the app) can be separated without lying. Cap it at two. Three or more, and he becomes the man who tells you never to hire anyone, including him.

### 4. What to measure at 30 days
Do not use Search Console, and do not use unique or returning visitors. The visitor id rotates daily by design, so a “returner” metric is fiction. GSC cannot see skill downloads, and under (b) most of these guides were never supposed to rank. Judging (b) by clicks would re-open the settled ruling.

Keep a hand log, one row per distribution: date, group, thread, guide, whether the post stayed up, comment count, whether anyone asked a follow-up, whether anyone asked for paid help. Count skill file hits on the server if a skill exists; do not count unique downloaders.

The choice was right if, across the first 3 guides and roughly 6–8 in-thread uses: no removal for promotion, some substantive comments or tags (not just reactions; the reference posts were 88 and 83 comments, a reply will be smaller and that is fine), and at least a couple of serious conversations from people with a real app rather than a weekend experiment. The choice was wrong if the posts are removed, the comments are silence or “this is an ad,” and no one asks a follow-up. In that case stop. Do not write the remaining 7 in the same register.

### Risks
The main risk of (b) is becoming the free help desk for 52,400 hobbyists. #9 will pull that audience; do not let the slate become eight versions of it. Business-owner pains (payments, monetisation, a live app leaking data or getting hacked) have to show up in the first five uses, not the last.

Second risk: writing generic versions of the 16 crowded subjects. Those guides already exist. His only edge is answering the specific thread more honestly than a consultant article does. A cold link-drop also risks an admin removal, which taints the account; the useful text has to be in the comment.

Third: #13, written wrong, summons “build me a Green Invoice clone” clients. #10, written on the contested framing, duplicates #9. #21, written early, defines him as a teacher. And shipping all 10 before the log exists spends the quarter on a theory the room has not confirmed.

### B = moonshotai/kimi-k3

# Seat ruling: fork and four questions

## Fork: primary position (b), with Google-openness demoted from selection axis to tiebreaker

Every one of the 10 slots must be earned by demonstrated demand inside the Facebook groups. Google-openness no longer selects subjects; it only breaks ties and sets order. This is not (c). A 3/7 split reserves slots for Google-open subjects *because they are Google-open*, but only 1-2 of the 21 qualify - so (c) forces writing at least one subject with no proven room demand purely for search, which re-litigates the settled ruling (542 first-party readers vs 5 clicks in 3 months) through the back door. (a) is the same error at full strength. I considered (d) - "split by format, some subjects are native-comment assets rather than site guides" - and it is real but subordinate: it changes delivery, not selection. It belongs in the per-post etiquette (Q2), not the fork.

Under (b)+tiebreaker, the open Google field still gets harvested, because #19 wins on *both* axes - it is the exact crossover reader (hobbyist whose project now has users) the owner wants to be known for. The full 10: #19, #9, #13, AI-app security, hacked-app incident response, Supabase RLS leak, true monthly cost of Lovable/Base44, #12 payments, #11 legal (reframed, see Q3), with #10 held in reserve pending a live test (below). #21 is cut.

## First three, in this order

1. **#19 - monetising an AI-built app.** The only subject where delay has a competitive cost: an open field can be occupied; the tangled-app pain will still be there in six weeks. It also establishes the hobbyist-to-business bridge as *his* territory from day one.
2. **#9 - "my app got tangled."** The loudest proven demand in the whole scan (37 reactions / 88 comments) and chronic, so it loses nothing going second. Write it in the narrative framing - the felt-pain story, not "architecture." Its reception *is* the further testing the demand map says #10 needs before committing: if the narrative framing lands in the room, #10 takes the tenth slot; if not, the reserve slot goes to a second crowded-but-loud subject.
3. **#13 - the Green Invoice clone** (17/83). This pivots accumulated credibility toward the paying side of the room. Frame it as "what it actually takes to replace your invoicing SaaS" - cost, compliance, Israeli invoicing/tax requirements. The honest difficulty *is* the professional positioning. Do not publish it as a how-to clone of a named commercial product; that framing invites IP optics and reads as hobbyist.

## Q1 - Skills: 3 of 10

The first council killed the ranking rationale, so the only honest criterion left is: **attach a skill only where the guide's deliverable is runnable rather than knowable** - where the reader would otherwise copy a prompt or checklist into Claude anyway - and where one person can maintain it. That yields: the Supabase RLS/security audit, the #9/#10 codebase triage, and the incident-response first-hour checklist. Explicitly not: #19 (a decision, not a procedure), #11/#12 (the honest answer is "go to a lawyer/provider" - a skill there is theatre), #13 (a downloadable "clone Green Invoice" artifact is an IP liability the guide itself avoids), monthly cost (a spreadsheet, and a maintenance trap - prices change monthly). In a room full of people who can actually run a skill, the skill is a portfolio piece and proof of competence; judge it by download counts and by members mentioning they ran it - never by Search Console.

## Q2 - Hire route: boundary statement, not pitch

- Every guide must be **complete without hiring** - full value to the reader who never pays. That is also what makes it shareable by members and safe with moderators.
- The hire signal is a **DIY/professional frontier statement** inside the guide: "doing this yourself stops making sense when X" (users paying, customer data, revenue depending on it). Defining that line is expert content, not advertising - and it pre-qualifies exactly the readers he wants.
- One closing line, first person, no CTA furniture: "if you're past that line, this is what I do - DM me." The site's about/contact pages do the passive work; the room punishes *posts* that pitch, not professionals whose name sits on the best answer in the thread.
- Per-group mechanics: answer the actual question fully and natively in-thread; the guide link rides as "I wrote this up properly here," in the first comment or via profile where the 52,400-member group's rules restrict links. Removal is a metric (Q4) - if a post gets removed, the delivery was wrong, not the subject.

## Q3 - Honest-negative guides: yes, capped at 2 of 10

Criterion: repeated room demand **plus** adjacent demonstrable competence. #12 qualifies twice - choosing a provider is DIY, wiring one in (ILS, VAT invoices, recurring billing) is genuinely paid work, so honesty and the hire route coexist. #11 qualifies reframed: not "do you need a lawyer" but "what your lawyer will ask you about your AI-built app" - the honest core ("pay a lawyer ~1,500-2,000 NIS") stands, and preparing the reader for that meeting is the professional's role. #21 fails: the reader explicitly wants to need no one and there is no adjacent competence to demonstrate - cut it. Strategically: in a room where everyone is selling, "don't hire me for this" is the cheapest strong credibility signal available, and it buys trust for the eight guides where he does sell.

## Q4 - The 30-day scorecard (defined in advance)

Accept the structural blindness (no uniques, no returners, GSC blind to downloads) and measure where the engine actually is:

- **Facebook (primary):** engagement per announcement thread against the demand map's own benchmarks - #9's bar is 37/88; set a floor of roughly 15 reactions / 20 substantive comments for a pass. Count **inbound DMs and hire-adjacent conversations** (define: any exchange past 3 messages about his work); ≥1 across the 3 guides means the bet is paying. Weekly group search for the domain: an **unprompted citation or share by another member** is the single strongest available proxy for "credible professional in the room." Track moderator action (left alone / pinned / removed).
- **First-party:** pageviews per guide against the 542/month baseline; Facebook referrer share; skill download request counts from server logs (countable even though unique humans are not).
- **GSC:** only meaningful for #19 - at 30 days expect indexing plus first impressions, nothing more. With a 5-clicks-in-3-months baseline, GSC cannot adjudicate this bet at 30 days and should not be asked to; it is a 90-day metric for one guide.
- **Kill/continue rule:** threads clearing the floor + ≥1 hire-adjacent conversation = continue. Threads dying = the failure is framing in the room, not Google - fix delivery before writing guide 4. Numbers to ignore: total sessions and anything resembling return-visitor counts - unknowable by design.

## Risks

- **Launch-moment cost:** #19 first spends the debut on the least-proven FB demand. Accepted, because it is the only subject with a competitive clock; mitigate with a strong native thread, not just a link.
- **Crowded-subject mediocrity:** under (b), his security/RLS/cost guides compete with dated but competent competitors for the same room. His edge must be specificity - named tools, real shekel numbers, visible recent update dates. A generic guide earns nothing in-room either.
- **Small sample:** 3 guides in 30 days may produce zero DMs by chance. The kill rule needs the engagement floor as the trigger, not the DM count alone.
- **Maintenance load:** 10 guides + 3 skills is real upkeep for one man; the monthly-cost guide decays fastest. A visible "updated" date converts that cost into a differentiator against the dated competitor set.

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | C: Best complete ten-guide sequence, clear group-first choice, safe task-based skill criteria, honest sales boundaries, and measurement that correctly respects rotating IDs and uncertain attribution.; B: Strong specific priorities and useful anti-hire reframing, but overstates why a split is invalid, sets poorly grounded engagement thresholds, and incorrectly treats session counts as unknowable.; A: Thoughtful staged production and trust-building advice, but leaves the ten-guide slate unresolved, overprioritizes the legal guide without demand evidence, and contains inconsistent treatment of #21.; D: Clear initial priorities, but leaves four slots unspecified, treats skills as problem-exposing lead qualification, relies on fear-based sales boundaries, and makes unsupported audience and analytics claims. |
| google/gemini-4-argon | B: Most strategic and complete answer: smartly uses Google openness as a speed tiebreaker for #19, uses #9's reception to test #10's framing, and gives the sharpest reframing of #11 ('what your lawyer will ask about your AI app').; D: Strong commercial instincts and very practical mechanisms ('DIY Ceiling' CTA, diagnostic lead-qualifying skills, same-session conversion tracking to work around daily ID rotation), though less specific on guides 7-10.; C: Well-structured, disciplined, and gives a clear 10-guide table and 30-day measurement framework, though slightly less commercially sharp on how to position #11 and #19 than B and D.; A: Good insights on in-thread distribution and avoiding the 'free help desk' trap, but putting #11 (terms of use) in the first 3 slots wastes early momentum, and leaving slots unassigned dodges the brief's sequencing ask. |
| x-ai/grok-4.7 | A: Best fit to the settled ruling and the room: (b) with Google only as tiebreak, first three ordered for credibility (#9, #11, #19), no invented IDs or metrics, a hire path that survives anti-promo moderation, and a stop rule before locking the other seven.; C: Strong executable (b) slate with a full ordered ten, strict skill gates, and the best rotating-ID 30-day scorecard, but it front-loads crowded technical topics and parks the anti-hire credibility deposit at slot 10.; B: Clear (b)+tiebreak ruling and a named ten, but leading with #19 for a Google occupancy clock mildly reopens the settled distribution-over-search call, and a 15/20 bar copied from viral original posts will false-fail replies.; D: Right primary and #9-first, but the >250-views “above 542” target is incoherent, guides 4–10 are mostly unnamed, dropping #11 undercuts the credibility goal, and the CTA/skill design is too sales-qualified for this group. |
| moonshotai/kimi-k3 | B: Most decisive and complete: names a full 10, uniquely justifies #19-first via a competitive-clock argument, operationalizes #9 as the live test for provisional #10, reframes #11 to keep honesty while demonstrating competence, explicitly considers and rejects (d), and delivers the most complete 30-day scorecard with demand-map-derived benchmarks, unprompted-citation proxy, and GSC correctly scoped to a 90-day metric for one guide.; A: Sharpest strategic instincts: #11 as a credibility deposit before any commercial guide, anti-hire guides capped at two with the failure mode named, no skill at first appearance, and refusal to invent subject numbers; slightly weaker for leaving 2 of 10 slots unassigned and a less quantified measurement plan than B.; C: Most systematic: full ordered 10-guide table with editorial jobs, the most safety-conscious 5-point skill test, disciplined handling of rotating IDs (no uniques, no fingerprinting), and an honestly hedged kill/continue hurdle; less distinctive in sequencing logic than B/A and thresholds somewhat arbitrary.; D: Decisive and practical with the best single tactic (same-session action rate to work around daily-rotating IDs) and concrete 'DIY Ceiling' CTA copy, but weaker completeness: four of the ten slots are hand-waved inventions, targets asserted without sourcing, and dropping #11 forfeits the credibility-deposit logic that best serves the owner's stated positioning goal. |

| Model | Label | Points | Mean position |
|---|---|---|---|
| moonshotai/kimi-k3 | B | 13 | 1.75 |
| openai/gpt-6.1-sol | C | 11 | 2.25 |
| x-ai/grok-4.7 | A | 10 | 2.50 |
| google/gemini-4-argon | D | 6 | 3.50 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 10061 | 2396 | 0.0491 |
| google/gemini-4-argon | 10681 | 2124 | 0.0426 |
| x-ai/grok-4.7 | 12692 | 14309 | 0.1078 |
| moonshotai/kimi-k3 | 10239 | 11494 | 0.2042 |
| Total | 43673 | 30323 | 0.4037 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-11-25-vibe-coding-10-guides.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1795558815-MXApdY2Z9vT8aFvUSxcc | 200 | 43054 |
| openai/gpt-6.1-sol | 1 | gen-1795558815-haaO6AEsMz6YFq2P4k4W | 200 | 59582 |
| moonshotai/kimi-k3 | 1 | gen-1795558815-dyymHSH3khsYh1Vv0uOU | 200 | 81795 |
| x-ai/grok-4.7 | 1 | gen-1795558815-GhDiwSEEQYBVjmEGBphn | 200 | 106477 |
| openai/gpt-6.1-sol | 2 | gen-1795558921-K992VCPf29w4OdxdaVYc | 200 | 9654 |
| google/gemini-4-argon | 2 | gen-1795558921-rAED2qfBTRVObM6kcI23 | 200 | 9701 |
| moonshotai/kimi-k3 | 2 | gen-1795558921-6RDsFpc6kxMyiHIEsmUb | 200 | 31940 |
| x-ai/grok-4.7 | 2 | gen-1795558921-SP7tF1HLCVrgyzTl8u2u | 200 | 103939 |

## Synthesis

**Agreement.** All four seats pick (b) as the primary axis: choose the 10 subjects for demonstrated demand inside the Facebook groups, and demote Google-openness to a tiebreaker rather than a slot allocator. All four reject (a) outright (one confirmed-open subject out of 21 cannot carry a 10-guide programme) and reject (c) as a fixed ratio, on the same reasoning: forcing a Google-open quota back in re-opens the first council's own settled ruling that distribution, not search, is this site's engine right now (542 first-party readers/month vs. 5 Search Console clicks in 3 months). All four put #9 ("my app got tangled") and #19 (monetising an AI-built app) in the first three guides written, in some order. All four keep #13 (the Green Invoice clone) in the ten, but insist it be framed as a buy-vs-build-vs-integrate decision guide with real compliance and cost detail, never as a literal how-to-clone of a named commercial product — the unanimous reading is that a clone tutorial attracts the wrong work and the wrong reputation. All four cut #21 (learning vibe coding alone) entirely: the reader explicitly wants to need nobody, so it has no adjacent paid work to anchor to. All four cap downloadable skills at a small number (2–3 of the ten) governed by a task test — a skill earns its place only when the guide's real deliverable is a repeatable, runnable diagnostic or procedure, not a decision a human still has to make — and all four exclude skills from #11 and #21 on that basis. All four insist the "hire me" route must live inside the guide, never inside the Facebook post itself: the post answers the question natively and in full; the guide link rides as "I wrote the long version up properly," with the commercial line appearing only as a bounded, matter-of-fact "this is past a weekend fix" statement on the site. All four keep at least one of #11/#12 — a guide whose honest answer argues against hiring him — specifically because, in a room that punishes self-promotion, being seen sending money away is treated as the cheapest available credibility signal. And all four throw out Search-Console-shaped success metrics for the 30-day check (unique readers, returning-visitor rates) as fiction given the daily-rotating visitor hash, converging instead on a hand-kept log of Facebook engagement against the demand map's own benchmarks (37/88 on #9, 17/83 on #13), server-side skill-download counts, and a count of inbound hire-adjacent conversations that name a guide.

**Disagreements.** The seats split on sequencing and on how far to commit the full ten up front. GPT-6.1-sol and Gemini-4-argon order the first three as #9 → #19 → a security/Supabase-RLS guide. Grok-4.7 orders them #9 → #11 → #19, deliberately placing the "I sent you to a lawyer, not me" credibility deposit second, before any commercial subject. Kimi-k3 is the outlier on order, leading with #19 rather than #9, on the argument that #19 is the only subject with a competitive clock (an open Google field can be occupied by a competitor while #9's pain, being chronic, will still be there later) — peer reviewers flagged this as mildly re-opening the first council's distribution-over-search ruling even though Kimi frames it as audience fit, not SEO. On committing all ten: GPT-6.1-sol and Grok-4.7 explicitly refuse to lock the back seven in advance, writing only three and reserving slots (Grok names two unassigned on purpose) pending what the room's reaction to #9 reveals about whether #10's narrative framing is even needed; Gemini-4-argon and Kimi-k3 both name a full ordered ten upfront, though Kimi still holds #10 in reserve pending that same live test. The seats disagree sharply on #11 (terms of use/privacy): GPT-6.1-sol, Grok-4.7 and Kimi-k3 all keep it — Grok as the second guide written, Kimi reframed as "what your lawyer will ask you about your AI-built app" rather than "go hire a lawyer" — while Gemini-4-argon is the lone seat to drop it entirely, arguing legal compliance content doesn't demonstrate engineering authority and the slot is too scarce to spend there; the peer rankings explicitly cite this call as part of why Gemini-4-argon finished last. The seats also disagree on exactly which guides deserve a skill: Grok-4.7 would consider a skill on #19 (a monetisation diagnostic) and on #12 (a provider-fit decision tool), while Kimi-k3 explicitly excludes skills from both #19 ("a decision, not a procedure") and #12 ("the honest answer is go to a lawyer or a provider — a skill there is theatre"); GPT-6.1-sol names only two skill candidates (#9 triage, RLS/security) against a five-point admission test, while Gemini-4-argon names three (a tangle/architecture diagnostic, an RLS/secret-exposure auditor) and frames the skill's purpose explicitly as lead-qualification rather than reader utility — a framing none of the other three adopt. Finally, Gemini-4-argon's proposed 30-day numeric targets (more than 250 views across the three new guide URLs measured against the 542/month site-wide baseline; specific 1%/3% same-session click-through rates) were singled out by Grok-4.7's own peer review as "incoherent" for mixing a per-guide count against a site-wide monthly baseline — the other three seats stuck to relative, benchmark-derived engagement floors instead of asserting absolute numbers.

**Peer ranking.** moonshotai/kimi-k3 (B) finished first (13 pts, mean position 1.75), praised for naming a complete, ordered ten, for turning #9's reception into a live test for the still-provisional #10, for the clearest reframing of #11 that keeps the honest answer while still demonstrating competence, and for the most fully worked 30-day scorecard (including an "unprompted citation by another group member" proxy and correctly scoping Search Console to a 90-day, single-guide metric rather than a 30-day one). openai/gpt-6.1-sol (C) placed second (11 pts, mean 2.25) for the most complete ten-guide table with a disciplined, safety-conscious skill test and measurement language that correctly refuses to invent unique-visitor or returning-reader numbers. x-ai/grok-4.7 (A) placed third (10 pts, mean 2.50), praised for the credibility-first sequencing (#9, #11, #19) and for refusing to lock the back seven slots before a live test, but marked down for leading with #19 as partly reopening the settled distribution-over-search call in one seat's reading, and for deferring the #11 credibility deposit to last in another. google/gemini-4-argon (D) finished last (6 pts, mean 3.50), docked specifically for leaving several of the ten slots unnamed/hand-waved, for the incoherent view-count target, and for dropping #11 — which every other seat treated as central to the credibility-deposit logic the owner's own positioning goal depends on.

**Recommendation.** Adopt (b): select all ten guides for Facebook-group demand, with Google-openness used only to decide order when two subjects are otherwise tied, never to reserve slots — (a) and (c) are both rejected by unanimous seat agreement and would quietly re-open the first council's already-settled ruling. Write only the first three before committing the rest, following the majority sequencing rather than Kimi-k3's lone #19-first case (its own peer reviewers flagged that ordering as weakening the settled distribution-over-search position, and a confirmed-open field left unwritten for a few extra weeks is a smaller risk than guessing the other seven slots before the room has reacted to anything): **#9 first** (the highest demonstrated demand in the entire scan, written as an in-thread reply rather than a cold post, no skill attached yet), **#11 second** (the credibility deposit — "pay a lawyer ~1,500–2,000 NIS, or use a named legal-tech service," reframed per Kimi-k3 as "what your lawyer will ask you about your AI-built app" so it demonstrates competence rather than reading as a pure hand-off), **#19 third** (the monetisation crossover guide, which also happens to carry the one open Google field as a bonus, not the reason for its placement). Leave two to three of the remaining slots unassigned pending that first batch's reception, per GPT-6.1-sol and Grok-4.7 — in particular, whether #9's narrative framing lands in the room decides whether #10 earns the tenth slot or gets replaced by a second loud-but-crowded subject (security of an AI-built app, hacked-app incident response, or Supabase RLS leakage, chosen by whichever thread is actually live that month). Keep #12 (Israeli payment processing) as the second and final anti-hire guide — cap anti-hire guides at two, as three of four seats converge on, since beyond that the owner risks being read as "the man who tells you to never hire anyone." Cut #21 unanimously. Cap skills at two or three, admitted only by the task test every seat independently arrived at (a repeatable, runnable diagnostic the reader would otherwise have to re-derive by hand each time) — #9/#10's tangle triage and a Supabase RLS/security audit are the safest first candidates; do not attach one to #11, #21, or #13, and treat #19/#12 skill candidates as optional, lower-confidence bets the seats themselves split on. Keep the hire-me route entirely off the Facebook post and inside the guide as a bounded "past this point, this is paid work" statement, never a pitch, a price, or a DM invitation in the thread itself. Measure the first three guides at 30 days with a hand-kept log (group, thread, whether the post survived, comment count against the demand map's own 37/88 and 17/83 benchmarks, follow-up questions, hire-adjacent conversations) plus server-side skill-download counts — explicitly not unique or returning-visitor counts, which the daily-rotating visitor hash makes meaningless by design.

**Confidence:** High on the fork itself — (b)-over-(a)/(c) is unanimous across all four seats and is a direct, consistent application of the first council's already-settled finding, so this is the safer half of the two decisions in this brief. Moderate on the exact sequencing and skill assignments within that frame: the seats genuinely disagree on whether #19 or #9 goes first, on whether #11 survives at all, and on two or three specific skill candidates, and the disagreement tracks real, defensible trade-offs (competitive timing on an open field vs. credibility-building before any commercial content) rather than one seat simply being wrong. Treat the first three guides as the actual test the seats are asking for — the plan commits three subjects with reasonable confidence and deliberately defers the other six or seven pending what the room does with them, which is itself the council's strongest point of agreement.
