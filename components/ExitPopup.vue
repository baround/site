<template>
  <div class="popup">
    {{exitPopup()}}
    <div class="popup__box">
      <span class="close">X</span>
      <span class="icon">
        <img src="../assets/images/icon-baround-popup.png" />
      </span>
      <h3>Ehi!<br/>Te ne stai andando?<br/>Aspetta</h3>
      <p>Prima di scappare seguici su <strong>instagram</strong><br/>per non perderti nessuna novità.</p>
      <a class="button button--ig" href="https://www.instagram.com/baround_/">SEGUICI SUBITO!</a>
    </div>
  </div>
</template>
<script>
export default {  
created() {
    // this.$store.dispatch("locali");
  },
  methods: {
    exitPopup(event){
      if (typeof window !== 'undefined') {

        if (!this.$cookies.get("exitIntentShown")) {
            setTimeout(() => {
                document.addEventListener('mouseout', mouseEvent);
                document.addEventListener('keydown', exit);
            }, 10000);
        }

        const mouseEvent = e => {
            const shouldShowExitIntent = 
                !e.toElement && 
                !e.relatedTarget &&
                e.clientY < 10;

            if (shouldShowExitIntent) {
                document.removeEventListener('mouseout', mouseEvent);
                document.querySelector('.popup').classList.add('visible');
                
                // Set the cookie when the popup is shown to the user
                this.$cookies.set('exitIntentShown',true,"120s");
            }
        };
        const exit = e => {
            if (e.target.className === 'close') {
                document.querySelector('.popup').classList.remove('visible');
            }
        };

        document.querySelector('.popup').addEventListener('click', exit);

      }

    },
  },  
  mounted(){
    console.log(this.post)
  }
  
}
</script>

<style scoped defer lang="scss">
  .popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transform: translateY(60%) scale(0);
    transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    &.visible{
      transform: translateY(0) scale(1);
      
    }
    &__box{
      width: 500px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding: 70px 25px;
      background-color: white;
      .icon{
        width: 30px;
        margin-bottom: 20px;
        img{
          width: 100%;
        }
      }
      h3{
        font-size: 24px;
        line-height: 1.29;
        letter-spacing: 1.66px;
        text-align: center;
        color: #222831;
      }
      p{
        font-size: 18px;
        line-height: 1.29;
        text-align: center;
        color: black;
        margin-top: 20px;
        font-weight: 300;
      }
      .button{
        min-width: 238px;
        height: 45px;
        background-color: #222831;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 5px;
        color: #ffffff;
        text-transform: uppercase;
        background-image: url(/_nuxt/assets/images/icon-instagram.svg);
        background-size: 22px auto;
        background-position: 15px center;
        background-repeat: no-repeat;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px 0 49px;
        margin-top: 30px;
        text-decoration: none;
      }
    }
  }
</style>