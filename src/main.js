import('@ant-design-vue/pro-layout/dist/style.less')
import('vant/lib/index.less')
import { initGlobal } from '@/utils/initGlobal'
import { importJS } from '@/utils/importJS'
async function initWeb () {
  initGlobal()
  importJS('./js/stylus.min.js')
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp, defineAsyncComponent } = await import('vue')
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
  const res = await findComponents()
  res.map(item => {
    app.component(item.key, defineAsyncComponent(() => createComponent(item.script, item.key)))
  })
  app.mount('#app');
}

initWeb()


