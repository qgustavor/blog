export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/scripts',
    'vue-sonner/nuxt'
  ],

  imports: {
    presets: [
      {
        from: 'vue-sonner',
        imports: ['toast']
      }
    ]
  },

  devtools: {
    enabled: true,
    telemetry: false
  },
  telemetry: false,
  target: 'static',

  css: ['~/assets/style/main.css'],

  site: {
    url: 'https://qgustavor.tk',
    name: "qgustavor's website",
    defaultLocale: 'en',
    indexable: true
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  content: {
    renderer: {
      anchorLinks: false
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true
    }
  },

  mdc: {
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-dark',
        light: 'github-light'
      }
    }
  },

  routeRules: {
    // Needed to activate preview on Nuxt Studio
    '/': { prerender: false }
  },

  experimental: {
    viewTransition: true
  },

  compatibilityDate: '2025-01-05',

  nitro: {
    experimental: {
      websocket: true
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/en', '/pt']
    }
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US' },
      { code: 'pt', name: 'Português', language: 'pt-BR' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    strategy: 'prefix',
    defaultLocale: 'en'
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons'
      }
    ],
    clientBundle: {
      scan: true,
      includeCustomCollections: true
    },
    provider: 'iconify'
  },

  ogImage: {
    zeroRuntime: true
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})
