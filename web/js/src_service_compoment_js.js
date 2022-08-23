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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countComponent\": function() { return /* binding */ countComponent; },\n/* harmony export */   \"deleteComponet\": function() { return /* binding */ deleteComponet; },\n/* harmony export */   \"findComponents\": function() { return /* binding */ findComponents; },\n/* harmony export */   \"getComponet\": function() { return /* binding */ getComponet; },\n/* harmony export */   \"saveComponent\": function() { return /* binding */ saveComponent; }\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./src/service/db.js\");\n/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\nasync function saveComponent(componetObj) {\n  const count = await _db__WEBPACK_IMPORTED_MODULE_0__.db.components.where('key').equalsIgnoreCase(componetObj.key).count();\n\n  if (!componetObj.id && count > 0) {\n    throw '组件key已存在，请修改';\n  }\n\n  const newData = { ...componetObj,\n    createTime: componetObj.createTime || new Date().getTime(),\n    updateTime: new Date().getTime()\n  };\n  console.log(componetObj);\n  const id = await _db__WEBPACK_IMPORTED_MODULE_0__.db.components.put(newData, newData.id);\n  return id;\n}\nasync function findComponents() {\n  const list = await _db__WEBPACK_IMPORTED_MODULE_0__.db.components.reverse().sortBy('updateTime');\n  return list;\n}\nasync function getComponet(key) {\n  const component = await _db__WEBPACK_IMPORTED_MODULE_0__.db.components.get(+key);\n  console.log(component);\n  return component;\n}\nasync function deleteComponet(key) {\n  await _db__WEBPACK_IMPORTED_MODULE_0__.db.components[\"delete\"](key);\n}\nasync function countComponent() {\n  const count = await _db__WEBPACK_IMPORTED_MODULE_0__.db.components.count();\n  return count;\n}\n\n//# sourceURL=webpack://online-conplier/./src/service/compoment.js?");

/***/ })

}]);