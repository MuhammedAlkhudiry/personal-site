<template>
  <div>
    <div class="bg">
      <canvas id="main-container"></canvas>
    </div>
    <div @scroll="changeBackground">
      <Nav v-on:click.native="scroll" />
      <MainSection />
      <ProjectsSection />
      <Title text="تواصل معي" />
      <ContactMe />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    scroll: function(e) {
      const clickedItemId = e.target.parentElement.dataset.id;
      switch (clickedItemId) {
        case "home":
          this.$children[1].$el.scrollIntoView();
          break;
        case "projects":
          this.$children[2].$el.scrollIntoView();
          break;
        case "contactMe":
          this.$children[3].$el.scrollIntoView();
          break;
      }
    },
    changeBackground: function(e) {
      const clickedItemId = e.target.parentElement.dataset.id;
      switch (clickedItemId) {
        case "home":
          this.$children[1].$el.scrollIntoView();
          break;
        case "projects":
          this.$children[2].$el.scrollIntoView();
          break;
        case "contactMe":
          this.$children[3].$el.scrollIntoView();
          break;
      }
    }
  }
};
</script>

<style>
* {
  direction: rtl;
  text-align: right;
  list-style: none;
  scroll-behavior: smooth;
}
.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index: -111111;
}
</style>
