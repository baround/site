<template>
  <div class="finder__filters__cappello">
    <span class="counter">
      {{locali.length}} bar a Milano
    </span>
    <span class="benvenuto">Benvenuto!</span>
    <h1>Ecco i bar che fanno per te! </h1>
  </div>
</template>
<script>
export default {  
  props: ['locali'],
  mounted(){
    console.log(this.locali)
  }
  
}
</script>
