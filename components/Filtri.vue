<template>
  <div class="finder__filters__filtri">
    <form class="filtri" id="filtri">
      <!--row city-->
      <div class="filtri__row">
        <label for="city">Città</label>
        <select v-model="quiz.city" v-on:click="city(quiz.city);">
          <option value="Milano">Milano</option>
        </select>
      </div>
      <!--row occasione-->
      <div class="filtri__row">
        <label for="occasione">Occasione</label>
        <select v-model="quiz.occasione" v-on:click="city(quiz.occasione);">
          <option value="4chiacchiere">4 chiacchiere</option>
          <option value="aperitivo">Aperitivo</option>
          <option value="appuntamento">Appuntamento</option>
          <option value="meeting">Meeting</option>
        </select>
      </div>
      <!--row occasione-->
      <div class="filtri__row">
        <label for="location">Coperto/fuori</label>
        <select v-model="quiz.location" v-on:click="location(quiz.location);">
          <option value="aperto">All'aperto</option>
          <option value="coperto">Dentro</option>
        </select>
      </div>
      <!--row occasione-->
      <div class="filtri__row">
        <label for="prezzo">Fascia presso</label>
        <div class="prezzo__row">
          <span>
            &euro;
            <input type="radio" id="prezzo" value="basso" v-model="quiz.prezzo" v-on:click="prezzo(quiz.prezzo);">
          </span>
          <span>
            &euro;
            &euro;
            <input type="radio" id="prezzo" value="medio" v-model="quiz.prezzo" v-on:click="prezzo(quiz.prezzo);">
          </span>
          <span>
            &euro;
            &euro;
            &euro;
            <input type="radio" id="prezzo" value="alto" v-model="quiz.prezzo" v-on:click="prezzo(quiz.prezzo);">
          </span>
        </div>
      </div>
    </form>
    
  </div>
</template>
<style scoped defer lang="scss">
.finder__filters__filtri{
  position: fixed;
  z-index: 1000;
}
</style>
<script>
export default {  
  data() {
    return {
      quiz: {
        city: null,
        type: [],
        occasione: [],
        location: null,
        prezzo: null
      },
    }
  }
  // },
  // computed: {
  //     locali() {
  //       return this.$store.state.content.locali;
  //     },
  // },
  // created() {
  //   // this.$store.dispatch("locali");
  // },
  // methods: {
  //   city: function(){
  //     // this.quizStep.stepCity = true;
  //     this.$store.commit("updateLocali", this.filterCity());
  //   },
  //   filterCity: function(){
  //     let locals = this.locali.filter(item => item.acf.citta.name === this.quiz.city)
  //     .map(({ id, slug, title, acf }) => ({
  //         id,
  //         slug,
  //         title,
  //         acf
  //     }))
  //     return locals
  //   },
  //   location: function(){
  //     // this.quizStep.stepLocation = true;
  //     this.$store.commit("updateLocali", this.filterLocation());
  //   },
  //   filterLocation: function(){
  //     let locals = this.locali.filter(item => item.acf.location === this.quiz.location)
  //     .map(({ id, slug, title, acf }) => ({
  //         id,
  //         slug,
  //         title,
  //         acf
  //     }))
  //     return locals
  //   },
  //   tipologia: function(){
  //     // this.quizStep.stepType = true;
  //     this.$store.commit("updateLocali", this.filterType());
  //   },
  //   filterType: function(){
  //     var tipologie = this.quiz.type;
  //     var locali = [];
  //     var i;
  //     for (i = 0; i < this.locali.length; i++) {
  //       if(tipologie.some(r=> this.locali[i].acf.tipo.includes(r))){
  //         locali.push(this.locali[i]);
  //       }
  //     }
  //     let locals = locali.map(({ id, slug, title, acf }) => ({
  //         id,
  //         slug,
  //         title,
  //         acf
  //     }))
  //     return locals
  //   },
  //   occasione: function(){
  //     // this.quizStep.stepOccasione = true;
  //     this.$store.commit("updateLocali", this.filterOccasione());
  //   },
  //   filterOccasione: function(){
  //     var occasione = this.quiz.occasione;
  //     var locali = [];
  //     var i;
  //     for (i = 0; i < this.locali.length; i++) {
  //       if(occasione.some(r=> this.locali[i].acf.occasione_b.includes(r))){
  //         locali.push(this.locali[i]);
  //       }
  //     }
  //     let locals = locali.map(({ id, slug, title, acf }) => ({
  //         id,
  //         slug,
  //         title,
  //         acf
  //     }))
  //     return locals
  //   },
  //   removeCookie: function(){
  //     this.$cookies.remove('quiz');  
  //     this.$cookies.remove('completed');  
  //     this.$cookies.remove('firstTime');  
  //     this.removedCookie = true; 
  //   },
  //   localiUpdate: function(){
  //     this.city();
  //     this.location();
  //     this.tipologia();
  //     this.occasione();
  //     this.showMap = true;
  //   }
  // },
  // beforeUpdate(){
  //   console.log(this.quiz)
  // },
  // mounted(){
  //   if(this.$cookies.get("completed")){
  //     this.hasCookie = true; 
  //   }
  //   if(this.$cookies.get("quiz")){
  //     this.quiz = this.$cookies.get("quiz"); 
  //   }
  //   if(!this.$cookies.get("firstTime")){
  //     this.$cookies.set('firstTime',true,'10d');  
  //   }
       
  // }
}
</script>
