// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dysonans.pl',
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
});
