<template>
<main class="post individual">
    <Header />
    <div class="itinerario" v-if='itinerario'>
        <section class="itinerario__header">
            <figure v-bind:style="{ 'background-image': 'url(' + itinerario.acf.immagine_di_copertina + ')' }">
                <img v-bind:src="itinerario.acf.immagine_di_copertina" />
            </figure>
            <div class="itinerario__header__details">
                <span v-if="itinerario.acf.autore" class="autore">Scritto da {{itinerario.acf.autore}}</span>
                <h1 v-html="itinerario.title.rendered"></h1>
                <span v-if="itinerario.acf.zona" class="zona">{{itinerario.acf.zona}}</span>
            </div>
        </section>
        <section class="itinerario__fascia" v-for="(field, index) in itinerario.acf.contenuto" :key="index">
            <div class="itinerario__fascia__contenuto itinerario__fascia__contenuto--intro intro" v-if="field.acf_fc_layout === 'introduzione'">
                <div class="txt" v-html="field.contenuto">

                </div>
            </div>
            <div class="itinerario__fascia__contenuto itinerario__fascia__contenuto--testo" v-if="field.acf_fc_layout === 'testo'">
                <div class="txt" v-html="field.contenuto">

                </div>
            </div>
            <div class="itinerario__fascia__contenuto itinerario__fascia__contenuto--image" v-else-if="field.acf_fc_layout === 'immagine'">
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-if="field.dimensione_immagine === 'normale'" class="medium">
                    <img v-bind:src="field.immagine" />
                </figure>
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-else class="full">
                    <img v-bind:src="field.immagine" />
                </figure>
            </div>
            <div class="itinerario__fascia__contenuto itinerario__fascia__contenuto--attivita" v-else-if="field.acf_fc_layout === 'attivita'">
                <div class="boxAttivita">
                    <h4>
                        {{field.titolo}}
                        <div class="boxAttivita__img">
                            <img v-bind:src="field.immagine" />
                        </div>
                    </h4>
                    
                    <span class="indirizzo">{{field.indirizzo.address}}</span>
                    <div class="boxAttivita__contenuto" v-html="field.contenuto"></div>
                </div>
            </div>
            <div class="itinerario__fascia__contenuto itinerario__fascia__contenuto--video" v-else-if="field.acf_fc_layout === 'video'">
                <div class="video" v-html="field.video">
                </div>
            </div>
        </section>
        <section class="itinerario__fascia" v-if='itinerario.acf.indirizzo'>
            <div class="itinerario__fascia__contenuto itinerario__fascia__contenuto--mappa">
                <gmap-map :options="{styles: styles}" ref="mymap" :center="getPosition()" :zoom="14">
                    <gmap-marker v-for="(item, key) in coordinates" :key="key" :position="getPosition()" :clickable="true" @click="toggleInfo(item, key)" />
                </gmap-map>
            </div>
        </section>


        <section class="locale__fascia" v-if="coords">
            <div class="locale__fascia__contenuto locale__fascia__contenuto--mappa">
                <gmap-map :options="{styles: styles}" ref="mymap" :center="startLocation" :zoom="14">
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
        </section>
        
        <section class="itinerario__fascia" v-if='listalocali'>
            <div class="itinerario__fascia__contenuto itinerario__fascia__contenuto--bgBlue itinerario__fascia__contenuto--correlati" >
                <h3>Locali nelle vicinanze</h3>
                <swiper class="correlati" ref="localiCorrelati" :options="swiperLocaliOptions">
                    <swiper-slide class="correlati__single" v-for="(nearlocale, index) in correlatiLocali" :key="index">
                        <div class="correlati__card">
                            <figure v-if='nearlocale.acf.immagine_di_copertina' v-bind:style="{ 'background-image': 'url(' + nearlocale.acf.immagine_di_copertina + ')' }">
                                <a :href="`/locali/${nearlocale.slug}`"><img v-bind:src="nearlocale.acf.immagine_di_copertina" /></a>
                            </figure>
                            <figure v-else>
                                <a :href="`/locali/${nearlocale.slug}`"><img src="~/assets/images/placeholder.jpg" /></a>
                            </figure>
                            <div class="correlati__card__content">
                                <span class="price">
                                    <span v-if="nearlocale.acf.fascia_di_prezzo === 'basso'">
                                    &euro;
                                    </span>
                                    <span v-else-if="nearlocale.acf.fascia_di_prezzo === 'medio'">
                                    &euro;&euro;
                                    </span>
                                    <span v-else-if="nearlocale.acf.fascia_di_prezzo === 'alto'">
                                    &euro;&euro;&euro;
                                    </span>
                                    <span v-else>
                                        -
                                    </span>
                                </span>
                                <h4><a :href="`/locali/${nearlocale.slug}`" v-html="nearlocale.title.rendered"></a></h4>
                                <div class="tipologia">
                                    <span v-for="(type, index) in nearlocale.acf.tipologia" :key="index">{{type.name}}</span>      
                                </div>
                                <span class="address">{{nearlocale.acf.indirizzo.address}}</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </section>
    </div>
    <div v-else>
        Wait 
    </div>
    <Footer />
