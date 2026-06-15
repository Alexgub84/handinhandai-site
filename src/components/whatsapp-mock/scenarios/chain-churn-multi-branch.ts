import type { Message } from "@/vendor/whatsapp-chat-mock/index.js";

export const chainChurnMultiBranchMessages: Message[] = [
  {
    id: "cm1",
    sender: "outgoing",
    text: "היי שירה :) שמנו לב שלא ראינו אותך בסניף הרצליה כבר 3 שבועות. הכל בסדר?",
    timestamp: "14:32",
    status: "read",
    delayBeforeMs: 600,
  },
  {
    id: "cm2",
    sender: "incoming",
    text: "היי, סליחה.. נסחפתי בעבודה. וגם עברתי דירה לתל אביב",
    timestamp: "14:45",
    delayBeforeMs: 1900,
  },
  {
    id: "cm3",
    sender: "outgoing",
    text: "וואו, מזל טוב על המעבר 🏠 דרך אגב — יש לנו סניף ברחוב לבונטין, 4 דקות הליכה מהכתובת החדשה שלך",
    timestamp: "14:46",
    status: "read",
    delayBeforeMs: 1200,
  },
  {
    id: "cm4",
    sender: "incoming",
    text: "באמת? לא ידעתי",
    timestamp: "14:48",
    delayBeforeMs: 1800,
  },
  {
    id: "cm5",
    sender: "outgoing",
    text: "כן, גם פתוח עד 23:00. רוצה שאשריין לך שיעור חזרה השבוע? עלינו 💪",
    timestamp: "14:48",
    status: "read",
    delayBeforeMs: 1100,
  },
  {
    id: "cm6",
    sender: "incoming",
    text: "סבבה, יום שני בערב",
    timestamp: "14:50",
    delayBeforeMs: 1700,
  },
  {
    id: "cm7",
    sender: "outgoing",
    text: "שני 20:00 · יוגה דינמית בלבונטין. רשמתי ✓ נשמח לראות אותך!",
    timestamp: "14:50",
    status: "read",
    delayBeforeMs: 1000,
  },
];
