import('@ant-design-vue/pro-layout/dist/style.less')
import('vant/lib/index.less')
import "element-plus/dist/index.css";
import "@tmagic/editor/dist/style.css";
import "@tmagic/form/dist/style.css";
import { initGlobal } from '@/utils/initGlobal'
import { importJS } from '@/utils/importJS'
async function initWeb () {
  initGlobal()
  importJS('./js/stylus.min.js')
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp, defineAsyncComponent } = await import('vue')
  const { default:  ElementPlus } = await import("element-plus")
  const { default: zhCn } = await import("element-plus/es/locale/lang/zh-cn");
  const { default: MagicEditor } =  await "@tmagic/editor";
  const { default: MagicForm } =  await("@tmagic/form");
  const { ConfigProvider } = await import('ant-design-vue');
  const { default: vant } = await import('vant')
  const {default: ProLayout } = await import('@ant-design-vue/pro-layout')
  const { PageContainer } = await import('@ant-design-vue/pro-layout')
  const {default: router} = await import('./router/index')
  const {default: App} = await import('./App.vue')
  const { findComponents } = await import('./service/compoment')
  const { createComponent }  = await import('./utils/parser')

  const app = createApp(App)
  app.use(router)
  app.use(ConfigProvider)
  app.use(vant)
  app.use(ProLayout)
  app.use(PageContainer)
  app.use(ElementPlus, { locale: zhCn })
  app.use(MagicEditor)
  app.use(MagicForm)
  const res = await findComponents()
  res.map(item => {
    app.component(item.key, defineAsyncComponent(() => createComponent(item.script, item.key)))
  })
  app.mount('#app');
}

initWeb()


