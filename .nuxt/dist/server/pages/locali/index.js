exports.ids = [8];
exports.modules = Array(52).concat([
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5f7c77e7", content, true, context)
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("d005bb78", content, true, context)
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7e746d92", content, true, context)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-facebook.b07bb81.svg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-instagram.89e9247.svg";

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=d11aa684&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div class=\"logo\" data-v-d11aa684><a href=\"/home\" data-v-d11aa684><img"+(_vm._ssrAttr("src",__webpack_require__(63)))+" data-v-d11aa684></a></div> "),_c('Navigation')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=d11aa684&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(64)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d11aa684",
  "e44d5812"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(72).default,Header: __webpack_require__(58).default})


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=49b339da&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"social\" data-v-49b339da><a href=\"https://www.facebook.com/baroundit\" target=\"_blank\" data-v-49b339da><span class=\"icon icon__fb\" data-v-49b339da></span></a> <a href=\"https://www.instagram.com/baround_/\" target=\"_blank\" data-v-49b339da><span class=\"icon icon__ig\" data-v-49b339da></span></a></div> <div class=\"credits\" data-v-49b339da><p data-v-49b339da><a href=\"/credits\" data-v-49b339da>Credits</a> | <a href=\"Privacy\" data-v-49b339da>Privacy</a> | ©Baround</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=49b339da&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "49b339da",
  "6ca6f005"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(59).default})


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-pinner-locali.d5a4ffb.png";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0ZGRiI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTS0yIDEwLjg3NEwyMiAxMC44NzQgMjIgOC44NzQgLTIgOC44NzR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTY3IC0yOSkgdHJhbnNsYXRlKDk2NyAyOC44NzQpIHRyYW5zbGF0ZSgwIC4xMjYpIHJvdGF0ZSg0NSAxMCA5Ljg3NCkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMiAxMUwyMiAxMSAyMiA5IC0yIDl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTY3IC0yOSkgdHJhbnNsYXRlKDk2NyAyOC44NzQpIHNjYWxlKC0xIDEpIHJvdGF0ZSg0NSAwIC0xNC4xNDIpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader.e7b8457.gif";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-baround-white.665eb69.png";

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "header[data-v-d11aa684]{width:100%;position:fixed;background:#222831;height:74px;top:0;display:flex;justify-content:space-between;align-items:center;-webkit-animation:appear-data-v-d11aa684 1s;animation:appear-data-v-d11aa684 1s;padding:30px;z-index:30}@media (max-width:768px){header[data-v-d11aa684]{height:54px;padding:10px 20px}}header .logo[data-v-d11aa684]{width:157px;position:relative;z-index:10}@media (max-width:768px){header .logo[data-v-d11aa684]{width:120px;display:flex;justify-content:center;align-items:center}}header .logo img[data-v-d11aa684]{width:100%}@-webkit-keyframes appear-data-v-d11aa684{0%{opacity:0}}@keyframes appear-data-v-d11aa684{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(68);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(69);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(56);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(57);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, "nav .burger[data-v-2fa7da59]{width:28px;height:28px;padding:7px;display:flex;flex-flow:column;align-items:center;justify-content:space-between;position:relative;z-index:20;cursor:pointer}@media (max-width:768px){nav .burger[data-v-2fa7da59]{width:14px;height:14px;padding:0}}nav .burger__line[data-v-2fa7da59]{width:100%;height:1px;background-color:#fff}nav .burger--close[data-v-2fa7da59]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:15px auto;background-position:50%;background-repeat:no-repeat}nav .menu[data-v-2fa7da59]{display:none;width:100vw;height:100vh;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-size:cover}@media (max-width:768px){nav .menu[data-v-2fa7da59]{padding:90px 30px}}nav .menu.visible[data-v-2fa7da59]{align-items:flex-end;position:fixed;top:0;left:0;-webkit-animation:mymove-data-v-2fa7da59 5s;animation:mymove-data-v-2fa7da59 5s;z-index:10;transform:translateZ(0)}nav .menu.visible[data-v-2fa7da59],nav .menu__col[data-v-2fa7da59]{display:flex;flex-flow:column;justify-content:center}nav .menu__col[data-v-2fa7da59]{width:50%;align-items:center}@media (max-width:768px){nav .menu__col[data-v-2fa7da59]{width:100%}}nav .menu__wrap[data-v-2fa7da59]{width:100%;max-width:400px;display:flex;flex-flow:column;justify-content:center;align-items:center}@media (max-width:768px){nav .menu__wrap[data-v-2fa7da59]{max-width:100%}}nav .menu__row[data-v-2fa7da59]{width:100%;display:flex;justify-content:space-between;align-items:center}nav .menu__row .line[data-v-2fa7da59]{width:100px;height:1px;background-color:#fff}@media (max-width:768px){nav .menu__row .line[data-v-2fa7da59]{width:50px}}nav .menu__row .logo[data-v-2fa7da59]{width:28px;height:36px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:100% auto;background-position:50%}nav .menu__row ul[data-v-2fa7da59]{width:100%;list-style:none;display:flex;flex-flow:column;justify-content:center;align-items:center;padding:50px 0}@media (max-width:768px){nav .menu__row ul[data-v-2fa7da59]{padding:30px 0}}nav .menu__row ul li a[data-v-2fa7da59]{text-decoration:none;font-size:34px;font-weight:300;line-height:2.75;letter-spacing:4.5px;text-align:center;color:#fff;transition:all .2}@media (max-width:768px){nav .menu__row ul li a[data-v-2fa7da59]{font-size:24px}}nav .menu__row ul li a[data-v-2fa7da59]:hover{font-weight:700}nav .menu__row .social[data-v-2fa7da59]{display:flex;flex-flow:row}nav .menu__row .social a[data-v-2fa7da59]{margin-right:10px;display:flex}nav .menu__row .social a .icon[data-v-2fa7da59]{width:35px;height:35px;background-size:auto 24px;background-position:50%;background-repeat:no-repeat}nav .menu__row .social a .icon__fb[data-v-2fa7da59]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}nav .menu__row .social a .icon__ig[data-v-2fa7da59]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}@-webkit-keyframes appear-data-v-2fa7da59{0%{opacity:0}}@keyframes appear-data-v-2fa7da59{0%{opacity:0}}@-webkit-keyframes mymove-data-v-2fa7da59{0%{right:-100vw}to{right:0}}@keyframes mymove-data-v-2fa7da59{0%{right:-100vw}to{right:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-menu.4c255e8.jpg";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-baround-white.2d1c5f0.png";

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(56);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(57);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "footer[data-v-49b339da]{width:100%;background:#222831;display:flex;flex-flow:row;justify-content:space-between;align-items:center;padding:15px 30px}@media (max-width:768px){footer[data-v-49b339da]{padding:7px 20px}}footer .social[data-v-49b339da]{display:flex;flex-flow:row}footer .social a[data-v-49b339da]{margin-right:10px;display:flex}footer .social a .icon[data-v-49b339da]{width:20px;height:20px;background-size:auto 16px;background-position:50%;background-repeat:no-repeat}footer .social a .icon__fb[data-v-49b339da]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}footer .social a .icon__ig[data-v-49b339da]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}footer .credits[data-v-49b339da]{font-size:13px;font-weight:300;letter-spacing:1.08px;color:#fff}@media (max-width:768px){footer .credits[data-v-49b339da]{font-size:11px}}footer .credits a[data-v-49b339da]{text-decoration:none;color:#fff}@-webkit-keyframes appear-data-v-49b339da{0%{opacity:0}}@keyframes appear-data-v-49b339da{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=2fa7da59&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_vm._ssrNode(((_vm.isHidden)?("<div class=\"burger\" data-v-2fa7da59><span class=\"burger__line\" data-v-2fa7da59></span> <span class=\"burger__line\" data-v-2fa7da59></span> <span class=\"burger__line\" data-v-2fa7da59></span></div>"):("<div class=\"burger burger--close\" data-v-2fa7da59></div>"))+" <div"+(_vm._ssrClass("menu",{ visible: !_vm.isHidden }))+" data-v-2fa7da59><div class=\"menu__col\" data-v-2fa7da59><div class=\"menu__wrap\" data-v-2fa7da59><div class=\"menu__row\" data-v-2fa7da59><span class=\"line\" data-v-2fa7da59></span> <span class=\"logo\" data-v-2fa7da59></span> <span class=\"line\" data-v-2fa7da59></span></div> <div class=\"menu__row\" data-v-2fa7da59><ul data-v-2fa7da59><li data-v-2fa7da59><a href=\"/chi-siamo\" data-v-2fa7da59>Chi siamo</a></li> <li data-v-2fa7da59><a href=\"/locali\" data-v-2fa7da59>Locali</a></li> <li data-v-2fa7da59><a href=\"/itinerari\" data-v-2fa7da59>Itinerari</a></li> <li data-v-2fa7da59><a href=\"/contatti\" data-v-2fa7da59>Contatti</a></li></ul></div> <div class=\"menu__row\" data-v-2fa7da59><span class=\"line\" data-v-2fa7da59></span> <div class=\"social\" data-v-2fa7da59><a href data-v-2fa7da59><span class=\"icon icon__fb\" data-v-2fa7da59></span></a> <a href data-v-2fa7da59><span class=\"icon icon__ig\" data-v-2fa7da59></span></a></div> <span class=\"line\" data-v-2fa7da59></span></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=2fa7da59&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const mapMarker = __webpack_require__(60);

