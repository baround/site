<template>
<main class="post individual">
    <Header />
    <div class="locale contenitore" v-if='locale'>
        <section class="locale__header">
            <figure v-bind:style="{ 'background-image': 'url(' + locale.acf.immagine_di_copertina + ')' }">
                <img v-bind:src="locale.acf.immagine_di_copertina" />
            </figure>
            <div class="locale__header__details">
                <h1 v-html="locale.title.rendered"></h1>
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
                <div class="tipologia">
                    <span v-for="(type, index) in locale.acf.tipo" :key="index">{{type}}</span>      
                </div>
                <span class="address">{{locale.acf.indirizzo.address}}</span>
            </div>
        </section>
        <section class="locale__fascia" v-for="(field, index) in locale.acf.contenuto" :key="index">
            <div class="locale__fascia__contenuto locale__fascia__contenuto--intro intro" v-if="field.acf_fc_layout === 'introduzione'">
                <div class="txt" v-html="field.contenuto">

                </div>
            </div>
            <div class="locale__fascia__contenuto locale__fascia__contenuto--testo" v-if="field.acf_fc_layout === 'testo'">
                <div class="txt" v-html="field.contenuto">

                </div>
            </div>
            <div class="locale__fascia__contenuto locale__fascia__contenuto--gallery" v-if="field.acf_fc_layout === 'galleria_immagini'">
                <swiper class="gallery" ref="gallery" :options="swiperGalleryOptions">
                    <swiper-slide class="gallery__single" v-for="(foto, index) in field.gallery" :key="index">
                        <figure v-bind:style="{ 'background-image': 'url(' + foto.immagine + ')' }">
                            <img v-bind:src="foto.immagine" />
                        </figure>
                    </swiper-slide>
                    <div class="swiper-pagination-gallery" slot="pagination"></div>
                </swiper>  
            </div>
            <div class="locale__fascia__contenuto locale__fascia__contenuto--image" v-else-if="field.acf_fc_layout === 'immagine'">
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-if="field.dimensione_immagine === 'normale'" class="medium">
                    <img v-bind:src="field.immagine" />
                </figure>
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-else class="full">
                    <img v-bind:src="field.immagine" />
                </figure>
            </div>
            <div class="locale__fascia__contenuto locale__fascia__contenuto--video" v-else-if="field.acf_fc_layout === 'video'">
                <div class="video" v-html="field.video">
                </div>
            </div>
        </section>

        <section class="locale__fascia">
            <div class="locale__fascia__contenuto locale__fascia__contenuto--mappa">
                <!-- <gmap-map :options="{styles: styles}" ref="mymap" :center="getPosition()" :zoom="14">
                    <gmap-marker v-for="(item, key) in coordinates" :key="key" :position="getPosition()" :clickable="true" @click="toggleInfo(item, key)" :icon="markerOptions" />
                </gmap-map> -->


                <gmap-map :options="{styles: styles }" ref="mymap" :center="getPosition()" :zoom="16">
                    <gmap-marker  :position="getPosition()" :clickable="true"  :icon="markerOptions" />
                </gmap-map>
            </div>
        </section>
        <section class="locale__fascia" v-if='correlatiLocali.length'>
            <div class="locale__fascia__contenuto locale__fascia__contenuto--correlati" :startLocaliSwiper="startLocaliSwiper()">
                <h3>Bar simili a questo..</h3>
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
                                    <span v-for="(type, index) in locale.acf.tipo" :key="index">{{type}}</span>      
                                </div>
                                <span class="address">{{nearlocale.acf.indirizzo.address}}</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination-locali" slot="pagination"></div>
                </swiper>
            </div>
        </section>
        <section class="locale__fascia" v-if='correlatiItinerari.length'>
            <div class="locale__fascia__contenuto locale__fascia__contenuto--bgBlue locale__fascia__contenuto--correlati" :startItinerariSwiper="startItinerariSwiper()">
                <h3>Itinerari nei dintorni:</h3>
                <swiper class="correlati" ref="attivitaCorrelate" :options="swiperItinerariOptions">
                    <swiper-slide class="correlati__single" v-for="(itinerario, index) in correlatiItinerari" :key="index">
                        <div class="correlati__card">
                            <figure v-if='itinerario.acf.immagine_di_copertina' v-bind:style="{ 'background-image': 'url(' + itinerario.acf.immagine_di_copertina + ')' }">
                                <a :href="`/itinerari/${itinerario.slug}`"><img v-bind:src="itinerario.acf.immagine_di_copertina" /></a>
                            </figure>
                            <figure v-else>
                                <a :href="`/itinerari/${itinerario.slug}`"><img src="~/assets/images/placeholder.jpg" /></a>
                            </figure>
                            <div class="correlati__card__content">
                                <h4><a :href="`/itinerari/${itinerario.slug}`" v-html="itinerario.title.rendered"></a></h4>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination-itinerari" slot="pagination"></div>
                </swiper>
            </div>
        </section>
    </div>
    <div class="loader" v-else>
        <span class="loading">
            <img v-bind:src="loader">
        </span>
    </div>
    <Footer />
