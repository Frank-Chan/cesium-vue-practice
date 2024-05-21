<template>
  <div id="wrapper">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#wrapper {
  width:100%;
  height: 100vh;
}
</style>
