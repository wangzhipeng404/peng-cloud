/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkonline_conplier"] = self["webpackChunkonline_conplier"] || []).push([["src_utils_component_js"],{

/***/ "./src/utils/component.js":
/*!********************************!*\
  !*** ./src/utils/component.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComponent\": function() { return /* binding */ createComponent; },\n/* harmony export */   \"createFile\": function() { return /* binding */ createFile; },\n/* harmony export */   \"createOSSComponent\": function() { return /* binding */ createOSSComponent; },\n/* harmony export */   \"createOSSFileComponent\": function() { return /* binding */ createOSSFileComponent; },\n/* harmony export */   \"errorMessage\": function() { return /* binding */ errorMessage; },\n/* harmony export */   \"getOSSUrl\": function() { return /* binding */ getOSSUrl; },\n/* harmony export */   \"insertStyle\": function() { return /* binding */ insertStyle; },\n/* harmony export */   \"unregistComponet\": function() { return /* binding */ unregistComponet; }\n/* harmony export */ });\n/* harmony import */ var _oss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oss */ \"./src/utils/oss.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\nconst registedMap = new Map();\nconst mainName = '_sfc_main';\nfunction createFile(jsCode, id) {\n  return new Promise(resolve => {\n    const blob = new Blob([`${jsCode};window['${id}'] = ${mainName};`], {\n      type: 'text/javascript'\n    });\n    const blobURL = URL.createObjectURL(blob);\n    const $script = document.createElement('script');\n    $script.type = 'module';\n    $script.src = blobURL;\n\n    $script.onload = () => {\n      resolve(window[id]);\n    };\n\n    $script.error = () => {\n      resolve(null);\n    };\n\n    document.getElementsByTagName('head')[0].appendChild($script);\n  }).catch(e => {\n    console.log('create file error', e);\n  });\n}\nfunction getOSSUrl(type) {\n  const src = `${_oss__WEBPACK_IMPORTED_MODULE_0__.endPoint}/test/components/${type}/${type}.js`;\n  return src;\n}\nasync function createOSSComponent(type) {\n  return createComponent(getOSSUrl(type), type);\n}\nasync function createOSSFileComponent(type) {\n  const script = await (0,_oss__WEBPACK_IMPORTED_MODULE_0__.getOSSFile)(`test/components/${type}/${type}.js`);\n  return createComponent(script, type);\n}\nasync function createComponent(str, id = 'test-component') {\n  if (registedMap.has(id)) {\n    return registedMap.get(id);\n  }\n\n  if (/^[http|https]/.test(str)) {\n    const comp = () => __webpack_require__(\"./src/utils lazy recursive\")(str);\n\n    registedMap.set(id, comp);\n    return comp;\n  }\n\n  try {\n    const res = await createFile(str, id);\n\n    if (id !== 'test-component') {\n      registedMap.set(id, res);\n    }\n\n    return res;\n  } catch (e) {\n    return {\n      render() {\n        return e;\n      }\n\n    };\n  }\n}\nfunction unregistComponet(key) {\n  if (registedMap.has(key)) {\n    registedMap.delete(key);\n  }\n}\nfunction insertStyle(style) {\n  let styleEl = null;\n\n  if (style) {\n    let styleEl = document.createElement('style');\n    styleEl.innerText = style.replace(/\\n/g, '');\n    document.getElementsByTagName('head')[0].appendChild(styleEl);\n  }\n\n  return styleEl;\n}\nfunction errorMessage(error) {\n  return `\n    insertStyle('.error[data-v-bc173211c1fb] {  color: red;}');\n    const _sfc_main = {};\n    import { openBlock as _openBlock, createElementBlock as _createElementBlock, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from \"vue\";\n    const _withScopeId = n => (_pushScopeId(\"data-v-bc173211c1fb\"), n = n(), _popScopeId(), n);\n    const _hoisted_1 = {\n      class: \"error\"\n    };\n    function _sfc_render(_ctx, _cache) {\n      return _openBlock(), _createElementBlock(\"div\", _hoisted_1, '${error}');\n    }\n    _sfc_main.render = _sfc_render;\n    _sfc_main.__scopeId = \"data-v-bc173211c1fb\";\n    export default _sfc_main;\n  `;\n}\n\n//# sourceURL=webpack://online-conplier/./src/utils/component.js?");

/***/ }),

/***/ "./src/utils lazy recursive":
/*!******************************************!*\
  !*** ./src/utils/ lazy namespace object ***!
  \******************************************/
/***/ (function(module) {

eval("function webpackEmptyAsyncContext(req) {\n\t// Here Promise.resolve().then() is used instead of new Promise() to prevent\n\t// uncaught exception popping up in devtools\n\treturn Promise.resolve().then(function() {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t});\n}\nwebpackEmptyAsyncContext.keys = function() { return []; };\nwebpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;\nwebpackEmptyAsyncContext.id = \"./src/utils lazy recursive\";\nmodule.exports = webpackEmptyAsyncContext;\n\n//# sourceURL=webpack://online-conplier/./src/utils/_lazy_namespace_object?");

/***/ })

}]);