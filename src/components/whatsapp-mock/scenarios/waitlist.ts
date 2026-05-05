export const waitlistMessages = [
  {
    id: "g1",
    sender: "outgoing" as const,
    text: "היי מאיה! התפנה מקום מחר ב-07:00 ב-CrossFit.\nרוצה אותו? (תגובה תוך שעה ועובר הלאה)",
    timestamp: "19:42",
    status: "read" as const,
    delayBeforeMs: 800,
  },
  {
    id: "g2",
    sender: "incoming" as const,
    text: "כן!! 🙌",
    timestamp: "19:43",
    delayBeforeMs: 2200,
  },
  {
    id: "g3",
    sender: "outgoing" as const,
    text: "שריינתי לך ✓ עידכנתי את היומן. נתראה מחר ב-07:00.",
    timestamp: "19:43",
    status: "read" as const,
    delayBeforeMs: 1000,
  },
];
