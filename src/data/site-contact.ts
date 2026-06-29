const WHATSAPP_NUMBER = "972549236292";

/** Default greeting prefilled in the WhatsApp composer from homepage CTAs. */
export const waGreeting = "היי, הגעתי מהאתר ואשמח לשיחת אבחון";

/** Build a wa.me link with optional custom prefilled text (falls back to the greeting). */
export const waLink = (text?: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent((text ?? "").trim() || waGreeting)}`;

export const siteContact = {
  email: "alexg@handinhandai.com",
  phoneDisplay: "054-923-6292",
  phoneTel: "+972549236292",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  /** WhatsApp link with the default diagnostic greeting — used by homepage CTAs. */
  whatsappCta: waLink(),
} as const;
