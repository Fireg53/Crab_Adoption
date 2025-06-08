<template>
  <title>C.R.A.B.</title>
  <Header />
  <div class="layout">
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  font-family: sans-serif;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0;
}

.layout {
  padding-top: 60px;
}
</style>
