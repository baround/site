<template>
  <form class="quiz">
    <!--header-->
    <div class="quiz__header">
      <div class="quiz__header__logo">
        <img src="../assets/images/logo-baround-white.png" />
      </div>
      <span class="quiz__header__skip">
        Skip
      </span>
    </div>
    <!--header-->


    <!--step 0-->
    <div class="quiz__step quiz__step--step0">
      <div class="quiz__step__counter">
        <span class="quiz__step__counter__line"></span>
        <span class="quiz__step__counter__value">0/5 steps</span>
        <span class="quiz__step__counter__line"></span>
      </div>
      <div class="quiz__step__content">
        <h2>Trova il bar più adatto a te</h2>
        <button>Comincia</button>
      </div>
    </div>
    <!--step 0-->


    <!--step 1-->
    <div class="quiz__step quiz__step--step1">
      <div class="quiz__step__counter">
        <span class="quiz__step__counter__line"></span>
        <span class="quiz__step__counter__value">1/5 steps</span>
        <span class="quiz__step__counter__line"></span>
      </div>
      <div class="quiz__step__content">
        <label>In che anno sei nato?</label>
        <fieldset>
          <!-- <input v-model.number="age" inputmode="numeric" maxlength="1" pattern="[0-9]*" placeholder="1">
          <input v-model.number="age" inputmode="numeric" maxlength="1" pattern="[0-9]*" placeholder="9">
          <input v-model.number="age" inputmode="numeric" maxlength="1" pattern="[0-9]*" placeholder="9">
          <input v-model.number="age" inputmode="numeric" maxlength="1" pattern="[0-9]*" placeholder="9"> -->
        </fieldset>
        <button>Comincia</button>
      </div>
    </div>
    <!--step 1-->

    <!--step 1-->
    <div class="quiz__step quiz__step--step1">
      <div class="quiz__step__counter">
        <span class="quiz__step__counter__line"></span>
        <span class="quiz__step__counter__value">1/5 steps</span>
        <span class="quiz__step__counter__line"></span>
      </div>
      <div class="quiz__step__content">
        <label>In che anno sei nato?</label>
          
        <button>Comincia</button>
      </div>
    </div>
    <!--step 1-->




    <!--footer-->
    <div class="quiz__footer">
      <div class="quiz__header__logo">
        <img src="../assets/images/logo-baround-white.png" />
      </div>
      <span class="quiz__header__skip">
        Skip
      </span>
    </div>
    <!--end footer-->
  </form>
</template>

<style>
h1 {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
