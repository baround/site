<template>
<main class="listing">
    <Header />
    <div class="itinerari" v-if='itinerari'>
        <section class="itinerari__header">
            <figure v-bind:style="{ 'background-image': 'url(/_nuxt/img/bg-itinerari.jpg)' }">
                <!-- <img v-bind:src="" /> -->
                <img src="~/assets/images/bg-itinerari.jpg" />
            </figure>
            <div class="itinerari__header__details">
                <h1>Scopri gli itinerari del gusto</h1>
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
        Wait 
    </div>
    <Footer />
</main>
</template>

<script>
export default {
transition: "slide-right",
computed: {
  itinerari() {
    return this.$store.state.content.itinerari;
  },
 },
  created() {
    this.$store.dispatch("itinerari");
  },
};
</script>

<style scoped defer lang="scss">
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
            max-width: 1340px;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            margin: 50px 0;
            &--listing{
                flex-flow: row;
                width: 100%;
                position: relative;
                margin-bottom: 0px;
                z-index: 10;
            }
            &__card{
                width: 29%;
                max-width: 100%;
                figure{
                    width: 100%;
                    height: 407px;
                    background-image: url('../../assets/images/placeholder.jpg');
                    background-size: cover;
                    background-position: center;
                    margin: 0 0 50px 0;
                    img{
                        width: 100%;
                        opacity: 0;
                    }
                }
                h2{
                    font-size: 42px;
                    font-weight: bold;
                    line-height: 1.24;
                    letter-spacing: 3px;
                    color: #222831;
                    margin-bottom: 30px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    a{
                        text-decoration: none;
                        color: #222831;
                    }
                }
                .txt{
                    font-size: 18px;
                    font-weight: 300;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.71;
                    letter-spacing: 1.29px;
                    color: #222831;
                    margin-bottom: 30px;
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
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