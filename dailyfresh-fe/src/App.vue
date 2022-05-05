<template>
  <NavBar />
  <router-view />
</template>
<script>
import NavBar from "./components/NavBarHome.vue";

export default {
  name: "app",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #198754;
}
#nav {
  text-align: center;
}
html,
body {
  overflow-x: hidden;
}
</style>
