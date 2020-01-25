<template>
  <div class="main-container">
    <Nav v-on:click.native="scroll" />
    <MainSection />
    <ProjectsSection />
    <Title text="تواصل معي" />
    <ContactMe />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import MainSection from "./components/MainSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import Title from "./components/Title.vue";
import ContactMe from "./components/ContactMe.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  methods: {
      scroll: function (e) {
          console.log(e);

      }
  }
};
</script>

<style>
* {
  direction: rtl;
  text-align: right;
  list-style: none;
}
.main-container {
    overflow: hidden;
  background: linear-gradient(270deg, #007bff, #17a2b8, #1048e7);
  background-size: 600% 600%;

  -webkit-animation: animation 36s ease infinite;
  -moz-animation: animation 36s ease infinite;
  animation: animation 36s ease infinite;
}

@-webkit-keyframes animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
