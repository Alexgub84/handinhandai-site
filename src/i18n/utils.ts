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
