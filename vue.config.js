const { defineConfig } = require("@vue/cli-service");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "node_modules/cesium/Build/Cesium/Workers",
            to: "cesium/Workers",
          },
          {
            from: "node_modules/cesium/Build/Cesium/ThirdParty",
            to: "cesium/ThirdParty",
          },
          {
            from: "node_modules/cesium/Build/Cesium/Assets",
            to: "cesium/Assets",
          },
          {
            from: "node_modules/cesium/Build/Cesium/Widgets",
            to: "cesium/Widgets",
          },
        ],
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("./cesium"),
      }),
    ],
  },
});
