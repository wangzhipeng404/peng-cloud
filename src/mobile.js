import { createApp } from 'vue'
import vant from 'vant'
import 'vant/lib/index.css'
import App from './components/Preview.vue'
const app = createApp(App)
app.use(vant)
app.mount('#app')
