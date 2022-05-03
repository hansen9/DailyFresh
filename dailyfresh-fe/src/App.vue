<template>
  <div id="app" v-if="currentURL != '/'">
    <h1>{{ currentURL }}</h1>
    <NavBar />
  </div>
  <router-view />
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar,
  },
  data() {
    return {
      currentURL: "",
    };
  },
  created() {
    this.currentURL = window.location.pathname;
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
  /* margin-top: 60px; */
}
#nav {
  text-align: center;
}
</style>
