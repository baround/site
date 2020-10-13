<template>
<main class="listing">
    <Header />
    <div class="itinerari contenitore" v-if='itinerari'>
        <section class="itinerari__header">
            <figure v-bind:style="{ 'background-image': 'url(' + bgTop + ')' }">
                <!-- <img v-bind:src="" /> -->
                <img v-bind:src="bgTop" />
            </figure>
            <div class="itinerari__header__details">
                <h1>Storie da scoprire, prima che da bere</h1>
            </div>
        </section>
        <section class="itinerari__fascia">
            <div class="itinerari__fascia__contenuto itinerari__fascia__contenuto--listing">
                <div class="itinerari__fascia__contenuto__card" v-for="(itinerario, key) in itinerari" :key="key">
                    <figure v-bind:style="{ 'background-image': 'url(' + itinerario.acf.immagine_di_copertina + ')' }">
                        <a :href="`/itinerari/${itinerario.slug}`"><img v-bind:src="itinerario.acf.immagine_di_copertina" /></a>
                    </figure>
                    <h2><a :href="`/itinerari/${itinerario.slug}`" v-html="itinerario.title.rendered"></a></h2>
                    <div class="txt" v-html="itinerario.acf.descrizione_breve"></div>
                </div>
            </div>
        </section>
    </div>
    <div class="loader" v-else>
        <span class="loading">
            <img v-bind:src="loader">
        </span>
    </div>
    <Newsletter />
    <Footer />
</main>
</template>

<script>
const loader = require('../../assets/images/loader.gif');
const bgTop = require('../../assets/images/bg-itinerari.jpg');
export default {
transition: "slide-right",
data(){
    return{
        loader: loader,
        bgTop: bgTop,
        title: 'Itinerari - Baround',
    }
},
head() {
    return {
    title: this.title,
        meta: [
            {
            hid: 'baround',
            name: 'Itinerari - Baround',
            content: 'Baround con noi. Scopri i luoghi inaspettati di Milano.'
            },
            //FB
            { hid: 'og:title', name: 'og:title', content: this.title },
            { hid: 'og:description', name: 'og:description', content: 'Baround con noi. Scopri i luoghi inaspettati di Milano.' },
            { hid: 'og:url', name: 'og:url', content: 'https://www.baround.it' },
            { hid: 'og:image', name: 'og:image', content: 'https://be.baround.it/wp-content/uploads/2020/10/chi-siamo.jpg' },
            //TWITTER
            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        ]
    }
},
computed: {
  itinerari() {
    return this.$store.state.content.itinerari;
  },
 },
  created() {
    // this.$store.dispatch("itinerari");
  },
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
.contenitore{
    animation: appear 0.5s;
}
.itinerari{
    width: 100%;
    margin-bottom: 50px;
    &__header{
        width: 100%;
        position: relative;
        figure{
            width: 100%;
            max-height: 620px;
            overflow: hidden;
            background-size: cover;
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
            max-width: 1340px;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            margin: 50px 0;
            @media all and (max-width: 768px) {  
                margin: 12px 0;
            }
            &--listing{
                flex-flow: row;
                width: 100%;
                position: relative;
                margin-bottom: 0px;
                z-index: 6;
                flex-wrap: wrap;
                @media all and (max-width: 768px) {  
                    flex-flow: column;
                    padding: 20px;
                }
            }
            &__card{
                width: 29%;
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