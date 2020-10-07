<template>
  <div>
    <form class="quiz" id="quiz" v-if="!quizStep.completed && !quizStep.skip" v-on:submit.prevent>
      <!--header-->
      <div class="quiz__header">
        <div class="quiz__header__logo">
          <img src="../assets/images/logo-baround-white.png" />
        </div>
        <span class="quiz__header__skip" v-on:click="quizStep.skip = true">
          Salta
        </span>
      </div>
      <!--header-->
      <!--step 0-->
      <div class="quiz__step quiz__step--step0" v-if="!quizStep.stepIntro">
        <div class="quiz__step__wrapper">
          <div class="quiz__step__counter">
            <span class="quiz__step__counter__line"></span>
            <span class="quiz__step__counter__value">0/5 steps</span>
            <span class="quiz__step__counter__line"></span>
          </div>
          <div class="quiz__step__content">
            <h2>Trova il bar più adatto a te</h2>
            <button v-on:click.stop.prevent="quizStep.stepIntro = true">Comincia</button>
          </div>
        </div>
        <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg0 + ')' }"></div>
      </div>
      <!--step 0-->
      <!--step 1-->
      <div class="quiz__step quiz__step--step1" v-if="quizStep.stepIntro && !quizStep.stepAge">
        <div class="quiz__step__wrapper">
          <div class="quiz__step__counter">
            <span class="quiz__step__counter__line"></span>
            <span class="quiz__step__counter__value">1/5 steps</span>
            <span class="quiz__step__counter__line"></span>
          </div>
          <div class="quiz__step__content">
            <label>In che anno sei nato?</label>
            <fieldset>
              <input id="birthday" v-model.number="quiz.birthday" inputmode="numeric" maxlength="4" pattern="[0-9]*" placeholder="1999">
            </fieldset>

            <div v-if="quiz.birthday && quiz.birthday < year && quiz.birthday > 1900">
              <button v-on:click.stop.prevent="quizStep.stepAge = true">Conferma</button>
            </div>

            <div v-else-if="quiz.birthday >= year">
              <p>Mi dispiace ma per consultare questo sito devi essere maggiorenne.</p>
            </div>
            <div v-else>
            </div>
          </div>
        </div>
        <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg1 + ')' }"></div>
      </div>
      <!--step 1-->
      <!--step 2-->
      <div class="quiz__step quiz__step--step2" v-if="quizStep.stepAge && !quizStep.stepCity">
        <div class="quiz__step__wrapper">
          <div class="quiz__step__counter">
            <span class="quiz__step__counter__line"></span>
            <span class="quiz__step__counter__value">2/5 steps</span>
            <span class="quiz__step__counter__line"></span>
          </div>
          <div class="quiz__step__content">
            <label>In che città ti trovi?</label>
              <swiper class="city" ref="sceltacitta" :options="swiperCittaOptions">
                <swiper-slide class="city__single">
                    <div class="city__single__card">
                      <figure>
                        <img src="../assets/images/city-milano.jpg" />
                      </figure>
                      <span class="name">
                        Milano
                      </span>
                      <input type="radio" class="city__radio" id="citta" value="Milano" v-model="quiz.city" >
                    </div>
                </swiper-slide>
                <swiper-slide class="city__single">
                    <div class="city__single__card">
                      <figure>
                        <img src="../assets/images/city-milano.jpg" />
                      </figure>
                      <span class="name">
                        Roma
                      </span>
                      <input type="radio" class="city__radio" id="citta" value="Roma" v-model="quiz.city">
                    </div>
                </swiper-slide>
                <swiper-slide class="city__single">
                    <div class="city__single__card">
                      <figure>
                        <img src="../assets/images/city-milano.jpg" />
                      </figure>
                      <span class="name">
                        Firenze
                      </span>
                      <input type="radio" class="city__radio" id="citta" value="Firenze" v-model="quiz.city">
                    </div>
                </swiper-slide>
                <swiper-slide class="city__single">
                    <div class="city__single__card">
                      <figure>
                        <img src="../assets/images/city-milano.jpg" />
                      </figure>
                      <span class="name">
                        Napoli
                      </span>
                      <input type="radio" class="city__radio" id="citta" value="Napoli" v-model="quiz.city">
                    </div>
                </swiper-slide>
            </swiper>
            <div>
              <button v-on:click.stop.prevent="city(quiz.city)">Conferma</button>
            </div>
          </div>
        </div>
        <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg2 + ')' }"></div>
      </div>
      <!--step 2-->
      <!--step 3-->
      <div class="quiz__step quiz__step--step3" v-if="quizStep.stepCity && !quizStep.stepType">
        <div class="quiz__step__wrapper">
          <div class="quiz__step__counter">
            <span class="quiz__step__counter__line"></span>
            <span class="quiz__step__counter__value">3/5 steps</span>
            <span class="quiz__step__counter__line"></span>
          </div>
          <div class="quiz__step__content">
            <label>Che tipo di locale stai cercando?</label>
            <div class="quiz__step__row">
              <!--1-->
              <div class="type__box" v-bind:class="{ hidden: type.type_1 }">
                <span class="type__box__icon type__box__icon--love">
                  <input type="checkbox" id="type_1" value="culturale" v-model="quiz.type" v-on:click="type.type_1 = true; type.type_2 = false; type.type_3 = true; type.type_4 = true;">
                </span>
                <div class="type__box__image">
                  <figure>
                    <img src="../assets/images/pic-vintage.jpg" />
                  </figure>
                  <span class="type__box__name">Culturale</span>
                </div>
                <span class="type__box__icon type__box__icon--decline" v-on:click="type.type_1 = true; type.type_2 = false; type.type_3 = true; type.type_4 = true;"></span>
              </div>
              <!------>
              <!--2-->
              <div class="type__box" v-bind:class="{ hidden: type.type_2 }">
                <span class="type__box__icon type__box__icon--love">
                  <input type="checkbox" id="type_2" value="easy" v-model="quiz.type" v-on:click="type.type_1 = true; type.type_2 = true; type.type_3 = false; type.type_4 = true;">
                </span>
                <div class="type__box__image">
                  <figure>
                    <img src="../assets/images/pic-vintage.jpg" />
                  </figure>
                  <span class="type__box__name">Easy</span>
                </div>
                <span class="type__box__icon type__box__icon--decline" v-on:click="type.type_1 = true; type.type_2 = true; type.type_3 = false; type.type_4 = true;"></span>
              </div>
              <!------>
              <!--3-->
              <div class="type__box" v-bind:class="{ hidden: type.type_3 }">
                <span class="type__box__icon type__box__icon--love">
                  <input type="checkbox" id="type_3" value="pettinato" v-model="quiz.type" v-on:click="type.type_1 = true; type.type_2 = true; type.type_3 = true; type.type_4 = false;">
                </span>
                <div class="type__box__image">
                  <figure>
                    <img src="../assets/images/pic-vintage.jpg" />
                  </figure>
                  <span class="type__box__name">Pettinato</span>
                </div>
                <span class="type__box__icon type__box__icon--decline" v-on:click="type.type_1 = true; type.type_2 = true; type.type_3 = true; type.type_4 = false;"></span>
              </div>
              <!------>
              <!--4-->
              <div class="type__box" v-bind:class="{ hidden: type.type_4 }">
                <span class="type__box__icon type__box__icon--love">
                  <input type="checkbox" id="type_4" value="vintage" v-model="quiz.type" v-on:click="tipologia(quiz.type); type.type_1 = true; type.type_2 = true; type.type_3 = true; type.type_4 = true;">
                </span>
                <div class="type__box__image">
                  <figure>
                    <img src="../assets/images/pic-vintage.jpg" />
                  </figure>
                  <span class="type__box__name">Vintage</span>
                </div>
                <span class="type__box__icon type__box__icon--decline" v-on:click="tipologia(quiz.type); type.type_1 = true; type.type_2 = true; type.type_3 = true; type.type_4 = true;"></span>
              </div>
              <!------>
            </div>
            <div>
            <!-- <button v-on:click.stop.prevent="tipologia(quiz.type)">Conferma</button> -->
            </div>
          </div>
        </div>
        <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg3 + ')' }"></div>
      </div>
      <!--step 3-->
      <!--step 4-->
      <div class="quiz__step quiz__step--step4" v-if="quizStep.stepType && !quizStep.stepOccasione">
        <div class="quiz__step__wrapper">
          <div class="quiz__step__counter">
            <span class="quiz__step__counter__line"></span>
            <span class="quiz__step__counter__value">4/5 steps</span>
            <span class="quiz__step__counter__line"></span>
          </div>
          <div class="quiz__step__content">
            <label>Per quale occasione?</label>
            <div class="box__occasione">
              <!------>
              <div class="box__occasione__row" v-bind:class="{ checked: occ.type_1 }">
                <div class="box__occasione__row__check">
                  <span class="round"></span>
                  <input type="checkbox" id="4chiacchiere" value="4chiacchiere" v-model="quiz.occasione" v-on:click="occ.type_1 = !occ.type_1;"> 
                </div>
                <span class="box__occasione__row__label">4 chiacchiere</span>
              </div>
              <!------>
              <div class="box__occasione__row" v-bind:class="{ checked: occ.type_2 }">
                <div class="box__occasione__row__check">
                  <span class="round"></span>
                  <input type="checkbox" id="aperitivo" value="aperitivo" v-model="quiz.occasione" v-on:click="occ.type_2 = !occ.type_2;"> 
                </div>
                <span class="box__occasione__row__label">aperitivo</span>
              </div>
              <!------>
              <div class="box__occasione__row" v-bind:class="{ checked: occ.type_3 }">
                <div class="box__occasione__row__check">
                  <span class="round"></span>
                  <input type="checkbox" id="appuntamento" value="appuntamento" v-model="quiz.occasione" v-on:click="occ.type_3 = !occ.type_3;"> 
                </div>
                <span class="box__occasione__row__label">appuntamento</span>
              </div>
              <!------>
              <div class="box__occasione__row" v-bind:class="{ checked: occ.type_4 }">
                <div class="box__occasione__row__check">
                  <span class="round"></span>
                  <input type="checkbox" id="meeting" value="meeting" v-model="quiz.occasione" v-on:click="occ.type_4 = !occ.type_4;">
                </div>
                <span class="box__occasione__row__label">meeting</span>
              </div>
            </div>
            <div>
              <button v-on:click.stop.prevent="occasione(quiz.occasione)">Conferma</button>
            </div>
          </div>
        </div>
        <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg4 + ')' }"></div>
      </div>
      <!--step 4-->
      <!--step 5-->
      <div class="quiz__step quiz__step--step5" v-if="quizStep.stepOccasione && !quizStep.stepLocation">
        <div class="quiz__step__wrapper">
          <div class="quiz__step__counter">
            <span class="quiz__step__counter__line"></span>
            <span class="quiz__step__counter__value">5/5 steps</span>
            <span class="quiz__step__counter__line"></span>
          </div>
          <div class="quiz__step__content">
            <label>Preferisci stare all’aperto o al chiuso?</label>
            <div class="box__location">
              <div class="box__location__card" v-bind:class="{ checked: locationC.type_1 }">
                <figure>
                  <img class="logo--small" src="../assets/images/fuori.jpg" />
                </figure>
                <span class="box__location__card__name">
                  Fuori
                </span>
                <input type="radio" id="aperto" value="aperto" v-model="quiz.location" v-on:click="locationC.type_1 = !locationC.type_1; locationC.type_2 = false;">
              </div>
              <div class="box__location__card" v-bind:class="{ checked: locationC.type_2 }">                
                <figure>
                  <img class="logo--small" src="../assets/images/dentro.jpg" />
                </figure>
                <span class="box__location__card__name">
                  Dentro
                </span>
                <input type="radio" id="coperto" value="coperto" v-model="quiz.location" v-on:click="locationC.type_1 = false; locationC.type_2 = !locationC.type_2;">
              </div>
            </div>
            <div>
              <button v-on:click.stop.prevent="location(quiz.location)">Conferma</button>
            </div>
          </div>
        </div>
        <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg5 + ')' }"></div>
      </div>
      <!--step 5-->
      <!--step 6-->
      <div class="quiz__step quiz__step--step6" v-if="quizStep.stepLocation && !quizStep.completed">
        <div class="quiz__step__wrapper">
          <mailchimp-subscribe
            url="https://baround.us2.list-manage.com/subscribe/post-json"
            user-id="3dc114aeeae39c68603e85176"
            list-id="d3cfdbd470"
            @error="onError"
            @success="onSuccess"
          >
            <template v-slot="{ subscribe, setEmail, error, success, loading }">
              <div>
                <div v-if="success" class="quiz__step__full">
                  <div class="quiz__step__content">
                    <img class="logo--small" src="../assets/images/logo-baround-small.png" />
                    <h3>Ben fatto!</h3>
                    <p>Ti abbiamo mandato un’email di conferma</p> 
                    <div>
                      <button v-on:click.stop.prevent="quizStep.completed = true">risultati</button>
                    </div>
                  </div>
                  <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg7 + ')' }"></div>
                </div>
                <div v-else-if="!success && !quizStep.noNewsletter" class="quiz__step__full">
                  <div class="quiz__step__content">
                    <img class="logo--small" src="../assets/images/logo-baround-small.png" />
                    <p>Stiamo cercando i bar che fanno per te, nel frattempo...</p>
                    <h3>Rimani aggiornato!</h3>
                    <p>Scopri le novità, le drink list e tutte le nuove proposte dei tuoi bar preferiti</p>    
                    <form @submit.prevent="subscribe" >
                      <input type="email" @input="setEmail($event.target.value)" placeholder="Inserisci la tua email"/>
                      <button type="submit">Iscriviti</button>
                      <div v-if="error">{{ error }}</div>
                      <div v-if="success">Yay!</div>
                      <div v-if="loading">Loading…</div>
                    </form>
                    <span class="declineNews" v-on:click="quizStep.noNewsletter = true">Non voglio iscrivermi alla newsletter.</span>    
                  </div>  
                  <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg6 + ')' }"></div>
                </div>
                <div v-if="quizStep.noNewsletter" class="quiz__step__full">
                  <div class="quiz__step__content">
                    <img class="logo--small" src="../assets/images/logo-baround-small.png" />
                    <h3>Pronto a goderti lo spettacolo?</h3>
                    <p>Visualizza la lista dei risultati e trova il posto giusto per te!</p>   
                    <div>
                      <button v-on:click.stop.prevent="quizStep.completed = true">risultati</button>
                    </div>
                  </div>   
                  <div class="quiz__step__bg" v-bind:style="{ 'background-image': 'url(' + bg7 + ')' }"></div>
                </div>
              </div>
            </template>
            
          </mailchimp-subscribe>
        </div>
      </div>
      <!--step 6-->

      <!--footer-->
      <!-- <div class="quiz__footer">
        <div class="social">
          <a href="https://www.facebook.com/baroundit" target="_blank"><span class="icon icon__fb"></span></a>
          <a href="https://www.instagram.com/baround_/" target="_blank"><span class="icon icon__ig"></span></a>
        </div>
        <div class="credits">
          <p><a href="/credits">Credits</a> | <a href="Privacy">Privacy</a> | &copy;Baround</p>
        </div>
      </div> -->
      <!--end footer-->
    </form>
    <div class="mappa" v-else>
      <Mappa />
    </div>
  </div>
