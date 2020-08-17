export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#E0115F' },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    {src: "~assets/styles/base.scss", lang: 'scss'}
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~plugins/strings.js",
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-146816931-3',
    }],
    ['nuxt-fontawesome', {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faHeart',
              'faCheck',
              'faGhost',
              'faCameraRetro',
            ]
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: [
              'faCheckSquare',
              'faSquare',
            ]
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: [
              'faYoutube',
              'faSpotify',
              'faItunes',
              'faInstagram',
            ]
          }
        ]
      }],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
    }
  },
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: process.env.BASE_URL || 'https://api.jorgechato.com/v2'
  }
}
