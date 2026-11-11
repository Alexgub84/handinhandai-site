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
    /**
     * Moves `<SkillHandoff>` from end-of-body to mid-body (issue #185,
     * Ruling 1): the id of the `parts[]` entry the card renders right
     * after. Must equal one of this article's own `parts[].id` and the
     * article must carry `skill` — both enforced by
     * `scripts/check-articles.mjs`, which fails the build naming the
     * article and the bad value rather than silently ignoring it.
     * `src/lib/rehype-article-devices.mjs`'s `rehypeArticleHandoffMarker`
     * reads this same frontmatter field to emit the
     * `<div data-handoff-slot hidden>` marker right after that part's
     * `</section>`; `ArticleLayout.astro` splits the rendered body HTML at
     * that marker in true document order (CSS `order` is refused — see the
     * issue's design ruling). Absent (the default) means the card stays at
     * the end of the body, exactly as before this field existed.
     */
    handoffAfter: z.string().optional(),
    /**
     * The per-guide process diagram (issue #185, Ruling 3): an ordered list
     * of steps rendered by `src/components/ProcessDiagram.astro` as static
     * HTML, no image, no animation. `actor` is a short label for who does
     * the step; `wait`/`fee` are optional one-line callouts shown on that
     * step only when the guide's own text states a wait or a fee for it.
     * Rendered right after the pillar link and before the body, only when
     * non-empty — a guide that declares none renders exactly as before this
     * field existed.
     */
    diagramSteps: z
      .array(
        z.object({
          label: z.string(),
          actor: z.string(),
          wait: z.string().optional(),
          fee: z.string().optional(),
        })
      )
      .default([]),
    /**
     * A caveat shown under the diagram (issue #185, Ruling 3's "optional
     * footnote slot") for a figure that is conditional or not stated as a
     * single fixed number in the guide's own text — e.g. a wait that
     * depends on account type, or a step that only applies to some
     * publishers. Added to the schema because both skill guides' diagrams
     * need exactly this: neither guide's wait/fee figures hold
     * unconditionally for every reader. Optional; a diagram with nothing
     * conditional to flag renders with no footnote.
     */
    diagramNote: z.string().optional(),
  }),
});

export const collections = { articles };
