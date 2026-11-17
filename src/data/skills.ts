/**
 * Single registry for the two public Claude skills handed to readers of the
 * store-publishing and WhatsApp Cloud API guides (issue #155, second half).
 * Everything derived from the release — the asset URL most of all — is
 * computed here, in one place, from `SKILLS_REPO` + `VERSION` + the skill
 * key. Nothing else on the site is allowed to encode that URL shape by
 * hand: see docs/council/2026-11-09-skill-distribution.md, which spent five
 * paragraphs refusing exactly that drift.
 *
 * Bumping `VERSION` after `Alexgub84/claude-skills` cuts a new tagged
 * release updates every download link on the site (the hand-off card on
 * both guides, and the install page) in the same build.
 */

/** Public repo that publishes the skills as immutable versioned release assets. */
export const SKILLS_REPO = "Alexgub84/claude-skills";

/**
 * The release currently live. `v1.3.0`'s two assets were confirmed
 * returning HTTP 200 from
 * https://github.com/Alexgub84/claude-skills/releases/download/v1.3.0/ on
 * 2026-11-17 (issue #220 — v1.3.0 opens the store-publishing skill with a
 * readiness check and 4 blocking questions before any console is touched,
 * states plainly that an iOS build needs macOS with Xcode, splits the
 * upload default per store, and hands back apps aimed at children, in
 * regulated categories, or asking for restricted permissions instead of
 * guiding them).
 */
const VERSION = "1.3.0";

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
} as const satisfies Record<string, SkillEntry>;

export type SkillKey = keyof typeof SKILLS;

/** The one function that knows the release-asset URL shape. */
export function skillAssetUrl(key: SkillKey): string {
  return `https://github.com/${SKILLS_REPO}/releases/download/v${VERSION}/${key}.zip`;
}

/** Exposed for the install page's dated line and disclosures. */
export const skillsVersion = VERSION;
