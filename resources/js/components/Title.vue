<template>
  <div>{{text}}</div>
</template>

<script>
export default {
  name: "Title",
  props: ["text"]
};
</script>

<style scoped>
div {
  margin: 0 auto;
  margin-top: 3em;
  margin-bottom: 2em;
  font-size: 28px;
  color: var(--light);
  text-align: center;
}
</style>