</main>
</template>




<script>

const loader = require('../../assets/images/loader.gif');
const mapMarker = require('../../assets/images/icon-pinner-locali.png');
export default {
transition: "slide-right",
    computed: {
        locali() {
            return this.$store.state.content.locali;
        },
        itinerari() {
            return this.$store.state.content.itinerari;
        },
        locale() {
            return this.$store.state.content.locali.find(el => el.slug === this.slug);
        },
        swiper() {
            this.$refs.localiCorrelati.$swiper;
            this.$refs.attivitaCorrelate.$swiper;
            this.$refs.gallery.$swiper;
        }
    },
    head () {
        let post = this.locale;
        if(post){
            var meta = {
                title: '',
                description: '',
                image: '',
                url: ''
            };
            var i;
            for (i = 0; i < post.yoast_meta.length; i++) {
                if(post.yoast_meta[i].property === 'og:description'){
                    meta.description = post.yoast_meta[i].content;
                } else if(post.yoast_meta[i].property === 'og:title'){
                    meta.title = post.yoast_meta[i].content;
                } else if(post.yoast_meta[i].property === 'og:url'){
                    meta.url = post.yoast_meta[i].content;
                } else if(post.yoast_meta[i].property === 'og:image'){
                    meta.image = post.yoast_meta[i].content;
                    
                }
            }
            var title = meta.title ? meta.title : '';
            var description = meta.description ? meta.description : '';
            var image = meta.image ? meta.image : '';
            var url = meta.url ? meta.url : '';

            console.log(title);
            console.log(description);
            console.log(image);
            console.log(url);
        }
        return {
            title: `${title}`,
            meta: [
                {
                hid: 'Site',
                name:  `${title} - Baround`,
                content: `${description}`
                },
                //FB
                { hid: 'og:title', name: 'og:title', content: `${title}` },
                { hid: 'og:description', name: 'og:description', content: `${description}` },
                { hid: 'og:url', name: 'og:url', content: `${url}` },
                { hid: 'og:image', name: 'og:image', content: `${image}` },
                //TWITTER
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            ]
        }
    },
    data() {
        return {
            // title: 'Locale',
            loader: loader,
            slug: this.$route.params.slug,
            markerOptions: {
                url: mapMarker,
                scaledSize: { height: 34, width: 20 },
            },
            swiperLocaliOptions: {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination-locali',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            },
            swiperGalleryOptions: {
                slidesPerView: 2,
                spaceBetween: 10,
                loop: false,
                pagination: {
                    el: '.swiper-pagination-gallery',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 2,
                    spaceBetween: 10
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            },
            swiperItinerariOptions: {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination-itinerari',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            },
            correlatiLocali: {

            },
            correlatiItinerari: {

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
                lat: parseFloat(this.locale.acf.indirizzo.lat),
                lng: parseFloat(this.locale.acf.indirizzo.lng)
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
                    el: '.swiper-pagination-locali',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            }
        },
        funGalleryOption: function(){
            return {
                slidesPerView: 2,
                spaceBetween: 10,
                loop: false,
                pagination: {
                    el: '.swiper-pagination-gallery',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 2,
                    spaceBetween: 10
                    },
                    768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            }
        },
        funItinerariOption: function(){
            return {
                slidesPerView: 4,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination-itinerari',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 4,
                    spaceBetween: 40
                    },
                    768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                    },
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                    }
                }
            }
        },
        startLocaliSwiper: function(){
            this.swiperLocaliOptions = this.funLocaliOption();
        },
        startItinerariSwiper: function(){
            this.swiperItinerariOptions = this.funItinerariOption();
        },
        startGallerySwiper: function(){
            this.swiperGalleryOptions = this.funGalleryOption();
        }
    },
    created() {
        // this.$store.dispatch("locali");
        // this.$store.dispatch("itinerari");
    },
    beforeUpdate(){
        if(this.locale.acf.locali_simili){
            var idPosts = [];
            var i;
            for (i = 0; i < this.locale.acf.locali_simili.length; i++) {
                idPosts.push(this.locale.acf.locali_simili[i].ID);
            }
            var filtered = this.locali.filter((item) => idPosts.includes(item.id));
            this.correlatiLocali = filtered;
        }
        if(this.locale.acf.itinerari_vicini){
            console.log('ok')
            var relPosts = [];
            var i;
            for (i = 0; i < this.locale.acf.itinerari_vicini.length; i++) {
                relPosts.push(this.locale.acf.itinerari_vicini[i].ID);
            }
            var filtroitinerari = this.itinerari.filter((item) => relPosts.includes(item.id));
            this.correlatiItinerari = filtroitinerari;
        }
        // this.title = this.locale.title.rendered;
        console.log(this.locale)
    }
};
</script>

