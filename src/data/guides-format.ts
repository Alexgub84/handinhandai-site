/**
 * Pure helpers for the homepage guides band (#124). Deliberately free of any
 * `astro:content` import so they can be unit-tested directly (see
 * tests/guides-band.spec.ts) without going through Astro's content-collection
 * pipeline — `src/data/articles.ts` is the thin wrapper that actually calls
 * `getCollection('articles', …)` and hands the results through these.
 */

/** The build's own test fixture; never a real guide. Same slug as
 * `scripts/check-articles.mjs`'s `FIXTURE_SLUG` (that script can't import
 * from here — it runs standalone before `astro build`). */
export const FIXTURE_SLUG = 'fixture-markdown-devices-test';

/** Any article's standard lede, stripped before taking the first sentence. */
const SHORT_ANSWER_PREFIX = /^התשובה הקצרה:\s*/;

/**
 * The one-sentence answer a guides card shows: `description`'s first
 * sentence, with the "התשובה הקצרה: " lede stripped. Falls back to the full
 * (stripped) description if no sentence boundary is found.
 */
export function shortAnswer(description: string): string {
  const stripped = description.replace(SHORT_ANSWER_PREFIX, '');
  const match = stripped.match(/^(.+?[.!?])(?:\s|$)/);
  return match ? match[1] : stripped;
}

/** At most `max` entries (default 3) — the band never needs a code change as
 * the catalogue grows past that. */
export function capGuides<T>(entries: readonly T[], max = 3): T[] {
  return entries.slice(0, max);
}

/** Stable order for entries that may share a `publishedAt` date: oldest
 * published first, then slug, so the band's card order doesn't depend on
 * filesystem/glob enumeration order. */
export function sortGuides<T extends { publishedAt: Date; slug: string }>(
  entries: readonly T[]
): T[] {
  return [...entries].sort((a, b) => {
    const byDate = a.publishedAt.getTime() - b.publishedAt.getTime();
    return byDate !== 0 ? byDate : a.slug.localeCompare(b.slug);
  });
}

/** Human cluster headings, shared between the homepage band's grouping (none
 * today) and the guides-list page (the `.dk-tab` chip on each row). One
 * heading per `cluster` value in `src/content.config.ts`'s schema. */
export const CLUSTER_HEADINGS: Record<string, string> = {
  decision: 'החלטות לפני שמתחילים',
  publishing: 'פרסום אפליקציות',
  whatsapp: 'עוזרי AI בוואטסאפ',
  construction: 'פיקוח ובקרת איכות בבנייה',
};

/** Markdown noise stripped before the guides-list page's own "זמן עיון"
 * (review-time) estimate: fenced code blocks entirely, then the inline
 * syntax characters a word-count would otherwise trip over (link targets,
 * emphasis/heading markers, table pipes). Not a full Markdown parser — just
 * enough that a code block or a `[text](url)` link doesn't inflate or
 * distort the word count. */
const CODE_FENCE = /```[\s\S]*?```/g;
const LINK_TARGET = /\]\([^)]*\)/g;
const MARKDOWN_SYNTAX = /[[\]`*_#>|~]/g;

/** A conservative Hebrew business-reading pace — slower than casual reading,
 * since this content is read to make a decision, not skimmed. */
const WORDS_PER_MINUTE = 170;

/**
 * The guides-list page's "זמן עיון" (review time) estimate for one guide's
 * raw Markdown body (the content-collection entry's `.body`, not the
 * rendered HTML) — a word count at `WORDS_PER_MINUTE`, rounded, never below
 * 1 minute. Computed from the real article body so publishing a guide (or
 * editing one) updates its own line with no hand-typed number anywhere.
 */
export function estimateReviewMinutes(body: string): number {
  const stripped = body
    .replace(CODE_FENCE, ' ')
    .replace(LINK_TARGET, ' ')
    .replace(MARKDOWN_SYNTAX, ' ');
  const wordCount = stripped.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
