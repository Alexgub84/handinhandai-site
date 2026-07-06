const WHATSAPP_NUMBER = "972545053620";

/** Default greeting prefilled in the WhatsApp composer from homepage CTAs. */
export const waGreeting = "היי, הגעתי מהאתר ואשמח לשיחת אבחון";

/** Build a wa.me link with optional custom prefilled text (falls back to the greeting). */
export const waLink = (text?: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent((text ?? "").trim() || waGreeting)}`;

/** Legal identity for Meta Business Verification — must match Business Manager + tax documents character-for-character. */
export const legal = {
  brand: "handinhand (Hand In Hand AI)",
  legalName: { he: "אלכס גוברמן", en: "Alex Guberman" },
  osekType: { he: "עוסק פטור", en: "Sole proprietor (Osek Patur)" },
  osekNumber: "323227199",
  city: { he: "רמת גן", en: "Ramat Gan" },
  /** Full address is published only on /about and the privacy identity block — never in footers. */
  address: { he: "האשל 8, רמת גן", en: "Ha'Eshel 8, Ramat Gan" },
  businessPhoneDisplay: "054-634-0926",
  businessPhoneTel: "+972546340926",
} as const;

export const siteContact = {
  email: "alexg@handinhandai.com",
  phoneDisplay: "054-505-3620",
  phoneTel: "+972545053620",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  /** WhatsApp link with the default diagnostic greeting — used by homepage CTAs. */
  whatsappCta: waLink(),
} as const;
