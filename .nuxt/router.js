import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _162ee8ca = () => interopDefault(import('../pages/chi-siamo/index.vue' /* webpackChunkName: "pages/chi-siamo/index" */))
const _ebedca0e = () => interopDefault(import('../pages/contatti/index.vue' /* webpackChunkName: "pages/contatti/index" */))
const _271a1e71 = () => interopDefault(import('../pages/credits/index.vue' /* webpackChunkName: "pages/credits/index" */))
const _7b1a69d7 = () => interopDefault(import('../pages/filter/index.vue' /* webpackChunkName: "pages/filter/index" */))
const _18a1d2dc = () => interopDefault(import('../pages/itinerari/index.vue' /* webpackChunkName: "pages/itinerari/index" */))
const _34f5c53d = () => interopDefault(import('../pages/locali/index.vue' /* webpackChunkName: "pages/locali/index" */))
const _0f383bdf = () => interopDefault(import('../pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _1c0f156c = () => interopDefault(import('../pages/itinerari/_slug.vue' /* webpackChunkName: "pages/itinerari/_slug" */))
const _333f23f5 = () => interopDefault(import('../pages/locali/_slug.vue' /* webpackChunkName: "pages/locali/_slug" */))
const _0ba919a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _162ee8ca,
    name: "chi-siamo"
  }, {
    path: "/contatti",
    component: _ebedca0e,
    name: "contatti"
  }, {
    path: "/credits",
    component: _271a1e71,
    name: "credits"
  }, {
    path: "/filter",
    component: _7b1a69d7,
    name: "filter"
  }, {
    path: "/itinerari",
    component: _18a1d2dc,
    name: "itinerari"
  }, {
    path: "/locali",
    component: _34f5c53d,
    name: "locali"
  }, {
    path: "/privacy",
    component: _0f383bdf,
    name: "privacy"
  }, {
    path: "/itinerari/:slug",
    component: _1c0f156c,
    name: "itinerari-slug"
  }, {
    path: "/locali/:slug",
    component: _333f23f5,
    name: "locali-slug"
  }, {
    path: "/",
    component: _0ba919a6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
