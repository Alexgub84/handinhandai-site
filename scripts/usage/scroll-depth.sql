-- Scroll-depth buckets, one row per session's best depth. Mirrors
-- functions/stats.ts's `depth` query.
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
SELECT bucket, COUNT(*) AS sessions FROM (
  SELECT CASE
           WHEN MAX(value) >= 90 THEN '90-100%'
           WHEN MAX(value) >= 75 THEN '75-89%'
           WHEN MAX(value) >= 50 THEN '50-74%'
           WHEN MAX(value) >= 25 THEN '25-49%'
           ELSE '0-24%'
         END AS bucket
    FROM events WHERE type = 'depth' AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
   GROUP BY session)
 GROUP BY bucket ORDER BY bucket DESC;
