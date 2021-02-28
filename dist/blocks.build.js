/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/featured-product/style.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/featured-product/style.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".wprig-productgrid-is-loading {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 200px; }\n\n.wprig-post-list-wrapper {\n  display: block;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  .wprig-post-list-wrapper .wprig-post-list-img {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    overflow: hidden; }\n  .wprig-post-list-wrapper .wprig-post-list-content {\n    -ms-flex: 0 0 100%;\n    flex: 0 0 100%;\n    max-width: 100%;\n    position: relative;\n    width: 100%;\n    min-height: 1px;\n    padding-left: 20px; }\n\n@media screen and (min-width: 767px) {\n  .wprig-post-list-wrapper {\n    display: -ms-flexbox;\n    display: flex; }\n    .wprig-post-list-wrapper .wprig-post-list-img {\n      -ms-flex: 0 0 40%;\n      flex: 0 0 40%;\n      max-width: 40%; }\n    .wprig-post-list-wrapper .wprig-post-list-img + .wprig-post-list-content {\n      -ms-flex: 0 0 60%;\n      flex: 0 0 60%;\n      max-width: 60%; } }\n\n.wprig-productgrid-style-4 {\n  position: relative;\n  overflow: hidden; }\n  .wprig-productgrid-style-4 .wprig-post-grid-img,\n  .wprig-productgrid-style-4 .wprig-post-list-img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    -webkit-background-size: cover;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    overflow: hidden; }\n    .wprig-productgrid-style-4 .wprig-post-grid-img img,\n    .wprig-productgrid-style-4 .wprig-post-list-img img {\n      position: absolute;\n      width: auto;\n      height: auto;\n      min-width: 100%;\n      max-width: none;\n      left: 50%;\n      top: 50%;\n      -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n      min-height: 100%; }\n  .wprig-productgrid-style-4 .wprig-post-grid-content,\n  .wprig-productgrid-style-4 .wprig-post-list-content {\n    opacity: 1;\n    position: relative;\n    z-index: 10;\n    overflow: hidden;\n    width: 100%;\n    max-width: 100%;\n    padding: 20px; }\n  .wprig-productgrid-style-4 > div .wprig-post-grid-img,\n  .wprig-productgrid-style-4 > div .wprig-post-list-img {\n    width: 100%;\n    max-width: 100%; }\n  .wprig-productgrid-style-4:before {\n    position: absolute;\n    content: \"\";\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3;\n    transition: 400ms; }\n  .wprig-productgrid-style-4 .wprig-post-list-top .wprig-post-list-content,\n  .wprig-productgrid-style-4 .wprig-post-list-top .wprig-post-grid-content,\n  .wprig-productgrid-style-4 .wprig-post-grid-top .wprig-post-list-content,\n  .wprig-productgrid-style-4 .wprig-post-grid-top .wprig-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-start; }\n  .wprig-productgrid-style-4 .wprig-post-list-center .wprig-post-list-content,\n  .wprig-productgrid-style-4 .wprig-post-list-center .wprig-post-grid-content,\n  .wprig-productgrid-style-4 .wprig-post-grid-center .wprig-post-list-content,\n  .wprig-productgrid-style-4 .wprig-post-grid-center .wprig-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: center; }\n  .wprig-productgrid-style-4 .wprig-post-list-bottom .wprig-post-list-content,\n  .wprig-productgrid-style-4 .wprig-post-list-bottom .wprig-post-grid-content,\n  .wprig-productgrid-style-4 .wprig-post-grid-bottom .wprig-post-list-content,\n  .wprig-productgrid-style-4 .wprig-post-grid-bottom .wprig-post-grid-content {\n    top: 0;\n    height: 100%;\n    position: absolute;\n    display: grid;\n    align-content: flex-end; }\n\n.wprig-productgrid:not(.wprig-productgrid-style-4) .wprig-post-img.wprig-post-img-zoom-out .wprig-post-image {\n  transition: transform 0.35s;\n  transform: scale(1.2); }\n\n.wprig-productgrid:not(.wprig-productgrid-style-4) .wprig-post-img.wprig-post-img-zoom-in .wprig-post-image {\n  transition: transform 0.35s;\n  transform: scale(1); }\n\n.wprig-productgrid:not(.wprig-productgrid-style-4) .wprig-post-img.wprig-post-img-slide-bottom .wprig-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, 20px, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid:not(.wprig-productgrid-style-4) .wprig-post-img.wprig-post-img-slide-top .wprig-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(0, -20px, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid:not(.wprig-productgrid-style-4) .wprig-post-img.wprig-post-img-slide-right .wprig-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid:not(.wprig-productgrid-style-4) .wprig-post-img.wprig-post-img-slide-left .wprig-post-image {\n  transition: transform 0.35s;\n  transform: translate3d(-20px, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid:hover:not(.wprig-productgrid-style-4) .wprig-post-img-zoom-out .wprig-post-image {\n  transform: scale(1); }\n\n.wprig-productgrid:hover:not(.wprig-productgrid-style-4) .wprig-post-img-zoom-in .wprig-post-image {\n  transform: scale(1.2); }\n\n.wprig-productgrid:hover:not(.wprig-productgrid-style-4) .wprig-post-img-slide-bottom .wprig-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid:hover:not(.wprig-productgrid-style-4) .wprig-post-img-slide-top .wprig-post-image {\n  transform: translate3d(0, 0px, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid:hover:not(.wprig-productgrid-style-4) .wprig-post-img-slide-right .wprig-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid:hover:not(.wprig-productgrid-style-4) .wprig-post-img-slide-left .wprig-post-image {\n  transform: translate3d(0, 0, 0) scale3d(1.2, 1.2, 1); }\n\n.wprig-productgrid {\n  position: relative; }\n  .wprig-productgrid img {\n    display: block; }\n  .wprig-productgrid .wprig-productgrid-title {\n    margin: 0 !important;\n    line-height: 1; }\n    .wprig-productgrid .wprig-productgrid-title a {\n      text-decoration: none !important; }\n      .wprig-productgrid .wprig-productgrid-title a:hover {\n        text-decoration: none; }\n  .wprig-productgrid .wprig-productgrid-intro,\n  .wprig-productgrid .wprig-productgrid-intro p {\n    font-size: 15px;\n    line-height: 24px;\n    margin: 0; }\n  .wprig-productgrid .wprig-productgrid-meta {\n    font-size: 14px;\n    line-height: 22px; }\n  .wprig-productgrid .wprig-productgrid-btn {\n    display: inline-block;\n    text-decoration: none !important; }\n    .wprig-productgrid .wprig-productgrid-btn:hover {\n      text-decoration: none !important; }\n  .wprig-productgrid .wprig-button-fill.is-small {\n    padding: 5px 10px;\n    font-size: 14px; }\n  .wprig-productgrid .wprig-button-fill.is-medium {\n    padding: 8px 15px;\n    font-size: 16px; }\n  .wprig-productgrid .wprig-button-fill.is-large {\n    padding: 13px 20px;\n    font-size: 18px; }\n\n.wprig-post-img {\n  position: relative;\n  overflow: hidden; }\n  .wprig-post-img .wprig-productgrid-cat-position {\n    position: absolute; }\n    .wprig-post-img .wprig-productgrid-cat-position.wprig-productgrid-cat-position-leftTop {\n      top: 20px;\n      left: 20px; }\n    .wprig-post-img .wprig-productgrid-cat-position.wprig-productgrid-cat-position-rightTop {\n      top: 20px;\n      right: 20px; }\n    .wprig-post-img .wprig-productgrid-cat-position.wprig-productgrid-cat-position-leftBottom {\n      bottom: 20px;\n      left: 20px; }\n    .wprig-post-img .wprig-productgrid-cat-position.wprig-productgrid-cat-position-rightBottom {\n      bottom: 20px;\n      right: 20px; }\n\n.wprig-productgrid-category a {\n  transition: 400ms !important;\n  text-decoration: none !important; }\n  .wprig-productgrid-category a:hover {\n    text-decoration: none !important; }\n\n.wprig-productgrid-category.wprig-backend a {\n  pointer-events: none;\n  cursor: default; }\n\n.wprig-productgrid-meta span {\n  padding-left: 12px;\n  position: relative;\n  padding-right: 12px; }\n  .wprig-productgrid-meta span i {\n    font-style: normal;\n    margin-right: 3px; }\n  .wprig-productgrid-meta span:before {\n    position: absolute;\n    content: \"\";\n    background: #d8d8d8;\n    left: -1px;\n    top: 50%;\n    width: 2px;\n    height: 2px;\n    border-radius: 20px;\n    margin-top: -1px; }\n  .wprig-productgrid-meta span:first-child {\n    padding-left: 0; }\n    .wprig-productgrid-meta span:first-child:before {\n      display: none; }\n\n.wprig-productgrid-meta a {\n  text-decoration: none !important; }\n  .wprig-productgrid-meta a:hover {\n    text-decoration: none !important; }\n\n.wprig-post-list-center.wprig-post-list-wrapper {\n  align-items: center; }\n\n.wprig-post-list-top.wprig-post-list-wrapper {\n  align-items: flex-start; }\n\n.wprig-post-list-bottom.wprig-post-list-wrapper {\n  align-items: flex-end; }\n\n.wprig-post-list-view.wprig-productgrid-style-3 .wprig-post-list-wrapper .wprig-post-list-content {\n  background: #fff;\n  padding: 20px;\n  position: relative;\n  z-index: 1; }\n\n.wprig-post-list-view.wprig-productgrid-style-3 .wprig-post-list-wrapper .wprig-post-list-img + .wprig-post-list-content {\n  margin-left: -40px; }\n\n.wprig-post-grid-view.wprig-productgrid-style-3 .wprig-post-grid-content {\n  background: #fff;\n  position: relative;\n  z-index: 1;\n  padding: 20px; }\n\n.wprig-post-grid-view.wprig-productgrid-style-3 .wprig-post-grid-img + .wprig-post-grid-content {\n  margin: -80px auto 0;\n  width: 90%; }\n\n.wprig-post-grid-view.wprig-productgrid-style-3 .wprig-post-grid-left .wprig-post-grid-content {\n  float: left; }\n\n.wprig-post-grid-view.wprig-productgrid-style-3 .wprig-post-grid-right .wprig-post-grid-content {\n  float: right; }\n\n.wprig-productgrid-layout-4 {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px;\n  grid-template-columns: 1fr; }\n  .wprig-productgrid-layout-4 .wprig-post-4-wrap {\n    display: grid;\n    grid-column-gap: 30px;\n    grid-row-gap: 30px;\n    grid-template-columns: 0.5fr 1fr; }\n  .wprig-productgrid-layout-4 .wprig-productgrid:nth-child(1) {\n    grid-column-start: 1;\n    grid-row-start: 1;\n    grid-row-end: 6; }\n    .wprig-productgrid-layout-4 .wprig-productgrid:nth-child(1) .wprig-post-4-wrap {\n      grid-template-columns: 1fr; }\n\n@media (min-width: 767px) {\n  .wprig-productgrid-layout-4 {\n    grid-template-columns: 1fr 1fr; } }\n\n@media screen and (max-width: 992px) {\n  .wprig-post-list-center.wprig-post-list-wrapper {\n    align-items: flex-start; }\n  .wprig-post-list-view.wprig-productgrid-style-3\n.wprig-post-list-wrapper\n.wprig-post-list-img\n+ .wprig-post-list-content {\n    margin-left: 0; } }\n\n.wprig-productgrid-column {\n  display: grid;\n  grid-column-gap: 30px;\n  grid-row-gap: 30px; }\n\n.wprig-productgrid-column-xs1 {\n  grid-template-columns: 1fr; }\n  .wprig-productgrid-column-xs1.wprig-productgrid-layout-5 {\n    column-count: 1; }\n\n.wprig-productgrid-column-xs2 {\n  grid-template-columns: 1fr 1fr; }\n  .wprig-productgrid-column-xs2.wprig-productgrid-layout-5 {\n    column-count: 2; }\n\n.wprig-productgrid-column-xs3 {\n  grid-template-columns: 1fr 1fr 1fr; }\n  .wprig-productgrid-column-xs3.wprig-productgrid-layout-5 {\n    column-count: 3; }\n\n@media (min-width: 767px) {\n  .wprig-productgrid-column-sm1 {\n    grid-template-columns: 1fr; }\n    .wprig-productgrid-column-sm1.wprig-productgrid-layout-5 {\n      column-count: 1; }\n  .wprig-productgrid-column-sm2 {\n    grid-template-columns: 1fr 1fr; }\n    .wprig-productgrid-column-sm2.wprig-productgrid-layout-5 {\n      column-count: 2; }\n  .wprig-productgrid-column-sm3 {\n    grid-template-columns: 1fr 1fr 1fr; }\n    .wprig-productgrid-column-sm3.wprig-productgrid-layout-5 {\n      column-count: 3; } }\n\n@media (min-width: 992px) {\n  .wprig-productgrid-column-md1 {\n    grid-template-columns: 1fr; }\n    .wprig-productgrid-column-md1.wprig-productgrid-layout-5 {\n      column-count: 1; }\n  .wprig-productgrid-column-md2 {\n    grid-template-columns: 1fr 1fr; }\n    .wprig-productgrid-column-md2.wprig-productgrid-layout-5 {\n      column-count: 2; }\n  .wprig-productgrid-column-md3 {\n    grid-template-columns: 1fr 1fr 1fr; }\n    .wprig-productgrid-column-md3.wprig-productgrid-layout-5 {\n      column-count: 3; }\n  .wprig-productgrid-column-md4 {\n    grid-template-columns: 1fr 1fr 1fr; }\n    .wprig-productgrid-column-md4.wprig-productgrid-layout-5 {\n      column-count: 3; }\n  .wprig-productgrid-column-md5 {\n    grid-template-columns: 1fr 1fr 1fr; }\n    .wprig-productgrid-column-md5.wprig-productgrid-layout-5 {\n      column-count: 3; }\n  .wprig-productgrid-column-md6 {\n    grid-template-columns: 1fr 1fr 1fr; }\n    .wprig-productgrid-column-md6.wprig-productgrid-layout-5 {\n      column-count: 3; } }\n\n@media (min-width: 1299px) {\n  .wprig-productgrid-column-md4 {\n    grid-template-columns: 1fr 1fr 1fr 1fr; }\n    .wprig-productgrid-column-md4.wprig-productgrid-layout-5 {\n      column-count: 4; }\n  .wprig-productgrid-column-md5 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; }\n    .wprig-productgrid-column-md5.wprig-productgrid-layout-5 {\n      column-count: 5; }\n  .wprig-productgrid-column-md6 {\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }\n    .wprig-productgrid-column-md6.wprig-productgrid-layout-5 {\n      column-count: 6; } }\n\n.wprig-productgrid-pagination {\n  font-weight: 600;\n  font-size: 16px;\n  color: #363636; }\n  .wprig-productgrid-pagination a,\n  .wprig-productgrid-pagination > span,\n  .wprig-productgrid-pagination button {\n    line-height: 48px;\n    min-width: 50px;\n    text-align: center;\n    background: white;\n    border: 1px solid #BBC0D4;\n    border-radius: 6px;\n    margin-bottom: 10px;\n    display: inline-block;\n    text-decoration: none;\n    color: inherit; }\n    .wprig-productgrid-pagination a:hover,\n    .wprig-productgrid-pagination > span:hover,\n    .wprig-productgrid-pagination button:hover {\n      color: #348EF8; }\n    .wprig-productgrid-pagination a.current, .wprig-productgrid-pagination a.active,\n    .wprig-productgrid-pagination > span.current,\n    .wprig-productgrid-pagination > span.active,\n    .wprig-productgrid-pagination button.current,\n    .wprig-productgrid-pagination button.active {\n      color: #fff;\n      background: #348EF8;\n      border-color: #348EF8; }\n    .wprig-productgrid-pagination a.wprig-pagination-prev span,\n    .wprig-productgrid-pagination > span.wprig-pagination-prev span,\n    .wprig-productgrid-pagination button.wprig-pagination-prev span {\n      margin-right: 4px; }\n    .wprig-productgrid-pagination a.wprig-pagination-next span,\n    .wprig-productgrid-pagination > span.wprig-pagination-next span,\n    .wprig-productgrid-pagination button.wprig-pagination-next span {\n      margin-left: 4px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_featured_product_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/featured-product/block */ "./src/blocks/featured-product/block.js");
/**
 * WPRIG Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
// import './components/renderfield';
// import "./blocks/ct/block";
// import "./blocks/alert/block";
// import "./blocks/accordion/block";
// import "./blocks/advance-heading/block";
// import "./blocks/advance-list/block";
// import "./blocks/animated-headline/block";
// import "./blocks/button/block";
// import "./blocks/buttongroup/block";
// import "./blocks/contact-form/block";
// import "./blocks/counter/block";
// import "./blocks/divider/block";
// import "./blocks/icon/block";
// import "./blocks/iconlist/block";
// import "./blocks/iconlist-connector/block";
// import "./blocks/image/block";
// import "./blocks/image-comparison/block";
// import './blocks/info-box/block'; 
// import "./blocks/map/block";
// import "./blocks/pie-progress/block";
// import "./blocks/pricing/block";
// import "./blocks/post-grid/block";
// import "./blocks/product-grid/block";
// import "./blocks/product-carousel/block";
// import "./blocks/tm-product-carousel/block";
// import "./blocks/sb-product-carousel/block";
// import "./blocks/row/block";
// import './blocks/row/column' 
// import "./blocks/social-icons/block";
// import "./blocks/table-of-contents/block";
// import './blocks/tabs/block';
// import './blocks/tabs/tab/block';
// import "./blocks/team/block";
// import "./blocks/testimonial/block";
// import "./blocks/image-carousel/block";
// import "./blocks/image-grid/block";
// import "./blocks/mosaic-images/block";
// import "./blocks/masonry-image-grid/block";
// import "./blocks/text/block";
// import "./blocks/timeline/block";
 // import "./blocks/progressbar/block";
// import "./blocks/modal/block";
// import "./blocks/video-popup/block";
// import "./blocks/panel/block";
// import "./blocks/wrapper/block";
// import "./blocks/flipbox/block";
// import "./blocks/flipbox/face/block";
// import "./blocks/highlight-box/block";
// import "./blocks/highlight-box/face/block";
// import "./blocks/ihover/block";
// import "./blocks/ihover/face/block";
// import "./blocks/post-carousel/block";
// import "./blocks/custom-block/block";
// import "./blocks/custom-carousel-2/block";
// import "./blocks/custom-carousel-2/carousel-item/block";
// import "./blocks/custom-carousel/block";
// import "./blocks/custom-carousel/item/block";
// import "./blocks/flexboxes/block";
// import "./blocks/flexboxes/flexbox/block";
// import "./blocks/grid-blocks/grid-block-cell/block";
// import "./blocks/grid-blocks/block";
// import "./simple-blocks/advance-heading/block";
// import "./blocks/interactive-banner/block";
// import './plugins';
// import './blocks/pagesettings'
// window.wprigDevice = 'md'
// window.bindCss = false
// import ParseCss from './helpers/parse-css';
// window.globalData = {
//     settings: {
//         colorPreset1: wprig_admin.palette[0],
//         colorPreset2: wprig_admin.palette[1],
//         colorPreset3: wprig_admin.palette[2],
//         colorPreset4: wprig_admin.palette[3],
//         colorPreset5: wprig_admin.palette[4],
//         colorPreset6: wprig_admin.palette[5],
//     }
// };
// wp.data.subscribe(() => {
//     const {
//         isPreviewingPost,
//         isSavingPost,
//         isAutosavingPost,
//         isPublishingPost
//     } = wp.data.select("core/editor");
//     if (isPreviewingPost() || isPublishingPost() || (isSavingPost() && (!isAutosavingPost()))) {
//         if (window.bindCss === false) {
//             setTimeout(() => {
//                 ParseCss(isPreviewingPost() ? false : true);
//             }, 600)
//         }
//     }
// });

/***/ }),

