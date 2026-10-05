import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const [, first] = url.pathname.slice(base.length).split('/');
  return isLang(first) ? first : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Odkaz na stránku v danom jazyku, vrátane base path. */
export function localizedPath(lang: Lang, path = ''): string {
  return getRelativeLocaleUrl(lang, path);
}

export function absoluteLocalizedUrl(lang: Lang, path = ''): string {
  return getAbsoluteLocaleUrl(lang, path);
}

/** Cesta k súboru v public/ s base path, napr. withBase('favicon.svg'). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export type { Lang };
