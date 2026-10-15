/**
 * Visitor analytics collector.
 *
 * Takes a batch of events from the page's own origin, enriches it with what
 * Cloudflare already knows about the request (country, IP for hashing only),
 * and writes one row per event to D1.
 *
 * Deliberate properties:
 * - Always answers 204, even on bad input or a database failure. A beacon that
 *   fails must never surface to the visitor or make the browser retry.
 * - No IP is stored. `visitor` is sha256(ip + user agent + salt + UTC day)
 *   truncated to 16 hex, so it counts a returning visitor within one day and
 *   becomes a different value tomorrow.
 * - Rows older than RETENTION_DAYS are pruned lazily on a small share of
 *   requests, because Pages Functions have no scheduled handler.
 */

interface Env {
  ANALYTICS_DB?: D1Database;
  ANALYTICS_SALT?: string;
}

type EventType = 'view' | 'section' | 'depth' | 'click' | 'end';

interface IncomingEvent {
  t?: unknown;
  k?: unknown;
  h?: unknown;
  p?: unknown;
  v?: unknown;
}

interface IncomingBatch {
  s?: unknown;
  p?: unknown;
  l?: unknown;
  r?: unknown;
  u?: { s?: unknown; m?: unknown; c?: unknown };
  d?: unknown;
  w?: unknown;
  e?: unknown;
}

const EVENT_TYPES: readonly EventType[] = ['view', 'section', 'depth', 'click', 'end'];
const DEVICES = new Set(['phone', 'tablet', 'desktop']);
const MAX_BODY_BYTES = 16 * 1024;
const MAX_EVENTS = 50;
const RETENTION_DAYS = 180;
const PRUNE_CHANCE = 0.01;

const BOT = /bot|crawler|spider|crawling|headless|preview|facebookexternalhit|slurp|curl|wget|python-|monitor|lighthouse|pingdom|uptime/i;

const noContent = (): Response =>
  new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });

const str = (value: unknown, max: number): string | null => {
  if (typeof value !== 'string') return null;
  const clean = value.trim().replace(/\s+/g, ' ').slice(0, max);
  return clean || null;
};

const int = (value: unknown, max: number): number | null => {
  if (typeof value !== 'number' || !Number.isFinite(value)) return null;
  return Math.max(0, Math.min(max, Math.round(value)));
};

/** Host only — a full referrer URL can carry someone's search terms. */
const host = (value: unknown): string | null => {
  const raw = str(value, 255);
  if (!raw) return null;
  try {
    return new URL(raw.includes('//') ? raw : `https://${raw}`).host.slice(0, 120) || null;
  } catch {
    return null;
  }
};

const hashVisitor = async (ip: string, ua: string, salt: string, day: string): Promise<string> => {
  const data = new TextEncoder().encode(`${ip}|${ua}|${salt}|${day}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest).slice(0, 8)]
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const db = env.ANALYTICS_DB;
    if (!db) return noContent(); // Not configured yet: accept and drop.

    // Same-origin only. A beacon from the page always carries our own Origin;
    // anything else is someone else's page posting to our collector.
    const origin = request.headers.get('origin');
    if (origin && new URL(origin).host !== new URL(request.url).host) return noContent();

    const ua = request.headers.get('user-agent') ?? '';
    if (!ua || BOT.test(ua)) return noContent();

    const raw = await request.text();
    if (!raw || raw.length > MAX_BODY_BYTES) return noContent();

    const batch = JSON.parse(raw) as IncomingBatch;
    const events = Array.isArray(batch.e) ? (batch.e as IncomingEvent[]).slice(0, MAX_EVENTS) : [];
    const session = str(batch.s, 40);
    const path = str(batch.p, 200);
    if (!session || !path || !events.length) return noContent();

    const now = Date.now();
    const day = new Date(now).toISOString().slice(0, 10);
    const ip = request.headers.get('cf-connecting-ip') ?? '';
    const salt = env.ANALYTICS_SALT ?? 'unsalted-dev';
    const visitor = await hashVisitor(ip, ua, salt, day);

    const cf = request.cf as IncomingRequestCfProperties | undefined;
    const country = str(cf?.country, 2);
    const device = str(batch.d, 10);
    const utm = batch.u ?? {};

    const common = {
      lang: str(batch.l, 10),
      refHost: host(batch.r),
      utmSource: str(utm.s, 60),
      utmMedium: str(utm.m, 60),
      utmCampaign: str(utm.c, 60),
      country,
      device: device && DEVICES.has(device) ? device : null,
    };

    const insert = db.prepare(
      `INSERT INTO events
         (ts, day, visitor, session, type, path, lang, ref_host,
          utm_source, utm_medium, utm_campaign, country, device, section, label, href, value)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12, ?13, ?14, ?15, ?16, ?17)`,
    );

    const rows = events
      .filter((event): event is IncomingEvent => EVENT_TYPES.includes(event?.t as EventType))
      .map((event) =>
        insert.bind(
          now,
          day,
          visitor,
          session,
          event.t as EventType,
          path,
          common.lang,
          common.refHost,
          common.utmSource,
          common.utmMedium,
          common.utmCampaign,
          common.country,
          common.device,
          // `section` is the section id for a section event, and the section a
          // click happened in for a click event.
          event.t === 'section' ? str(event.k, 80) : str(event.p, 80),
          event.t === 'click' ? str(event.k, 80) : null,
          str(event.h, 200),
          int(event.v, 86_400_000),
        ),
      );

    if (!rows.length) return noContent();
    await db.batch(rows);

    if (Math.random() < PRUNE_CHANCE) {
      await db
        .prepare(`DELETE FROM events WHERE day < date('now', ?1)`)
        .bind(`-${RETENTION_DAYS} days`)
        .run();
    }

    return noContent();
  } catch (error) {
    console.error('[ANALYTICS_COLLECTOR]', error instanceof Error ? error.message : error);
    return noContent();
  }
};
