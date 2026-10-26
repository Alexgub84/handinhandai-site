import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    const langStrings = ui[lang] as Record<string, string>;
    return langStrings[key] || ui[defaultLang][key];
  };
}

// All non-default language prefixes (he is the default and carries no prefix).
const knownLangs = ['en'];

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);

  if (parts[0] && knownLangs.includes(parts[0])) {
    return '/' + parts.slice(1).join('/');
  }
  return pathname;
}

// Routes that have a real, rendering English page (an `[lang]/` counterpart
// with distinct English content). Empty today: about/terms/privacy-sasha
// hardcode `lang={defaultLang}` and have no English route at all, so emitting
// hreflang/switcher links to `/en/*` for them points at a 404. The homepage
// (`/`) is handled separately — it doesn't consult this list (see
// `HomeDocument.astro`, which emits no hreflang block).
const ENGLISH_ROUTES: readonly string[] = [];

/** Does this language-neutral route (e.g. `/about`) have a real English variant? */
export function hasEnglishVariant(route: string): boolean {
  const normalized = route === '' ? '/' : route;
  return ENGLISH_ROUTES.includes(normalized);
}

export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

export function isRtl(lang: Lang): boolean {
  return lang === 'he';
}

export function getDirection(lang: Lang): 'rtl' | 'ltr' {
  return isRtl(lang) ? 'rtl' : 'ltr';
}
