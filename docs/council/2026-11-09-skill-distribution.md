# Council: skill-distribution

- Date: 2026-11-09
- Cwd: `/Users/alexguberman/Projects/handinhandai-site`
- Seats: openai/gpt-6.1-sol, google/gemini-4-argon, x-ai/grok-4.7, moonshotai/kimi-k3
- Chairman: the calling Claude session

## Brief

Decide the distribution strategy for two public Claude skills that are handed to readers of Hebrew teaching articles on handinhandai.com.

SITUATION. We publish Hebrew guides that teach a subject (getting an app into Google Play and the App Store; getting a business verified with Meta and onto the official WhatsApp Cloud API) and hand the reader the same procedure as an installable skill. The skills live in a public GitHub repo, Alexgub84/claude-skills, laid out as a Claude Code plugin marketplace (.claude-plugin/marketplace.json + plugin.json + skills/<name>/SKILL.md). Installed with: /plugin marketplace add Alexgub84/claude-skills

THE AUDIENCE IS THE CRUX. Readers are Israeli business owners and small-shop developers reading in Hebrew. Most do not have Claude Code installed. Many will only ever use Claude in a browser. If the hand-off only works for Claude Code users, the guides promise something most readers cannot do.

VERIFIED FACTS, all read live in a browser on 2026-11-09:
- Our current layout matches Anthropic's documented plugin and marketplace schema exactly, field by field. marketplace.json requires name, owner, and plugins[] each with name and source; plugin.json requires only name; skills/ is the default scan location. Nothing is wrong with what we built.
- SKILL.md is now an open cross-agent standard, not Claude-only: agentskills.io, governed under LF Projects, adopted by Cursor, OpenCode, Gemini CLI, GitHub Copilot, VS Code, ChatGPT and Codex, Amp, Goose, JetBrains Junie and others. Anthropic's own help pages point authors to that neutral spec.
- claude.ai in a browser supports custom skills TODAY on every plan including Free: Customize > Skills > Create skill > Upload a skill, as a ZIP whose root is the skill folder. Requires code execution enabled. The Mac desktop app can also record a skill from a screen demonstration.
- npm is a fetch layer, not an artifact registry, for this. The Vercel Labs `skills` CLI (npx skills add owner/repo) had 18.2 million downloads in the last 30 days and supports 75+ agents; it reads SKILL.md folders out of GitHub repos. Publishing each skill as its own npm package is a fringe experiment, not a convention.
- Anthropic's own curated marketplace repo (anthropics/claude-plugins-official, ~50 plugins) does NOT accept public submissions. The real public route is the Directory portal at claude.ai/directory/manage: needs a public GitHub repo, a paid plan, automated validation and a security scan, and can be held for human review. A listing reaches claude.ai, Cowork and Claude Code.
- Discoverability that exists: claude.com/marketplace (2,000+ entries), skills.sh with a real install leaderboard driven by the npx skills CLI, ComposioHQ/awesome-claude-skills (79k stars), travisvn/awesome-claude-skills.

THE FORK. Which distribution shape do we commit to, given the audience above, a one-person business, and a hard requirement that whatever we promise in a Hebrew guide must actually work for the person reading it?
A. Keep the plugin repo only. Cheapest, reaches Claude Code users, leaves most readers out.
B. Keep the plugin wrapper AND make each skills/<name>/ folder independently valid against the plain agentskills.io spec; list on skills.sh via the npx skills convention and submit to the two awesome-lists. Reaches the Cursor/Copilot/Codex/Gemini audience.
C. B plus submit to Anthropic's Directory portal for claude.ai discoverability, accepting a review cycle.
D. B plus host a downloadable ZIP of each skill on handinhandai.com itself, so a Hebrew reader on claude.ai can upload it in three clicks without GitHub, npm or a terminal. The guide then teaches the three clicks.
E. Something none of us has thought of.

