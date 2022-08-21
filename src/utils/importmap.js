import { findLibs } from '../service/lib'

export const defaultLibs = [
  {
    type: '1',
    name: 'vue',
    key: 'vue',
    code: '',
    path: './esm/vue.js',
    createTime: 1661078329130,
    updateTime: 1661078329130,
  }
]

export async function initImportMap() {
  const list = await findLibs()
  const newList = [...defaultLibs, ...list]
  const imports = {}
  newList.forEach(lib => {
    if (lib.path) {
      imports[lib.key] = lib.path
    } else {
      const blob = new Blob([lib.code], { type: 'text/javascript' });
      const blobURL = URL.createObjectURL(blob);
      imports[lib.key] = blobURL
    }
  })
  const mapEl = document.createElement('script');
  mapEl.setAttribute('type', 'importmap');
  mapEl.textContent = JSON.stringify({ imports, scopes: {}});
  document.getElementsByTagName('head')[0].prepend(mapEl)
}
