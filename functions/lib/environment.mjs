/**
 * Classifies which deployment served a request, from the Host header alone.
 *
 * `request.url`'s host reflects the `Host` header the client sent, both
 * under local `wrangler pages dev` and at the edge (confirmed empirically —
 * see `.claude/work-orders/149-guide-funnel.md`), so this classification
 * works identically in both.
 *
 * `PRODUCTION_HOSTNAME` is this order's one place the production hostname
 * lives for environment-tagging purposes. `functions/_middleware.ts` keeps
 * its own copy for a different purpose (the noindex guard); a later rebase
 * of the guides list (`.claude/work-orders/124-rebase-guides-list.md`) is
 * instructed to import this constant instead of keeping its own literal.
 *
 * Plain JS, not TypeScript: it must be exercisable with a bare `node`
 * command, no wrangler/D1/astro-check involved — see
 * `scripts/check-analytics-helpers.mjs`.
 */

export const PRODUCTION_HOSTNAME = 'handinhandai.com';

/**
 * @param {string} host - e.g. `new URL(request.url).host` (may carry a port).
 * @returns {'live' | 'preview'}
 */
export function classifyEnvironment(host) {
  return host === PRODUCTION_HOSTNAME ? 'live' : 'preview';
}
