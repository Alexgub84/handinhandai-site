# Research: six skills listed on collectivebrain.de — are any worth a Hebrew guide?

Read and written 2026-11-24. Read-only research. Nothing was built, copied,
installed or published. No issue, ticket or Linear card was created.

Alex sent six pages on collectivebrain.de and asked whether we can learn from
them, mirror or adapt any of them, and pair them with Hebrew guides the way the
published guides pair a Hebrew article with a downloadable skill.

## What collectivebrain.de actually is

A Hamburg AI-consulting agency (with WhiteFox Automations) running a curated
directory of other people's Claude skills. It writes its own review page per
skill, states the upstream author and licence, and says plainly on each page
"We do not host a copy: updates come straight from the author." For two of the
six it serves a shortened, repackaged copy of the skill file with its own
credit line appended, and asks users to credit Collective Brain. It is a
lead-generation surface for their own custom-skill consulting. It authored none
of the six.

Caveat on its numbers: the pages quote GitHub star counts in the 118,000 to
315,000 range and install counts in the tens or hundreds of thousands. Those
figures were not independently verified in this research and several look
implausibly high. Do not reuse them anywhere.

## The six, one block each

### 1. security-and-hardening

What it does: makes Claude think like a security reviewer before and while
writing web-app code — build a threat model first (trust boundaries, assets,
STRIDE, abuse cases), then enforce concrete fixes (parameterised queries,
bcrypt/argon2, cookie flags, SSRF allowlists, dependency-audit triage, secrets
handling) with a TypeScript pattern reference.

For: developers and dev teams shipping web apps with logins, forms, uploads,
webhooks or payment data. Nothing a business owner operates directly.

Upstream: Addy Osmani — https://github.com/addyosmani/agent-skills, folder
`skills/security-and-hardening`. Osmani is ex-Google (Chrome DevEx), O'Reilly
author, and since Sept 2026 at Anthropic. Repo actively maintained.

Licence: MIT, copyright (c) 2025 Addy Osmani, read from the LICENSE file at
the repo root. Redistribution allowed. Modification allowed. Attribution
required (the copyright and permission notice must travel with any copy or
substantial portion). Commercial use unrestricted.

