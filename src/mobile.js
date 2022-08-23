import('vant/lib/index.css')
async function initMobile () {
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp, defineAsyncComponent } = await import('vue')
  const { default: vant } = await import('vant')
  const {default: router } = await import('./router/mobile')
  const { findComponents } = await import('./service/compoment')
  const { createComponent }  = await import('./utils/parser')
  const {default: App} = await import('./AppMobile.vue')

  const app = createApp(App)
  app.use(router)
  app.use(vant)
  const res = await findComponents()
  res.map(item => {
    app.component(item.key, defineAsyncComponent(() => createComponent(item.script, item.key)))
  })
  app.mount('#app');
}

initMobile()