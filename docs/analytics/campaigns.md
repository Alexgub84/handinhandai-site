# Announcement campaigns — what was published where, and when

Why this file is in the repo: `site-usage-review` reads the traffic numbers
from here, and a session six months from now asking "what caused the spike on
this date" needs the answer next to the numbers, not in someone's memory.

**What belongs here:** the record of announcements Alex actually published —
which surface, which date, how many people it was in front of, and the tagged
link that was handed out. All of it describes posts that already exist in
public.

**What never belongs here:** the target research — the ranked list of groups
with their link tolerance and posting volume. That is a map of where Alex
self-promotes and how much each community will take, and this repo is public.
It lives on his Mac at `~/.claude/fb-group-posts/targets.tsv`.

---

## 2026-11-19 — `store-skill`

Announcing the public `store-publishing` skill. Article behind it:
`/articles/publish-app-to-stores`.

The post carries **no link**. It asks the reader to comment
`אני רוצה סקיל העלאת אפליקציות`, and the link goes out in the replies. Alex is
answering those himself (his ruling, 2026-11-19).

**The tagged link to hand out in replies:**

```
https://handinhandai.com/articles/publish-app-to-stores?utm_source=facebook&utm_medium=group&utm_campaign=store-skill
```

The same link for everybody. `/stats` reads `utm_source` and `utm_campaign`, so
this is what makes the campaign show up as a row instead of as anonymous
facebook referrals. `utm_content` is NOT read by the dashboard today, so a
per-group variant buys nothing and is not worth managing.

| # | Facebook group | Members | Published | Verified |
|---|---|---|---|---|
| 1 | Vibe Coding - Israel | 53,509 | 2026-11-19 | yes, permalink recorded |
| 2 | קלוד קוד - הקבוצה הרשמית (private) | 46,109 | 2026-11-19 | yes, by its own text |
| 3 | קלוד קוד - Vibe coding בישראל | 14,633 | 2026-11-19 | yes, by its own text |
| 4 | AI Agents Israel | 41,113 | 2026-11-19 | yes, by its own text |

Reach in front of: about 155,600 group memberships, which overlap heavily —
treat it as an upper bound, not an audience.

Six more Israeli groups are queued. The wider Hebrew AI groups and the English
groups are excluded by Alex's ruling. קלוד - הקהילה הישראלית (117,069) is held
because its rules require admin approval for self-promotion.

Full ledger, the post text and the picture:
`~/.claude/fb-group-posts/store-skill/` on his Mac.

### What to look for in the numbers

- Sessions with `utm_campaign=store-skill`, by day, from 2026-11-19 on.
- Whether they reach the skill hand-off card on the article, and whether they
  click through to the GitHub download.
- The GitHub release download count for the store-publishing asset, which
  `/stats` already sums per guide.

### The attribution gap, stated plainly

Every reply that goes out with a bare `handinhandai.com` link instead of the
tagged one above is invisible to this campaign — it lands in the numbers as an
untagged Facebook referral and cannot be told apart from any other Facebook
traffic. There is no way to recover it afterwards.
