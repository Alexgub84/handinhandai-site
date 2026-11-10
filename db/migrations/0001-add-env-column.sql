-- One-time migration, issue #149. NOT idempotent — do not re-run.
--
-- MUST be applied to the remote database before a collector that writes
-- `env` is deployed. `functions/api/e.ts`'s INSERT names its columns
-- explicitly, so a new collector deployed before this column exists will
-- error on every write (D1: "no such column: env") and that error is
-- swallowed by the collector's catch-all, which looks like nothing broke
-- while analytics quietly stops recording anything until this migration
-- lands. Apply this first, deploy the collector second.
--
-- Apply to the real remote database with:
--   npx wrangler d1 execute hih-analytics --remote --file db/migrations/0001-add-env-column.sql
--
-- Metadata-only on SQLite (no table rewrite, no meaningful write-lock).
-- Existing rows get NULL, read by the dashboard as "unknown" — no UPDATE
-- touches old rows, nothing is backfilled or reclassified.
--
-- Reversible on SQLite >= 3.35 with:
--   ALTER TABLE events DROP COLUMN env;
-- (confirm D1's engine version before relying on that; the harmless
-- fallback if it isn't supported is to leave the unused nullable column in
-- place).

ALTER TABLE events ADD COLUMN env TEXT;

CREATE INDEX IF NOT EXISTS events_env ON events (env);
