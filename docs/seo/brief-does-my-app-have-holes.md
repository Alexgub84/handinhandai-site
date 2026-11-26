# Gate 1 — keyword brief: how a business owner finds out whether the app someone built them with AI has holes in it

Work order: none. This is guide 4 of the group-guides programme
(`docs/seo/2026-11-25-vibe-coding-programme.md`, the 7 held-open slots), and
Alex ordered it directly on **2026-11-26**: *"since last time, the way I'm
publishing, people go to my site... so it's good, and we need to see more
guides."* There is no GitHub issue behind it and none is to be created.

Slug: `does-my-app-have-holes`. `cluster: "decision"`, no `skill`, no
`handoffAfter`, `offerService: false`.

## The subject, as ruled — and what it is NOT

**Not** "how to run a security review". That subject brings developers, and
in Hebrew it is one of the most crowded fields in the whole demand map.
This guide is the inverse framing, the one `docs/seo/2026-11-24-collectivebrain-skills-research.md`
named when it looked at the `security-and-hardening` skill and asked who
could actually pay for the subject:

> "not 'here is a security skill' but 'how to tell whether the app someone
> built you with AI has holes you cannot see', with the skill handed to
> whoever built it, before the final invoice is paid. That is a different
> article from this skill's own pitch and would need its own keyword brief."

This is that brief. The reader is a person who paid for an app (or built it
themselves and now has real users) and wants to know whether their
customers' data is exposed and what to ask the person who built it. Not a
reviewer, not a developer, not an incident responder.

**It is first of the remaining subjects for one reason:** the Hebrew field
is held by a competing cast already (below), and the one unoccupied angle in
it is the owner's angle. A competitor circling the same angle takes it
cheaply; nobody else has to be beaten on the generic subject.

## Dates read, and who read them

- **No live Google read was made in this session.** The browser cannot be
  driven here (Brave is Alex's and a session may not drive it; the headless
  server is not the browser this programme reads Google with). Every search
  finding below is a **reuse** of a dated read made in an earlier session,
  cited to the document that holds it. Nothing here is a fresh read of mine,
  and none of it is presented as one.
- `docs/seo/2026-11-25-vibe-coding-demand-map.md` — 21 live Hebrew Google
  reads (`hl=he&gl=il`), **read 2026-11-25**. Entries **#1** (security of an
  AI-built app), **#2** (Supabase row-level security), **#3** (hacked app /
  incident response), **#4** (API key safety) are this subject's
  neighbourhood.
- `docs/seo/2026-11-24-collectivebrain-skills-research.md` — three Hebrew
  queries **read 2026-11-24**, listed verbatim below. This is the only
  document that tested the *owner's* phrasing rather than the practitioner's.
- `docs/seo/fb-group-demand-2026-11.md` — the Facebook-group scan, **read
  2026-11-04**. The community evidence.

## What those dated reads found

