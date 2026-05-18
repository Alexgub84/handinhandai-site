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
