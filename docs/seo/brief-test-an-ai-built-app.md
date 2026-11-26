# Gate 1 — keyword brief: putting a working test suite on an app built with AI

Work order: none. This is guide 5 of the group-guides programme
(`docs/seo/2026-11-25-vibe-coding-programme.md`, the held-open slots), and
Alex ordered it directly on **2026-11-26**: he wants a skill and a guide for
tests, covering what belongs in an end-to-end test, dependency injection,
faking only the AI route while the database stays real and local, how a run
is actually started, and the phone app.

Slug: `test-an-ai-built-app`. `cluster: "decision"`,
`skill: "test-an-ai-built-app"`, `handoffAfter: "what-goes-in"`,
`offerService: false`, 7 declared `parts`.

## The subject, as ordered — and what it is NOT

**Not** "how to write unit tests" and not "testing best practices". Both
bring developers, both are taught in Hebrew and in English by courses and
training companies, and neither is the thing the reader actually said.

The reader's own sentence is the subject: *the app works, and every change
breaks something else.* `app-got-tangled` (guide 1 of batch 1) already
named that pain and listed four mechanisms behind it, one of which is
"there is no test that reveals a break at the moment it happens". That
guide points at the mechanism and does not teach it. **This guide is the
follow-through on that one mechanism**, which is why its first paragraph
cites that guide by name rather than re-telling its scene.

The reader is a person who built, or paid for, a working app in an AI tool
and has zero tests today. Not a QA engineer, not a developer choosing
between frameworks.

## Dates read, and who read them

- **No live Google read was made in this session.** The browser cannot be
  driven from here (Brave is Alex's and a session may not drive it; the
  headless server is not the browser this programme reads Google with).
  Every search finding below is a **reuse** of a dated read made in an
  earlier session, cited to the document that holds it. Nothing here is a
  fresh read of mine, and none of it is presented as one. **This is the one
  gate on this guide that is not satisfied** — the `primaryQuery` and
  `secondaryQueries` in the frontmatter are reasoned from the documents
  below and from the reader's own phrasing, not read off a results page.
  They should be checked against a live Hebrew read before anyone judges
  this guide's search performance.
- `docs/seo/2026-11-25-vibe-coding-demand-map.md` — 21 live Hebrew Google
  reads (`hl=he&gl=il`), **read 2026-11-25**. **Testing was not one of the
  21.** The two neighbouring entries are **#9**
  (`האפליקציה שלי הסתבכה מה עושים` — Google misreads "הסתבכה" as a phone
  freezing and returns consumer troubleshooting; recorded as *no audience
  under that phrasing*) and **#10**
  (`ארכיטקטורה נכונה לאפליקציה שנבנתה עם AI` — CROWDED on the technical
  term, with the note that **no competitor answers the felt, narrative
  version of this pain**).
- `docs/seo/fb-group-demand-2026-11.md` — the Facebook-group scan, **read
  2026-11-04**. The community evidence for the pain itself.
- `docs/seo/2026-11-26-tests-skill-map.md` — **read 2026-11-26**, this
  guide's substance source. Not a search document: a read of what Alex's
  own five production projects actually do about tests.

## What those dated reads support, and what they do not

