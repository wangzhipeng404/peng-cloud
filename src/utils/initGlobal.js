export function initGlobal () {
  window.process = {
    env: {
      NODE_ENV: 'development'
    }
  }
  window.insertStyle = function insertStyle(style) {
    let styleEl = null
    if (style) {
      let styleEl = document.createElement('style')
      styleEl.innerText = style.replace(/\n/g, '')
      document.getElementsByTagName('head')[0].appendChild(styleEl)
    }
    return styleEl
  }
}