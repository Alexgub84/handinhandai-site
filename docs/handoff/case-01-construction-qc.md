# Case card 1 — construction quality control (track 01)

Data for `src/data/case-studies.ts`, first entry. Replaces the `[שם העסק]`
placeholder object. Source project is a live, deployed system in daily field
use; this file is the only record of what may be published about it.

## Anonymity rules (hard)

The system is published on both app stores under the client's own developer
account, so anything that identifies the product identifies the client.

- Never write the product name, its real domain, or a store link anywhere on
  the page, in alt text, in a file name, or in a commit message.
- `client` stays the generic descriptor below. Do not "improve" it into a real
  company name.
- `url` is display-only inside the fake browser frame. The invented hostname
  below is deliberate. Do not swap in the real one.
- No `href` — there is no public case page and there will not be one.
- No `quote` — the client has not given one. The card renders fine without it.

## Fields

| field | value |
| --- | --- |
| track | `01` |
| client | יזם בנייה למגורים |
| industry | בנייה למגורים |
| title | מצ'קליסט על נייר למערכת בקרת איכות שעובדת בלי רשת |
| challenge | בדיקות איכות באתר נרשמו על דפים ובוואטסאפ, תמונות התפזרו בין טלפונים, ובסוף אף אחד לא ידע מה אושר ומה נפתח מחדש. |
| solution | אפליקציה לשטח שעובדת בלי רשת ומערכת משרדית אחת: צ'קליסטים לפי דירה, מחזור תיקון תקלות, חתימה ודוח PDF נעול. |
| results | ₪100,000 חסכון שנתי ללקוח · 3,300+ נקודות בדיקה באתר · 6 שבועות עד שתי החנויות |
| stack | Flutter, React, Fastify, PostgreSQL, AWS |
| url | qc.site-control.co.il |
| quote | — |
| logo | — (first letter of `client` renders instead) |
| image | pending, see below |
| href | — |

## Ready to paste

```ts
{
  track: "01",
  client: "יזם בנייה למגורים",
  industry: "בנייה למגורים",
  title: "מצ'קליסט על נייר למערכת בקרת איכות שעובדת בלי רשת",
  challenge:
    "בדיקות איכות באתר נרשמו על דפים ובוואטסאפ, תמונות התפזרו בין טלפונים, ובסוף אף אחד לא ידע מה אושר ומה נפתח מחדש.",
  solution:
    "אפליקציה לשטח שעובדת בלי רשת ומערכת משרדית אחת: צ'קליסטים לפי דירה, מחזור תיקון תקלות, חתימה ודוח PDF נעול.",
  results: [
    { value: "₪100,000", label: "חסכון שנתי ללקוח" },
    { value: "3,300+", label: "נקודות בדיקה באתר" },
    { value: "6", label: "שבועות עד שתי החנויות" },
  ],
  stack: ["Flutter", "React", "Fastify", "PostgreSQL", "AWS"],
  url: "qc.site-control.co.il",
}
```

## Where each number comes from

Keep this section. If a prospect asks, these are the answers.

- **₪100,000 חסכון שנתי** — Alex's figure: what the client was paying per year
  for the way they worked before the system replaced it.
- **3,300+ נקודות בדיקה** — the first site's real structure: 7 buildings × 7
  floors × 4 apartments = 196 apartments, 17 room types each, so over 3,300
  places an inspection can be recorded. Arithmetic on the real site, not an
  estimate.
- **6 שבועות עד שתי החנויות** — first commit 2026-08-22 to builds submitted on
  Google Play and the App Store at the start of October.

Spare numbers, same honesty level, if one of the three needs replacing:

| value | label |
| --- | --- |
| 196 | דירות באתר הראשון |
| 0 | תלות ברשת בשטח |
| 4 | שפות מלאות כולל RTL |
| 2 | אפליקציות על backend אחד |
| 17 | סוגי חדרים בתבנית |

## Image

Not delivered yet. It will arrive as a sanitized screenshot of the office
progress matrix: Hebrew UI, landscape 1600×1000, JPEG under 300KB, no browser
chrome (the component draws its own frame). File goes to
`public/home/cases/` and is referenced as `/home/cases/<file>`.

Naming: use a neutral slug such as `construction-qc-matrix.jpg`. Never the
product name.

Until it lands, leave `image` out and the card shows the grey skeleton.

## Copy change 2026-10-14 (Alex)

Apps on both stores must read clearly on the card — prospects search for app
development. The published copy therefore differs from the table above:

- `title`: "מצ'קליסט על נייר לאפליקציה בשטח ומערכת ווב במשרד"
- `solution`: names the Android + iOS app and the office web system explicitly.
- third metric label: "שבועות עד App Store ו-Google Play".
- `stack` carries an "iOS + Android" chip.

Still inside the anonymity rules: store *names* are fine, a store *link* or the
product name is not.

## Still open

- Cards 2 (CTO לסטארטאפ) and 3 (AI agent) are not covered by this file; they
  come from other projects.
- A client quote would need the client's approval and does not exist today.
