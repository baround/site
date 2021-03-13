import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe0ab21c = () => interopDefault(import('../pages/chi-siamo/index.vue' /* webpackChunkName: "pages/chi-siamo/index" */))
const _022ab8c2 = () => interopDefault(import('../pages/contatti/index.vue' /* webpackChunkName: "pages/contatti/index" */))
const _b24db8f0 = () => interopDefault(import('../pages/credits/index.vue' /* webpackChunkName: "pages/credits/index" */))
const _456ae5e0 = () => interopDefault(import('../pages/filter/index.vue' /* webpackChunkName: "pages/filter/index" */))
const _7fc131e9 = () => interopDefault(import('../pages/itinerari/index.vue' /* webpackChunkName: "pages/itinerari/index" */))
const _01737d74 = () => interopDefault(import('../pages/locali/index.vue' /* webpackChunkName: "pages/locali/index" */))
const _e2117e14 = () => interopDefault(import('../pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _7e0a90a1 = () => interopDefault(import('../pages/itinerari/_slug.vue' /* webpackChunkName: "pages/itinerari/_slug" */))
const _04e0c004 = () => interopDefault(import('../pages/locali/_slug.vue' /* webpackChunkName: "pages/locali/_slug" */))
const _390e25bd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _fe0ab21c,
    name: "chi-siamo"
  }, {
    path: "/contatti",
    component: _022ab8c2,
    name: "contatti"
  }, {
    path: "/credits",
    component: _b24db8f0,
    name: "credits"
  }, {
    path: "/filter",
    component: _456ae5e0,
    name: "filter"
  }, {
    path: "/itinerari",
    component: _7fc131e9,
    name: "itinerari"
  }, {
    path: "/locali",
    component: _01737d74,
    name: "locali"
  }, {
    path: "/privacy",
    component: _e2117e14,
    name: "privacy"
  }, {
    path: "/itinerari/:slug",
    component: _7e0a90a1,
    name: "itinerari-slug"
  }, {
    path: "/locali/:slug",
    component: _04e0c004,
    name: "locali-slug"
  }, {
    path: "/",
    component: _390e25bd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
