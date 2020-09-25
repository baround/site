<template>
<main class="listing">
    <Header />
    <div class="itinerari" v-if='itinerari'>
        <section class="attivita__header">
            <figure v-bind:style="{ 'background-image': 'url()' }">
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
  itinerari() {
    return this.$store.state.content.itinerari;
  },
 },
  created() {
    this.$store.dispatch("itinerari");
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
