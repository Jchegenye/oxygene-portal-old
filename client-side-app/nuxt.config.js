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
  plugins: ['@/plugins/antd-ui', '~/plugins/axios', '~/plugins/draggable'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/wizardforms'
    ]
  },

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
    '@nuxtjs/axios', // https://go.nuxtjs.dev/axios
    '@nuxtjs/auth-next',
    'bootstrap-vue/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    credentials: true,
  },

  // Laravel Sanctum conf
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.BASE_URL,
        endpoints: {
          login: {
            url: process.env.API_URL + '/login',
          },
          register: {
            url: process.env.API_URL + '/register',
          },
          logout: {
            url: process.env.API_URL + '/logout',
          },
          user: {
            url: process.env.API_URL + '/user',
          },
        },
        user: {
          property: false,
        },
      },
      google: {
        clientId: '...'
      },
      cookie: {
        cookie: {
          // (optional) If set we check this cookie exsistence for loggedIn check
          name: 'XSRF-TOKEN',
        },
        endpoints: {
          // (optional) If set, we send a get request to this endpoint before login
          csrf: {
            url: ''
          }
        }
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
  build: {
    transpile: ['@nuxtjs/auth-next'],
    babel: {
      plugins: [['import', { libraryName: 'ant-design-vue', style: 'css' }]],
    },
  },
  // https://nuxtjs.org/blog/going-full-static
  target: 'static',
}
