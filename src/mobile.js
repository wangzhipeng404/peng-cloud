import('vant/lib/index.css')
import { initGlobal } from '@/utils/initGlobal'
async function initMobile () {
  initGlobal()
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp, defineAsyncComponent } = await import('vue')
  const imports = await Promise.all([
    import('@tmagic/core'),
    import('@tmagic/utils'),
    import('vant'),
    import('./router/mobile'),
    import('./service/compoment'),
    import('./utils/component'),
    import('./AppMobile.vue'),
  ])

  const [
    { default: Core },
    { getUrlParam }, 
   { default: vant },
   { default: router },
   { findComponents },
   { getOSSUrl },
   { default: App }
  ] = imports
  const getLocalConfig = () => {
    const configStr = localStorage.getItem('magicDSL');
    if (!configStr) return [];
    try {
      // eslint-disable-next-line no-eval
      return [eval(`(${configStr})`)];
    } catch (err) {
      return [];
    }
  };
  const app = createApp(App)
  app.use(router)
  app.use(vant)
  const res = await findComponents()
  res.map(item => {
    app.component(item.type, defineAsyncComponent(new Function(`return import('${getOSSUrl(item.type)}')`)))
  })
  const core = new Core({
    config: ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {},
    curPage: getUrlParam('page'),
  });
  app.config.globalProperties.app = core;
  app.provide('app', core);
  app.mount('#app');
}

initMobile()