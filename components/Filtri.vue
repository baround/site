<template>
  <div class="finder__filters__filtri">
    <form class="filtri" id="filtri">
      <!--row city-->
      <div class="filtri__row">
        <label for="city">Città</label>
        <select v-model="city">
          <option value="Milano">Milano</option>
        </select>
      </div>
      <!--row occasione-->
      <div class="filtri__row">
        <label for="occasione">Occasione</label>
        <select v-model="occasione">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <!--row occasione-->
      <div class="filtri__row">
        <label for="location">Coperto/fuori</label>
        <select v-model="location">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <!--row occasione-->
      <div class="filtri__row">
        <label for="prezzo">Fascia presso</label>
        <div class="prezzo__row">
          <span>
            &euro;
            <input type="radio" id="prezzo" value="basso" v-model="prezzo">
          </span>
          <span>
            &euro;
            &euro;
            <input type="radio" id="prezzo" value="medio" v-model="prezzo">
          </span>
          <span>
            &euro;
            &euro;
            &euro;
            <input type="radio" id="prezzo" value="alto" v-model="prezzo">
          </span>
        </div>
      </div>
    </form>
    
  </div>
</template>
<script>
export default {  
  props: ['locali'],
  mounted(){
    // console.log(this.locali)
  }
  
}
</script>
