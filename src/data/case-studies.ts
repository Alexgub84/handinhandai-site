/**
 * Case studies for the homepage "לא רק מבטיחים. מראים." section.
 *
 * - `track` picks the colour + label: "01" = business systems (green),
 *   "02" = startup CTO (orange).
 * - `results[].value` is animated as a count-up when it contains a number
 *   ("72%", "40", "₪100,000", "3,300+"). Thousands separators are preserved.
 * - `image` is a screenshot of the system (browser-frame mock). Put files under
 *   `public/home/cases/` and reference them as "/home/cases/<file>".
 * - `logo` is a small square client logo (optional; otherwise the first letter of
 *   `client` is shown).
 *
 * Anonymity: the construction QC client ships the product under their own
 * developer account, so naming the product names the client. Keep `client`
 * generic, keep the invented hostname in `url`, and never put the product name
 * in copy, alt text or file names. See docs/handoff/case-01-construction-qc.md.
 */

export type CaseTrack = "01" | "02";

export interface CaseResult {
  value: string;
  label: string;
}

export interface CaseQuote {
  text: string;
  name: string;
  role: string;
}

export interface CaseStudy {
  track: CaseTrack;
  client: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: CaseResult[];
  stack: string[];
  /** Shown in the fake browser address bar. */
  url: string;
  quote?: CaseQuote;
  logo?: string;
  image?: string;
  /** Link to a full case-study page, if one exists. */
  href?: string;
}

export const TRACK_META: Record<CaseTrack, { color: string; label: string }> = {
  "01": { color: "var(--primary)", label: "מערכות לעסקים" },
  "02": { color: "var(--accent)", label: "CTO לסטארטאפ" },
};

export const caseStudies: CaseStudy[] = [
  {
    track: "01",
    client: "יזם בנייה למגורים",
    industry: "בנייה למגורים",
    title: "מצ'קליסט על נייר לאפליקציה בשטח ומערכת ווב במשרד",
    challenge:
      "בדיקות איכות באתר נרשמו על דפים ובוואטסאפ, תמונות התפזרו בין טלפונים, ובסוף אף אחד לא ידע מה אושר ומה נפתח מחדש.",
    solution:
      "אפליקציה לאנדרואיד ול-iOS שעובדת בשטח גם בלי רשת, ומערכת ווב למשרד: צ'קליסטים לפי דירה, מחזור תיקון תקלות, חתימה ודוח PDF נעול.",
    results: [
      { value: "₪100,000", label: "חסכון שנתי ללקוח" },
      { value: "3,300+", label: "נקודות בדיקה באתר" },
      { value: "6", label: "שבועות עד App Store ו-Google Play" },
    ],
    stack: ["Flutter", "iOS + Android", "React", "Fastify", "PostgreSQL", "AWS"],
    url: "qc.site-control.co.il",
  },
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
  },
];
