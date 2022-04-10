<template>
    <div id="center">
        <HelloWorld msg="lieur guys"/>
    </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'ProfilePage',
  components: {
    HelloWorld,
  }
}
</script>

<style>
    #center{
        text-align: center;
    }
</style>
