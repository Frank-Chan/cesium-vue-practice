<template>
  <div class="map_wrapper" id="cesiumMapContainer"></div>
</template>

<script>
import "cesium/Build/Cesium/Widgets/widgets.css";
import {
  Cartesian3,
  // createOsmBuildingsAsync,
  createGooglePhotorealistic3DTileset,
  Ion,
  Math as CesiumMath,
  Terrain,
  Viewer,
} from "cesium";

export default {
  name: "HelloWorld",
  data() {
    return {
      viewer: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      // Your access token can be found at: https://ion.cesium.com/tokens.
      // Replace `your_access_token` with your Cesium ion access token.
      Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZGU1OWU0My03NmE5LTQ3YTctOTQ3Zi0zZWY2ODI5MWI5NDUiLCJpZCI6OTY2ODEsImlhdCI6MTY1NDY1NTM1NX0._27bEReanba-t7Hs9M9moV5aUwkmo_aALqol811e82k";

      // 在ID为 `cesiumMapContainer` 的HTML元素中初始化Cesium Viewer
      this.viewer = new Viewer("cesiumMapContainer", {
        terrain: Terrain.fromWorldTerrain(),
      });

      //相机飞至指定位置
      this.viewer.camera.flyTo({
        // destination: Cartesian3.fromDegrees(114.1, 22.45, 2000),//深圳
        destination: Cartesian3.fromDegrees(-73.98566, 40.663, 2000), //纽约曼哈顿
        orientation: {
          heading: CesiumMath.toRadians(0.0),
          pitch: CesiumMath.toRadians(-15.0),
        },
      });

      // 添加OSM建筑图层
      // const buildingTileset = await createOsmBuildingsAsync();
      const buildingTileset = await createGooglePhotorealistic3DTileset();
      buildingTileset.maximumScreenSpaceError = 8;
      this.viewer.scene.primitives.add(buildingTileset);
    },
  },
  beforeUnmounted() {
    //销毁Cesium Viewer
    if (this.viewer) {
      this.viewer.destroy();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map_wrapper {
  height: 100%;
}
</style>
