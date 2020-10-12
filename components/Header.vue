<template>
  <header>
      <div class="logo">
        <a href="/"><img src="../assets/images/logo-baround-white.png" /></a>
      </div>
      <Navigation />
  </header>
</template>

<style scoped defer lang="scss">
header{
  width: 100%;
  position: fixed;
  background: #222831;
  height: 74px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  z-index: 30;
  // overflow-x: hidden;
  // animation: scroll .5s;
  // animation-delay: .3s;
  @media all and (max-width: 768px) {  
    height: 54px;
    padding: 10px 20px;
  }
  .logo{
    width: 157px;
    position: relative;
    z-index: 10;
    @media all and (max-width: 768px) {  
      width: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img{
      width: 100%;
    }
  }
}
@keyframes scroll {
  0% {
    top: -200px;
  }
  100% {
    top: 0px;
  }
}
</style>
