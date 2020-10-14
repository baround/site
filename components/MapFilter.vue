
<template>
<div>
  <div class="finder" v-if="locali.length">
    <div class="finder__filters">
      <BoxIntro :locali="locali" />
      <Filtri />
    </div>
    <div class="finder__tabs" v-if="window.width < 768">
      <div class="finder__tabs__button">
        <span class="icon icon--lista">Lista</span>
      </div>
      <div class="finder__tabs__button">
        <span class="icon icon--mappa">Mappa</span>
      </div>
    </div>
    <div class="finder__contents">
      <div class="finder__contents__maps" v-bind:class="{ full: !list }" v-if="coords.length">
        <gmap-map :options="{styles: styles, disableDefaultUI: true }" ref="mymap" :center="startLocation" :zoom="14">
          <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" @closeclick="infoOpened=false">
            <div v-html="infoContent"></div>
          </gmap-info-window>
          <gmap-marker v-for="(item, key) in coords" :key="key" :position="getPosition(item)" :clickable="true" @click="toggleInfo(item, key)" :icon="markerOptions" />
        </gmap-map>
      </div>
    </div>
  </div>

  <!--loader-->
  <div class="loader" v-else>
    <span class="loading">
      <img v-bind:src="loader">
    </span>
  </div>

</div>

</template>

<script> 
const mapMarker = require('../assets/images/icon-pinner-locali.png');
const loader = require('../assets/images/loader.gif');
import { isMobile } from 'mobile-device-detect';
export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      list: false,
      hideFilters: false,
      filterList: {
        occasione: '',
        tipologia: '',
        location: '',
        prezzo: ''
      },
      loader: loader,
      markerOptions: {
        url: mapMarker,
        scaledSize: { height: 34, width: 20 },
      },
      coords: [],
      startLocation: {
          lat: 45.4670831,
          lng: 9.185246
      },
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
          pixelOffset: {
              width: 0,
              height: -35
          }
      },
      styles: [ 
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]
    }
  },
  computed: {
      locali() {
        return this.$store.state.content.locali;
      },
      device(){
        return this.$device;
      }
  },
  created() {
    // this.$store.dispatch("locali");
  },
  methods: {
    generateList(event){
      event.preventDefault();
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    getPosition: function(item) {
        return {
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lng)
        }
    },
    toggleInfo: function(marker, key) {
        this.startLocation = this.getPosition(marker)
        this.infoPosition = this.getPosition(marker)
        this.infoContent = this.getInfoWindowContent(marker);
        if (this.infoCurrentKey == key) {
            this.infoOpened = !this.infoOpened
        } else {
            this.infoOpened = true
            this.infoCurrentKey = key
        }
    },
    getInfoWindowContent: function (marker) {
      if(marker.fascia === 'alto'){
        var fascia = `<span>€€€</span>`;
      } else if(marker.fascia === 'medio'){
        var fascia = `<span>€€</span>`;
      } else {
        var fascia = `<span>€</span>`;
      };
      return (
        `<div class="singleLocale">
          <figure style="background-image: url(${marker.foto});">
            <a href="/locali/${marker.slug}"><img src="${marker.foto}"></a>
          </figure>
          <div class="singleLocale__content">
            <h2><a href="/locali/${marker.slug}">${marker.full_name}</a></h2>
            <div class="price">${fascia}</div>
            <div class="address">${marker.indirizzo}</div>
          </div>
        </div>`);
      },
    listaLong: function(){
      var allLocals = this.locali;
      var coords = [];
      var i;
      for (i = 0; i < allLocals.length; i++) {
        var obj = {
          foto: allLocals[i].acf.immagine_di_copertina,
          indirizzo: allLocals[i].acf.indirizzo.address,
          fascia: allLocals[i].acf.fascia_di_prezzo,
          slug: allLocals[i].slug,
          full_name: allLocals[i].title.rendered,
          lat: allLocals[i].acf.indirizzo.lat,
          lng: allLocals[i].acf.indirizzo.lng
        }
        coords.push(obj);
      }
      console.log(coords)
      return coords;
    }
  },
  beforeUpdate(){
    this.coords = this.listaLong();
  },
  mounted(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.coords = this.listaLong();
  }
}
</script>

<style scoped defer lang="scss">
.vue-map-container {
  height: 100vh;
  height: calc(100vh - 100px);
  width: 100%;
  max-height: 100vh;
  @media all and (max-width: 768px) {  
    height: calc(100vh - 54px);
  }
}
.finder{
  width: 100%;
  height: calc(100vh - 74px);
  padding-bottom: 50px;
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  @media all and (max-width: 768px) {  
    flex-flow: column;
    padding-bottom: 0;
    flex-wrap: wrap;
    height: calc(100vh - 88px);
    overflow: hidden;
  }
  &__contents{
      &__maps{
        height: calc(100vh - 100px);
        overflow: hidden;
        width: 70%;
        display: flex;
        flex-flow: column;
        position: absolute;
        right: 0;
        top: 0;
        transition: all .5s;
        &.full{
          width: 100%;
        }
        @media all and (max-width: 768px) {  
          width: 100%;
          height: calc(100vh - 54px);
          height: 100%;
          position: relative;
          top: auto;
        }
        .showList{
          position: absolute;
          border-radius: 100%;
          width: 44px;
          height: 44px;
          top: 20px;
          right: 25px;
          box-shadow: 0px 0px 10px #22283187;
          background-image: url('../assets/images/icon-lista.svg');
          background-position: center;
          background-size: 18px auto;
          background-color: white;
          background-repeat: no-repeat;
          cursor: pointer;
          z-index: 10;
          @media all and (max-width: 768px) {  
            right: 10px;
            background-image: url('../assets/images/icon-lista.svg');
            background-position: center;
            background-size: 18px auto;
            background-color: white;
            background-repeat: no-repeat;
          }
        }
      }
  }
}  
</style>
