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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countLib\": function() { return /* binding */ countLib; },\n/* harmony export */   \"deleteLib\": function() { return /* binding */ deleteLib; },\n/* harmony export */   \"findLibs\": function() { return /* binding */ findLibs; },\n/* harmony export */   \"getLib\": function() { return /* binding */ getLib; },\n/* harmony export */   \"saveLib\": function() { return /* binding */ saveLib; }\n/* harmony export */ });\n/* harmony import */ var _utils_oss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/oss */ \"./src/utils/oss.js\");\n/* harmony import */ var _record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./record */ \"./src/service/record.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\nconst category = 3;\nasync function saveLib(libObj) {\n  const {\n    code,\n    ...lib\n  } = libObj;\n  await (0,_utils_oss__WEBPACK_IMPORTED_MODULE_0__.put)(`/test/libs/${lib.type}.js`, new Blob([code], {\n    type: 'text/javascript'\n  }));\n\n  if (lib.id) {\n    await (0,_record__WEBPACK_IMPORTED_MODULE_1__.updateRecord)({ ...lib,\n      category\n    });\n    return lib.id;\n  } else {\n    const id = await (0,_record__WEBPACK_IMPORTED_MODULE_1__.addRecord)({ ...lib,\n      category\n    });\n    return id;\n  }\n}\nasync function findLibs() {\n  const {\n    list\n  } = await (0,_record__WEBPACK_IMPORTED_MODULE_1__.listRecord)(category);\n  return list;\n}\nasync function getLib(id) {\n  const lib = await (0,_record__WEBPACK_IMPORTED_MODULE_1__.getRecord)(id);\n  const code = await (0,_utils_oss__WEBPACK_IMPORTED_MODULE_0__.getOSSFile)(`/test/libs/${lib.type}.js`);\n  console.log(lib);\n  return { ...lib,\n    code\n  };\n}\nasync function deleteLib(id) {\n  await (0,_record__WEBPACK_IMPORTED_MODULE_1__.deleteRecord)(id);\n}\nasync function countLib() {\n  const {\n    totalCount\n  } = await (0,_record__WEBPACK_IMPORTED_MODULE_1__.countRecord)(category);\n  return totalCount;\n}\n\n//# sourceURL=webpack://online-conplier/./src/service/lib.js?");

/***/ }),

/***/ "./src/service/record.js":
/*!*******************************!*\
  !*** ./src/service/record.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addRecord\": function() { return /* binding */ addRecord; },\n/* harmony export */   \"countRecord\": function() { return /* binding */ countRecord; },\n/* harmony export */   \"deleteRecord\": function() { return /* binding */ deleteRecord; },\n/* harmony export */   \"getRecord\": function() { return /* binding */ getRecord; },\n/* harmony export */   \"listRecord\": function() { return /* binding */ listRecord; },\n/* harmony export */   \"updateRecord\": function() { return /* binding */ updateRecord; }\n/* harmony export */ });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ \"./src/utils/request.js\");\n\nasync function listRecord(category) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/record/list', {\n    params: {\n      category\n    }\n  });\n}\nasync function getRecord(id) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/record/${id}`);\n}\nasync function addRecord(record) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/record', record);\n}\nasync function updateRecord(record) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put('/record', record);\n}\nasync function deleteRecord(id) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](`/record/${id}`);\n}\nasync function countRecord(category) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/record/list', {\n    params: {\n      category\n    }\n  });\n}\n\n//# sourceURL=webpack://online-conplier/./src/service/record.js?");

/***/ }),

/***/ "./src/utils/importmap.js":
/*!********************************!*\
  !*** ./src/utils/importmap.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultLibs\": function() { return /* binding */ defaultLibs; },\n/* harmony export */   \"endPoint\": function() { return /* binding */ endPoint; },\n/* harmony export */   \"initImportMap\": function() { return /* binding */ initImportMap; }\n/* harmony export */ });\n/* harmony import */ var _service_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/lib */ \"./src/service/lib.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\nconst endPoint = 'https://p-cloud.oss-cn-hangzhou.aliyuncs.com';\nconst defaultLibs = [{\n  type: '1',\n  name: 'vue',\n  key: 'vue',\n  code: '',\n  path: `${location.origin}/esm/vue.mjs`,\n  createTime: 1661078329130,\n  updateTime: 1661078329130\n}];\nfunction initImportMap() {\n  console.log('initImportMap');\n  return new Promise(resovle => {\n    (0,_service_lib__WEBPACK_IMPORTED_MODULE_0__.findLibs)().then(list => {\n      const newList = [...defaultLibs, ...list];\n      const imports = {};\n      newList.forEach(lib => {\n        if (lib.path) {\n          imports[lib.key] = lib.path;\n        } else {\n          imports[lib.type] = `${endPoint}/test/libs/${lib.type}.js`;\n        }\n      });\n      const mapEl = document.createElement('script');\n      mapEl.setAttribute('type', 'importmap');\n      mapEl.textContent = JSON.stringify({\n        imports,\n        scopes: {}\n      });\n      document.getElementsByTagName('head')[0].prepend(mapEl);\n\n      window.moduleLoaded = () => {\n        resovle();\n      };\n\n      const $script = document.createElement('script');\n      $script.type = 'module';\n      $script.textContent = `import * as vue from 'vue';window.Vue=vue;window.moduleLoaded();window.moduleLoaded=null;`;\n      mapEl.after($script);\n    });\n  });\n}\n\n//# sourceURL=webpack://online-conplier/./src/utils/importmap.js?");

/***/ })

}]);