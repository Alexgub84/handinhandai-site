-- Per-article funnel: arrived (distinct sessions), avg scroll depth %, avg
-- engaged seconds — for EVERY published article, not just the 2 guides
-- functions/stats.ts hardcodes into GUIDES. A single query grouped by
-- path, not a UNION ALL branch per article: D1 refuses a compound SELECT
-- past roughly 5 terms, and the live published-article count already
-- exceeds that (see CLAUDE.md's "Per-part funnel" rule, which states the
-- same constraint for the sibling per-part query below).
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
--   /*ARTICLE_PATHS*/ = the sqlStr-escaped, comma-separated list of every
--     published (non-draft) article's `/articles/<slug>` path, read from
--     src/content/articles/*.md frontmatter at run time.
WITH arrived AS (
  SELECT path, COUNT(DISTINCT session) AS arrived
    FROM events
   WHERE type = 'view' AND path IN (/*ARTICLE_PATHS*/)
     AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
   GROUP BY path
),
depth AS (
  SELECT path, ROUND(AVG(best)) AS avg_depth FROM (
    SELECT path, session, MAX(value) AS best
      FROM events
     WHERE type = 'depth' AND path IN (/*ARTICLE_PATHS*/)
       AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
     GROUP BY path, session
  ) GROUP BY path
),
engaged AS (
  SELECT path, ROUND(AVG(best) / 1000.0) AS avg_seconds FROM (
    SELECT path, session, MAX(value) AS best
      FROM events
     WHERE type = 'end' AND path IN (/*ARTICLE_PATHS*/)
       AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
     GROUP BY path, session
  ) GROUP BY path
)
SELECT a.path AS path, a.arrived AS arrived,
       COALESCE(d.avg_depth, 0) AS avg_depth,
       COALESCE(e.avg_seconds, 0) AS avg_seconds
  FROM arrived a
  LEFT JOIN depth d ON d.path = a.path
  LEFT JOIN engaged e ON e.path = a.path;
