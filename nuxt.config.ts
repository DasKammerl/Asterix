export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  components: [
    { path: '~/components', pathPrefix: false }
  ],

  tailwindcss: {
    configPath: 'tailwind.config.js'
  },

  css: ['~/assets/css/tailwind.css'],

  runtimeConfig: {
    public: {
      siteName: 'Das Kammerl',
      siteUrl: 'https://daskammerl.at',
      siteLanguage: 'de-AT',
      defaultSeoDescription:
        'Das Kammerl – Boulderhalle Wieselburg. Kammerl Bouldern 24/7, Zutritt per Keycard-App. Preise, Anfahrt, Vision.',
      defaultOgImage: '/images/index_image_1.jpg'
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/price', '/location', '/vision', '/sponsoren', '/impressum', '/datenschutz', '/robots.txt', '/sitemap.xml']
    }
  },

  app: {
    baseURL: '/',
    head: {
      title: 'Das Kammerl',
      titleTemplate: '%s | Das Kammerl',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'application-name', content: 'daskammerl' },
        { name: 'apple-mobile-web-app-title', content: 'daskammerl' },
        { name: 'generator', content: 'Nuxt' },
        { name: 'keywords', content: 'Das Kammerl, Kammerl, Kammerl Bouldern, Boulderhalle Wieselburg, Bouldern Wieselburg, daskammerl, daskammerl.at, Bewegungsgarage Wieselburg, Kletterhalle Wieselburg' },
        { name: 'theme-color', content: '#1E3A5F' },
        { name: 'author', content: 'Das Kammerl' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:locale', content: 'de_AT' }
      ],
      link: [
        { rel: 'alternate', hreflang: 'de-AT', href: 'https://daskammerl.at/' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://daskammerl.at/' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/png', href: '/images/Icon_Hand.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/images/Icon_Hand.png' },
        { rel: 'apple-touch-icon', href: '/images/Icon_Hand.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  }
})
