import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './.nuxt/utils'

const Index = () => interopDefault(import('~/pages/home.vue'))

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'color-primary-bold',
    linkExactActiveClass: 'color-primary-bold',
    routes: [
      {
        path: '/',
        component: Index,
        name: 'index'
      }
    ]
  })
}