CONSTRAINTS AND COSTS THAT MATTER. One person maintains this. Every extra distribution route is another copy that can drift from the private source skill it was rewritten from. The skills carry dated "last walked against the real console" lines, so staleness in front of strangers is a live risk. The guides must not become advertisements; the hand-off is a gift, not a funnel. We have no appetite for a maintenance burden that outlives our interest in the subject.

WHAT A GOOD ANSWER LOOKS LIKE. A clear pick, the reasoning, the risks, and what you would refuse. Not a survey.

QUESTIONS.
1. Which option, and why, for THIS audience rather than for a general developer audience?
2. What is the honest failure mode of hosting our own ZIP: version drift, a reader installing a stale copy, or something worse we have not named?
3. Is there a way to make one artifact serve every route so there is only ever one copy to keep current? If so, what exactly is the artifact and what generates the rest?
4. What should the Hebrew guide actually tell a non-technical reader so the instruction stays true in six months when these interfaces have changed?
5. What would you refuse to do here, and why?


## Attachments

none

## Round 1: answers

### D = openai/gpt-6.1-sol

## Recommendation: D, with one publishing pipeline—not several maintained copies

Keep the plugin wrapper, make both skill folders valid against the open Agent Skills specification, and provide **a direct ZIP download beside each Hebrew guide**. Treat developer discovery under B as secondary, low-effort distribution—not the main hand-off.

Do **not** make Directory approval a prerequisite. For this audience, the decisive route is:

**Read the Hebrew guide → download the skill → upload it in Claude’s browser interface.**

The other routes serve readers who already use developer tools. They do not solve your central promise to ordinary business owners.

### 1. Why D for this audience

The website download removes GitHub, npm, terminals, and Claude Code from the reader’s critical path. It also keeps the hand-off where trust already exists: beside the article that explains the procedure.

Keep the marketplace because it already works and costs little to preserve. Support the open format because that prevents unnecessary lock-in. But put those installation instructions under **“Already using a coding agent?”**, not above the browser instructions.

Submitting to the awesome-lists is reasonable once. Do not create an ongoing promotion project. Directory submission can wait until you have evidence that readers want it; it is discoverability, not a prerequisite for delivering the gift.

### 2. The honest failure mode of your own ZIP

**Hosting is not the main risk. A downloaded skill is a snapshot with no guaranteed update channel.** Even if your website always serves the newest release, yesterday’s download can remain installed indefinitely.

There are three distinct risks:

- **Publishing drift:** the website ZIP differs from the repository. Automation can largely eliminate this.
- **Installed-copy staleness:** the reader keeps an old version. Automation on your side cannot eliminate this.
- **Confident procedural error:** an outdated skill gives authoritative instructions involving business verification, account permissions, payments, or app submission. That is more serious than a broken menu path.

There is also a supply-chain boundary: users are trusting instructions and possibly executable resources you distribute. For these procedural guides, prefer instruction-only packages unless code is genuinely necessary. Never ask readers to paste passwords, access tokens, or identity documents into the conversation.

A dated “last walked” line is useful, but it is **not an expiry mechanism**. The skill should explicitly pause when the real console differs materially and require confirmation before consequential changes or submissions.

### 3. One source of truth, generated distribution artifacts

You cannot make one literal file simultaneously be an unpacked marketplace repository and an uploadable ZIP. You **can** maintain one authoritative source and generate every delivery format.

Use this structure:

```text
skills/
  app-store-publishing/
    SKILL.md
    references/       # only if needed
  whatsapp-cloud-api/
    SKILL.md
    references/
.claude-plugin/
  marketplace.json
```

Keep the existing valid plugin arrangement. A release workflow should:

1. Validate each skill against the open specification and validate the plugin metadata.
2. Package each skill as a ZIP containing its top-level skill folder.
3. Publish immutable, versioned release assets.
4. Deploy those exact ZIP bytes to handinhandai.com, with a stable download link pointing to the current release.
5. Generate the displayed version, last-walked date, and source link from the same release metadata.

Test both ZIP upload and marketplace installation before publishing changes to packaging.

