# Search Console capability inventory and growth evidence — 2026-11-24

Job from Alex, 24 Nov: "check with the console what analysis can you do and
update skill for analysis. What can we learn? I need my goal to attach to
drive much more users to my account. So if publishing more skills will help,
I will do this." Read-only. Browser: Alex's own Brave, Claude extension,
signed in as the business account (`alexg@handinhandai.com`). No report
needed a login this session did not have. Full inventory and click paths
now live permanently in the `site-findability` skill at
`~/.claude/skills/site-findability/reference/console-capabilities.md` (§16
of `SKILL.md`) — this file carries only the evidence for today's decision.

## Part A — console inventory, in brief

| Report | What it answers | Data here today | Click path |
|---|---|---|---|
| Performance → Queries/Pages/Countries/Devices | Real clicks, impressions, CTR, position, sliceable 4 ways + filters + date compare | Thin but real: 6 clicks, 184 impressions, 3 months | Left nav → Performance |
| Performance → Generative AI features | Per-page impressions **inside** an AI Overview/AI Mode answer — a separate report, not a filter | 21 impressions, concentrated on 1 page | The "Open report" link under the Performance chart |
| Performance → Search appearance | Rich-result type breakdown (FAQ, review stars, etc.) | Empty — no data | Performance → Search appearance tab |
| Indexing → Pages | Why each URL isn't served, drill into examples | 16 indexed / 38 not (6 reasons, all triaged in the morning's report) | Left nav → Indexing → Pages |
| Indexing → Sitemaps | Sitemap read status, discovered-URL count | Success, 14 discovered | Left nav → Indexing → Sitemaps |
| Indexing → Removals | Outstanding removal requests | Empty, as expected | Left nav → Indexing → Removals |
| Experience → Core Web Vitals | Real-user speed data | No data — not enough Chrome traffic yet | Left nav → Experience → Core web vitals |
| Experience → HTTPS | HTTPS coverage | 10 indexed URLs, all HTTPS | Left nav → Experience → HTTPS |
| **Links** | Real backlinks (external) and internal-link counts | **Working, real data**: 44 external links (35 from facebook.com), 62 internal links | Left nav → Links |
| Settings → Associations | Linked Play developer account / Analytics | A Play developer account is already associated to this property | Settings → Associations |
| Settings → AI controls | Search-Console-side opt-in/out of Google's AI search features (distinct from the Cloudflare crawler switches) | Set to **Include** | Settings → AI controls |
| Settings → Crawl stats | Requests, bytes, response-code/purpose/host/Googlebot-type split | 541 requests/90 days, 81% 200, 15% 301, 4% 404, 89% Refresh vs 11% Discovery | Settings → Crawl stats → Open report |
| Insights | Blended summary (trending content, top queries, country-by-click) | Working, re-slices Performance data | Left nav → Insights |
| Discover, News | — | **Genuinely absent**, not misconfigured — this site has no feed/News-sitemap traffic pattern that would populate either | Checked via the Search-type dialog; neither appears |

