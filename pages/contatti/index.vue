<template>
<main class="post individual">
    <Header />
    <div  v-if='page'>
        <div class="page contenitore" v-if='page.acf'>
        <section class="page__header">
            <figure v-bind:style="{ 'background-image': 'url(' + page.acf.immagine_di_copertina + ')' }">
                <img v-bind:src="page.acf.immagine_di_copertina" />
            </figure>
            <!-- <div class="page__header__details">
                <h1 v-html="page.title.rendered"></h1>
            </div> -->
        </section>
        <section class="page__fascia" v-for="(field, index) in page.acf.contenuto" :key="index">
            <div class="page__fascia__contenuto page__fascia__contenuto--intro intro" v-if="field.acf_fc_layout === 'introduzione'">
                <div class="txt" v-html="field.contenuto">

                </div>                
                <h3>Seguici anche su:</h3>
                <div class="social">
                    <a href="https://www.facebook.com/baroundit" target="_blank"><span class="icon icon__fb"></span></a>
                    <a href="https://www.instagram.com/baround_/" target="_blank"><span class="icon icon__ig"></span></a>
                </div>
            </div>
            <div class="page__fascia__contenuto page__fascia__contenuto--testo" v-if="field.acf_fc_layout === 'testo'">
                <div class="txt" v-html="field.contenuto">

                </div>
            </div>
            <div class="page__fascia__contenuto page__fascia__contenuto--gallery" v-if="field.acf_fc_layout === 'galleria_immagini'">
                <swiper class="gallery" ref="gallery" :options="swiperGalleryOptions">
                    <swiper-slide class="gallery__single" v-for="(foto, index) in field.gallery" :key="index">
                        <figure v-bind:style="{ 'background-image': 'url(' + foto.immagine + ')' }">
                            <img v-bind:src="foto.immagine" />
                        </figure>
                    </swiper-slide>
                    <div class="swiper-pagination-gallery" slot="pagination"></div>
                </swiper>  
            </div>
            <div class="page__fascia__contenuto page__fascia__contenuto--image" v-else-if="field.acf_fc_layout === 'immagine'">
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-if="field.dimensione_immagine === 'normale'" class="medium">
                    <img v-bind:src="field.immagine" />
                </figure>
                <figure v-bind:style="{ 'background-image': 'url(' + field.immagine + ')' }" v-else class="full">
                    <img v-bind:src="field.immagine" />
                </figure>
            </div>
            <div class="page__fascia__contenuto page__fascia__contenuto--video" v-else-if="field.acf_fc_layout === 'video'">
                <div class="video" v-html="field.video">
                </div>
            </div>
        </section>
        <NewsletterPage />
    </div>
    <div class="loader" v-else>
        <span class="loading">
            <img v-bind:src="loader">
        </span>
    </div>
    </div>

    <Newsletter />
    <Footer />
</main>
</template>

<script>
const loader = require('../../assets/images/loader.gif');
import InstagramEmbed from '~/node_modules/vue-instagram-embed';
export default {  
    components: {
        InstagramEmbed,
    },
    computed: {
        page() {
            console.log(this.$store.state.content.contatti[0]);
            return this.$store.state.content.contatti[0];
        },
        swiper() {
            this.$refs.gallery.$swiper;
        },
    },
    created() {
        this.$store.dispatch("contatti");
    },
    data() {
        return {
            loader: loader,
            swiperGalleryOptions: {
                slidesPerView: 2,
                spaceBetween: 10,
                loop: true,
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
            title: 'Contatti - Baround',
        }
    },
    beforeUpdate(){
        console.log('this.page beforeUpdate');
        console.log(this.page);
    },
    mounted(){
        console.log('this.page mounted');
        console.log(this.page);
    },
    head() {
        return {
        title: this.title,
            meta: [
                {
                hid: 'baround',
                name: 'Contatti - Baround',
                content: 'La guida definitiva ai cocktail bar.'
                },
                //FB
                { hid: 'og:title', name: 'og:title', content: this.title },
                { hid: 'og:description', name: 'og:description', content: 'La guida definitiva ai cocktail bar.' },
                { hid: 'og:url', name: 'og:url', content: 'https://www.baround.it' },
                { hid: 'og:image', name: 'og:image', content: 'https://be.baround.it/wp-content/uploads/2020/10/chi-siamo.jpg' },
                //TWITTER
                { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            ]
        }
    },
    methods: {
        funGalleryOption: function(){
            return {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination-gallery',
                    clickable: true,
                },
                breakpoints: {
                    1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
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
        startGallerySwiper: function(){
            this.swiperGalleryOptions = this.funGalleryOption();
        }
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
.page{
    animation: appear 0.5s;
}
.page{
    width: 100%;
    &__header{
        width: 100%;
        position: relative;
        figure{
            width: 100%;
            // max-height: 620px;
            height: 100vh;
            max-height: 100vh;
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
            &--intro{
                max-width: 654px;
                background: white;
                padding: 75px 75px 0px 75px;
                margin-top: -150px;
                position: relative;
                margin-bottom: 50px;
                z-index: 10;
                align-items: center;
                p{
                    text-align: center;
                }
                h3{
                    text-align: center;
                }
                a{
                    color: black;
                }
                @media all and (max-width: 768px) {  
                    padding: 30px 20px;
                    margin-top: 0;
                }
                .social{
                    display: flex;
                    flex-flow: row;
                    justify-content: center;
                    a{
                        margin: 0 20px;
                        display: flex;
                        .icon{
                            width: 30px;
                            height: 30px;
                            background-size: auto 30px;
                            background-position: center;
                            background-repeat: no-repeat;
                            &__fb{
                            background-image: url('../../assets/images/icon-facebook-blue.svg');
                            }
                            &__ig{
                            background-image: url('../../assets/images/icon-instagram-blue.svg');
                            }
                        }
                    }
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
                    padding-right: 50px;;
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
                            background-image: url('../../assets/images/placeholder.jpg');
                            background-size: cover;
                            background-position: center;
                            margin: 0 0 8px 0;
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