**Important:** if the private original remains independently maintained, you still have two sources. For these public skills, make the public skill authoritative after rewriting. Any later private-source changes become explicitly reviewed inputs—not an invisible upstream you promise to mirror.

### 4. What the Hebrew guide should actually say

Use a dated, task-oriented instruction—not an eternal promise about button labels:

> **הורדת המיומנות ל-Claude**  
> המיומנות היא עותק של התהליך במדריך, לשימוש בתוך Claude. היא אינה מבצעת אימות או פרסום אוטומטית, ואינה מבטיחה אישור של החשבון או האפליקציה.
>
> 1. הורידו את קובץ ה-ZIP — אין צורך לחלץ אותו.  
> 2. ב-Claude בדפדפן, פתחו את אזור המיומנויות ובחרו בהעלאת מיומנות. בבדיקה האחרונה המסלול היה: **Customize → Skills → Create skill → Upload a skill**. נדרשת הפעלת הרצת קוד.  
> 3. העלו את הקובץ והפעילו את המיומנות.
>
> נבדק לאחרונה: **[תאריך]**. אם האפשרות אינה מופיעה, בדקו בעזרה הרשמית של Claude כיצד מעלים מיומנות מותאמת אישית. אפשר לבצע את התהליך גם בעזרת המדריך הזה, ללא התקנת המיומנות.
>
> עותק שכבר התקנתם אינו מתעדכן אוטומטית. לפני שימוש חוזר, בדקו כאן אם פורסמה גרסה חדשה. אם מסך בפועל שונה מההוראות, עצרו ובדקו לפני המשך הפעולה.

Link “official help” to the relevant documentation. Do not promise “three clicks,” universal account availability forever, or installation success in six months. Promise a downloadable package, a tested route **as of a stated date**, and a usable article fallback.

### 5. What I would refuse

- **Claude Code as the only hand-off:** wrong audience.
- **Separate npm packages:** another release surface without a reader benefit.
- **Hand-edited website ZIPs:** avoidable drift.
- **Directory approval as a launch dependency:** unnecessary external gate.
- **“Always current” claims or indefinite maintenance commitments:** incompatible with a one-person, interest-bounded project.
- **A mandatory email signup:** turns the gift into a funnel.
- **Keeping a known-broken download prominent:** when maintenance stops, mark it archived and remove the recommendation to install it.

The governing rule is simple: **maintain one public source, generate the packages, and promise only what you can verify—not perpetual freshness.**

### B = google/gemini-4-argon

### 1. The Pick: A Modified Option D (Option E)

Commit to **Option B + Automated GitHub Release ZIPs** linked directly from your Hebrew articles. Do not manually host ZIP files on handinhandai.com, and do not pursue global English discoverability.

**Why for THIS audience:**
Your readers fall into two buckets: Israeli business owners (browser-only, non-technical, allergic to GitHub/terminals) and small-shop Israeli developers (living in Cursor, VS Code, or Claude Code). 
* **The business owner** needs a blue button inside the Hebrew article that downloads a `.zip` file they can immediately drag into claude.ai. If you send them to a GitHub repo Page, you lose 90% of them.
* **The small-shop developer** wants a one-liner they can paste into their terminal (`npx skills add Alexgub84/claude-skills` or `/plugin marketplace add Alexgub84/claude-skills`). 

Keeping your existing repo layout alongside the plain `agentskills.io` spec satisfies both developer camps with zero extra files, while the direct ZIP link satisfies the browser majority.

---

### 2. The Honest Failure Mode of Hosting Your Own ZIP

If you manually build and upload ZIPs to handinhandai.com, version drift is annoying, but the worse failure mode has three parts:

1. **macOS Archive Corruption (Immediate breakage):** If you compress the folder via macOS Finder, it injects `__MACOSX` metadata and `.DS_Store` files, or nests the root folder incorrectly. Strict web uploaders like claude.ai's skill parser regularly choke on these or fail to find `SKILL.md` at the expected root depth.
2. **Browser Unpacking Trap:** Safari on macOS defaults to "Open safe files after downloading." A business owner clicks your ZIP link, Safari silently unzips it into a regular folder in `~/Downloads`, and when the reader tries to upload it to claude.ai, the file picker grays it out because it wants a `.zip` archive, not a directory.
3. **Immutable Stale Copies on User Accounts:** Once a user uploads a ZIP to claude.ai, it is permanently decoupled from your repo. Six months later, when Meta changes its WhatsApp Business Manager UI, that user's uploaded skill will hallucinate dead instructions, and they have no update mechanism.

---

### 3. One Artifact to Serve Every Route

**The Single Source of Truth:** The `skills/<name>/` directories inside `Alexgub84/claude-skills`, written strictly to the neutral `agentskills.io` spec, wrapped by your root `.claude-plugin/marketplace.json`.

**What Generates the Rest:** A 15-line GitHub Action (`.github/workflows/release-zips.yml`) triggered on `push` to `main`.
* Whenever you edit a `SKILL.md`, the Action runs `zip -r <name>.zip <name>/ -x ".*"` inside the `skills/` directory (ensuring exact root folder structure and zero OS junk files).
* It force-updates a single rolling GitHub Release tagged `latest`.
* **Your website never hosts a file.** Your articles on handinhandai.com link directly to the static GitHub release asset URL: `https://github.com/Alexgub84/claude-skills/releases/latest/download/whatsapp-cloud-api.zip`.

Now, one `git push` simultaneously updates:
1. Claude Code (`/plugin marketplace...`)
2. Cursor / Copilot / Codex (`npx skills add...`)
3. The direct-download ZIP on handinhandai.com.

---

### 4. Future-Proofing the Hebrew Guide Instructions

Web UIs change navigation trees constantly ("Customize > Skills" will move within six months). To keep your prose true without rewriting articles:

1. **Decouple the UI path from the article:** Do not write click-by-click UI paths in the article body. Instead, use a single reusable snippet/shortcode at the bottom of your guides, or describe the *destination* rather than the path:
   > *"הורידו את קובץ ה-ZIP מכאן (אל תחלצו אותו). בחשבון ה-Claude שלכם בדפדפן, פתחו את הגדרות ההתאמה האישית (Customize / Settings), גשו ללשונית היכולות (Skills), והעלו את הקובץ. ודאו שהרצת קוד (Code Execution) מופעלת."*
   > *(Download the ZIP from here—do not unzip it. In your browser Claude account, open Customize/Settings, go to the Skills tab, and upload the file. Ensure Code Execution is enabled.)*