Already available: partly. Claude Code ships a built-in `/security-review`
command (Anthropic's own, from `anthropics/claude-code-security-review`) — one
command, no install, in every Claude Code install. Osmani's skill is a more
rigorous method layered on top of that baseline, not something otherwise
unavailable.

Hebrew field (read 2026-11-24): thin, not empty. "בדיקת אבטחה לאפליקציה"
returns Android/Google documentation pages, one Israeli penetration-testing
firm (madsec.co.il), and one Hebrew article at melogix.com specifically about
the security of AI-built apps — close to the angle we would take. "אבטחת קוד
מה זה code security review" returned zero Hebrew results; all eight hits were
English (OWASP, NIST, Black Duck, Endor Labs, an Anthropic page on
`/security-review`). "האם האפליקציה שלי מאובטחת" returned a Hebrew Reddit
thread from a developer asking the same thing, Google's Hebrew Android pages,
and one consumer-facing Israeli security blog.

Read: a real but narrow gap, with one competitor already walking into it. The
gap exists because "secure code review" is an English-first developer term
with no Hebrew phrasing a business owner would type — so the thinness is
partly a wording problem, not purely absence of demand.

Audience: as the skill pitches itself, developers. The one framing that could
reach a paying owner is the inverse: not "here is a security skill" but "how
to tell whether the app someone built you with AI has holes you cannot see",
with the skill handed to whoever built it, before the final invoice is paid.
That is a different article from this skill's own pitch and would need its own
keyword brief.

### 2. mattpocock-tdd

What it does: makes Claude agree which public interfaces to test, then run one
red-green cycle at a time (one failing test, minimum code to pass), mock only
at system boundaries, and defer refactoring to a separate stage.

For: developers and engineering teams. Nothing a non-coder would ever invoke.

Upstream: Matt Pocock — https://github.com/mattpocock/skills, skill at
`skills/engineering/tdd/SKILL.md`. Same repo already installed in Alex's own
Claude setup.

Licence: MIT, copyright (c) 2026 Matt Pocock, read from the LICENSE file.
Redistribution allowed, modification allowed, attribution required (notice
travels with copies), commercial use unrestricted.

Already available: completely. One command for anyone
(`npx skills add mattpocock/skills --skill tdd`, or
`claude plugin install mattpocock-skills@claude-plugins-official` from Claude
Code's official marketplace), and already installed and firing in Alex's own
setup. Covered in English on at least four sites plus YouTube.

Hebrew field (read 2026-11-24): the narrow TDD query space is thin and
English-dominated — Hebrew Wikipedia's "פיתוח מונחה-בדיקות" ranks, then IBM,
Martin Fowler, Agile Alliance, CircleCI. One Hebrew blog (natshah.com) already
covers TDD with AI agents. The adjacent query "בדיקות קוד אוטומטיות למפתחים"
is crowded with Hebrew content, but from QA-automation agencies and
recruitment sites, not consultants.

Read: thin for the right reason. The only people who search this in Hebrew are
developers, engineering managers and QA professionals.

Audience: developers, entirely. A business owner does not care how the
contractor's tests are structured.

### 3. ponytail

What it does: a pack of skills that keeps Claude's edits to the smallest
complete change, plus a diff reviewer, a whole-repo audit, a ledger of
deliberately deferred shortcuts, a benchmark display, and a terse reply mode.
Three working levels (lite, default, ultra).

For: developers already running an AI coding agent against a real repository.

Upstream: DietrichGebert — https://github.com/DietrichGebert/ponytail, with
its own site at ponytail.dev. Active: 372 commits, last change three days
before this research, external contributors.

Licence: MIT, copyright (c) 2026 DietrichGebert, read from the LICENSE file.
Redistribution allowed, modification allowed, attribution required in the
technical sense (notice in copies), commercial use unrestricted.

Already available: yes, and not obscure at all — this was the surprise. One
command (`/plugin marketplace add DietrichGebert/ponytail` then
`/plugin install ponytail@ponytail`, or `npx skills add dietrichgebert/ponytail`),
its own marketing site, Hacker News coverage, two dev.to posts, Medium,
several YouTube videos, listed in "Awesome Claude Code Plugins: Top 100". Not
bundled with Claude Code (third party), but widely known in English.

Hebrew field (read 2026-11-24): "ponytail" by name returns zero Hebrew
results — every hit is the English ecosystem. The adjacent Hebrew query space
("כתיבת קוד מינימלי בעזרת סוכן AI קלוד קוד") has general Claude Code intro
guides (eilon.co, avilevi.co.il, smartup.co.il, Bar-Ilan's hi-tech school) but
nothing on the lean-diff angle. A Hebrew-tagged Reddit post points at a
competing Israeli-made MIT project (`amragl/codebase-review`) doing automated
code review with Claude, plus a Hebrew blog (almaya.ai) on a
builder/verifier/reviewer workflow.

Read: no audience signal. The zero is not untapped demand — the people who
would ever search this are embedded in English-language developer culture and
research in English by default.

Audience: developers who install the free skill and leave. The whole value
proposition (smaller diffs, token benchmarks, shortcut ledgers, repo audits)
is meaningless to a non-technical owner.

### 4. code-review-and-quality

What it does: reviews a diff or pull request in a fixed order — purpose and
tests first, then the code — scoring against five criteria (correctness,
security, performance, readability, architecture), proposing named
restructurings, with change-size guidance and commit-message rules.

For: developers and teams who review pull requests, including reviewing code
written by AI agents.

Upstream: Addy Osmani again — https://github.com/addyosmani/agent-skills,
folder `skills/code-review-and-quality`. Note three distinct things share this
purpose and are not the same code: Osmani's skill (this one), Anthropic's
built-in `/code-review` (alias `/review`) inside Claude Code, and Matt
Pocock's own `code-review` skill in `mattpocock/skills`.

Licence: MIT, copyright (c) 2025 Addy Osmani, same LICENSE file as #1. Same
permissions: redistribute, modify, attribution notice travels with copies,
commercial use explicitly permitted.

Already available: yes. Claude Code ships `/code-review` built in — reviews
the current diff or a named PR, branch or path, with effort levels and a cloud
multi-agent mode, zero install, counted against normal usage. Osmani's skill
is a refinement on top of a free built-in feature.

Hebrew field (read 2026-11-24): Hebrew content exists for the generic concept
— Hebrew Wikipedia's "סקר קוד (code review)", then Hebrew developer blogs
aimed at juniors preparing for peer review (algoritmim.co.il, geektime.co.il,
havermi.co.il), plus English reference sites. For the AI angle: mostly English
product pages (CodeRabbit, Greptile, Augment), one Hebrew Google codelab on
Gemini-based review, one Hebrew YouTube interview with Qodo's founder. Nothing
Hebrew teaches an AI code-review workflow. The term itself stays English even
inside Hebrew titles.

Read: no open opportunity. The thinness reflects an audience comfortable
reading this in English from the source, plus generic coverage already present
in Hebrew.

Audience: developers. An owner does not read diffs or install CLI skills.

### 5. anthropic-frontend-design

What it does: makes the agent commit to a written design direction (tone, type
pairing, colour tokens, layout idea) before generating code, then build a
single HTML/CSS or React file against it, explicitly avoiding the generic
AI-interface tells (purple gradients, identical card rows, emoji icons).

For: by collectivebrain's own words, "designers, UX designers, marketing
freelancers with a web focus" — plus frontend developers. Judging its output
needs exactly the taste a business owner is trying to outsource.

Upstream: Anthropic. Confirmed directly in this research by fetching
`https://raw.githubusercontent.com/anthropics/skills/main/skills/frontend-design/LICENSE.txt`
(HTTP 200, full Apache-2.0 text) — collectivebrain's own citation of
`anthropics/skills` as the source is correct and current, not out of date.
It is also distributed as a first-party plugin via Anthropic's own
marketplace at claude.com/marketplace/plugins/frontend-design
(`/plugin install frontend-design@anthropics/claude-code`), so the same skill
reaches users through two official Anthropic channels at once.

Licence: Apache 2.0, confirmed by reading the LICENSE.txt file itself (same
file as mcp-builder below, same publisher). Redistribution allowed including
commercially; modification allowed, provided changed files carry a notice
saying so; attribution required — retain the copyright, patent and attribution
notices, and reproduce any NOTICE file's contents; Section 6 separately
reserves Anthropic's trade names and marks — copying the skill text is fine,
presenting a copy as if Anthropic endorses or co-branded the page is not.

Already available: yes, trivially, with no collectivebrain involvement —
`/plugin install frontend-design@claude-plugins-official`, or `/plugin` then
Discover inside Claude Code, or the marketplace page. It activates
automatically once installed. Collectivebrain's own add is a shortened copy of
the file with its credit line appended.

Hebrew field (read 2026-11-24): "עיצוב ממשק עם AI" returns general UX/AI
design content (itayalon.com, Shenkar, generic explainers), nothing on this
subject. "בניית אתר עם קלוד" is the live one — Hebrew YouTube tutorials and
courses ("קורס קלוד קוד — איך לבנות אתר מבלי לדעת קוד"), a TikTok reel
("קלוד הרג מעצבי אתרים"), an Instagram reel, Claude's own Academy page. All
video and social, no written article. "frontend design AI בעברית" returns zero
Hebrew results.

Read: for this narrow named skill, no search term exists in Hebrew. For the
adjacent subject — building a whole site with Claude, and getting output that
does not look generic — there is a real and visible Hebrew audience, consuming
video, pulled by "you no longer need a web designer".

Audience: designers and developers. Worse, there is a conflict with Alex's own
rule: his standing practice is that no visual change ships without going
through design review first, after a hand-made hero broke the homepage. This
skill's method is the opposite — decide the direction inside the coding
session and write the code. Publishing a guide that teaches the shortcut he
does not take himself would need addressing in the article, not glossed over.

### 6. mcp-builder

What it does: walks the agent through designing, building and evaluating an
MCP server — the backend that exposes an external system or API as tools an AI
can call — in Python (FastMCP) or TypeScript.

For: developers building AI integrations. It assumes the reader writes schemas
and runs a build toolchain. No non-technical on-ramp at all.

Upstream: Anthropic —
https://github.com/anthropics/skills/tree/main/skills/mcp-builder. Actively
maintained by Anthropic engineers.

Licence: Apache 2.0 (the skill's own `LICENSE.txt`, copyright 2026 Anthropic
PBC). Redistribution allowed, modification and derivative works allowed,
attribution required (retain notices, carry forward NOTICE content, mark
modified files as changed), commercial use unrestricted, patent grant
included, no warranty.

Already available: yes — a top-level example skill in Anthropic's own repo,
one command in Claude Code (`/plugin marketplace add anthropics/skills`, then
`/plugin install example-skills@anthropic-agent-skills`), plus listed on at
least four third-party catalogues. No sign-up, no payment.

Hebrew field (read 2026-11-24): "MCP server מה זה" is thin but not empty —
רן בר-זיק's internet-israel.com has a plain-language explainer with code,
Hebrew Wikipedia has "פרוטוקול הקשר מודל", plus spiritt.ai, a Hebrew YouTube
video, and a Geektime piece. "לבנות שרת MCP" is English-dominated
(modelcontextprotocol.io, YouTube, Medium) with only two Hebrew developer
blogs. "Model Context Protocol בעברית" is the best-covered: Hebrew Wikipedia
first, plus a dedicated Hebrew guide site (agentskills.co.il).

The telling query is the business-framed one, "לחבר AI למערכת שלי": the
results are all sales pages from Israeli automation agencies offering exactly
this as a service — effilo.co.il ("מה זה MCP? חיבור סוכן AI ל-monday, Make
וג'ימייל"), spiritt.ai, flowmatic-automation.com, stsiconic.com. Not
tutorials. Competitors selling the work.

Read: the DIY angle has no Hebrew market, because no non-developer wants to
build an MCP server. The business-framed demand is real and already contested
by service providers — and that is a service page, not an article with a
downloadable developer skill attached.

## Ranked shortlist

Worth a Hebrew guide, in order:

1. **security-and-hardening, but only rewritten for the person paying for the
   app.** Title angle: how to tell whether the app someone built you with AI
   has holes you cannot see; the skill is what you hand to whoever built it,
   before you pay the final invoice. This is the only one of the six where a
   worried business owner plausibly becomes a client. It needs its own keyword
   brief, read off the real Hebrew results page, and it has one competitor
   already in the lane (melogix.com). The upstream skill is MIT and may be
   redistributed with attribution.

2. **Nothing else from this list, as a skill guide.** The one genuinely live
   Hebrew audience the research found is next door to #5 and is not a skill
   guide at all: "בניית אתר עם קלוד" — building a site with Claude without
   knowing how to code — currently served only by video and social, with no
   written Hebrew article. That is a separate brief worth considering on its
   own merits, not a mirror of any of these six.

Drop: mattpocock-tdd (developers only; already installed in his own setup and
one command for anyone). ponytail (famous in English, zero Hebrew audience,
pure developer tooling). code-review-and-quality (refinement on a free
built-in Claude Code command; developer workflow). anthropic-frontend-design
(designer and developer audience, no Hebrew search term, and its method
contradicts Alex's own design-review rule). mcp-builder (deeply technical DIY
angle with no owner demand; the owner-framed version is a service page
competing with automation agencies, not an article).

## Legality, separately

May be mirrored or adapted with attribution:

- security-and-hardening — MIT (Addy Osmani)
- code-review-and-quality — MIT (Addy Osmani)
- mattpocock-tdd — MIT (Matt Pocock)
- ponytail — MIT (DietrichGebert)
- mcp-builder — Apache 2.0 (Anthropic)
- anthropic-frontend-design — Apache 2.0 (Anthropic)

All six are therefore legally mirrorable. MIT requires the copyright and
permission notice to travel with any copy or substantial portion. Apache 2.0
additionally requires marking modified files as changed and carrying forward
any NOTICE content. None of the six forbids commercial use, and none requires
a public byline beyond keeping the notice inside the file.

Two cautions that are not licence questions. First, redistributing someone
else's skill is a different act from releasing one of ours, and the existing
publishing routine assumes the latter — a mirrored skill would need the
upstream notice carried in the file and the author named on the page.
Second, collectivebrain's own shortened copies ask for a Collective Brain
credit; there is no reason to go through them for anything, since every
upstream is public, free and one command away.

Third, specific to the two Anthropic-authored skills (anthropic-frontend-design,
mcp-builder): their Apache-2.0 licence separately reserves Anthropic's own
trade names and marks (its Section 6). Copying and translating the skill text
with plain factual credit ("source: Anthropic, github.com/anthropics/skills")
stays inside that licence. Presenting either page in a way that implies
Anthropic co-branded or endorsed it would not.
