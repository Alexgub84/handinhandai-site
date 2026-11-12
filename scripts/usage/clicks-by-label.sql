-- Clicks grouped by label + section. Mirrors functions/stats.ts's `clicks`
-- query.
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
SELECT label, COALESCE(section, '-') AS section, COUNT(*) AS clicks,
       COUNT(DISTINCT session) AS sessions
  FROM events WHERE type = 'click' AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
 GROUP BY label, section ORDER BY clicks DESC LIMIT 20;
