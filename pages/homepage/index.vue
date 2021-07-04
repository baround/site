<template>
<main class="post individual">
    <Header />
    <div class="page contenitore">
        <section class="page__hero">
            <div class="page__hero__content">
                <div class="page__hero__content__logo">
                    <img class="logo" src="../../assets/images/logo-baround-white.png" />
                </div>
                <h1><strong>Da bere o da vivere,</strong><br/>trova la storia che preferisci</h1>
                <nav>
                    <ul>
                        <!--What’sup?-->
                        <li>
                            <a href="/whatsup">
                                <figure>
                                    <img class="logo" src="../../assets/images/icons-whatsup.svg" />
                                </figure>
                                <h2>What’sup?</h2>
                            </a>
                        </li>
                        <!--Bar-->
                        <li>
                            <a href="/locali">
                                <figure>
                                    <img class="logo" src="../../assets/images/icons-bar.svg" />
                                </figure>
                                <h2>Bar</h2>
                            </a>
                        </li>
                        <!--Itinerari-->
                        <li>
                            <a href="/itinerari">
                                <figure>
                                    <img class="logo" src="../../assets/images/icons-itinerari.svg" />
                                </figure>
                                <h2>Itinerari</h2>
                            </a>
                        </li>
                        <!--Enciclopedia-->
                        <li>
                            <a href="/enciclopedia">
                                <figure>
                                    <img class="logo" src="../../assets/images/icons-enciclopedia.svg" />
                                </figure>
                                <h2>Enciclopedia</h2>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div> 
            <figure class="page__hero__image" v-bind:style="{ 'background-image': 'url(../../assets/images/bg-new-home.jpg)' }">
                <img src="../../assets/images/bg-new-home.jpg" />
            </figure>
        </section>
        <section class="page__whatsup" v-if='posts'>
            <div class="page__whatsup__content page__content">
                <div class="page__whatsup__content__header">
                    <h2>
                        <span class="icon icon--whatsup"></span>
                        Le ultime news 
                    </h2>
                    <a class="cta cta--full" href="/whatsup">Scopri tutte</a>
                </div>
                <div class="page__whatsup__content__row">
                    <div class="page__whatsup__content__row__col page__whatsup__content__row__col--full">
                        <div class="page__whatsup__content__post" v-for="(post, key) in posts.slice(0, 3)" :key="key">
                            <figure v-bind:style="{ 'background-image': 'url(' + post.acf.immagine_di_copertina + ')' }">
                                <a :href="`/whatsup/${post.slug}`"><img v-bind:src="post.acf.immagine_di_copertina" /></a>
                            </figure>
                            <div class="page__whatsup__content__post__title">
                                <h2><a :href="`/whatsup/${post.slug}`" v-html="post.title.rendered"></a></h2>
                                <div class="txt" v-html="post.acf.descrizione_breve"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page__banners">
            <div class="page__content page__banners__content">
                <div class="banner">
                    <a href="">
                        <img src="../../assets/images/bg-new-home.jpg" />
                    </a>
                </div>
            </div>
        </section>
        <section class="page__locali">
            <div class="page__locali__content page__content">
                <div class="page__locali__content__header">
                    <h2>
                        <span class="icon icon--locali"></span>
                        Scopri tutti i bar di 
                    </h2>
                    <select>
                        <option value="Milano">Milano</option>
                        <option  disabled="disabled" value="-">Presto disponibili</option>
                    </select>
                </div>
                <MapLight />
            </div>
        </section>
        <section class="page__itinerari" v-if='itinerari'>
            <div class="page__itinerari__content page__content">
                <div class="page__itinerari__content__header">
                    <h2>
                        <span class="icon icon--itinerari"></span>
                        Scopri i migliori itinerari di
                    </h2>
                    <select class="blue">
                        <option value="Milano">Milano</option>
                        <option disabled="disabled" value="-">Presto disponibili</option>
                    </select>
                    <a class="cta cta--full" href="/itinerari">Scopri tutti</a>
                </div>
                <div class="page__itinerari__content__itinerari">
                    <div class="itinerari__fascia__contenuto__card" v-for="(itinerario, key) in itinerari.slice(0, 4)" :key="key">
                        <figure v-bind:style="{ 'background-image': 'url(' + itinerario.acf.immagine_di_copertina + ')' }">
                            <a :href="`/itinerari/${itinerario.slug}`"><img v-bind:src="itinerario.acf.immagine_di_copertina" /></a>
                        </figure>
                        <h2><a :href="`/itinerari/${itinerario.slug}`" v-html="itinerario.title.rendered"></a></h2>
                        <div class="txt" v-html="itinerario.acf.descrizione_breve"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <Newsletter />
    <Footer />
</main>
</template>

