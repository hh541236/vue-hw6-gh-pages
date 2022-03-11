// main.js為最外層，下一層為 App.vue (全部都在router路由表定義)
import { createApp } from 'vue'
// 匯入 bootstrap
import 'bootstrap'
// 匯入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
// 建議改成 app. 型式
const app = createApp(App)
// VueAxios 需先執行
app.use(VueAxios, axios)
app.use(router)
app.mount('#app')
