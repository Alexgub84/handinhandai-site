-- Per-part funnel (issue #174's dashboard query, generalized to every
-- article that declares `parts`, not only the 2 hardcoded skill guides):
-- reach (distinct sessions that reached the part) and median dwell in
-- seconds, scoped to (path, part) so two articles reusing a part id (e.g.
-- "procedure") never merge. A single query grouped by (path, section), not
-- a UNION ALL per (article, part) pair — D1 refuses a compound SELECT past
-- roughly 5 terms, which even 2 articles x 6 parts already exceeds (see
-- CLAUDE.md's "Per-part funnel" rule). Median uses a window function over
-- the dwell-qualifying rows (value > 0), same as functions/stats.ts.
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
--   /*PART_ARTICLE_PATHS*/ = the sqlStr-escaped, comma-separated list of
--     every published article's path that declares a non-empty `parts[]`
--     in its frontmatter.
WITH reach_scoped AS (
  SELECT path, section AS part, session
    FROM events
   WHERE type = 'section' AND path IN (/*PART_ARTICLE_PATHS*/)
     AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
   GROUP BY path, section, session
),
dwell_ranked AS (
  SELECT path, section AS part, MAX(value) AS ms,
         ROW_NUMBER() OVER (PARTITION BY path, section ORDER BY MAX(value)) AS rn,
         COUNT(*) OVER (PARTITION BY path, section) AS cnt
    FROM events
   WHERE type = 'section' AND path IN (/*PART_ARTICLE_PATHS*/)
     AND value > 0 AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
   GROUP BY path, section, session
)
SELECT r.path AS path, r.part AS part, COUNT(*) AS reach,
       (SELECT ROUND(AVG(d.ms) / 1000.0, 1) FROM dwell_ranked d
         WHERE d.path = r.path AND d.part = r.part
           AND d.rn IN ((d.cnt + 1) / 2, (d.cnt + 2) / 2)) AS median_seconds
  FROM reach_scoped r
 GROUP BY r.path, r.part;
