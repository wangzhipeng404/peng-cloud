import('vant/lib/index.css')
import { initGlobal } from '@/utils/initGlobal'
async function initMobile () {
  initGlobal()
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp, defineAsyncComponent } = await import('vue')
  const { default: Core } = await import('@tmagic/core')
  const { getUrlParam } = await import('@tmagic/utils')
  const { default: vant } = await import('vant')
  const { default: router } = await import('./router/mobile')
  const { findComponents } = await import('./service/compoment')
  const { createComponent }  = await import('./utils/component')
  const { default: App } = await import('./AppMobile.vue')
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
    app.component(item.key, defineAsyncComponent(() => createComponent(item.script, item.key)))
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