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

  const imports = await Promise.all([
    import("element-plus"),
    import("element-plus/es/locale/lang/zh-cn"),
    import("@tmagic/editor"),
    import("@tmagic/form"),
    import('ant-design-vue'),
    import('vant'),
    import('@ant-design-vue/pro-layout'),
    import('./router/index'),
    import('./App.vue'),
    import('./service/compoment'),
    import('./utils/component'),
    import('@/components/tmagic-ui/src')
  ])
  const [
    { default:  ElementPlus },
    { default: zhCn },
    { default: MagicEditor },
    { default: MagicForm },
    { ConfigProvider },
    { default: vant },
    {default: ProLayout, PageContainer },
    {default: router},
    {default: App},
    { findComponents },
    { createOSSFileComponent },
    { default: magicUI }
  ] = imports
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
    app.component(item.type, defineAsyncComponent(() => createOSSFileComponent(item.type)))
  })
  Object.keys(magicUI).map(k => {
    app.component(k, magicUI[k])
  })
  app.mount('#app');
}

initWeb()