/***/ "./src/blocks/featured-product/Edit.js":
/*!*********************************************!*\
  !*** ./src/blocks/featured-product/Edit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/icons */ "./src/helpers/icons.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/react-in-jsx-scope */
var __ = wp.i18n.__;
var compose = wp.compose.compose;
var withSelect = wp.data.withSelect;
var addQueryArgs = wp.url.addQueryArgs;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component,
    createRef = _wp$element.createRef;
var _wp$date = wp.date,
    dateI18n = _wp$date.dateI18n,
    __experimentalGetSettings = _wp$date.__experimentalGetSettings;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockControls = _wp$blockEditor.BlockControls;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    PanelBody = _wp$components.PanelBody,
    Toolbar = _wp$components.Toolbar,
    Spinner = _wp$components.Spinner,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl;
var _wp$wprigComponents = wp.wprigComponents,
    Range = _wp$wprigComponents.Range,
    ButtonGroup = _wp$wprigComponents.ButtonGroup,
    InlineToolbar = _wp$wprigComponents.Inline.InlineToolbar,
    Toggle = _wp$wprigComponents.Toggle,
    Dropdown = _wp$wprigComponents.Dropdown,
    Select = _wp$wprigComponents.Select,
    Separator = _wp$wprigComponents.Separator,
    ColorAdvanced = _wp$wprigComponents.ColorAdvanced,
    Typography = _wp$wprigComponents.Typography,
    Color = _wp$wprigComponents.Color,
    Border = _wp$wprigComponents.Border,
    BorderRadius = _wp$wprigComponents.BorderRadius,
    Padding = _wp$wprigComponents.Padding,
    BoxShadow = _wp$wprigComponents.BoxShadow,
    Styles = _wp$wprigComponents.Styles,
    Tabs = _wp$wprigComponents.Tabs,
    Tab = _wp$wprigComponents.Tab,
    RadioAdvanced = _wp$wprigComponents.RadioAdvanced,
    Alignment = _wp$wprigComponents.Alignment,
    Margin = _wp$wprigComponents.Margin,
    _wp$wprigComponents$g = _wp$wprigComponents.globalSettings,
    globalSettingsPanel = _wp$wprigComponents$g.globalSettingsPanel,
    animationSettings = _wp$wprigComponents$g.animationSettings,
    CssGenerator = _wp$wprigComponents.CssGenerator.CssGenerator,
    _wp$wprigComponents$C = _wp$wprigComponents.ContextMenu,
    ContextMenu = _wp$wprigComponents$C.ContextMenu,
    handleContextMenu = _wp$wprigComponents$C.handleContextMenu,
    withCSSGenerator = _wp$wprigComponents.withCSSGenerator,
    InspectorTabs = _wp$wprigComponents.InspectorTabs,
    InspectorTab = _wp$wprigComponents.InspectorTab;

