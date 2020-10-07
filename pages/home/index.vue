<template>
  <main>
    <div v-if="!skip">
      <div class="countdown" v-if="!expired">
        <div class="countdown__full">
          <div class="countdown__full__video">
              <video controls autoplay :src="video"></video>
          </div>
          <div class="countdown__full__content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1216 145" width="1216" height="145">
                  <defs>
                    <style>
                      .f9e4a43a-fff3-4d22-8b94-dc17937f40ff {
                        fill: #eee;
                      }
                    </style>
                  </defs>
                  <g id="ab131332-d40e-4163-8b4b-7ccb78228289" data-name="Livello 2">
                    <g id="fac3bc76-8abc-42b0-87be-47258bd2c0ec" data-name="LOGO#EEEEEE">
                      <g>
                        <rect class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-1" x="745.98" y="135" width="75" height="10"></rect>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-2" d="M0,2.85H57.55C73.28,2.85,86,7.43,93.79,15.2a30,30,0,0,1,9,21.9v.4c0,18.92-12.35,28.47-23.7,33.05,16.73,4.39,31.46,13.94,31.46,33.26v.4c0,23.29-19.91,38-50,38H0ZM92.19,38.1c0-15.34-12.54-25.69-34.84-25.69h-47V67.17h46C77.26,67.17,92.19,57,92.19,38.5ZM57.55,76.73H10.35v56H60.93c23.9,0,39-11,39-28.47v-.4C100,86.68,85,76.73,57.55,76.73Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-3" d="M223,1.86h10l64.91,140.38H286.53l-17.72-39H186.57l-17.72,39H158.1Zm41.42,92L227.79,13.21,191,93.85Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-4" d="M356.61,2.85h58.55c17.12,0,30.86,5.38,39.22,13.74a36.76,36.76,0,0,1,10.56,25.89v.4c0,23.29-17.33,36.64-40.82,39.82l46,59.54H457l-44.4-57.75H367v57.75H356.61ZM414,75.13c23.3,0,40.62-11.74,40.62-31.86v-.39c0-18.72-14.73-30.47-40-30.47H367V75.13Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-5" d="M523.67,72.94v-.39c0-38,28.08-72.09,70.29-72.09s69.89,33.65,69.89,71.69v.4c0,38-28.07,72.08-70.29,72.08S523.67,111,523.67,72.94Zm129.43,0v-.39C653.1,38.1,628,9.82,593.56,9.82S534.42,37.7,534.42,72.15v.4c0,34.44,25.09,62.72,59.54,62.72S653.1,107.39,653.1,72.94Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-6" d="M909,2.85h9.76l96.17,121.27V2.85h10V142.24h-7.77L918.91,18.38V142.24H909Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-7" d="M1095.53,2.85h46.4c43.8,0,74.07,30.07,74.07,69.3v.4c0,39.22-30.27,69.69-74.07,69.69h-46.4Zm10.35,9.56V132.68h36c38.82,0,63.32-26.48,63.32-59.74v-.39c0-33.06-24.5-60.14-63.32-60.14Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-8" d="M830,0H726.16s.17,33.77,0,34.89,4.31-2.37,9.44-4.25c10.81-3.95,29.06-7.82,46,1.76,17.47,9.88,36.73,10.78,48.42,7.09,5.67-1.79,9.55-4.65,10.59-8.1L840.79,0Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-9" d="M830.11,0V55.61c0,33.65-18.12,50.78-46.4,50.78-29.47,0-47.19-18.92-47.19-51.77V0H726.16V55.61c0,39,23.7,60.14,57.15,60.14,33.85,0,57.15-21.31,57.15-61.33L840.79,0Z"></path>
                      </g>
                    </g>
                  </g>
              </svg> 
              <h1>Ci siamo quasi... mancano solo</h1>
              <div class="countdown__content__counter">
                <div class="countdown__content__counter__single">
                  <span class="number">{{ days | two_digits }}</span>
                </div>
                <div class="countdown__content__counter__separator">
                  <span class="number">:</span>
                </div>
                <div class="countdown__content__counter__single">
                  <span class="number">{{ hours | two_digits }}</span>
                </div>
                <div class="countdown__content__counter__separator">
                  <span class="number">:</span>
                </div>
                <div class="countdown__content__counter__single">
                  <span class="number">{{ minutes | two_digits }}</span>
                </div>
                <div class="countdown__content__counter__separator">
                  <span class="number">:</span>
                </div>
                <div class="countdown__content__counter__single">
                  <span class="number">{{ seconds | two_digits }}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="countdown" v-else>
        <div class="countdown__full">
          <div class="countdown__full__video">
              <video controls autoplay :src="video" @ended="onEnd()"></video>
          </div>
          <div class="countdown__full__content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1216 145" width="1216" height="145">
                  <defs>
                    <style>
                      .f9e4a43a-fff3-4d22-8b94-dc17937f40ff {
                        fill: #eee;
                      }
                    </style>
                  </defs>
                  <g id="ab131332-d40e-4163-8b4b-7ccb78228289" data-name="Livello 2">
                    <g id="fac3bc76-8abc-42b0-87be-47258bd2c0ec" data-name="LOGO#EEEEEE">
                      <g>
                        <rect class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-1" x="745.98" y="135" width="75" height="10"></rect>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-2" d="M0,2.85H57.55C73.28,2.85,86,7.43,93.79,15.2a30,30,0,0,1,9,21.9v.4c0,18.92-12.35,28.47-23.7,33.05,16.73,4.39,31.46,13.94,31.46,33.26v.4c0,23.29-19.91,38-50,38H0ZM92.19,38.1c0-15.34-12.54-25.69-34.84-25.69h-47V67.17h46C77.26,67.17,92.19,57,92.19,38.5ZM57.55,76.73H10.35v56H60.93c23.9,0,39-11,39-28.47v-.4C100,86.68,85,76.73,57.55,76.73Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-3" d="M223,1.86h10l64.91,140.38H286.53l-17.72-39H186.57l-17.72,39H158.1Zm41.42,92L227.79,13.21,191,93.85Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-4" d="M356.61,2.85h58.55c17.12,0,30.86,5.38,39.22,13.74a36.76,36.76,0,0,1,10.56,25.89v.4c0,23.29-17.33,36.64-40.82,39.82l46,59.54H457l-44.4-57.75H367v57.75H356.61ZM414,75.13c23.3,0,40.62-11.74,40.62-31.86v-.39c0-18.72-14.73-30.47-40-30.47H367V75.13Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-5" d="M523.67,72.94v-.39c0-38,28.08-72.09,70.29-72.09s69.89,33.65,69.89,71.69v.4c0,38-28.07,72.08-70.29,72.08S523.67,111,523.67,72.94Zm129.43,0v-.39C653.1,38.1,628,9.82,593.56,9.82S534.42,37.7,534.42,72.15v.4c0,34.44,25.09,62.72,59.54,62.72S653.1,107.39,653.1,72.94Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-6" d="M909,2.85h9.76l96.17,121.27V2.85h10V142.24h-7.77L918.91,18.38V142.24H909Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-7" d="M1095.53,2.85h46.4c43.8,0,74.07,30.07,74.07,69.3v.4c0,39.22-30.27,69.69-74.07,69.69h-46.4Zm10.35,9.56V132.68h36c38.82,0,63.32-26.48,63.32-59.74v-.39c0-33.06-24.5-60.14-63.32-60.14Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-8" d="M830,0H726.16s.17,33.77,0,34.89,4.31-2.37,9.44-4.25c10.81-3.95,29.06-7.82,46,1.76,17.47,9.88,36.73,10.78,48.42,7.09,5.67-1.79,9.55-4.65,10.59-8.1L840.79,0Z"></path>
                        <path class="f9e4a43a-fff3-4d22-8b94-dc17937f40ff svg-elem-9" d="M830.11,0V55.61c0,33.65-18.12,50.78-46.4,50.78-29.47,0-47.19-18.92-47.19-51.77V0H726.16V55.61c0,39,23.7,60.14,57.15,60.14,33.85,0,57.15-21.31,57.15-61.33L840.79,0Z"></path>
                      </g>
                    </g>
                  </g>
              </svg> 
              <h1>Ci siamo!</h1>
              <p>Il viaggio di Baround inizia da Milano: percorsi impensabili e miscelazione che corre a tremila, nella culla dell'aperitivo italiano.</p>
              <p>Esiste una Madonnina tarocca, Maradona in un bar, ci sono fenicotteri da guardare e un bartender che ha servito James Bond.</p>
              <p>Baround muove qui i primi passi, e vi racconterà ognuno di questi segreti.</p>
              <span class="salta button" v-on:click="skip = true">Vai subito al sito</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Header />
      <Quiz />
      <Footer />
    </div>
  </main>
