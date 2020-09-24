export { default as Header } from '../../components/Header.vue'
export { default as Home } from '../../components/Home.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Map } from '../../components/Map.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Quiz } from '../../components/Quiz.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyHome = import('../../components/Home.vue' /* webpackChunkName: "components/Home" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyMap = import('../../components/Map.vue' /* webpackChunkName: "components/Map" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation" */).then(c => c.default || c)
export const LazyQuiz = import('../../components/Quiz.vue' /* webpackChunkName: "components/Quiz" */).then(c => c.default || c)
