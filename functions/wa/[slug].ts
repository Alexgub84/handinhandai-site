interface Env {}

interface ShortLink {
  whatsappUrl: string;
  title: string;
  description: string;
  image: string;
}

const SHORTLINKS: Record<string, ShortLink> = {
  "lac-gel": {
    whatsappUrl:
      "https://wa.me/972545053620?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%A6%D7%91%D7%AA%20%D7%9C%D7%A7%20%D7%92%27%D7%9C%20%D7%95%D7%A7%D7%99%D7%91%D7%9C%D7%AA%D7%99%20%D7%94%D7%95%D7%93%D7%A2%D7%94%20%D7%9E%D7%90%D7%9C%D7%9B%D7%A1%20%D7%91%D7%90%D7%99%D7%A0%D7%A1%D7%98%D7%94%20%D7%95%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A4%D7%92%D7%99%D7%A9%D7%94",
    title: "Hand in Hand AI — קביעת פגישה",
    description: "קביעת פגישה עם המעצבת — Lac Gel",
    image: "/og/wa/lac-gel.jpg",
  },
  "home-cta": {
    // "Hi Alex, I came from the website and would like to schedule a consultation"
    whatsappUrl:
      "https://wa.me/972545053620?text=%D7%94%D7%99%D7%99%20%D7%90%D7%9C%D7%9B%D7%A1%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%95%D7%A2%20%D7%A9%D7%99%D7%97%D7%AA%20%D7%99%D7%99%D7%A2%D7%95%D7%A5",
    title: "Hand in Hand AI — קביעת שיחת ייעוץ",
    description: "צוות AI מותאם אישית לעסק שלכם. שיחה של 20 דקות, בלי מצגות.",
    image: "/og/default.png",
  },
};

const BOT_UA_PATTERNS = [
  "whatsapp",
  "facebookexternalhit",
  "facebot",
  "twitterbot",
  "slackbot",
  "linkedinbot",
  "telegrambot",
  "discordbot",
  "skypeuripreview",
  "pinterest",
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_UA_PATTERNS.some((pattern) => ua.includes(pattern));
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderPreviewHtml(link: ShortLink, canonicalUrl: string, imageUrl: string): string {
  const title = escapeHtml(link.title);
  const description = escapeHtml(link.description);
  const image = escapeHtml(imageUrl);
  const url = escapeHtml(canonicalUrl);
  const whatsapp = escapeHtml(link.whatsappUrl);

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<title>${title}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="he_IL">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${image}">
</head>
<body>
<p><a href="${whatsapp}">${title}</a></p>
</body>
</html>`;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const slug = context.params.slug;
  if (typeof slug !== "string") {
    return new Response("Not Found", { status: 404 });
  }

  const link = SHORTLINKS[slug];
  if (!link) {
    return new Response("Not Found", { status: 404 });
  }

  const userAgent = context.request.headers.get("user-agent") ?? "";
  const requestUrl = new URL(context.request.url);
  const canonicalUrl = `${requestUrl.origin}/wa/${slug}`;
  const imageUrl = `${requestUrl.origin}${link.image}`;

  if (isBot(userAgent)) {
    const html = renderPreviewHtml(link, canonicalUrl, imageUrl);
    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  }

  return Response.redirect(link.whatsappUrl, 302);
};
