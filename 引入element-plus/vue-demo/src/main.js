import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// 全引用加载
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')
