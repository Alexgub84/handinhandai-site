# Vibe-coding guide programme — 10 guides, 3 committed

Record, not a build input. Nothing here gates a build check. It exists so the
next 7 subjects have something written to be chosen against, instead of being
re-argued from memory.

Authorised by Alex directly on **2026-11-24**: *"I'll give you 10 guides... My
plan was to publish it on some Vibe Coders groups... there are businessmen
there who do some stuff for their businesses. So I want to attach them as a
professional."* There is no GitHub issue behind this batch, and none is to be
created for it.

Sources: `.claude/work-orders/group-guides-batch-1.md` (the ruled work order),
`docs/council/2026-11-25-vibe-coding-10-guides.md`,
`docs/council/2026-11-25-seo-strategy-fork.md`,
`docs/seo/2026-11-25-vibe-coding-demand-map.md` (21 live Hebrew Google reads,
2026-11-25), `docs/seo/fb-group-demand-2026-11.md` (the 2026-11-04 scan of the
Facebook group itself).

## The strategy, as ruled

- Subjects are chosen by demand **inside the Hebrew vibe-coding Facebook
  groups** where Alex posts. Google openness is a tiebreaker only.
- **Most of these guides will never rank, and that is accepted.** In the room
  they are credibility; the site's readers arrive from where he posts, not from
  search. The demand map's own meta-finding backs this: 18 of 21 tested
  subjects already carry multiple dated, competent Hebrew guides from a repeat
  cast of Israeli AI consultants.
- Only the first 3 subjects are committed. The remaining 7 are deliberately
  **not chosen yet** — the room's reaction to the first 3 decides them.
- **At most 1 of the 10 may carry a downloadable skill**, and only if it is a
  runnable procedure a reader executes, not a decision a reader makes. A skill
  attached to a decision guide is theatre and is forbidden. Never 2 of these
  first 3.
- **No hire-me pitch ever goes in the Facebook post.** Inside a guide it is 1
  bounded statement in its proper place — the existing closing hand-off
  (`GuideHandoffClosing.astro`), with its WhatsApp route and the
  `AiAnswersNote` disclosure, both imported, never re-typed.
- Three pull requests, one per guide. The point is sequenced learning, not a
  simultaneous launch.

## The 3 committed subjects, and why each

1. **`app-got-tangled` — the app a person built with AI has become tangled and
   they cannot move in it any more.** Demand map #9/#10. Chosen on community
   demand, explicitly not on search: the post behind it is the
   **highest-engagement post in the entire Facebook scan** (37 reactions, 88
   comments, 2026-11-04), while Google reads the reader's own phrasing as a
   phone crashing and the developer's phrasing is crowded by at least three
   dated Hebrew competitors. Full reasoning and the honest uncertainty:
   `docs/seo/brief-app-got-tangled.md`.
2. **`sell-an-ai-built-app` — selling or making money from an app built with
   AI.** Demand map #19, **the single open Google field found in Hebrew across
   all 21 reads**: no dedicated Hebrew competitor owns the "I built this, now
   how do I make it a real paying product" angle, and it is the exact audience
   crossover — a self-builder whose hobby project now has real users.
3. **`terms-of-use-privacy-cost` — what terms of use and a privacy policy
   really cost, and when a lawyer is genuinely needed.** Demand map #11. The
   group asks this constantly (two posts, 12r/24c and 3r/6c). Written honestly
   even though **the honest answer sends the reader to a lawyer, not to Alex** —
   it buys trust and completeness, and it must not promise a conversion into
   his own pipeline the way the app-publishing guides do. It is also the one
   guide in the batch making a priced factual claim, so it carries its own
   dated fact-check file.

## Why no guide in this batch carries a skill

`SkillHandoff.astro` can only point at a release that already resolves
(`skillAssetUrl()` in `src/data/skills.ts` composes a URL that must already
return 200), and cutting a new release is out of scope for this batch.

Of the three, guide 1's triage workflow is the only subject the strategy would
ever allow a skill on — it is a runnable procedure, not a decision. If it ships
at all it ships as its own later work order with its own release, once the
room's reaction to guide 1 earns it. Guide 2 is a decision about whether and
how to monetise; guide 3's honest answer is "go to a lawyer". A skill on either
is the theatre the strategy forbids. `src/data/skills.ts` is untouched by this
batch.

## The 7 held open

Not chosen, on purpose. The demand map's 21 entries are the shortlist they will
be chosen from, and its verdicts are the evidence. What decides them is the
room's reaction to the first 3, not this document.

Two things the map already settled, worth not re-discovering:

- **A recurring question in the group does not mean the Google door is open.**
  The Lovable/Base44 monthly-cost question recurs weekly in the group and is
  crowded by 8+ dedicated Hebrew comparison sites (#5). A clean mismatch.
- **Two high-engagement community questions have no searchable door at all** —
  the tangled-app phrasing (#9) and a Green Invoice clone (#13, 17r/83c).
  Guide 1 is published into that condition knowingly; #13 reads as a one-off
  curiosity and probably has no written-guide version worth building.

Three subjects, if chosen, argue against hiring Alex and should be entered with
that known: terms of use and privacy (#11, a lawyer's job), Israeli payment
processing (#12, pick the provider directly — though wiring one in is still a
real service), and learning vibe coding alone (#21, where the reader's stated
goal is needing nobody).

## What is measured, 30 days out

Three things, and search impressions are not one of them:

1. **Hand-logged group engagement** — reactions, comments and the shape of the
   replies on each Facebook post, logged by hand.
2. **The download counts the site already reads from release assets** —
   `functions/lib/github-releases.mjs` via `/stats`. For this batch that number
   is structurally zero: no guide here carries a skill. It stays on the list
   because a later guide in the ten may.
3. **Hire-adjacent conversations** — WhatsApp threads that start from a guide
   and reach a real problem of the reader's own.

Each guide's own `/stats` card still carries arrived, reached the sign-off,
clicked, the per-part funnel and the top referrer — that is this batch's 30-day
read, and it is why the `GUIDES` entries are added even with no skill behind
them.

Distribution is a separate, post-merge action: when a guide is actually posted
to a group, `docs/analytics/campaigns.md` records the date, the surface and the
tagged link, so a spike has its explanation sitting next to it.
