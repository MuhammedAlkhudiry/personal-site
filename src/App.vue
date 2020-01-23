<template>
  <div>
    <Nav />
    <MainSection />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import MainSection from "./components/MainSection.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Nav,
    Footer,
    MainSection
  }
};
</script>

<style>
</style>
