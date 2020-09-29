exports.ids = [6];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/itinerari/index.vue?vue&type=template&id=f03e7954&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"listing"},[_c('Header'),_vm._ssrNode(" "+((_vm.itinerari)?("<div class=\"itinerari contenitore\" data-v-f03e7954><section class=\"itinerari__header\" data-v-f03e7954><figure"+(_vm._ssrStyle(null,{ 'background-image': 'url(/_nuxt/img/bg-itinerari.jpg)' }, null))+" data-v-f03e7954><img"+(_vm._ssrAttr("src",__webpack_require__(96)))+" data-v-f03e7954></figure> <div class=\"itinerari__header__details\" data-v-f03e7954><h1 data-v-f03e7954>Scopri gli itinerari del gusto</h1></div></section> <section class=\"itinerari__fascia\" data-v-f03e7954><div class=\"itinerari__fascia__contenuto itinerari__fascia__contenuto--listing\" data-v-f03e7954>"+(_vm._ssrList((_vm.itinerari),function(itinerario,key){return ("<div class=\"itinerari__fascia__contenuto__card\" data-v-f03e7954><figure"+(_vm._ssrStyle(null,{ 'background-image': 'url(' + itinerario.acf.immagine_di_copertina + ')' }, null))+" data-v-f03e7954><a"+(_vm._ssrAttr("href",("/itinerari/" + (itinerario.slug))))+" data-v-f03e7954><img"+(_vm._ssrAttr("src",itinerario.acf.immagine_di_copertina))+" data-v-f03e7954></a></figure> <h2 data-v-f03e7954><a"+(_vm._ssrAttr("href",("/itinerari/" + (itinerario.slug))))+" data-v-f03e7954>"+(_vm._s(itinerario.title.rendered))+"</a></h2> <div class=\"txt\" data-v-f03e7954>"+(_vm._s(itinerario.acf.descrizione_breve))+"</div></div>")}))+"</div></section></div>"):("<div class=\"loader\" data-v-f03e7954><span class=\"loading\" data-v-f03e7954><img"+(_vm._ssrAttr("src",_vm.loader))+" data-v-f03e7954></span></div>"))+" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/itinerari/index.vue?vue&type=template&id=f03e7954&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/itinerari/index.vue?vue&type=script&lang=js&
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
const loader = __webpack_require__(62);

/* harmony default export */ var itinerarivue_type_script_lang_js_ = ({
  transition: "slide-right",

  data() {
    return {
      oader: loader
    };
  },

  computed: {
    itinerari() {
      return this.$store.state.content.itinerari;
    }

  },

  created() {
    this.$store.dispatch("itinerari");
  }

});
// CONCATENATED MODULE: ./pages/itinerari/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_itinerarivue_type_script_lang_js_ = (itinerarivue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/itinerari/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(97)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_itinerarivue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f03e7954",
  "427213a4"
  
)

/* harmony default export */ var itinerari = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(58).default,Footer: __webpack_require__(59).default})


/***/ }),

/***/ 52:
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

/***/ 53:
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

/***/ 54:
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

/***/ 55:
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

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-facebook.b07bb81.svg";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-instagram.89e9247.svg";

/***/ }),

/***/ 58:
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

/***/ 59:
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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-pinner-locali.d5a4ffb.png";

/***/ }),

/***/ 61:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI0ZGRiI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTS0yIDEwLjg3NEwyMiAxMC44NzQgMjIgOC44NzQgLTIgOC44NzR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTY3IC0yOSkgdHJhbnNsYXRlKDk2NyAyOC44NzQpIHRyYW5zbGF0ZSgwIC4xMjYpIHJvdGF0ZSg0NSAxMCA5Ljg3NCkiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0tMiAxMUwyMiAxMSAyMiA5IC0yIDl6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTY3IC0yOSkgdHJhbnNsYXRlKDk2NyAyOC44NzQpIHNjYWxlKC0xIDEpIHJvdGF0ZSg0NSAwIC0xNC4xNDIpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader.e7b8457.gif";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-baround-white.665eb69.png";

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d11aa684_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "header[data-v-d11aa684]{width:100%;position:fixed;background:#222831;height:74px;top:0;display:flex;justify-content:space-between;align-items:center;-webkit-animation:appear-data-v-d11aa684 1s;animation:appear-data-v-d11aa684 1s;padding:30px;z-index:30}@media (max-width:768px){header[data-v-d11aa684]{height:54px;padding:10px 20px}}header .logo[data-v-d11aa684]{width:157px;position:relative;z-index:10}@media (max-width:768px){header .logo[data-v-d11aa684]{width:120px;display:flex;justify-content:center;align-items:center}}header .logo img[data-v-d11aa684]{width:100%}@-webkit-keyframes appear-data-v-d11aa684{0%{opacity:0}}@keyframes appear-data-v-d11aa684{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_2fa7da59_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-menu.4c255e8.jpg";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-baround-white.2d1c5f0.png";

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_49b339da_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 71:
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