**Useless right now, and why:** Search appearance (no rich-result types
recorded), Core Web Vitals (traffic too low), Discover/News (not applicable
to this site's content type). Everything else above has real, usable data
even at this property's small size.

## Part B — the skill is updated

`~/.claude/skills/site-findability/SKILL.md` gets a new §16 (added, nothing
rewritten) pointing to a new reference file,
`~/.claude/skills/site-findability/reference/console-capabilities.md`,
which carries the full inventory above plus:

- the exact click path and filters for every report;
- the handful of analyses worth running every time (position 5-20 pages;
  queries with impressions and no clicks, with the privacy-threshold
  caveat below; the Generative AI report as the cross-check for any
  citation claim; Links → external for traffic-source confirmation; Crawl
  stats → by purpose for discovery health);
- **the trap this session hit, named as an incident**: a live Google read
  from Alex's signed-in browser showed `freelancer-or-agency` ranking #2
  and AI-cited; Search Console's own 3-month data for that exact page shows
  1 lifetime impression and 0 recorded AI-feature impressions. The skill
  now states as a hard rule that a live ranking/citation read is never
  trusted alone — it must be corroborated by Search Console's own
  impressions for that page before being reported as real;
- when a `site-usage-review` figure (per-guide dwell, part-reach, GitHub
  download counts) has to sit alongside a console figure to mean anything:
  named explicitly for the "does a skill help a guide rank" question below,
  since Search Console has no visibility into GitHub's download counter at
  all — there is no mechanism for downloads to cause a ranking change, only
  the reverse.

## Part C — ranked evidence for "what will bring far more readers"

### 1. Queries with impressions but very few clicks

**Honest finding: this property is too young and too small for this
question to have a real answer at the query level today.** Search Console
lists only 10 distinct queries site-wide over 3 months (184 total
impressions), and Search Console's own privacy threshold hides rare
long-tail queries below a certain volume — meaning most of the 184
impressions are spread across queries too individually rare to be shown at
all, not that only these 10 exist. Of the 10 that are shown, exactly one
has real volume and zero clicks: **`koma`, 15 impressions, position 7.0** —
but this is the brand name of the `koma.handinhandai.com` subdomain
(a client login page), not a content opportunity; nobody is going to be won
over by rewriting anything for this "query." Nothing else on the list clears
more than 7 impressions, and all of it is a brand misspelling or garbled
keyboard text. **There is no real "shown but not clicked" opportunity
visible in Search Console's query data yet** — the page-level view below is
where the real signal is.

### 2. Pages sitting roughly 5 to 20 in position — the cheapest movement available

Nearly every published page on the site already sits in this exact band.
Full table, 3 months, ranked by impressions (the pages worth the most
attention first):

| Page | Impressions | Clicks | Position |
|---|---|---|---|
| `publish-app-to-stores` | 54 | 1 | 6.7 |
| `app-or-website` | 15 | 0 | 9.2 |
| `install-skill` | 15 | 0 | 8.1 |
| `web-app-to-store-shell` | 11 | 1 | 8.1 |
| `off-the-ai-builder` | 8 | 0 | 6.5 |
| `get-verified-for-whatsapp-cloud-api` | 6 | 0 | 9.5 |
| `site-app-without-signal` | 2 | 0 | 6.5 |
| `custom-vs-off-the-shelf-construction` | 1 | 0 | 11.0 |
| `freelancer-or-agency` | 1 | 0 | 2.0 (too thin to trust — 1 impression) |

**This is genuinely the single most useful number this console pull
produced.** Every published guide is already inside Google's results, in
the band where real movement (better headings, a stronger answer-first
paragraph, more internal links pointing at it, a fresher "last verified"
date) plausibly moves the needle in weeks, not months — none of them are
buried past position 20 or absent from the index. `publish-app-to-stores`
is both the most-shown and the one already proven to move (see §4) —
the template to repeat, not just the one exception.

### 3. Queries people search where there is NO page at all

**Search Console itself has no volume data for any of the ten planned
target phrases — this finding rests entirely on the live Hebrew Google
reads done this session and the morning's audit, not on console numbers,
and is stated that way deliberately.** The clearest case, confirmed live
today: **`האם צריך מק לאפליקציה`** (do you need a Mac to publish an app).
No Hebrew page answers it; Google's own AI Overview answers it correctly
citing only Reddit; a real competitor (`devoria.fr`) has newly moved into
this exact gap since the plan first named it (4 Nov) as the cleanest
opening of the whole programme. It is still unwritten three weeks later.

### 4. Does a skill attached to a guide measurably help?

| Guide | Carries a skill? | Impressions (3mo) | Position | AI-cited? | Guide age (days) |
|---|---|---|---|---|---|
| `publish-app-to-stores` | Yes (`store-publishing`) | 54 | 6.7 | **Yes — 15 AI-feature impressions** | 16 |
| `web-app-to-store-shell` | Yes, the **same** skill | 11 | 8.1 | No (0 AI-feature impressions) | 11 |
| `get-verified-for-whatsapp-cloud-api` | Yes (`meta-whatsapp-cloud-api`) | 6 | 9.5 | No | 16 |
| `app-or-website` | No | 15 | 9.2 | No | 20 |
| `off-the-ai-builder` | No | 8 | 6.5 | No | 20 |
| `freelancer-or-agency` | No | 1 (too thin) | 2.0 (too thin) | No | 20 |

**The evidence argues against the skill itself being why, and for the
subject.** The strongest proof is the pair that should be identical if a
skill were the cause: `web-app-to-store-shell` carries the **exact same**
downloadable skill as `publish-app-to-stores`, yet gets a fifth of the
impressions and no AI citation — the one real difference between them is
age (16 days vs 11) and that `publish-app-to-stores` answers the full,
broad "how do I publish to both stores" question while
`web-app-to-store-shell` answers a narrower follow-on question. Likewise
`get-verified-for-whatsapp-cloud-api` carries a skill and still underperforms
guides that carry none. And mechanically, Search Console has no visibility
into GitHub's download counter at all (confirmed: nothing in any report
here reads from or correlates with GitHub) — there is no channel by which
63 or 52 past downloads could feed back into Google's crawling or ranking
of these pages. Downloads can only be an effect of a guide already being
found, never a cause of it being found.

**What the evidence cannot settle:** the sample is 3 guides with a skill,
3 months, single-digit clicks across the board — far too small to prove
"skills never help." The honest answer is: **the subject and age explain
today's differences; a skill's own effect, if any, is too small to see yet
at this volume.** The smallest real test: once a second skill-free guide
reaches the same age (roughly 16+ days) as `publish-app-to-stores`, compare
the pair on impressions, position, and AI-citation the same way — if a
skill-carrying guide and a skill-free guide of matching age and similar
query-competitiveness still diverge this much, that would be real evidence
either way. Nothing here requires retrofitting a skill onto an existing
article to test it.

## Conclusion

The fastest way to multiply his readers is **publishing more guides on
queries that are provably open — starting with the Mac question — and
tightening the guides already sitting in the 5-to-20 position band**, not
publishing more downloadable skills. The one guide that is actually winning
today (`publish-app-to-stores`) wins because it answers a broad, real,
under-served question thoroughly, not because it has a skill attached —
its own twin with the identical skill is far behind it. Attaching a skill
costs little extra once a guide exists and is worth doing by the site's own
template (it gives a committed reader something concrete to do, and is the
only way download counts, a real downstream signal, get produced at all) —
but the evidence says it is second to the guide's subject and openness, not
the lever that multiplies readers on its own.
