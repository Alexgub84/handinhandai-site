/**
 * Case studies for the homepage "לא רק מבטיחים. מראים." section.
 *
 * - `track` picks the colour + label: "01" = business systems (green),
 *   "02" = startup CTO (orange).
 * - `results[].value` is animated as a count-up when it contains a number
 *   ("72%", "40", "₪100,000", "3,300+"). Thousands separators are preserved.
 *   No card carries results today: on 2026-10-16 the review asked for the metric
 *   tiles to come off every card, because a figure a reader cannot verify costs
 *   more trust than it buys. The rendering stays for a case with numbers a
 *   client has agreed to publish.
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
  /** Exactly three outcome tiles. Omitted on every card today — see the note above. */
  results?: CaseResult[];
  stack: string[];
  /** Shown in the fake browser address bar. */
  url: string;
  quote?: CaseQuote;
  logo?: string;
  image?: string;
  /** Link to a full case-study page, if one exists. */
  href?: string;
  /**
   * Shows "זמין ב App Store / Google Play" badges under the client name.
   * Only for a product a reader can actually find by name. The anonymous
   * construction client's app ships under the client's own account and its name
   * never appears on this site, so badges there send people on a search that
   * fails — removed 2026-10-16.
   */
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
    title: "מערכת לניהול ובקרת איכות בכל הדירות באתר",
    challenge:
      "באתר עם מאות דירות אי אפשר היה לדעת מה כבר הותקן, מה נבדק ומה נפתח מחדש. הדיווחים נרשמו על דפים ובוואטסאפ, והתמונות התפזרו בין הטלפונים.",
    solution:
      "מערכת שמנהלת את כל האתר: לכל בניין, קומה ודירה יש צ'קליסט התקנה ובדיקה, מעקב אחרי תיקון ליקויים, חתימה ודוח מסודר. בשטח אפליקציה שעובדת גם בלי רשת, ובמשרד מסך שמראה איפה כל דירה עומדת.",
    stack: ["Flutter", "iOS + Android", "React", "Fastify", "PostgreSQL", "AWS"],
    url: "qc.site-control.co.il",
    image: "/home/cases/construction-qc-matrix.jpg",
  },
  {
    track: "01",
    client: "קבלן ביצוע",
    industry: "בנייה ותשתיות",
    title: "מערכת לניהול הזמנות, מלאי, ומעקב אחרי תעודות משלוח בעזרת AI",
    challenge:
      "קבלן בתחום הבנייה התמודד עם ערימות של ניירת, תעודות משלוח הלכו לאיבוד, היה קשה לעשות מעקב אחרי חוסרים, והכל התנהל בצורה מסורבלת שבזבזה המון זמן וכוח אדם.",
    solution:
      "מערכת הזמנות לנייד ולמשרד עם אישור רכש, שליחה לספק בוואטסאפ, ומודל AI שקורא את תעודת המשלוח המצולמת ומשווה אותה שורה-שורה להזמנה. כך נחסך זמן גם למנהל, גם לספקים וגם להנהלת החשבונות, הבדיקות יותר מדויקות, ופערים מתגלים הרבה יותר מהר.",
    stack: ["Remix", "PostgreSQL", "Gemini Vision", "WhatsApp API", "PWA"],
    url: "orders.site-materials.co.il",
    image: "/home/cases/construction-orders-board.jpg",
  },
  {
    track: "02",
    client: "Chillist",
    industry: "אפליקציה לתכנון קבוצתי",
    title: "אפליקציה לתכנון טיולים עם סוכן AI שמנהל את הרשימה בוואטסאפ",
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
