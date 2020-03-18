import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'
import store from './store'
import titleMixin from './mixins/title'
import './registerServiceWorker'

require('@/assets/scss/main.scss')

Vue.config.productionTip = false

const files = require.context('./components/snippets', true, /\.vue$/)
const components = {}
files.keys().forEach((key) => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

// 読み込んだvueファイルをグローバルコンポーネントとして登録
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
})

library.add(faMoon, faSun)
Vue.component('font-awesome-icon', FontAwesomeIcon)

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: 'UA-142599010-2',
    router
  })
}

Vue.mixin(titleMixin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
