import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

import { SKILLS, type SkillKey } from './data/skills';

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
    /**
     * Mounts `<SkillHandoff skillKey={article.skill} />` in `ArticleLayout`
     * (issue #155, second half). Only a key — never the asset URL or the
     * repo — so the registry in `src/data/skills.ts` stays the one place
     * that derives the download link. Enum values come straight from the
     * registry's own keys, so the schema and the registry cannot name
     * different skills.
     */
    skill: z.enum(Object.keys(SKILLS) as [SkillKey, ...SkillKey[]]).optional(),
    /**
     * Per-guide engagement tracking (issue #174). An ordered list of
     * `{ id, heading }`: `id` is a short ASCII slug (`who-is-this-for`,
     * `comparison`, `procedure`, `field-note`) tracked as
     * `data-track-section="<id>"` on `/stats`'s "Per guide" card; `heading`
     * is the EXACT source text of the H2 that starts that part — never
     * derived from the Hebrew text, so a rewording of the heading can't
     * silently desync the series. `scripts/check-articles.mjs` fails the
     * build when a declared `heading` is not found as an H2 in the body, or
     * when two parts share an `id`. Optional and empty by default: a guide
     * with no `parts` renders and tracks exactly as it did before #174.
     */
    parts: z.array(z.object({ id: z.string(), heading: z.string() })).default([]),
    /**
     * The keyword brief (issue #108, rule 2) — audit material only, read off
     * the real Google results page before drafting (rule 3). Never rendered
     * on the page and never emitted as a meta keywords tag.
     *
     * Optional only on a draft. The build guard requires `primaryQuery` and
     * at least 2 `secondaryQueries` on anything published, same pattern as
     * `lastVerified`.
     */
    /** The primary search query exactly as people type it. */
    primaryQuery: z.string().optional(),
    /** 3-8 secondary queries the article should also answer. */
    secondaryQueries: z.array(z.string()).default([]),
    /** The verbatim Hebrew questions the article answers (from "אנשים שאלו גם" + autocomplete). */
    answersQuestions: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
