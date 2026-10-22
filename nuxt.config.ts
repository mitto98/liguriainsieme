export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [
    '@fontsource/staatliches/400.css',
    '@fontsource/open-sans/400.css',
    '@fontsource/open-sans/600.css',
    '@fontsource/open-sans/700.css',
    '~/assets/css/main.css',
  ],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'it' },
      title: 'Liguria Insieme',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#173d66' },
        {
          name: 'description',
          content:
            'Liguria Insieme, la nuova esperienza civica: il movimento aperto a cittadini, amministratori, professionisti e associazioni che si riconoscono in responsabilità, merito, buona amministrazione e concretezza.',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: (process.env.NUXT_APP_BASE_URL || '/') + 'favicon.svg' }],
    },
  },
  nitro: {
    prerender: { routes: ['/', '/chi-siamo', '/team', '/eventi', '/aderisci'], crawlLinks: true },
  },
})
