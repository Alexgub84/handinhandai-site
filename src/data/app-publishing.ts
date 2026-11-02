/**
 * Pricing table, add-ons, exclusions and FAQ for `/app-publishing`.
 * Source of truth: docs/specs/app-publishing/offer.md, "Final website package
 * (v2, implement this)" → "Page 1: Landing page". Copied verbatim from that
 * file; a later price or FAQ change is a data edit here, not a component edit.
 *
 * Omitted on purpose: the "הסכם לדוגמה" (sample agreement PDF) line that the
 * spec lists in the ownership block and footer. Ruled out in work order #82 —
 * no such document exists yet, and a link to a contract that isn't there is
 * worse than no link.
 *
 * Also diverges from the spec on purpose (round 2 of work order #82): no
 * intake form exists yet, so every "form" reference became a WhatsApp
 * reference — `waMessage` here, plus the FAQ answer and the two steps/
 * what-we-do strings edited to match. Revert these to the spec's form
 * wording once /app-publishing/send ships (issue #83).
 */

export interface PricingRow {
  label: string;
  /** [Google-only, Apple-only, both-stores] — same column order as `columns`. */
  values: [string, string, string];
  /** Marks the headline price row for visual emphasis. */
  highlight?: boolean;
}

export interface PricingTable {
  columns: [string, string, string];
  rows: PricingRow[];
}

