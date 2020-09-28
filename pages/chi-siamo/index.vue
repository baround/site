<template>
<main class="post individual">
    <Header />
    <div class="page" v-if='page'>
        <section class="page__header">
            <figure v-bind:style="{ 'background-image': 'url(' + page.acf.immagine_di_copertina + ')' }">
                <img v-bind:src="page.acf.immagine_di_copertina" />
            </figure>
            <div class="page__header__details">
                <h1 v-html="page.title.rendered"></h1>
            </div>
        </section>
        <section class="page__fascia" v-for="(field, index) in page.acf.contenuto" :key="index">
            <div class="page__fascia__contenuto page__fascia__contenuto--intro intro" v-if="field.acf_fc_layout === 'introduzione'">
                <div class="txt" v-html="field.contenuto">

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
    </div>
    <div class="loader" v-else>
        Wait 
    </div>
    <Footer />
</main>
</template>

<script>
export default {
    computed: {
        page() {
            return this.$store.state.content.chisiamo;
        },
        created() {
            this.$store.dispatch("chisiamo");
        },
        swiper() {
            this.$refs.gallery.$swiper;
        },
    },
    data() {
        return {
            swiperGalleryOptions: {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: false,
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
            },
        }
    },
    methods: {
        funGalleryOption: function(){
            return {
                slidesPerView: 2,
                spaceBetween: 30,
                loop: false,
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
.page{
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