</main>
</template>




<script>

const mapMarker = require('../../assets/images/icon-pinner-itinerari.png');
export default {
    computed: {
        attivita() {
            return this.$store.state.content.attivita;
        },
        itinerari() {
            return this.$store.state.content.itinerari;
        },
        itinerario() {
            return this.$store.state.content.itinerari.find(el => el.slug === this.slug);
        },
        listalocali() {
            return this.$store.state.content.locali;
        },
        swiper() {
            this.$refs.localiCorrelati.$swiper;
        }
    },
    data() {
        return {
            isVisible: false,
            slug: this.$route.params.slug,
            swiperLocaliOptions: {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            swiperAttivitaOptions: {
                
            },
            correlatiLocali: {

            },
            // MAPPA
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
            
        };
    },
    methods: {
        funLocaliOption: function(){
            return {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            }
        },
        funAttivitaOption: function(){
            return {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination-attivita',
                    clickable: true,
                },
            }
        },
        startLocaliSwiper: function(){
            this.swiperLocaliOptions = this.funLocaliOption();
        },
        startAttivitaSwiper: function(){
            this.swiperAttivitaOptions = this.funAttivitaOption();
        },

        // MAPPA
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
                    <img src="${marker.foto}">
                </figure>
                <div class="singleLocale__content">
                    <h2>${marker.full_name}</h2>
                    <div class="address">${marker.indirizzo}</div>
                </div>
                </div>`);
        },
        listaLong: function(itiner){
        var itiner = this.itinerario;
        var coords = [];
        var i;
        for (i = 0; i < itiner.acf.contenuto.length; i++) {
            if(itiner.acf.contenuto[i].acf_fc_layout === 'attivita'){
                var obj = {
                    foto: itiner.acf.contenuto[i].immagine,
                    indirizzo: itiner.acf.contenuto[i].indirizzo.address,
                    full_name: itiner.acf.contenuto[i].titolo,
                    lat: itiner.acf.contenuto[i].indirizzo.lat,
                    lng: itiner.acf.contenuto[i].indirizzo.lng
                }
                coords.push(obj);
            }
        }
        return coords;
        }
    },
    created() {
        this.$store.dispatch("locali");
        this.$store.dispatch("itinerari");
    },
    beforeUpdate(){
        var idPosts = [];
        var i;
        for (i = 0; i < this.itinerario.acf.locali_vicini.length; i++) {
            idPosts.push(this.itinerario.acf.locali_vicini[i].ID);
        }
        var filtered = this.listalocali.filter((item) => idPosts.includes(item.id));
        this.correlatiLocali = filtered;

        this.coords = this.listaLong();

        console.log('beforeupdate')
    },
    updated(){
        console.log('updated')
    },
    mounted(){
        console.log('mounted')
    }
};
</script>

<style scoped defer lang="scss">
.vue-map-container {
  height: 560px;
  width: 100%;
  max-height: 100vh;
}
.itinerario{
    width: 100%;
    &__header{
        width: 100%;
        position: relative;
        figure{
            width: 100%;
            max-height: 620px;
            overflow: hidden;
            background-size: cover;
            img{
                width: 100%;
                opacity: 0;
            }
        }
        &:before{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 4;
            background-image: linear-gradient(180deg, #75757540, #000000c9);
        }
        &__details{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            z-index: 5;
            h1{
                font-size: 46px;
                font-weight: bold;
                line-height: 1.09;
                letter-spacing: 3.29px;
                text-align: center;
                color: #ffffff;
                margin-bottom: 20px;
            }
            .autore{
                font-size: 16px;
                line-height: 1.31;
                letter-spacing: 1.14px;
                color: #ffffff;
                margin: 0 0 25px 0;
            }
            .zona{
                font-size: 14px;
                font-weight: 300;
                line-height: 1.5;
                letter-spacing: 1px;
                color: #ffffff;
                margin: 5px 0;
            }
        }
    }
    &__fascia{
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        &__contenuto{
            width: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            margin: 50px 0;
            &--intro{
                max-width: 654px;
                background: white;
                padding: 75px 75px 0px 75px;
                margin-top: -150px;
                position: relative;
                margin-bottom: 0px;
                z-index: 10;
            }
            &--testo{
                max-width: 674px;
                background: white;
                padding: 0 75px 0 75px;
                position: relative;
            }
            &--image{
                width: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                figure{
                    width: 100%;
                    max-width: 946px;
                    overflow: hidden;
                    background-size: cover;
                    background-position: center;
                    img{
                        width: 100%;
                        opacity: 0;
                    }
                    &.full{
                        max-width: 100%;
                        height: 100vh;
                    }
                }
            }
            &--attivita{
                width: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
                margin: 15px 0;
                .boxAttivita{
                    max-width: 674px;
                    width: 100%;
                    background: white;
                    padding: 0 75px 0 75px;
                    position: relative;
                    .indirizzo{
                        font-size: 14px;
                        font-weight: 300;
                        font-stretch: normal;
                        font-style: normal;
                        line-height: 1.64;
                        letter-spacing: 1px;
                        color: #222831;
                        padding-bottom: 10px;
                        display: flex;
                    }
                    h4{
                        width: 100%;
                        padding-bottom: 0;
                        margin-bottom: 0;
                        cursor: zoom-in;
                        .boxAttivita__img{
                            display: none;
                            width: 80%;
                            position: absolute;
                            top: 50%;
                            left: 30%;
                            z-index: 10;
                            box-shadow: 0 3px 34px 0 rgba(0, 0, 0, 0.31);
                            img{
                                width: 100%;
                            }
                        }
                        &:hover{
                            .boxAttivita__img{
                                display: flex;
                            }
                        }
                    }
                    
                }
            }
            &--video{
                width: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
            }
            &--correlati{
                width: 100%;
                padding: 0 35px;
                h3{
                    text-align: center;
                    margin-bottom: 35px;
                }
                .correlati{
                    width: 100%;
                    .swiper-slide{
                        width: 25%;
                        overflow: hidden;
                    }
                    &__card{
                        width: 100%;
                        figure{
                            width: 100%;
                            min-height: 270px;
                            background-image: url('../../assets/images/placeholder.jpg');
                            background-size: cover;
                            background-position: center;
                            margin: 0 0 8px 0;
                            img{
                                width: 100%;
                                opacity: 0;
                            }
                        }
                        &__content{
                            display: flex;
                            width: 100%;
                            flex-flow: column;
                            h4{
                                font-size: 19px;
                                font-weight: bold;
                                letter-spacing: 1.36px;
                                color: #222831;
                                margin: 6px 0;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                a{
                                    color: #222831;
                                    text-decoration: none;
                                }
                            }
                            .price{
                                margin: 6px 0;
                                font-size: 20px;
                                font-weight: bold;
                                letter-spacing: 1.67px;
                                color: #222831;
                            }
                            .tipologia{
                                font-size: 14px;
                                font-weight: 600;
                                letter-spacing: 1.27px;
                                color: #222831;
                                text-transform: uppercase;
                                margin: 6px 0;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
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
                            .address{
                                margin: 6px 0;
                                font-size: 14px;
                                font-weight: 300;
                                line-height: 1.64;
                                letter-spacing: 1px;
                                color: #222831;
                            }
                        }
                    }
                }
            }
            &--bgBlue{
                background-color: #f0f6fd;
                padding: 60px 35px;
                margin: 0;
            }
        }

    }
}
</style>  