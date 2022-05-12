<template>
  <NavBar />
  <router-view />
  <Footer />
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    NavBar,
    Footer,
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
