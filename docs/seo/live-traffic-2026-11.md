*This note predates the November content programme and is kept for reference.*

# Live traffic, 2026-11-04

Read-only pull from the three sources Alex already owns: Cloudflare zone
analytics, the site's own `/stats` visitor counter, and Google Search Console.
No setting was changed anywhere. Every number below carries its source and
its exact date window — never merge two sources into one figure.

## What is measurable today

- **Cloudflare zone analytics (`handinhandai.com`, Free plan)** — working.
  Longest window on the Free plan is 30 days.
- **Site's own `/stats` dashboard** — not set up. The D1 database, the
  binding, and both secrets were never created in Cloudflare. `/stats`
  answers `404` by design until they are.
- **Google Search Console** — working. Property `sc-domain:handinhandai.com`
  exists under the `alexg@handinhandai.com` Google account (signed in but not
  the browser's active profile — had to switch accounts to reach it). Data
  only goes back to **19 Oct 2026**, even with the longest available window
  (16 months) selected — the property was verified roughly two weeks ago, so
  there is no older data to show, not a tool limitation.

## Who is reaching the site

**Cloudflare zone analytics, last 30 days (6 Oct – 4 Nov 2026):**
- Total requests: `55.5k`. Total visits (Cloudflare's own visit metric): `22.21k`. Pageviews: `23.62k`.
- Cache hit rate `3.73%`, 5xx error rate `0.00%`.
- Top countries by pageviews: France `3.14k`, Australia `3.08k`, United States `2.97k`, India `2.69k`, Belgium `1.53k`, Japan `1.17k`, Poland `1.14k`, Korea `1.08k`, Germany `960`. Israel does not appear in the top 9.
- Device split: Desktop `22.08k`, Mobile `1.42k`, Tablet `120`.
- Browsers: `Unknown/Others` `11.86k`, Chrome `6.29k`, **Curl `2.34k`**, MobileSafari `760`, Edge `690`, **GoogleBot `660`**, Firefox `320`.
- Top user agents: `None` (empty) `7.4k`, `curl/8.7.1` `2.34k`, then ordinary browser strings in the hundreds.
- **This is not a human-traffic count.** The "Top paths" list for the same
  window is dominated by exploit-scanner probes, not real pages: `/:8000`,
  `/mapi/`, `/payment/stripe.json`, `/_astro/pages/index.astro.mjs.map`,
  `/.git/COMMIT_EDITMSG`, `/database.sql`, `/manager/html`,
  `/alfa-rex.php7` (a known PHP-webshell-scanner signature). `/` itself only
  drew `2.76k` of the `23.62k` pageviews. Cloudflare's own Security Overview
  confirms **Bot Fight Mode is off** and flags it as an open action item, so
  nothing here separates bot from human automatically — the scanner traffic
  above was read directly out of the path and user-agent lists, not a bot
  score.
- No referrer breakdown exists in this product on the Free plan (the
  Requests and Visitors tabs end at "Top data centers" with no referrer
  panel).

**Site's own `/stats`:** no data — not set up (see below).

**Google Search Console, all available data (19 Oct – 1 Nov 2026, ~2 weeks):**
- Total impressions: `33`. Total clicks: `0`. Average position: `4.9`.
- Countries by impressions: **Israel `24`**, United States `8`, Spain `1`.
- Devices: Desktop `21` impressions, Mobile `12`.
- Top pages by impressions: `/` (`23`), `/terms/` (`10`), `/privacy-sasha/`
  (`10`), `koma.handinhandai.com/` (`6`), `/about/` (`4`).

## What they searched

Search Console shows only two queries with any impressions in its whole
(two-week) history:
- `כו/ץבםצ` — `0` clicks, `7` impressions, average position `7.0`. This
  string is not a real word; it reads like Hebrew text typed while the
  keyboard was on the wrong layout (a Latin-letter query mapped through a
  Hebrew keymap). It is the closest thing to a "real" query in the data and
  it is not usable as evidence of search intent.
- `koma` — `0` clicks, `2` impressions, average position `8.0`.

That is the entire query list. There are no other Hebrew (or English)
queries on record. This is a real finding, not a gap: with only `33` total
impressions in two weeks, the property simply has not accumulated enough
search activity yet to show intent.

## Countries and languages

- Search Console (the one source that reflects real search users, not
  scanners) puts Israel at `24` of `33` impressions (~73%) — the only source
  with real signal on this question, and it supports staying Hebrew-first.
- Cloudflare's raw edge traffic is not usable for this question: its top
  countries (France, Australia, US, India, Belgium, Japan, Poland, Korea)
  track scanner infrastructure, not readers, as shown by the top-paths
  evidence above.
- Two weeks and 33 impressions is a thin base. This supports "stay
  Hebrew-only for now," not "Hebrew-only is confirmed correct long-term" —
  that needs more weeks of Search Console data.

## What can be improved, ranked

**Free and immediate:**
1. Turn on Cloudflare **Bot Fight Mode** (flagged as an open action item in
   the Security Overview, zero cost on the Free plan). Today's analytics
   cannot separate a real visitor from `alfa-rex.php7` scanner noise —
   every traffic number on the site is inflated by an unknown, possibly
   large amount until this is on.
2. Finish the `/stats` setup already built and merged
   (`functions/api/e.ts`, `functions/stats.ts`, `db/analytics-schema.sql`):
   create the `hih-analytics` D1 database, bind `ANALYTICS_DB`, add
   `ANALYTICS_SALT` and `STATS_TOKEN` (or Cloudflare Access) to Production —
   steps are already written out in `local/analytics/README.md` Phase 2.
   Until this is done there is no first-party, bot-free visitor count at
   all.

**Needs a decision (more data first):**
3. Wait for more Search Console weeks before concluding anything about which
   Hebrew terms to target — `33` impressions and `2` distinct queries is too
   small a sample to write content against.

## What is still unmeasurable, and what it would take

- **Real bot-vs-human split** — needs either Bot Fight Mode (free, one
  click, see above) or paid Bot Management for a bot score on every
  request; neither is on today.
- **Referrer sources** (which sites/platforms send readers) — not available
  in Cloudflare's Free-plan zone analytics at all; would need Cloudflare Web
  Analytics (the separate client-side beacon product, not yet enabled) or
  the site's own `/stats` once it is live, which already tracks sections,
  scroll depth and CTA clicks first-party.
- **Real Hebrew query volume and intent** — Search Console only has two
  weeks of data. It will fill in on its own; nothing to set up, just wait
  and re-pull in a month.
- **`/stats` sections/scroll-depth/CTA data** — needs the Phase 2 setup
  above done in the Cloudflare dashboard (Alex has to do this himself: it
  is account-level dashboard clicks, not a code change).
