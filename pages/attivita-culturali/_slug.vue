<template>
<main class="post individual">
    <Header />
    <div class="attivita" v-if='activity'>
        <section class="attivita__header">
            <figure v-bind:style="{ 'background-image': 'url(' + activity.acf.immagine_di_copertina + ')' }">
                <img v-bind:src="activity.acf.immagine_di_copertina" />
            </figure>
            <div class="attivita__header__details">
                <h1 v-html="activity.title.rendered"></h1>
                <span class="address">{{activity.acf.indirizzo.address}}</span>
            </div>
        </section>
        <section class="attivita__fascia" v-for="(field, index) in activity.acf.contenuto" :key="index">
            <div class="attivita__fascia__contenuto attivita__fascia__contenuto--intro intro" v-if="field.acf_fc_layout === 'introduzione'">
                <div class="txt" v-html="field.contenuto">

                </div>
            </div>
            <div class="attivita__fascia__contenuto attivita__fascia__contenuto--testo" v-if="field.acf_fc_layout === 'testo'">
                <div class="txt" v-html="field.contenuto">

                </div>
            </div>
            <div class="attivita__fascia__contenuto attivita__fascia__contenuto--image" v-else-if="field.acf_fc_layout === 'immagine'">
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-if="field.dimensione_immagine === 'normale'" class="medium">
                    <img v-bind:src="field.immagine" />
                </figure>
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-else class="full">
                    <img v-bind:src="field.immagine" />
                </figure>
            </div>
            <div class="attivita__fascia__contenuto attivita__fascia__contenuto--video" v-else-if="field.acf_fc_layout === 'video'">
                <div class="video" v-html="field.video">
                </div>
            </div>
        </section>
        <section class="attivita__fascia">
            <div class="attivita__fascia__contenuto attivita__fascia__contenuto--mappa">
                <gmap-map :options="{styles: styles}" ref="mymap" :center="getPosition()" :zoom="14">
                    <gmap-marker v-for="(item, key) in coordinates" :key="key" :position="getPosition()" :clickable="true" @click="toggleInfo(item, key)" />
                </gmap-map>
            </div>
        </section>
        <section class="attivita__fascia" v-if='correlatiAttivita'>
            <div class="attivita__fascia__contenuto attivita__fascia__contenuto--bgBlue attivita__fascia__contenuto--correlati" :startAttivitaSwiper="startAttivitaSwiper()">
                <h3>Attività nei dintorni:</h3>
                <swiper class="correlati" ref="attivitaCorrelate" :options="swiperAttivitaOptions">
                    <swiper-slide class="correlati__single" v-for="(attivita, index) in correlatiAttivita" :key="index">
                        <div class="correlati__card">

                            <figure v-if='attivita.acf.immagine_di_copertina' v-bind:style="{ 'background-image': 'url(' + attivita.acf.immagine_di_copertina + ')' }">
                                <a :href="`/attivita-culturali/${attivita.slug}`"><img v-bind:src="attivita.acf.immagine_di_copertina" /></a>
                            </figure>
                            <figure v-else>
                                <a :href="`/attivita-culturali/${attivita.slug}`"><img src="~/assets/images/placeholder.jpg" /></a>
                            </figure>
                            <div class="correlati__card__content">
                                <h4><a :href="`/attivita-culturali/${attivita.slug}`" v-html="attivita.title.rendered"></a></h4>
                                <span class="address">{{attivita.acf.indirizzo.address}}</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination-attivita" slot="pagination"></div>
                </swiper>
            </div>
        </section>
    </div>
    <div v-else>
        Wait 
    </div>

</main>
</template>




<script>

export default {
    computed: {
        attivita() {
            return this.$store.state.content.attivita;
        },
        activity() {
            return this.$store.state.content.attivita.find(el => el.slug === this.slug);
        },
        listalocali() {
            return this.$store.state.content.locali;
        },
        swiper() {
            this.$refs.localiCorrelati.$swiper;
            this.$refs.attivitaCorrelate.$swiper;
        }
    },
    data() {
        return {
            slug: this.$route.params.slug,
            swiperLocaliOptions: {
                
            },
            swiperAttivitaOptions: {
                
            },
            correlatiLocali: {

            },
            correlatiAttivita: {

            },
            startLocation: {
                lat: 45.4627124,
                lng: 9.1076929
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

        };
    },
    methods: {
        getPosition: function() {
            return {
                lat: parseFloat(this.activity.acf.indirizzo.lat),
                lng: parseFloat(this.activity.acf.indirizzo.lng)
            }
        },
        toggleInfo: function(marker, key) {
            this.startLocation = this.getPosition()
            this.infoPosition = this.getPosition()
            this.infoContent = marker.full_name
            if (this.infoCurrentKey == key) {
                this.infoOpened = !this.infoOpened
            } else {
                this.infoOpened = true
                this.infoCurrentKey = key
            }
        },
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
        }
    },
    created() {
        this.$store.dispatch("locali");
        this.$store.dispatch("attivita");
    },
    beforeUpdate(){
        // FOR LOCALI
        var idPosts = [];
        var i;
        for (i = 0; i < this.activity.acf.locali_vicini.length; i++) {
            idPosts.push(this.activity.acf.locali_vicini[i].ID);
            console.log(this.activity.acf.locali_vicini[i].ID);
        }
        console.log()
        var filtered = this.$store.state.content.locali.filter((item) => idPosts.includes(item.id));
        this.correlatiLocali = filtered;
        // FOR ATTIVITA
        var relPosts = [];
        var i;
        for (i = 0; i < this.activity.acf.attivita_simili.length; i++) {
            relPosts.push(this.activity.acf.attivita_simili[i].ID);
        }
        var filtroattivita = this.attivita.filter((item) => relPosts.includes(item.id));
        this.correlatiAttivita = filtroattivita;
    }
};
</script>

<style scoped defer lang="scss">
.vue-map-container {
  height: 560px;
  width: 100%;
  max-height: 100vh;
}
.attivita{
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
            background-image: linear-gradient(180deg, #75757540, #000000a1);
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
            .price{
                font-size: 16px;
                font-weight: bold;
                letter-spacing: 1.33px;
                color: #ffffff;
                margin: 5px 0; 
            }
            .tipologia{
                font-size: 16px;
                font-weight: 600;
                letter-spacing: 5px;
                color: #ffffff;
                text-transform: uppercase;
                margin: 5px 0;
                span{
                    padding: 0 5px;
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
            }
        }

    }
}
</style>  