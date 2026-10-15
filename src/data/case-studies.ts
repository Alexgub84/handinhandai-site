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

/** App stores a product ships in; rendered as badges on the card. */
export type CaseStore = "appstore" | "googleplay";

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
  /** Exactly three outcome tiles, or omitted when a card has nothing honest to count. */
  results?: CaseResult[];
  stack: string[];
  /** Shown in the fake browser address bar. */
  url: string;
  quote?: CaseQuote;
  logo?: string;
  image?: string;
  /** Link to a full case-study page, if one exists. */
  href?: string;
  /** Shows "זמין ב App Store / Google Play" badges under the client name. */
  stores?: CaseStore[];
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
    title: "מערכת לניהול ההתקנות ובקרת האיכות בכל הדירות באתר",
    challenge:
      "באתר עם מאות דירות אי אפשר היה לדעת מה כבר הותקן, מה נבדק ומה נפתח מחדש. הדיווחים נרשמו על דפים ובוואטסאפ, והתמונות התפזרו בין הטלפונים.",
    solution:
      "מערכת שמנהלת את כל האתר: לכל בניין, קומה ודירה יש צ'קליסט התקנה ובדיקה, מעקב אחרי תיקון ליקויים, חתימה ודוח מסודר. בשטח אפליקציה שעובדת גם בלי רשת, ובמשרד מסך שמראה איפה כל דירה עומדת.",
    results: [
      { value: "₪100,000", label: "חסכון שנתי ללקוח" },
      { value: "196", label: "דירות במעקב באתר אחד" },
      { value: "100%", label: "מהבדיקות מתועדות וחתומות" },
    ],
    stack: ["Flutter", "iOS + Android", "React", "Fastify", "PostgreSQL", "AWS"],
    url: "qc.site-control.co.il",
    stores: ["appstore", "googleplay"],
    image: "/home/cases/construction-qc-matrix.jpg",
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
      { value: "500+", label: "חוסרים שנתפסים בשנה" },
      { value: "93%", label: "תעודות שנבדקות תוך 36 שעות" },
      { value: "20", label: "דקות מהזמנה עד אישור" },
    ],
    stack: ["Remix", "PostgreSQL", "Gemini Vision", "WhatsApp API", "PWA"],
    url: "orders.site-materials.co.il",
    image: "/home/cases/construction-orders-board.jpg",
  },
  {
    track: "02",
    client: "Chillist",
    industry: "אפליקציה לתכנון קבוצתי",
    title: "אפליקציה לנייד עם סוכן AI שמנהל את הרשימה בוואטסאפ",
    challenge:
      "תכנון של טיול או אירוע קבוצתי נגמר בגיליון אלקטרוני ובשרשור וואטסאפ מבולגן, ואף אחד לא יודע מי מביא מה ומה כבר נקנה.",
    solution:
      "אפליקציה לאנדרואיד ולאייפון שמחזיקה רשימה משותפת לכל הקבוצה, עם סוכן AI שיושב בוואטסאפ: כותבים לו בצ'אט או בקבוצה והוא מוסיף פריטים, מעדכן מה כבר נקנה ומחלק מי מביא מה. החיבור הוא לממשק הרשמי של מטא, בלי מתווך.",
    stack: ["React 19", "Expo", "Fastify", "PostgreSQL", "Meta WhatsApp API", "Vercel AI SDK"],
    url: "chillist-fe.pages.dev",
    stores: ["appstore", "googleplay"],
    image: "/home/cases/chillist-mobile.jpg",
  },
];
