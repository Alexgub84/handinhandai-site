import { getCollection } from 'astro:content';
import { includeDrafts } from '@/lib/build-env';
import { FIXTURE_SLUG, capGuides, shortAnswer, sortGuides } from './guides-format';

/**
 * Whether at least one article counts as published, for the purpose of
 * showing the מדריכים nav link and the homepage guides band (#98, extended
 * by #124). On a build that includes drafts (#101/#105 — a Cloudflare
 * preview deploy, a local build, `astro dev`), a draft article counts too,
 * same gate the articles index already applies, so the nav link, the
 * guides band and the index appear together with the real content the day
 * it is written, not the day it ships. The test fixture never counts,
 * published or not.
 */
export async function hasPublishedArticles(): Promise<boolean> {
  const showDrafts = includeDrafts();
  const published = await getCollection(
    'articles',
    ({ data }) => data.slug !== FIXTURE_SLUG && (showDrafts || !data.draft)
  );
  return published.length > 0;
}

export interface HomepageGuide {
  slug: string;
  title: string;
  answer: string;
}

/**
 * Up to 3 guides for the homepage band (#124) — same draft/fixture gate as
 * `hasPublishedArticles()` above, so the band and the nav link always agree
 * on whether there is anything to show.
 */
export async function getHomepageGuides(): Promise<HomepageGuide[]> {
  const showDrafts = includeDrafts();
  const entries = await getCollection(
    'articles',
    ({ data }) => data.slug !== FIXTURE_SLUG && (showDrafts || !data.draft)
  );
  return capGuides(sortGuides(entries.map((e) => e.data))).map((data) => ({
    slug: data.slug,
    title: data.title,
    answer: shortAnswer(data.description),
  }));
}
