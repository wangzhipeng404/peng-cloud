import { createApp } from 'vue'
import vant from 'vant'
import 'vant/lib/index.css'
import App from './views/preview/Preview.vue'
const app = createApp(App)
app.use(vant)
app.mount('#app')