</template>

<script>
const videoSrc = require('../../assets/images/video.mp4');
export default {
  created() {
    this.$store.dispatch("itinerari");
    this.$store.dispatch("locali");
  },
  filters: {
    two_digits(value) {
      return value.toString().length <= 1 ? "0" + value : value;
    }
  },
  methods: {
    onEnd: function () {
      this.skip = true
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      modifiedDate: Math.trunc(Date.parse("Oct 08, 2020 17:00") / 1000),
      // modifiedDate: Math.trunc(Date.parse("Oct 07, 2020 18:10") / 1000),
      expired: false,
      countdown: false,
      video: videoSrc,
      skip: false,
    };
  },
  mounted: function() {
    setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
      this.expired = this.modifiedDate <= this.now;
    }, 1000);
    setTimeout(() => {
      if(this.expired === true){
        this.countdown = 'hide';
      }
    }, 1000);
  },
  computed: {
    locali() {
      return this.$store.state.content.locali;
    },
    today(){
        return
    },
    seconds() {
      return (this.modifiedDate - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.modifiedDate - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.modifiedDate - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.modifiedDate - this.now) / 60 / 60 / 24);
    }
  }
};
</script>

<style scoped defer lang="scss">

.countdown{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222831;
  color: white;
  @media all and (max-width: 768px) {  
    height: auto;
  }
  button,.button{
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
      font-size: 12px;
      letter-spacing: 2px;
    }
    &:hover,&:active{
      background-color: white;
      color: black;
    }
  }
  &__full{
    flex-flow: row;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    @media all and (max-width: 768px) {  
      height: auto;
      flex-flow: column;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    &__video{
      width: auto;
      position: relative;
      min-width: 40%;
      @media all and (max-width: 768px) {  
        height: 50vh;
        width: 100vw;    
        flex-grow: 1;
        flex-shrink: 0;
      }
        video{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          @media all and (max-width: 768px) {  
            position: relative;
          }
        }
    }
    &__content{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      @media all and (max-width: 768px) {  
        width: 100vw;
        padding: 20px;
        flex-grow: 1;
        flex-shrink: 0;
        min-height: 50vh;
      }
      svg{
        max-width: 50%;
        @media all and (max-width: 768px) {  
          width: 70%;
          height: 70px;
        }
      }
      h1{
        font-size: 40px;
        font-weight: 300;
        line-height: 0.84;
        letter-spacing: 4.14px;
        text-align: center;
        color: rgba(255, 255, 255, 0.87);
        margin-bottom: 40px;
        @media all and (max-width: 768px) {  
          font-size: 22px;
          font-weight: 200;
          line-height: 1.09;
          letter-spacing: 2.21px;
          text-align: center;
          color: rgba(255, 255, 255, 0.87);
          margin-bottom: 20px;
        }

      }
      p{
        max-width: 50%;
          @media all and (max-width: 768px) {  
            display: none;
          }
      }
      .button{
        margin-top: 50px;
      }
    }
  }

  h2{
    font-size: 40px;
    font-weight: 300;
    line-height: 0.84;
    letter-spacing: 4.14px;
    text-align: center;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 40px;
    @media all and (max-width: 768px) {  
      font-size: 22px;
      font-weight: 200;
      line-height: 1.09;
      letter-spacing: 2.21px;
      text-align: center;
      color: rgba(255, 255, 255, 0.87);
      margin-bottom: 20px;
    }
  }
  h3{
    font-size: 32px;
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
  &__content{
    max-width: 80%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    &--full{
      width: 100vw;
      max-width: 100vw;
    }
    &__logo{
      max-width: 50%;
      margin-bottom: 30px;
      svg{
        max-width: 100%;
        @media all and (max-width: 768px) {  
          max-height: 80px;
        }
      }
      @media all and (max-width: 768px) {  
        max-width: 100%;
        margin-bottom: 0;
      }
    }
    &__counter{
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      &__single{
        font-size: 150px;
        display: flex;
        margin: 0 15px;
        @media all and (max-width: 768px) {  
          font-size: 50px;
          margin: 0 5px;
        }
      }
      &__separator{
        font-size: 50px;
        display: flex;
        @media all and (max-width: 768px) {  
          font-size: 20px;
        }
      }
    }
    &__video{
      width: 100%;
      height: auto;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      video{
        width: 100%;
        height: auto;
      }
    }
  }
}
footer{
  position: fixed;
  bottom: 0;
}

/*svg */
@-webkit-keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-1 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-1 {
  -webkit-animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
  animation: animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
}
@-webkit-keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-2 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-2 {
  -webkit-animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.85s both;
  animation: animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.85s both;
}
@-webkit-keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-3 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-3 {
  -webkit-animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
  animation: animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
}
@-webkit-keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-4 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-4 {
  -webkit-animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.95s both;
  animation: animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.95s both;
}
@-webkit-keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-5 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-5 {
  -webkit-animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
  animation: animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
}
@-webkit-keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-6 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-6 {
  -webkit-animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.05s both;
  animation: animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.05s both;
}
@-webkit-keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-7 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-7 {
  -webkit-animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
  animation: animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
}
@-webkit-keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-8 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-8 {
  -webkit-animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.15s both;
  animation: animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.15s both;
}
@-webkit-keyframes animate-svg-fill-9 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
@keyframes animate-svg-fill-9 {
  0% {
    fill: transparent;
  }
  100% {
    fill: #eeeeee;
  }
}
.svg-elem-9 {
  -webkit-animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both;
  animation: animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both;
}
</style>
