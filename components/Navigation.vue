<template>
  <nav>
    <div class="burger">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </div>
    <div class="menu">
      <ul>
          <li><a href="/chi-siamo">Chi siamo</a></li>
          <li><a href="/itinerari">Itinerari</a></li>
          <li><a href="/brands">Brands</a></li>
          <li><a href="/contatti">Contatti</a></li>
      </ul>
    </div>
  </nav>
</template>

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
    @media all and (max-width: 768px) {  
      width: 14px;
      height: 14px;
      padding: 0px;
    }
    &__line{
      width: 100%;
      height: 1px;
      background-color: white;
      cursor: pointer;
    }
  }
  .menu{
    display: none;
    &.visible{
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
