-- Visitors/sessions/views per day in the review window. Mirrors
-- functions/stats.ts's `daily` query (the sparkline data).
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
SELECT day, COUNT(DISTINCT visitor) AS visitors, COUNT(DISTINCT session) AS sessions,
       SUM(CASE WHEN type = 'view' THEN 1 ELSE 0 END) AS views
  FROM events
 WHERE day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
 GROUP BY day ORDER BY day;
