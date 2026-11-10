/**
 * Pure helpers for the per-guide funnel's GitHub release download count.
 *
 * The `fetch()` call, the 5-minute module-scope cache and the `User-Agent`
 * header stay inline in `functions/stats.ts` — they need `fetch`/isolate
 * state that doesn't belong in a pure helper. See CLAUDE.md's "Visitor
 * analytics" section for the full contract (cache window, fail-soft
 * behaviour, why counts are summed across every release).
 *
 * Plain JS, not TypeScript, so it can be exercised with a bare `node`
 * command — see `scripts/check-analytics-helpers.mjs`.
 */

/** Rendered by formatDownloadCount when the count could not be determined. */
export const DOWNLOAD_COUNT_UNAVAILABLE = '— (GitHub unreachable)';

/**
 * Sums `download_count` for every asset named `assetName` across every
 * release in `releases` — not just the latest. A filename's count resets to
 * 0 the moment a new release carries an asset by that same name (the
 * release workflow never edits an existing one), so only a sum across every
 * release returned is accurate.
 *
 * @param {Array<{ assets?: Array<{ name?: string; download_count?: number }> }>} releases
 * @param {string} assetName
 * @returns {number}
 */
export function sumDownloads(releases, assetName) {
  if (!Array.isArray(releases)) return 0;
  let total = 0;
  for (const release of releases) {
    const assets = Array.isArray(release?.assets) ? release.assets : [];
    for (const asset of assets) {
      if (asset?.name === assetName && typeof asset?.download_count === 'number') {
        total += asset.download_count;
      }
    }
  }
  return total;
}

/**
 * @param {number | null | undefined} count
 * @returns {string}
 */
export function formatDownloadCount(count) {
  if (count === null || count === undefined || !Number.isFinite(count)) {
    return DOWNLOAD_COUNT_UNAVAILABLE;
  }
  return String(count);
}
