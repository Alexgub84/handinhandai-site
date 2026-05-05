export const followupMessages = [
  {
    id: "m1",
    sender: "outgoing" as const,
    text: "היי נועה! אני ברוס מאקדמיית הלוחמים 😊\nאיך היה שיעור הניסיון אתמול?",
    timestamp: "10:03",
    status: "read" as const,
    delayBeforeMs: 600,
  },
  {
    id: "m2",
    sender: "incoming" as const,
    text: "היה כיף! האמת שהיה קצת מהיר בשבילי, אני די מתחילה ולא הצלחתי לעקוב בכל הקומבינות",
    timestamp: "10:18",
    delayBeforeMs: 3000,
  },
  {
    id: "m3",
    sender: "outgoing" as const,
    text: "תודה ששיתפת, נועה — זה חשוב. סימנתי לבעל הסטודיו שיחזור אלייך אישית עם המלצה על שיעור שיתאים לך יותר 💪",
    timestamp: "10:18",
    status: "read" as const,
    delayBeforeMs: 1200,
  },
];
