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
  
  //注意：本地部署打包前需要注释掉publicPath参数
  // publicPath: "/cesium-vue-practice/", //配置为github仓库名,否则部署到GitHub Pages上后会获取不到页面内容。
});
