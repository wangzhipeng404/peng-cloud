import { createApp } from 'vue'
// import 'ant-design-vue/dist/antd.variable.min.css';
import '@ant-design-vue/pro-layout/dist/style.less';
import { ConfigProvider } from 'ant-design-vue';
import vant from 'vant'
import 'vant/lib/index.less'
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import router from './router';
import App from './App.vue'
createApp(App).use(router).use(ConfigProvider).use(vant).use(ProLayout).use(PageContainer).mount('#app');

