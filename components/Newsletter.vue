<template>  
  <mailchimp-subscribe
    url="https://baround.us2.list-manage.com/subscribe/post-json"
    user-id="3dc114aeeae39c68603e85176"
    list-id="d3cfdbd470"
    @error="onError"
    @success="onSuccess"
  >
    <template v-slot="{ subscribe, setEmail, error, success, loading }">
      <div class="newsletter">
        <form @submit.prevent="subscribe" >
          <div class="newsletter__col">
            <span class="label">Rimani sempre aggiornato!</span>
          </div>
          <input type="email" @input="setEmail($event.target.value)" placeholder="Inserisci la tua email"/>
          <button type="submit">Iscriviti</button>
          <div v-if="error">{{ error }}</div>
          <div v-if="success">Yay!</div>
          <div v-if="loading">Loading…</div>
        </form>
      </div>
    </template>
    
  </mailchimp-subscribe>
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
    }
  },
  computed: {
  },
  methods: {
    onError() {
    },

    onSuccess() {
    }, 
  },
  beforeUpdate(){
  },
  mounted(){
    // if(!this.$cookies.get("firstTime")){
    //   this.$cookies.set('firstTime',true,'10d');  
    // }    
  }
}
</script>
<style scoped defer lang="scss">

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
