-- UTM campaigns. Mirrors functions/stats.ts's `campaigns` query.
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
SELECT utm_campaign AS campaign, COUNT(DISTINCT session) AS sessions
  FROM events WHERE type = 'view' AND utm_campaign IS NOT NULL
    AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
 GROUP BY campaign ORDER BY sessions DESC LIMIT 10;