export interface AddOn {
  label: string;
  price: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

/**
 * WhatsApp prefill text for every CTA on this page (hero, header, any
 * closing CTA) — issue #82 round 2, design §C3. Not the homepage's own
 * default greeting (`waGreeting` in site-contact.ts): this one names the
 * free readiness check so the conversation starts on-topic.
 */
export const waMessage = "היי אלכס, בניתי אפליקציה ואשמח לבדיקת מוכנות חינם לפני העלאה לחנויות";

export const pricingTable: PricingTable = {
  columns: ["השקה בגוגל פליי", "השקה באפ סטור", "שתי החנויות"],
  rows: [
    {
      label: "בדיקת מוכנות של מפתח",
      values: ["כלול", "כלול", "כלול"],
    },
    {
      label: "פרסום מלא: קובץ, דף חנות, טפסים, הגשה, סבב בדיקה",
      values: ["מהחשבון העסקי שלנו", "מהחשבון שלכם, אנחנו עושים הכל", "שניהם"],
    },
    {
      label: "עדכונים",
      values: ["עד 2 בחודש, 3 חודשים", "עד 2 בחודש, 3 חודשים", "עד 2 בחודש לכל חנות, 3 חודשים"],
    },
    {
      label: "תמיכה",
      values: ["וואטסאפ, בעברית", "וואטסאפ, בעברית", "וואטסאפ, בעברית"],
    },
    {
      label: "מחיר",
      values: ["590 ₪", "790 ₪", "1,290 ₪"],
      highlight: true,
    },
    {
      label: "אחרי 3 חודשים",
      values: ["150 ₪ לחודש או העברה", "190 ₪ לחודש", "290 ₪ לחודש"],
    },
  ],
};

export const addOns: AddOn[] = [
  { label: "העברת האפליקציה בגוגל לחשבון שלכם (כולל ליווי בפתיחת חשבון עסקי ומספר D-U-N-S)", price: "290 ₪" },
  { label: "עדכון מעבר לחבילה", price: "120 ₪ לחנות" },
  { label: "צילומי מסך מעוצבים", price: "200 ₪ לחנות" },
];

export const exclusions: string[] = [
  "אגרות החנויות (גוגל 25$ חד פעמי, אפל 99$ לשנה, משולמות ישירות לחנויות)",
  "פיתוח ותיקונים",
  "כתיבת מדיניות פרטיות מאפס (נפנה למחולל)",
];

export const faq: FaqEntry[] = [
  {
    question: "למה בגוגל מהחשבון שלכם ובאפל מהחשבון שלי?",
    answer:
      "גוגל מאפשרת פרסום מחשבון אחד והעברה רשמית לחשבון אחר, ולחשבון עסקי אין דרישת טסטרים, אז זה חוסך לכם שבועות. אפל רוצה שהאפליקציה תפורסם מחשבון של בעל האפליקציה, ומאפשרת להזמין אנשי מקצוע לחשבון. אז שם אתם פותחים חשבון (99$ לשנה, 20 דקות), ואנחנו עושים את העבודה.",
  },
  {
    // "מדריך מלא: קישור למאמר." dropped per work order #82 round 2, §C1 — no
    // article exists yet. Put the link back here once the long-form article
    // (out of scope for #82, its own ticket) ships.
    question: "האם אני צריך מק?",
    answer: "לא. לאנדרואיד כל מחשב. ל-iOS אנחנו בונים ומעלים מהמק שלנו, או דרך Expo EAS אם האפליקציה שלכם ב-Expo.",
  },
  {
    question: "מתי אוכל להעביר את האפליקציה בגוגל לחשבון שלי?",
    answer:
      "כשיש לכם חשבון עסקי (עוסק או חברה ומספר D-U-N-S) או חשבון פרטי שכבר קיבל גישה לייצור. העברה לחשבון פרטי חדש לא עוקפת את דרישת הטסטרים, כי הדרישה היא על החשבון. אנחנו מלווים בפתיחת החשבון העסקי.",
  },
  {
    question: "מה אם האפליקציה נדחית?",
    answer:
      "זה קורה, במיוחד באפל בהגשה ראשונה. תקבלו את סעיף הדחייה, הסבר בעברית, ומה בדיוק לשנות. אתם מתקנים (או המפתח שלכם), אנחנו מגישים מחדש. בלי תשלום נוסף בתוך החבילה.",
  },
  {
    question: "מה בודקים בבדיקת המוכנות?",
    answer:
      "התקנה והרצה על טלפון אמיתי, התחברות ופעולה מרכזית, מחיקת חשבון בתוך האפליקציה, מדיניות פרטיות מול מה שבאמת נאסף, גרסת SDK (אנדרואיד 16, iOS 26), הרשאות והסברים, תשלומים דיגיטליים דרך החנות, נכסים (אייקון, צילומי מסך), שם זמין, ואין נכסים או שמות של מותגים אחרים.",
  },
  {
    question: "אתם מתקנים באגים?",
    answer: "לא בחבילה. אם צריך, נציע הצעת מחיר נפרדת או נפנה למפתח.",
  },
  {
    question: "כמה זמן זה לוקח?",
    answer:
      "בדיקת מוכנות: יום עסקים. גוגל: באוויר בדרך כלל תוך 1 עד 7 ימים מהתשלום. אפל: 1 עד 3 ימים לבדיקה, פלוס זמן לתיקונים אם יש דחייה. חשבון אפל חדש לוקח לאפל 1 עד 3 ימים לאשר.",
  },
  {
    // Last sentence replaced per work order #82 round 2, §C2 — "הטופס מפרט
    // הכל" refers to the intake form, which doesn't exist yet (#83).
    question: "מה צריך לשלוח?",
    answer:
      "גוגל: קובץ AAB חתום. אפל: גישה לריפו (GitHub) או פרויקט מכווץ. שניהם: אייקון 1024x1024, לפחות 3 צילומי מסך, שם, תיאור קצר וארוך, קישור למדיניות פרטיות, אימייל תמיכה, ומשתמש לבדיקה אם יש התחברות. את הרשימה המלאה תקבלו בתשובה הראשונה.",
  },
  {
    question: "מה אתם לא מפרסמים?",
    answer:
      "הימורים, תוכן למבוגרים, מסחר בקריפטו, הלוואות, אפליקציות עם הבטחות רפואיות, העתקות של אפליקציות או מותגים קיימים, ואפליקציות שהן רק אתר בתוך מסגרת.",
  },
  {
    question: "יש הנחה לכמה אפליקציות?",
    answer: "כן. מהאפליקציה השנייה 20% הנחה על ההשקה.",
  },
];
