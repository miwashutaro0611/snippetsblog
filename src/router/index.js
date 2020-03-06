import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Foo from '../pages/Foo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    }
  ]
})