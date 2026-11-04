*This note predates the November content programme and is kept for reference.*

# Traffic setup before the /app-publishing merge: a second opinion

Written 4 Nov 2026 against three inputs: `docs/seo/live-traffic-2026-11.md`
(the live measurement), `docs/seo/app-publishing-queries.md` (three rounds of
Hebrew query research) and the "Visitor analytics" section of `CLAUDE.md`.
Every claim marked **checked** below was verified against the live site or the
PR branch today; everything else is reasoning and says so.

## Verdict in one paragraph

Two of the three proposed steps point at the wrong problem. Bot Fight Mode
does not make the Cloudflare numbers "mean something" (challenged requests
are still counted) and it is the one control on the list that can silently
break a feature this site built on purpose (the `/wa/*` link previews). The
first-party counter is worth switching on, but for launch-week attribution
of Facebook-driven readers, not for search. And "33 impressions is too thin
to act on" is true for keyword choice and false as a plan: the search work
that matters this week needs zero impressions. Meanwhile the proposal misses
the one Cloudflare bot setting that is actually on today, which refuses the
AI training crawlers the site's own strategy wants to be found by.

What was found live today, in order of surprise:

- **checked** `GPTBot`, `ClaudeBot` and `Bytespider` receive `403` from the
  edge. `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Perplexity-User`,
  `Claude-User`, `Claude-SearchBot`, `bingbot`, `Applebot`, `DuckDuckBot`,
  `meta-externalagent`, `facebookexternalhit`, `WhatsApp/2.x`, `TelegramBot`,
  `curl` and `python-requests` all receive `200`. So Cloudflare's "block AI
  bots" is on and enforced, scoped to training crawlers only.
- **checked** The live `robots.txt` is not the repo's `public/robots.txt`.
  Cloudflare's managed robots.txt replaces it with a Content Signals header,
  `Content-Signal: search=yes,ai-train=no,use=reference`, and `Disallow: /`
  for `Amazonbot`, `Applebot-Extended`, `Bytespider`, `CCBot`, `ClaudeBot`,
  `Diffbot`, `Google-Extended`, `GPTBot`, `omgili`. A session reading the
  repo file would never know. The `Sitemap:` line survives.
- **checked** The sitemap is clean (5 URLs, Astro-generated, referenced from
  robots.txt) but lists `/articles/`, which is served with
  `<meta name="robots" content="noindex">`. Search Console will report that
  URL as "submitted but excluded".
- **checked** On `main`, the homepage body links to `/about`, `/terms` and
  `/privacy-sasha` only. On the PR branch the new page gains exactly one
  internal link, from the footer. No body link from the homepage.
- **checked** The new page's head is in good shape: a specific title and
  description, canonical `/app-publishing`, no `noindex`, a `Service` block
  with three `Offer` prices and a `FAQPage` block. Its OG image is the site
  default (`/og/default.jpg`), with a code comment saying the real one is
  still to come.
