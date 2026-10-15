# Case card 2 — materials ordering + AI delivery verification (track 01)

Data for `src/data/case-studies.ts`, second entry. Source project is a live
ordering and delivery-verification system in daily use by a construction
contractor (Hebrew, RTL, mobile first, installable PWA).

## Anonymity rules

- Client is **anonymous and reads as a different client from card 1**:
  `client: "קבלן ביצוע"`, `industry: "בנייה ותשתיות"`.
- `url` is display-only inside the fake browser frame. `orders.site-materials.co.il`
  is invented; do not swap in the real one.
- The screenshot ships as delivered, product mark included — Alex cleared that on
  2026-10-14. Site, supplier, people and company names inside the screenshot were
  already replaced when the shot was taken; quantities, dates and statuses are real.
- No `quote`, no `href`.

## Source window

Field report covering **1 Aug – 14 Oct 2026**: 75 calendar days, 54 working days
with orders. No pilot and no seeded demo data — ordinary site work.

| measured in the window | value |
| --- | --- |
| orders raised | 377 |
| order lines | 1,742 (26,545 units of material) |
| lines checked by the model against a photographed note | 900 |
| lines short or absent from the note | 111, across 38 deliveries |
| deliveries verified by AI | 108 (152 document pages read) |
| WhatsApp notifications sent | 1,952 (11 automatic triggers) |
| active sites / people raising orders | 17 / 16 |
| delivery notes verified within 36h of delivery | 93% |
| median time raised → approved | 20 minutes |
| model lines later edited by a person | 0 |

## Card numbers and how they were derived

Alex asked for yearly figures on 2026-10-14 ("the numbers are from 3 months, let's
show yearly"). Two of the three are a **run rate from the window**, labelled as
such on the card; the third is measured, not extrapolated.

| card value | label | basis |
| --- | --- | --- |
| `1,800+` | הזמנות בשנה (קצב נוכחי) | 377 orders ÷ 75 days × 365 = 1,835. Working-day basis gives 1,745 (377 ÷ 54 × 250), so 1,800+ sits between the two |
| `500+` | חוסרים שנתפסים בשנה | 111 short/absent lines ÷ 75 × 365 = 540; working-day basis 514 |
| `93%` | תעודות שאומתו תוך 36 שעות | measured over the window, not annualised |

If a prospect asks, the honest sentence is: "three months of production use,
annualised at the current rate." Never present the run rate as a completed year.

## Ready to paste

```ts
{
  track: "01",
  client: "קבלן ביצוע",
  industry: "בנייה ותשתיות",
  title: "הזמנות חומרים מהשטח, ותעודות משלוח שנבדקות ב-AI",
  challenge:
    "הזמנות חומרים נשלחו בוואטסאפ ובטלפון, ותעודות המשלוח נערמו במשרד. חוסרים התגלו שבועות אחר כך מול החשבונית, אם בכלל.",
  solution:
    "מערכת הזמנות לנייד ולמשרד עם אישור רכש, שליחה לספק בוואטסאפ, ומודל AI שקורא את תעודת המשלוח המצולמת ומשווה אותה שורה-שורה להזמנה.",
  results: [
    { value: "1,800+", label: "הזמנות בשנה (קצב נוכחי)" },
    { value: "500+", label: "חוסרים שנתפסים בשנה" },
    { value: "93%", label: "תעודות שאומתו תוך 36 שעות" },
  ],
  stack: ["Remix", "PostgreSQL", "Gemini Vision", "WhatsApp API", "PWA"],
  url: "orders.site-materials.co.il",
  image: "/home/cases/construction-orders-board.jpg",
}
```

## Image

`public/home/cases/construction-orders-board.jpg` — the control board (first
screen after login), 1600×1055, 124 KB. Taken from the project's field-report
showcase page, resized only.

Other screens available from the same source if a swap is ever wanted: orders
list, single order with its timeline, line-by-line reconciliation, the
photographed delivery note, catalogue search, the three-step order wizard, and
five phone screens.

## Spare numbers

Same honesty level, if one of the three ever needs replacing.

| value | label |
| --- | --- |
| 8,400+ | שורות הזמנה בשנה (קצב נוכחי) |
| 17 | אתרים פעילים |
| 16 | אנשים שמזמינים מהשטח |
| 20 | דקות חציוניות עד אישור הזמנה |
| 0 | שורות שהמודל טעה בהן ותוקנו ידנית |
