import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// 导入 Message 样式，因为使用自动导入组件会导致样式失效
import 'element-plus/theme-chalk/src/message.scss'
// import 'element-plus/theme-chalk/src/image.scss'
// 导入总样式
// import 'element-plus/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
