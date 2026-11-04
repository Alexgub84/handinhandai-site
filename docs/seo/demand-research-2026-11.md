# Search-demand research — November 2026

Researched 4 Nov 2026 for Hand in Hand AI's five service lines plus a separate
AEO (answer-engine optimization) brief. Method: Google's autocomplete suggest
endpoint (`suggestqueries.google.com/complete/search`, `hl=iw&gl=il`) for exact
Hebrew phrasing, WebSearch passes for English/international phrasing and for
who currently ranks, and direct fetches of primary sources for the AEO
section. No tool used here returns real search-volume numbers — every claim
below is either an autocomplete suggestion (relevance-ranked, not
volume-ranked), a WebSearch snippet (confirms a page exists and roughly what
it says, not its rank position), or an explicit citation of someone else's
published study (named and linked, with its own caveats noted). Nothing is
invented; where evidence was thin, that is stated rather than papered over.

Target market: Israel, Hebrew primary, English secondary.

---

## Cluster 1 — Publishing an app to the stores

This cluster already has a dedicated, three-round research file:
[`docs/seo/app-publishing-queries.md`](./app-publishing-queries.md). Full
detail (40 phrases, Facebook group quotes, Trends ladder, ad-presence table)
lives there; summarized here only to keep this file complete.

**Best query to own:** `איך מעלים אפליקציה לגוגל פליי` / `איך להעלות אפליקציה
לגוגל פליי` — the highest-confidence phrase across autocomplete, a real
People-Also-Ask box, a real Facebook question, and a live competitor's own
FAQ wording. Keep `Google Play` / `App Store` in Latin script in headings —
Google Trends shows Israelis search the Latin store names 7x more than the
Hebrew transliteration.

**Open or crowded:** **Mixed, trending crowded.** `app2store.co.il` sells the
identical service at 3–4x Hand in Hand's planned price and has dedicated
Hebrew guides for Base44, Lovable, D-U-N-S, and Apple rejections.
`aiterra.co.il`, `Bdika`, and a brand-new `testers.alphamf.com` guide on the
12-tester rule all surfaced in round 3 that weren't visible in round 1 — the
gap is closing, not open. The one genuinely clean phrase left is the 12-tester
explainer itself, and even that now has one dedicated competitor. The biggest
opportunity found across all three rounds is adjacent, not inside this
cluster: `Base44` registered the single highest Google Trends value of
anything measured in this project (higher than `google play` or `app store`
compared head-to-head against Hebrew app-dev terms), and the current
`/app-publishing` page never names Base44 once.

---

## Cluster 2 — Getting an app built (cost, PWA vs. native, hiring)

### Hebrew phrases found (autocomplete + WebSearch)

| Phrase | Source | Intent |
|---|---|---|
| `כמה עולה לפתח אפליקציה` | Dominant head term across every search run; ~9 distinct ranking guides found in one pass | Development cost research |
| `כמה עולה אפליקציה לעסק` | Autocomplete pos. 9, seed "אפליקציה לעסק" | Cost, business framing |
| `אפליקציה לעסקים קטנים` / `אפליקציה לעסק` / `אפליקציה לעסקים` | Autocomplete pos. 1–3, same seed | Generic "I need an app for my business" |
| `בניית אפליקציה לעסק` | Autocomplete pos. 5, same seed | Build-it framing |
| `אפליקציה או אתר` | Autocomplete, own seed, Google-suggest subtype flag (treated as a recognized comparison query) | PWA-vs-native-adjacent: deciding between a website and an app at all |
| `איך לבחור מפתח אפליקציות` | Autocomplete, own seed, sole completion | Vetting a developer before hiring |
| `לשכור מתכנת פרילנסר` | Autocomplete, own seed, sole completion | Hiring a freelance programmer |
| `פרילנסר מול חברה` | Autocomplete, own seed, sole completion, zero further suggestions | Freelancer-vs-agency comparison exists as a real query shape |

### Who ranks (Hebrew)

