import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f3c1f7b = () => interopDefault(import('../pages/chi-siamo/index.vue' /* webpackChunkName: "pages/chi-siamo/index" */))
const _01f8e9ce = () => interopDefault(import('../pages/contatti/index.vue' /* webpackChunkName: "pages/contatti/index" */))
const _a1fdab5e = () => interopDefault(import('../pages/credits/index.vue' /* webpackChunkName: "pages/credits/index" */))
const _563261f7 = () => interopDefault(import('../pages/filter/index.vue' /* webpackChunkName: "pages/filter/index" */))
const _1e02aa72 = () => interopDefault(import('../pages/itinerari/index.vue' /* webpackChunkName: "pages/itinerari/index" */))
const _100dbd5d = () => interopDefault(import('../pages/locali/index.vue' /* webpackChunkName: "pages/locali/index" */))
const _d1c17082 = () => interopDefault(import('../pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _1c4c092a = () => interopDefault(import('../pages/itinerari/_slug.vue' /* webpackChunkName: "pages/itinerari/_slug" */))
const _0e571c15 = () => interopDefault(import('../pages/locali/_slug.vue' /* webpackChunkName: "pages/locali/_slug" */))
const _25ca0586 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/chi-siamo",
    component: _1f3c1f7b,
    name: "chi-siamo"
  }, {
    path: "/contatti",
    component: _01f8e9ce,
    name: "contatti"
  }, {
    path: "/credits",
    component: _a1fdab5e,
    name: "credits"
  }, {
    path: "/filter",
    component: _563261f7,
    name: "filter"
  }, {
    path: "/itinerari",
    component: _1e02aa72,
    name: "itinerari"
  }, {
    path: "/locali",
    component: _100dbd5d,
    name: "locali"
  }, {
    path: "/privacy",
    component: _d1c17082,
    name: "privacy"
  }, {
    path: "/itinerari/:slug",
    component: _1c4c092a,
    name: "itinerari-slug"
  }, {
    path: "/locali/:slug",
    component: _0e571c15,
    name: "locali-slug"
  }, {
    path: "/",
    component: _25ca0586,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
