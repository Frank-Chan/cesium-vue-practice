<template>
  <div id="wrapper">
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"; //引入包含初始化Cesium.Viewer的组件

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
/* 地图容器的样式不可少 */
#wrapper {
  width: 100%;
  height: 100vh;
}
</style>
