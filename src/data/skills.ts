/**
 * Single registry for the public Claude skills handed to readers of the
 * store-publishing, WhatsApp Cloud API and testing guides (issue #155,
 * second half).
 * Everything derived from the release — the asset URL most of all — is
 * computed here, in one place, from `SKILLS_REPO` + `VERSION` + the skill
 * key. Nothing else on the site is allowed to encode that URL shape by
 * hand: see docs/council/2026-11-09-skill-distribution.md, which spent five
 * paragraphs refusing exactly that drift.
 *
 * Bumping `VERSION` after `Alexgub84/claude-skills` cuts a new tagged
 * release updates every download link on the site (the hand-off card on
 * every skill-carrying guide, and the install page) in the same build.
 */

/** Public repo that publishes the skills as immutable versioned release assets. */
export const SKILLS_REPO = "Alexgub84/claude-skills";

/**
 * The release currently live. `v1.4.0`'s three assets
 * (`store-publishing.zip`, `meta-whatsapp-cloud-api.zip`,
 * `test-an-ai-built-app.zip`) were each confirmed returning HTTP 200 from
 * https://github.com/Alexgub84/claude-skills/releases/download/v1.4.0/ on
 * 2026-11-26 (Alex's direct order, same day — v1.4.0 adds the third
 * skill, `test-an-ai-built-app`: an eleven-step procedure that puts a
 * working test suite on an app built with AI that breaks whenever it is
 * touched, each step ending on a state the reader can see on their own
 * screen). The two older assets are republished unchanged under this tag,
 * so bumping the constant moves all three download links at once and
 * leaves no link pointing at `v1.3.0`.
 *
 * Previous: `v1.3.0`, confirmed 2026-11-17 (issue #220 — the
 * store-publishing skill's readiness check and 4 blocking questions
 * before any console is touched).
 */
const VERSION = "1.4.0";

export interface SkillEntry {
  /** Display name — also the skill's folder name in the public repo. */
  name: string;
  /** One-sentence, factual description of what the skill does (Hebrew). */
  description: string;
}

export const SKILLS = {
  "store-publishing": {
    name: "store-publishing",
    description:
      "אותו תהליך שבמדריך הזה — מחשבון המפתח ועד הלחיצה שאין ממנה חזרה — ארוז כקובץ אחד ש־Claude מבצע שלב אחרי שלב.",
  },
  "meta-whatsapp-cloud-api": {
    name: "meta-whatsapp-cloud-api",
    description:
      "אותו תהליך שבמדריך הזה — מהבקשה לאימות העסק ועד הודעת הבדיקה הראשונה שעוברת — ארוז כקובץ אחד ש־Claude מבצע שלב אחרי שלב.",
  },
  "test-an-ai-built-app": {
    name: "test-an-ai-built-app",
    description:
      "אותו תהליך שבמדריך הזה — מקריאת מצב הפרויקט ועד פקודה אחת שמריצה מסלול אמיתי ונכשלת כשהוא נשבר — ארוז כקובץ אחד ש־Claude מבצע שלב אחרי שלב.",
  },
} as const satisfies Record<string, SkillEntry>;

export type SkillKey = keyof typeof SKILLS;

/** The one function that knows the release-asset URL shape. */
export function skillAssetUrl(key: SkillKey): string {
  return `https://github.com/${SKILLS_REPO}/releases/download/v${VERSION}/${key}.zip`;
}

/** Exposed for the install page's dated line and disclosures. */
export const skillsVersion = VERSION;
