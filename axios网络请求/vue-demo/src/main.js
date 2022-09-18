import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'

const app = createApp(App)
// 全局挂载 axios
app.config.globalProperties.$axios = axios
app.mount('#app')
