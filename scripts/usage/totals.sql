-- Window totals: visitors, sessions, views, avg engaged seconds, avg scroll
-- depth %. `avg_seconds`/`avg_depth` use `MAX(value) per session`, never
-- `SUM` (CLAUDE.md's "Visitor analytics" rule, mirrored from
-- functions/stats.ts's `totals` query).
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
SELECT COUNT(DISTINCT visitor) AS visitors, COUNT(DISTINCT session) AS sessions,
       SUM(CASE WHEN type = 'view' THEN 1 ELSE 0 END) AS views,
       (SELECT ROUND(AVG(best) / 1000.0) FROM (
          SELECT MAX(value) AS best FROM events
           WHERE type = 'end' AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
           GROUP BY session)) AS avg_seconds,
       (SELECT ROUND(AVG(best)) FROM (
          SELECT MAX(value) AS best FROM events
           WHERE type = 'depth' AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
           GROUP BY session)) AS avg_depth
  FROM events WHERE day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1);
