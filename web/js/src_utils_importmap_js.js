"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkonline_conplier"] = self["webpackChunkonline_conplier"] || []).push([["src_utils_importmap_js"],{

/***/ "./src/service/lib.js":
/*!****************************!*\
  !*** ./src/service/lib.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countLib\": function() { return /* binding */ countLib; },\n/* harmony export */   \"deleteLib\": function() { return /* binding */ deleteLib; },\n/* harmony export */   \"findLibs\": function() { return /* binding */ findLibs; },\n/* harmony export */   \"getLib\": function() { return /* binding */ getLib; },\n/* harmony export */   \"saveLib\": function() { return /* binding */ saveLib; }\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./src/service/db.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\nasync function saveLib(libObj) {\n  const count = await _db__WEBPACK_IMPORTED_MODULE_0__.db.libs.where('key').equalsIgnoreCase(libObj.key).count();\n\n  if (!libObj.id && count > 0) {\n    throw 'key已存在，请修改';\n  }\n\n  const newData = { ...libObj,\n    createTime: libObj.createTime || new Date().getTime(),\n    updateTime: new Date().getTime()\n  };\n  console.log(libObj);\n  const id = await _db__WEBPACK_IMPORTED_MODULE_0__.db.libs.put(newData, newData.id);\n  return id;\n}\nasync function findLibs() {\n  const list = await _db__WEBPACK_IMPORTED_MODULE_0__.db.libs.reverse().sortBy('updateTime');\n  return list;\n}\nasync function getLib(key) {\n  const lib = await _db__WEBPACK_IMPORTED_MODULE_0__.db.libs.get(+key);\n  console.log(lib);\n  return lib;\n}\nasync function deleteLib(key) {\n  await _db__WEBPACK_IMPORTED_MODULE_0__.db.libs[\"delete\"](key);\n}\nasync function countLib() {\n  const count = await _db__WEBPACK_IMPORTED_MODULE_0__.db.libs.count();\n  return count;\n}\n\n//# sourceURL=webpack://online-conplier/./src/service/lib.js?");

/***/ }),

/***/ "./src/utils/importmap.js":
/*!********************************!*\
  !*** ./src/utils/importmap.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultLibs\": function() { return /* binding */ defaultLibs; },\n/* harmony export */   \"initImportMap\": function() { return /* binding */ initImportMap; }\n/* harmony export */ });\n/* harmony import */ var _service_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/lib */ \"./src/service/lib.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\nconst defaultLibs = [{\n  type: '1',\n  name: 'vue',\n  key: 'vue',\n  code: '',\n  path: './esm/vue.mjs',\n  createTime: 1661078329130,\n  updateTime: 1661078329130\n}];\nfunction initImportMap() {\n  console.log('initImportMap');\n  return new Promise(resovle => {\n    (0,_service_lib__WEBPACK_IMPORTED_MODULE_0__.findLibs)().then(list => {\n      const newList = [...defaultLibs, ...list];\n      const imports = {};\n      newList.forEach(lib => {\n        if (lib.path) {\n          imports[lib.key] = lib.path;\n        } else {\n          const blob = new Blob([lib.code], {\n            type: 'text/javascript'\n          });\n          const blobURL = URL.createObjectURL(blob);\n          imports[lib.key] = blobURL;\n        }\n      });\n      const mapEl = document.createElement('script');\n      mapEl.setAttribute('type', 'importmap');\n      mapEl.textContent = JSON.stringify({\n        imports,\n        scopes: {}\n      });\n      document.getElementsByTagName('head')[0].prepend(mapEl);\n\n      window.moduleLoaded = () => {\n        resovle();\n      };\n\n      const $script = document.createElement('script');\n      $script.type = 'module';\n      $script.textContent = `import * as vue from 'vue';window.Vue=vue;window.moduleLoaded();window.moduleLoaded=null;`;\n      mapEl.after($script);\n    });\n  });\n}\n\n//# sourceURL=webpack://online-conplier/./src/utils/importmap.js?");

/***/ })

}]);