</template>

<script> 
const loader = require('../assets/images/loader.gif');
const bg0 = require('../assets/images/bg_quiz_0.jpg');
const bg1 = require('../assets/images/bg_quiz_1.jpg');
const bg2 = require('../assets/images/bg_quiz_2.jpg');
const bg3 = require('../assets/images/bg_quiz_3.jpg');
const bg4 = require('../assets/images/bg_quiz_4.jpg');
const bg5 = require('../assets/images/bg_quiz_5.jpg');
const bg6 = require('../assets/images/bg_quiz_6.jpg');
const bg7 = require('../assets/images/bg_quiz_7.jpg');
import MailchimpSubscribe from '~/node_modules/vue-mailchimp-subscribe';
export default {  
  components: {
    MailchimpSubscribe,
  },
  data() {
    return {
      bg0: bg0,
      bg1: bg1,
      bg2: bg2,
      bg3: bg3,
      bg4: bg4,
      bg5: bg5,
      bg6: bg6,
      bg7: bg7,
      sliderActive: '',
      swiperCittaOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: false,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination-citta',
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
        },
          on: {
            init: (i) => {
              if(i.activeIndex === 0){
                this.quiz.city = 'Milano'
              }
            },
            slideChange: (i) => {
              if(i.activeIndex === 0){
                this.quiz.city = 'Milano'
              }
              if(i.activeIndex === 1){
                this.quiz.city = 'Roma'
              }
              if(i.activeIndex === 2){
                this.quiz.city = 'Firenze'
              }
              if(i.activeIndex === 3){
                this.quiz.city = 'Napoli'
              }
            }
          }
      },
      quiz: {
        birthday: null,
        city: null,
        type: [],
        occasione: [],
        location: null
      },
      type: {
        type_1: false,
        type_2: true,
        type_3: true,
        type_4: true
      },
      occ: {
        type_1: false,
        type_2: false,
        type_3: false,
        type_4: false
      },
      locationC: {
        type_1: false,
        type_2: false,
      },
      quizStep: {
        stepIntro: false,
        stepAge: false,
        stepCity: false,
        stepType: false,
        stepOccasione: false,
        stepLocation: false,
        noNewsletter: false,
        skip: false,
        completed: false
      },
      filtered:null,
    }
  },
  computed: {
      locali() {
        return this.$store.state.content.locali;
      },
      year(){
        return new Date().getFullYear() - 18;
      },
      swiper() {
        this.$refs.sceltacitta.$swiper;
      }
  },
  created() {
    this.$store.dispatch("locali");
  },
  methods: {
    onError() {
    },
    onSuccess() {
    }, 
    city: function(){
      this.quizStep.stepCity = true;
      this.$store.commit("updateLocali", this.filterCity());
    },
    filterCity: function(){
      let locals = this.locali.filter(item => item.acf.citta.name === this.quiz.city)
      .map(({ id, slug, title, acf }) => ({
          id,
          slug,
          title,
          acf
      }))
      return locals
    },
    location: function(){
      this.quizStep.stepLocation = true;
      this.$store.commit("updateLocali", this.filterLocation());
    },
    filterLocation: function(){
      let locals = this.locali.filter(item => item.acf.location === this.quiz.location)
      .map(({ id, slug, title, acf }) => ({
          id,
          slug,
          title,
          acf
      }))
      return locals
    },
    tipologia: function(){
      this.quizStep.stepType = true;
      this.$store.commit("updateLocali", this.filterType());
    },
    filterType: function(){
      var tipologie = this.quiz.type;
      var locali = [];
      var i;
      for (i = 0; i < this.locali.length; i++) {
        if(tipologie.some(r=> this.locali[i].acf.tipo.includes(r))){
          locali.push(this.locali[i]);
        }
      }
      let locals = locali.map(({ id, slug, title, acf }) => ({
          id,
          slug,
          title,
          acf
      }))
      return locals
    },
    occasione: function(){
      this.quizStep.stepOccasione = true;
      this.$store.commit("updateLocali", this.filterOccasione());
    },
    filterOccasione: function(){
      var occasione = this.quiz.occasione;
      var locali = [];
      var i;
      for (i = 0; i < this.locali.length; i++) {
        if(occasione.some(r=> this.locali[i].acf.occasione_b.includes(r))){
          locali.push(this.locali[i]);
        }
      }
      let locals = locali.map(({ id, slug, title, acf }) => ({
          id,
          slug,
          title,
          acf
      }))
      return locals
    }
  },
  beforeUpdate(){
  },
  mounted(){
  }
}
</script>

