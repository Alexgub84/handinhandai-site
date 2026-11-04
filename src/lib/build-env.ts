/**
 * Whether this build should include draft articles.
 *
 * A Cloudflare Pages preview deploy runs the exact same `astro build` as a
 * production deploy — there is no `NODE_ENV` difference between them. The
 * only build-time signal that tells them apart is Cloudflare's own build
 * environment variable `CF_PAGES_BRANCH`, which Cloudflare sets to the git
 * branch being built. The production branch is `main`.
 *
 * `CF_PAGES_BRANCH` is unset for a local `astro build`, for `astro dev`, and
 * for CI (this repo's GitHub Actions build is not a Cloudflare Pages build).
 * All of those fall back to "include drafts", matching the settled design
 * in #101: a writer must be able to read a draft article before it ships,
 * and the only way to do that outside a Cloudflare preview deploy is a
 * local build or `astro dev`.
 */
const PRODUCTION_BRANCH = 'main';

export function includeDrafts(): boolean {
  return process.env.CF_PAGES_BRANCH !== PRODUCTION_BRANCH;
}
