<template>
  <main>
    <div>
      <Header />
      <Quiz />
      <Footer />
    </div>
  </main>
</template>

<script>
const videoSrc = require('../assets/images/video.mp4');
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
      title: 'Baround',
      now: Math.trunc(new Date().getTime() / 1000),
      modifiedDate: Math.trunc(Date.parse("Oct 12, 2020 17:00") / 1000),
      // modifiedDate: Math.trunc(Date.parse("Oct 07, 2020 18:10") / 1000),
      expired: false,
      countdown: false,
      video: videoSrc,
      skip: false,
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'baround',
          name: 'Baround',
          content: 'La guida definitiva ai cocktail bar.'
        },
        //FB
        { hid: 'og:title', name: 'og:title', content: this.title },
        { hid: 'og:description', name: 'og:description', content: 'La guida definitiva ai cocktail bar.' },
        { hid: 'og:url', name: 'og:url', content: 'https://www.baround.it' },
        { hid: 'og:image', name: 'og:image', content: 'https://be.baround.it/wp-content/uploads/2020/10/chi-siamo.jpg' },
        //TWITTER
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      ]
      
    }
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
        font-size: 130px;
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