The `כמה עולה לפתח אפליקציה` cluster is **the most heavily contested Hebrew
query found anywhere in this whole research project** (confirmed independently
by cluster 1's own ad-and-competition round): dogma.co.il, npcoding.co.il,
webitnow.co.il, kedem-law.co.il, techtlv.co.il, any-app.com, appfly.ai,
itayost.com, two-solutions.com, dangil.tech all publish dedicated 2026/2027
cost guides, and (per cluster 1's section 3) **Lovable itself bids as an
advertiser on the plain Hebrew phrase**, alongside level-app.com, misterbit.co.il,
mrcoral.co.il, fiverr.com, hercules.app, rankaibuilder.com. Quoted price
ranges across sources cluster around ₪15,000–₪70,000 for a simple-to-medium
app and ₪70,000–₪200,000+ for a complex one — a wide, unsettled number any new
page would be competing against directly.
[dogma.co.il](https://dogma.co.il/kmh-avlh-lptch-aplyktzyh-mdryk-mkyf-lyzmym-vargvnym-b-2024/),
[itayost.com](https://www.itayost.com/blog/app-development-cost-guide-2025),
[appfly.ai](https://appfly.ai/%D7%9B%D7%9E%D7%94-%D7%A2%D7%95%D7%9C%D7%94-%D7%9C%D7%A4%D7%AA%D7%97-%D7%90%D7%A4%D7%9C%D7%99%D7%A7%D7%A6%D7%99%D7%94/)

The freelancer-vs-agency and "how to choose a developer" queries pull almost
no dedicated Hebrew content — searches returned generic directory/portfolio
pages (shimara.co.il, udisapp.com) rather than advice content, and the English
equivalent ("freelancer vs agency hiring software developer") is dominated by
agency marketing blogs (relevant.software, decipherzone.com, acornglobus.com,
gigster.com) all converging on the same framework: freelancer for
well-scoped/small/<$20k, agency above that or when multiple disciplines are
needed.
[relevant.software](https://relevant.software/blog/freelance-developers-vs-product-development-agency-the-startup-choice/),
[decipherzone.com](https://www.decipherzone.com/blog-detail/freelancer-vs-agency-developer)

PWA-vs-native has no Hebrew-specific content found at all; English content is
dense but generic (forasoft.com, mobiloud.com, totalx.io), consistently
concluding a PWA covers "90% of business app needs" at 30–70% lower cost than
native, with native only clearly winning for push-driven retention, device
APIs, or App Store discovery as a growth channel.
[mobiloud.com](https://www.mobiloud.com/blog/progressive-web-apps-vs-native-apps/)

**Best query to own:** `אפליקציה או אתר` (app or website) — it is a
recognized Google-suggest query shape with **no dedicated Hebrew guide found
anywhere in this research**, sits one step before the crowded "how much does
an app cost" cluster, and is the one place Hand in Hand's actual PWA-vs-native
recommendation (not a sales pitch for either) could own a genuinely empty
query. The literal cost query (`כמה עולה לפתח אפליקציה`) should be treated as
a reference/comparison link, not a page to try to rank on head-to-head.

**Open or crowded:** **Crowded** on cost and "which developer" queries,
**open** on the earlier-funnel "app or website" decision query and on
freelancer-vs-agency as a Hebrew-specific piece (English-only coverage today).

---

## Cluster 3 — WhatsApp automation / AI assistant for a business (Hebrew)

### Phrases found

| Phrase | Source | Notes |
|---|---|---|
| `בוט וואטסאפ לעסק` / `בוט וואטסאפ לעסקים` | Autocomplete, own seed, both top completions | Head term |
| `סוכן ai לעסק` / `סוכן ai לעסקים` / `סוכן ai לעסק מחיר` / `סוכן קולי ai לעסקים בישראל` / `צ'אטבוט סוכן ai לעסק` | Autocomplete, own seed, five completions including a price-intent and a voice-agent variant | Newer "AI agent" framing is a distinct, already-forming query cluster, not just a synonym of "bot" |
| `אוטומציה לעסק וואטסאפ` | Autocomplete, own seed, sole completion | Automation framing |
| `עוזר AI בוואטסאפ לעסקים קטנים` | WebSearch, multiple dedicated guides found | Personal/virtual-assistant framing specifically for small-business owners |

### Who ranks

This is the **most commercially active Hebrew cluster found in this entire
project.** A single search surfaced a full tier of competitors with public,
specific pricing: achiya-automation.com (own comparison + pricing-guide
posts), bestai.co.il, allchat.co.il, automatix.co.il, go.topicpen.com,
stsiconic.com, biznova.tech, devshift.biz, practice-ai.co.il, blaze.co.il, plus
English-language competitor guides at ariko.ai and palmidos.com explicitly
targeting "Israel 2026" in their titles.
[achiya-automation.com](https://achiya-automation.com/blog/whatsapp-bot-pricing-guide-2026/),
[allchat.co.il](https://allchat.co.il/archives/3166),
[ariko.ai](https://ariko.ai/en/guide/whatsapp-bot-small-business)

Published price anchors across sources (useful as competitive reference, not
verified first-hand): basic rule-based bot setup ₪1,500–₪6,000; AI/NLP bot
setup ₪5,000–₪15,000 + ₪300–₪3,000/month; self-serve platforms from ₪97–₪645/month
(Gambot, SmartRise, OCTBOT); full custom builds commonly land ₪7,000–₪20,000
one-time plus ₪299–₪599/month. Meta's own direct cost is free for the first
1,000 conversations/month per number, then roughly $0.0053 per
Israel-destined conversation.

**Best query to own:** `סוכן AI לעסק` (AI agent for a business) over `בוט
וואטסאפ לעסק` — autocomplete shows it already branching into price-intent and
voice-agent variants (a sign of active, maturing search behavior, not a
one-off), it is the newer and less saturated framing versus the older
"chatbot" wording every competitor above already owns, and it matches how
Alex's own actual product (an AI assistant, not a decision-tree bot) should be
described.

**Open or crowded:** **Crowded**, and the most contested Hebrew cluster in
this whole file — real competitors, real published prices, real comparison
content, several posts explicitly dated 2026. Differentiation has to come
from positioning (a named person building it, not an agency; a product someone
can see — Alex's own case studies) rather than from an uncontested query.

---

## Cluster 4 — Construction QC / defect tracking; building (ועד בית) management

### Construction quality control / defects

Autocomplete for `בקרת איכות בבניה` returns almost entirely **job-market**
intent: `דרושים` (hiring), `שכר` (salary), `קורס` (course), `חברות בקרת איכות
בבניה` (companies in the field as an employer, not a buyer) — not software
searches. `ליקויי בנייה` (construction defects) skews even further from
software: `עורך דין` (lawyer), `תביעת` (lawsuit), `מאתר ליקויי בנייה` (defect
inspector, as a job title with its own `דרושים`/`שכר` completions), `בדיקת
ליקויי בנייה`. **Neither of the two most obvious head terms for this product
actually carries buyer intent in Hebrew autocomplete** — this is a real,
load-bearing finding, not a gap to paper over: people searching these exact
phrases are mostly job-seekers, lawyers, or homebuyers checking a specific
apartment, not contractors shopping for QC software.

The buyer-intent phrase that does exist is `אפליקציה לפיקוח בניה`
(construction-supervision app, one clean autocomplete completion) and the
descriptive multi-word phrase `מערכת לניהול ליקויי בנייה` used as a WebSearch
query, which surfaces a real, named competitive set: Ramdor, Reporto, Conqum,
Projecteam, PROBUILD, Darimpo — all live Hebrew SaaS products with dedicated
quality-control feature pages, one (Reporto) explicitly citing "~100% of new
Israeli apartments have construction defects, up to 15% of project cost" as
their own marketing stat.
[ramdor.co.il](https://www.ramdor.co.il/quality-controller/),
[reporto.co.il](https://reporto.co.il/quality-control),
[sys-tech.co.il/Conqum](https://sys-tech.co.il/case-study/conqum/)

Internationally (English), the category is dominated by global players —
PlanRadar (explicitly strong in the Middle East), Procore, Fieldwire,
Bluebeam, BuildPass — none Israel-specific, all far larger than any Hebrew
competitor found.

**Best query to own:** `אפליקציה לפיקוח בניה` or a hand-written longer phrase
like `תוכנה לבקרת איכות בבנייה לקבלנים` — not a head term with autocomplete
depth, but the only one of the group that isn't polluted by job-seeker/legal
intent, and the Hebrew SaaS competitive set here (Ramdor, Reporto, Conqum) is
small enough to be out-contented with real case-study detail.

**Open or crowded:** **Thin but real competition** — five or six named Hebrew
SaaS products already serve contractors directly (not just content
marketing), so it's not an open field, but it's far shallower than clusters 2
or 3. The job-market/legal pollution of the two obvious head terms means
whoever writes this page needs a phrase that actually reaches contractors, not
just the biggest-looking autocomplete completion.

### Building (ועד בית) management

Autocomplete for `ועד בית אפליקציה` is clean and small: `ועד בית אפליקציה`,
`ניהול ועד בית אפליקציה`, `תשלום ועד בית אפליקציה` — three completions, all
buyer-intent, no job/legal pollution. But the competitive set found by
WebSearch is **the most crowded named-competitor list in this entire
research project**: Vaaday, Hombi, Build-App, HomeNet, Ding, Livy, Darimpo,
Shchenim — eight distinct, live, named Hebrew products, several with public
pricing (Livy ₪49–₪69/month, a "נ.ו.ב" competitor at ₪40/month, HomeNet and
Ding free). This is a mature, saturated Israeli SaaS category, not an
emerging one.
[vaad.org.il](https://vaad.org.il/info/615885280),
[ding.co.il](https://www.ding.co.il/),
[livy.co.il](https://www.livy.co.il/)

**Best query to own:** none recommended as a standalone SEO play — this
sub-cluster is too saturated with established, funded, free-tier competitors
for a new entrant to out-rank on generic terms. If pursued at all, the angle
has to be a named differentiator (e.g., Build-App's own positioning already
includes "AI agent on WhatsApp," confirming this is the product's actual
competitive frontier, not the base feature set).

**Open or crowded:** **Crowded**, more so than construction QC. Eight named,
live competitors versus five to six for construction QC.

---

## Cluster 5 — Scoping, pricing, and buying software as a non-technical owner

### What's searched

Hebrew: `איך לבחור מפתח אפליקציות` (how to choose a developer) and `פרילנסר
מול חברה` (freelancer vs. company) each exist as their own single-completion
autocomplete query — real, but shallow; no dedicated Hebrew guide content
found ranking for either. `לשכור מתכנת פרילנסר` (hire a freelance programmer)
likewise exists but thinly.

English: this topic is extensively covered, but entirely by companies selling
one side of the comparison — relevant.software, decipherzone.com,
acornglobus.com, gigster.com, webermelon.com, rabitsolutions.com,
articsledge.com all publish "freelancer vs. agency" framework content, every
one of them a dev shop positioning itself as the safer "agency" choice. The
scoping-a-project side (knocode.io, savibm.com, shayanjamil.com) converges on
a consistent, genuinely useful framework: define user roles, features per
role, a data-model sketch, and success criteria; price discovery itself as its
own small fixed engagement ($5–15k, 2–4 weeks is the figure several sources
converge on); use milestone-based delivery, not one lump payment.
[knocode.io](https://knocode.io/how-to-scope-a-software-project-without-a-technical-background/),
[savibm.com](https://savibm.com/blog/scope-software-project/)

Revenue-share / partnership deals between a developer and a small-business
client: generic legal-template and glossary content exists
(dealhub.io, fynk.com, business-in-a-box.com, genieai.co, maccelerator.la)
quoting typical splits of 20–50% depending on contribution, but **nothing
Israel-specific and nothing in Hebrew** was found for this exact arrangement —
it reads as a real content gap, not a crowded space, though also a low-search-volume
one (no autocomplete signal found for any Hebrew phrasing attempted).

**Best query to own:** `פרילנסר מול חברה` in Hebrew — real query shape, zero
dedicated Hebrew content found anywhere, and it's the exact decision Alex's
own positioning (a named solo builder, not an agency) is built to answer
directly and honestly, unlike the English competitor content which is agency
marketing dressed as advice.

**Open or crowded:** **Open** in Hebrew specifically — the English version of
this topic is saturated with self-interested agency content, but no Hebrew
competitor was found addressing it at all, and it is a decision point every
one of Alex's potential clients has to pass through regardless of which
service line they come in for.

---

## AEO / answer-engine citation research

What gets a page quoted by ChatGPT, Claude, Perplexity, or Google's AI
Overviews in 2026 — separated into what a primary source actually states and
what is third-party correlational research (useful, but not causal proof).

### Primary-source statements (highest confidence — stated by the platform itself)

- **Google says there is no special optimization.** Google's own developer
  docs state plainly: *"There are no additional requirements to appear in AI
  Overviews or AI Mode, nor other special optimizations necessary"* and *"You
  don't need to create new machine readable files, AI text files, or markup
  to appear in these features. There's also no special schema.org structured
  data that you need to add."* Eligibility is simply: indexed, and eligible to
  show with a snippet in ordinary Search.
  [developers.google.com/search/docs/appearance/ai-features](https://developers.google.com/search/docs/appearance/ai-features)
- **OpenAI publishes crawler rules, not a ranking formula.** ChatGPT search
  uses its own crawler (OAI-SearchBot); a site that blocks it in `robots.txt`
  will not appear in ChatGPT search answers. OpenAI states results are ranked
  "using multiple factors intended to help users find relevant, reliable
  information" and explicitly that "placement is not guaranteed" — the actual
  weighting is not published.
- **Anthropic publishes crawler-control only, not an optimization guide.**
  Three distinct Claude crawlers exist (ClaudeBot for training, Claude-User
  for live user fetches, Claude-SearchBot for search indexing), each with its
  own `robots.txt` user-agent, documented in Anthropic's help center. No
  official Anthropic document describes how to get cited more often — only
  how to block or allow the crawlers.
- **llms.txt is not confirmed used by any major provider.** As of 2026 no
  major AI company — OpenAI, Google, Anthropic, Meta, or Perplexity — has
  publicly confirmed their production systems read `llms.txt`. Google has
  explicitly said it does not use it and has no plans to.
  [the honest 2026 evidence review](https://blog.tobira.ai/does-llms-txt-actually-work/)

### Well-evidenced (independent, larger-sample studies — correlational, not platform-confirmed)

1. **Google organic rank position is the single dominant predictor of AI
   citation.** One cross-platform empirical study found each rank position
   down the page reduces citation odds by roughly 24% (OR ≈ 0.76/position);
   schema.org presence alone showed no positive, and in pooled analysis a
   slightly *negative*, association with citation once rank was controlled
   for. [SSRN study, Fischman](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6284518)
2. **llms.txt shows no measurable citation benefit at scale.** A ~300,000-domain
   analysis (SE Ranking) found no correlation between having an `llms.txt`
   file and AI citation frequency; a separate 137,210-domain study (Ahrefs,
   May 2026) found 97% of published `llms.txt` files received zero crawler
   requests. Cheap to add, not a lever.
3. **Perplexity needs the page to be crawlable and self-contained, not
   decorated.** Perplexity must be able to fetch the page (PerplexityBot
   allowed in `robots.txt`, content present in raw HTML, page indexed), and
   it reuses passages that answer one question directly, name the people or
   products involved, and attach a visible, checkable source to each factual
   claim. It explicitly favors pages that themselves cite sources, and
   freshness (regularly updated sites) measurably beats a static page of
   comparable authority. [How to get cited by Perplexity, Cicero](https://cicero.studio/en/get-cited-by-perplexity/)
4. **Author identity signals correlate with AI Overview citation share.** A
   2026 test across 22 client sites found three specific, checkable signals
   moving citation share: a real author page reachable within two clicks of
   the article, a `sameAs` identity graph that actually resolves (not a
   404), and a byline naming one specific human rather than "Staff" or a
   brand. [Ranko field notes](https://ranko.studio/blog/author-eeat-ai-overviews-2026/)
5. **FAQ-structured content and short, early, factual sentences correlate
   with getting quoted — but the evidence is mixed, not settled.** One study
   found FAQ schema correlating with a 3.2x citation rate; a separate,
   larger academic study found a slightly negative association once rank was
   controlled for (point 1 above). What both agree on: cited sentences
   cluster early in the document (74.9% in the first half, in a
   153,425-citation sample) and are short (mean ≈ 9 words) — write the direct
   answer in the first screen, not just in an FAQ block at the bottom.
6. **Conventional AI-visibility tactics (FAQ blocks, schema, author boxes,
   page speed) don't reliably outperform a competitor at the same rank** —
   one of the larger studies cited above states this directly. Treat every
   tactic above as "worth doing because it's cheap and sometimes correlated,"
   never as "guaranteed to move citation odds" — the one lever every source
   agrees actually matters is ranking well in ordinary Google search first.

### Folklore / unsettled, flagged as such

- Claims that a specific schema.org type is "required" for AI citation are
  not supported by any primary source and are contradicted by at least one
  larger independent study once rank is controlled for.
- `llms.txt` as a visibility lever is folklore at this point — real adoption
  exists (developer-tools sites lead at ~72%) but no causal or even
  correlational citation benefit has been found in the largest studies
  available.
- "E-E-A-T directly causes AI citation" is an overstated claim circulating in
  SEO-agency content; the more careful studies above treat it as one
  correlated signal among several, not a mechanism Google or any AI vendor
  has confirmed using.

---

## Sources

Cluster 1: see [`app-publishing-queries.md`](./app-publishing-queries.md) for
the full source list (40+ phrases, Facebook quotes, Trends data, screenshots).

Cluster 2: [dogma.co.il](https://dogma.co.il/kmh-avlh-lptch-aplyktzyh-mdryk-mkyf-lyzmym-vargvnym-b-2024/) · [itayost.com](https://www.itayost.com/blog/app-development-cost-guide-2025) · [appfly.ai](https://appfly.ai/%D7%9B%D7%9E%D7%94-%D7%A2%D7%95%D7%9C%D7%94-%D7%9C%D7%A4%D7%AA%D7%97-%D7%90%D7%A4%D7%9C%D7%99%D7%A7%D7%A6%D7%99%D7%94/) · [relevant.software](https://relevant.software/blog/freelance-developers-vs-product-development-agency-the-startup-choice/) · [decipherzone.com](https://www.decipherzone.com/blog-detail/freelancer-vs-agency-developer) · [mobiloud.com](https://www.mobiloud.com/blog/progressive-web-apps-vs-native-apps/)

Cluster 3: [achiya-automation.com](https://achiya-automation.com/blog/whatsapp-bot-pricing-guide-2026/) · [allchat.co.il](https://allchat.co.il/archives/3166) · [ariko.ai](https://ariko.ai/en/guide/whatsapp-bot-small-business) · [palmidos.com](https://www.palmidos.com/en/magazine/whatsapp-business-ai-chatbot-guide-2026)

Cluster 4: [ramdor.co.il](https://www.ramdor.co.il/quality-controller/) · [reporto.co.il](https://reporto.co.il/quality-control) · [sys-tech.co.il](https://sys-tech.co.il/case-study/conqum/) · [vaad.org.il](https://vaad.org.il/info/615885280) · [ding.co.il](https://www.ding.co.il/) · [livy.co.il](https://www.livy.co.il/) · [build-app.co.il](https://www.build-app.co.il/)

Cluster 5: [knocode.io](https://knocode.io/how-to-scope-a-software-project-without-a-technical-background/) · [savibm.com](https://savibm.com/blog/scope-software-project/) · [dealhub.io](https://dealhub.io/glossary/revenue-sharing/) · [genieai.co](https://www.genieai.co/blog/biz-development-revenue-share-agreements-how-to-structure-and-protect-your-interests)

AEO: [developers.google.com/search/docs/appearance/ai-features](https://developers.google.com/search/docs/appearance/ai-features) · [platform.claude.com web search tool docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool) · [blog.tobira.ai llms.txt evidence review](https://blog.tobira.ai/does-llms-txt-actually-work/) · [SSRN schema/citation study](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6284518) · [cicero.studio Perplexity citation guide](https://cicero.studio/en/get-cited-by-perplexity/) · [ranko.studio author E-E-A-T field notes](https://ranko.studio/blog/author-eeat-ai-overviews-2026/)
