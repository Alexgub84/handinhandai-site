import { getCollection } from 'astro:content';

/**
 * Whether at least one published (non-draft) article exists. Drives the
 * מדריכים nav link: it should not point visitors at an empty index. See #98.
 */
export async function hasPublishedArticles(): Promise<boolean> {
  const published = await getCollection('articles', ({ data }) => !data.draft);
  return published.length > 0;
}
