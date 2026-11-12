-- Homepage CTA funnel: arrived, reached the contact section, opened
-- WhatsApp. Mirrors functions/stats.ts's `funnel` query.
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
SELECT
  COUNT(DISTINCT session) AS arrived,
  COUNT(DISTINCT CASE WHEN session IN (
    SELECT session FROM events WHERE type = 'section' AND section LIKE '%contact%'
     AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)) THEN session END) AS reached_contact,
  COUNT(DISTINCT CASE WHEN session IN (
    SELECT session FROM events WHERE type = 'click' AND href LIKE '%wa.me%'
     AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)) THEN session END) AS opened_whatsapp
  FROM events WHERE type = 'view' AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1);
