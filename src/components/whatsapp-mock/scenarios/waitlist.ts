/**
 * Gym scenario — Arnold bot, פאוור הוס studio.
 *
 * This scenario has two parallel threads happening in the same minute:
 *   1. waitlistCancellationMessages — Danny cancels his class
 *   2. waitlistFillMessages — Maya from the waitlist gets the freed spot
 *
 * Render them side-by-side if the layout supports it. Otherwise stack
 * vertically with "Thread A / Thread B" labels — the matching timestamps
 * (19:42 → 19:43) carry the story.
 */

export const waitlistCancellationMessages = [
  {
    id: "wc1",
    sender: "incoming" as const,
    text: "ארנולד, סליחה, לא אגיע מחר ב-07:00. משהו בעבודה 😔",
    timestamp: "19:42",
    delayBeforeMs: 600,
  },
  {
    id: "wc2",
    sender: "outgoing" as const,
    text: "אין בעיה דני, ביטלתי לך ✓\nאני משחרר את המקום לרשימת ההמתנה. נתראה בשבוע הבא!",
    timestamp: "19:42",
    status: "read" as const,
    delayBeforeMs: 1100,
  },
];

export const waitlistFillMessages = [
  {
    id: "wf1",
    sender: "outgoing" as const,
    text: "היי מאיה! התפנה מקום מחר ב-07:00 ב-CrossFit.\nרוצה אותו? (תגובה תוך שעה ועובר הלאה)",
    timestamp: "19:42",
    status: "read" as const,
    delayBeforeMs: 800,
  },
  {
    id: "wf2",
    sender: "incoming" as const,
    text: "כן!! 🙌",
    timestamp: "19:43",
    delayBeforeMs: 2200,
  },
  {
    id: "wf3",
    sender: "outgoing" as const,
    text: "שריינתי לך ✓ עידכנתי את היומן. נתראה מחר ב-07:00.",
    timestamp: "19:43",
    status: "read" as const,
    delayBeforeMs: 1000,
  },
];

/**
 * Backward-compat alias — points to the fill thread (the original
 * single-thread scenario). Remove this once consumers are updated to
 * import waitlistFillMessages explicitly.
 */
export const waitlistMessages = waitlistFillMessages;
