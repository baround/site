<template>
  <main>
    <Header />
    <Quiz />
    <Footer />
  </main>
</template>

<script>
export default {
transition: "slide-right",
computed: {
  // locali() {
  //   return this.$store.state.content.locali;
  // },
 },
  created() {
    this.$store.dispatch("locali");
  },



  
};
</script>

<style>
footer{
  position: fixed;
  bottom: 0;
}
</style>
