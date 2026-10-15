# Case card 3 — Chillist (track 02, startup / CTO)

Data for `src/data/case-studies.ts`, third entry and the first on the orange
track. Source: `~/Projects/chillist` (four repos: `chillist-fe`, `chillist-be`,
`chillist-app`, `chillist-whatsapp-bot`, plus `chillist-docs`).

## Naming

Named product, cleared by Alex on 2026-10-15. No anonymity constraints: the
product is public, the web app is live and the native app is in the stores.

## What the card must convey

Alex's instruction, 2026-10-15: make it obvious that this is **one product on
three platforms** (web plus native apps on Google Play and the App Store) and
that it carries an **AI agent on the official Meta WhatsApp Cloud API** — not a
third-party WhatsApp bridge. People search for exactly that.

Carried by: the title, the solution line, the `Meta WhatsApp API` chip, and the
"3 פלטפורמות" metric.

## Facts behind the copy

| claim | evidence |
| --- | --- |
| Web app | `chillist-fe`, React 19 + Vite + TanStack Router, live at `chillist-fe.pages.dev` (HTTP 200, Hebrew landing page, 2026-10-15) |
| Native app, iOS + Android | `chillist-app`, Expo / Expo Router, version 0.4.0 (2026-10-13), bundle id `app.chillist.mobile` for both platforms |
| Published in both stores | Alex, 2026-10-15. `chillist-docs/current/status.md` still said "not in the stores yet" at 2026-10-13 — that doc is stale, this card is not |
| Official Meta WhatsApp | `chillist-be` 1.38.0 (#262): `WHATSAPP_PROVIDER=meta` sends through `graph.facebook.com/{v}/{PHONE_NUMBER_ID}/messages`, inbound webhook `/webhook/meta` with verify-token handshake and `X-Hub-Signature-256`, 24-hour window table, approved templates. Alex confirmed production runs `meta` (2026-10-15); Green API is retired |
| AI agent on WhatsApp | `chillist-whatsapp-bot`, Vercel AI SDK + Upstash Redis. Chat with your plans in a DM or a group: list plans, see items, update statuses, create plans, link a group chat to a plan. Backend exposes `/api/internal/*` routes for it |
| 700+ item library | `chillist-docs/current/status.md` and the bulk-add wizard: a library of 700+ suggested items across Group Equipment, Personal Equipment and Food |
| 3 languages, Hebrew RTL | English, Hebrew (RTL) and Spanish across UI, item catalogue and AI suggestions |

## No usage numbers

Alex asked on 2026-10-15 for yearly-looking usage figures and, when there were
none, for invented ones. Declined: fabricated metrics on a public page are a
claim a prospect can act on and nobody can back. The three card figures are
**build facts**, every one verifiable in the repos above.

When real traffic exists, the honest replacements are plans created, active
participants, items tracked, and WhatsApp messages the agent handled — all
countable from the production database.

## Ready to paste

```ts
{
  track: "02",
  client: "Chillist",
  industry: "אפליקציה לתכנון קבוצתי",
  title: "מוצר אחד בוויב ובחנויות, עם סוכן AI בוואטסאפ הרשמי",
  challenge:
    "תכנון של טיול או אירוע קבוצתי נגמר בגיליון אלקטרוני ובשרשור וואטסאפ מבולגן, ואף אחד לא יודע מי מביא מה ומה כבר נקנה.",
  solution:
    "מוצר אחד בשלוש פלטפורמות: ווב, אפליקציה לאנדרואיד ול-iOS בחנויות, וסוכן AI על WhatsApp Cloud API הרשמי של Meta שמוסיף פריטים, מעדכן סטטוס ומשייך אותם לאנשים ישירות בצ'אט.",
  results: [
    { value: "3", label: "פלטפורמות: ווב, iOS, אנדרואיד" },
    { value: "700+", label: "פריטים בספריית הרשימות" },
    { value: "3", label: "שפות כולל עברית RTL" },
  ],
  stack: ["React 19", "Expo", "Fastify", "PostgreSQL", "Meta WhatsApp API", "Vercel AI SDK"],
  url: "chillist-fe.pages.dev",
  image: "/home/cases/chillist-web.jpg",
}
```

## Image

`public/home/cases/chillist-web.jpg` — the live Hebrew landing page captured at
1440×900 on 2026-10-15, resized to 1600 wide, 136 KB. Replace it with a signed-in
plan screen if a cleaner one becomes available; the phone store screenshots in
`chillist-app/docs/store/screenshots/` are portrait and do not suit the card's
browser frame.

## Open

- `url` shows the Cloudflare Pages hostname because there is no custom domain
  yet. A real domain would read better on the card.
- Usage figures, once the product has traffic.
