# Council: site-exposure

- Date: 2026-10-30
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

CONTEXT. handinhandai.com is the personal site of Alex Guberman, a one-person AI consultancy in Ramat Gan, Israel. Hebrew only (the English version was just removed deliberately). Four pages: homepage, about, terms, privacy. The homepage is a personal-brand page with three case studies, two of which are anonymous clients who cannot be named. Services sold: AI agents and WhatsApp bots for small and mid-sized businesses (connected to Meta's official WhatsApp Cloud API), custom management systems (orders, inventory, quality control, CRM), MVP app development, and fractional/outsourced CTO work for startups. One named shipped product, Chillist, a group-trip planning app in both app stores with a WhatsApp AI agent.

HARD DATA FROM GOOGLE SEARCH CONSOLE (last 90 days, pulled today). 18 impressions, 0 clicks, average position 6. All 18 impressions in one 5-day window, all from Israel. Only one query row exists and it is a mistyped adult-site domain typed on a Hebrew keyboard, i.e. no real search has ever shown this site. 3 pages indexed. 5 crawl requests in 90 days. 5 external links from 2 domains total. No manual actions, no security issues, Core Web Vitals has insufficient data.

ALREADY DONE (technical, this week). Sitemap submitted for the first time ever. Canonical tags corrected. hreflang pointing at non-existent English pages removed. A real 404 added (previously every dead URL returned the homepage with a 200). The www duplicate 301'd to apex. The Cloudflare preview domain noindexed. The /en duplicate deleted and 301'd. So the technical layer is clean and is not the bottleneck.

THE PLAN ON THE TABLE. Three Hebrew service pages (AI agent for a business, custom management system, outsourced CTO for startups), each with an FAQ, plus a Google Business Profile as a service-area business.

CONSTRAINTS. One person, who is also delivering client work, so the budget is hours, not money. Hebrew market, Israel, roughly 9 million people, so search volume for any given phrase is small. Two of three case studies cannot be named or shown. No existing audience, no newsletter, no LinkedIn following of note. Paid ads are possible but the budget is small and unproven. The site is Astro on Cloudflare Pages, so shipping new pages is cheap and fast.

THE QUESTION. Given that organic SEO for a four-page site in a small Hebrew market plausibly takes 6 to 12 months to produce anything, what is the highest-return sequence of actions over the next 90 days to produce actual inbound enquiries? Is the three-service-pages plan the right first move, or is it a distraction from something with a faster payback, for example: being quotable and citable by AI assistants (ChatGPT, Claude, Perplexity, Google AI Overviews), a deliberate LinkedIn or Facebook-group presence in Israeli business and startup communities, published case studies, Israeli business directories, partnerships and referral channels with agencies or accountants, cold outbound, or something we have not listed.

WHAT A GOOD ANSWER LOOKS LIKE. A ranked sequence of concrete actions for 90 days, each with a rough hours estimate and an expected-enquiries estimate, ordered by enquiries per hour of effort, with an explicit pick on whether the three service pages ship first, later, or not at all. Be specific to Israel: name the actual platforms, communities, directories and search behaviours that matter there rather than generic international advice. Say plainly what you would NOT do. Name the risks in your own recommendation, including the risk that it produces nothing.

## Attachments

none

## Round 1: answers

### C = openai/gpt-6.1-sol

## Recommendation

**Prioritise referrals and complementary partners, supported by one strong conversion page and one credible case study. Do not build all three service pages first.**

The next 90 days should test **who will introduce Alex to a buyer with a current problem**, rather than whether Google or an AI assistant will discover a new consultancy.

My order would be:

1. Ask existing clients and professional contacts for specific introductions.
2. Build a small referral network with agencies and implementation consultants.
3. Participate selectively in Israeli business communities.
4. Test narrowly targeted outreach and, optionally, paid search.
5. Build organic search foundations without turning them into the main project.

**Budget: roughly 45–55 hours over 90 days**, excluding sales calls and proposal preparation. If enquiries arrive, take time away from marketing experiments to handle them.

One correction to the premise: **6–12 months is not a mandatory SEO waiting period**, but neither is traffic guaranteed after that period. Your GSC data establishes essentially no relevant search visibility so far—not that the site cannot acquire it sooner.

## What the enquiry estimates mean

Below, an **enquiry** means a potential buyer describing a plausible project and accepting a next conversation. Not a visit, a friendly comment, or an agency agreeing to “keep you in mind.”

These are **planning estimates, not benchmarks or statistically grounded forecasts**. Zero is a credible outcome for every channel. The ranges overlap, and assisted conversions must not be counted twice.

### Ranked by likely return on Alex’s time

| Priority | Action | Hours over 90 days | Plausible enquiries within 90 days | Reasoning |
|---|---|---:|---:|---|
| 1 | Specific introduction requests to existing clients and professional contacts | 4–6 | 0–3 | Existing trust is the strongest asset available. No public audience required. |
| 2 | Recruit complementary referral partners | 10–12 | 0–4 | Partners already meet buyers at the moment a technical need appears. |
| 3 | Useful participation in two relevant communities | 8–10 | 0–2 | Access to existing demand without building an audience from scratch. |
| 4 | Small, personalised, permission-based prospecting test | 5–7 | **0–2 sales conversations; not organic inbound** | Faster market feedback, but acquisition work rather than an inbound engine. |
| 5 | Small, tightly controlled Google Search Ads test | 4–5, plus spend | 0–2 | Can capture existing intent immediately; economics are unproven. |
| 6 | Eligible Google Business Profile and basic local citations | 2–3 | 0–1 | Cheap to establish, but local visibility and demand may be weak. |
| 7 | Additional service pages and search-oriented content | 5–7 | 0–1 directly attributable | Useful longer-term infrastructure; weak near-term distribution on its own. |

**The first three are the core plan.** Ads are optional. Prospecting is a fallback and learning mechanism. Search work is capped.

---

## Days 1–7: build the sales surface, then ask for introductions

### 1. Ship one focused service page—not three

**Allow 3–4 hours.**

My default first offer would be:

> **סוכן AI לוואטסאפ לעסק — לטיפול בפניות, איסוף פרטים וחיבור לתהליכי העבודה**

Make it about a concrete workflow, not “AI transformation.” For example: collecting enquiry details, checking information in a management system, and handing exceptions to a person.

Why this offer first:

- It is easy for a business owner or referral partner to understand.
- Alex has a named shipped product with a WhatsApp agent.
- It can lead into the higher-value custom-system work.
- “Outsourced CTO” targets a different buyer and requires a different trust story.

**Override this choice if existing clients and contacts clearly provide better access to startup founders needing CTO help. Distribution beats theoretical keyword attractiveness.**

The page needs:

- Who it is for and which problem it solves.
- A short, real demonstration.
- What Alex builds and what remains the client’s responsibility.
- Meta’s official WhatsApp Cloud API, without implying Meta endorsement.
- Human handoff, data access, implementation boundaries, and ongoing costs.
- Alex’s name, face, location, and clear contact options.
- A short relevant FAQ—not a large block written to target keywords.

Use a WhatsApp CTA and a simple form. Ask for the business, the current process, and the problem. Do not put a complicated booking funnel in front of people.

### 2. Publish one evidence asset

**Allow 2–3 hours. Reuse it everywhere.**

Use **Chillist** as verifiable evidence: app-store links, what Alex actually built, and a short walkthrough. Distinguish product-building evidence from proof of business ROI.

An anonymous case can also work:

> “A business in [permitted sector] previously handled [process] using [tools]. I built [workflow]. Here is a sanitised example of how it works.”

Use only client-approved details. **Do not invent percentages, reconstruct confidential screens, or assume anonymity eliminates identification risk.** If outcomes were not measured, describe the implemented change rather than claiming savings.

### 3. Make 10–15 specific introduction requests

**Allow 4–6 hours across the first month.**

Existing customers, former colleagues, suppliers, founders Alex has worked with, and professional acquaintances are enough to start. A LinkedIn following is irrelevant here.

A useful Hebrew request:

> אני פותח מקום לפרויקט נוסף של אוטומציה בוואטסאפ וחיבור למערכות העסק. אם אתה מכיר בעל עסק שהצוות שלו מעתיק ידנית פניות או הזמנות מוואטסאפ למערכת, אשמח להיכרות. הנה דוגמה קצרה למה שאני בונה.

Ask for an introduction to a recognisable situation—not “anyone who needs AI.”

For confidential clients, ask privately for introductions. Public testimonials are not required.

---

## Days 8–30: build distribution through people who already have clients

### 4. Approach 12–15 complementary partners

**Allow 10–12 hours over the full period.**

Prioritise:

1. **Israeli web, ecommerce, and performance-marketing agencies.** They generate leads and build storefronts but often do not want custom operational development.
2. **CRM and automation implementers**, including people working with monday.com, HubSpot, Make, Priority, or חשבשבת integrations.
3. **Independent operations consultants** serving SMEs.
4. Accountants only where there is an existing relationship or a clear operational connection. They are not automatically good distributors of software projects.

The pitch:

> “You keep the client relationship. I handle the custom integration or WhatsApp workflow your team does not build. Here is an example and the boundary of what I take on.”

Find individuals through LinkedIn, agency websites, existing supplier relationships, and relevant professional groups. Start with partners around Ramat Gan, Givatayim, and Tel Aviv if an in-person meeting makes trust easier.

The desired outcome is **three partners who understand precisely when to introduce Alex**, not fifteen pleasant networking calls.

Avoid spending hours negotiating referral contracts before there is an actual opportunity.

### 5. Choose two communities, not six

**Allow about 45 minutes per week for eight weeks.**

Specific Israeli surfaces worth evaluating:

- **Startup for Startup’s Facebook community:** relevant for MVP and CTO questions. Follow its rules; do not treat it as an advertising board.
- **“עליית המכונות” on Facebook:** useful for AI discussions and implementation credibility, but much of the audience may be practitioners rather than buyers.
- **Local business-owner Facebook and WhatsApp groups in Ramat Gan/Givatayim:** potentially better buyer proximity than national AI groups.
- **LinkedIn:** use Alex’s personal profile to engage with Israeli founders, agency owners, and operations managers—not to start a daily personal-brand publishing schedule.

Choose based on recent buyer-like questions and permitted participation. Group membership size is not the criterion.

Answer questions such as:

- “Can we automate this WhatsApp process?”
- “Do we need a CRM or a custom system?”
- “How do we connect orders to inventory?”
- “Should we hire a CTO or use a contractor?”

Offer a useful answer publicly. Link the case or service page only when relevant and allowed. Move to private conversation by invitation, not unsolicited pitching.

---

## Days 31–60: test demand, not more website production

### 6. Run one small prospecting experiment

**Cap at 5–7 hours and around 20 carefully selected businesses.**

Choose one observable problem and one segment. For example, businesses openly using WhatsApp for quote requests while requiring customers to provide several structured details.

Do not assume their process is broken. Ask how it works and whether it creates a problem.

Use introductions, appropriate business contact channels, or a call seeking permission to send a relevant example. **Do not scrape numbers or bulk-send WhatsApp messages. Israeli spam and privacy rules matter; personalised commercial outreach is not automatically exempt.**

Count these as outbound-generated conversations, not evidence that inbound marketing is working.

### 7. Optionally test Google Ads

**Only after the offer and page are clear. Allow ₪600–₪1,200 and 4–5 hours.**

Test one service, Israel targeting, Hebrew copy, and narrow search intent. Candidate terms to investigate—not verified volume claims—include:

- בוט וואטסאפ לעסק
- סוכן AI לעסק
- אוטומציה בוואטסאפ
- פיתוח מערכת ניהול בהתאמה אישית

Searchers may use **בוט**, **וואטסאפ**, **אוטומציה**, and a business problem rather than the newer “AI agent” label.

Exclude irrelevant intent such as jobs, courses, free tools, and DIY tutorials as it appears. Inspect actual search terms. Do not start with broad AI keywords, Display, or Performance Max.

The test can produce no useful traffic or no enquiries. Its purpose is to learn whether this offer attracts commercially relevant demand—not to prove that paid acquisition works on a tiny sample.

---

## Days 61–90: invest only where there is evidence

### 8. Ship the other service pages selectively

**The explicit decision: later, not first.**

By this point:

- Publish **custom management systems** if enquiries or partner conversations repeatedly involve orders, inventory, CRM, or operational workflows.
- Publish **fractional CTO** if Alex is actively reaching founders and partners serving startups.
- If neither has a distribution path yet, leave them as concise homepage sections.

Each page should support a real sales conversation. Three pages are inexpensive technically, but writing and maintaining credible positioning still consumes the scarce resource: Alex’s attention.

### 9. Establish local basics, with eligibility checked

Create a **Google Business Profile only if Alex genuinely meets customers in person**, including travelling to their premises. A purely online consultancy is not eligible merely because it has an Israeli address. Hide the home address where appropriate for a service-area business.

Check basic listings on **easy.co.il, B144, and דפי זהב** where a suitable free listing exists. Keep name and contact details consistent. Cap the entire exercise at a few hours; decline paid-directory sales pitches.

These are legitimacy and discovery basics, not a likely lead engine.

---

## What I would not do

- **No dedicated “AI citation optimisation” programme in these 90 days.** Clear public evidence and third-party mentions may help AI discovery, but there is no dependable shortcut from a new page to assistant recommendations. No `llms.txt` project, mass FAQ production, or citation-monitoring subscription.
- No weekly SEO blog quota.
- No purchased backlinks or bulk directory submissions.
- No daily LinkedIn publishing obligation.
- No repeated indexing requests or further technical SEO polishing without a demonstrated issue.
- No separate marketing campaign for all four services.
- No fabricated reviews, anonymous-client claims that cannot be substantiated, or self-promotional answers disguised as community help.

## Measurement, decision rule, and risks

Maintain one small sheet: source, buyer/problem, qualified or not, next step, proposal, outcome. Ask every prospect **“How did you hear about me?”** Use tagged links where practical.

**Planning target: 2–5 qualified enquiries over 90 days. Budget emotionally and financially for zero.** That is a target for the whole programme, not the sum of every optimistic channel range.

At day 30, assess introductions and partner engagement. At day 60, assess whether anyone describes an urgent, funded problem. If not, revise the offer or target segment before adding content.

The main risks are:

- Existing contacts may not know suitable buyers.
- Partners may like Alex but have no relevant work—or see him as competition.
- Community participation may reach other vendors rather than customers.
- WhatsApp automation demand may exist mostly at prices below a viable custom-development engagement.
- Confidentiality limits can weaken proof.
- Even good introductions may convert outside the 90-day window.
- A solo consultant can generate enquiries and still fail to respond or scope promptly.

**Bottom line:** make the site credible enough to close an introduction, then spend most of the available hours earning introductions. The three-page SEO plan is sensible infrastructure; it is not the highest-return acquisition plan for the next 90 days.

### A = google/gemini-4-argon

### Recommendation

**Ship a stripped-down version of the three service pages AND a live demo WhatsApp bot in Week 1 (max 10 hours total), then pivot 100% of your marketing hours to Israeli Facebook communities, B2B agency partnerships, and LinkedIn outbound.** 

Treat the service pages not as SEO magnets (which will yield zero enquiries in 90 days), but as **conversion endpoints** for the outbound and social traffic you are about to generate. In Israel’s relationship-driven, low-trust SMB market, no one hires an anonymous solo developer from a cold Google search. They hire from a sharp technical teardown in a Facebook group, a warm referral from their web agency, or after playing with a live WhatsApp demo themselves.

---

### The 90-Day Ranked Sequence (Ordered by Enquiries per Hour)

#### 1. The "Hook" & Baseline Infrastructure (Ship FIRST, Week 1)
Before doing any outreach, you need a way to prove competence without named case studies, and URLs to send specific personas to.
*   **1A. Build a Public Demo WhatsApp Agent on the Site:** Put a prominent "Test my AI Agent on WhatsApp right now" button on your site. Let prospects talk to an agent connected to the official Meta Cloud API that qualifies them as a lead, answers technical questions about your services, and books a meeting in your calendar. This completely bypasses your anonymous-client problem: *the demo is the proof*.
*   **1B. Google Business Profile (Ramat Gan / Gush Dan):** Set it up as a local business (or service area). Text your past 3 clients (even the anonymous ones—individuals can leave reviews under their personal names without naming their company's secret IP) and get 3 five-star Hebrew reviews mentioning "בוט לוואטסאפ" (WhatsApp bot) and "פיתוח מערכות" (system development).
*   **1C. Ship the 3 Service Pages (Time-boxed):** Write 500 words per page in direct, no-fluff Hebrew. Include an architecture diagram on the systems/bot pages, the FAQ, and the WhatsApp demo CTA. Do not obsess over keyword density.
*   **Effort:** 12 hours total (4 hrs bot, 2 hrs GBP, 6 hrs Astro pages).
*   **Expected 90-Day Enquiries:** 1–3 direct from GBP/Local search; acts as the multiplier for Steps 2–4.

#### 2. B2B Agency & Integrator Partnerships (Weeks 2–6)
In Israel, SMBs buy websites and marketing from small boutique agencies, Wix/WordPress studios, and CRM implementers (who set up Monday.com, Fireberry, or Zoho). These agencies are constantly asked by clients: *"Can you build us an AI WhatsApp bot or custom inventory portal?"* The agencies don't have the backend/API skills to do it, and lose the deal.
*   **The Action:** Identify 40 Israeli boutique digital agencies, Monday.com implementation partners, and WordPress shops. Send them a personalized WhatsApp/email (or cold call—this is Israel, calling works). Pitch: *"I am a senior dev in Ramat Gan. You handle the marketing/CRM; when a client asks for custom Meta API bots or complex backend systems, bring me in as your white-label tech arm or take a 15% referral cut."*
*   **Effort:** 15 hours (research + outreach + 10 coffee/Zoom chats).
*   **Expected 90-Day Enquiries:** 4–8 highly qualified, pre-sold enquiries. **(Highest ROI per hour).**

#### 3. Targeted Israeli Facebook Group Engineering Teardowns (Weeks 2–12)
Israeli SMB owners and tech founders live on Facebook. Do not post "I build AI bots, hire me" (you will be banned or ignored). Post value-dense, Hebrew "how I built this" architectural breakdowns of your two anonymous projects.
*   **Target Communities:** 
    *   *אוטומציה עסקית - הקבוצה הרשמית* (Business Automation - Official Group) - Crucial for finding overload overflow from no-code (Make/Zapier) implementers who hit a wall and need a real coder.
    *   *יזמים וסטארטאפים - הקבוצה הרשמית* / *Startup Nation* groups (for Fractional CTO/MVP).
    *   *קהילת מנהלי מוצר / מפתחים* (for peer referrals).
    *   Large SMB groups (e.g., *עצמאים עושים עסקים*).
*   **The Play:** Write 1 post per week. Example: *"A mid-sized Israeli logistics company was losing 15 hours a week on manual WhatsApp orders. Because of privacy I can't name them, but here is the exact architecture we used with Meta Cloud API + [Your Stack] to automate 80% of it, why we didn't use ManyChat, and how we handled Hebrew RTL quirks in the LLM prompt."* Add a screenshot of a blurred-out dashboard or system diagram.
*   **Effort:** 24 hours (2 hours/week for 12 weeks).
*   **Expected 90-Day Enquiries:** 5–10 inbound DMs.

#### 4. LinkedIn Outbound for Fractional CTO & MVP (Weeks 3–12)
Israeli SMBs aren't on LinkedIn, but Israeli pre-seed founders, non-technical CEOs (often ex-8200 intelligence or domain experts in construction/medical/finance), and VCs are.
*   **The Action:** Use LinkedIn Sales Navigator (free trial, then $100/mo). Filter: Location = Israel, Title = Founder/Co-Founder/CEO, Company Size = 1-10, Industry = Software/Tech. Connect with 20 per week. Note: Write in English or Hebrew depending on their profile language. Pitch your Chillist app as proof you know how to take a product to both App Stores with AI integrated, and offer a free 30-minute architecture review for their MVP.
*   **Effort:** 20 hours (2 hours/week).
*   **Expected 90-Day Enquiries:** 2–4 startup/CTO enquiries.

---

### What You Should NOT Do (The Distractions)

1.  **Do NOT optimize for AI Assistants (GEO / ChatGPT / Perplexity):** In Hebrew, LLM training data and real-time retrieval for local Israeli service providers is terrible. Furthermore, an Israeli bakery owner or logistics manager is not asking Claude in Hebrew for a Ramat Gan software consultant. Zero ROI in 90 days.
2.  **Do NOT bother with Israeli Business Directories (B144, Duns100, Zap):** They are digital graveyards for B2B tech services. The only result of listing on B144 will be relentless spam calls from Israeli SEO agencies trying to sell you packages. (Exception: Look at **Xplace.com** or the **Geektime** service directory if they have free/cheap tiers, though Xplace is notoriously race-to-the-bottom on pricing).
3.  **Do NOT run Google Search Ads yet:** With a tiny budget, bidding on "פיתוח אפליקציות" (app development) or "בוט לוואטסאפ" will eat your budget in 4 clicks—mostly from SaaS platforms (like Wati, ManyChat, Respond.io) and large dev shops in Tel Aviv.
4.  **Do NOT write generic SEO blog posts:** Writing "5 ways AI helps businesses" in Hebrew will take 6 months to rank for a keyword with 10 searches a month.

---

### Reasoning

Your core constraint is **trust**, not discoverability. In a 9-million-person market where everyone is two degrees of separation apart, an anonymous portfolio on a 4-page site screams "junior freelancer," even if you are a senior architect. 

Traditional SEO takes 6–12 months and requires backlinks you don't have. By shipping the 3 pages quickly *alongside a live interactive WhatsApp bot*, you solve the trust problem immediately via product-led proof. By focusing 80% of your hours on Facebook technical teardowns and agency partnerships, you inject yourself directly into existing deal flow in Gush Dan. Make/Zapier automation freelancers in Israel are currently drowning in AI requests they aren't technical enough to fulfill in code—becoming their go-to developer is the fastest path to cash.

---

### Risks in This Recommendation

1.  **The "Free Consulting" Trap (High Risk):** Israeli founders and SMBs are aggressive negotiators and will happily use your live WhatsApp bot, book a call, pick your brain on how to use the Meta Cloud API or architect their MVP for 60 minutes, and then try to build it themselves or hire a cheap offshore dev in Eastern Europe. *Mitigation:* Gate your time. Keep discovery calls to 20 minutes focused on *what* needs to be built, and charge for architecture blueprints.
2.  **Facebook Group Moderation / Shadowbanning (Medium Risk):** Admins in groups like *אוטומציה עסקית* are fiercely protective against self-promotion because they sell their own services. If your posts read like ads, they will be rejected. *Mitigation:* Your posts must be 95% pure technical education/case study, with zero links in the main body. Put your link in the first comment or let people DM you.
3.  **Zero Yield / The "Tachles" Filter (Low-Medium Risk):** It is entirely possible that after 70 hours of effort, your Facebook posts get no traction and agencies ignore your outreach, producing **zero enquiries**. This usually happens if your Hebrew copywriting is too academic/corporate rather than *tachles* (direct, practical, bottom-line focused: "This saved 4,000 NIS/month"). If Week 4 hits with zero DMs or agency replies, your messaging is too technical and not business-outcome focused enough.

### D = x-ai/grok-4.7

**Recommendation:** Do not ship the three service pages first. Pure organic inbound will not show up in 90 days. Spend the hours on conversations: past clients, then referral partners, then a narrow public presence. Ship one plain offer page in week 3 only as a link you send people.

Expected result if the work actually happens: about 2–8 real conversations and 1–4 serious enquiries. **Zero is a plausible outcome.** These ranges are judgment, not data.

### Ranked by enquiries per hour (≈75–90 hours total)

1. **Ask everyone who already knows the work (5h, days 1–7). Expected: 1–3 enquiries (0–4).**  
   Current and past clients, Chillist collaborators, anyone in Ramat Gan / Gush Dan who has seen a build. Ask each for two names, not “let me know if you hear of someone.” Offer a short Hebrew referral line they can forward on WhatsApp. This is the only action with a decent enquiries-per-hour ratio, and only if those people exist and you actually ask.

2. **One proof asset, not an SEO cluster (8h, week 1). Expected direct enquiries: 0.**  
   One anonymized case: problem, what was built, a number, what you will and will not disclose. Plus Chillist as the named public proof (stores + the WhatsApp agent). Israeli buyers want a phone reference; anonymous studies are weak. Get permission for one reference call even if the logo stays hidden. Use this as the thing you attach everywhere below.

3. **Referral partners, not directories (18h, weeks 2–6). Expected in 90 days: 0–2; this is the only channel that compounds after day 90.**  
   Book 15–20 short calls, not a mass email. Priority order for this offer:  
   - מנהלי חשבונות / יועצי מס / רואי חשבון in Gush Dan (they see order, inventory, and WhatsApp chaos every month)  
   - small Hebrew web and Facebook-ads shops that already serve SMBs and do not build WhatsApp Cloud API bots  
   - one or two implementation partners who sell Meta/WhatsApp setups and need someone to build the agent  
   Offer a clear referral fee or a reciprocal intro. One accountant who trusts you beats דפי זהב.

4. **Facebook groups, helpful-first (≈24h: 45 min, 5 days a week, 8 weeks, then taper). Expected: 1–3 enquiries.**  
   This is where Israeli SMB owners actually ask “מכיר מישהו ש…”. Search and join a handful, not thirty: בעלי עסקים / עסקים קטנים, WhatsApp-marketing groups, and two verticals you can serve (clinics, restaurants, online shops, course sellers). Answer operational questions. Mention the work only when someone asks for a builder, and point to the one proof link. LinkedIn will not reach these buyers.

5. **Thirty personal outreaches (12h, weeks 3–8). Expected: 0–2 enquiries.**  
   Clinics, course sellers, restaurants, and Shopify-style shops whose public posts show a WhatsApp or order-handling mess. Short Hebrew note tied to that specific mess, plus the proof link. LinkedIn, Facebook, or email — reply to their post when you can. **No cold WhatsApp to strangers and no bought lists.**

6. **LinkedIn, only for the fractional-CTO buyer (≈16h, 2 Hebrew posts a week + comments). Expected: 0–2, mostly startups, not bots.**  
   Israeli founders do use LinkedIn. SMB owners mostly do not. Comment on founder posts about ops and hiring a CTO. Do not run two content strategies; the Facebook hours matter more for the bot offer.

7. **One offer page, week 3, after you know which offer people answer (6h). Expected organic enquiries: 0.**  
   One page: AI / WhatsApp Cloud API agent for a small business. Price band or starting point, what the first month looks like, the proof, an FAQ for objections (official API vs unofficial bots, Hebrew, who owns the number), a WhatsApp click-to-chat. The management-system and outsourced-CTO pages **do not ship in these 90 days.** A short paragraph on the homepage is enough. Three service pages are a distraction: no query history, no links, a tiny Hebrew volume, and a new URL will not produce clicks before day 90.

8. **Google Business Profile + one directory (3h, week 1, then ignore). Expected: 0–1.**  
   GBP as a service-area business (verification often stalls; don’t babysit it). One of מידרג (if a category fits and you can get a real review) or d.co.il. Skip B144, Zap, Easy, and Walla listings. No reviews means no calls.

### What I would not do
- The three-page SEO plan as the first move, or any blog cadence, hreflang, or further technical SEO.  
- “Be quotable by ChatGPT / Perplexity / AI Overviews.” A four-page Hebrew site with two linking domains will not be recommended in 90 days. Revisit only after you have something others cite (a real number, a public template).  
- Paid ads before one channel has produced a conversation. A few hundred shekels will mostly buy unqualified clicks and teach you nothing reliable.  
- Cold WhatsApp blasts. Fastest way to look like spam in this market and to trip Meta’s rules, which is fatal if WhatsApp bots are the product.  
- English pages, guest-post outreach, backlinks, Geektime/Calcalist pitching, Startup Nation Central, another product launch.  
- BNI unless you already like that format; it eats hours.

### Why this order
Search Console says the site is invisible, not broken. You already fixed the technical layer. Israelis buy this kind of work from a person a friend, an accountant, or a Facebook thread named — then they check a page and write on WhatsApp. They do not discover a Ramat Gan solo consultancy by ranking for “סוכן AI לעסק” in quarter one. Volume for those phrases is small even when you do rank.

Push **one** offer in outreach: the WhatsApp official-API agent. It is one sentence, the pain is visible, and Chillist supports it. Fractional CTO stays a LinkedIn side door, not a second site project.

### Risks in this recommendation
- **It can produce nothing.** No audience, anonymous proof, and a 90-day window is a harsh base rate. If week 4 is silence, the failure mode is usually a vague ask, not “need more pages.”  
- **Anonymous case studies may kill conversion** even when a conversation starts. Without one reference call, expect tyre-kickers.  
- **Partnerships lag.** Judging them on closed deals by day 90 will make a sound plan look dead.  
- **Facebook help-posting slides into pitching** and gets you muted or looks desperate. Cap it; leave groups that don’t discuss operations.  
- **Hours come out of delivery.** If client work slips, you damage the only asset that makes item 1 work. Hard cap ~8 hours a week.  
- **I may be overweighting Facebook and underweighting the client ask.** If you have even three happy clients, double the hours on item 1 and cut LinkedIn first.

### B = moonshotai/kimi-k3

## Bottom line

The three-service-pages plan is right but for the wrong reason. Those pages will produce ~0 organic enquiries in 90 days — you already know this, and your GSC data confirms the site has literally never appeared in a real search. Their actual job is to convert the traffic you generate elsewhere. In Israel, SMB and startup services are bought through WhatsApp, Facebook groups, and "מישהו מכיר מישהו?" — not through Google. So: ship the pages fast, then spend 80% of your hours where Israelis actually ask for recommendations.

Assume ~110–130 hours available. Ranked by enquiries per hour:

## Ranked sequence (90 days)

**1. Conversion pass + live dogfood demo — 18–22h → 1–2 direct enquiries, but multiplies everything below**
Ship the three service pages now, slim: 600–900 words each, FAQ with FAQPage schema, a price anchor (החל מ־₪X,XXX — Israelis won't enquire without a price signal), and a wa.me click-to-chat button with pre-filled Hebrew text, not a form. Then the key move: your own WhatsApp AI agent, reachable from every page, that answers questions about your services. You sell WhatsApp agents and can't show two of three case studies — the agent itself becomes the demo. Every community post can end with "רוצים לראות איך זה עובד? שלחו הודעה." This converts your biggest weakness (anonymous clients) into your strongest proof. Chillist's live agent is the second proof — link it prominently.

**2. Facebook groups — 30–35h (~2.5h/week) → 4–10 enquiries**
This is the highest-yield channel for Hebrew SMB services. Join groups like בעלי עסקים קטנים ובינוניים בישראל, עסקים קטנים – טיפים וכלים, שיווק דיגיטלי לעסקים קטנים, and startup groups for the CTO line. Israelis constantly post "מחפש/ת מישהו שיבנה בוט לוואטסאפ" or "צריכה מערכת לניהול הזמנות" — set a daily 15-minute search for בוט וואטסאפ / צ'אטבוט / אוטומציה / מערכת ניהול and answer helpfully, not salesy. One mini-audit comment ("שלחי לי את תהליך הטיפול בפניות ואגיד לך איפה בוט חוסך") converts better than any ad. Expect first DMs within 2–3 weeks.

**3. Personalized outbound using Meta Ad Library — 20–25h → 6–12 conversations, 2–4 real opportunities**
Honest note: these are replies, not "inbound," but in 90 days outbound replies are the pipeline you'll actually close. Tactic: search ספריית המודעות for Israeli businesses running click-to-WhatsApp campaigns. They've already budgeted for WhatsApp leads and most answer slowly or not at all after hours. Send a 60-second personalized video showing "the bot that would answer your customers at 22:00." 50–60 targets. One wedge offer: a fixed-price pilot ("בוט שעונה תוך 5 שניות לכל פנייה"). Personal one-to-one outreach only — do NOT mass-message via Cloud API (ban risk, plus חוק התקשורת spam-liability risk).

**4. Referral partners — 12–15h → 1–3 referrals, compounding**
Israel runs on referrals. Target: 2–3 digital agencies without in-house AI dev (white-label you), 2 WordPress/site builders whose clients ask for bots, 2 רואי חשבון/יועצי מס (SMBs ask their accountant "איך אני מסדר את ההזמנות"), and 2–3 Monday.com/Zoho implementers — a big Israeli ecosystem whose clients constantly hit the ceiling of off-the-shelf and need custom. Eight to ten "בוא ניפגש לקפה" meetings. Slow to start, best enquiries/hour by month 4.

**5. LinkedIn for the fractional-CTO line only — 15–18h → 1–3 enquiries**
Two posts a week, Hebrew, aimed at Israeli founders; comment on their posts. Do not split this across the SMB services — SMBs aren't on LinkedIn, startups aren't on Facebook groups. One person can't push four services; the WhatsApp-agent wedge leads, management systems are the upsell.

**6. GBP + citations — 4h → 0–1 enquiries, do once**
Google Business Profile (service-area, category ייעוץ עסקי/חברת תוכנה), easy.co.il, דפי זהב, ב144. Marginal for search, but it builds the entity consistency that both Google and AI assistants use to believe you exist.

**7. One guest piece — 8–10h → 0–2 enquiries, long tail**
One contributed article to גיקטיים or אנשים ומחשבים ("מה שלמדתי מבניית סוכני AI לעסקים ישראלים"). This is also your only realistic GEO move: Hebrew AI answers cite news and third-party coverage, not four-page sites.

## What I would NOT do

- **Paid ads.** Hebrew search volume for your terms is too thin to learn anything on a small budget; Meta lead ads without a proven offer is tuition. Revisit after outbound validates one offer.
- **GEO as a strategy.** Beyond schema and the one guest article, there's no citability play for a zero-authority Hebrew site in 90 days. Fold it into the above; buy no tools.
- **Blogging, newsletters, webinars, lead magnets.** Zero distribution = zero return.
- **Mass WhatsApp/cold email blasts.** Legal and platform-ban risk, and it torches the personal brand.
- **More than ~4 directories, Clutch, anything English-facing.** Wrong market for this goal.

## Risks, plainly

- **Zero is a real outcome.** Small sample, trust-based market, no audience. Mitigation: checkpoint at day 30 — if groups + outbound haven't produced ≥5 sales conversations, the offer or price anchor is wrong, not the channels. Shift hours to partners and re-cut the wedge.
- **Facebook groups punish self-promotion.** Lead with answers; one wrong post gets you banned from the exact rooms you need.
- **The demo agent must be excellent.** A mediocre bot is negative proof of your core product. If it can't be great in 12h, cut scope, not quality.
- **Partner channel may pay nothing in 90 days.** It's the best bet for month 4–12, which is exactly why it can't wait until month 4 to start.
- **Focus risk.** Four services, one person. If you can't bring yourself to lead with the WhatsApp wedge alone, expect the numbers above to halve.

The uncomfortable summary: the service pages are 15% of the work, and the plan on the table as currently framed is 100% of the plan. That's the gap.

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | C: Best calibrated and most actionable: prioritises warm introductions and partners, budgets scarce hours, distinguishes inbound from outbound, checks GBP eligibility, and treats estimates and zero-result risk honestly.; D: Strong referral-first sequence with concrete time budgets, a clear service-page decision, and candid risks; weakened by categorical claims about SEO timelines, missing GBP eligibility checks, and inconsistent hour estimates.; B: Offers useful Israel-specific tactics, especially Meta Ad Library prospecting, but overallocates scarce hours, omits warm-client introduction requests, and makes unsupported claims about buyer behaviour and likely enquiries.; A: Contains useful partnership and demo ideas, but relies on inflated forecasts, sweeping market stereotypes, questionable review solicitation, missing GBP eligibility checks, and contradictory time budgets. |
| google/gemini-4-argon | B: Most actionable and specific to Israel, featuring two brilliant tactical ideas (a live dogfood WhatsApp bot to solve the anonymous portfolio problem, and Meta Ad Library prospecting for click-to-WhatsApp advertisers) while hitting every constraint in the brief.; A: Very strong understanding of the Israeli tech/SMB ecosystem (Fireberry, Make/Zapier overflow in specific FB groups, live WhatsApp demo) with clear time-boxing and realistic risk assessment.; C: Well-structured, realistic about enquiry expectations, and strong on Israeli specifics (Priority, Hashavshevet, Startup for Startup), with a smart recommendation to ship one focused service page first rather than all three.; D: Sensible, grounded advice that follows all instructions and rightly prioritizes warm networks and phone references, though slightly less tactically creative than the top answers. |
| x-ai/grok-4.7 | C: Best calibrated 90-day plan: one offer page now, other service pages later, real Israeli partners and communities, honest enquiry ranges, GBP eligibility and spam caveats, and a clear not-to-do list.; D: Equally sound strategy and hour realism, with a sharp one-offer focus and zero-yield risks, but thinner on named Israeli platforms and communities the brief asked for.; B: Useful Israel-specific tactics (dogfood bot, Ad Library, price anchor, wa.me) but over-allocates hours, inflates pipeline, and names communities that may not exist.; A: Right channels in outline, but overclaims pre-sold leads, templates posts with invented client metrics, and pushes review wording that conflicts with anonymity and review rules. |
| moonshotai/kimi-k3 | C: Best-calibrated plan: realistic 45-55h budget, correct GBP eligibility and Israeli spam-law nuance, verifiably real communities (Startup for Startup, עליית המכונות), local software ecosystem knowledge (חשבשבת, Priority), explicit one-page-now/rest-later decision, honest enquiry math with day-30/60 checkpoints.; B: Most distinctive executable tactics (live dogfood WhatsApp agent as proof, Meta Ad Library outbound, price anchors, guest article as the only realistic GEO move) with a day-30 kill-switch, but heaviest hour load (110-130h) and optimistic enquiry totals.; D: Soundest judgment and most honest estimates, strong accountant-channel insight and compliance stance, decisive 'don't ship two pages' call, but vaguer on the explicitly-requested named communities and misses the live-demo proof lever.; A: Good demo-bot and agency white-label ideas with rich local texture (Fireberry, tachles, B144 spam reality), but the most inflated enquiry projections (12-25 total), a badly under-budgeted 12-hour Week 1, no feedback checkpoint, and shakier details (GBP review seeding, unverifiable group names). |

| Model | Label | Points | Mean position |
|---|---|---|---|
| openai/gpt-6.1-sol | C | 14 | 1.50 |
| moonshotai/kimi-k3 | B | 11 | 2.25 |
| x-ai/grok-4.7 | D | 9 | 2.75 |
| google/gemini-4-argon | A | 6 | 3.50 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 9639 | 3593 | 0.0596 |
| google/gemini-4-argon | 10225 | 2402 | 0.0445 |
| x-ai/grok-4.7 | 12359 | 8988 | 0.0752 |
| moonshotai/kimi-k3 | 10084 | 13967 | 0.1623 |
| Total | 42307 | 28950 | 0.3416 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-10-30-site-exposure.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1793343000-mqab3dCpmSzaV6O8E784 | 200 | 53558 |
| openai/gpt-6.1-sol | 1 | gen-1793343000-J9FNqkoUR5aCEYJZsEu3 | 200 | 96299 |
| moonshotai/kimi-k3 | 1 | gen-1793343000-5KwpjDCSQfZ4wavAjewF | 200 | 97345 |
| x-ai/grok-4.7 | 1 | gen-1793343000-G3v0udhFrQVq1lAvhurX | 200 | 106797 |
| openai/gpt-6.1-sol | 2 | gen-1793343107-zomypkA8qABDOWFs3N5W | 200 | 8173 |
| google/gemini-4-argon | 2 | gen-1793343107-yfbgPcEmPlBubSGqsMud | 200 | 10408 |
| moonshotai/kimi-k3 | 2 | gen-1793343107-y9Np5tdaVtwvDtBkWMLZ | 200 | 58876 |
| x-ai/grok-4.7 | 2 | gen-1793343107-0t33WP2b5jGewdoFAnKD | 200 | 60260 |

## Synthesis

### Agreement

All four seats agree on the diagnosis and on most of the don't-do list:

- **The three service pages will produce roughly zero organic enquiries inside 90 days.** No seat disputed this. Their real job is to convert traffic generated elsewhere, not to attract it.
- **The highest-return hours go into people, not pages:** named introductions from past clients first, then referral partners who already stand next to the buyer at the moment the need appears. Every seat named the same partner types: bookkeepers / tax advisers / accountants in Gush Dan, small Hebrew web and ads shops, and Monday.com / CRM implementers whose clients hit the ceiling of off-the-shelf.
- **Israeli Facebook groups are where SMB owners ask for a recommendation**; LinkedIn reaches only the startup and fractional-CTO buyer. Do not run both content tracks.
- **Lead with one offer**, the WhatsApp agent on Meta's official Cloud API, with Chillist as the named public proof.
- **Do not**: treat being quotable by AI assistants as a strategy (a four-page Hebrew site with two linking domains will not be cited in 90 days); run paid ads before one channel has produced a conversation; send cold WhatsApp to strangers (platform ban risk, and the product itself is WhatsApp); blog, newsletter or build lead magnets with no distribution; list on B144 / Zap / most Israeli directories.
- **Zero is a plausible 90-day outcome** for every channel. All four said so unprompted.

### Disagreements

- **One page or three.** The two highest-ranked seats (GPT, Grok) say ship exactly one offer page and hold the other two until a channel proves which offer people answer. Gemini and Kimi say ship all three, time-boxed and slim, purely as conversion endpoints. The peer ranking favoured the one-page call.
- **Hours.** Budgets ranged from 45-55 hours (GPT) to 110-130 (Kimi) over 90 days. The rankers penalised the large budgets as unrealistic for one person also delivering client work.
- **The live demo agent.** Kimi and Gemini both propose putting a working WhatsApp agent on the site that anyone can talk to, and both argue it is the single strongest move because it turns the anonymity problem into product-led proof: the demo replaces the case studies that cannot be shown. GPT and Grok never raise it. Every ranker that saw it called it the best tactical idea in the round.
- **Google Business Profile.** All four agree it is worth 0-1 enquiries and should be done once and ignored. Gemini additionally proposed soliciting reviews from the anonymous clients; two other seats flagged that as conflicting with both the anonymity constraint and Google's review rules. Do not do it.

### Recommendation

Cut the three-page plan to one page and move the freed hours to people and to a demo.

1. **One service page, not three**: the WhatsApp agent on Meta's official API. The management-system and fractional-CTO pages do not ship this quarter; a paragraph each on the homepage is enough. (Changes issue #79.)
2. **Build the live demo agent on the site.** It is the proof that replaces two unnameable case studies, and it is a demonstration of the exact thing being sold. This is new work, not currently tracked.
3. **Named introductions from past clients and collaborators**, asked for specifically ("a business whose team copies WhatsApp enquiries into a system by hand"), not "let me know if you hear of anything".
4. **12-15 referral partners**, in the order the seats converged on: accountants and bookkeepers, then small web/ads shops, then CRM implementers.
5. **Facebook groups, answers only**, capped at roughly 45 minutes a day, never a pitch.
6. **Google Business Profile once**, then ignore it. No directories.
7. **Hard cap around 8 hours a week**, because the delivery work is what makes item 3 possible at all.

A price anchor on the page is required by two seats and is already an open question with Alex. Checkpoint at day 30: fewer than five real sales conversations means the offer or the price is wrong, not the channel.

### Confidence

Moderate-to-high on the diagnosis and the don't-do list: four independent models converged on them without prompting, and the convergence included the uncomfortable part (the plan we had on the table was the smallest-value 15% of the work). Lower on the sequencing, where the split between one page and three is a judgement call rather than an evidenced one, and lower still on any enquiry number: every seat said plainly that zero is a credible result, and none of the estimates is grounded in data.