var CATEGORIES_LIST_QUERY = {
  per_page: -1
};

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    _this = _super.apply(this, arguments);

    _defineProperty(_assertThisInitialized(_this), "renderFeaturedImage", function (post) {
      var _this$props$attribute = _this.props.attributes,
          layout = _this$props$attribute.layout,
          style = _this$props$attribute.style,
          imgSize = _this$props$attribute.imgSize,
          imageAnimation = _this$props$attribute.imageAnimation,
          showCategory = _this$props$attribute.showCategory,
          categoryPosition = _this$props$attribute.categoryPosition;
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(layout === 1 ? 'wprig-post-list-img' : 'wprig-post-grid-img', " wprig-post-img wprig-post-img-").concat(imageAnimation)
      }, /*#__PURE__*/React.createElement("img", {
        className: "wprig-post-image",
        src: post.image[0] && post.image[0]
      }), showCategory == 'badge' && style !== 4 && /*#__PURE__*/React.createElement("div", {
        className: "wprig-productgrid-cat-position wprig-productgrid-cat-position-".concat(categoryPosition)
      }, /*#__PURE__*/React.createElement("span", {
        className: "wprig-productgrid-category wprig-backend",
        dangerouslySetInnerHTML: {
          __html: post.wprig_category
        }
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderCardContent", function (post) {
      var _this$props$attribute2 = _this.props.attributes,
          layout = _this$props$attribute2.layout,
          style = _this$props$attribute2.style,
          readmoreStyle = _this$props$attribute2.readmoreStyle,
          showCategory = _this$props$attribute2.showCategory,
          categoryPosition = _this$props$attribute2.categoryPosition,
          showTitle = _this$props$attribute2.showTitle,
          titlePosition = _this$props$attribute2.titlePosition,
          showAuthor = _this$props$attribute2.showAuthor,
          showDates = _this$props$attribute2.showDates,
          showComment = _this$props$attribute2.showComment,
          showExcerpt = _this$props$attribute2.showExcerpt,
          excerptLimit = _this$props$attribute2.excerptLimit,
          showReadMore = _this$props$attribute2.showReadMore,
          buttonText = _this$props$attribute2.buttonText,
          readmoreSize = _this$props$attribute2.readmoreSize;
      var title = /*#__PURE__*/React.createElement("h3", {
        className: "wprig-productgrid-title"
      }, /*#__PURE__*/React.createElement("a", null, post.title.rendered));
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(layout === 1 ? 'wprig-post-list-content' : 'wprig-post-grid-content')
      }, showCategory === 'default' && /*#__PURE__*/React.createElement("span", {
        className: "wprig-productgrid-category wprig-backend",
        dangerouslySetInnerHTML: {
          __html: post.wprig_category
        }
      }), showCategory == 'badge' && style === 4 && /*#__PURE__*/React.createElement("div", {
        className: "wprig-productgrid-cat-position wprig-productgrid-cat-position-".concat(categoryPosition)
      }, /*#__PURE__*/React.createElement("span", {
        className: "wprig-productgrid-category wprig-backend",
        dangerouslySetInnerHTML: {
          __html: post.wprig_category
        }
      })), showTitle && titlePosition == true && post.title, post.title, showTitle && titlePosition == false && post.title, showExcerpt && /*#__PURE__*/React.createElement("div", {
        className: "wprig-productgrid-intro",
        dangerouslySetInnerHTML: {
          __html: _this.truncate(post.excerpt.rendered, excerptLimit)
        }
      }), showReadMore && /*#__PURE__*/React.createElement("div", {
        className: "wprig-productgrid-btn-wrapper"
      }, /*#__PURE__*/React.createElement("a", {
        className: "wprig-productgrid-btn wprig-button-".concat(readmoreStyle, " is-").concat(readmoreSize)
      }, buttonText)));
    });

    _this.state = {
      device: 'md',
      spacer: true,
      categoriesList: [],
      posts: [],
      loading: true
    };
    _this.wprigContextMenu = createRef();
    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          setAttributes = _this$props.setAttributes,
          clientId = _this$props.clientId,
          uniqueId = _this$props.attributes.uniqueId;
      this.isStillMounted = true;
      this.fetchRequest = wp.apiFetch({
        path: addQueryArgs('/wp/v2/categories', CATEGORIES_LIST_QUERY)
      }).then(function (categoriesList) {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: categoriesList
          });
        }
      })["catch"](function () {
        if (_this2.isStillMounted) {
          _this2.setState({
            categoriesList: []
          });
        }
      });

      var _client = clientId.substr(0, 6);

      if (!uniqueId) {
        setAttributes({
          uniqueId: _client
        });
      } else if (uniqueId && uniqueId != _client) {
        setAttributes({
          uniqueId: _client
        });
      }

      this.runApiFetch();
    }
  }, {
    key: "runApiFetch",
    value: function runApiFetch() {
      var _this3 = this;

      wp.apiFetch({
        path: 'wprig/posts/?count=8&post_type=product&order=DESC&status=all&_locale=user'
      }).then(function (data) {
        _this3.setState({
          posts: data,
          loading: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isStillMounted = false;
    }
  }, {
    key: "truncate",
    value: function truncate(value, limit) {
      if (value.split(' ').length > limit) {
        return value.split(' ').splice(0, limit).join(' ');
      }

      return value;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      console.log(this.props);
    }
  }, {
    key: "renderCarouselContent",
    value: function renderCarouselContent(posts) {
      var _this4 = this;

      var _this$props$attribute3 = this.props.attributes,
          layout = _this$props$attribute3.layout,
          contentPosition = _this$props$attribute3.contentPosition,
          enableOnSale = _this$props$attribute3.enableOnSale,
          girdContentPosition = _this$props$attribute3.girdContentPosition,
          style = _this$props$attribute3.style,
          showImages = _this$props$attribute3.showImages;
      return posts.map(function (post) {
        if (post) {
          return /*#__PURE__*/React.createElement("div", {
            className: "wprig-ps-product-carousel ".concat(layout === 1 ? 'wprig-post-list-view' : 'wprig-post-grid-view', " wprig-ps-product-carousel-style-").concat(style)
          }, /*#__PURE__*/React.createElement("div", {
            className: "".concat(layout === 1 ? "wprig-post-list-wrapper wprig-post-list-".concat(layout === 2 && style === 3 ? contentPosition : girdContentPosition) : "wprig-post-grid-wrapper wprig-post-grid-".concat(layout === 2 && style === 3 ? contentPosition : girdContentPosition))
          }, _this4.renderFeaturedImage(post), showImages && post.wprig_featured_image_url && _this4.renderFeaturedImage(post), _this4.renderCardContent(post)));
        } else return null;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props2 = this.props,
          setAttributes = _this$props2.setAttributes,
          name = _this$props2.name,
          clientId = _this$props2.clientId,
          attributes = _this$props2.attributes,
          taxonomyList = _this$props2.taxonomyList,
          _this$props2$attribut = _this$props2.attributes,
          uniqueId = _this$props2$attribut.uniqueId,
          className = _this$props2$attribut.className,
          taxonomy = _this$props2$attribut.taxonomy,
          categories = _this$props2$attribut.categories,
          tags = _this$props2$attribut.tags,
          order = _this$props2$attribut.order,
          orderBy = _this$props2$attribut.orderBy,
          postsToShow = _this$props2$attribut.postsToShow,
          enablePagination = _this$props2$attribut.enablePagination,
          page = _this$props2$attribut.page,
          paginationType = _this$props2$attribut.paginationType,
          pageAlignment = _this$props2$attribut.pageAlignment,
          paginationTypography = _this$props2$attribut.paginationTypography,
          pagesColor = _this$props2$attribut.pagesColor,
          pagesHoverColor = _this$props2$attribut.pagesHoverColor,
          pagesActiveColor = _this$props2$attribut.pagesActiveColor,
          pagesbgColor = _this$props2$attribut.pagesbgColor,
          pagesbgHoverColor = _this$props2$attribut.pagesbgHoverColor,
          pagesbgActiveColor = _this$props2$attribut.pagesbgActiveColor,
          pagesBorder = _this$props2$attribut.pagesBorder,
          pagesHoverBorder = _this$props2$attribut.pagesHoverBorder,
          pagesActiveBorder = _this$props2$attribut.pagesActiveBorder,
          pagesShadow = _this$props2$attribut.pagesShadow,
          pagesHoverShadow = _this$props2$attribut.pagesHoverShadow,
          pagesActiveShadow = _this$props2$attribut.pagesActiveShadow,
          pagesBorderRadius = _this$props2$attribut.pagesBorderRadius,
          pagePadding = _this$props2$attribut.pagePadding,
          pageMargin = _this$props2$attribut.pageMargin,
          showImages = _this$props2$attribut.showImages,
          imgSize = _this$props2$attribut.imgSize,
          enableFixedHeight = _this$props2$attribut.enableFixedHeight,
          fixedHeight = _this$props2$attribut.fixedHeight,
          imageRadius = _this$props2$attribut.imageRadius,
          imageAnimation = _this$props2$attribut.imageAnimation,
          cardBackground = _this$props2$attribut.cardBackground,
          cardBorder = _this$props2$attribut.cardBorder,
          cardBorderRadius = _this$props2$attribut.cardBorderRadius,
          cardPadding = _this$props2$attribut.cardPadding,
          cardBoxShadow = _this$props2$attribut.cardBoxShadow,
          cardSpace = _this$props2$attribut.cardSpace,
          stackBg = _this$props2$attribut.stackBg,
          stackWidth = _this$props2$attribut.stackWidth,
          stackSpace = _this$props2$attribut.stackSpace,
          stackBorderRadius = _this$props2$attribut.stackBorderRadius,
          stackPadding = _this$props2$attribut.stackPadding,
          stackBoxShadow = _this$props2$attribut.stackBoxShadow,
          readmoreStyle = _this$props2$attribut.readmoreStyle,
          buttonText = _this$props2$attribut.buttonText,
          readmoreSize = _this$props2$attribut.readmoreSize,
          readmoreCustomSize = _this$props2$attribut.readmoreCustomSize,
          readmoreTypography = _this$props2$attribut.readmoreTypography,
          readmoreBg = _this$props2$attribut.readmoreBg,
          readmoreHoverBg = _this$props2$attribut.readmoreHoverBg,
          readmoreBorder = _this$props2$attribut.readmoreBorder,
          readmoreBorderRadius = _this$props2$attribut.readmoreBorderRadius,
          readmoreBoxShadow = _this$props2$attribut.readmoreBoxShadow,
          readmoreColor = _this$props2$attribut.readmoreColor,
          readmoreColor2 = _this$props2$attribut.readmoreColor2,
          readmoreHoverColor = _this$props2$attribut.readmoreHoverColor,
          layout = _this$props2$attribut.layout,
          style = _this$props2$attribut.style,
          column = _this$props2$attribut.column,
          showDates = _this$props2$attribut.showDates,
          showComment = _this$props2$attribut.showComment,
          showAuthor = _this$props2$attribut.showAuthor,
          showCategory = _this$props2$attribut.showCategory,
          categoryPosition = _this$props2$attribut.categoryPosition,
          showExcerpt = _this$props2$attribut.showExcerpt,
          excerptLimit = _this$props2$attribut.excerptLimit,
          showReadMore = _this$props2$attribut.showReadMore,
          showTitle = _this$props2$attribut.showTitle,
          titlePosition = _this$props2$attribut.titlePosition,
          showSeparator = _this$props2$attribut.showSeparator,
          separatorColor = _this$props2$attribut.separatorColor,
          separatorHeight = _this$props2$attribut.separatorHeight,
          separatorSpace = _this$props2$attribut.separatorSpace,
          titleTypography = _this$props2$attribut.titleTypography,
          metaTypography = _this$props2$attribut.metaTypography,
          excerptTypography = _this$props2$attribut.excerptTypography,
          categoryTypography = _this$props2$attribut.categoryTypography,
          titleColor = _this$props2$attribut.titleColor,
          titleOverlayColor = _this$props2$attribut.titleOverlayColor,
          metaColor = _this$props2$attribut.metaColor,
          metaOverlayColor = _this$props2$attribut.metaOverlayColor,
          titleHoverColor = _this$props2$attribut.titleHoverColor,
          excerptColor = _this$props2$attribut.excerptColor,
          excerptColor2 = _this$props2$attribut.excerptColor2,
          categoryColor = _this$props2$attribut.categoryColor,
          categoryColor2 = _this$props2$attribut.categoryColor2,
          categoryHoverColor = _this$props2$attribut.categoryHoverColor,
          categoryHoverColor2 = _this$props2$attribut.categoryHoverColor2,
          categoryBackground = _this$props2$attribut.categoryBackground,
          categoryHoverBackground = _this$props2$attribut.categoryHoverBackground,
          categoryRadius = _this$props2$attribut.categoryRadius,
          categoryPadding = _this$props2$attribut.categoryPadding,
          badgePosition = _this$props2$attribut.badgePosition,
          badgePadding = _this$props2$attribut.badgePadding,
          bgColor = _this$props2$attribut.bgColor,
          border = _this$props2$attribut.border,
          borderRadius = _this$props2$attribut.borderRadius,
          padding = _this$props2$attribut.padding,
          boxShadow = _this$props2$attribut.boxShadow,
          contentPosition = _this$props2$attribut.contentPosition,
          girdContentPosition = _this$props2$attribut.girdContentPosition,
          overlayBg = _this$props2$attribut.overlayBg,
          overlayHoverBg = _this$props2$attribut.overlayHoverBg,
          overlayBlend = _this$props2$attribut.overlayBlend,
          overlayHeight = _this$props2$attribut.overlayHeight,
          overlaySpace = _this$props2$attribut.overlaySpace,
          overlayBorderRadius = _this$props2$attribut.overlayBorderRadius,
          columnGap = _this$props2$attribut.columnGap,
          contentPadding = _this$props2$attribut.contentPadding,
          titleSpace = _this$props2$attribut.titleSpace,
          categorySpace = _this$props2$attribut.categorySpace,
          metaSpace = _this$props2$attribut.metaSpace,
          excerptSpace = _this$props2$attribut.excerptSpace,
          animation = _this$props2$attribut.animation,
          globalZindex = _this$props2$attribut.globalZindex,
          enablePosition = _this$props2$attribut.enablePosition,
          selectPosition = _this$props2$attribut.selectPosition,
          positionXaxis = _this$props2$attribut.positionXaxis,
          positionYaxis = _this$props2$attribut.positionYaxis,
          hideTablet = _this$props2$attribut.hideTablet,
          hideMobile = _this$props2$attribut.hideMobile,
          globalCss = _this$props2$attribut.globalCss;
      var _this$state = this.state,
          device = _this$state.device,
          posts = _this$state.posts;
      var pages = Math.ceil(wprig_admin.publishedPosts / postsToShow);
      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, {
        key: "inspector"
      }, /*#__PURE__*/React.createElement(InspectorTabs, {
        tabs: ['style', 'advance']
      }, /*#__PURE__*/React.createElement(InspectorTab, {
        key: 'style'
      }, /*#__PURE__*/React.createElement(PanelBody, {
        initialOpen: false,
        title: __('Carousel')
      }, /*#__PURE__*/React.createElement(Range, {
        label: __('Items'),
        value: postsToShow,
        onChange: function onChange(val) {
          return setAttributes({
            postsToShow: val
          });
        },
        min: 1,
        max: 15,
        responsive: true,
        device: device,
        onDeviceChange: function onDeviceChange(value) {
          return _this5.setState({
            device: value
          });
        }
      }))), /*#__PURE__*/React.createElement(InspectorTab, {
        key: 'advance'
      }, animationSettings(uniqueId, animation, setAttributes)))), /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement(InlineToolbar, _extends({
        data: [{
          name: 'InlineSpacer',
          key: 'spacer',
          responsive: true,
          unit: ['px', 'em', '%']
        }]
      }, this.props, {
        prevState: this.state
      })))), globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes), /*#__PURE__*/React.createElement("div", null, this.state.loading ? /*#__PURE__*/React.createElement(Spinner, null) : /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("div", {
        // onContextMenu={event => handleContextMenu(event, this.wprigContextMenu.current)}
        className: "wprig-ps-product-carousel-wrapper wprig-ps-product-carousel-layout-".concat(layout, " ").concat(layout === 2 ? 'wprig-ps-product-carousel-column wprig-ps-product-carousel-column-md' + column.md + ' ' + 'wprig-ps-product-carousel-column-sm' + column.sm + ' ' + 'wprig-ps-product-carousel-column-xs' + column.xs : '')
      }, posts && this.renderCarouselContent(posts)), /*#__PURE__*/React.createElement("div", {
        ref: this.wprigContextMenu,
        className: "wprig-context-menu-wraper"
      }, /*#__PURE__*/React.createElement(ContextMenu, {
        name: name,
        clientId: clientId,
        attributes: attributes,
        setAttributes: setAttributes,
        wprigContextMenu: this.wprigContextMenu.current
      })))));
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, props) {
  return {};
}), withCSSGenerator()])(Edit));

