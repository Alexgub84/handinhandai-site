# Keyword brief — "האם צריך מק לאפליקציה" (issue #85)

Gate 1 for the `do-you-need-a-mac` guide. The query was named the cleanest
opening of all ten in `docs/seo/content-programme-2026-11.md` (§71, line
120) and read live on the real Hebrew Google page twice: first on
2026-11-04 (`docs/seo/keyword-briefs-2026-11.md` §4) and again on
2026-11-24 during the findability audit. **This file does not repeat that
work — it records what the two dated reads say and what changed between
them.** Sources, both in this repo:

- `docs/seo/keyword-briefs-2026-11.md` §4 — the full live read, 2026-11-04.
- `docs/seo/2026-11-24-findability-audit.md` §3 — the re-read, 2026-11-24.
- `docs/seo/2026-11-24-console-capabilities-and-growth-evidence.md` §C3 —
  the same query, ranked as the clearest open gap on the whole site.

No live read was performed in this session's own browser: the two dated
reports above are 1 day old at the time of drafting, and the headless
browser servers failed to connect. The platform facts were checked
independently today — see `docs/seo/fact-check-do-you-need-a-mac.md`.

---

## Primary query

`האם צריך מק לאפליקציה`

## Secondary queries (from the 2026-11-04 read)

- `אפל דורשת מק לפרסום אפליקציה`
- `אין לי מק איך מעלים אפליקציה לאפסטור`
- `בניית אפליקציה בלי מק`
- `Mac in the cloud לפיתוח iOS`

## Questions the article must answer verbatim

Taken from the real threads, because Google rendered no "אנשים שאלו גם"
box on this query (2026-11-04):

- "האם אנחנו צריכים מק ייעודי כדי לפרסם את האפליקציה שלנו?"
- "האם אני צריך מק כדי לפרסם אפליקציות iOS?"
- "כדי לפתח אפליקציה לאייפון, והעלאה לחנות, חייב מק? או שיש [תחליף]?"
- "האם אני יכול לבנות אפליקציית iOS ב-Windows?"

## What the results page looks like

**Autocomplete (2026-11-04):** no recognition of the exact phrase at all
(the suggestions were about folding tefillin and formatting a MacBook).
Low-volume, long-tail phrasing — the demand is real but it is not a
high-volume head term, and the brief never claimed otherwise.

**AI Overview:** present, and it answers the question correctly (macOS
needed for a native iOS build; cross-platform frameworks still need macOS
to compile and sign; names Xcode and code signing). It cites **Reddit
only** — `r/dotnetMAUI` and `r/iOSProgramming`. No Hebrew source is cited.

**Organic page one (2026-11-04):** entirely forums. Reddit threads in
`r/iOSProgramming`, `r/dotnetMAUI` and `r/FlutterDev`; a one-day-old
Facebook post in the Israeli group Vibe Coding - Israel asking this exact
question; `lastartup.co.il` and `vadim.co.il` as tangential service pages;
`mobian.studio` with the right answer but buried as one FAQ row inside a
larger "how to build an iOS app" guide; `danielzrihen.co.il` on the
adjacent website-to-app topic.

**What changed by 2026-11-24:** a real competitor has entered. `devoria.fr`
("פרסום אפליקציית iOS בלי Mac", published 2026-10-09) now shows on this
exact query and **did not appear in the 2026-11-04 read**. The Facebook
post in Vibe Coding - Israel was still live and still unanswered. The
audit's own words: the field "is visibly narrowing while it waits."

## Verdict

**OPEN, narrowing.** No Hebrew page owns this question. The one competitor
that has moved in is 6 weeks old and is a general dev-blog page, not a
dedicated Hebrew answer for a business owner.

## The angle only this desk can take

Three things the forum answers and the AI overview all leave out:

1. **The question is three questions.** Publishing is building a file,
   uploading a file, and the console work around both. Only the first two
   touch macOS at all — the whole store listing, both privacy forms, the
   age rating, the EU trader declaration and the Submit-for-Review press
   happen in a browser on any operating system. Nobody on page one says
   this, and it is the part that decides whether a reader needs to buy
   hardware before starting.
2. **"You need a Mac" is now also a hardware-generation claim.** Apple's
   own Xcode listing requires a Mac with an M1 chip or later — an old
   Intel Mac in a drawer does not satisfy the requirement. The forum
   threads are 1 year old and predate that.
3. **A first-hand record of the cloud route actually working, and of what
   broke.** A signed iOS build really was produced with no local Xcode
   build, and two specific failures were hit on 2026-10-05 (an
   app-specific password refused by the developer portal; the
   non-interactive run refusing to create a first certificate). That
   record is in `docs/seo/capability-ledger.md` and the project's own
   store notes, and no competitor can bluff it.

## Risks

- The phrase is low-volume (autocomplete does not recognise it), so this
  page is a long-tail and AI-overview-citation play, not a traffic
  fire-hose. Judged worth it because the AI overview on this query
  currently cites only Reddit — a correct, dated, Hebrew page is the
  obvious candidate to be cited beside it.
- Half the facts are time-sensitive (an Xcode OS/chip requirement, two
  membership fees, a third-party build service's free tier). Every one of
  them is stated in the article with the date it was read, and
  `lastVerified` carries the same date.
