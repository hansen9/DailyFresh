<template>
  <div id="center">
    <HelloWorld msg="Profile Page" />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "ProfilePage",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#center {
  text-align: center;
}

html {
  min-height: 120vh;
}
</style>
