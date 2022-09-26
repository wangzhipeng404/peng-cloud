import('@ant-design-vue/pro-layout/dist/style.less')
import('vant/lib/index.less')
import { initGlobal } from '@/utils/initGlobal'
import { importJS } from '@/utils/importJS'
async function initWeb () {
  initGlobal()
  importJS(`/js/stylus.min.js`)
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp } = await import('vue')

  const imports = await Promise.all([
    import('ant-design-vue'),
    import('vant'),
    import('@ant-design-vue/pro-layout'),
    import('./router/index'),
    import('./App.vue'),
    import('./service/compoment'),
    import('./utils/component'),
  ])
  const [
    { ConfigProvider },
    { default: vant },
    {default: ProLayout, PageContainer },
    {default: router},
    {default: App},
  ] = imports
  const app = createApp(App)
  app.use(router)
  app.use(ConfigProvider)
  app.use(ProLayout)
  app.use(PageContainer)
  app.use(vant)
  app.mount('#app');
}

initWeb()


