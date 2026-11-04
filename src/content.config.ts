import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Long-form Hebrew articles under /articles/<slug>. See
 * docs/seo/content-programme-2026-11.md for the architecture and the ten
 * planned slugs. `relatedArticles` deliberately stores plain slugs, not
 * `reference()`, because most sibling articles don't exist as collection
 * entries yet — see the work order's Design section for the reasoning.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publishedAt: z.coerce.date(),
    /** Optional only on a draft. The build guard requires it on anything published. */
    lastVerified: z.coerce.date().optional(),
    /** Internal URL of the service page this article points up to (e.g. `/#services`). */
    pillar: z.string(),
    cluster: z.enum(['publishing', 'decision', 'whatsapp', 'construction']),
    relatedArticles: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