<script>
const loader = require('../../assets/images/loader.gif');
export default {
    computed: {
        page() {
            return this.$store.state.content.homepage;
        },
        posts() {
            return this.$store.state.content.posts;
        },
        itinerari() {
            return this.$store.state.content.itinerari;
        },
        swiper() {
            this.$refs.gallery.$swiper;
        },
    },
    created() {
        this.$store.dispatch("posts");
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
            title: 'Baround',
        }
    },
    head() {
        return {
        title: this.title,
            meta: [
                {
                hid: 'baround',
                name: 'Baround',
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
    section{
        width: 100%;
        position: relative;
        display: flex;
        flex-flow: column;
        padding: 0 20px;
        select{
            display: flex;
            justify-self: flex-start;
            margin-left: 30px;
            margin-right: auto;
            padding: 15px 28px 16px 24px;
            border-radius: 33.5px;
            border: solid 1px #ffffff;
            background: transparent;
            color: white;
            appearance: none;
            outline: none;
            font-size: 18px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-family: inherit;
            background: url('../../assets/images/icon-select-white.svg') calc(100% - 20px) center no-repeat; 
            &.blue{
                color: #222831;
                border: solid 1px #222831;
                background: url('../../assets/images/icon-select-blue.svg') calc(100% - 20px) center no-repeat; 
            }
            @media all and (max-width: 768px) {  
                width: 100%;
                margin: 20px 0;
            }
        }
    }
    &__header{
        width: 100%;
        position: relative;
        figure{
            width: 100%;
            // max-height: 620px;
            height: 100vh;
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
    &__hero{
        width: 100%;
        height: 80vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        position: relative;
        &__image{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80vh;
            z-index: 1;
            overflow: hidden;
            img{
                object-fit: cover;
                width: 100%;
                height: 100%;
            }
        }
        &__content{
            position: relative;
            z-index: 10;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            max-width: 1360px;
            width: 100%;
            &__logo{
                max-width: 210px;
                margin-bottom: 70px;
                img{
                    width: 100%;
                }
                @media all and (max-width: 768px) {  
                    display: none;
                }
            }
            h1{
                font-size: 60px;
                font-weight: 200;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.25;
                letter-spacing: normal;
                text-align: center;
                color: #ffffff;
                margin-bottom: 40px;
                strong{
                    font-weight: bold;
                }
                @media all and (max-width: 768px) {  
                    font-size: 28px;
                    text-align: left;
                    margin-left: 10px;
                }
            }
            nav{
                display: flex;
                flex-flow: row;
                justify-content: center;
                width: 100%;
                @media all and (max-width: 768px) {  
                    justify-content: flex-start;
                }
                ul{
                    display: flex;
                    flex-flow: row;
                    justify-content: center;
                    width: 100%;
                    list-style: none;
                    @media all and (max-width: 768px) {  
                        justify-content: flex-start;
                        margin-left: 0;
                    }
                    @media all and (max-width: 768px) {  
                        flex-wrap: wrap;
                    }
                    li{
                        width: 150px;
                        height: 150px;
                        border-radius: 100%;
                        position: relative;
                        overflow: hidden;
                        margin: 15px;
                        border: 0.9px solid white;
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        align-items: center;
                        transition: all .5s;
                        @media all and (max-width: 768px) {  
                            width: 120px;
                            height: 120px;
                            margin: 10px;
                            border: 0px solid transparent;
                        }
                        &:hover{
                            transform: scale(1.1);
                        }
                        &:before{
                            content: "";
                            position: absolute;
                            background: inherit;
                            z-index: -1;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: radial-gradient(104.07% 139.15% at 50.22% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
                            -webkit-backdrop-filter: blur(30px);
                            backdrop-filter: blur(30px);
                            margin: -20px;
                            opacity: 0.5;
                        }
                        a{
                            color: white;
                            display: flex;
                            flex-flow: column;
                            justify-content: center;
                            align-items: center;
                            text-decoration: none;
                            position: relative;
                            width: 100%;
                            height: 100%;
                            h2{
                                font-size: 13.7px;
                                letter-spacing: 0.49px;
                                color: #ffffff;
                                text-transform: uppercase;
                                margin-bottom: 0;
                                @media all and (max-width: 768px) {  
                                    font-size: 9px;
                                }
                            }
                            figure{
                                width: 35px;
                                margin-bottom: 15px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                img{
                                    width: auto;
                                    max-width: 100%;
                                }

                                @media all and (max-width: 768px) {  
                                    width: 30px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    &__content{
        max-width: 1380px;
        width: 100%;
        margin: 0 auto;
        h2{
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 1.09px;
            color: #212832;
            margin: 0;
            position: relative;
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: center;
            @media all and (max-width: 768px) {  
                font-size: 17px;
            }
        }
        .icon{
            position: relative;
            width: 38px;
            min-height: 38px;
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;

            @media all and (max-width: 768px) {  
            width: 48px;
            min-height: 48px;
            }
            &--itinerari{
                background: url('../../assets/images/icon-itinerari-blue.svg') left center no-repeat; 
                background-size: 32px auto;
                background-repeat: no-repeat;
                @media all and (max-width: 768px) {  

                }
            }
            &--locali{                
                background: url('../../assets/images/icon-locali-white.svg') left center no-repeat;  
                background-size: 20px auto;
                background-repeat: no-repeat;
                @media all and (max-width: 768px) {  
                    background-size: 30px auto;
                }
            }
            &--whatsup{
                background: url('../../assets/images/icon-news.svg') left center no-repeat;  
                background-size: 28px auto;
                background-repeat: no-repeat;
            }
            
        }
        .cta{
            &--full{
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 2.63px;
                color: #222831;
                text-transform: uppercase;
                text-decoration: none;
                background: url('../../assets/images/icon-arrow-next.svg') right center no-repeat;
                padding-right: 20px;
                background-size: 9px 15px;

                @media all and (max-width: 768px) {  
                    font-size: 0;
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
    &__whatsup{
        &__content{
            display: flex;
            flex-flow: column;
            &__header{
                width: 100%;
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 5px solid #1f2833;
                padding: 15px 0;
                margin: 20px 0;
            }
            &__post{
                width: 32%;
                flex-flow: column;
                justify-content: space-between;
                align-items: flex-start;
                display: flex;
                @media all and (max-width: 768px) {  
                    flex-flow: row;
                    width: 100%;
                }
                figure{
                    width: 100%;
                    height: 300px;
                    overflow: hidden;
                    margin-bottom: 15px;
                    @media all and (max-width: 768px) {  
                        width: 105px;
                        height: 60px;
                        margin-right: 20px;
                    }
                    img{
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                    }
                }
                &__title{
                    width: 100%;
                    @media all and (max-width: 768px) {  
                        width: calc(100% - 125px);
                    }
                    a{
                        text-decoration: none;
                        color: #222831;
                    }
                    h2{
                        font-size: 24px;
                        font-weight: bold;
                        line-height: 1.33;
                        letter-spacing: 0.75px;
                        color: #222831;

                        @media all and (max-width: 768px) {  
                            font-size: 14px;
                            font-weight: normal;
                            line-height: 17px;
                        }
                    }
                }
            }
            &__row{
                margin: 20px 0;
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                &__col{
                    width: 47%;
                    display: flex;
                    flex-flow: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    &--full{
                        width: 100%;
                        flex-flow: row;
                        justify-content: space-between;

                        @media all and (max-width: 768px) {  
                            flex-flow: column;
                        }
                    }
                }
            }
        }
    }
    &__banners{
        margin: 40px 0 40px 0;
        &__content{
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
        }
        .banner{
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            width: 728px;
            height: 90px;
            overflow: hidden;
            a{
                width: 100%;
                display: flex;
                flex-flow: column;
                justify-content: center;
                align-items: center;
            }
            img{
                max-width: 100%;
            }
        }
    }
    &__locali{
        background-color: #222831;
        color: white;
        &__content{
            padding: 26px 0 70px 0; 
            &__header{
                width: 100%;
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 5px solid #ffffff;
                padding: 15px 0;
                margin: 20px 0 30px 0;

                @media all and (max-width: 768px) {  
                    justify-content: center;
                    align-items: center;
                    flex-flow: column;
                }
            }
        }
        h2{
            color: white;
        }
    }
    &__itinerari{
        &__content{
            display: flex;
            flex-flow: column;
            &__header{
                width: 100%;
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 5px solid #1f2833;
                padding: 15px 0;
                margin: 20px 0;
                @media all and (max-width: 768px) {  
                    justify-content: center;
                    align-items: center;
                    flex-flow: column;
                    .cta{
                        display: none;
                    }
                }
            
            }
            &__itinerari{
                margin: 20px 0;
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;
                width: 100%;
            }
        }
    }
    .itinerari__fascia__contenuto{
    &__card{
        width: 24%;
        max-width: 100%;
        @media all and (max-width: 768px) {  
            width: 100%;
            margin-bottom: 50px;
        }
        figure{
            width: 100%;
            height: 250px;
            background-image: url('../../assets/images/placeholder.jpg');
            background-size: cover;
            background-position: center;
            margin: 0 0 50px 0;
            @media all and (max-width: 768px) {  
                margin: 0 0 25px 0;
                height: 250px;
            }
            img{
                width: 100%;
                opacity: 0;
                max-height: 100%;
            }
        }
        h2{
            font-size: 25px;
            font-weight: bold;
            line-height: 1.24;
            letter-spacing: 1px;
            color: #222831;
            margin-bottom: 10px;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            @media all and (max-width: 768px) {  
                font-size: 20px;
                margin-bottom: 10px;
            }
            a{
                text-decoration: none;
                color: #222831;
            }
        }
        .txt{
            font-size: 16px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.51;
            letter-spacing: 1.29px;
            color: #222831;
            margin-bottom: 30px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            @media all and (max-width: 768px) {  
                font-size: 14px;
                -webkit-line-clamp: 3;
                margin-bottom: 0px;
            }
        }
    }
    }
}
</style>  