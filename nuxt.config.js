
import axios from "axios";
let myRoutes = function(){
  let itinerari = axios.get('https://baround.it/be/wp-json/wp/v2/itinerari?page=1&per_page=100').then((res) => {
    return res.data.map((itinerario) => {
      return '/itinerari/' + itinerario.slug
    })
  })
  let locali = axios.get('https://baround.it/be/wp-json/wp/v2/locali?page=1&per_page=100').then((res) => {
    return res.data.map((locale) => {
      return '/locali/' + locale.slug
    })
  })
  return (Promise.all([itinerari, locali]).then(values => {
      return values.join().split(',');
    })
  )
}


export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap' }
    ]
  },
  
  css: [
    '~/node_modules/swiper/swiper-bundle.css',
    '~/node_modules/swiper/components/effect-coverflow/effect-coverflow.scss',
    '~/assets/css/main.css'
  ],
  plugins: [
    { src: '~/plugins/gmaps'},
    { src: '~/plugins/mailchimp.js' }, 
    { src: '~/plugins/VueAwesomeSwiper.js' }, 
  ],

  components: true,

  generate: {
    routes: myRoutes,
  },

  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
}
