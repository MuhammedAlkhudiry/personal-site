<template>
  <div>
    <div class="footer">
      This footer will always be positioned at the bottom of the page, but
      <strong>not fixed</strong>.
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  direction: rtl;
  text-align: right;
}

body {
  position: relative;
  margin: 0;
  padding-bottom: 6rem;
}

.footer {
  position: absolute;
  top: 100%;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.2rem;
  text-align: center;
}
</style>
