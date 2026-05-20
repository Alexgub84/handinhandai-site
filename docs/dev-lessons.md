# Dev Lessons — handinhandai-site

Append-only log. New entries on top of their type section, dated YYYY-MM-DD.

---

### [Win] Hebrew AI-tell checklist for marketing copy

**Date:** 2026-05-18
**Context:** Auditing `/fitness-chain` Hebrew copy that had been forked from `/fitness-studio` and partially rewritten — several strings still smelled AI-generated even after the rewrite.
**Strategy:** Flag any Hebrew string that contains one of these patterns and rewrite it before shipping:

- Bureaucratic nominalizations: `התערבות אנושית`, `בסיכון נטישה`, `היקף השימוש`, `מערכות לאינטגרציה`, `ייעודיים לתפעול עסקי`.
- Translated-legalese verbs: `מתירה במפורש`, `אסרה על`. Replace with everyday verbs: `אישרה`, `חסמה`.
- Corporate openers: `החזון שלי הוא`, `הפתרון שלנו` — replace with concrete observation ("אני רואה הרבה פעמים…").
- Em-dash list-of-three with abstract nouns. Concrete verbs over abstract nouns.
- Redundant possessives in one breath: `בונים לכם … לרשת שלכם`. Drop one.
- Self-praising adjectives the bot supposedly has: "יודע להתנהל בעברית טבעית" is itself the most AI thing on a page about natural language.

**Why it works:** These patterns are reliable because they map to specific LLM-tendencies (nominalization, parallel structure, hedged formality). Auditing for them is faster than re-reading every line "vibe-wise" — you scan for the markers, then rewrite locally.

### [Decision] Hero WhatsApp scenario must demonstrate audience-specific power

**Date:** 2026-05-18
**Context:** `/fitness-chain` initially used the same `churn-recovery` scenario as the studio page. It worked, but didn't prove "this knows my world has multiple branches" within 5 seconds of landing on the page.
**Decision:** Hero scenarios should be audience-specific and demonstrate the one capability a single-tier alternative could not — for chain pages that means cross-branch routing. Wrote a new `chain-churn-multi-branch.ts` scenario where the member moves cities and the bot offers a different branch. Rejected: keeping the shared scenario for simplicity. Reason for rejection: the inline mini-WAs in the capability cards already cover multi-branch — the hero needs to lead with the same signal, not lag it.
**Reuse tip:** When forking a marketing page for a new audience, the hero WhatsApp demo is part of the value prop, not chrome. Replace it before shipping.

### [Decision] WhatsApp deep-link redirects via Cloudflare `_redirects`, not Astro page

**Date:** 2026-05-19
**Context:** Alex needed a short link on `handinhandai.com` (`/wa/lac-gel`) that, when clicked from an Instagram DM, sends the recipient straight into a WhatsApp chat with the number `+972 54 505 3620` and a pre-filled Hebrew opener. Hard requirement: the user must not see any page on the site — no flash of marketing content.
**Decision:** Added a single rule to `public/_redirects`. Astro copies the file verbatim to `dist/`, and Cloudflare Pages serves it as a true edge 302. Rejected: an Astro page using `<meta http-equiv="refresh">` + JS. Reason for rejection: in static mode (no SSR adapter installed) there is no server-side `Astro.redirect()` and any HTML-level redirect produces a visible blank-page render before navigation — defeats the "no site flash" requirement.
**Reuse tip:** For any future paste-into-DM short link (WhatsApp/Telegram/Calendly/etc.), prefer `public/_redirects` over a real page. Same pattern: `/wa/<segment>  <destination-url>  302`. Astro's `npm run preview` does not honor `_redirects` — verify in a Cloudflare Pages preview deploy, not locally.

### [Bug] Cloudflare Pages 401 from GitHub Packages after `.npmrc` env-var rename

**Date:** 2026-05-19
**Problem:** Every Cloudflare Pages deploy from `main` since the v2 fitness-chain rewrite (commit `b8b54e7`) was silently failing the build with `401 Unauthorized` from `npm.pkg.github.com` for `@alexgub84/whatsapp-chat-mock`. Live site kept serving the previous successful build, so nothing visibly broke — until a later commit (the `/wa/lac-gel` redirect) introduced a file that needed to ship and didn't.
**Solution:** Root cause: `.npmrc` was changed from `${GITHUB_TOKEN}` to `${NPM_TOKEN}` in that rewrite, but the Cloudflare Pages dashboard env var is `GITHUB_TOKEN`. npm expanded `${NPM_TOKEN}` to an empty string, sent an empty auth header, GH 401'd. Reverted `.npmrc` to `${GITHUB_TOKEN}` and pointed GitHub Actions at the workflow-builtin `secrets.GITHUB_TOKEN` so both CI paths share one env-var name with no PAT to rotate.
**Prevention:** Any future `.npmrc` change must keep `${GITHUB_TOKEN}` — the project CLAUDE.md now calls this out explicitly. If a build env-var rename is genuinely needed, update the Cloudflare Pages dashboard FIRST, then change `.npmrc` in the same commit. Always check the CF Pages Deployments tab after merging a config change — auth failures are invisible until something on the live site needs to update.

