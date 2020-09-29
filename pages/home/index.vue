<template>
  <main>
    <Header />
    <Map />
    <Footer />
  </main>
</template>

<script>
export default {
transition: "slide-right",
computed: {
  itinerari() {
    return this.$store.state.content.itinerari;
  },
  locali() {
    return this.$store.state.content.locali;
  },
 },
  created() {
    this.$store.dispatch("itinerari");
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