/***/ 72:
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

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/placeholder.33c3c55.jpg";

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5c8b7d74", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-itinerari.3e90eb7.jpg";

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f03e7954_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f03e7954_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f03e7954_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f03e7954_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f03e7954_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f03e7954_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(52);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(73);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".itinerari[data-v-f03e7954]{width:100%;margin-bottom:50px}.itinerari__header[data-v-f03e7954]{width:100%;position:relative}.itinerari__header figure[data-v-f03e7954]{width:100%;max-height:620px;overflow:hidden;background-size:cover}@media (max-width:768px){.itinerari__header figure[data-v-f03e7954]{min-height:50vh;max-height:100vh}}.itinerari__header figure img[data-v-f03e7954]{width:100%;opacity:0}.itinerari__header[data-v-f03e7954]:before{content:\"\";position:absolute;width:100%;height:100%;top:0;left:0;z-index:4;background-image:linear-gradient(180deg,hsla(0,0%,45.9%,.25098),rgba(0,0,0,.631373))}.itinerari__header__details[data-v-f03e7954]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-flow:column;justify-content:center;align-items:center;z-index:5}@media (max-width:768px){.itinerari__header__details[data-v-f03e7954]{padding:20px}}.itinerari__header__details h1[data-v-f03e7954]{font-size:46px;font-weight:700;line-height:1.09;letter-spacing:3.29px;text-align:center;color:#fff;margin-bottom:20px}@media (max-width:768px){.itinerari__header__details h1[data-v-f03e7954]{font-size:28px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.21;letter-spacing:2px}}.itinerari__header__details .price[data-v-f03e7954]{font-size:16px;font-weight:700;letter-spacing:1.33px;color:#fff;margin:5px 0}.itinerari__header__details .tipologia[data-v-f03e7954]{font-size:16px;font-weight:600;letter-spacing:5px;color:#fff;text-transform:uppercase;margin:5px 0}.itinerari__header__details .tipologia span[data-v-f03e7954]{padding:0 5px}.itinerari__header__details .tipologia span[data-v-f03e7954]:after{content:\",\"}.itinerari__header__details .tipologia span[data-v-f03e7954]:last-child:after{display:none}.itinerari__header__details .address[data-v-f03e7954]{font-size:14px;font-weight:300;line-height:1.5;letter-spacing:1px;color:#fff;margin:5px 0}.itinerari__fascia[data-v-f03e7954]{width:100%;display:flex;flex-flow:column;justify-content:center;align-items:center}.itinerari__fascia__contenuto[data-v-f03e7954]{width:100%;max-width:1340px;display:flex;flex-flow:column;justify-content:space-around;margin:50px 0}@media (max-width:768px){.itinerari__fascia__contenuto[data-v-f03e7954]{margin:12px 0}}.itinerari__fascia__contenuto--listing[data-v-f03e7954]{flex-flow:row;width:100%;position:relative;margin-bottom:0;z-index:10}@media (max-width:768px){.itinerari__fascia__contenuto--listing[data-v-f03e7954]{flex-flow:column;padding:20px}}.itinerari__fascia__contenuto__card[data-v-f03e7954]{width:29%;max-width:100%}@media (max-width:768px){.itinerari__fascia__contenuto__card[data-v-f03e7954]{width:100%;margin-bottom:50px}}.itinerari__fascia__contenuto__card figure[data-v-f03e7954]{width:100%;height:407px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%;margin:0 0 50px}@media (max-width:768px){.itinerari__fascia__contenuto__card figure[data-v-f03e7954]{margin:0 0 25px;height:250px}}.itinerari__fascia__contenuto__card figure img[data-v-f03e7954]{width:100%;opacity:0}.itinerari__fascia__contenuto__card h2[data-v-f03e7954]{font-size:42px;font-weight:700;line-height:1.24;letter-spacing:3px;color:#222831;margin-bottom:30px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (max-width:768px){.itinerari__fascia__contenuto__card h2[data-v-f03e7954]{font-size:22px;margin-bottom:10px}}.itinerari__fascia__contenuto__card h2 a[data-v-f03e7954]{text-decoration:none;color:#222831}.itinerari__fascia__contenuto__card .txt[data-v-f03e7954]{font-size:18px;font-weight:300;font-stretch:normal;font-style:normal;line-height:1.71;letter-spacing:1.29px;color:#222831;margin-bottom:30px;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow:hidden}@media (max-width:768px){.itinerari__fascia__contenuto__card .txt[data-v-f03e7954]{font-size:14px;-webkit-line-clamp:3;margin-bottom:0}}.itinerari__fascia__contenuto--correlati[data-v-f03e7954]{width:100%;padding:0 35px}@media (max-width:768px){.itinerari__fascia__contenuto--correlati[data-v-f03e7954]{padding:20px 0 20px 20px}}.itinerari__fascia__contenuto--correlati h3[data-v-f03e7954]{text-align:center;margin-bottom:35px}@media (max-width:768px){.itinerari__fascia__contenuto--correlati h3[data-v-f03e7954]{font-size:22px!important;font-weight:700;letter-spacing:1.29px;text-align:left}}.itinerari__fascia__contenuto--correlati .correlati[data-v-f03e7954]{width:100%;padding-right:50px}.itinerari__fascia__contenuto--correlati .correlati .swiper-slide[data-v-f03e7954]{width:25%;overflow:hidden}@media (max-width:768px){.itinerari__fascia__contenuto--correlati .correlati .swiper-slide[data-v-f03e7954]{width:100%}}.itinerari__fascia__contenuto--correlati .correlati__card[data-v-f03e7954]{width:100%}.itinerari__fascia__contenuto--correlati .correlati__card figure[data-v-f03e7954]{width:100%;min-height:270px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%;margin:0 0 8px}@media (max-width:768px){.itinerari__fascia__contenuto--correlati .correlati__card figure[data-v-f03e7954]{height:150px;min-height:150px}}.itinerari__fascia__contenuto--correlati .correlati__card figure img[data-v-f03e7954]{width:100%;opacity:0}.itinerari__fascia__contenuto--correlati .correlati__card__content[data-v-f03e7954]{display:flex;width:100%;flex-flow:column}.itinerari__fascia__contenuto--correlati .correlati__card__content h4[data-v-f03e7954]{font-size:19px;font-weight:700;letter-spacing:1.36px;color:#222831;margin:6px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:768px){.itinerari__fascia__contenuto--correlati .correlati__card__content h4[data-v-f03e7954]{font-size:14px;letter-spacing:1px;margin:3px 0}}.itinerari__fascia__contenuto--correlati .correlati__card__content h4 a[data-v-f03e7954]{color:#222831;text-decoration:none}.itinerari__fascia__contenuto--correlati .correlati__card__content .price[data-v-f03e7954]{margin:6px 0;font-size:20px;font-weight:700;letter-spacing:1.67px;color:#222831}@media (max-width:768px){.itinerari__fascia__contenuto--correlati .correlati__card__content .price[data-v-f03e7954]{font-size:16px;margin:3px 0}}.itinerari__fascia__contenuto--correlati .correlati__card__content .tipologia[data-v-f03e7954]{font-size:14px;font-weight:600;letter-spacing:1.27px;color:#222831;text-transform:uppercase;margin:6px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:768px){.itinerari__fascia__contenuto--correlati .correlati__card__content .tipologia[data-v-f03e7954]{margin:3px 0}}.itinerari__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-f03e7954]{padding:0 5px 0 0}.itinerari__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-f03e7954]:after{content:\",\"}.itinerari__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-f03e7954]:last-child:after{display:none}.itinerari__fascia__contenuto--correlati .correlati__card__content .address[data-v-f03e7954]{margin:6px 0;font-size:14px;font-weight:300;line-height:1.64;letter-spacing:1px;color:#222831}@media (max-width:768px){.itinerari__fascia__contenuto--correlati .correlati__card__content .address[data-v-f03e7954]{margin:3px 0}}.itinerari__fascia__contenuto--bgBlue[data-v-f03e7954]{background-color:#f0f6fd;padding:60px 35px;margin:0}@media (max-width:768px){.itinerari__fascia__contenuto--bgBlue[data-v-f03e7954]{padding:20px 0 20px 20px}}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=index.js.map