### [Bug] CF Pages build crash from missing Linux native binaries in macOS-generated lockfile

**Date:** 2026-05-19
**Problem:** After fixing the auth issue, the CF Pages build still failed in `astro build` with `Cannot find module '../lightningcss.linux-x64-gnu.node'`. `npm ci` had installed 416 packages on Linux but skipped the Linux native binary for lightningcss (and would have skipped Tailwind's oxide + Rollup's Linux variant too).
**Solution:** The lockfile is generated on macOS-arm64 and only carries `node_modules/...` entries for darwin-arm64 binary packages. Optional-platform binaries are listed in transitive `optionalDependencies` blocks but never resolved into the lockfile's `packages` section, so `npm ci` on Linux dutifully skips them. Promoted three packages to root `optionalDependencies` in `package.json`: `@rollup/rollup-linux-x64-gnu`, `@tailwindcss/oxide-linux-x64-gnu`, `lightningcss-linux-x64-gnu`. Regenerated the lockfile — entries now appear in the `packages` section and `npm ci` installs them on Linux. macOS installs ignore them (platform mismatch is a no-op for optional deps).
**Prevention:** Whenever Astro/Vite/Tailwind/Rollup is upgraded, also bump the matching Linux binary version in root `optionalDependencies`. CF Pages build log is the only place this surfaces — local builds, local previews, and Playwright E2E all run on the developer's macOS and will never reproduce it. Documented the pin list and rationale in the project CLAUDE.md under "Cloudflare Pages — Linux native binaries".

### [Win] Diff the last known-good deploy commit against the broken series to spot config drift

**Date:** 2026-05-19
**Context:** CF Pages was failing without a clear single-commit culprit — the auth break started at `b8b54e7` but only mattered when a later commit needed to ship.
**Strategy:** `git diff <last-working-sha>..<current> -- .npmrc package.json package-lock.json wrangler.toml .github/workflows/` surfaced the `.npmrc` env-var rename instantly. Two minutes of targeted diffing against the config files beat hours of guessing about token expiry, dashboard state, or CF Pages misconfiguration.
**Why it works:** When "it worked before, doesn't now" and the live site is on a managed platform, the first move is to ask what changed in the auth / build / deploy config files specifically — not in the application code. Restrict the diff to those files and the cause usually jumps out.

### [Decision] WhatsApp link previews via UA-sniffing Pages Function, not meta-refresh

**Date:** 2026-05-20
**Context:** `/wa/lac-gel` was an edge 302 in `public/_redirects` — humans hit WhatsApp instantly with no site flash, but social scrapers (WhatsApp, Facebook, Twitter) followed the 302 to `wa.me` and got the generic wa.me default preview (phone number only, no image, no Hebrew title). To give the recipient a branded link preview in Instagram DM / WhatsApp / Facebook, the response at `/wa/<slug>` itself needs to be HTML with Open Graph tags — but a static HTML + `<meta http-equiv="refresh">` page would re-introduce the blank-page flash the original `_redirects` decision explicitly avoided.
**Decision:** Built a Cloudflare Pages Function at `functions/wa/[slug].ts` that sniffs the `User-Agent` header. Bot UAs (`whatsapp`, `facebookexternalhit`, `twitterbot`, `slackbot`, `linkedinbot`, `telegrambot`, `discordbot`, `skypeuripreview`, `pinterest`) get a minimal HTML response with `og:title` / `og:description` / `og:image` / Twitter Card meta. Human UAs get `Response.redirect(whatsappUrl, 302)` — same behavior as the prior `_redirects` rule. Slug → `{ whatsappUrl, title, description, image }` registry lives in the function file itself. Removed the corresponding `/wa/lac-gel` line from `public/_redirects` (function matches the path first; leaving the line caused conflict noise). Rejected: a static HTML page with meta-refresh + JS redirect — same flash problem the original 2026-05-19 decision rejected. Rejected: keeping pure 302 with no custom preview — Lac Gel link going into Instagram DMs needs branded visual context, the wa.me default is text-only.
**Reuse tip:** Any future paste-into-DM short link that needs a branded social preview gets a new entry in the `SHORTLINKS` registry inside `functions/wa/[slug].ts` plus a 1200×630 JPEG at `public/og/wa/<slug>.jpg`. Do NOT add a `_redirects` line — the Pages Function handles the redirect path for human UAs. UA sniffing is best-effort: if a scraper changes its UA and isn't matched, it falls back to `wa.me` default (same as the prior baseline, no regression). Bot list lives in the function file; extend it there when a new platform's preview needs to be supported.
