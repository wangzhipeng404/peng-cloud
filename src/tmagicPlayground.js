import('vant/lib/index.css')
import { initGlobal } from '@/utils/initGlobal'
async function init () {
  initGlobal()
  const { initImportMap } = await import('./utils/importmap')
  await initImportMap()
  const { createApp } = await import('vue')
  const imports = await Promise.all([
    import('vant'),
    import('@/components/tmagic-ui/src'),
    import('./service/compoment'),
    import('./utils/component'),
    import('./views/tmagic/playground.vue'),
  ])

  const [
   { default: vant },
   { default: magicUI },
   { findComponents },
   { getOSSUrl },
   { default: App }
  ] = imports
  console.log('playgroud', App)
  const app = createApp(App)
  app.use(vant)
  const res = await findComponents()
  for (let item of res) {
    const { default: component } = await eval(`import('${getOSSUrl(item.type)}')`)
    app.component(`magic-ui-${item.type}`, component)
  }
  Object.keys(magicUI).map(k => {
    app.component(`magic-ui-${k}`, magicUI[k])
  })
  app.mount('#app');
}

init()