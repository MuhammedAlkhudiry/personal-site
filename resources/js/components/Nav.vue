<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-transparent fixed-top" variant="primary">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :data-id="home" >الرئيسية</b-nav-item>
          <b-nav-item :data-id="projects">مشاريع</b-nav-item>
          <!-- <b-nav-item id="" >خبرات</b-nav-item> -->
          <!-- <b-nav-item id="" >مهارات تقنية</b-nav-item> -->
          <b-nav-item  :data-id="contactMe" >تواصل معي</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
    data(){
      return {
          home: 'home',
          projects: 'projects',
          contactMe: 'contactMe',
      }
    }
};
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.8);
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
