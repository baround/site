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
  posts() {
    return this.$store.state.content.posts;
  },
  itinerari() {
    return this.$store.state.content.itinerari;
  },
  locali() {
    return this.$store.state.content.locali;
  },
  attivita() {
    return this.$store.state.content.attivita;
  }
 },
  created() {
    this.$store.dispatch("itinerari");
    this.$store.dispatch("attivita");
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
