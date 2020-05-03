import Vue from 'vue'

const files = require.context('~/components/snippets', true, /\.vue$/)
const components = {}
files.keys().forEach((key) => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

// 読み込んだvueファイルをグローバルコンポーネントとして登録
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})
