-- Cross-page: for each published article, how many of its own viewing
-- sessions also viewed at least one other page on the site in the same
-- session, and which pages those were. One query grouped by
-- (article_path, other_path), never a UNION ALL branch per article.
-- Rows with other_path = '(any other page)' carry the DISTINCT-session
-- denominator; it cannot be derived by summing the per-page rows.
-- Params: ?1 since interval, ?2 include preview, /*ARTICLE_PATHS*/ list.
WITH guide_sessions AS (
  SELECT DISTINCT path AS article_path, session
    FROM events
   WHERE type = 'view' AND path IN (/*ARTICLE_PATHS*/)
     AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
),
other_views AS (
  SELECT gs.article_path AS article_path, e.path AS other_path, gs.session AS session
    FROM events e
    JOIN guide_sessions gs ON gs.session = e.session
   WHERE e.type = 'view' AND e.path != gs.article_path
     AND e.day >= date('now', ?1) AND (e.env = 'live' OR e.env IS NULL OR ?2 = 1)
)
SELECT article_path, other_path, COUNT(DISTINCT session) AS sessions
  FROM other_views GROUP BY article_path, other_path
UNION ALL
SELECT article_path, '(any other page)', COUNT(DISTINCT session)
  FROM other_views GROUP BY article_path
 ORDER BY article_path, sessions DESC;
