require('dotenv').config();

const projectName = process.env.PROJECT_NAME;
const themeColor = `#${process.env.THEME_COLOR}`;

module.exports = {
  mode: 'universal',
  server: {
    host: '0.0.0.0',
    port: '4000'
  },
  head: {
    noscript: [
      { innerHTML: 'You need javascript to run!' }
    ],
    title: 'Landin Challenges',
    base: { target: '_blank', href: '/' },
    meta: [
      { charset: 'utf-8' },

      { hid: 'og:title', property: 'og:title', content: '' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },

      { hid: 'keyword', property: 'keyword', content: '' },
      { hid: 'og:keyword', property: 'og:keyword', content: '' },

      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:description', name: 'og:description', content: '' },

      { httpEquiv: 'Expires', content: '0' },
      { httpEquiv: 'Pragma', content: 'no-cache' },
      { httpEquiv: 'Cache-Control', content: 'no-cache, no-store, must-revalidate' },

      { property: 'og:type', content: 'website' },
      { property: 'og:name', content: projectName },
      { property: 'og:site_name', content: projectName },

      { name: 'theme-color', content: themeColor },
      { name: 'msapplication-navbutton-color', content: themeColor },

      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-touch-fullscreen', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },

      { name: 'apple-mobile-web-app-title', content: ' ' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
  ** Global CSS
  */
  css: [
    'vue-slider-component/theme/default.css',
    '@/assets/scss/bootstrap.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/vue-slider', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|css)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    }
  }
};
