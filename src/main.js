// import { initImportMap } from './utils/importmap';
// await initImportMap()
import { createApp, defineAsyncComponent } from 'vue'
// import 'ant-design-vue/dist/antd.variable.min.css';
import '@ant-design-vue/pro-layout/dist/style.less';
import { ConfigProvider } from 'ant-design-vue';
import vant from 'vant'
import 'vant/lib/index.less'
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import router from './router';
import App from './App.vue'
import { findComponents } from './service/compoment';
import { createComponent } from './utils/parser';

const app = createApp(App)
app.use(router).use(ConfigProvider).use(vant).use(ProLayout).use(PageContainer)
findComponents().then(res => {
  res.map(item => {
    app.component(item.key, defineAsyncComponent(() => createComponent(item.script, item.key)))
  })
  app.mount('#app');
})

