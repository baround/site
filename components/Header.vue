<template>
  <header>
      <div class="logo">
        <a href="/"><img src="../assets/images/logo-baround-blue.png" /></a>
      </div>
      <Navigation />
  </header>
</template>

<style scoped defer lang="scss">
header{
  width: 100%;
  position: fixed;
  background: white;
  height: 74px;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: 1s appear;
  padding: 30px;
  z-index: 30;
  .logo{
    width: 157px;
    img{
      width: 100%;
    }
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