**`אבטחה לאפליקציה שנבנתה עם AI` (demand map #1, read 2026-11-25) —
CROWDED.** Three or more dedicated Hebrew guides (Melogix, Globalbit/Sasha
Feldman, compa.co.il), a paid-audit service (maordayan.com), plus Google
Codelabs. The AI overview cites Melogix, Globalbit and Google Codelabs.
Audience: both hobbyist and business owner. Verdict in the map: real demand,
door closed.

**`Row Level Security Supabase` (demand map #2, read 2026-11-25) —
CROWDED, with one incumbent owning the narrow angle.** elya-studio.com has
two dedicated pages including a free-consult CTA; Reddit and Supabase's own
docs rank; the AI overview cites Supabase docs, Reddit and אופיסנס.

**`האקר פרץ לאפליקציה שבניתי בוייב קודינג` (demand map #3, read
2026-11-25) — CROWDED, the heaviest volume of all 21.** Mainstream news
(YNET, mako), a 27-point checklist (eladamrani.ai), ESET's own guide,
bizportal.

**`API key מה זה ואיך שומרים אותו בטוח` (demand map #4, read 2026-11-25) —
CROWDED, foundational.** Sendy, Let's AI, operintel.com, OpenAI's Hebrew
help docs; the AI overview cites Google Cloud Docs and Let's AI.

**The three owner-phrased queries (read 2026-11-24, collectivebrain
research):**

- `בדיקת אבטחה לאפליקציה` — Android/Google documentation pages, one Israeli
  penetration-testing firm (madsec.co.il), and one Hebrew article at
  melogix.com specifically about the security of AI-built apps. The research
  calls melogix.com "close to the angle we would take".
- `אבטחת קוד מה זה code security review` — **zero Hebrew results.** All eight
  hits English (OWASP, NIST, Black Duck, Endor Labs, an Anthropic page).
- `האם האפליקציה שלי מאובטחת` — a Hebrew Reddit thread from a developer
  asking the same thing, Google's Hebrew Android pages, and one
  consumer-facing Israeli security blog. **Intent misfires toward consumer
  device security**, the same shape as demand map #9's phone-crash misread.

That research's own read of the field: *"a real but narrow gap, with one
competitor already walking into it. The gap exists because 'secure code
review' is an English-first developer term with no Hebrew phrasing a
business owner would type — so the thinness is partly a wording problem, not
purely absence of demand."*

## What this brief cannot establish

- **Whether any Hebrew phrasing an owner would actually type has usable
  volume.** The one tested (`האם האפליקציה שלי מאובטחת`, 2026-11-24) reaches
  consumer device security. The practitioner phrasings all have volume and
  all are taken. No third phrasing was tested, here or anywhere in the
  repo's research.
- **Whether the single named near-competitor (melogix.com) has since widened
  into the owner's angle.** Its page was seen once, 2026-11-24, from a
  results listing — not opened, not re-read, and not re-checked today.
- **Current ranking order for anything above.** Single-session reads, as the
  demand map itself warns. CROWDED calls are treated as directionally solid
  (several independent dated competitors is a strong signal regardless of
  order); the one near-OPEN call is provisional.

## The demand evidence that does hold

Community evidence, read 2026-11-04 (`fb-group-demand-2026-11.md`):

- *"בונה CRM למשרד עם Claude Code... בפנים נתוני לקוחות אמיתיים (שמות,
  טלפונים, פרטי נכסים). אני לא מתכוון להכניס אליה לקוח אחד לפני שאיש אבטחה
  אמיתי בדק אותה."* (1 reaction, 11 comments) — the exact reader: a business
  owner with real customer data in an AI-built product, who already knows he
  needs a check and does not know what the check is.
- *"אני מתעסק ב-Vibe Coding כרגע בצורה די חובבנית ומרגיש שאני קצת תקוע...
  רוצה להיכנס יותר לעומק של אבטחה... ארכיטקטורה נכונה, בדיקות"* (5
  reactions, 18 comments) — the self-builder version.

Two posts, both naming security unprompted, one of them with real client
data already in the product. Weaker than guide 1's 37/88, and it is the
honest size of the signal.

## What only this desk can argue

Every Hebrew incumbent found writes this subject as **security** — a
practitioner's field, addressed to someone who accepts that a review is a
thing you buy. Nobody found writes it as **what the person who paid can
check, and what they should ask**, with the honest limit stated: the
owner can only see the screen, and the hole sits behind it.

The one thing this guide carries that a generic page cannot: the
owner-side checks are grounded in what the stores and the data vendor
**document about themselves** — Apple guideline 1.6 and 5.1.1, Google
Play's user-data policy, Supabase's own key and row-level-security pages —
rather than in a claim about how insecure AI-built apps are. See
`docs/seo/fact-check-does-my-app-have-holes.md`.

## Verdict

**Search: CROWDED on every phrasing with confirmed volume; near-open only on
the owner's phrasing, which has no confirmed volume at all. Published
anyway**, on the settled strategy: these guides are written for the room,
and ranking is a bonus that probably will not arrive. The competitor
circling the angle is the reason for the order, not a ranking forecast.

**Recommended `primaryQuery`:** `איך לדעת אם האפליקציה שבנו לי מאובטחת`

The owner's own words, with the owner's own relationship in it ("they built
it for me") — the half that every practitioner phrasing drops. **Not read
live.** A declared target, labelled untested.

**Recommended `secondaryQueries`:**

- `אבטחה לאפליקציה שנבנתה עם AI` — read live 2026-11-25, **CROWDED** (demand
  map #1). Carried because it is the phrasing with confirmed intent match,
  even though the field is taken.
- `האם האפליקציה שלי מאובטחת` — read 2026-11-24, **misfires to consumer
  device security**. Carried as the recorded negative result so a later
  session starts from the finding instead of repeating the search.
- `בדיקת אבטחה לאפליקציה` — read 2026-11-24, Android docs plus one
  penetration-testing firm plus the one near-angle Hebrew competitor.
- `מה לשאול את מי שבנה לי אפליקציה` — **untested.** Written down so the
  attempt exists on paper before anyone makes it.

**Recommended `answersQuestions`** (from the two Facebook posts above, read
2026-11-04; no usable "אנשים שאלו גם" block was recorded for this subject
under any of the phrasings):

- "בפנים נתוני לקוחות אמיתיים — איך אני יודע שאף אחד לא יגיע אליהם?"
- "אני לא משיק לפני שאיש אבטחה אמיתי בדק את זה — מה הוא בכלל בודק?"
- "מה לשאול את מי שבנה לי את האפליקציה, לפני התשלום האחרון?"
- "מה אני יכול לבדוק לבד, בלי לדעת לקרוא קוד?"

## Hard limits on the writing, set before drafting

- **No invented vulnerability, statistic, breach figure or vendor
  behaviour.** No claim that AI-built apps are generally insecure — nothing
  in the repo supports it.
- **Nothing on the page teaches an attack.** Every check is on the reader's
  own product, said so explicitly.
- **No named product's real weakness**, ever. The vendor facts used are what
  the vendor documents as designed behaviour.
- **Where a claim depends on the stack, the page says so.**
- **No skill.** A decision guide for a non-technical reader; the programme's
  own test (runnable procedure, not a decision) excludes it.
