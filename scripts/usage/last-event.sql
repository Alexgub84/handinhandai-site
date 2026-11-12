-- Staleness check: the timestamp of the most recent row across live +
-- unknown-env rows (the same `env IS NULL` "unknown, never preview" rule
-- CLAUDE.md's "Visitor analytics" section documents). Mirrors
-- functions/stats.ts's `lastEvent` query and its 12h STALE_HOURS threshold
-- (the threshold itself is checked in scripts/usage/run.mjs, not here).
--
-- Params substituted by run.mjs:
--   ?2 = 1 to include preview rows too, else 0.
SELECT MAX(ts) AS last_ts FROM events WHERE env = 'live' OR env IS NULL OR ?2 = 1;
