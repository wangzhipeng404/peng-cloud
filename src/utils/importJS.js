export const importJS = (src, name) => {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = src
    script.onload = () => {
      resolve(window[name])
    }
    script.onerror = () => reject()
    document.getElementsByTagName('head')[0].appendChild(script);
  })
}