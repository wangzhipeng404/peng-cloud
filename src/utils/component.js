import { endPoint, getOSSFile } from "./oss";

const registedMap = new Map()

const mainName = '_sfc_main';

export function createFile(jsCode, id) {
  return new Promise((resolve) => {
    const blob = new Blob([`${jsCode};window['${id}'] = ${mainName};`], {type: 'text/javascript'});
    const blobURL = URL.createObjectURL(blob);
    const $script = document.createElement('script')
    $script.type ='module'
    $script.src = blobURL
    $script.onload = () => {
      resolve(window[id])
    }
    $script.error = () => {
      resolve(null)
    }
    document.getElementsByTagName('head')[0].appendChild($script)
  }).catch(e => {
    console.log('create file error', e)
  })
}

export function getOSSUrl (type) {
  const src = `${endPoint}/test/components/${type}/${type}.js`
  return src
}
export async function createOSSComponent(type) {
  return createComponent(getOSSUrl(type), type)
}

export async function createOSSFileComponent(type) {
  const script = await getOSSFile(`test/components/${type}/${type}.js`)
  return createComponent(script, type)
}

export async function createComponent(str, id = 'test-component') {
  if (registedMap.has(id)) {
    return registedMap.get(id)
  }
  if (/^[http|https]/.test(str)) {
    const comp = () => import(str)
    registedMap.set(id, comp)
    return comp
  }
  try {
    const res = await createFile(str, id)
    if (id !== 'test-component') {
      registedMap.set(id, res)
    }
    return res
  } catch (e) {
    return {
      render () {
        return e
      }
    }
  }
}

export function unregistComponet (key) {
  if (registedMap.has(key)) {
    registedMap.delete(key)
  }
}

export function insertStyle(style) {
  let styleEl = null
  if (style) {
    let styleEl = document.createElement('style')
    styleEl.innerText = style.replace(/\n/g, '')
    document.getElementsByTagName('head')[0].appendChild(styleEl)
  }
  return styleEl
}

export function errorMessage (error) {
  return `
    insertStyle('.error[data-v-bc173211c1fb] {  color: red;}');
    const _sfc_main = {};
    import { openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";
    const _withScopeId = n => (_pushScopeId("data-v-bc173211c1fb"), n = n(), _popScopeId(), n);
    const _hoisted_1 = {
      class: "error"
    };
    function _sfc_render(_ctx, _cache) {
      return _openBlock(), _createElementBlock("div", _hoisted_1, '${error}');
    }
    _sfc_main.render = _sfc_render;
    _sfc_main.__scopeId = "data-v-bc173211c1fb";
    export default _sfc_main;
  `
}