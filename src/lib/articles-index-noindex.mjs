// Whether the /articles index page should be noindexed: true when the
// articles collection has no published (non-draft) entry. Shared by
// src/pages/articles/index.astro (the noindex meta tag the page renders)
// and astro.config.mjs (the sitemap filter) so the condition that keeps a
// crawler off an empty index can never drift from the condition that
// excludes that same page from the sitemap — see issue #160, where the two
// disagreed and Google was told to index a page that refused it.
//
// Plain .mjs, no astro:content import: astro.config.mjs runs outside the
// content-collections runtime and can't resolve that module, so this file
// takes the draft flags as plain booleans and lets each caller supply them
// however it can read them (getCollection() in the page, frontmatter read
// off disk in the config).

/**
 * @param {readonly boolean[]} draftFlags One entry per article in the
 *   full collection (not filtered by build-time draft visibility), true
 *   when that article is a draft.
 * @returns {boolean}
 */
export function isArticlesIndexNoindexed(draftFlags) {
  return draftFlags.every((isDraft) => isDraft);
}
