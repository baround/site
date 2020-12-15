<template>  
<div v-show="isActive" class="cassetto">
  <mailchimp-subscribe
    url="https://baround.us2.list-manage.com/subscribe/post-json"
    user-id="3dc114aeeae39c68603e85176"
    list-id="d3cfdbd470"
    @error="onError"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success }">

      <div class="cassetto__cta">
        OPEN 
      </div>
      <div class="cassetto__container">
        
      </div>

 
      <div class="cassetto__row">
        <div class="cassetto__row__col">
          <form class="form" @submit.prevent="subscribe" >
            <div class="form__col">
              <span class="label">Resta aggiornato!</span>
            </div>
            <div class="form__col">
              <div class="form__col__row">
                <input type="email" @input="setEmail($event.target.value)" placeholder="Inserisci la tua email"/>
                <button type="submit">></button>
              </div>
              <div class="form__col__row form__col__row--error" v-if="error">Ops. Qualcosa è andato storto. Riprova!</div>
              <div class="form__col__row form__col__row--success" v-if="success">{{setCookieNewsletter()}}Fantastico! Sei dei nostri!</div>
            </div>
          </form>
        </div>
      </div>
    </template>
    
  </mailchimp-subscribe>


</div>

</template>

<script>
import MailchimpSubscribe from '~/node_modules/vue-mailchimp-subscribe';
export default {  
  components: {
    MailchimpSubscribe,
  },
  data() {
    return {
      closeNews : false,
      isActive : false,
      showNewsletter : true
    }
  },
  methods: {
    onError() {
    },
    onSuccess() {
    }, 
    showBox(){
      setTimeout(
        function(){
          this.isActive = true;
        }, 1000) 
    },
  },
  mounted(){

    setTimeout(function(scope) {
      scope.isActive = true;
    }, 5000, this);
    // console.log(this.isActive);
  },
  created(){
      
  }
}
</script>
<style scoped defer lang="scss">
.cassetto{
  position: fixed; 
  right: 0;
  top: 50%;
  width: 300px;
  height: 300px;
  background: white;
  padding: 25px 30px;
  z-index: 7;
  @media all and (max-width: 768px) {  
    padding: 18px 20px;
  }
  .close{
    width: 40px;
    height: 40px;
    background-color: white;
    background-image: url('../assets/images/icon-close.svg');
    border-radius: 100%;
    background-size: auto 14px;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: -20px;
    box-shadow: 0 -8px 10px 0 rgba(0, 0, 0, 0.1);
    cursor: pointer;
    @media all and (max-width: 768px) {  
      left: -3px;
    }
  }
  &__row{
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px) {  
      flex-flow: column;
    }
    &__col{
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .label{
    font-size: 18px;
    font-weight: bold;
    line-height: 1.17;
    letter-spacing: 1.29px;
    color: #222831;
    margin-right: 20px;
  }
  .form{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 768px) {  
      flex-flow: column;
    }
    &__col{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      &__row{
        display: flex;
        &--error{
          color: #af0c0c;
          font-size: 11px;
          padding-top: 5px;
          position: absolute;
          bottom: 10px;
        }
        &--success{
          color: #058215;
          font-size: 11px;
          padding-top: 5px;
          position: absolute;
          bottom: 10px;
        }
      }
    }
    .label{
      @media all and (max-width: 768px) {  
        margin-right: 0;
        margin-bottom: 8px;
      }
    }
    input{
      width: 300px;
      height: 45px;
      border: solid 1px #222831;
      background-color: #ffffff;
      padding: 5px 20px;
      font-size: 14px;
      font-weight: bold;
      letter-spacing: 1px;
      color: #222831;
      border-radius: 0;
      @media all and (max-width: 768px) {  
        max-width: 100%;
      }
      &:focus{
        outline: none;
      }
    }
    button{
      background-color: #222831;
      height: 45px;
      width: 45px;
      border: solid 1px #222831;
      font-size: 0;
      cursor: pointer;
      background-image: url('../assets/images/icon-arrow-white.svg');
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .social{
    display: flex;
    flex-flow: row;
    align-items: center;
    @media all and (max-width: 768px) {  
      display: none;
    }
    a{
      margin-right: 10px;
      display: flex;
      .icon{
        width: 40px;
        height: 40px;
        background-size: auto 16px;
        background-position: center;
        background-repeat: no-repeat;
        background-color: #222831;
        border-radius: 100%;
        &__fb{
          background-image: url('../assets/images/icon-facebook.svg');
        }
        &__ig{
          background-image: url('../assets/images/icon-instagram.svg'); 
        }
      }
    }
  }
}
@keyframes showBox {
  0% {
    bottom: -300px;
  }

  100%{
    bottom: 0;
  }
}
</style>
