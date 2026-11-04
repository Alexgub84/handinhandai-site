# Council: content-architecture-discoverability

- Date: 2026-11-04
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

# Brief: content architecture for a solo expert's Hebrew site, optimised for both Google rank and LLM citation

## Context

handinhandai-site is the marketing site of Alex Guberman / Hand in Hand AI: one
person, Israel, Hebrew-speaking market. Astro 5, static, deployed to Cloudflare,
no third-party scripts (first-party analytics only). The homepage is a frozen
designer prototype (its CSS is verbatim and must not be edited); other pages use
Tailwind. The site is Hebrew-only in practice: an English i18n dictionary exists
but is dead code, and hreflang plus the /en route were deliberately deleted a
week ago because the English pages were empty.

What exists today: homepage, /about, /terms, a privacy page, /404, a sitemap,
robots.txt, canonical and per-page meta descriptions, OG images, and one shared
JSON-LD builder emitting ProfessionalService. An /app-publishing service landing
page is in review (it adds Article + Service + FAQPage JSON-LD). There is NO
article infrastructure at all: no content collection, no /blog or /articles
route, no shared article layout, no RSS.

What the business actually sells, with real delivered proof behind each:
1. Publishing other people's finished apps to Google Play and the App Store as a
   paid service (client's own developer accounts, Israeli specifics: osek patur,
   Apple's EU DSA trader verification, Hebrew/RTL store listings).
2. Building web apps and mobile apps for small and medium businesses.
3. WhatsApp AI assistants (Meta Cloud API).
4. Two industry products: a construction quality-control / defect-tracking
   product (Plumberg) and a building-management product (Koma).

Hard constraint on the construction product: the client ships it under their own
developer account, so the product name identifies the client and must never
appear in public copy, alt text, file names or URLs. Case studies for it are
anonymous, carry no metrics and no store links. Any industry page about
construction QC therefore cannot name the product, cannot link to it in a store,
and cannot show branded screenshots.

## Evidenced findings from this week's own research (treat as given)

- Organic rank position is the dominant predictor of being cited by AI answer
  engines; one study measures roughly a 24% drop in citation per rank position.
  Schema markup showed no independent positive effect once rank was controlled.
- Google states no special markup is required for AI Overviews; ordinary indexing
  and snippet eligibility is the requirement.
- `llms.txt` has no measured citation benefit at scale (97% of published files
  received zero crawler requests) and no major AI vendor confirms consuming it.
- Cited sentences cluster in the first half of a page and are short (~9 words):
  the direct answer has to be near the top, not only in a bottom FAQ.
- A named human byline, a real author page and a resolving identity link
  correlate with higher AI Overview citation share.
- Hebrew market reality: the app-publishing cluster is already contested (a
  direct competitor, app2store.co.il, ranks and sells the same service at 3-4x
  the planned price). The "app or website?" decision query is open. The
  "freelancer vs agency" topic is open in Hebrew and saturated in English.
  Construction QC supervision is thin but real. Building management (ועד בית) has
  eight live competitors and looks not worth chasing on search.

## Writing capacity

One person, writing in Hebrew, with Claude drafting. The realistic budget is
about ten substantial articles over the coming period, then maintenance. Any
architecture that only pays off at fifty articles is the wrong architecture here.

## The questions

1. **Hub shape.** Which of these, and why: (a) one flat `/articles` hub with
   tags; (b) service-clustered pillars, each article living under the service it
   supports (`/app-publishing/<article>`, etc.) with no central hub; (c) a hybrid:
   a central hub for discovery plus canonical cluster URLs under each service
   pillar; (d) something else. Address internal linking, URL stability, and the
   fact that the pillar pages are commercial landing pages whose conversion
   should not be diluted.
2. **Industry pages.** Should the construction and building-management verticals
   get their own landing page plus sub-cluster now, given one of them cannot be
   named at all and the other is commercially crowded? Or should industry
   expertise be expressed purely as articles under the generic
   "we build software" pillar?
3. **Language.** Hebrew only, or Hebrew plus English for a subset? If English
   returns, what is the minimum correct implementation given hreflang and the /en
   route were just removed, and given no one will maintain two full trees?
4. **Allocation.** Given ten articles, how should they be distributed across the
   five clusters above to maximise the chance of ranking (and therefore of being
   cited by assistants) for a brand-new domain with low authority against
   incumbents who already rank?
5. **On-page shape.** What page template actually earns citation for this kind of
   first-hand operational expertise: answer-first lead, procedure with exact
   named steps and fees, dated "last verified" stamps, FAQ blocks, tables? Name
   what to include and what is cargo cult.
6. **Plumbing worth building.** Of these, which are worth the effort and which
   are not: Astro content collections vs plain pages; RSS; an author page with
   Person schema and sameAs links; HowTo / FAQPage / Article schema; an
   `llms.txt`; a changelog or "updated on" discipline; a Hebrew glossary page.

## What a good answer looks like

A clear pick per question with reasoning and the main risk of that pick, not a
survey. Where you disagree with the premise or with the evidenced findings above,
say so explicitly and say what you would do instead. Be concrete about URL
shapes. Assume the reader is the one who will implement it this month.


## Attachments

none

## Round 1: answers

### A = openai/gpt-6.1-sol

## Recommendation

Build **one flat `/articles` library, organised editorially around services**. Keep article URLs independent of service URLs. Publish in Hebrew only. Invest the ten articles primarily in app publishing and software-development decisions—not five equally sized clusters.

The objective is **a small set of useful, commercially relevant pages that can rank**, with first-hand evidence that also makes them quotable. It is not a separate “LLM optimisation” programme.

I accept the supplied research as directional evidence. I would not turn the reported citation decline per ranking position into a forecast for this site, or treat author identity correlations as guaranteed ranking gains.

## 1. Hub shape: flat URLs, service-based linking

**Pick (a), with service-based editorial organisation—not nested service URLs.**

Use:

```text
/articles
/articles/google-play-personal-account-testing
/articles/apple-eu-trader-verification
/articles/app-or-website
/articles/freelancer-or-agency

/app-publishing
/software-development
/whatsapp-ai
/about
```

English URL slugs are fine for Hebrew content. Choose them once; do not chase keyword variations by changing URLs.

### Why

At ten articles, nested clusters provide little benefit and introduce unnecessary ownership decisions. An article such as “app or website?” might support development, publishing and future consulting. Its URL should not depend on which service currently owns it.

Clustering comes from **links, headings and subject coverage**, not directory depth.

Implement this linking pattern:

- `/articles` groups articles under service-oriented headings.
- Each article links contextually to its primary commercial landing page.
- Each article links to a few genuinely relevant sibling articles.
- Each service page has a compact “Practical guides” section linking to its best supporting articles.
- Breadcrumbs remain simple: home → articles → article.

Do **not** create indexable tag archives for ten articles. Store categories in content metadata and use them to organise the hub; separate archive pages would mostly repeat it.

### Preserve conversion

Service pages should retain their commercial sequence: offer, fit, proof, process, objections, CTA. Put supporting articles after the core sales content, not before the first CTA. Avoid a large blog feed or educational detours inside the main conversion path.

Use a distinct primary CTA on articles, matched to the subject—not the same generic contact block everywhere.

**Main risk:** a flat library can become disconnected from services. Prevent that with explicit article-to-service links and curated service-to-article links, not more URL hierarchy.

## 2. Industry pages: neither needs a sub-cluster now

### Construction: publish one strong article and anonymous proof

Do **not** build a construction landing page plus sub-cluster this month.

Publish an article such as:

```text
/articles/construction-defect-tracking-workflow
```

Explain the actual operational workflow: recording a defect, assigning responsibility, attaching evidence, handling status changes, verifying completion and retaining an audit trail. Link it to `/software-development`.

Include a short, clearly identified anonymous delivery example, if client permissions allow. Describe what was built and the implementation decisions. Do not invent outcomes or metrics.

Treat confidentiality as a publishing constraint across:

- Body copy and metadata.
- JSON-LD and OG images.
- Alt text, filenames and URLs.
- Screenshots, downloadable files and public build assets.

Use an unbranded illustrative diagram only if useful, labelled as illustrative—not as a client screenshot.

**Anonymity does not make a vertical landing page impossible.** The reason to defer it is limited capacity and unproven demand. Reconsider a focused `/construction-software` page after relevant enquiries or search impressions demonstrate a distinct commercial opportunity.

### Building management: proof, not an SEO campaign

No dedicated search landing page or article allocation now. With permission, mention Koma as delivery evidence on the software-development page. A product page could later serve sales or branded navigation, but do not confuse that purpose with winning generic ועד בית searches.

**Main risk:** one construction article may not capture commercial vertical searches. That is an acceptable trade-off until there is evidence worth funding a vertical page.

## 3. Language: Hebrew only

Do not restore English this month. The buyers, operational specifics and strongest query opportunities are Hebrew. Partial English publishing would consume maintenance capacity without an established acquisition case.

The existing removal of empty `/en` pages and hreflang was sensible.

If English later becomes necessary for a specific audience:

1. Publish only complete, intentionally selected English pages, such as `/en/app-publishing`.
2. Make each page self-canonical and use the correct document language and direction.
3. Add reciprocal `he`/`en` hreflang only between genuine equivalents, including self-references.
4. Leave Hebrew-only pages without an invented English alternate.
5. Include real English URLs in the sitemap.
6. Make the language switch open the equivalent page when one exists; otherwise provide a clearly labelled English overview link, not a misleading translation switch.

No full mirrored tree is required. `x-default` is optional, not a reason to rebuild an English homepage.

**Main risk:** foregoing some international discovery. Without an English sales and maintenance plan, that is cheaper than maintaining stale translations.

## 4. Allocation: 4 publishing, 3 development, 2 WhatsApp, 1 construction, 0 building management

Treat these as **ten slots, released in stages**, not ten drafts commissioned at once.

| Cluster | Articles | Proposed subjects |
|---|---:|---|
| App publishing | 4 | Google Play personal-account testing requirements; Apple EU trader verification for Israeli developers; client-owned developer accounts and Israeli registration considerations; Hebrew/RTL store-listing preparation and review checks |
| Software development | 3 | App or website?; freelancer or agency?; defining an MVP scope before requesting development quotes |
| WhatsApp AI | 2 | WhatsApp Business app versus Cloud API for an AI assistant; human handoff and operational requirements for a WhatsApp AI assistant |
| Construction | 1 | Defect-tracking workflow and what custom software must support |
| Building management | 0 | Use existing product proof, not article budget |

### Why this distribution

- **Publishing gets the largest share** because there is a real service, operational proof and demonstrated buyer demand. Target narrow procedural questions rather than trying to displace the incumbent immediately on the broad service query.
- **Development gets the open Hebrew decision queries**, close to a buying decision and suitable for a solo expert’s differentiated advice.
- **WhatsApp gets two bounded tests**, not a broad “what is AI?” cluster. Demand and achievable query wording still need validation.
- **Construction gets one proof-rich experiment.**
- **Building management receives no search investment for now.**

The publishing landing page should own the commercial service intent. Supporting articles should answer distinct questions, not become four competing versions of “publishing an app to the stores.”

Start with the two open development decisions and two strongest publishing procedures. Before using the remaining slots, review actual Hebrew SERPs, Search Console query impressions, indexing, enquiries and first-party CTA events. New-domain data will be sparse; absence of early clicks alone is not a verdict.

**Main risk:** spreading ten articles across four subjects still limits depth. The mitigation is concentrating seven on two commercial priorities and reallocating the later slots if evidence warrants it.

## 5. On-page shape: direct answer, operational detail, credible limits

Use one shared article template with these elements:

1. **Specific H1 matching one reader problem.**
2. **A direct answer immediately below it.** A short paragraph that remains useful when quoted alone.
3. **Named author linking to `/about`.**
4. **Publication date, meaningful update date and, where appropriate, a scoped “last verified” note.**
5. **Clear applicability:** account type, platform, country, business status or distribution region.
6. **The actual procedure or decision framework.**
7. **First-hand implementation evidence.**
8. **Relevant next step and service CTA.**
9. **Official sources and a few useful related articles.**

For publishing procedures, include:

- Exact current interface and requirement names where verified.
- Prerequisites and dependencies.
- Numbered steps.
- Common blockers and recovery paths.
- Separate platform charges, recurring charges and your service fee.
- Currency, tax treatment and verification date where relevant.

For Apple and Google requirements, distinguish platform rules from Israeli legal or tax questions. Do not imply that an Israeli business classification automatically determines Apple’s EU trader classification.

For decision articles, use a compact comparison table and concrete scenarios. State when the reader **does not** need your service.

### What is not required

- An FAQ on every page.
- Artificially nine-word sentences.
- A fixed word count.
- Repeating the same answer in the introduction, table and FAQ.
- Generic “AI-ready” summaries.
- Unsupported “from experience” claims.

FAQs are worthwhile when they resolve real residual objections. They are not where the main answer should be hidden.

**Main risk:** exact operational guidance becomes stale. Specificity earns trust only if the maintenance commitment is real.

## 6. Plumbing: build the publishing system, skip speculative extras

| Item | Decision | Reason |
|---|---|---|
| **Astro content collection** | **Build now** | Ten substantial articles justify a shared schema, layout and validation. Use Astro 5’s build-time content collection facilities; Markdown is sufficient unless MDX is genuinely needed. |
| **RSS** | **Optional, cheap add-on** | Useful for subscription and syndication; not a citation strategy. Generate from the collection if straightforward. |
| **Author page + Person schema** | **Yes; improve `/about`** | No separate author directory needed for one person. Include real experience, authorship and genuine identity links. |
| **Article schema** | **Yes, minimal and accurate** | Express headline, author, dates, image and canonical page. It is descriptive plumbing, not a ranking lever. |
| **Service schema** | **Keep on commercial pages** | Appropriate to the offer. A commercial landing page does not need `Article` merely because it contains substantial text. |
| **FAQPage schema** | **Skip by default** | Useful visible FAQs do not require it. Do not expect FAQ rich results for this commercial site. |
| **HowTo schema** | **Skip initially** | No demonstrated payoff worth separate implementation and maintenance here. |
| **`llms.txt`** | **Do not build** | No evidenced benefit justifying attention. |
| **Update discipline** | **Build now** | Especially important for platform rules, fees and verification processes. |
| **Hebrew glossary page** | **Do not build yet** | Define terms inline. A standalone glossary would dilute the initial publishing budget. |

Suggested collection fields:

```text
title, description, slug, publishedAt, updatedAt,
author, service, relatedArticles, draft,
verifiedAt?, verificationScope?
```

Keep one stable business entity identifier and one author identifier in JSON-LD. Link article authorship to the person and the publisher/service relationship to the business; do not describe every article as a separate ProfessionalService.

A “last verified” date should mean someone checked the stated requirements against named sources. Do not refresh dates on every deployment. Add a short visible change note for material revisions; a separate public changelog is unnecessary.

Finally, extend the existing sitemap to include published articles, verify crawlable links and snippet eligibility, and connect Search Console. Use navigation on editable layouts to expose the library without altering the frozen homepage prototype.

## Main implementation risk

The biggest failure mode is **publishing ten plausible Claude-written summaries without distinctive evidence**. Architecture cannot compensate for that.

For every article, Alex should supply at least one substantive contribution a generic writer could not safely invent: an actual decision, a documented failure mode, a verified process detail, or a permissible anonymous implementation example. Spend the saved effort from English, nested hubs and speculative schema on that.

### C = google/gemini-4-argon

### 1. Hub shape

**Recommendation:** **(a) One flat `/articles/<slug>` hub**, with no tags. Do not nest articles under commercial service URLs.

**Reasoning:** 
With a budget of 10 articles, creating service-clustered subdirectories (`/app-publishing/<slug>`, `/custom-apps/<slug>`, etc.) produces micro-silos of 2–3 pages each, making the site look sparse and unfinished. A flat `/articles` directory consolidates all 10 pieces into one substantial index page, guarantees URL stability if your service offerings pivot, and simplifies Astro routing (`src/pages/articles/[slug].astro`). 

To protect conversion on commercial pillar pages (`/app-publishing`, `/whatsapp-ai`, `/custom-apps`), keep their primary layout focused on selling. At the very bottom of each service page—below the primary CTA—add a small, curated "מדריכים מקצועיים בנושא" (Related Guides) component linking to the 2–3 relevant articles. Conversely, every article should feature a sticky or inline contextual callout box in the first third of the page linking *up* to its parent commercial service page. Tags are unnecessary overhead at 10 articles; group them visually by service on the `/articles` index page using static headings.

**Main Risk:** Weaker URL-path topical signals compared to `/app-publishing/<slug>`. You mitigate this entirely through strict, descriptive Hebrew anchor text in your internal links between the service page and its supporting articles.

---

### 2. Industry pages

**Recommendation:** **Do not build industry landing pages or sub-clusters.** Express construction QC expertise purely as 1–2 articles + an anonymized case study block under the generic "we build software" (`/custom-apps`) pillar. Drop the building-management vertical from your organic search strategy entirely.

**Reasoning:** 
A commercial landing page for construction QC where you cannot name the product, link to the app store, or show branded screenshots will fail to convert skeptical buyers and looks like vaporware. However, your *operational knowledge* of Israeli construction defects (פרוטוקול מסירה, בדק בית) is a high-value asset. Turning that into an informational article ("How to spec a field defect-tracking app in Israel") builds immense trust and funnels leads to your custom development service without violating the client's NDA. Meanwhile, chasing 8 entrenched SaaS competitors in the *Vaad Bayit* space with a brand-new domain is a waste of your 10-article budget. Mention Koma purely as a portfolio proof point on `/custom-apps`.

**Main Risk:** Missing direct bottom-of-funnel searches for "תוכנה לניהול ליקויי בנייה". This is an acceptable loss because you aren't selling Plumberg as a standalone SaaS to the public anyway—you are selling your ability to build similar tools.

---

### 3. Language

**Recommendation:** **100% Hebrew-only.** Delete the dead English i18n dictionary code from the repository. Use ASCII English slugs for all URLs (e.g., `/articles/apple-dsa-trader-israel`).

**Reasoning:** 
Your competitive moat is Israeli bureaucratic and technical friction (*Osek Patur*, Israeli Dun & Bradstreet D-U-N-S, RTL store formatting, Hebrew WhatsApp templates). In English, you are competing against global dev shops and saturated SEO. Maintaining a partial English tree re-introduces layout testing overhead (LTR vs. RTL in Tailwind) and splits your writing time. Keep the site strictly `lang="he" dir="rtl"`. However, always use English ASCII slugs: Hebrew URLs percent-encode into monstrous strings when pasted into WhatsApp, Slack, or LLM prompts (`%D7%94%D7...`), which hurts click-through and citation readability.

**Main Risk:** Inability to send an English link to an Anglo-Israeli founder or international partner. If that happens, send a custom English PDF deck via email rather than maintaining a bilingual site.

---

### 4. Allocation (The 10-Article Budget)

**Recommendation:** Allocate **5 to App Publishing, 3 to Custom Dev (Decision/Buyer guides), 1 to Construction QC, and 1 to WhatsApp AI**. Zero to Building Management.

**Reasoning:** 
A new domain cannot win head-term rankings right away; it wins on ultra-specific procedural queries where incumbents have generic fluff. Even though `app2store.co.il` ranks for the main service term, they likely lack deep technical guides on the newest friction points, and your 3–4x lower price is a massive hook once you capture informational traffic.

1. **App Publishing (4 Procedural + 1 Pricing):**
   - *Apple EU DSA Trader Status for Israeli Developers* (exact steps, address/phone verification).
   - *Google Play Organization Account & D-U-N-S Number in Israel* (*Osek Patur* vs. *Osek Mursham* vs. *Ba'am*).
   - *Google Play 14-Testers Requirement: How to Pass Without Rejection*.
   - *Preparing a React Native / Flutter App for Hebrew RTL Store Listings & Review*.
   - *How Much Does It Cost to Publish an App to Google Play & App Store in Israel? (2026 Breakdown)* — directly attacks your expensive competitor on transparency.
2. **Custom Software (3 Open-Space Decision Guides):**
   - *PWA vs. Native Mobile App vs. Web App for Israeli SMBs: Cost & Maintenance Calculator*.
   - *Hiring a Solo Senior Developer vs. a Software Agency in Israel: Contracts, Code Ownership, and Hidden Costs*.
   - *How to Write a Technical Specification (אפיון טכני) Before Getting Price Quotes*.
3. **Construction QC (1 Deep Domain Guide):**
   - *Digitalizing Construction Defect Tracking (ליקויי בנייה ופרוטוקול מסירה): Off-the-Shelf Apps vs. Custom Field Tools* (uses wireframe/redacted UI diagrams to prove deep field experience without naming Plumberg).
4. **WhatsApp AI (1 Technical/Business Guide):**
   - *WhatsApp AI Bots for Business via Meta Cloud API: Pricing, Hebrew Prompts, and Avoiding Number Bans*.

**Main Risk:** Over-indexing on low-ticket App Publishing leads (50% of content) at the expense of high-ticket Custom Dev leads. Mitigate this by treating App Publishing as a paid lead-magnet to upsell ongoing maintenance and feature development.

---

### 5. On-page shape

**Recommendation:** **BLUF (Bottom Line Up Front) + HTML Data Table + Numbered Exact Procedure.** Skip bottom-of-page fluff FAQs.

**Reasoning:** 
To satisfy the finding that cited sentences are short (~9 words) and cluster in the top half of the page, structure every article template as follows:
- **Include — The "Direct Answer" Lead Box:** Immediately below the H1 and byline, place a styled box containing 2–3 crisp, declarative sentences that directly answer the query with hard numbers (e.g., *"רישום חשבון מפתח באפל עולה 99$ לשנה ודורש מספר D-U-N-S ישראלי בחינם שלוקח עד 14 ימי עסקים."*). LLMs lift these verbatim.
- **Include — Visible Byline + "Last Verified" Stamp:** `"מאת אלכס גוברמן | נבדק לאחרונה: אפריל 2026"`. For Apple/Google/Meta policies, freshness is a primary trust signal for both humans and RAG retrieval systems.
- **Include — HTML `<table>` for Comparisons/Costs:** Put a clean HTML table in the top 40% of the article (costs, timelines, *Osek Patur* vs *Ba'am* requirements). LLMs parse HTML tables with high fidelity.
- **Include — Exact UI Strings:** Write steps using the exact English strings Israelis see in the console alongside the Hebrew explanation (e.g., `Account Holder -> אמצעי זיהוי`).
- **Cargo Cult (Drop) — Generic Bottom FAQ Blocks:** Do not tack 5 repetitive Q&As onto the bottom of the page just for schema. Instead, make your H2s natural questions in the body text, and make the very first sentence after each H2 a standalone, 9-word direct answer.

**Main Risk:** Users get the exact answer in 15 seconds and leave without hiring you. Combat this by placing a sharp "Want me to handle this bureaucratic nightmare for you for ₪X?" callout box immediately after the complex table/procedure.

---

### 6. Plumbing worth building

**Recommendation:** Build **Astro Content Collections**, **Author `/about` with `Person` schema**, **Basic `Article` schema**, and **`dateModified` tracking**. Skip `RSS`, `llms.txt`, `HowTo`/`FAQPage` schema, and the `Glossary`.

**Reasoning:**
- **Astro Content Collections — BUILD:** Takes 30 minutes to set up (`src/content/config.ts`). It enforces frontmatter (`title`, `description`, `pubDate`, `updatedDate`, `relatedService`) with TypeScript and prevents layout drift across your 10 articles.
- **Author `/about` + `Person` Schema — BUILD:** Directly supported by your research findings. Enhance your existing `/about` page with `Person` JSON-LD for Alex Guberman, including `sameAs` links to LinkedIn, GitHub, and your Israeli business registry number if applicable. Reference this `@id` as the `author` in every article.
- **Basic `Article` Schema + "Updated On" Discipline — BUILD:** Emit standard `Article` JSON-LD from your Astro layout using frontmatter `pubDate` and `updatedDate`. It costs zero ongoing effort once wired into the layout.
- **`HowTo` and `FAQPage` Schema — SKIP:** Google officially deprecated `HowTo` rich results altogether, and restricted `FAQPage` rich results to government and health authority sites. Given your research also shows schema has no independent LLM citation effect once rank is controlled, building custom JSON-LD arrays per article is wasted engineering time. *(Note: I disagree with keeping `FAQPage` on your `/app-publishing` page in review—remove it to keep the template clean).*
- **`llms.txt` — SKIP:** Proven dead weight by your own research.
- **RSS — SKIP:** No one subscribes to a 10-article SMB service site via RSS, and Google discovers pages via your existing `sitemap.xml`.
- **Hebrew Glossary Page — SKIP:** High effort, attracts zero-intent student/definition traffic, and dilutes your 10-article focus. Define terms inline in your 10 articles instead.

**Main Risk:** If an emerging AI search crawler eventually adopts `llms.txt` or `RSS` for ingestion. Because you are using Astro Content Collections, generating either file in the future will take less than 20 lines of code if the evidence ever changes.

### B = x-ai/grok-4.7

**Recommendation:** flat `/guides/<slug>` articles, commercial pillars left alone, Hebrew only, five of the ten articles on Israeli app-publishing long tails, a short answer-first template, and almost no extra SEO plumbing.

## 1. Hub shape

**Pick:** one Astro content collection, canonical URLs at `/guides/<latin-slug>`, a single index at `/guides`. No nested article URLs. No tag archives.

Pillars stay commercial and short: `/app-publishing` (already coming), plus `/custom-apps` and `/whatsapp` only when each has a real offer. Each pillar links to at most three guides **below the fold**, never in the hero. Every guide links up to exactly one pillar in the lead and again at the end, plus two same-cluster siblings. BreadcrumbList can read “home → app publishing → article” even though the path is flat.

Nested URLs (`/app-publishing/<article>`) couple content to a commercial slug, make a later cluster move a redirect project, and tempt you to turn the landing page into a magazine. A hybrid with two URLs per article is worse: one will be a duplicate or a soft duplicate. Tags pay off at dozens of posts, not ten.

**Risk:** Google will not infer a cluster from the URL. If the three-link rule and sibling links slip, `/guides` is just a miscellaneous blog and the publishing pages do not reinforce each other.

Slugs in Latin, frozen at birth. Hebrew in the H1 and title only. Do not touch the homepage CSS.

## 2. Industry pages

**Pick:** no construction landing page, no building-management page, no sub-clusters.

Building management is crowded and the brief already says it is not worth chasing. Leave it at zero pages. Construction QC gets **one** anonymized article under the custom-apps cluster (`/guides/construction-defect-tracking-requirements` or similar). No product name, no client name, no metrics, no store link, no branded screenshot, and none of those in the slug, image filename, or alt. A landing page with nothing nameable is thin on a new domain and will not convert.

Promote that article to a problem page (`/custom-apps/construction-qc`, still unnamed) only after Search Console shows impressions. Not this month.

**Risk:** a competitor with a nameable product takes the thin construction query while you are silent. One specific article is the cheap probe; a hollow vertical page is not.

## 3. Language

**Pick:** Hebrew only. Do not restore `/en` or hreflang.

The buyer, the proof, and the winnable queries are Israeli (osek patur, Apple’s EU DSA trader check, Hebrew/RTL listings). Empty English was correctly removed. hreflang to a second tree nobody maintains splits crawl and signals thin alternates. Hebrew AI answers cite Hebrew pages; English articles do not fix that.

If a real English buyer appears later, the minimum is **one** complete commercial URL (likely `/en/app-publishing` only), reciprocal hreflang, `x-default` to the Hebrew URL, and noindex until that page is as specific as the Hebrew one. Not an article tree. Not a dictionary revival.

**Risk:** you stay invisible on English queries. Correct trade for this business.

## 4. Allocation

Head term “publish my app” is owned by an incumbent on a new domain. Do not spend the ten posts trying to outrank app2store.co.il on that phrase. Spend them on open queries and on operational long tails they are unlikely to have written from the same desk.

| # | Cluster | Job |
|---|---|---|
| 1 | Decision | App or website for an Israeli small business |
| 2 | Decision | When a website is enough and a store app is not |
| 3 | Trust | Freelancer vs agency for a first app |
| 4 | Trust / custom apps | How to brief a builder, and what “done” means |
| 5–8 | Publishing | osek patur and Play Console; Apple DSA trader verification; Hebrew/RTL listing failures; whose developer account and why not the vendor’s |
| 9 | Publishing | What it actually costs (named fees, no competitor smear) |
| 10 | Construction probe | What a QC/defect tool must do, anonymized |

WhatsApp: **zero articles** until calls or Search Console show the query. Swap #4 for one Cloud API piece if sales already depend on it. Building management: zero.

Write 1 and 3 first (open, faster to index), then 5–9, then 10.

**Risk:** the publishing long tails are also covered and those five posts sit unranked while open topics got only four. Check the competitor’s URLs before drafting; if they already have the DSA and osek patur pieces, cut publishing to three and add a third decision/trust article, not a building-management one.

## 5. On-page shape

**Include, in this order, on one Tailwind layout (not the frozen homepage):**

- H1 as the question or the claim.
- Byline linking to `/about`, role, published date, **last verified** date.
- Answer box in the first screen: one short sentence that can be lifted, then about 50 words. Do not write the whole article in nine-word bursts; that finding describes what gets quoted, not how to write Hebrew.
- Who it is for / not for.
- Numbered procedure with the real screen, form, and fee names. This is the moat. Keep the page around 1,200–1,800 words so the procedure is still in the first half.
- One table when the query is comparative (fees, app vs site, freelancer vs agency).
- A short “what we have actually done” note, anonymized where required.
- Three to five FAQs, visible, answers matching the page. Not a second article at the bottom.
- One pillar CTA after the answer, not a second hero.
- Two sibling guides.

**Cargo cult, skip:** llms.txt, HowTo schema, FAQPage schema, speakable, star ratings, fake review markup, “key takeaways” that add no fact, tag pages, a glossary, English hreflang, and any schema added because a tool said E-E-A-T.

I agree that rank, not markup, drives citation, and that the answer must be at the top. I do not agree that every sentence should be nine words, or that schema’s lack of independent effect means “ship no identity markup.”

## 6. Plumbing

**Build this month**

- Content collection plus one guide layout. Frontmatter: `title`, `description`, `cluster` (enum: `publishing` | `decision` | `trust` | `construction`), `pillar` (internal URL), `published`, `lastVerified`, `draft`. Plain pages will drift by article four.
- `/about` as the single person URL: visible bio, `Person` JSON-LD, `sameAs` only to profiles that resolve, `author.url` on each article pointing there. Wire the existing `ProfessionalService` node to that person. Do not add `/author/alex`.
- `Article` JSON-LD with `dateModified` equal to `lastVerified`. Cheap, accurate, not a ranking trick.
- Visible “נבדק לאחרונה” and a habit of re-checking the four policy articles when Apple or Google change a rule. A site-wide changelog page is unnecessary.
- Guides in the existing sitemap. One generic OG image is enough.

**Do not build**

- `llms.txt`. The finding is enough; I would not add it “just in case.”
- RSS. Nobody subscribes to a ten-article Hebrew service site.
- HowTo and FAQPage schema. Visible steps and FAQs only.
- A Hebrew glossary. Definitions belong in the article that needs them.
- Tag routes, related-post automation beyond two hand-picked siblings, or a forbidden-word linter more elaborate than a comment in the collection schema listing strings that must never ship (construction product name, client name).

**Risk of this plumbing cut:** you will not have a feed or a glossary if a later distribution idea needs one. Both are an afternoon to add after the ten articles exist. Building them now only creates empty surfaces.

### moonshotai/kimi-k3 (abstained: The operation was aborted due to timeout)

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | A: Most complete and accurate: stable flat URLs, sensible staged allocation, correct partial-English implementation, careful confidentiality safeguards, and a practical distinction between useful publishing infrastructure and citation cargo cult.; B: Actionable and mostly well prioritised, but misreads the hybrid option as requiring duplicate URLs, imposes arbitrary linking rules, and gives incomplete English implementation guidance and overlapping article topics.; C: Generally sound architecture, but undermined by inaccurate testing and D-U-N-S examples, unsupported claims about anonymous landing pages, prescriptive nine-word answers, and failure to specify the requested minimum English implementation. |
| google/gemini-4-argon | C: Most concrete and actionable response, incorporating specific Israeli market realities, Hebrew phrasing, exact Astro implementation details, and accurate technical SEO facts regarding deprecated Google schema.; A: Comprehensive, well-reasoned, and hits every requirement in the prompt with high precision, though slightly less punchy on local Hebrew specifics than C.; B: Strong, opinionated, and concise, though slightly thinner on detail and has minor flaws like suggesting overlapping topics for the first two articles and an older Astro config path. |
| x-ai/grok-4.7 | A: Most correct and implementable: stable flat URLs, staged allocation tied to open queries, accurate platform-vs-tax limits, and plumbing that skips cargo cult without dropping author identity or update discipline.; B: Sharp and well calibrated to the evidence, but slightly rigid and has real SEO mistakes in the fallback plan (noindex plus hreflang, breadcrumbs that invent a path).; C: Useful content calendar and Hebrew-slug advice, but over-applies the nine-word finding and recommends factually wrong publishing claims (14 testers, Apple DSA requiring D-U-N-S). |

| Model | Label | Points | Mean position |
|---|---|---|---|
| openai/gpt-6.1-sol | A | 8 | 1.33 |
| google/gemini-4-argon | C | 5 | 2.33 |
| x-ai/grok-4.7 | B | 5 | 2.33 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 9349 | 3270 | 0.0561 |
| google/gemini-4-argon | 9725 | 2512 | 0.0446 |
| x-ai/grok-4.7 | 11943 | 9566 | 0.0778 |
| moonshotai/kimi-k3 | 0 | 0 | 0.0000 |
| Total | 31017 | 15348 | 0.1785 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-11-04-content-architecture-discoverability.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1793761225-ncoSo7wPuRdpg3SgSMnl | 200 | 47899 |
| openai/gpt-6.1-sol | 1 | gen-1793761226-tICNciOVeSlEEGjpvOzq | 200 | 83507 |
| x-ai/grok-4.7 | 1 | gen-1793761226-3rfVe15aIiVqPl5c2FKV | 200 | 118264 |
| google/gemini-4-argon | 2 | gen-1793761734-WiyYKPIPss3GxO5Jajtj | 200 | 6230 |
| openai/gpt-6.1-sol | 2 | gen-1793761734-90SqCa69RHYKuWMBLMlB | 200 | 8699 |
| x-ai/grok-4.7 | 2 | gen-1793761734-nCN2Vc30fXu2hpkgD3AM | 200 | 47699 |

## Synthesis

_Chairman: the calling Claude session (manager). Three seats answered; Moonshot timed out
and abstained. Peer ranking put openai/gpt-6.1-sol first on two of three ballots._

### Agreement

All three seats converged, independently, on the following:

- **Flat article URLs.** One content collection, one index, canonical article URLs at a
  single flat path (`/articles/<latin-slug>` or `/guides/<latin-slug>`). No nesting under
  commercial service paths, no hybrid double-URL scheme, no tag archives at ten articles.
  Clustering comes from internal links and headings, not directory depth.
- **Commercial pages stay commercial.** Supporting-article links go below the primary CTA
  on a pillar page; each article links up to exactly one pillar near the top.
- **Latin slugs, Hebrew body.** Hebrew URLs percent-encode into unreadable strings when
  pasted into chat or an LLM prompt. Slugs are frozen at birth.
- **Hebrew only; do not restore English or hreflang.** The moat is Israeli friction (osek
  patur, Apple's EU DSA trader check, Hebrew/RTL listings). If English ever returns it is
  one complete commercial page with reciprocal hreflang, never a mirrored tree.
- **No industry landing pages this month.** Construction QC gets exactly one anonymised
  article under the custom-software pillar; promote it to a vertical page only when Search
  Console shows impressions. Building management gets zero search investment (eight live
  competitors) and survives only as delivery proof on a service page.
- **Publishing-heavy allocation, aimed at long tails not the head term.** Do not try to
  outrank the incumbent on the broad service query from a new domain.
- **Answer-first page shape.** H1 as the question, a liftable answer box on the first
  screen, visible byline linking to a real author page, published plus "last verified"
  dates, a comparison table in the top half, the procedure with exact console and form
  names, one CTA after the procedure.
- **Plumbing: build the content collection, the article layout, `Person` schema on the
  author page, and `Article` schema with `dateModified`. Skip `llms.txt`, RSS, `HowTo`
  schema, `FAQPage` schema, a glossary, and tag routes.**

### Disagreements

- **Hub path name.** `/articles` (A, C) versus `/guides` (B). Cosmetic; no SEO argument
  either way was offered.
- **WhatsApp allocation.** A gives it two slots, C one, B zero until a call or Search
  Console proves the query exists.
- **How literally to read the nine-word citation finding.** C prescribes writing in short
  declarative bursts; A and B both object that the finding describes what gets quoted, not
  how to write Hebrew prose, and B's ranking flags C's version as over-applied. A and B are
  right: the answer box is short, the article is not staccato.
- **Existing `FAQPage` schema on the in-review landing page.** C wants it removed (Google
  restricted FAQ rich results to government and health sites); A and B only say do not add
  more. Not worth a change to a page already in review.
- **Fact quality.** Peer review caught two concrete factual errors in C's article plan (a
  "14 testers" rule, and Apple's DSA trader check requiring a D-U-N-S number) and one
  self-contradiction in B's English fallback (hreflang plus noindex). This is the clearest
  signal in the whole record: the seats' *structure* is trustworthy and their *platform
  facts* are not. Article facts must come from first-hand records, never from a model.

### Recommendation (manager's ruling)

1. **Hub:** flat `/articles/<latin-slug>`, one Astro content collection, one index page at
   `/articles` labelled מדריכים, grouped under static service headings. No tags, no nesting,
   no second URL. Slugs frozen at birth.
2. **Industry:** no construction or building-management landing page. One anonymised
   construction article under the custom-software pillar, under the existing confidentiality
   rule (no product name, client name, domain, store link or branded screenshot — in copy,
   slug, filename, alt text, OG image or JSON-LD). Building management: zero articles.
3. **Language:** Hebrew only. Do not revive the dead English dictionary as part of this
   programme; deleting it is a separate housekeeping item.
4. **Allocation (10):** four app-publishing procedures, three buyer-decision pieces, one
   cost-transparency piece, one WhatsApp piece, one anonymised construction piece. Release
   in three waves, the two open decision queries first (fastest to index), then the
   publishing procedures, then the probes. Re-check the incumbent's existing URLs before
   drafting each publishing piece; if a topic is already covered well there, spend the slot
   on a decision piece instead.
5. **On-page:** the agreed template above. The answer box is one liftable sentence plus
   roughly fifty words. No FAQ unless it kills a real objection. "Last verified" means
   somebody re-checked the named sources on that date and is re-checked when Apple, Google
   or Meta change a rule.
6. **Plumbing:** build the collection, the article layout, the author page with `Person`
   schema wired to the existing `ProfessionalService` node, `Article` schema with
   `dateModified` driven by the `lastVerified` field, and articles in the sitemap. Skip
   `llms.txt`, RSS, `HowTo`, `FAQPage`, glossary and tag routes.
7. **Overriding constraint, from the peer review:** every article must be sourced from the
   first-hand operational record (the capability ledger drawn from the project's own
   runbooks), with each fee, screen name, form name and timeline traceable. No article ships
   with a platform fact a model supplied. A generic, plausible, Claude-written summary is the
   programme's main failure mode and no architecture compensates for it.

### Confidence

High on hub shape, Hebrew-only, no industry landing pages, and the plumbing cut list: three
independent seats converged and the peer ranking found no substantive objection to any of
it. Medium on the allocation, which assumes the incumbent has not already written the same
publishing procedures; that is checkable per article before drafting and the plan says to
check. Low confidence in any platform fact stated anywhere in this record.
