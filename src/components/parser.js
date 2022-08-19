import { transformSync } from '@babel/core';
import { parse, compileTemplate, compileScript, compileStyle, rewriteDefault } from '@vue/compiler-sfc';
import jsx from '@vue/babel-plugin-jsx';

const renderName = '_sfc_render';
const mainName = '_sfc_main';

export function parser (source) {
  var id = Math.random ().toString (16).substring (3, 16);
  var dataVId = 'data-v-' + id;
  var parseResult = parse (source, { sourceMap: false });
  var descriptor = parseResult.descriptor;
  var hasScoped = descriptor.styles.some(s => s.scoped);
  var template = null
  if (descriptor.template) {
    template = compileTemplate({
      id: id,
      source: descriptor.template.content,
      scoped: hasScoped,
      compilerOptions: {
        scopeId: hasScoped ? dataVId : undefined,
      },
    });
  }
  var script = compileScript(descriptor, {
    id: id,
    templateOptions: {
      scoped: hasScoped,
      compilerOptions: {
        scopeId: hasScoped ? dataVId : undefined,
      },
    },
  });
  var styles = descriptor.styles;
  var styleCodes = [];
  if (styles.length) {
    for (var i = 0; i < styles.length; i++) {
      var styleItem = styles[i];
      styleCodes.push (
        compileStyle ({
          source: styleItem.content,
          id: dataVId,
          preprocessLang: styleItem.lang,
          preprocessCustomRequire: () => (source) => {
            return {
              render () {
                return window.stylus.render(source) 
              },
              set () {},
              deps () { return [] }
            }
          },
          map: false,
          scoped: styleItem.scoped
        }).code
      );
    }
  }
  let styleCode = styleCodes.join ('\n');
  // styleCode = styleCode.replace (
  //   /url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g,
  //   function (match, quotes, relUrl1, relUrl2) {
  //     return (
  //       'url(' + quotes + resolveUrl (relUrl1 || relUrl2, styleUrl) + quotes + ')'
  //     );
  //   }
  // );
  // 处理 template 标签
  let templateCode = template ? template.code : ''
  // 处理 script 标签
  let scriptCode = script.content
  scriptCode = rewriteDefault(script.content, mainName);
  const res = transformSync (
    scriptCode, 
    {
      babelrc: false,
      ast: false,
      // presets: ['es2015'],
      plugins: [[jsx, {
        mergeProps: true,
        optimize: false,
        transformOn: false,
        enableObjectSlots: true,
      }]],
    }
  )
  scriptCode = res.code
  // 导出组件对象
  var output = [
    scriptCode,
    templateCode,
    template ? mainName + '.render=' + renderName : ''
  ];
  if (hasScoped) {
    output.push (mainName + '.__scopeId = ' + JSON.stringify (dataVId));
  }
  output.push(`export default ${mainName}`)
  var code = output.join ('\n');
  code = code.replace(/\nexport (function|const) (render|ssrRender)/, '\n$1 _sfc_$2')
  const result = {
    style: styleCode,
    script: code
  }
  return result
}

export function createFile(jsCode, id) {
  return new Promise((resolve) => {
    const blob = new Blob([jsCode, `\nwindow['${id}'] = ${mainName}`], {type: 'text/javascript'});
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
  })
}

export async function createComponent(str, id = 'test-component') {
  const res = await createFile(str, id)
  return res
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