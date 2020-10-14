export { default as BoxIntro } from '../../components/BoxIntro.vue'
export { default as Filtri } from '../../components/Filtri.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Listing } from '../../components/Listing.vue'
export { default as Map } from '../../components/Map.vue'
export { default as MapFilter } from '../../components/MapFilter.vue'
export { default as Meta } from '../../components/Meta.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Newsletter } from '../../components/Newsletter.vue'
export { default as Quiz } from '../../components/Quiz.vue'

export const LazyBoxIntro = import('../../components/BoxIntro.vue' /* webpackChunkName: "components/BoxIntro" */).then(c => c.default || c)
export const LazyFiltri = import('../../components/Filtri.vue' /* webpackChunkName: "components/Filtri" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/Header" */).then(c => c.default || c)
export const LazyListing = import('../../components/Listing.vue' /* webpackChunkName: "components/Listing" */).then(c => c.default || c)
export const LazyMap = import('../../components/Map.vue' /* webpackChunkName: "components/Map" */).then(c => c.default || c)
export const LazyMapFilter = import('../../components/MapFilter.vue' /* webpackChunkName: "components/MapFilter" */).then(c => c.default || c)
export const LazyMeta = import('../../components/Meta.vue' /* webpackChunkName: "components/Meta" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation" */).then(c => c.default || c)
export const LazyNewsletter = import('../../components/Newsletter.vue' /* webpackChunkName: "components/Newsletter" */).then(c => c.default || c)
export const LazyQuiz = import('../../components/Quiz.vue' /* webpackChunkName: "components/Quiz" */).then(c => c.default || c)
