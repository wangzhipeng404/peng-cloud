import('vant/lib/index.css')
import { initGlobal } from '@/utils/initGlobal'
async function initMobile () {
  initGlobal()
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp, defineAsyncComponent } = await import('vue')
  const imports = await Promise.all([
    import('vant'),
    import('./service/compoment'),
    import('./utils/component'),
    import('./views/preview/Preview.vue'),
  ])

  const [
   { default: vant },
   { findComponents },
   { getOSSUrl },
   { default: App }
  ] = imports
  const app = createApp(App)
  app.use(vant)
  const res = await findComponents()
  res.map(item => {
    app.component(item.type, defineAsyncComponent(new Function(`return import('${getOSSUrl(item.type)}')`)))
  })
  app.mount('#app');
}

initMobile()