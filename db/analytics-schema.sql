-- Visitor analytics store (Cloudflare D1, database `hih-analytics`).
-- Apply with:  wrangler d1 execute hih-analytics --remote --file db/analytics-schema.sql
--
-- One row per event, ~200 bytes. Nothing here identifies a person: `visitor`
-- is a one-way hash that changes every UTC day, no IP is stored, and no text a
-- visitor typed is recorded.

CREATE TABLE IF NOT EXISTS events (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  ts           INTEGER NOT NULL,  -- server time, epoch ms
  day          TEXT    NOT NULL,  -- 'YYYY-MM-DD' UTC; groups and prunes cheaply
  visitor      TEXT    NOT NULL,  -- sha256(ip + ua + salt + day), first 16 hex
  session      TEXT    NOT NULL,  -- random id from sessionStorage, dies with the tab
  type         TEXT    NOT NULL,  -- view | section | depth | click | end
  path         TEXT    NOT NULL,
  lang         TEXT,
  ref_host     TEXT,              -- referrer host only, never the full URL
  utm_source   TEXT,
  utm_medium   TEXT,
  utm_campaign TEXT,
  country      TEXT,              -- from the Cloudflare request
  device       TEXT,              -- phone | tablet | desktop
  section      TEXT,              -- section id: which one was reached, or where a click happened
  label        TEXT,              -- click label
  href         TEXT,              -- click target
  value        INTEGER            -- depth %, section dwell ms, engaged ms
);

CREATE INDEX IF NOT EXISTS events_day ON events (day);
CREATE INDEX IF NOT EXISTS events_type_day ON events (type, day);
CREATE INDEX IF NOT EXISTS events_session ON events (session);