<style scoped defer lang="scss">
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
      opacity: 1;
  }
}
.post{
    animation: appear 0.5s;
}
.vue-map-container {
  height: 560px;
  width: 100%;
  max-height: 100vh;
}
.locale{
    width: 100%;
    &__header{
        width: 100%;
        position: relative;
        figure{
            width: 100%;
            // max-height: 620px;
            height: 100vh;
            max-height: 100vh;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            @media all and (max-width: 768px) {  
                min-height: 50vh;
                max-height: 100vh;
            }
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
            @media all and (max-width: 768px) { 
                padding: 20px;
            }
            h1{
                font-size: 46px;
                font-weight: bold;
                line-height: 1.09;
                letter-spacing: 3.29px;
                text-align: center;
                color: #ffffff;
                margin-bottom: 20px;
                @media all and (max-width: 768px) {  
                    font-size: 28px;
                    font-weight: bold;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.21;
                    letter-spacing: 2px;
                }
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
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                @media all and (max-width: 768px) {  
                    font-size: 14px;
                }
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
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                text-align: center;
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
            @media all and (max-width: 768px) {  
                margin: 12px 0;
            }
            &--gallery{
                .gallery{
                    @media all and (max-width: 768px) {  
                        padding-right: 50px;
                    }
                }
            }
            &--mappa, &--gallery{
                margin: 0;
            }
            &--intro{
                max-width: 654px;
                background: white;
                padding: 75px 75px 0px 75px;
                margin-top: -150px;
                position: relative;
                margin-bottom: 0px;
                z-index: 10;
                @media all and (max-width: 768px) {  
                    padding: 30px 20px;
                    margin-top: 0;
                }
            }
            &--testo{
                max-width: 674px;
                background: white;
                padding: 0 75px 0 75px;
                position: relative;
                @media all and (max-width: 768px) {  
                    padding: 30px 20px;
                }
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
                @media all and (max-width: 768px) {  
                    padding: 20px 0 20px 20px;
                }
                h3{
                    text-align: center;
                    margin-bottom: 35px;
                    @media all and (max-width: 768px) {  
                        font-size: 22px!important;
                        font-weight: bold;
                        letter-spacing: 1.29px;
                        text-align: left; 
                    }
                }
                .correlati{
                    width: 100%;
                    @media all and (max-width: 768px) {  
                        padding-right: 50px;
                    }
                    .swiper-slide{
                        width: 25%;
                        overflow: hidden;
                        @media all and (max-width: 768px) {  
                            width: 100%;
                        }
                    }
                    &__card{
                        width: 100%;
                        figure{
                            width: 100%;
                            min-height: 270px;
                            height: 300px;
                            max-height: 300px;
                            background-image: url('../../assets/images/placeholder.jpg');
                            background-size: cover;
                            background-position: center;
                            margin: 0 0 8px 0;
                            height: 270px;
                            @media all and (max-width: 768px) {  
                                height: 150px;
                                min-height: 150px;
                            }
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
                                @media all and (max-width: 768px) {  
                                    font-size: 14px;
                                    letter-spacing: 1px;
                                    margin: 3px 0;
                                }
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
                                @media all and (max-width: 768px) {  
                                    font-size: 16px;
                                    margin: 3px 0;
                                }
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
                                @media all and (max-width: 768px) {  
                                    margin: 3px 0;
                                }
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
                                @media all and (max-width: 768px) {  
                                    margin: 3px 0;
                                }
                            }
                        }
                    }
                }
            }
            &--bgBlue{
                background-color: #f0f6fd;
                padding: 60px 35px;
                margin: 0;
                @media all and (max-width: 768px) {  
                    padding: 20px 0 20px 20px;
                }
            }
        }

    }
}
</style>  