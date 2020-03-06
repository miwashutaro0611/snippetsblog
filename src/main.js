import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('@/assets/scss/main.scss');

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

const files = require.context('./components/snippets', true, /\.vue$/);
const components = {};
files.keys().forEach(key => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default;
});

// 読み込んだvueファイルをグローバルコンポーネントとして登録
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});