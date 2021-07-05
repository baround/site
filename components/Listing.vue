<template>
  <div class="finder__listing__locali">
    <div class="finder__listing__locali__locale" v-for="(locale, key) in locali" :key="key">
      <figure v-bind:style="{ 'background-image': 'url(' + locale.acf.immagine_di_copertina + ')' }">
          <img v-bind:src="locale.acf.immagine_di_copertina" />
      </figure>
      <div class="finder__listing__locali__locale__content">
        <h2><a :href="`/locali/${locale.slug}`" v-html="locale.title.rendered"></a></h2>
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
    </div>
  </div>
</template>
<script>
export default {  
  props: ['locali'],
  mounted(){
  }
  
}
</script>
