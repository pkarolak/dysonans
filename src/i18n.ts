export type Lang = 'pl' | 'en';
export type Txt = { pl: string; en: string };

export const t = (v: Txt | string, lang: Lang) => (typeof v === 'string' ? v : v[lang]);

export const routes = {
  home: { pl: '/', en: '/en/' },
  music: { pl: '/muzyka/', en: '/en/music/' },
  awards: { pl: '/nagrody/', en: '/en/awards/' },
  festival: { pl: '/festiwal/', en: '/en/festival/' },
  shop: { pl: '/sklep/', en: '/en/shop/' },
  contact: { pl: '/kontakt/', en: '/en/contact/' },
} as const;

export type RouteKey = keyof typeof routes;

export const nav: { key: RouteKey; label: Txt }[] = [
  { key: 'home', label: { pl: 'Start', en: 'Home' } },
  { key: 'music', label: { pl: 'Muzyka', en: 'Music' } },
  { key: 'awards', label: { pl: 'Nagrody', en: 'Awards' } },
  { key: 'festival', label: { pl: 'Festiwal', en: 'Festival' } },
  { key: 'shop', label: { pl: 'Sklep', en: 'Shop' } },
  { key: 'contact', label: { pl: 'Kontakt', en: 'Contact' } },
];