/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  data() {
    return {
      isHidden: true
    };
  }

});
// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(66)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2fa7da59",
  "720266fe"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a566f2da", content, true, context)
};

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_c528023c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_c528023c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_c528023c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_c528023c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_c528023c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Map_vue_vue_type_style_index_0_id_c528023c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(80);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(81);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(61);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(82);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(83);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, ".vue-map-container[data-v-c528023c]{height:100vh;height:calc(100vh - 100px);width:100%;max-height:100vh}@media (max-width:768px){.vue-map-container[data-v-c528023c]{height:calc(100vh - 54px)}}.finder[data-v-c528023c]{width:100%;height:calc(100vh - 74px);padding-bottom:50px;position:relative;display:flex;justify-content:space-between}@media (max-width:768px){.finder[data-v-c528023c]{flex-flow:column;padding-bottom:0}}.finder__filters--desktop[data-v-c528023c]{position:absolute;width:30%;height:calc(100% - 50px);top:0;left:0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-size:cover;background-repeat:no-repeat;z-index:30;box-shadow:10px 0 50px #222831}.finder__filters--desktop[data-v-c528023c]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";background:#040506;opacity:.4;z-index:4}.finder__filters__form[data-v-c528023c]{display:flex;flex-flow:column;height:100%;justify-content:center;align-items:center;position:relative;z-index:5;padding:30px}.finder__filters__form__row[data-v-c528023c]{display:flex;width:100%;flex-flow:column;margin-bottom:50px}.finder__filters__form__row label[data-v-c528023c]{font-size:12px;font-weight:300;letter-spacing:1px;color:#fff}.finder__filters__form__row select[data-v-c528023c]{-webkit-appearance:none;border:0;border-radius:0;background:transparent;font-size:20px;font-weight:600;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:1.67px;color:#fff;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:100%;background-repeat:no-repeat;background-size:10px auto;border-bottom:1px solid #fff;padding:15px 0}.finder__filters__form__row select[data-v-c528023c]:focus{outline:none}.finder__filters__form__row button[data-v-c528023c]{width:100%;font-size:13px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:8px;color:#222831;text-transform:uppercase;height:45px;display:flex;justify-content:center;align-items:center}.finder__filters__form__row .groupRadio[data-v-c528023c]{display:flex;flex-flow:row;justify-content:flex-start;align-items:flex-start}.finder__filters__form__row .groupRadio .boxRadio[data-v-c528023c]{position:relative;padding:15px 3px 10px;margin-right:15px;border-bottom:1px solid #fff}.finder__filters__form__row .groupRadio .boxRadio input[type=radio][data-v-c528023c]{position:absolute;top:0;left:0;opacity:0;width:100%;height:100%}.finder__filters__form__row .groupRadio .boxRadio span[data-v-c528023c]{color:#fff;-o-object-fit:contain;object-fit:contain;font-family:Nunito;font-size:16px;font-weight:700;letter-spacing:1.33px}.finder__listing[data-v-c528023c]{width:50%;height:calc(100% - 50px);display:flex;flex-flow:column;padding:20px 20px 0 0;position:absolute;left:0;top:0;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:50%;background-size:cover;background-repeat:no-repeat;z-index:3;box-shadow:10px 0 50px #222831}.finder__listing[data-v-c528023c]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";background:#040506;opacity:.4;z-index:4}@media (max-width:768px){.finder__listing[data-v-c528023c]{width:100%;padding:20px 0;height:calc(100vh - 34px);overflow:scroll}}.finder__listing .close[data-v-c528023c]{position:absolute;border-radius:100%;width:44px;height:44px;top:20px;right:-70px;box-shadow:0 0 20px #222831;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-position:50%;background-size:14px auto;background-color:#222831;background-repeat:no-repeat;cursor:pointer}@media (max-width:768px){.finder__listing .close[data-v-c528023c]{right:10px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");background-position:50%;background-size:14px auto;background-color:#fff;background-repeat:no-repeat}}.finder__listing.hidden[data-v-c528023c]{display:none}.finder__listing__cappello[data-v-c528023c]{display:flex;flex-flow:column;width:100%;position:relative;z-index:5}.finder__listing__cappello__tab[data-v-c528023c]{color:#fff;display:none;justify-content:space-between}@media (max-width:768px){.finder__listing__cappello__tab[data-v-c528023c]{display:flex}}.finder__listing__cappello__tab .tab[data-v-c528023c]{font-size:13px;font-weight:600;letter-spacing:3px}.finder__listing__cappello .counter[data-v-c528023c]{font-size:12px;font-weight:300;letter-spacing:.86px;color:#fff;padding:0 30px}@media (max-width:768px){.finder__listing__cappello .counter[data-v-c528023c]{display:none}}.finder__listing__cappello .benvenuto[data-v-c528023c]{display:none}@media (max-width:768px){.finder__listing__cappello .benvenuto[data-v-c528023c]{display:flex;font-size:31px;font-weight:300;letter-spacing:2.58px;color:#fff;padding:0 30px;text-align:center;width:100%;justify-content:center}}.finder__listing__cappello h1[data-v-c528023c]{font-size:32px;font-weight:400;line-height:normal;letter-spacing:2.67px;color:#fff;padding:0 20px 25px 30px}@media (max-width:768px){.finder__listing__cappello h1[data-v-c528023c]{font-size:14px;font-weight:300;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:1px;text-align:center}}.finder__listing__locali[data-v-c528023c]{height:100%;overflow-x:hidden;overflow-y:scroll;display:flex;flex-flow:column;justify-content:flex-start;align-items:flex-start;padding:0 20px 0 30px;position:relative;z-index:5}@media (max-width:768px){.finder__listing__locali[data-v-c528023c]{height:auto;overflow:visible}}.finder__listing__locali__locale[data-v-c528023c]{width:100%;display:flex;flex-flow:row;justify-content:flex-start;align-items:flex-start;padding-bottom:25px;margin-bottom:25px;border-bottom:1px solid hsla(0,0%,100%,.2)}@media (max-width:768px){.finder__listing__locali__locale[data-v-c528023c]{flex-flow:column}}.finder__listing__locali__locale figure[data-v-c528023c]{width:241px;height:163px;background-size:cover;background-position:50%;overflow:hidden}.finder__listing__locali__locale figure img[data-v-c528023c]{width:100%;opacity:0}.finder__listing__locali__locale__content[data-v-c528023c]{display:flex;flex-flow:column;width:calc(100% - 241px);padding:10px 25px}.finder__listing__locali__locale__content .price[data-v-c528023c]{font-size:16px;font-weight:700;letter-spacing:1.33px;color:#fff;margin:5px 0}.finder__listing__locali__locale__content .address[data-v-c528023c]{font-size:14px;font-weight:300;line-height:1.5;letter-spacing:1px;color:#fff;margin:5px 0}.finder__listing__locali__locale__content .tipologia[data-v-c528023c]{margin:5px 0;font-size:13px;font-weight:600;letter-spacing:1.18px;color:#fff;text-transform:uppercase}.finder__listing__locali__locale__content .tipologia span[data-v-c528023c]{padding:0 5px 0 0}.finder__listing__locali__locale__content .tipologia span[data-v-c528023c]:after{content:\",\"}.finder__listing__locali__locale__content .tipologia span[data-v-c528023c]:last-child:after{display:none}.finder__listing__locali__locale__content h2[data-v-c528023c]{font-size:16px;font-weight:700;letter-spacing:1.14px;color:#fff;margin:5px 0}.finder__listing__locali__locale__content h2 a[data-v-c528023c]{color:#fff;text-decoration:none}.finder__maps[data-v-c528023c]{height:calc(100vh - 100px);overflow:hidden;width:70%;display:flex;flex-flow:column;position:absolute;right:0;top:0;transition:all .5s}.finder__maps.full[data-v-c528023c]{width:100%}@media (max-width:768px){.finder__maps[data-v-c528023c]{width:100%;height:calc(100vh - 54px);height:100%;position:relative;top:auto}}.finder__maps .showList[data-v-c528023c]{position:absolute;border-radius:100%;width:44px;height:44px;top:20px;right:25px;box-shadow:0 0 10px rgba(34,40,49,.52941);background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");background-position:50%;background-size:18px auto;background-color:#222831;background-repeat:no-repeat;cursor:pointer;z-index:10}@media (max-width:768px){.finder__maps .showList[data-v-c528023c]{right:10px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");background-position:50%;background-size:18px auto;background-color:#fff;background-repeat:no-repeat}}@-webkit-keyframes appear-data-v-c528023c{0%{opacity:0}}@keyframes appear-data-v-c528023c{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-maps.d533ae8.jpg";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxpdmVsbG9fMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDEwIDgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwIDg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30KPC9zdHlsZT4KPGc+Cgk8Zz4KCQk8Zz4KCQkJPGc+CgkJCQk8Zz4KCQkJCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNSw3LjFsNC4xLTYuNkgwLjlMNSw3LjF6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzFGMjgzMyI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTS0xIDhMMTQgOCAxNCA2IC0xIDZ6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzc0IC0xMTApIHRyYW5zbGF0ZSg3NzQgMTA5KSByb3RhdGUoNDUgNi41IDcpIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNLTEgOEwxNCA4IDE0IDYgLTEgNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NzQgLTExMCkgdHJhbnNsYXRlKDc3NCAxMDkpIHNjYWxlKC0xIDEpIHJvdGF0ZSg0NSAwIC04LjY5MikiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjMuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxpdmVsbG9fMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDE5IDE1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOSAxNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtvcGFjaXR5OjAuMzt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qye2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC44O30KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjg7fQo8L3N0eWxlPgo8ZyBjbGFzcz0ic3QwIj4KPC9nPgo8Zz4KCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNiAtMzcxKSB0cmFuc2xhdGUoMzcgMzcyKSI+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTYsMmgxMlYxSDZWMnogTTYsN2gxMlY2SDZWN3ogTTYsMTJoMTJ2LTFINlYxMnoiLz4KCQk8Y2lyY2xlIGNsYXNzPSJzdDIiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIvPgoJCTxjaXJjbGUgY2xhc3M9InN0MyIgY3g9IjEuNSIgY3k9IjYuNSIgcj0iMS41Ii8+CgkJPGNpcmNsZSBjbGFzcz0ic3QzIiBjeD0iMS41IiBjeT0iMTEuNSIgcj0iMS41Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7efb000a", content, true, context)
};

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Map.vue?vue&type=template&id=c528023c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.locali.length)?_vm._ssrNode("<div class=\"finder\" data-v-c528023c>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("finder__listing",{ hidden: !_vm.list }))+" data-v-c528023c>"+((_vm.list)?("<span class=\"close\" data-v-c528023c></span>"):"<!---->")+" <div class=\"finder__listing__cappello\" data-v-c528023c><span class=\"counter\" data-v-c528023c>"+_vm._ssrEscape("\n          "+_vm._s(_vm.locali.length)+" bar a Milano\n        ")+"</span> <span class=\"benvenuto\" data-v-c528023c>Benvenuto!</span> <h1 data-v-c528023c>Ecco i bar che fanno per te! </h1></div> <div class=\"finder__listing__locali\" data-v-c528023c>"+(_vm._ssrList((_vm.locali),function(locale,key){return ("<div class=\"finder__listing__locali__locale\" data-v-c528023c><figure"+(_vm._ssrStyle(null,{ 'background-image': 'url(' + locale.acf.immagine_di_copertina + ')' }, null))+" data-v-c528023c><img"+(_vm._ssrAttr("src",locale.acf.immagine_di_copertina))+" data-v-c528023c></figure> <div class=\"finder__listing__locali__locale__content\" data-v-c528023c><div class=\"price\" data-v-c528023c>"+((locale.acf.fascia_di_prezzo === 'basso')?("<span data-v-c528023c>\n                €\n                </span>"):(locale.acf.fascia_di_prezzo === 'medio')?("<span data-v-c528023c>\n                €€\n                </span>"):(locale.acf.fascia_di_prezzo === 'alto')?("<span data-v-c528023c>\n                €€€\n                </span>"):("<span data-v-c528023c>\n                    -\n                </span>"))+"</div> <h2 data-v-c528023c><a"+(_vm._ssrAttr("href",("/locali/" + (locale.slug))))+" data-v-c528023c>"+(_vm._s(locale.title.rendered))+"</a></h2> <div class=\"tipologia\" data-v-c528023c>"+(_vm._ssrList((locale.acf.tipologia),function(type,index){return ("<span data-v-c528023c>"+_vm._ssrEscape(_vm._s(type.name))+"</span>")}))+"</div> <span class=\"address\" data-v-c528023c>"+_vm._ssrEscape(_vm._s(locale.acf.indirizzo.address))+"</span></div></div>")}))+"</div></div> "),(_vm.coords.length)?_vm._ssrNode("<div"+(_vm._ssrClass("finder__maps",{ full: !_vm.list }))+" data-v-c528023c>","</div>",[_vm._ssrNode(((!_vm.list)?("<div class=\"showList\" data-v-c528023c></div>"):"<!---->")+" "),_c('gmap-map',{ref:"mymap",attrs:{"options":{styles: _vm.styles, disableDefaultUI: true },"center":_vm.startLocation,"zoom":14}},[_c('gmap-info-window',{attrs:{"options":_vm.infoOptions,"position":_vm.infoPosition,"opened":_vm.infoOpened},on:{"closeclick":function($event){_vm.infoOpened=false}}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.infoContent)}})]),_vm._v(" "),_vm._l((_vm.coords),function(item,key){return _c('gmap-marker',{key:key,attrs:{"position":_vm.getPosition(item),"clickable":true,"icon":_vm.markerOptions},on:{"click":function($event){return _vm.toggleInfo(item, key)}}})})],2)],2):_vm._ssrNode(("<div class=\"loader\" data-v-c528023c><span class=\"loading\" data-v-c528023c><img"+(_vm._ssrAttr("src",_vm.loader))+" data-v-c528023c></span></div>"))],2):_vm._ssrNode(("<div class=\"loader\" data-v-c528023c><span class=\"loading\" data-v-c528023c><img"+(_vm._ssrAttr("src",_vm.loader))+" data-v-c528023c></span></div>")),_vm._ssrNode(_vm._ssrEscape("\n  eccomi\n  "+_vm._s(_vm.mammt)+"\n"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Map.vue?vue&type=template&id=c528023c&scoped=true&

// EXTERNAL MODULE: external "mobile-device-detect"
var external_mobile_device_detect_ = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Map.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const mapMarker = __webpack_require__(60);

const loader = __webpack_require__(62);


/* harmony default export */ var Mapvue_type_script_lang_js_ = ({
  data() {
    return {
      mammt: {},
      window: {
        width: 0,
        height: 0
      },
      list: false,
      hideFilters: false,
      filterList: {
        occasione: '',
        tipologia: '',
        location: '',
        prezzo: ''
      },
      loader: loader,
      markerOptions: {
        url: mapMarker,
        size: {
          width: 60,
          height: 102,
          f: 'px',
          b: 'px'
        },
        scaledSize: {
          width: 20,
          height: 34,
          f: 'px',
          b: 'px'
        }
      },
      coords: [],
      startLocation: {
        lat: 45.4670831,
        lng: 9.185246
      },
      coordinates: {
        0: {
          full_name: 'Erich  Kunze',
          lat: '10.31',
          lng: '123.89'
        },
        1: {
          full_name: 'Delmer Olson',
          lat: '10.32',
          lng: '123.89'
        }
      },
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };
  },

  computed: {
    locali() {
      return this.$store.state.content.locali;
    },

    device() {
      return this.$device;
    }

  },

  created() {
    this.$store.dispatch("locali");
  },

  methods: {
    generateList(event) {
      event.preventDefault();
      console.log(event);
    },

    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },

    getPosition: function (item) {
      return {
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lng)
      };
    },
    toggleInfo: function (marker, key) {
      this.startLocation = this.getPosition(marker);
      this.infoPosition = this.getPosition(marker);
      this.infoContent = this.getInfoWindowContent(marker);

      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    getInfoWindowContent: function (marker) {
      if (marker.fascia === 'alto') {
        var fascia = `<span>€€€</span>`;
      } else if (marker.fascia === 'medio') {
        var fascia = `<span>€€</span>`;
      } else {
        var fascia = `<span>€</span>`;
      }

      ;
      return `<div class="singleLocale">
          <figure style="background-image: url(${marker.foto});">
            <a href="/locali/${marker.slug}"><img src="${marker.foto}"></a>
          </figure>
          <div class="singleLocale__content">
            <h2><a href="/locali/${marker.slug}">${marker.full_name}</a></h2>
            <div class="price">${fascia}</div>
            <div class="address">${marker.indirizzo}</div>
          </div>
        </div>`;
    },
    listaFiltrata: function () {
      var allLocals = this.locali;
      var coords = [];
      var i;

      for (i = 0; i < allLocals.length; i++) {
        var obj = {
          foto: allLocals[i].acf.immagine_di_copertina,
          indirizzo: allLocals[i].acf.indirizzo.address,
          fascia: allLocals[i].acf.fascia_di_prezzo,
          slug: allLocals[i].slug,
          full_name: allLocals[i].title.rendered,
          lat: allLocals[i].acf.indirizzo.lat,
          lng: allLocals[i].acf.indirizzo.lng
        };
        coords.push(obj);
      }

      return coords;
    },
    listaLong: function () {
      var allLocals = this.locali;
      var coords = [];
      var i;

      for (i = 0; i < allLocals.length; i++) {
        var obj = {
          foto: allLocals[i].acf.immagine_di_copertina,
          indirizzo: allLocals[i].acf.indirizzo.address,
          fascia: allLocals[i].acf.fascia_di_prezzo,
          slug: allLocals[i].slug,
          full_name: allLocals[i].title.rendered,
          lat: allLocals[i].acf.indirizzo.lat,
          lng: allLocals[i].acf.indirizzo.lng
        };
        coords.push(obj);
      }

      return coords;
    }
  },

  beforeUpdate() {
    this.coords = this.listaLong();
  },

  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.mammt = this.locali;
  }

});
// CONCATENATED MODULE: ./components/Map.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mapvue_type_script_lang_js_ = (Mapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Map.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c528023c",
  "069bcde2"
  
)

/* harmony default export */ var Map = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "footer{position:fixed;bottom:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locali/index.vue?vue&type=template&id=2fa67708&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_c('Header'),_vm._ssrNode(" "),_c('Map'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/locali/index.vue?vue&type=template&id=2fa67708&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locali/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var localivue_type_script_lang_js_ = ({
  transition: "slide-right",
  computed: {
    itinerari() {
      return this.$store.state.content.itinerari;
    },

    locali() {
      return this.$store.state.content.locali;
    }

  },

  created() {
    this.$store.dispatch("itinerari");
    this.$store.dispatch("locali");
  }

});
// CONCATENATED MODULE: ./pages/locali/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_localivue_type_script_lang_js_ = (localivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/locali/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(99)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_localivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "21bf9d2a"
  
)

/* harmony default export */ var locali = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(58).default,Map: __webpack_require__(89).default,Footer: __webpack_require__(59).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map