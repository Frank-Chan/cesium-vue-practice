# vue-cesium
    VUE3.2+Cesium1.117，练习仓库。通过分支管理不同的练习代码

## 分支功能如下
* **main**—— 初始化VUE和Cesium，基于VUE框架渲染出三维地球和OSM模型。 

* **gh-pages**—— GithubPages部署分支。github上部署后的页面访问地址：https://frank-chan.github.io/cesium-vue-practice/
    
    注意：本地部署打包前需要注释掉`vue.config.js`上的`publicPath`参数，注释掉`.gitignore`文件中的`/dist`目录，然后依次执行下述命令
```
    npm run build
    git add .
    git commit -m "deploy"
    git subtree push --prefix dist origin gh-pages  # 将打包后的代码上传到github gh-pages分支上。
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
