<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="bg-transparent" variant="primary">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item  >الرئيسية</b-nav-item>
          <b-nav-item >مشاريع</b-nav-item>
          <!-- <b-nav-item id="" >خبرات</b-nav-item> -->
          <!-- <b-nav-item id="" >مهارات تقنية</b-nav-item> -->
          <b-nav-item >تواصل معي</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav"
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
