"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkonline_conplier"] = self["webpackChunkonline_conplier"] || []).push([["src_service_compoment_js"],{

/***/ "./src/service/compoment.js":
/*!**********************************!*\
  !*** ./src/service/compoment.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countComponent\": function() { return /* binding */ countComponent; },\n/* harmony export */   \"deleteComponet\": function() { return /* binding */ deleteComponet; },\n/* harmony export */   \"findComponents\": function() { return /* binding */ findComponents; },\n/* harmony export */   \"getComponent\": function() { return /* binding */ getComponent; },\n/* harmony export */   \"saveComponent\": function() { return /* binding */ saveComponent; }\n/* harmony export */ });\n/* harmony import */ var _record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./record */ \"./src/service/record.js\");\n/* harmony import */ var _utils_oss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/oss */ \"./src/utils/oss.js\");\n\n\nconst category = 2;\nasync function saveComponent(componetObj) {\n  const {\n    props,\n    evnets,\n    code,\n    script,\n    ...comp\n  } = componetObj;\n  await Promise.all([(0,_utils_oss__WEBPACK_IMPORTED_MODULE_1__.put)(`/test/components/${comp.type}/props.json`, new Blob([props], {\n    type: 'text/json'\n  })), (0,_utils_oss__WEBPACK_IMPORTED_MODULE_1__.put)(`/test/components/${comp.type}/events.json`, new Blob([evnets], {\n    type: 'text/json'\n  })), (0,_utils_oss__WEBPACK_IMPORTED_MODULE_1__.put)(`/test/components/${comp.type}/${comp.type}.vue`, new Blob([code], {\n    type: 'text/plain'\n  })), (0,_utils_oss__WEBPACK_IMPORTED_MODULE_1__.put)(`/test/components/${comp.type}/${comp.type}.js`, new Blob([script], {\n    type: 'text/javascript'\n  }))]);\n\n  if (comp.id) {\n    await (0,_record__WEBPACK_IMPORTED_MODULE_0__.updateRecord)({ ...comp,\n      category\n    });\n    return comp.id;\n  } else {\n    const id = await (0,_record__WEBPACK_IMPORTED_MODULE_0__.addRecord)({ ...comp,\n      category\n    });\n    return id;\n  }\n}\nasync function findComponents() {\n  const {\n    list\n  } = await (0,_record__WEBPACK_IMPORTED_MODULE_0__.listRecord)(category);\n  return list;\n}\nasync function getComponent(id) {\n  const component = await (0,_record__WEBPACK_IMPORTED_MODULE_0__.getRecord)(id);\n  const [code, props, events] = await Promise.all([(0,_utils_oss__WEBPACK_IMPORTED_MODULE_1__.getOSSFile)(`test/components/${component.type}/${component.type}.vue`), (0,_utils_oss__WEBPACK_IMPORTED_MODULE_1__.getOSSFile)(`test/components/${component.type}/props.json`), (0,_utils_oss__WEBPACK_IMPORTED_MODULE_1__.getOSSFile)(`test/components/${component.type}/events.json`)]);\n  return { ...component,\n    code,\n    props,\n    events\n  };\n}\nasync function deleteComponet(key) {\n  await (0,_record__WEBPACK_IMPORTED_MODULE_0__.deleteRecord)(key);\n}\nasync function countComponent() {\n  const {\n    totalCount\n  } = await (0,_record__WEBPACK_IMPORTED_MODULE_0__.countRecord)(category);\n  return totalCount;\n}\n\n//# sourceURL=webpack://online-conplier/./src/service/compoment.js?");

/***/ }),

/***/ "./src/service/record.js":
/*!*******************************!*\
  !*** ./src/service/record.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addRecord\": function() { return /* binding */ addRecord; },\n/* harmony export */   \"countRecord\": function() { return /* binding */ countRecord; },\n/* harmony export */   \"deleteRecord\": function() { return /* binding */ deleteRecord; },\n/* harmony export */   \"getRecord\": function() { return /* binding */ getRecord; },\n/* harmony export */   \"listRecord\": function() { return /* binding */ listRecord; },\n/* harmony export */   \"updateRecord\": function() { return /* binding */ updateRecord; }\n/* harmony export */ });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ \"./src/utils/request.js\");\n\nasync function listRecord(category) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/record/list', {\n    params: {\n      category\n    }\n  });\n}\nasync function getRecord(id) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/record/${id}`);\n}\nasync function addRecord(record) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/record', record);\n}\nasync function updateRecord(record) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put('/record', record);\n}\nasync function deleteRecord(id) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](`/record/${id}`);\n}\nasync function countRecord(category) {\n  return _utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/record/list', {\n    params: {\n      category\n    }\n  });\n}\n\n//# sourceURL=webpack://online-conplier/./src/service/record.js?");

/***/ })

}]);