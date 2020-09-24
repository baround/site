<template>
  <footer>
    <div class="social">
      <a href=""><span class="icon icon__fb"></span></a>
      <a href=""><span class="icon icon__ig"></span></a>
    </div>
    <div class="credits">
      <p><a href="/credits">Credits</a> | <a href="Privacy">Privacy</a> | &copy;Baround</p>
    </div>
  </footer>
</template>

<style scoped defer lang="scss">
footer{
  width: 100%;
  background: #222831;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  .social{
    display: flex;
    flex-flow: row;
    a{
      margin-right: 10px;
      display: flex;
      .icon{
        width: 20px;
        height: 20px;
        background-size: auto 16px;
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
  .credits{
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 1.08px;
    color: white;
    a{
      text-decoration: none;
      color: white;
    }
  }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
