/**
 * Case studies for the homepage "לא רק מבטיחים. מראים." section.
 *
 * TODO(alex): every bracketed Hebrew string and every "XX" value below is a
 * placeholder copied from the v3 prototype. Replace with real data. Fields marked
 * optional (`logo`, `image`, `href`) render a skeleton / are hidden until filled.
 *
 * - `track` picks the colour + label: "01" = business systems (green),
 *   "02" = startup CTO (orange).
 * - `results[].value` is animated as a count-up when it contains a number
 *   (e.g. "72%", "40", "$1.2M"). Non-numeric values render as a muted placeholder.
 * - `image` is a screenshot of the system (browser-frame mock). Put files under
 *   `public/home/cases/` and reference them as "/home/cases/<file>".
 * - `logo` is a small square client logo (optional; otherwise the first letter of
 *   `client` is shown).
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
    client: "[שם העסק]",
    industry: "[תחום — למשל: נדל״ן / קליניקה / לוגיסטיקה]",
    title: "[התוצאה במשפט אחד — למשל: מ-5 מערכות מפוזרות לפלטפורמה אחת]",
    challenge:
      "[מה היה המצב לפני? משפט–שניים על הכאב: עבודה ידנית, מערכות שלא מדברות, לידים שנופלים…]",
    solution:
      "[מה בנינו? למשל: CRM מותאם אישית + סוכן AI שמטפל בלידים בוואטסאפ + סנכרון אוטומטי להנהלת חשבונות]",
    results: [
      { value: "XX%", label: "פחות עבודה ידנית" },
      { value: "XX", label: "שעות נחסכו בחודש" },
      { value: "XX", label: "ימים עד הטמעה מלאה" },
    ],
    stack: ["Custom CRM", "AI Agent", "WhatsApp API", "Automations"],
    url: "app.client-name.co.il",
    quote: {
      text: "[ציטוט קצר מהלקוח — איך השתנה לו היום-יום]",
      name: "[שם]",
      role: "[תפקיד, שם העסק]",
    },
  },
  {
    track: "02",
    client: "[שם המיזם]",
    industry: "[תחום — למשל: SaaS / Fintech / HealthTech]",
    title: "[למשל: מרעיון על מפית ל-MVP באוויר תוך XX שבועות]",
    challenge: "[איפה המיזם עמד? רעיון מוכח בלי צוות טכני / מוצר קיים שנתקע / צורך בגיוס]",
    solution: "[מה עשינו? ארכיטקטורה, בניית צוות, MVP מהיר, אסטרטגיית מוצר ושיווק]",
    results: [
      { value: "XX", label: "שבועות עד MVP" },
      { value: "$XM", label: "גיוס סבב ראשון" },
      { value: "XX", label: "משתמשים פעילים" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS"],
    url: "startup-name.com",
    quote: {
      text: "[ציטוט מהיזם — מה המשמעות של שותף טכנולוגי שחושב ביזנס]",
      name: "[שם]",
      role: "[מייסד/ת, שם המיזם]",
    },
  },
  {
    track: "01",
    client: "[שם הלקוח]",
    industry: "[תחום]",
    title: "[למשל: סוכן AI שעונה ל-100% מהפניות — גם בשלוש בלילה]",
    challenge: "[מה כאב? פניות שלא נענות, צוות שטובע בהודעות, מעקב במיילים]",
    solution: "[מה בנינו? סוכן AI מחובר לוואטסאפ וליומן, שקובע תורים ומעדכן את ה-CRM]",
    results: [
      { value: "XX%", label: "פניות שנענות אוטומטית" },
      { value: "XX", label: "שניות זמן תגובה" },
      { value: "XX%", label: "יותר פגישות שנקבעות" },
    ],
    stack: ["AI Agent", "WhatsApp API", "Calendar", "CRM"],
    url: "dashboard.client.co.il",
  },
];
