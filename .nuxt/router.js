import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _feeeacd4 = () => interopDefault(import('../pages/attivita-culturali/index.vue' /* webpackChunkName: "pages/attivita-culturali/index" */))
const _31354a93 = () => interopDefault(import('../pages/home/index.vue' /* webpackChunkName: "pages/home/index" */))
const _2848309d = () => interopDefault(import('../pages/itinerari/index.vue' /* webpackChunkName: "pages/itinerari/index" */))
const _31fadf12 = () => interopDefault(import('../pages/locali/index.vue' /* webpackChunkName: "pages/locali/index" */))
const _7ed2084e = () => interopDefault(import('../pages/attivita-culturali/_slug.vue' /* webpackChunkName: "pages/attivita-culturali/_slug" */))
const _51ef8c4e = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _26918f55 = () => interopDefault(import('../pages/itinerari/_slug.vue' /* webpackChunkName: "pages/itinerari/_slug" */))
const _30443dca = () => interopDefault(import('../pages/locali/_slug.vue' /* webpackChunkName: "pages/locali/_slug" */))
const _5a4e3571 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/attivita-culturali",
    component: _feeeacd4,
    name: "attivita-culturali"
  }, {
    path: "/home",
    component: _31354a93,
    name: "home"
  }, {
    path: "/itinerari",
    component: _2848309d,
    name: "itinerari"
  }, {
    path: "/locali",
    component: _31fadf12,
    name: "locali"
  }, {
    path: "/attivita-culturali/:slug?",
    component: _7ed2084e,
    name: "attivita-culturali-slug"
  }, {
    path: "/blog/:slug?",
    component: _51ef8c4e,
    name: "blog-slug"
  }, {
    path: "/itinerari/:slug",
    component: _26918f55,
    name: "itinerari-slug"
  }, {
    path: "/locali/:slug",
    component: _30443dca,
    name: "locali-slug"
  }, {
    path: "/",
    component: _5a4e3571,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
