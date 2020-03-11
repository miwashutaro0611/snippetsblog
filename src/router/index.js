import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Foo from '../pages/Foo.vue'
import Code from '../pages/Code.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        next();
      }
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        next();
      }
    },
    {
      path: '/code/:id',
      name: 'code',
      component: Code,
      beforeEnter: (to, from, next) => {
        next();
      }
    }
  ]
})