**Supported.** The pain is the highest-engagement subject in the whole
Facebook scan (demand map #9: 37 reactions, 88 comments, the single
highest-engagement post found). The *narrative* framing of it is
unoccupied in Hebrew (demand map #10's explicit note). A runnable
procedure is exactly what the programme's skill test allows a skill on.

**Not supported, and stated as such.** Whether anybody searches Hebrew for
tests on an AI-built app at all. Demand map #9 is the cautionary case: a
real, high-engagement community question whose literal phrasing has no
matching Google intent, and #13 is a second one. Testing may be the same
shape — real demand in the room, no searchable door. The programme already
accepts that ("most of these guides will never rank, and that is
accepted: in the room they are credibility"), so this does not block the
guide; it does mean the guide must not be judged on impressions.

**Verdict: PROVISIONAL, written for the room, not for the results page.**
No CROWDED/OPEN call is made, because no call can honestly be made from a
read that was never done.

## The frontmatter fields, and where each came from

- `primaryQuery: "בדיקות אוטומטיות לאפליקציה שנבנתה עם AI"` — the owner's
  register (`בדיקות`), not the practitioner's (`טסטים`), on the pattern
  demand map #1 used for the security subject. Reasoned, not read.
- `secondaryQueries` — one in the practitioner's register
  (`איך כותבים טסטים לאפליקציה`), one in the reader's literal words
  (`כל שינוי שובר משהו אחר באפליקציה`, the phrasing the Facebook post
  itself used), one definitional (`בדיקה מקצה לקצה מה זה`), one on the
  AI angle (`איך בודקים קוד שה־AI כתב`). Reasoned, not read.
- `answersQuestions` — the five questions the body actually answers, in the
  shape a person asks them. These are **not** lifted from a live "אנשים
  שאלו גם" box, because none was read; they are the real questions the
  skill map and `app-got-tangled`'s own `answersQuestions` list record
  people asking, including that guide's verbatim
  "ניסיתי לבנות לבד וזה די נכשל, ואני רוצה להיכנס לעומק של ארכיטקטורה
  נכונה ובדיקות — מאיפה מתחילים?".

## Agreement with the skill, step for step

The guide must not teach a different order than the skill it hands over.
The mapping, stated so a later reader can check it:

| Skill step | Guide part |
|---|---|
| 1 read the project's state | diagram step 1 |
| 2 decide what the first test contains | `what-goes-in` |
| 3 make a suite exist, see it fail | diagram step 2, `how-it-runs` |
| 4 open one seam | `one-seam` |
| 5 fake the model | `fake-the-model` (first half) |
| 6 a real disposable database | `fake-the-model` (second half) |
| 7 the first end-to-end test, failing first | `what-goes-in`, diagram step 6 |
| 8 start the run so it cannot lie, + the 5 traps | `how-it-runs` |
| 9 the clock | `how-it-runs`, trap 4 |
| 10 the phone app | `phone` |
| 11 hand back, and the separate prompt-quality suite | `field-note`, last paragraph |

Steps 5 and 6 are one guide part on purpose: Alex's own framing named them
as one item ("the piece that talks to an AI model is faked while the
database stays real and local"), and the skill's own "shape, before the
steps" states them as rules 1 and 2 of the same three.

## Deliberate deviations from the article template

- **7 declared `parts`, not the 4-6 the `hebrew-article` skill asks for.**
  Alex named five must-cover topics; the why, and the first-hand note the
  template itself requires, make seven. Folding any one of them into
  another would make `/stats`'s per-part funnel lie about which topic a
  reader actually reached, which is the only reason that funnel exists.
  The build enforces no cap.
- **~2,700 Hebrew words, against the template's 1,200-1,800.** Seven parts
  instead of six, each carrying one of the topics Alex named, costs the
  extra length; the longest already-published guide
  (`terms-of-use-privacy-cost`) is ~2,100 on six parts, so this is about
  10% over a proportional budget and two trim passes were run before it
  stopped. What the rule actually protects is intact: the answer box
  carries the whole answer in the first screen, the diagram follows it,
  and the hand-off card sits ~680 words in — inside the first half, where
  the template requires the procedure to be.
- **No comparison table.** Every value in the natural table here (what goes
  in a test versus what stays out) is a full sentence, and a
  sentence-length value collapses to one word per line in the phone's
  stacked cards. Written as lists with short bold handles, per the rule the
  programme learned on 2026-11-25.
- **No shell command and no repository path inside `.art-term`.** The one
  command is referred to by its name only (`test`); the install command
  lines live in `SkillHandoff.astro`'s own `.skill-cmd` rows, which have
  the overflow handling the inline chip does not.

## What could not be established

- A live Hebrew Google read for any of this guide's queries. See above.
  This is the gate that is open.
- Whether `בדיקות` or `טסטים` is the register people actually type for
  this subject. Both are in the frontmatter; only a live read settles it.
- Any figure for how often an AI-built app breaks on change, or how often
  each of the five run-level traps occurs. The guide states plainly that
  no such number was found and invents none.
- How long the first test takes to put in place. Stated in the guide as
  depending entirely on whether the project has any seam and whether its
  database can run locally.