- **checked** No Core Web Vitals field data exists for the site (too little
  real traffic for Chrome's dataset). A lab run could not be taken from here
  (PageSpeed API quota), so page speed below is reasoning, not measurement.

## 1. Bot Fight Mode: not the right switch

**What it is.** A single toggle on the Free plan (Cloudflare dashboard, zone
`handinhandai.com`, Security, then Bots or "Bot traffic" depending on the
dashboard version). It issues a managed or JavaScript challenge to requests
that Cloudflare's heuristics classify as definitely automated. It has no
configuration: no path exceptions, no allow-list, and on the Free plan no
WAF "skip" rule can exempt a route from it. Cloudflare states it does not
challenge **verified bots**: Googlebot, Bingbot, Applebot, DuckDuckBot and
the major AI crawlers (OpenAI's, Anthropic's, Perplexity's) are on that
list, so search and AI discovery are not the risk.

**What it can break on this site.** The link-preview fetchers are the risk.
`functions/wa/[slug].ts` exists so that WhatsApp, Telegram, Slack, LinkedIn
and Discord show a branded card when a `/wa/<slug>` link is pasted. Facebook's
fetcher is verified; WhatsApp's `WhatsApp/2.x`, Telegram's, Slack's and
Discord's are not reliably on the verified list. A fetcher that gets a
challenge page instead of HTML renders no card, and nobody notices, because
humans still get their 302. Second, the `curl` checks that `CLAUDE.md` tells
every session to run against `/wa/*` will start failing or returning
challenge HTML. Third, any uptime monitor or script he adds later.

**Does it make the numbers mean something?** No. Zone analytics counts a
challenged request as a request, and Cloudflare's "visit" is any page view
whose referrer is from outside the zone or missing, which is precisely what a
scanner probe looks like. That is why 22,210 "visits" exist. After Bot Fight
Mode the same probes appear with a different status. Some scanners give up
after being challenged, so the noise shrinks a little, but the metric stays
unusable as a human count. The honest fix for measurement is to stop reading
zone analytics as visitors at all. For this site it is a hosting health panel
(error rate, cache rate, traffic spikes), nothing more.

**The better control, if the scanner lines bother him.** One WAF custom rule
(Security, WAF, Custom rules; the Free plan allows five). Expression:

```
(http.request.uri.path contains ".php") or
(http.request.uri.path contains "/.git") or
(http.request.uri.path contains "/.env") or
(http.request.uri.path contains ".sql") or
(http.request.uri.path contains "wp-") or
(http.request.uri.path contains "xmlrpc")
```

Action: Block. This site has no PHP, no WordPress, no `.git` to serve, so no
legitimate visitor or crawler ever requests these paths. The rule is exact,
it cannot touch a verified or unverified crawler on a real URL, and blocked
requests show up under Security, Events, which gives him the scanner volume
as its own number instead of mixed into pageviews. Super Bot Fight Mode (Pro
plan, roughly 20 USD a month) and the paid Bot Management score are not
worth money for a static brochure site with no login and nothing to scrape.
Rate limiting (one free rule) solves a different problem (abuse of one
endpoint) that does not exist here.

**Verdict: drop Bot Fight Mode, add the WAF rule if he wants the path list
clean.** If he insists on Bot Fight Mode anyway, the price of admission is
pasting a `/wa/<slug>` link into WhatsApp and Telegram the same day and
watching the card still render.

## 2. The first-party counter: switch it on, for a different reason

The proposal's reason is "to have a bot-free visitor count". That is true
(scanners do not run JavaScript, so the beacon never fires for them, with or
without Bot Fight Mode) but it is not why it earns its cost this week.

**What it tells him that Search Console cannot.** Search Console sees one
thing: Google search impressions and clicks. The `/app-publishing` launch
will not come from Google. It will come from his posts in the Claude Code
Israel groups and from WhatsApp shares, which is where the research found
every real quote of the 12-testers pain. For those readers the counter
records the referring host (`facebook.com`, `l.facebook.com`, `lm.facebook.com`,
`m.facebook.com`) and any campaign parameters, which sections of the page
were reached, how deep they scrolled, how long they stayed, and which of the
three WhatsApp buttons they pressed (`data-track` labels
`app-publishing-what-we-do-whatsapp`, `app-publishing-pricing-whatsapp`,
`app-publishing-closing-whatsapp` already exist on the branch). The one
question that matters in launch week is "did people from the post reach the
price table and press WhatsApp, or leave after the hero", and nothing else he
owns answers it. Cloudflare Web Analytics (the free client beacon) would
answer part of it, but it is a third-party script, which the privacy page
promises the site does not use.

**What it costs.** About twenty minutes of his own dashboard clicks, already
written out step by step in `local/analytics/README.md`, Phase 2: create D1
`hih-analytics`, paste `db/analytics-schema.sql` into its console, bind
`ANALYTICS_DB` to the Pages project for Production and Preview, add
`ANALYTICS_SALT` and `STATS_TOKEN` as secrets for both environments. Ongoing
attention is near zero: retention pruning is automatic, there is no vendor,
no invoice, no cookie banner. The privacy page already describes this
collection in section 13; today that description is false in the generous
direction (it claims collection that does not happen). Switching the counter
on makes it true. "Keep it true" costs nothing unless someone adds a field.

**The one habit it needs from him.** The counter can only attribute what the
link carries. Every link he posts should carry a source, either as
`?utm_source=facebook&utm_campaign=app-publishing-launch` or, nicer in a
post, as a short redirect a session adds to `public/_redirects`
(`/go/fb-vibe  /app-publishing?utm_source=facebook&utm_campaign=vibe-group  302`).
Without that, WhatsApp-opened links arrive with no referrer and the whole
launch reads as "direct".

**Verdict: do it, before the first post goes out, not after.** With no human
traffic the numbers will be tiny. That is fine; the point is per-post
attribution, not statistics.

## 3. Search before merging: "too thin to act on" is half right

It is right about one thing: nobody should pick target phrases or rewrite
copy from 33 impressions and two queries, one of them a keyboard-layout
accident. The query research already did the phrase work from autocomplete,
competitors, Facebook quotes and Trends, which is a better basis than Search
Console will be for months.

It is wrong as a plan, because the search work that decides whether a brand
new page gets found at all does not depend on traffic volume. In order:

1. **A body link from the homepage to `/app-publishing`.** The homepage is the
   only page Google visits regularly (23 of the 33 impressions). On the
   branch the new page has one footer link. Footer links are the weakest
   internal signal there is. One sentence in the homepage's services area
   with an anchor on "פרסום אפליקציה" is the highest-return search change
   available this week and costs a session ten minutes. A session can do it.
2. **The OG image for the page, before the first post.** The Facebook card is
   the launch advertisement; today it would show the generic site image. Not
   a ranking factor, but it decides whether anyone clicks the post that
   produces the first readers. Alex supplies a 1200 x 630 JPEG under 300 KB;
   a session wires `public/og/app-publishing/og.jpg` and removes the
   "temporary" comment.
3. **Request indexing after deploy.** Search Console, URL Inspection, paste
   `https://handinhandai.com/app-publishing`, Request indexing. For a site
   this small, discovery of a new URL can otherwise take weeks. While there:
   Indexing, Sitemaps, confirm `sitemap-index.xml` is submitted and shows
   "Success". His click.
4. **Bing Webmaster Tools, import from Search Console.** Five minutes, one
   button. ChatGPT's search answers draw on Bing's index; being absent from
   Bing is being absent from the second place the strategy wants to be cited.
   His click (needs his Microsoft or Google login).
5. **Validate the structured data once, after deploy.** Rich Results Test on
   `/app-publishing` and `/`. Expect the `Service` and `ProfessionalService`
   blocks to pass. Expect **no** FAQ rich result: Google stopped showing FAQ
   snippets for sites outside government and health in 2023. The `FAQPage`
   block is harmless and may help answer engines, but it is not a visible
   search feature. A session can do this in a browser.
6. **Fix the sitemap and noindex mismatch.** Either filter `/articles/` out
   of the sitemap until the first article is public, or drop the `noindex`
   in the same PR that publishes the first article. Tiny; a session can do it.
7. **Profile backlinks.** The only links he can obtain this week: the
   website field on his Facebook profile and page, LinkedIn, GitHub, and the
   developer name on his Google Play and App Store listings for Chillist and
   Koma. They are weak, but they are the difference between zero referring
   domains and a handful. His clicks.
8. **Page speed: one PageSpeed Insights run by hand, mobile.** A static Astro
   page with preconnected Google Fonts is unlikely to score badly. Act only
   if mobile performance comes back under 70. Do not optimise speed for a
   page nobody has loaded.

Title and description on the homepage and the new page are fine as they are.
The new page's title is long (it will be clipped after roughly 60 characters
in results) but the clipped part is the brand suffix, which is the right
part to lose. Leave it.

**Genuinely a waste of time until traffic exists:** rank trackers and
position reports; rewriting titles to chase impressions; building content
against the twelve "guessed" phrases in the research; backlink outreach;
paid SEO suites; hreflang or any English plumbing; A/B testing anything.
Each of those needs a signal to optimise against, and there is none yet.

## 4. Geography: 24 of 33 proves nothing, and the instrument cannot prove it

A Hebrew page is shown to people who search in Hebrew, who are mostly in
Israel. The 73 percent Israel share is a property of the page, not of the
market. The 8 US impressions are most likely Hebrew speakers abroad or the
brand query. Letting the number grow for six months will tighten the error
bars on a question that was answered by the language choice before the first
impression arrived: a Hebrew-only site cannot see non-Hebrew demand at all,
because it is never shown to it.

So the geographic evidence base is not thin, it is the wrong instrument, and
no amount of waiting fixes that. The cheapest ways to learn whether demand
exists outside Israel, without building an English site:

- **Google Keyword Planner, ten minutes, his Google Ads login.** Every round
  of the query research ended by saying this is the one tool that puts
  Hebrew and English phrases on one volume scale. "google play 12 testers",
  "publish app without mac", "app store publishing service" next to their
  Hebrew counterparts. It measures demand, not his ability to capture it,
  but it answers "is there a market out there" for free. His login.
- **Reading the competitors that already exist.** The research found
  12testers.com (Russian) and English tester marketplaces at about 15 USD.
  English demand for the publishing step exists; it is also already served,
  cheaply, by people with years of head start. That is the real answer to
  "should I go English": not "is there demand" but "is there a gap", and in
  English there is not an obvious one.
- **If he still wants to measure his own capture:** one English page for the
  one service that is location-independent, `/app-publishing` in English, is
  the smallest honest probe. One page is not an English site and needs none
  of the removed `/en` plumbing. Eight weeks of Search Console on that single
  URL is the measurement. Not this week.

**Verdict:** stay Hebrew, stop reading the country split as evidence, spend
ten minutes in Keyword Planner if the question keeps coming back.

## 5. This week, in order

Each item marked **him** (needs his login or his hand) or **session**.

1. **Decide the AI-crawler stance and flip the two Cloudflare switches, him,
   five minutes.** Zone `handinhandai.com`, Security, Settings: "Block AI
   bots" (also reachable as AI Crawl Control in the sidebar) and "Managed
   robots.txt". Recommendation: both off. Reason: the content strategy's
   stated goal is to be cited by AI answers; the training crawlers are what
   makes a model know a brand exists, and this is marketing copy with nothing
   to protect. Answer-time fetchers are already allowed, so this is about
   being known, not about being quoted. This is his call because it is his
   content; the default was never chosen, it was shipped.
2. **Homepage body link to `/app-publishing`, session, on the PR branch
   before merge.** Reason: the only regularly crawled page points at the new
   one; see 3.1.
3. **OG image for the page, him supplies, session wires.** Reason: the
   Facebook card is the launch ad; see 3.2.
4. **Switch the counter on, him, twenty minutes, `local/analytics/README.md`
   Phase 2.** Then open `/stats?k=...` once and confirm it answers. Reason:
   launch attribution; see section 2.
5. **Short redirects with campaign tags for the posts, session, two lines in
   `public/_redirects`.** Reason: without a source on the link the launch
   reads as "direct"; see section 2.
6. **Merge and deploy. Then Search Console: Request indexing for the new URL
   and confirm the sitemap is submitted, him, three minutes.** Reason: 3.3.
7. **Bing Webmaster Tools import, him, five minutes.** Reason: 3.4.
8. **WAF custom rule for scanner paths, him or a browser session with his
   Cloudflare login.** Reason: cleans the path list with zero crawler risk;
   see section 1. Optional; nothing depends on it.
9. **Rich Results Test on both pages, session in a browser, after deploy.**
   Reason: 3.5.
10. **Sitemap and `/articles/` noindex mismatch, session, with the article
    PR.** Reason: 3.6.

Not this week: Bot Fight Mode, any keyword decision from Search Console,
rank tracking, an English page, speed work before a PageSpeed run says so.

## 6. What is a waste in the proposal, and what is missing

**Waste.** Bot Fight Mode as a measurement fix: it is a security control that
does not clean the metric and can break the link previews. Reading
Cloudflare zone "visits" as visitors at all: the proposal's step 1 exists to
rescue a number that should simply be retired. "Do nothing about search":
right for keyword choice, wrong for the eight items in section 3 that need
no traffic.

**Missing, in order of value.**

1. **The AI-crawler block that is already on.** Enforced at the edge (403 to
   GPTBot, ClaudeBot, Bytespider) and advertised in a managed robots.txt that
   also tells `Google-Extended` no, which affects grounding in Gemini apps,
   the assistant on every Android phone in Israel. The proposal talks about
   switching a bot control on while the one that is on works against the
   strategy. Nobody decided this; it should be decided.
2. **The homepage body link.** The cheapest real ranking input available.
3. **The OG image for the launch channel.** Not SEO, but it is the first
   thing a reader sees.
4. **Request indexing and the sitemap submission check.** Free, three
   minutes, and the difference between days and weeks for a new URL.
5. **Bing.** Half the AI-answer world indexes through it.
6. **Campaign tags on posted links.** The counter is useless for attribution
   without them.
7. **Keyword Planner.** Three research rounds said it is the missing
   instrument; it is a ten-minute login, not a project.
8. **The sitemap listing a noindex page.** Small, but it is the kind of
   warning that makes a Search Console report look neglected.

## Sources checked today

- `curl -A <UA> https://handinhandai.com/` for the 19 user agents listed in
  the verdict section; status codes recorded verbatim.
- `https://handinhandai.com/robots.txt`, `sitemap-index.xml`, `sitemap-0.xml`,
  `/`, `/about/`, `/articles/`, `/app-publishing` (404 on `main`, expected).
- `origin/feat/issue-82-app-publishing-landing`:
  `src/pages/app-publishing.astro`, `src/components/home/HomeDocumentShell.astro`,
  `src/components/home/Footer.astro`, `src/data/app-publishing.ts`,
  `astro.config.mjs` (unchanged, so the page enters the sitemap).
- `functions/api/e.ts`, `functions/stats.ts`, `src/components/Analytics.astro`,
  `src/pages/privacy-sasha.astro` section 13, `local/analytics/README.md`.
- PageSpeed Insights API: refused with a daily quota error; no speed number
  is claimed anywhere above.
