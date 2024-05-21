import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// The URL on your server where CesiumJS's static files are hosted.
window.CESIUM_BASE_URL = "/";