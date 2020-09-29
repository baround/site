
<template>
<div>
  <div class="finder" v-if="locali">
    <div class="finder__listing" v-bind:class="{ hidden: !list }">
      <span class="close" v-on:click="list = !list" v-if="list"> 
      </span>
      <div class="finder__listing__cappello">
        <span class="counter">
          {{locali.length}} bar a Milano
        </span>
        <span class="benvenuto">Benvenuto!</span>
        <h1>Ecco i bar che fanno per te!</h1>
      </div>
      <div class="finder__listing__locali">
        <div class="finder__listing__locali__locale" v-for="(locale, key) in locali" :key="key">
          <figure v-bind:style="{ 'background-image': 'url(' + locale.acf.immagine_di_copertina + ')' }">
              <img v-bind:src="locale.acf.immagine_di_copertina" />
          </figure>
          <div class="finder__listing__locali__locale__content">
            <div class="price">
                <span v-if="locale.acf.fascia_di_prezzo === 'basso'">
                &euro;
                </span>
                <span v-else-if="locale.acf.fascia_di_prezzo === 'medio'">
                &euro;&euro;
                </span>
                <span v-else-if="locale.acf.fascia_di_prezzo === 'alto'">
                &euro;&euro;&euro;
                </span>
                <span v-else>
                    -
                </span>
            </div>
            <h2><a :href="`/locali/${locale.slug}`" v-html="locale.title.rendered"></a></h2>
            <div class="tipologia">
              <span v-for="(type, index) in locale.acf.tipologia" :key="index">{{type.name}}</span>
            </div>
            <span class="address">{{locale.acf.indirizzo.address}}</span>

          </div>
        </div>
      </div>
    </div>
    <div class="finder__maps" v-bind:class="{ full: !list }" v-if="coords.length">
      <div class="showList" v-on:click="list = !list" v-if="!list">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <gmap-map :options="{styles: styles, disableDefaultUI: true }" ref="mymap" :center="startLocation" :zoom="14">
          <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" @closeclick="infoOpened=false"><div v-html="infoContent"></div></gmap-info-window>
          <gmap-marker 
            v-for="(item, key) in coords" 
            :key="key" 
            :position="getPosition(item)" 
            :clickable="true" 
            @click="toggleInfo(item, key)"
            :icon="markerOptions" 
          /> 
      </gmap-map>
    </div>
    <div v-else>
      WAIT
    </div>
    
  </div>
  <div class="loader" v-else>
      Wait 
  </div>

</div>

</template>

<script> 
const mapMarker = require('../assets/images/icon-pinner-locali.png');
export default {
  transition: "slide-right",
  data() {
    return {
    list: false,
    markerOptions: {
      url: mapMarker,
      size: {width: 60, height: 102, f: 'px', b: 'px',},
      scaledSize: {width: 20, height: 34, f: 'px', b: 'px',},
    },
    coords: [],
    startLocation: {
        lat: 45.4670831,
        lng: 9.185246
    },
    coordinates: {
        0: {
            full_name: 'Erich  Kunze',
            lat: '10.31',
            lng: '123.89'
        },
        1: {
            full_name: 'Delmer Olson',
            lat: '10.32',
            lng: '123.89'
        }
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
  },
  created() {
    this.$store.dispatch("locali");
  },
  methods: {
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
    listaLong: function(allLocals){
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
      return coords;
    }
  },
  beforeUpdate(){
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
  height: calc(100vh - 70px);
  padding-bottom: 50px;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media all and (max-width: 768px) {  
    flex-flow: column;
    padding-bottom: 0;
  }
  &__listing{
    width: 50%;
    height: calc(100% - 50px);
    display: flex;
    flex-flow: column;
    padding: 20px 20px 0 0px;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('../assets/images/bg-maps.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 3;
    box-shadow: 10px 0px 50px #222831;
    &::before{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      background: #040506;
      opacity: 0.4;
      z-index: 4;
    }
    @media all and (max-width: 768px) {  
      width: 100%;
      padding: 20px 0;
      height: calc(100vh - 34px);
      overflow: scroll;
    }
    .close{
      position: absolute;
      border-radius: 100%;
      width: 44px;
      height: 44px;
      top: 20px;
      right: -70px;
      box-shadow: 0px 0px 20px #222831;
      background-image: url('../assets/images/icon-close-menu.svg');
      background-position: center;
      background-size: 14px auto;
      background-color: #222831;
      background-repeat: no-repeat;
      cursor: pointer;
      @media all and (max-width: 768px) {  
        right: 10px;
        background-image: url('../assets/images/icon-close.svg');
        background-position: center;
        background-size: 14px auto;
        background-color: white;
        background-repeat: no-repeat;
      }
    }
    &.hidden{
      display: none;
    }
    &__cappello{
      display: flex;
      flex-flow: column;
      width: 100%;
      position: relative;
      z-index: 5;
      &__tab{
        color: white;
        display: none;
        justify-content: space-between;
        @media all and (max-width: 768px) {  
          display: flex;
        }
        .tab{
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
        }
      }
      .counter{
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.86px;
        color: white;
        padding-top: 10px;
        padding: 0 30px 0 30px;
        @media all and (max-width: 768px) {  
          display: none;
        }
      }
      .benvenuto{
        display: none;
        @media all and (max-width: 768px) {  
            display: flex;
            font-size: 31px;
            font-weight: 300;
            letter-spacing: 2.58px;
            color: #ffffff;
            padding: 0 30px 0px 30px;
            text-align: center;
            width: 100%;
            justify-content: center;
        }
      }

      h1{
        font-size: 32px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: 2.67px;
        color: white;
        padding: 0 20px 25px 30px;
        @media all and (max-width: 768px) {  
          font-size: 14px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1px;
          text-align: center;
        }
      }
    }

    &__locali{
      height: 100%;
      overflow-x: hidden;
      overflow-y: scroll;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0 20px 0 30px;
      position: relative;
      z-index: 5;
      @media all and (max-width: 768px) {  
        height: auto;
        overflow: visible;
      }
      &__locale{
        width: 100%;
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items: flex-start;
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: solid 1px rgba(255, 255, 255, 0.2);
        @media all and (max-width: 768px) {  
          flex-flow: column;
        }
        figure{
          width: 241px;
          height: 163px;
          background-size: cover;
          background-position: center;
          overflow: hidden;
          img{
            width: 100%;
            opacity: 0;
          }
        }
        &__content{
          display:flex;
          flex-flow:column;
          width: calc(100% - 241px);
          padding: 10px 25px;
          .price{
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1.33px;
            color: white;
            margin: 5px 0;
          }
          .address{
              font-size: 14px;
              font-weight: 300;
              line-height: 1.5;
              letter-spacing: 1px;
              color: white;
            margin: 5px 0;
          }
          .tipologia{
            margin: 5px 0;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 1.18px;
            color: white;
            text-transform: uppercase;
            span{
                padding: 0 5px 0 0;
                &:after{
                    content: ',';
                }
                &:last-child{
                    &::after{
                        display: none;
                    }
                }
            }
          }
          h2{
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1.14px;
            color: white;
            margin: 5px 0;
            a{
              color: white;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
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
      box-shadow: 0px 0px 20px #222831;
      background-color: #222831;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      padding: 15px 0;
      z-index: 10;
      .line{
        width: 14px;
        height: 1px;
        background-color: white;
      }
    }
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
