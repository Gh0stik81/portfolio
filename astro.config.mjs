// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gh0stik81.github.io',
  base: '/portfolio',
  i18n: {
    locales: ['sk', 'en'],
    defaultLocale: 'sk',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