2. **Add an inline "Paste Fallback":** Give browser readers an escape hatch that is 100% immune to UI changes: *"לא מוצאים את כפתור העלאת ה-Skills? פתחו את קובץ הטקסט שבתוך ה-ZIP, ופשוט הדביקו אותו כהודעה הראשונה בשיחה רגילה עם Claude."* (Can't find the Skills upload button? Open the text file inside the ZIP and just paste it as the first message in a normal chat.)
3. **Bake expiration self-awareness into `SKILL.md`:** Since uploaded ZIPs never auto-update, add an instruction at the top of `SKILL.md` addressed to the LLM: *"This procedure was verified on [Date]. Before guiding the user, state this verification date in Hebrew and tell them to check handinhandai.com/[slug] for a newer file if the Meta/Google console looks different."*

---

### 5. What I Would Refuse to Do

1. **Refuse Option C (Anthropic's Directory Portal):** Do not submit to `claude.ai/directory/manage`. Waiting on automated security scans and human review queues turns a 2-minute typo fix into a bureaucratic ticket. You are a solo operator; never put a third-party review gate between you and your own content updates.
2. **Refuse PRs to English `awesome-claude-skills` lists:** Your skills are domain-specific workflows paired with Hebrew teaching guides. Chasing global GitHub stars on `ComposioHQ` or `travisvn` will bring zero Israeli business owners to your site, but it *will* attract random English-speaking GitHub users opening issues and complaining when Google or Meta changes a button. You want high utility for your readers, not strangers auditing your staleness. Keep discoverability strictly inside your articles.

### A = x-ai/grok-4.7

**Pick D, built so the ZIP is not a second copy.** The Hebrew guide’s promise is a file the reader already has Claude open to receive. A, B, and C all fail that reader.

### Why this audience, not developers
The person in the article is an Israeli owner or small-shop dev in a browser, usually without Claude Code, GitHub, or a terminal. A only serves the minority who already installed Claude Code. B serves Cursor, Copilot, Codex, and Gemini users — still not this reader. C puts you in a directory they will not be browsing, behind a paid plan and a review queue you do not control; a listing is not a hand-off from the article.

D is the only shape where the sentence in the guide is something that reader can do: download one file, upload it where Claude asks for a skill. B’s layout is necessary underneath that, not instead of it. Do not put marketplace commands, `npx`, or the Directory in the Hebrew guide.

### One artifact
The only authored copy is `skills/<name>/` in `Alexgub84/claude-skills`, valid as an agentskills.io folder and already the plugin scan target.

On each tag, one script zips that folder so the zip root is the skill folder, and attaches it to the GitHub release. The article links to that release asset (a stable redirect on the site may point at it; the redirect is a pointer, not a copy). `marketplace.json` points at the same folders. `npx skills add` reads the same repo. Nothing else is written by hand.

### Failure mode of “our own ZIP”
Drift between a CMS file and the repo is the obvious, solvable bug. The worse one is not a second stale file. A convenient zip makes a non-technical reader confidently run console steps that no longer match Play Console, App Store Connect, or Meta. They will not diff the skill. They will get stuck, or submit the wrong business details, on the strength of your packaging.

Next to that: if the site itself stores the zip, a compromised site becomes a skill uploaded into Claude with code execution on. Prefer GitHub as the byte host. Also do not promise that Free, code execution, or the upload control still exist in six months.

### What the guide should say
Lead with the date the steps were last walked against the real console, in Hebrew. Tell them: if that date is old, or the screen does not match, stop; do not improvise a verification or a store submission. The article is the procedure; the file is the same procedure for Claude.

Then: download the file from this link; in Claude’s settings, find custom skills and upload it; turn on code execution if asked. You do not need GitHub, npm, or Claude Code. Labels move — if the control is gone, use Claude’s current help for uploading a skill, or just follow the article. As of that walk date, upload worked on claude.ai including Free. Do not say it always will. No screenshots as the only instructions.

### Refuse
- A second hand-edited skill per channel, including a zip saved into the CMS.
- npm packages.
- Claude Code install steps, awesome-lists, skills.sh, or the Directory as anything the guide depends on. Directory is optional later, and only if a paid plan is already something you keep for other reasons — not a listing you must renew to keep the articles honest.
- A skill that fetches “the latest steps” at runtime. That is a silent update during a Meta or store submission, and a supply chain you cannot explain to this reader.
- Undated skills, and any funnel, account, or custom installer around the file.

### C = moonshotai/kimi-k3

## Recommendation

**D, exactly as scoped — and decline C.** The B-layer is already paid for: your plugin layout nests spec-valid skill folders, so "make each folder agentskills.io-valid" costs nothing, and the listings are one-time PRs that *point at* the repo rather than copy it. But the deciding fact is the audience: a Hebrew reader on claude.ai in a browser, no terminal, no GitHub account. D is the only route that works for that person **today**, with zero dependency on Anthropic's review queue, an npm ecosystem, or a third party's uptime. C solves a problem you don't have — discovery by strangers. Your guide *is* the discovery mechanism. Don't take on a review-gated, paid-plan-gated dependency for it.

One precision inside the pick: promise claude.ai and Claude Code explicitly. Spec-validity in Cursor/Copilot/Codex is best-effort — you won't test 75 agents, so the guide must not claim it.

## 1. Why D for this audience

The hard requirement — "the guide's promise must work for the person reading it" — eliminates A outright. B serves developers, who are the minority of your readers and who can already find a GitHub repo. D inverts the dependency: instead of the reader adapting to the artifact (install Claude Code, learn npm), the artifact adapts to the reader (three clicks in a browser they already have open). The guide then teaches the clicks, which is a thing you can write in Hebrew and screenshot.

## 2. Honest failure modes of the self-hosted ZIP

- **Drift** — real, but fully solved by generation (Q3). Only exists if a human ever builds the ZIP by hand.
- **Stale install with real-world consequences** — worse here than for a typical skill. These walk readers through Play Console review and Meta business verification. A walkthrough that's four months stale doesn't just confuse; it can sink an app submission or jam a verification, and the reader blames *you*, in Hebrew, in public. The "last walked" date must be visible **before** install — in the filename and next to the download link — not buried inside SKILL.md.
- **The one you haven't named: silent abandonment.** A ZIP on a marketing site has no commit history, no issues, no stars — no freshness signal at all. It will outlive your interest (you said this plainly) and keep getting installed by strangers for years. A GitHub repo at least looks abandoned; a download link looks fine forever. Mitigation: date-stamped filename, an explicit "if this date is more than ~6 months old, treat as a map, not instructions" line, and the willingness to 404 it.
- **A second unnamed risk: habituation.** You're training non-technical users to download packages from websites and upload them into an AI with code execution enabled. Fine from you; a bad reflex generally. Keep the ZIP byte-identical to the public repo folder and say so, so the cautious reader can inspect it.

## 3. One artifact, everything derived

**The artifact is the `skills/<name>/` folder in the public repo**, valid against plain agentskills.io, with `version` and `last-walked` date in the frontmatter. Everything else is generated or pointed:

- Claude Code plugin route → repo as-is (done).
- `npx skills` / skills.sh → reads the same folder (done by listing).
- ZIP → a GitHub Action triggered on pushes to `skills/<name>/**` that zips the folder and attaches it to a per-skill release (`skill-name-v1.3-2026-11-09.zip`). handinhandai.com links the release asset or mirrors it via the same CI. **No hand-built ZIP ever exists.**
- Awesome-lists, and eventually the Directory → pointers at the repo.

One edit in one folder propagates everywhere. Version bump and release tag happen in the same commit.

## 4. What the Hebrew guide should say

Three layers, in order:

1. **Concept, not clicks:** "Claude in the browser lets you add a *skill* — a file that teaches it a procedure. Ours is here." Concepts survive UI redesigns; click-paths don't.
2. **The click-path lives on one maintained install page** on handinhandai.com (including "make sure code execution is enabled"), clearly dated ("נכון לנובמבר 2026"), and every guide links to it. When Anthropic moves the menu — they will — you fix one page, not N articles.
3. **A fallback that cannot rot:** "If any step fails, copy the procedure from this article into the chat and tell Claude to follow it." The article is the permanent artifact; the skill is a convenience. This sentence stays true as long as claude.ai accepts text.

## 5. What I'd refuse

- **Refuse C for now.** Review-gated, paid-plan-gated, solves discovery you don't need. Revisit only if the skills survive a year of active maintenance — durability is the signal that listing is worth it.
- **Refuse npm-per-skill.** You already know it's fringe.
- **Refuse any second hand-maintained copy** — no pasting the procedure into Project templates, no separate Hebrew/English skill forks. If CI can't generate it from the folder, it doesn't ship.
- **Refuse to let the article depend on the skill.** If the ZIP 404s tomorrow, the guide must still fully deliver. The skill is a gift, not load-bearing.
- **Refuse to keep a stale artifact up.** A 404 with an explanation beats a rotting walkthrough inside someone's Meta verification flow. The sunset line is part of the product.

## Round 2: rankings

| Reviewer | Ranking (best to worst) |
|---|---|
| openai/gpt-6.1-sol | D: Best audience-focused recommendation, with a precise generated-release pipeline, installed-copy staleness and security risks, honest Hebrew instructions, and explicit maintenance boundaries.; A: Strong, concise source-of-truth and browser-first strategy with sensible refusals; slightly overstates why Directory distribution fails and GitHub hosting improves security.; C: Useful centralized instructions and sunset policy, but assumes existing spec compliance, suggests potentially invalid top-level metadata, and overstates fallback reliability.; B: Practical direct-download approach, but unsupported parser claims, rolling-release fragility, implied automatic installed updates, and an allegedly UI-proof paste fallback weaken correctness. |
| google/gemini-4-argon | B: Most practical and technically sharp answer: identifies real-world macOS/Safari ZIP pitfalls, provides the exact GitHub release URL pattern for zero-hosting overhead, writes actual Hebrew copy, and astutely rejects English awesome-lists to avoid support burden.; D: Strong, well-structured response that provides full, well-written Hebrew instructions and correctly notes the upstream drift risk between the private source skill and the public repo.; C: Very well-reasoned on silent abandonment, date-stamped filenames, and centralizing the install instructions on a single page, though it lacks actual Hebrew copy for the guide.; A: Correct and concise across all five questions, including the security risk of CMS-hosted ZIPs and runtime fetching, but thinner on concrete implementation details than the others. |
| x-ai/grok-4.7 | D: Clearest D-for-this-audience decision: separates publish drift from installed staleness and harmful console advice, generates every route from one public source, and gives dated Hebrew instructions plus calibrated refusals.; C: Best long-horizon fit—silent abandonment, a single dated install page, and a 404 sunset—but slightly looser on hosting a second copy and overclaims that spec-valid folders are already free.; A: Tight and correct on GitHub-as-bytes, site compromise, and no runtime skill updates, yet thinner on private-source drift, the six-month editorial system, and what the guide should literally say.; B: Useful macOS/Safari zip pitfalls and GitHub release links, but undermined by a mutable latest release, a paste-the-skill fallback that conflicts with its own advice, and invented audience stats. |
| moonshotai/kimi-k3 | C: Best answers the crux questions: names the truly unnamed failure modes (silent abandonment with no freshness signal, habituation risk), the most durable guide architecture (concept first, one dated central install page, unrottable paste fallback), and principled 'skill is a gift, not load-bearing' refusals.; D: Most complete deliverable with ready-to-use Hebrew guide text, rigorous three-part risk taxonomy, and uniquely resolves the private-source drift constraint by making the public skill authoritative; slightly less durable Q4 architecture than C.; B: Strong practical specificity (GitHub release asset URLs, zip hygiene, Safari unzip trap, paste-fallback, SKILL.md self-dating), but failure-mode answer is tactical rather than strategic and it ignores the private-source drift constraint.; A: Correct, sharp, and hits every question with good instincts (GitHub as byte host, refuse runtime-fetching skills), but thinnest on implementation detail and guide text, offering principles where others give usable artifacts. |

| Model | Label | Points | Mean position |
|---|---|---|---|
| openai/gpt-6.1-sol | D | 14 | 1.50 |
| moonshotai/kimi-k3 | C | 11 | 2.25 |
| google/gemini-4-argon | B | 8 | 3.00 |
| x-ai/grok-4.7 | A | 7 | 3.25 |

## Cost

| Seat | Prompt tokens | Completion tokens | USD |
|---|---|---|---|
| openai/gpt-6.1-sol | 7031 | 1615 | 0.0337 |
| google/gemini-4-argon | 7375 | 1624 | 0.0310 |
| x-ai/grok-4.7 | 9586 | 10012 | 0.0650 |
| moonshotai/kimi-k3 | 7358 | 8328 | 0.1072 |
| Total | 31350 | 21579 | 0.2369 |

## Trace

Trace: `/Users/alexguberman/.claude/council/logs/2026-11-09-skill-distribution.jsonl`

| Seat | Round | Response ID | Status | Latency (ms) |
|---|---|---|---|---|
| google/gemini-4-argon | 1 | gen-1794229486-ncG94yEy2MOIijPGWfmz | 200 | 32431 |
| openai/gpt-6.1-sol | 1 | gen-1794229486-sK1a51yBK0LHfH9gafzL | 200 | 39027 |
| moonshotai/kimi-k3 | 1 | gen-1794229486-xwuuaOuv1P4TfEdubGio | 200 | 74608 |
| x-ai/grok-4.7 | 1 | gen-1794229610-B6A7usn1uomkcLKdXSzV | 200 | 84019 |
| openai/gpt-6.1-sol | 2 | gen-1794229694-hQxIh8HN7u4csewSJ4WY | 200 | 7183 |
| google/gemini-4-argon | 2 | gen-1794229694-dtW0DS4aAAWolSRtRPhU | 200 | 7897 |
| moonshotai/kimi-k3 | 2 | gen-1794229694-ytecihFIgF61ENdqK4Si | 200 | 39154 |
| x-ai/grok-4.7 | 2 | gen-1794229818-VL8CylyoLC6iHU33Ka47 | 200 | 110118 |

## Synthesis

**Agreement.** All four seats picked D, and three of them picked it for the same
reason: the reader is the deciding fact. A Hebrew-reading business owner with no
terminal and no GitHub account cannot use any route except a downloadable package
uploaded into Claude in the browser. They also agreed, unprompted and unanimously,
that the ZIP must never be a hand-made second copy: it is generated from the repo
by a release workflow, or it is drift waiting to happen. Three of the four said
plainly that the real danger is not hosting but TIME: a downloaded skill is a
snapshot with no update channel, so a reader can be running last season's console
instructions forever while our page shows the current ones. Two independently named
the failure nobody had named, silent abandonment: the day we stop walking these
consoles, nothing on the page tells a stranger that, and a dated line that stopped
moving looks exactly like a dated line that is still true. All four refused the
Anthropic Directory as a launch dependency, and all four refused any promise of
perpetual freshness.

**Disagreements.** Where the bytes live: one seat would deploy the exact ZIP bytes
onto handinhandai.com behind a stable link, another would link the GitHub release
asset directly and host nothing, arguing the site is the softer target and the
extra copy buys nothing. Two seats would skip the English-language awesome-lists
entirely, on the grounds that listings bring English-speaking strangers who then
ask us for support in a language and a context we did not sign up for; the other
two treated the listings as free. One seat wanted the install steps on a single
dated page that every guide links to, rather than repeated inside each guide, so
that one edit fixes every article when the interface changes; the others wrote the
steps into the guide itself.

**Recommendation.** D, with the single-source rule enforced by machinery rather
than by discipline. The authoritative artifact is the `skills/<name>/` folder in
the public repo, valid against the neutral specification on its own, with the
version and the last-walked date in its own front matter. A release workflow
validates it, packages each skill, and publishes immutable versioned release
assets. The guide links the release asset directly: GitHub serves the bytes, our
site hosts no copy, and there is exactly one thing to keep current. The public
skill becomes authoritative in its own right; the private skill it was rewritten
from is a reviewed input from here on, never an upstream we silently mirror.

The install steps live on one dated page that both guides link to, taking the seat
that argued for it, because the one certainty is that those menu labels change and
I would rather fix one page than every article we ever write. Each guide keeps the
concept and the honest caveats: that an installed copy does not update itself, that
the skill does nothing the guide cannot teach by hand, and the date the route was
last tested.

Decline the Directory submission: it is review-gated and plan-gated, and it solves
discovery, which is not our problem, because the guide is the discovery. Decline
the English awesome-lists for now, siding with the two seats that counted the
support cost. Decline separate npm packages, any email wall, and any "always
current" wording.

**Confidence.** High on the shape: four independent models converged on it from
different angles, and the verified facts underneath came from the platforms' own
pages read the same day. Lower on one judgement of mine, skipping the listings,
which trades reach for quiet and is reversible in an afternoon if we want the
reach later. The staleness problem is not solved by any of this, only disclosed;
the only real cure is walking the consoles again and dating it, and nothing in this
decision makes that cheaper.
