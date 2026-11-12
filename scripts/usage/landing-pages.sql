-- Landing pages (entry paths). Mirrors functions/stats.ts's `entries` query.
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
SELECT path, COUNT(DISTINCT session) AS sessions
  FROM events WHERE type = 'view' AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
 GROUP BY path ORDER BY sessions DESC LIMIT 10;
