# Announcement campaigns — what was published where, and when

Why this file is in the repo: `site-usage-review` reads the traffic numbers from
here, and a session asking "what caused the spike on this date" needs the answer
next to the numbers, not in someone's memory.

**What belongs here:** announcements Alex actually published — which surface,
which date, and which article they send people to. All of it describes posts
that already exist in public.

**What never belongs here:** the target research, the ranked list of groups with
their link tolerance and posting volume. That is a map of where Alex
self-promotes and how much each community will take, and this repo is public. It
lives on his Mac at `~/.claude/fb-group-posts/targets.tsv`.

## How reach is measured, proven on 2026-11-12

**By source plus landing page. No campaign tags are needed and none are added.**

The collector records the referring host, so a reader arriving from Facebook is
counted as Facebook whether or not anything was tagged. The review on 2026-11-12,
the day after the Meta-verification post, read:

| Source | Sessions |
|---|---|
| facebook | 26 |
| direct | 13 |
| facebook.com | 1 |

and the landing pages put 26 of those sessions on
`/articles/get-verified-for-whatsapp-cloud-api` — the exact article that post
was announcing. That is the whole measurement, and it needed nothing from Alex.

The same review's Campaigns section read **"No rows in this window"** even though
the link handed out in the replies carried `utm_campaign`. The tag added nothing
a tag was supposed to add. **Do not propose tagged links for these posts again.**
The recipe is: note the date the post went out, note which article it sends
people to, then read sessions-from-Facebook and sessions-landing-on-that-article
for the days after.

---

## 2026-11-19 — the store-publishing skill

Article: `/articles/publish-app-to-stores`. The post carries **no link**; it asks
for the comment `אני רוצה סקיל העלאת אפליקציות` and the link goes out in the
replies. Alex is answering those himself (his ruling, 2026-11-19).

| # | Facebook group | Members | Published | Verified |
|---|---|---|---|---|
| 1 | Vibe Coding - Israel | 53,509 | 2026-11-19 | yes, permalink recorded |
| 2 | קלוד קוד - הקבוצה הרשמית (private) | 46,109 | 2026-11-19 | yes, by its own text |
| 3 | קלוד קוד - Vibe coding בישראל | 14,633 | 2026-11-19 | yes, by its own text |
| 4 | AI Agents Israel | 41,113 | 2026-11-19 | yes, by its own text |

About 155,600 group memberships, which overlap heavily — an upper bound, not an
audience. Six more Israeli groups are still to come. The wider Hebrew AI groups
and the English groups are excluded by Alex's ruling.
קלוד - הקהילה הישראלית (117,069) is held: its rules need admin approval for
self-promotion.

**To measure it:** sessions from Facebook, and sessions landing on
`/articles/publish-app-to-stores`, from 2026-11-19 onward. Then the hand-off card
reach and the GitHub download count for the store-publishing asset, both of which
`/stats` already breaks out per guide.

Ledger, post text and picture: `~/.claude/fb-group-posts/store-skill/`.

---

## 2026-11-11 — the Meta business-verification skill

Article: `/articles/get-verified-for-whatsapp-cloud-api`. Same shape: no link in
the post, the link delivered in replies to commenters. Alex posted it by hand.

| Facebook group | Published | Post |
|---|---|---|
| קלוד קוד - הקבוצה הרשמית | 2026-11-11 | `/groups/claude.code.israel/posts/3805260966296474/` |

**What it produced,** read 2026-11-12, in the 2 days after the post: 52 visitors,
42 sessions, 27 of them from Facebook, and 26 landing directly on the article
being announced. 35 of the sessions were in Israel and 30 were on a phone. 17
sessions scrolled past 90% of the article and 19 stopped inside the first
quarter.

**The replies were the delivery.** 15 people commented; 14 were answered, 4 by
Alex and 10 by the replies runner. That campaign's ledger is at
`~/.claude/fb-replies/meta-verification-skill/`, and the write-up of how it went,
including the 12 faults that became rules, is
`~/.claude/fb-replies/review-2026-11-12.md`.

This is the only campaign with reach numbers attached. It is the benchmark the
store-skill campaign should be read against: 1 group, about 46,000 members, 26
readers on the article.