/***/ }),

/***/ "./src/blocks/featured-product/block.js":
/*!**********************************************!*\
  !*** ./src/blocks/featured-product/block.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/featured-product/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit */ "./src/blocks/featured-product/Edit.js");


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('wprig-wc/featured-products', {
  title: __('Featured Products'),
  description: 'Fetch Products posts and display them beautifully .',
  icon: 'universal-access-alt',
  category: 'wprig-blocks',
  supports: {
    align: ['center', 'wide', 'full']
  },
  keywords: [__('Product'), __('Featured Product Grid'), __('Grid')],
  example: {},
  edit: _Edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/featured-product/style.scss":
/*!************************************************!*\
  !*** ./src/blocks/featured-product/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/blocks/featured-product/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/helpers/icons.js":
/*!******************************!*\
  !*** ./src/helpers/icons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _React$createElement, _React$createElement2, _React$createElement3;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var icons = {};
var img_path = wprig_admin.plugin + 'assets/img/blocks';
icons.wprig = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M15.8 8c0-2.2-.8-4-2.3-5.5-1.5-1.5-3.4-2.3-5.5-2.3s-4 .8-5.5 2.3c-1.5 1.5-2.3 3.3-2.3 5.5s.8 4 2.3 5.5c1.5 1.5 3.3 2.3 5.5 2.3.9 0 1.8-.1 2.6-.4l-2.2-2.3c-.1-.1-.3-.2-.4-.2-1.4 0-2.5-.5-3.4-1.4-1-.9-1.4-2.1-1.4-3.5s.5-2.6 1.4-3.5c.9-.9 2-1.4 3.4-1.4s2.5.5 3.4 1.4c.9.9 1.4 2.1 1.4 3.5 0 .7-.1 1.4-.4 2-.2.5-.8.6-1.2.2-1.1-1.1-2.8-1.2-4-.2l2.5 2.6 2.1 2.2c.9.9 2.4 1 3.4.1l.3-.3-1.3-1.3c-.2-.2-.2-.4 0-.6 1-1.3 1.6-2.9 1.6-4.7z"
}));
icons.solid = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "19",
  height: "2"
}, /*#__PURE__*/React.createElement("switch", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h19v2H0z"
}))));
icons.dot = /*#__PURE__*/React.createElement("svg", {
  id: "Layer_1",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "2"
}, /*#__PURE__*/React.createElement("switch", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", {
  transform: "translate(-1378 -121)"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(1229 110)"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(149 11)"
}, /*#__PURE__*/React.createElement("circle", {
  "class": "st0",
  cx: "1",
  cy: "1",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  "class": "st0",
  cx: "17",
  cy: "1",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  "class": "st0",
  cx: "5",
  cy: "1",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  "class": "st0",
  cx: "13",
  cy: "1",
  r: "1"
}), /*#__PURE__*/React.createElement("circle", {
  "class": "st0",
  cx: "9",
  cy: "1",
  r: "1"
}))))))));
icons.dash = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "2"
}, /*#__PURE__*/React.createElement("switch", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M18 2h-2V0h2v2zm-4 0h-2V0h2v2zm-4 0H8V0h2v2zM6 2H4V0h2v2zM2 2H0V0h2v2z"
}))));
icons.wave = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "21",
  height: "4"
}, /*#__PURE__*/React.createElement("switch", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M8 3.5c-.8 0-1.7-.3-2.5-.9C4 1.5 2.4 1.5.7 2.6c-.2.1-.5.1-.7-.2-.1-.2-.1-.5.2-.7 2-1.3 4-1.3 5.8 0 1.5 1 2.8 1 4.2-.2 1.6-1.4 3.4-1.4 5.3 0 1.5 1.1 3.1 1.2 4.7.1.2-.1.5-.1.7.1.1.2.1.5-.1.7-2 1.3-3.9 1.3-5.8-.1-1.5-1.1-2.9-1.1-4.1 0C9.9 3.1 9 3.5 8 3.5z"
}))));
icons.vertical_top = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(1)",
  fill: "none"
}, /*#__PURE__*/React.createElement("rect", {
  "class": "wprig-svg-fill",
  x: "4",
  y: "4",
  width: "6",
  height: "12",
  rx: "1"
}), /*#__PURE__*/React.createElement("path", {
  "class": "wprig-svg-stroke",
  d: "M0 1h14",
  "stroke-width": "2",
  "stroke-linecap": "square"
})));
icons.vertical_middle = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  fill: "none"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(1 1)"
}, /*#__PURE__*/React.createElement("rect", {
  "class": "wprig-svg-fill",
  x: "4",
  width: "6",
  height: "14",
  rx: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 7h2",
  "class": "wprig-svg-stroke",
  "stroke-width": "2",
  "stroke-linecap": "square"
})), /*#__PURE__*/React.createElement("path", {
  d: "M13 8h2",
  "class": "wprig-svg-stroke",
  "stroke-width": "2",
  "stroke-linecap": "square"
})));
icons.vertical_bottom = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(1)",
  fill: "none"
}, /*#__PURE__*/React.createElement("rect", {
  "class": "wprig-svg-fill",
  x: "4",
  width: "6",
  height: "12",
  rx: "1"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 15h14",
  "class": "wprig-svg-stroke",
  "stroke-width": "2",
  "stroke-linecap": "square"
})));
icons.icon_classic = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/icon/classic.svg"),
  alt: __('Classic')
});
icons.icon_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/icon/fill.svg"),
  alt: __('Fill')
});
icons.icon_line = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/icon/outline.svg"),
  alt: __('Underline')
});
icons.btn_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/button/fill.svg"),
  alt: __('Fill')
});
icons.btn_outline = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/button/outline.svg"),
  alt: __('Outline')
});
icons.pie_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/pieprogress/fill.svg"),
  alt: __('Fill')
});
icons.pie_outline = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/pieprogress/outline.svg"),
  alt: __('Outline')
});
icons.pie_outline_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/pieprogress/outline-fill.svg"),
  alt: __('Outline Fill')
});
icons.corner_square = /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 1h10.967v10.763",
  "stroke-width": "2",
  className: "wprig-svg-stroke",
  fill: "none"
}));
icons.corner_rounded = /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 1h6.967c2.209 0 4 1.791 4 4v6.763",
  "stroke-width": "2",
  className: "wprig-svg-stroke",
  fill: "none"
}));
icons.corner_round = /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 1h1.967c4.971 0 9 4.029 9 9v1.763",
  "stroke-width": "2",
  className: "wprig-svg-stroke",
  fill: "none"
}));
icons.tab_tabs = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/tab/tabs.svg"),
  alt: __('Tabs')
});
icons.tab_pills = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/tab/pills.svg"),
  alt: __('Pills')
});
icons.tab_underline = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/tab/underline.svg"),
  alt: __('Underline')
});
icons.verticaltabs_1 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/verticaltabs/layout-1.svg"),
  alt: __('Layout 1')
});
icons.verticaltabs_2 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/verticaltabs/layout-2.svg"),
  alt: __('Layout 2')
});
icons.verticaltabs_3 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/verticaltabs/layout-3.svg"),
  alt: __('Layout 3')
});
icons.social_normal = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "//socialicon/normal.svg"),
  alt: __('Normal')
});
icons.social_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "//socialicon/fill.svg"),
  alt: __('Fill')
});
icons.accordion_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/accordion/fill.svg"),
  alt: __('Fill')
});
icons.accordion_classic = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/accordion/classic.svg"),
  alt: __('Classic')
});
icons.infobox_1 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/infobox/1.svg"),
  alt: __('Layout 1')
});
icons.infobox_2 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/infobox/2.svg"),
  alt: __('Layout 2')
});
icons.infobox_3 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/infobox/3.svg"),
  alt: __('Layout 3')
});
icons.infobox_4 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/infobox/4.svg"),
  alt: __('Layout 4')
});
icons.testimonial_1 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/testimonial/1.svg"),
  alt: __('Testimonial 1')
});
icons.testimonial_2 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/testimonial/2.svg"),
  alt: __('Testimonial 2')
});
icons.testimonial_3 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/testimonial/3.svg"),
  alt: __('Testimonial 3')
});
icons.avatar_left = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/testimonial/avatars/1.svg"),
  alt: __('Avatar Left')
});
icons.avatar_right = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/testimonial/avatars/2.svg"),
  alt: __('Avatar Right')
});
icons.avatar_top = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/testimonial/avatars/3.svg"),
  alt: __('Avatar Top')
});
icons.avatar_bottom = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/testimonial/avatars/4.svg"),
  alt: __('Avatar Bottom')
});
icons.team_1 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/team/1.svg"),
  alt: __('Layout 1')
});
icons.team_2 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/team/2.svg"),
  alt: __('Layout 2')
});
icons.team_3 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/team/3.svg"),
  alt: __('Layout 3')
});
icons.list_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/list/1.svg"),
  alt: __('Fill')
});
icons.list_classic = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/list/2.svg"),
  alt: __('Classic')
});
icons.form_classic = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/form/classic.svg"),
  alt: __('Classic')
});
icons.form_material = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/form/material.svg"),
  alt: __('Material')
});
icons.videopopup_fill = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/videopopup/fill.svg"),
  alt: __('Fill')
});
icons.videopopup_classic = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/videopopup/classic.svg"),
  alt: __('Classic')
});
icons.postgrid_1 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/1.svg"),
  alt: __('Layout 1')
});
icons.postgrid_2 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/2.svg"),
  alt: __('Layout 2')
});
icons.postgrid_3 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/pro1.svg"),
  alt: __('Layout 3')
});
icons.postgrid_4 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/pro2.svg"),
  alt: __('Layout 4')
});
icons.postgrid_5 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/pro3.svg"),
  alt: __('Layout 4')
});
icons.postgrid_design_1 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/11.svg"),
  alt: __('Design 1')
});
icons.postgrid_design_2 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/12.svg"),
  alt: __('Design 2')
});
icons.postgrid_design_3 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/13.svg"),
  alt: __('Design 3')
});
icons.postgrid_design_4 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/14.svg"),
  alt: __('Design 4')
});
icons.postgrid_design_5 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/15.svg"),
  alt: __('Design 5')
});
icons.postgrid_design_6 = /*#__PURE__*/React.createElement("img", {
  src: "".concat(img_path, "/postgrid/16.svg"),
  alt: __('Design 6')
});
icons.h1 = /*#__PURE__*/React.createElement("svg", {
  width: "17",
  height: "13",
  viewBox: "0 0 17 13",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  className: "wprig-svg-fill",
  "fill-rule": "nonzero"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.809 13h-1.147v-4.609c0-.55.013-.986.039-1.309l-.276.259c-.109.094-.474.394-1.096.898l-.576-.728 2.1-1.65h.957v7.139z"
})));
icons.h2 = /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "13",
  viewBox: "0 0 19 13",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  className: "wprig-svg-fill",
  "fill-rule": "nonzero"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.278 13h-4.839v-.869l1.841-1.851c.544-.557.904-.951 1.082-1.184.177-.233.307-.452.388-.657.081-.205.122-.425.122-.659 0-.322-.097-.576-.291-.762-.194-.186-.461-.278-.803-.278-.273 0-.538.05-.793.151-.256.101-.551.283-.886.547l-.62-.757c.397-.335.783-.573 1.157-.713s.773-.21 1.196-.21c.664 0 1.196.173 1.597.52.4.347.601.813.601 1.399 0 .322-.058.628-.173.918-.116.29-.293.588-.532.896-.239.308-.637.723-1.194 1.248l-1.24 1.201v.049h3.389v1.011z"
})));
icons.h3 = /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "14",
  viewBox: "0 0 19 14",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  className: "wprig-svg-fill",
  "fill-rule": "nonzero"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.01 7.502c0 .452-.132.829-.396 1.13-.264.301-.635.504-1.113.608v.039c.573.072 1.003.25 1.289.535.286.285.43.663.43 1.135 0 .687-.243 1.217-.728 1.589-.485.373-1.175.559-2.07.559-.791 0-1.458-.129-2.002-.386v-1.021c.303.15.623.265.962.347.339.081.664.122.977.122.553 0 .967-.103 1.24-.308.273-.205.41-.522.41-.952 0-.381-.151-.661-.454-.84-.303-.179-.778-.269-1.426-.269h-.62v-.933h.63c1.139 0 1.709-.394 1.709-1.182 0-.306-.099-.542-.298-.708-.199-.166-.492-.249-.879-.249-.27 0-.531.038-.781.115-.251.076-.547.225-.889.447l-.562-.801c.654-.482 1.414-.723 2.28-.723.719 0 1.281.155 1.685.464.404.309.605.736.605 1.279z"
})));
icons.h4 = /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "13",
  viewBox: "0 0 19 13",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  className: "wprig-svg-fill",
  "fill-rule": "nonzero"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.532 11.442h-.962v1.558h-1.118v-1.558h-3.262v-.884l3.262-4.717h1.118v4.648h.962v.952zm-2.08-.952v-1.792c0-.638.016-1.16.049-1.567h-.039c-.091.215-.234.475-.43.781l-1.772 2.578h2.192z"
})));
icons.h5 = /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "14",
  viewBox: "0 0 19 14",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  className: "wprig-svg-fill",
  "fill-rule": "nonzero"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.861 8.542c.719 0 1.289.19 1.709.571.42.381.63.9.63 1.558 0 .762-.238 1.357-.715 1.785-.477.428-1.155.642-2.034.642-.798 0-1.424-.129-1.88-.386v-1.04c.264.15.566.265.908.347.342.081.659.122.952.122.518 0 .911-.116 1.182-.347.27-.231.405-.57.405-1.016 0-.853-.544-1.279-1.631-1.279-.153 0-.342.015-.566.046-.225.031-.422.066-.591.105l-.513-.303.273-3.486h3.711v1.021h-2.7l-.161 1.768.417-.068c.164-.026.365-.039.603-.039z"
})));
icons.h6 = /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "14",
  viewBox: "0 0 19 14",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  className: "wprig-svg-fill",
  "fill-rule": "nonzero"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10.83 13h-2.109v-5.792h-5.924v5.792h-2.101v-12.85h2.101v5.256h5.924v-5.256h2.109z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.459 9.958c0-2.793 1.138-4.189 3.413-4.189.358 0 .661.028.908.083v.957c-.247-.072-.534-.107-.859-.107-.765 0-1.34.205-1.724.615-.384.41-.592 1.068-.625 1.973h.059c.153-.264.368-.468.645-.613.277-.145.602-.217.977-.217.648 0 1.152.199 1.514.596.361.397.542.936.542 1.616 0 .749-.209 1.34-.627 1.775-.418.435-.989.652-1.711.652-.511 0-.955-.123-1.333-.369s-.668-.604-.872-1.074c-.203-.47-.305-1.036-.305-1.697zm2.49 2.192c.394 0 .697-.127.911-.381.213-.254.32-.617.32-1.089 0-.41-.1-.732-.3-.967-.2-.234-.5-.352-.901-.352-.247 0-.475.053-.684.159-.208.106-.373.251-.493.435s-.181.372-.181.564c0 .459.125.846.374 1.16.249.314.567.471.955.471z"
})));
icons.p = /*#__PURE__*/React.createElement("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 1792 1792",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"
}));
icons.span = /*#__PURE__*/React.createElement("svg", {
  width: "20px",
  height: "20px",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, /*#__PURE__*/React.createElement("rect", {
  x: "0",
  fill: "none",
  width: "20px",
  height: "20px"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9 6l-4 4 4 4-1 2-6-6 6-6zm2 8l4-4-4-4 1-2 6 6-6 6z"
})));
icons.div = /*#__PURE__*/React.createElement("svg", {
  width: "20px",
  height: "20px",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, /*#__PURE__*/React.createElement("rect", {
  x: "0",
  fill: "none",
  width: "20px",
  height: "20px"
}), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  d: "M9 6l-4 4 4 4-1 2-6-6 6-6zm2 8l4-4-4-4 1-2 6 6-6 6z"
})));
icons.pricing = {
  1: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/1.svg"),
    alt: __('Layout 1')
  }),
  2: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/2.svg"),
    alt: __('Layout 2')
  }),
  3: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/3.svg"),
    alt: __('Layout 3')
  }),
  4: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/4.svg"),
    alt: __('Layout 4')
  }),
  5: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/5.svg"),
    alt: __('Layout 5')
  }),
  6: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/6.svg"),
    alt: __('Layout 6')
  })
};
icons.pricing.badge = {
  1: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/badges/1.svg"),
    alt: __('Badge 1')
  }),
  2: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/badges/2.svg"),
    alt: __('Badge 2')
  }),
  3: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/badges/3.svg"),
    alt: __('Badge 3')
  }),
  4: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/badges/4.svg"),
    alt: __('Badge 4')
  }),
  5: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/badges/5.svg"),
    alt: __('Badge 5')
  }),
  6: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/pricing/badges/6.svg"),
    alt: __('Badge 6')
  })
};
icons.image = {
  simple: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/image/simple.svg"),
    alt: __('Simple')
  }),
  blurb: /*#__PURE__*/React.createElement("img", {
    src: "".concat(img_path, "/image/blurb.svg"),
    alt: __('Blurb')
  })
};
icons.copy = /*#__PURE__*/React.createElement("svg", {
  width: "20px",
  height: "15px",
  viewBox: "0 0 1792 1792",
  "class": "dashicon",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"
}));
icons.paste = /*#__PURE__*/React.createElement("svg", {
  width: "20px",
  height: "15px",
  viewBox: "0 0 1792 1792",
  "class": "dashicon",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zm256-1440v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm256 672h299l-299-299v299zm512 128v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"
}));
icons.spacing = {
  top: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 20h16v2h-16z"
  }))),
  right: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 20h16v2h-16z"
  }))),
  bottom: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M3 20h16v2h-16z"
  }))),
  left: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 20h16v2h-16z"
  })))
};
icons.border = {
  top: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 20h16v2h-16z"
  }))),
  right: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 20h16v2h-16z"
  }))),
  bottom: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M3 20h16v2h-16z"
  }))),
  left: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#2184F9",
    d: "M0 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M20 3h2v16h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 0h16v2h-16z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#CACCCE",
    d: "M3 20h16v2h-16z"
  })))
};
icons.borderRadius = {
  topLeft: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71z",
    id: "Path",
    fill: "#2184F9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71zM1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77zM13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z",
    fill: "#CACCCE"
  }))),
  topRight: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71z",
    id: "Path",
    fill: "#CACCCE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71z",
    id: "Path",
    fill: "#2184F9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77zM13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z",
    fill: "#CACCCE"
  }))),
  bottomRight: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71zM13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71zM1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77z",
    id: "Path",
    fill: "#CACCCE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z",
    fill: "#2184F9"
  }))),
  bottomLeft: /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1.88 0c-1.038 0-1.88.842-1.88 1.88v6.71h1.88v-5.77c0-.519.421-.94.94-.94h5.77v-1.88h-6.71zM13.41 0v1.88h5.77c.519 0 .94.421.94.94v5.77h1.88v-6.71c0-1.038-.842-1.88-1.88-1.88h-6.71z",
    id: "Path",
    fill: "#CACCCE"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1.88 13.41h-1.88v6.71c0 1.038.842 1.88 1.88 1.88h6.71v-1.88h-5.77c-.519 0-.94-.421-.94-.94v-5.77z",
    id: "Path",
    fill: "#2184F9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.41 20.12v1.88h6.71c1.038 0 1.88-.842 1.88-1.88v-6.71h-1.88v5.77c0 .519-.421.94-.94.94h-5.77z",
    fill: "#CACCCE"
  })))
};
icons.inlineColorIcon = /*#__PURE__*/React.createElement("svg", {
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  "class": "dashicon dashicons-editor-textcolor",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z"
}));
icons.highlighterIcon = /*#__PURE__*/React.createElement("svg", {
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  "class": "dashicon dashicons-admin-customizer",
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "17",
  viewBox: "0 0 20 20"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18.33 3.57s.27-.8-.31-1.36c-.53-.52-1.22-.24-1.22-.24-.61.3-5.76 3.47-7.67 5.57-.86.96-2.06 3.79-1.09 4.82.92.98 3.96-.17 4.79-1 2.06-2.06 5.21-7.17 5.5-7.79zM1.4 17.65c2.37-1.56 1.46-3.41 3.23-4.64.93-.65 2.22-.62 3.08.29.63.67.8 2.57-.16 3.46-1.57 1.45-4 1.55-6.15.89z"
}));
icons.upperCaseIcon = /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 20 20",
  height: "25",
  width: "25",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("mask", {
  id: "a",
  fill: "#fff"
}, /*#__PURE__*/React.createElement("path", {
  d: "m20 20h-20v-20h20z",
  fill: "#fff",
  "fill-rule": "evenodd"
})), /*#__PURE__*/React.createElement("path", {
  d: "m2 3v2.5h4.16666667v10.5h2.5v-10.5h4.16666663v-2.5zm16 4.5h-7.5v2.5h2.5v6h2.5v-6h2.5z",
  mask: "url(#a)"
}));
icons.arrow_down = /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 1792 1792",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
}));
icons.arrow_up = /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 1792 1792",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
}));
icons.circleThin = /*#__PURE__*/React.createElement("svg", (_React$createElement = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, _defineProperty(_React$createElement, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_React$createElement, "width", "15"), _defineProperty(_React$createElement, "height", "15"), _defineProperty(_React$createElement, "viewBox", "0 0 12 14"), _React$createElement), /*#__PURE__*/React.createElement("path", {
  d: "M6 2q-1.016 0-1.941 0.398t-1.594 1.066-1.066 1.594-0.398 1.941 0.398 1.941 1.066 1.594 1.594 1.066 1.941 0.398 1.941-0.398 1.594-1.066 1.066-1.594 0.398-1.941-0.398-1.941-1.066-1.594-1.594-1.066-1.941-0.398zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"
}));
icons.circleDot = /*#__PURE__*/React.createElement("svg", (_React$createElement2 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, _defineProperty(_React$createElement2, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_React$createElement2, "width", "15"), _defineProperty(_React$createElement2, "height", "15"), _defineProperty(_React$createElement2, "viewBox", "0 0 12 14"), _defineProperty(_React$createElement2, "fill", "#2184f9"), _React$createElement2), /*#__PURE__*/React.createElement("path", {
  d: "M8 7q0 0.828-0.586 1.414t-1.414 0.586-1.414-0.586-0.586-1.414 0.586-1.414 1.414-0.586 1.414 0.586 0.586 1.414zM6 2.75q-1.156 0-2.133 0.57t-1.547 1.547-0.57 2.133 0.57 2.133 1.547 1.547 2.133 0.57 2.133-0.57 1.547-1.547 0.57-2.133-0.57-2.133-1.547-1.547-2.133-0.57zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"
}));
icons.ellipsis_v = /*#__PURE__*/React.createElement("svg", (_React$createElement3 = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, _defineProperty(_React$createElement3, "xmlns", "http://www.w3.org/1999/xlink"), _defineProperty(_React$createElement3, "width", "3"), _defineProperty(_React$createElement3, "height", "15"), _defineProperty(_React$createElement3, "viewBox", "0 0 3 14"), _React$createElement3), /*#__PURE__*/React.createElement("path", {
  d: "M3 9.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM3 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM3 1.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531z"
}));
icons.ellipsis_h = /*#__PURE__*/React.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  width: "11",
  height: "15",
  viewBox: "0 0 11 14"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM7 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531zM11 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531z"
}));
icons.left = /*#__PURE__*/React.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  width: "13",
  height: "15",
  viewBox: "0 0 13 14"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 7v1q0 0.414-0.254 0.707t-0.66 0.293h-5.5l2.289 2.297q0.297 0.281 0.297 0.703t-0.297 0.703l-0.586 0.594q-0.289 0.289-0.703 0.289-0.406 0-0.711-0.289l-5.086-5.094q-0.289-0.289-0.289-0.703 0-0.406 0.289-0.711l5.086-5.078q0.297-0.297 0.711-0.297 0.406 0 0.703 0.297l0.586 0.578q0.297 0.297 0.297 0.711t-0.297 0.711l-2.289 2.289h5.5q0.406 0 0.66 0.293t0.254 0.707z"
}));
icons.plus = /*#__PURE__*/React.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  width: "14",
  height: "30",
  fill: "#9b9b9b",
  viewBox: "0 0 11 14"
}, /*#__PURE__*/React.createElement("path", {
  d: "M11 5.75v1.5q0 0.312-0.219 0.531t-0.531 0.219h-3.25v3.25q0 0.312-0.219 0.531t-0.531 0.219h-1.5q-0.312 0-0.531-0.219t-0.219-0.531v-3.25h-3.25q-0.312 0-0.531-0.219t-0.219-0.531v-1.5q0-0.312 0.219-0.531t0.531-0.219h3.25v-3.25q0-0.312 0.219-0.531t0.531-0.219h1.5q0.312 0 0.531 0.219t0.219 0.531v3.25h3.25q0.312 0 0.531 0.219t0.219 0.531z"
}));
icons.plus_circle = /*#__PURE__*/React.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  width: "12",
  height: "14",
  viewBox: "0 0 12 14"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.5 7.5v-1q0-0.203-0.148-0.352t-0.352-0.148h-2v-2q0-0.203-0.148-0.352t-0.352-0.148h-1q-0.203 0-0.352 0.148t-0.148 0.352v2h-2q-0.203 0-0.352 0.148t-0.148 0.352v1q0 0.203 0.148 0.352t0.352 0.148h2v2q0 0.203 0.148 0.352t0.352 0.148h1q0.203 0 0.352-0.148t0.148-0.352v-2h2q0.203 0 0.352-0.148t0.148-0.352zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"
}));
icons["delete"] = /*#__PURE__*/React.createElement("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  width: "13",
  height: "15",
  viewBox: "0 0 13 15",
  fill: "#F7F7F7"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.5 7.5v-1q0-0.203-0.148-0.352t-0.352-0.148h-2v-2q0-0.203-0.148-0.352t-0.352-0.148h-1q-0.203 0-0.352 0.148t-0.148 0.352v2h-2q-0.203 0-0.352 0.148t-0.148 0.352v1q0 0.203 0.148 0.352t0.352 0.148h2v2q0 0.203 0.148 0.352t0.352 0.148h1q0.203 0 0.352-0.148t0.148-0.352v-2h2q0.203 0 0.352-0.148t0.148-0.352zM12 7q0 1.633-0.805 3.012t-2.184 2.184-3.012 0.805-3.012-0.805-2.184-2.184-0.805-3.012 0.805-3.012 2.184-2.184 3.012-0.805 3.012 0.805 2.184 2.184 0.805 3.012z"
}));
icons.addColor = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("g", {
  fill: "#CDCDCD",
  "fill-rule": "evenodd"
}, /*#__PURE__*/React.createElement("rect", {
  x: "6.957",
  width: "2.087",
  height: "16",
  rx: "1.043"
}), /*#__PURE__*/React.createElement("path", {
  d: "M15.652 8a1.09 1.09 0 01-1.09 1.09H1.438a1.09 1.09 0 110-2.18H14.56c.603 0 1.091.488 1.091 1.09z"
})));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ })

/******/ });
//# sourceMappingURL=blocks.build.js.map