
import axios from "axios";
let myRoutes = function(){


  let itinerari = axios.get('https://be.baround.it/index.php/wp-json/wp/v2/itinerari?page=1&per_page=100',
  {
    headers: {
      // update with your user-agent
      
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36, *" , 
      Accept: 'application/json, text/plain, */*',
    },
  })
  .then(
    (res) => {
      return res.data.map((itinerario) => {
        return '/itinerari/' + itinerario.slug
      })
    }
  )

  let locali = axios.get('https://be.baround.it/index.php/wp-json/wp/v2/locali?page=1&per_page=100',
  {
    headers: {
      // update with your user-agent
      
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36, *" , 
      Accept: 'application/json, text/plain, */*',
    }
  })
  .then(
    (res) => {
      return res.data.map((locale) => {
        return '/locali/' + locale.slug
      })
    }
  )
  
  return (Promise.all([itinerari, locali]).then(values => {
      return values.join().split(',');
    })
  )
}

export default {

  mode: 'spa',
  target: 'static',
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', '' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content:'white'},
      { name: 'apple-mobile-web-app-title', content:"Baround"},
    ],
    script: [
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap' },
    ]
  },
  
  css: [
    '~/node_modules/swiper/swiper-bundle.css',
    '~/node_modules/swiper/components/effect-coverflow/effect-coverflow.scss',
    '~/assets/css/main.css'
  ],

  manifest: {
    "name": "App",
    "icons": [
     {
      "src": "\/android-icon-36x36.png",
      "sizes": "36x36",
      "type": "image\/png",
      "density": "0.75"
     },
     {
      "src": "\/android-icon-48x48.png",
      "sizes": "48x48",
      "type": "image\/png",
      "density": "1.0"
     },
     {
      "src": "\/android-icon-72x72.png",
      "sizes": "72x72",
      "type": "image\/png",
      "density": "1.5"
     },
     {
      "src": "\/android-icon-96x96.png",
      "sizes": "96x96",
      "type": "image\/png",
      "density": "2.0"
     },
     {
      "src": "\/android-icon-144x144.png",
      "sizes": "144x144",
      "type": "image\/png",
      "density": "3.0"
     },
     {
      "src": "\/android-icon-192x192.png",
      "sizes": "192x192",
      "type": "image\/png",
      "density": "4.0"
     }
    ]
  },
  plugins: [
    { src: '~/plugins/gmaps'},
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/mailchimp.js' }, 
    { src: '~/plugins/cookie.js' }, 
    { src: '~/plugins/countdown.js' }, 
    { src: '~/plugins/VueAwesomeSwiper.js' }, 
    { src: '~/plugins/get-chisiamo.js' }, 
    { src: '~/plugins/get-contatti.js' }, 
    { src: '~/plugins/get-credits.js' }, 
    { src: '~/plugins/get-privacy.js' }, 
    { src: '~/plugins/get-itinerari.js' }, 
    { src: '~/plugins/get-locali.js' }, 
  ],

  components: true,

  generate: {
    routes: myRoutes,
    fallback: '404.html',
    exclude: [
      /^\/dynamic-route\//,
    ]
  },

  buildModules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  modules: [
	],
}
