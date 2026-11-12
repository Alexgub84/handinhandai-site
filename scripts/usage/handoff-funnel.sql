-- Skill hand-off funnel (issue #155-2), generalized to every published
-- article that declares `skill` in its frontmatter, not only the 2
-- hardcoded in functions/stats.ts's GUIDES: reached the hand-off section
-- (`data-track-section="skill-handoff"`, owned by SkillHandoff.astro) and
-- clicked through to GitHub. One query grouped by path on each side, not a
-- UNION ALL per article — same D1 compound-SELECT-term-cap reasoning as
-- per-article-funnel.sql and per-part-funnel.sql.
--
-- Params substituted by run.mjs:
--   ?1 = since interval string, e.g. '-7 days'.
--   ?2 = 1 to include preview rows too, else 0.
--   /*HANDOFF_ARTICLE_PATHS*/ = the sqlStr-escaped, comma-separated list
--     of every published article's path that declares `skill`.
--   /*HANDOFF_CLICK_MATCH*/ = a boolean OR of per-article
--     `(path = '<path>' AND label IN (<that article's click labels>))`
--     groups — each article's own labels, matching SkillHandoff.astro's
--     `data-track="skill-handoff-download-<skillKey>"` plus the
--     plain-text GitHub link both guides already carry (the same
--     `clickLabels` shape functions/stats.ts's GUIDES hardcodes).
WITH reached AS (
  SELECT path, COUNT(DISTINCT session) AS reached
    FROM events
   WHERE type = 'section' AND section = 'skill-handoff' AND path IN (/*HANDOFF_ARTICLE_PATHS*/)
     AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
   GROUP BY path
),
clicked AS (
  SELECT path, COUNT(DISTINCT session) AS clicked
    FROM events
   WHERE type = 'click' AND day >= date('now', ?1) AND (env = 'live' OR env IS NULL OR ?2 = 1)
     AND (/*HANDOFF_CLICK_MATCH*/)
   GROUP BY path
)
SELECT COALESCE(r.path, c.path) AS path,
       COALESCE(r.reached, 0) AS reached,
       COALESCE(c.clicked, 0) AS clicked
  FROM reached r
  LEFT JOIN clicked c ON c.path = r.path
UNION
SELECT COALESCE(r.path, c.path) AS path,
       COALESCE(r.reached, 0) AS reached,
       COALESCE(c.clicked, 0) AS clicked
  FROM clicked c
  LEFT JOIN reached r ON r.path = c.path;