<style scoped defer lang="scss">
.quiz{
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  &__header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 5;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 16px 30px;
    &__logo{
      width: 100%;
      max-width: 140px;
      img{
        width: 100%;
      }
    }
    &__skip{
      font-size: 13px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.3px;
      color: #ffffff;
      cursor: pointer;
    }
  }
  &__step{
    padding-top: 55px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 4;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    h2{
      font-size: 60px;
      font-weight: 300;
      line-height: 0.84;
      letter-spacing: 4.14px;
      text-align: center;
      color: rgba(255, 255, 255, 0.87);
      margin-bottom: 40px;
      @media all and (max-width: 768px) {  
        font-size: 32px;
        font-weight: 200;
        line-height: 1.09;
        letter-spacing: 2.21px;
        text-align: center;
        color: rgba(255, 255, 255, 0.87);
      }
    }
    h3{
      font-size: 52px;
      font-weight: normal;
      line-height: 0.73;
      letter-spacing: 1.63px;
      text-align: center;
      color: #ffffff;
      margin: 15px;
      @media all and (max-width: 768px) {  
        font-size: 28px;
        line-height: 1.36;
        letter-spacing: 0.88px;
        text-align: center;
        color: #ffffff;
        margin: 0 0;
      }
    }
    p{
      font-size: 18px;
      font-weight: 300;
      line-height: 1.17;
      letter-spacing: 1.29px;
      text-align: center;
      color: #ffffff;
      margin: 15px;
      @media all and (max-width: 768px) {  
        font-size: 14px;
        font-weight: 300;
        line-height: 1.64;
        letter-spacing: 1px;
        text-align: center;
        color: #ffffff;
        margin: 7px 0;
      }
    }
    label{
      font-size: 36px;
      font-weight: bold;
      line-height: 1.46;
      letter-spacing: 2px;
      text-align: center;
      color: rgba(255, 255, 255, 0.87);
      @media all and (max-width: 768px) {  
        font-size: 18px;
        font-weight: bold;
        line-height: 1.3;
        letter-spacing: 1px;
        text-align: center;
        color: rgba(255, 255, 255, 0.87);
      }
    }
    #birthday{
      -webkit-appearance: none;
      background: transparent;
      text-align: center;
      border: 0;
      font-family: 'Playfair Display', serif;
      font-size: 129.6px;
      font-weight: bold;
      letter-spacing: 1.3px;
      color: white;
      margin-bottom: 50px;
      @media all and (max-width: 768px) {  
        font-size: 72px;
        margin-bottom: 90px;
        letter-spacing: 12px;
      }
      &:focus{
        outline: none;
      }
    }
    #birthday::-webkit-input-placeholder { /* Edge */
      -webkit-text-stroke: 1.8px #ffffff;
      font-family: 'Playfair Display', serif;
      font-size: 129.6px;
      font-weight: bold;
      letter-spacing: 1.3px;
      color: rgba(255, 255, 255, 0);
      @media all and (max-width: 768px) {  
        font-size: 72px;
        letter-spacing: 12px;
      }
    }
    #birthday:-ms-input-placeholder { /* Internet Explorer 10-11 */
      -webkit-text-stroke: 1.8px #ffffff;
      font-family: 'Playfair Display', serif;
      font-size: 129.6px;
      font-weight: bold;
      letter-spacing: 1.3px;
      color: rgba(255, 255, 255, 0);
      @media all and (max-width: 768px) {  
        font-size: 72px;
        letter-spacing: 12px;
      }
    }
    #birthday::placeholder {
      -webkit-text-stroke: 1.8px #ffffff;
      font-family: 'Playfair Display', serif;
      font-size: 129.6px;
      font-weight: bold;
      letter-spacing: 1.3px;
      color: rgba(255, 255, 255, 0);
      @media all and (max-width: 768px) {  
        font-size: 72px;
        letter-spacing: 12px;
      }
    }
    button{
      min-width: 246px;
      padding: 15px 30px;
      min-height: 45px;
      border: solid 1px #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 8px;
      color: #ffffff;
      text-transform: uppercase;
      background: transparent;
      cursor: pointer;
      transition: all .2s;
      @media all and (max-width: 768px) {  
        width: 238px;
        height: 45px;
      }
      &:hover{
        background-color: white;
        color: black;
      }
    }
    &__wrapper{
      position: relative;
      z-index: 6;
      width: 100%;
      max-width: 100vw;
    }
    &__content{
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 100vw;
      @media all and (max-width: 768px) {  
        padding: 0 25px;
      }
      .logo--small{
        width: 40px;
        height: auto;
        margin-bottom: 30px;
      }
      .box{
        &__location{
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 50px 0;
          &__card{
            position: relative;
            padding: 15px;
            background-color: white;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            margin: 20px;
            transition: all .2s;
            @media all and (max-width: 768px) {  
              padding: 6px;
              margin: 20px 6px;
            }
            &.checked{
              transform: scale(1.2);
            }
            input{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
            }
            figure{
              width: 252px;
              height: 273px;
              object-fit: cover;
              margin-bottom: 17px;
              @media all and (max-width: 768px) {  
                width: 119px;
                height: 128px;
                margin-bottom: 0px;
              }
              img{
                width: 100%;
              }
            }
            &__name{
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: 'Playfair Display', serif;
              font-size: 34.1px;
              font-weight: bold;
              font-stretch: normal;
              font-style: italic;
              line-height: normal;
              letter-spacing: 4.26px;
              text-align: center;
              color: #222831;
              margin-bottom: 7px;

              @media all and (max-width: 768px) {  
                font-size: 16px;
                letter-spacing: 2px;
                text-align: center;
                color: #222831;
                margin-bottom: 0px;
              }
            }
          }
        }
        &__occasione{
          width: 400px;
          max-width: 90%;
          display: flex;
          flex-flow: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin-bottom: 70px;
          @media all and (max-width: 768px) {  
            margin: 70px 0;
          }
          &__row{
            display: flex;
            flex-flow: row;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 20px 0;
            @media all and (max-width: 768px) {  
              margin: 12px 0;
            }
            &__check{
              width: 40px;
              height: 40px;
              position: relative;
              flex-grow: 1;
              flex-shrink: 0;
              display: flex;
              @media all and (max-width: 768px) {  
                width: 25px;  
                height: 25px;
              }
              .round{
                border-radius: 100%;
                width: 40px;  
                height: 40px;
                border: solid 1.6px #ffffff;
                cursor: pointer;
                @media all and (max-width: 768px) {  
                  width: 25px;  
                  height: 25px;
                }
              }
              input{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
              }
            }
            &__label{
              font-size: 25.9px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.62;
              letter-spacing: 5.76px;
              color: #ffffff;
              text-transform: uppercase;
              margin-left: 25px;
              @media all and (max-width: 768px) {  
                font-size: 16px;
                letter-spacing: 3.56px;
                margin-left: 20px;
              }
            }
            &.checked{
                .round{
                  position: relative;
                  &:before{
                    content: '';
                    width: 33px;
                    height: 28px;
                    position: absolute;
                    top: 0;
                    right: -5px;
                    background-image: url('../assets/images/icon-check.svg');
                    background-size: 100% auto;
                    background-position: center;
                    background-repeat: no-repeat;
                    @media all and (max-width: 768px) {  
                      width: 20px;  
                      height: 17px;
                    }
                  }
                }
                .box__occasione__row__label{
                  font-weight: bold;
                }
              }
          }
        }
      }
      .type{
        &__box{
          display: flex;
          flex-flow: row;
          justify-content: center;
          align-items: center;
          &.hidden{
            display: none;
          }
          &__image{
            padding: 50px 70px;
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            width: 426px;
            @media all and (max-width: 768px) {  
                padding: 15px;
                width: 204px;
            }
            figure{
              min-width: 100%;
              width: 286px;
              height: 359px; 
              object-fit: cover;
              overflow: hidden;
              padding: 0;
              @media all and (max-width: 768px) {  
                  width: 174px;
                  height: 221px;
                  min-width: 174px;
              }
              img{
                width: 100%;
                height: auto;
              }
            }
          }
          &__name{
            text-align: center;
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            font-weight: bold;
            font-stretch: normal;
            font-style: italic;
            line-height: normal;
            letter-spacing: 7px;
            color: #ffffff;
            width: 100%;
            text-align: center;
            @media all and (max-width: 768px) {  
              font-size: 27px;
              font-weight: bold;
              letter-spacing: 1.25px;
              text-align: center;
              color: #ffffff;
            }
          }
          &__icon{
            width: 72px;
            height: 72px;
            transition: all .2s;
            cursor: pointer;
            @media all and (max-width: 768px) {  
              width: 48px;
              height: 48px;
            }
            &--love{
              background-image: url('../assets/images/icon-love.svg');
              background-size: 100%;
              background-position: center;
              background-repeat: no-repeat;
              position: relative;
              input{
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0;
                width: 100%;
                height: 100%;
                -webkit-appearance: none;
              }    
              &:hover{
                background-image: url('../assets/images/icon-love-sel.svg');
                transform: rotate(360deg) scale(1.2);
              }
            }
            &--decline{
              background-image: url('../assets/images/icon-decline.svg');
              background-size: 100%;
              background-position: center;
              background-repeat: no-repeat;
              &:hover{
                background-image: url('../assets/images/icon-decline-sel.svg');
                transform: rotate(360deg) scale(1.2);
              }
            }
          }
        }
      }
      .city{
        width: 100%;
        margin: 50px 0; 
        @media all and (max-width: 768px) {  
          margin: 0 0 10px 0; 
        }
        .swiper-wrapper{
          @media all and (max-width: 768px) {  
              padding: 0 30px;
          }
        }
        &__radio{
          position: absolute;
          opacity: 0;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-appearance: none;
        }
        &__single{
          // max-width: 322px;
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          position: relative;
          transform: scale(0.9);
          opacity: 0.8;
          transition: all .2s;
          &.swiper-slide-active{
            transform: scale(1);
            opacity: 1;
          }
          figure{
            width: 286px;
            height: 359px;
            overflow: hidden;
            @media all and (max-width: 768px) {  
              width: 238px;
              height: 299px;
            }
            img{
              width: 100%;
            }
          } 
          .name{
            position: absolute;
            bottom: 0;
            left: 30px;
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            font-weight: bold;
            font-stretch: normal;
            font-style: italic;
            line-height: normal;
            letter-spacing: 7px;
            color: #ffffff;
          }
        }
      }
    }
    &__counter{
      font-size: 14px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 14px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 23px;
      @media all and (max-width: 768px) {  
        font-size: 12px;
        font-weight: 200;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 12px;
        color: #ffffff;
      }
      &__line{
        width: 50px;
        height: 1.5px;
        background-color: #ffffff;
      }
      &__value{
        text-transform: uppercase;
        padding-left: 18px;
        @media all and (max-width: 768px) {  
          padding-left: 13px;
        }
      }
    }
    &__bg{
      position: absolute;
      top: -10vh;
      left: -10vw;
      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
      filter: blur(2px);
      width: 120vw;
      height: 120vh;
      background-size: cover;
      background-position: center;
      z-index: 5;
    }
    &__full{
      min-height: calc(100vh - 56px);
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      .quiz__step__content{
        position: relative;
        z-index: 20;
        color: white;
      }
      span.declineNews{
          margin-top: 10px;
          text-decoration: underline;
          cursor: pointer;
      }
      form{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        margin: 30px;
        input{
          width: 369px;
          height: 45px;
          border: solid 1px #222831;
          background-color: #ffffff;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 2px;
          color: #222831;
          margin-bottom: 30px;
          padding: 13px 23px;
          @media all and (max-width: 768px) {  
            width: 246px;
            height: 45px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}

</style>
