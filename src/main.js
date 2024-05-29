import { createApp } from 'vue'
import App from './App.vue'

//创建应用程序实例，并在指定dom元素（'app'）上装载应用程序实例的根组件
createApp(App).mount('#app')
// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = "/";