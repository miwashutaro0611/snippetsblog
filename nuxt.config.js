import Sass from 'sass'
import Fiber from 'fibers'

import codeNumberFile from './data/codeList.json'

export default {
  mode: 'spa',
  css: [{ src: '~/assets/scss/main.scss' }],
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    'nuxt-webfontloader',
  ],
  styleResources: {
    scss: ['~/assets/scss/resource.scss'],
  },
  fontawesome: {
    component: 'fa',
  },
  manifest: {
    name: 'SnippetsBlog@Miwa',
    short_name: 'SnippetsBlog',
    theme_color: '#3a3a3a',
    background_color: '#fff',
    display: 'standalone',
    Scope: '/',
    start_url: '/',
    splash_pages: null,
    icons: [
      {
        src: '/img/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/img/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  googleAnalytics: {
    id: 'UA-142599010-2',
  },
  webfontloader: {
    google: {
      families: ['Courgette&display=swap'],
    },
  },
  head: {
    title: 'SnippetsBlog@Miwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://snippetsblog-miwa.netlify.com/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'SnippetsBlog@Miwa',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://snippetsblog-miwa.netlify.com/ogp.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@jackmiwamiwa',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://snippetsblog-miwa.netlify.com/ogp.png',
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/img/icons/icon-144x144.png' },
    ],
  },
  plugins: ['@/plugins/code-snippets'],
  build: {
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
  },
  generate: {
    routes() {
      return codeNumberFile.ids.map((id) => {
        return `code/${id}`
      })
    },
  },
}
