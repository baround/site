import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _37a5cb55 = () => interopDefault(import('../pages/chi-siamo/index.vue' /* webpackChunkName: "pages/chi-siamo/index" */))
const _6b27fbff = () => interopDefault(import('../pages/contatti/index.vue' /* webpackChunkName: "pages/contatti/index" */))
const _cc8ff6aa = () => interopDefault(import('../pages/credits/index.vue' /* webpackChunkName: "pages/credits/index" */))
const _1b2c5746 = () => interopDefault(import('../pages/filter/index.vue' /* webpackChunkName: "pages/filter/index" */))
const _366c564c = () => interopDefault(import('../pages/itinerari/index.vue' /* webpackChunkName: "pages/itinerari/index" */))
const _a775a07a = () => interopDefault(import('../pages/locali/index.vue' /* webpackChunkName: "pages/locali/index" */))
const _fc53bbce = () => interopDefault(import('../pages/privacy/index.vue' /* webpackChunkName: "pages/privacy/index" */))
const _34b5b504 = () => interopDefault(import('../pages/itinerari/_slug.vue' /* webpackChunkName: "pages/itinerari/_slug" */))
const _aae2e30a = () => interopDefault(import('../pages/locali/_slug.vue' /* webpackChunkName: "pages/locali/_slug" */))
const _2f85d9e0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _37a5cb55,
    name: "chi-siamo"
  }, {
    path: "/contatti",
    component: _6b27fbff,
    name: "contatti"
  }, {
    path: "/credits",
    component: _cc8ff6aa,
    name: "credits"
  }, {
    path: "/filter",
    component: _1b2c5746,
    name: "filter"
  }, {
    path: "/itinerari",
    component: _366c564c,
    name: "itinerari"
  }, {
    path: "/locali",
    component: _a775a07a,
    name: "locali"
  }, {
    path: "/privacy",
    component: _fc53bbce,
    name: "privacy"
  }, {
    path: "/itinerari/:slug",
    component: _34b5b504,
    name: "itinerari-slug"
  }, {
    path: "/locali/:slug",
    component: _aae2e30a,
    name: "locali-slug"
  }, {
    path: "/",
    component: _2f85d9e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
