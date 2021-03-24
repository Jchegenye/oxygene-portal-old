export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client-side-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/scss/global.scss',
    'ant-design-vue/dist/antd.css', // Global CSS: https://go.nuxtjs.dev/config-css
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
    },
    display: 'swap',
    download: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Laravel Sanctum conf
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.baseUrl || 'http://oxygene-portal.test',
        endpoints: {
          login: {
            url: '/api/login',
          },
          logout: {
            url: '/api/logout',
          },
          user: {
            url: '/api/user',
          },
        },
        user: {
          property: false,
        },
      },
    },
    scopeKey: 'label',

    redirect: {
      login: '/authentication/login',
      logout: '/',
      home: '/dashboard',
    },
  },

  // env variable for accessing either local or production api
  env: {
    baseUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://oxygene-portal.test:3000'
        : 'https://app.oxygene.co.ke',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
