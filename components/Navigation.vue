<template>
  <nav>
    <div class="burger" v-on:click="isHidden = !isHidden" v-if="isHidden">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </div>
    <div class="burger burger--close" v-on:click="isHidden = !isHidden" v-else>
    </div>
    <div class="menu" v-bind:class="{ visible: !isHidden }">
      <div class="menu__col">
        <div class="menu__wrap">
          <div class="menu__row">
            <span class="line"></span>
            <span class="logo"></span>
            <span class="line"></span>
          </div>
          <div class="menu__row">
            <ul>
                <li><a href="/chi-siamo">Chi siamo</a></li>
                <li><a href="/locali">Locali</a></li>
                <li><a href="/itinerari">Itinerari</a></li>
                <!-- <li><a href="/brands">Brands</a></li> -->
                <li><a href="/contatti">Contatti</a></li>
            </ul>
          </div>
          <div class="menu__row">
            <span class="line"></span>
            <div class="social">
              <a href=""><span class="icon icon__fb"></span></a>
              <a href=""><span class="icon icon__ig"></span></a>
            </div>
            <span class="line"></span>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>




<script> 
const mapMarker = require('../assets/images/icon-pinner-locali.png');
export default {
  data() {
    return {
      isHidden: true
    }
  }
}
</script>



<style scoped defer lang="scss">
nav{
  .burger{
    width: 28px;
    height: 28px;
    padding: 7px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    cursor: pointer;
    @media all and (max-width: 768px) {  
      width: 14px;
      height: 14px;
      padding: 0px;
    }
    &__line{
      width: 100%;
      height: 1px;
      background-color: white;
    }
    &--close{
      background-image: url('../assets/images/icon-close-menu.svg');
      background-size: 15px auto;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
  .menu{
    display: none;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/images/bg-menu.jpg');
    background-position: center;
    background-size: cover;
    @media all and (max-width: 768px) {  
      padding: 90px 30px;
    }
    &.visible{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: flex-end;
      position: fixed;
      top: 0;
      left: 0;
      animation: mymove 5s;
      z-index: 10;
      -webkit-transform: translateZ(0);
    }
    &__col{
      width: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      @media all and (max-width: 768px) {  
        width: 100%;
      }
    }
    &__wrap{
      width: 100%;
      max-width: 400px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      @media all and (max-width: 768px) {  
        max-width: 100%;
      }
    }
    &__row{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .line{
        width: 100px;
        height: 1px;
        background-color: white;
        @media all and (max-width: 768px) {  
          width: 50px;
        }
      }
      .logo{
        width: 28px;
        height: 36px;
        background-image: url('../assets/images/icon-baround-white.png');
        background-size: 100% auto;
        background-position: center;
      }
      ul{
        width: 100%;
        list-style: none;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        padding: 50px 0;
        @media all and (max-width: 768px) {  
          padding: 30px 0;
        }
        li{
          a{
            text-decoration: none;
            font-size: 34px;
            font-weight: 300;
            line-height: 2.75;
            letter-spacing: 4.5px;
            text-align: center;
            color: #ffffff;
            transition: all .2;
            @media all and (max-width: 768px) {  
              font-size: 24px;
            }
            &:hover{
              font-weight: bold;
            }
          }
        }
      }
      .social{
        display: flex;
        flex-flow: row;
        a{
          margin-right: 10px;
          display: flex;
          .icon{
            width: 35px;
            height: 35px;
            background-size: auto 24px;
            background-position: center;
            background-repeat: no-repeat;
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
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}

@keyframes mymove {
  from {right: -100vw;}
  to {right: 0;}
}
</style>
