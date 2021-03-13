exports.ids = [8];
exports.modules = {

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("a6a3e54e", content, true, context)
};

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Meta.vue?vue&type=template&id=31882226&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Meta.vue?vue&type=template&id=31882226&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Meta.vue?vue&type=script&lang=js&
//
//
/* harmony default export */ var Metavue_type_script_lang_js_ = ({
  props: ['post'],

  head() {
    let post = this.post;

    if (post) {
      var meta = {
        title: '',
        description: '',
        image: '',
        url: ''
      };
      var i;

      for (i = 0; i < post.yoast_meta.length; i++) {
        if (post.yoast_meta[i].property === 'og:description') {
          meta.description = post.yoast_meta[i].content;
        } else if (post.yoast_meta[i].property === 'og:title') {
          meta.title = post.yoast_meta[i].content;
        }
      }

      meta.image = post.acf.immagine_di_copertina;
      var title = meta.title ? meta.title : 'Baround';
      var description = meta.description ? meta.description : 'La guida definitiva ai cocktail bar.';
      var image = meta.image ? meta.image : 'https://be.baround.it/wp-content/uploads/2020/10/chi-siamo.jpg';
      var url = meta.url ? meta.url : 'https://www.baround.it';
    }

    return {
      title: `${title}`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: `${description}`
      }, {
        hid: 'title',
        name: `title`,
        content: `${title}`
      }, {
        hid: 'og:type',
        property: 'og:type',
        name: 'og:type',
        content: 'website'
      }, {
        hid: 'og:title',
        property: 'og:title',
        name: 'og:title',
        content: `${title}`
      }, {
        hid: 'og:description',
        property: 'og:description',
        name: 'og:description',
        content: `${description}`
      }, {
        hid: 'og:image',
        property: 'og:image',
        name: 'og:image',
        content: `${image}`
      }, {
        hid: 'twitter:card',
        property: 'twitter:card',
        name: 'twitter:card',
        content: `summary_large_image`
      }, {
        hid: 'twitter:title',
        property: 'twitter:title',
        name: 'twitter:title',
        content: `${title}`
      }, {
        hid: 'twitter:description',
        property: 'twitter:description',
        name: 'twitter:description',
        content: `${description}`
      }, {
        hid: 'twitter:image',
        property: 'twitter:image',
        name: 'twitter:image',
        content: `${image}`
      }]
    };
  },

  mounted() {// console.log('this is meta')
  }

});
// CONCATENATED MODULE: ./components/Meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Metavue_type_script_lang_js_ = (Metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Meta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Metavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5ce02c4e"
  
)

/* harmony default export */ var Meta = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_435fdf8c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_435fdf8c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_435fdf8c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_435fdf8c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_435fdf8c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_435fdf8c_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(88);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@-webkit-keyframes appear-data-v-435fdf8c{0%{opacity:0}to{opacity:1}}@keyframes appear-data-v-435fdf8c{0%{opacity:0}to{opacity:1}}.post[data-v-435fdf8c]{-webkit-animation:appear-data-v-435fdf8c .5s;animation:appear-data-v-435fdf8c .5s}.vue-map-container[data-v-435fdf8c]{height:560px;width:100%;max-height:100vh}.locale[data-v-435fdf8c]{width:100%}.locale__header[data-v-435fdf8c]{width:100%;position:relative}.locale__header figure[data-v-435fdf8c]{width:100%;height:100vh;max-height:100vh;overflow:hidden;background-size:cover;background-position:50%}@media (max-width:768px){.locale__header figure[data-v-435fdf8c]{min-height:50vh;max-height:100vh}}.locale__header figure img[data-v-435fdf8c]{width:100%;opacity:0}.locale__header[data-v-435fdf8c]:before{content:\"\";z-index:4;background-image:linear-gradient(180deg,hsla(0,0%,45.9%,.25098),rgba(0,0,0,.631373))}.locale__header[data-v-435fdf8c]:before,.locale__header__details[data-v-435fdf8c]{position:absolute;width:100%;height:100%;top:0;left:0}.locale__header__details[data-v-435fdf8c]{display:flex;flex-flow:column;justify-content:center;align-items:center;z-index:5}@media (max-width:768px){.locale__header__details[data-v-435fdf8c]{padding:20px}}.locale__header__details h1[data-v-435fdf8c]{font-size:46px;font-weight:700;line-height:1.09;letter-spacing:3.29px;text-align:center;color:#fff;margin-bottom:20px}@media (max-width:768px){.locale__header__details h1[data-v-435fdf8c]{font-size:28px;font-weight:700;font-stretch:normal;font-style:normal;line-height:1.21;letter-spacing:2px}}.locale__header__details .price[data-v-435fdf8c]{font-size:16px;font-weight:700;letter-spacing:1.33px;color:#fff;margin:5px 0}.locale__header__details .tipologia[data-v-435fdf8c]{font-size:16px;font-weight:600;letter-spacing:5px;color:#fff;text-transform:uppercase;margin:5px 0;display:flex;flex-wrap:wrap;justify-content:center}@media (max-width:768px){.locale__header__details .tipologia[data-v-435fdf8c]{font-size:14px}}.locale__header__details .tipologia span[data-v-435fdf8c]{padding:0 5px}.locale__header__details .tipologia span[data-v-435fdf8c]:after{content:\",\"}.locale__header__details .tipologia span[data-v-435fdf8c]:last-child:after{display:none}.locale__header__details .address[data-v-435fdf8c]{font-size:14px;font-weight:300;line-height:1.5;letter-spacing:1px;color:#fff;margin:5px 0;display:flex;flex-wrap:wrap;justify-content:center;text-align:center}.locale__fascia[data-v-435fdf8c]{align-items:center}.locale__fascia[data-v-435fdf8c],.locale__fascia__contenuto[data-v-435fdf8c]{width:100%;display:flex;flex-flow:column;justify-content:center}.locale__fascia__contenuto[data-v-435fdf8c]{margin:50px 0}@media (max-width:768px){.locale__fascia__contenuto[data-v-435fdf8c]{margin:12px 0}}@media (max-width:768px){.locale__fascia__contenuto--gallery .gallery[data-v-435fdf8c]{padding-right:50px}}.locale__fascia__contenuto--gallery[data-v-435fdf8c],.locale__fascia__contenuto--mappa[data-v-435fdf8c]{margin:0}.locale__fascia__contenuto--intro[data-v-435fdf8c]{max-width:654px;background:#fff;padding:75px 75px 0;margin-top:-150px;position:relative;margin-bottom:0;z-index:10}@media (max-width:768px){.locale__fascia__contenuto--intro[data-v-435fdf8c]{padding:30px 20px;margin-top:0}}.locale__fascia__contenuto--testo[data-v-435fdf8c]{max-width:674px;background:#fff;padding:0 75px;position:relative}@media (max-width:768px){.locale__fascia__contenuto--testo[data-v-435fdf8c]{padding:30px 20px}}.locale__fascia__contenuto--image[data-v-435fdf8c]{width:100%;display:flex;flex-flow:column;justify-content:center;align-items:center}.locale__fascia__contenuto--image figure[data-v-435fdf8c]{width:100%;max-width:946px;overflow:hidden;background-size:cover;background-position:50%}.locale__fascia__contenuto--image figure img[data-v-435fdf8c]{width:100%;opacity:0}.locale__fascia__contenuto--image figure.full[data-v-435fdf8c]{max-width:100%;height:100vh}.locale__fascia__contenuto--video[data-v-435fdf8c]{width:100%;display:flex;flex-flow:column;justify-content:center;align-items:center}.locale__fascia__contenuto--correlati[data-v-435fdf8c]{width:100%;padding:0 35px}@media (max-width:768px){.locale__fascia__contenuto--correlati[data-v-435fdf8c]{padding:20px 0 20px 20px}}.locale__fascia__contenuto--correlati h3[data-v-435fdf8c]{text-align:center;margin-bottom:35px}@media (max-width:768px){.locale__fascia__contenuto--correlati h3[data-v-435fdf8c]{font-size:22px!important;font-weight:700;letter-spacing:1.29px;text-align:left}}.locale__fascia__contenuto--correlati .correlati[data-v-435fdf8c]{width:100%}@media (max-width:768px){.locale__fascia__contenuto--correlati .correlati[data-v-435fdf8c]{padding-right:50px}}.locale__fascia__contenuto--correlati .correlati .swiper-slide[data-v-435fdf8c]{width:25%;overflow:hidden}@media (max-width:768px){.locale__fascia__contenuto--correlati .correlati .swiper-slide[data-v-435fdf8c]{width:100%}}.locale__fascia__contenuto--correlati .correlati__card[data-v-435fdf8c]{width:100%}.locale__fascia__contenuto--correlati .correlati__card figure[data-v-435fdf8c]{width:100%;min-height:270px;height:300px;max-height:300px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:cover;background-position:50%;margin:0 0 8px;height:270px}@media (max-width:768px){.locale__fascia__contenuto--correlati .correlati__card figure[data-v-435fdf8c]{height:150px;min-height:150px}}.locale__fascia__contenuto--correlati .correlati__card figure img[data-v-435fdf8c]{width:100%;opacity:0}.locale__fascia__contenuto--correlati .correlati__card__content[data-v-435fdf8c]{display:flex;width:100%;flex-flow:column}.locale__fascia__contenuto--correlati .correlati__card__content h4[data-v-435fdf8c]{font-size:19px;font-weight:700;letter-spacing:1.36px;color:#222831;margin:6px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:768px){.locale__fascia__contenuto--correlati .correlati__card__content h4[data-v-435fdf8c]{font-size:14px;letter-spacing:1px;margin:3px 0}}.locale__fascia__contenuto--correlati .correlati__card__content h4 a[data-v-435fdf8c]{color:#222831;text-decoration:none}.locale__fascia__contenuto--correlati .correlati__card__content .price[data-v-435fdf8c]{margin:6px 0;font-size:20px;font-weight:700;letter-spacing:1.67px;color:#222831}@media (max-width:768px){.locale__fascia__contenuto--correlati .correlati__card__content .price[data-v-435fdf8c]{font-size:16px;margin:3px 0}}.locale__fascia__contenuto--correlati .correlati__card__content .tipologia[data-v-435fdf8c]{font-size:14px;font-weight:600;letter-spacing:1.27px;color:#222831;text-transform:uppercase;margin:6px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (max-width:768px){.locale__fascia__contenuto--correlati .correlati__card__content .tipologia[data-v-435fdf8c]{margin:3px 0}}.locale__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-435fdf8c]{padding:0 5px 0 0}.locale__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-435fdf8c]:after{content:\",\"}.locale__fascia__contenuto--correlati .correlati__card__content .tipologia span[data-v-435fdf8c]:last-child:after{display:none}.locale__fascia__contenuto--correlati .correlati__card__content .address[data-v-435fdf8c]{margin:6px 0;font-size:14px;font-weight:300;line-height:1.64;letter-spacing:1px;color:#222831}@media (max-width:768px){.locale__fascia__contenuto--correlati .correlati__card__content .address[data-v-435fdf8c]{margin:3px 0}}.locale__fascia__contenuto--bgBlue[data-v-435fdf8c]{background-color:#f0f6fd;padding:60px 35px;margin:0}@media (max-width:768px){.locale__fascia__contenuto--bgBlue[data-v-435fdf8c]{padding:20px 0 20px 20px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locali/_slug.vue?vue&type=template&id=435fdf8c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"post individual"},[_c('Header'),_vm._ssrNode(" "),(_vm.locale)?_vm._ssrNode("<div class=\"locale contenitore\" data-v-435fdf8c>","</div>",[_c('Meta',{attrs:{"post":_vm.locale}}),_vm._ssrNode(" <section class=\"locale__header\" data-v-435fdf8c><figure"+(_vm._ssrStyle(null,{ 'background-image': 'url(' + _vm.locale.acf.immagine_di_copertina + ')' }, null))+" data-v-435fdf8c><img"+(_vm._ssrAttr("src",_vm.locale.acf.immagine_di_copertina))+" data-v-435fdf8c></figure> <div class=\"locale__header__details\" data-v-435fdf8c><h1 data-v-435fdf8c>"+(_vm._s(_vm.locale.title.rendered))+"</h1> <div class=\"price\" data-v-435fdf8c>"+((_vm.locale.acf.fascia_di_prezzo === 'basso')?("<span data-v-435fdf8c>\n                    €\n                    </span>"):(_vm.locale.acf.fascia_di_prezzo === 'medio')?("<span data-v-435fdf8c>\n                    €€\n                    </span>"):(_vm.locale.acf.fascia_di_prezzo === 'alto')?("<span data-v-435fdf8c>\n                    €€€\n                    </span>"):("<span data-v-435fdf8c>\n                        -\n                    </span>"))+"</div> <div class=\"tipologia\" data-v-435fdf8c>"+(_vm._ssrList((_vm.locale.acf.tipo),function(type,index){return ("<span data-v-435fdf8c>"+_vm._ssrEscape(_vm._s(type))+"</span>")}))+"</div> <span class=\"address\" data-v-435fdf8c>"+_vm._ssrEscape(_vm._s(_vm.locale.acf.indirizzo.address))+"</span></div></section> "),_vm._l((_vm.locale.acf.contenuto),function(field,index){return _vm._ssrNode("<section class=\"locale__fascia\" data-v-435fdf8c>","</section>",[_vm._ssrNode(((field.acf_fc_layout === 'introduzione')?("<div class=\"locale__fascia__contenuto locale__fascia__contenuto--intro intro\" data-v-435fdf8c><div class=\"txt\" data-v-435fdf8c>"+(_vm._s(field.contenuto))+"</div></div>"):"<!---->")+" "+((field.acf_fc_layout === 'testo')?("<div class=\"locale__fascia__contenuto locale__fascia__contenuto--testo\" data-v-435fdf8c><div class=\"txt\" data-v-435fdf8c>"+(_vm._s(field.contenuto))+"</div></div>"):"<!---->")+" "),(field.acf_fc_layout === 'galleria_immagini')?_vm._ssrNode("<div class=\"locale__fascia__contenuto locale__fascia__contenuto--gallery\" data-v-435fdf8c>","</div>",[_c('swiper',{ref:"gallery",refInFor:true,staticClass:"gallery",attrs:{"options":_vm.swiperGalleryOptions}},[_vm._l((field.gallery),function(foto,index){return _c('swiper-slide',{key:index,staticClass:"gallery__single"},[_c('figure',{style:({ 'background-image': 'url(' + foto.immagine + ')' })},[_c('img',{attrs:{"src":foto.immagine}})])])}),_vm._v(" "),_c('div',{staticClass:"swiper-pagination-gallery",attrs:{"slot":"pagination"},slot:"pagination"})],2)],1):(field.acf_fc_layout === 'immagine')?_vm._ssrNode(("<div class=\"locale__fascia__contenuto locale__fascia__contenuto--image\" data-v-435fdf8c>"+((field.dimensione_immagine === 'normale')?("<figure class=\"medium\""+(_vm._ssrStyle(null,{ 'background-image': 'url(' + field.immagine + ')' }, null))+" data-v-435fdf8c><img"+(_vm._ssrAttr("src",field.immagine))+" data-v-435fdf8c></figure>"):("<figure class=\"full\""+(_vm._ssrStyle(null,{ 'background-image': 'url(' + field.immagine + ')' }, null))+" data-v-435fdf8c><img"+(_vm._ssrAttr("src",field.immagine))+" data-v-435fdf8c></figure>"))+"</div>")):(field.acf_fc_layout === 'video')?_vm._ssrNode(("<div class=\"locale__fascia__contenuto locale__fascia__contenuto--video\" data-v-435fdf8c><div class=\"video\" data-v-435fdf8c>"+(_vm._s(field.video))+"</div></div>")):_vm._e()],2)}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"locale__fascia\" data-v-435fdf8c>","</section>",[_vm._ssrNode("<div class=\"locale__fascia__contenuto locale__fascia__contenuto--mappa\" data-v-435fdf8c>","</div>",[_c('gmap-map',{ref:"mymap",attrs:{"options":{styles: _vm.styles },"center":_vm.getPosition(),"zoom":16}},[_c('gmap-marker',{attrs:{"position":_vm.getPosition(),"clickable":true,"icon":_vm.markerOptions}})],1)],1)]),_vm._ssrNode(" "),(_vm.correlatiLocali.length)?_vm._ssrNode("<section class=\"locale__fascia\" data-v-435fdf8c>","</section>",[_vm._ssrNode("<div"+(_vm._ssrAttr("startLocaliSwiper",_vm.startLocaliSwiper()))+" class=\"locale__fascia__contenuto locale__fascia__contenuto--correlati\" data-v-435fdf8c>","</div>",[_vm._ssrNode("<h3 data-v-435fdf8c>Bar simili a questo..</h3> "),_c('swiper',{ref:"localiCorrelati",staticClass:"correlati",attrs:{"options":_vm.swiperLocaliOptions}},[_vm._l((_vm.correlatiLocali),function(nearlocale,index){return _c('swiper-slide',{key:index,staticClass:"correlati__single"},[_c('div',{staticClass:"correlati__card"},[(nearlocale.acf.immagine_di_copertina)?_c('figure',{style:({ 'background-image': 'url(' + nearlocale.acf.immagine_di_copertina + ')' })},[_c('a',{attrs:{"href":("/locali/" + (nearlocale.slug))}},[_c('img',{attrs:{"src":nearlocale.acf.immagine_di_copertina}})])]):_c('figure',[_c('a',{attrs:{"href":("/locali/" + (nearlocale.slug))}},[_c('img',{attrs:{"src":__webpack_require__(88)}})])]),_vm._v(" "),_c('div',{staticClass:"correlati__card__content"},[_c('span',{staticClass:"price"},[(nearlocale.acf.fascia_di_prezzo === 'basso')?_c('span',[_vm._v("\n                                    €\n                                    ")]):(nearlocale.acf.fascia_di_prezzo === 'medio')?_c('span',[_vm._v("\n                                    €€\n                                    ")]):(nearlocale.acf.fascia_di_prezzo === 'alto')?_c('span',[_vm._v("\n                                    €€€\n                                    ")]):_c('span',[_vm._v("\n                                        -\n                                    ")])]),_vm._v(" "),_c('h4',[_c('a',{attrs:{"href":("/locali/" + (nearlocale.slug))},domProps:{"innerHTML":_vm._s(nearlocale.title.rendered)}})]),_vm._v(" "),_c('div',{staticClass:"tipologia"},_vm._l((_vm.locale.acf.tipo),function(type,index){return _c('span',{key:index},[_vm._v(_vm._s(type))])}),0),_vm._v(" "),_c('span',{staticClass:"address"},[_vm._v(_vm._s(nearlocale.acf.indirizzo.address))])])])])}),_vm._v(" "),_c('div',{staticClass:"swiper-pagination-locali",attrs:{"slot":"pagination"},slot:"pagination"})],2)],2)]):_vm._e(),_vm._ssrNode(" "),(_vm.correlatiItinerari.length)?_vm._ssrNode("<section class=\"locale__fascia\" data-v-435fdf8c>","</section>",[_vm._ssrNode("<div"+(_vm._ssrAttr("startItinerariSwiper",_vm.startItinerariSwiper()))+" class=\"locale__fascia__contenuto locale__fascia__contenuto--bgBlue locale__fascia__contenuto--correlati\" data-v-435fdf8c>","</div>",[_vm._ssrNode("<h3 data-v-435fdf8c>Itinerari nei dintorni:</h3> "),_c('swiper',{ref:"attivitaCorrelate",staticClass:"correlati",attrs:{"options":_vm.swiperItinerariOptions}},[_vm._l((_vm.correlatiItinerari),function(itinerario,index){return _c('swiper-slide',{key:index,staticClass:"correlati__single"},[_c('div',{staticClass:"correlati__card"},[(itinerario.acf.immagine_di_copertina)?_c('figure',{style:({ 'background-image': 'url(' + itinerario.acf.immagine_di_copertina + ')' })},[_c('a',{attrs:{"href":("/itinerari/" + (itinerario.slug))}},[_c('img',{attrs:{"src":itinerario.acf.immagine_di_copertina}})])]):_c('figure',[_c('a',{attrs:{"href":("/itinerari/" + (itinerario.slug))}},[_c('img',{attrs:{"src":__webpack_require__(88)}})])]),_vm._v(" "),_c('div',{staticClass:"correlati__card__content"},[_c('h4',[_c('a',{attrs:{"href":("/itinerari/" + (itinerario.slug))},domProps:{"innerHTML":_vm._s(itinerario.title.rendered)}})])])])])}),_vm._v(" "),_c('div',{staticClass:"swiper-pagination-itinerari",attrs:{"slot":"pagination"},slot:"pagination"})],2)],2)]):_vm._e(),_vm._ssrNode(" "),_c('NewsletterPage')],2):_vm._ssrNode(("<div class=\"loader\" data-v-435fdf8c><span class=\"loading\" data-v-435fdf8c><img"+(_vm._ssrAttr("src",_vm.loader))+" data-v-435fdf8c></span></div>")),_vm._ssrNode(" "),_c('Newsletter'),_vm._ssrNode(" "),_c('Footer')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/locali/_slug.vue?vue&type=template&id=435fdf8c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/locali/_slug.vue?vue&type=script&lang=js&
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
const loader = __webpack_require__(73);

const mapMarker = __webpack_require__(72);

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  transition: "slide-right",
  computed: {
    locali() {
      return this.$store.state.content.locali;
    },

    itinerari() {
      return this.$store.state.content.itinerari;
    },

    locale() {
      return this.$store.state.content.locali.find(el => el.slug === this.slug);
    },

    swiper() {
      this.$refs.localiCorrelati.$swiper;
      this.$refs.attivitaCorrelate.$swiper;
      this.$refs.gallery.$swiper;
    }

  },

  data() {
    return {
      title: 'Locale',
      loader: loader,
      slug: this.$route.params.slug,
      markerOptions: {
        url: mapMarker,
        scaledSize: {
          height: 34,
          width: 20
        }
      },
      swiperLocaliOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination-locali',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      swiperGalleryOptions: {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,
        pagination: {
          el: '.swiper-pagination-gallery',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      swiperItinerariOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination-itinerari',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      },
      correlatiLocali: {},
      correlatiItinerari: {},
      startLocation: {
        lat: 45.4627124,
        lng: 9.1076929
      },
      coordinates: {
        0: {
          full_name: 'Erich  Kunze',
          lat: '10.31',
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

  methods: {
    getPosition: function () {
      return {
        lat: parseFloat(this.locale.acf.indirizzo.lat),
        lng: parseFloat(this.locale.acf.indirizzo.lng)
      };
    },
    toggleInfo: function (marker, key) {
      this.startLocation = this.getPosition();
      this.infoPosition = this.getPosition();
      this.infoContent = marker.full_name;

      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    funLocaliOption: function () {
      return {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination-locali',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      };
    },
    funGalleryOption: function () {
      return {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: false,
        pagination: {
          el: '.swiper-pagination-gallery',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      };
    },
    funItinerariOption: function () {
      return {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination-itinerari',
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      };
    },
    startLocaliSwiper: function () {
      this.swiperLocaliOptions = this.funLocaliOption();
    },
    startItinerariSwiper: function () {
      this.swiperItinerariOptions = this.funItinerariOption();
    },
    startGallerySwiper: function () {
      this.swiperGalleryOptions = this.funGalleryOption();
    }
  },

  created() {},

  beforeUpdate() {},

  mounted() {
    if (this.locale.acf.locali_simili) {
      var idPosts = [];
      var i;

      for (i = 0; i < this.locale.acf.locali_simili.length; i++) {
        idPosts.push(this.locale.acf.locali_simili[i].ID);
      }

      var filtered = this.locali.filter(item => idPosts.includes(item.id));
      this.correlatiLocali = filtered;
    }

    if (this.locale.acf.itinerari_vicini) {
      var relPosts = [];
      var i;

      for (i = 0; i < this.locale.acf.itinerari_vicini.length; i++) {
        relPosts.push(this.locale.acf.itinerari_vicini[i].ID);
      }

      var filtroitinerari = this.itinerari.filter(item => relPosts.includes(item.id));
      this.correlatiItinerari = filtroitinerari;
    }

    this.title = this.locale.title.rendered;
  }

});
// CONCATENATED MODULE: ./pages/locali/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var locali_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/locali/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  locali_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "435fdf8c",
  "5b529df9"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(68).default,Meta: __webpack_require__(113).default,NewsletterPage: __webpack_require__(93).default,Newsletter: __webpack_require__(94).default,Footer: __webpack_require__(69).default})


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-instagram.89e9247.svg";

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-facebook.b07bb81.svg";

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("0374e949", content, true, context)
};

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("59fd816d", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("bfbba27c", content, true, context)
};

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4df21c62", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-baround-white.665eb69.png";

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=33415e25&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div class=\"logo\" data-v-33415e25><a href=\"/\" data-v-33415e25><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" data-v-33415e25></a></div> "),_c('Navigation')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=33415e25&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33415e25",
  "2e4c3361"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(86).default,Header: __webpack_require__(68).default})


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=705e7678&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"social\" data-v-705e7678><a href=\"https://www.facebook.com/baroundit\" target=\"_blank\" data-v-705e7678><span class=\"icon icon__fb\" data-v-705e7678></span></a> <a href=\"https://www.instagram.com/baround_/\" target=\"_blank\" data-v-705e7678><span class=\"icon icon__ig\" data-v-705e7678></span></a></div> "),_vm._ssrNode("<div class=\"credits\" data-v-705e7678>","</div>",[_vm._ssrNode("<p data-v-705e7678><a href=\"/credits\" data-v-705e7678>Credits</a> | <a href=\"/privacy\" data-v-705e7678>Privacy</a> | ©Baround</p> "),_c('ExitPopup')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=705e7678&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "705e7678",
  "0d19cf6f"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ExitPopup: __webpack_require__(87).default,Footer: __webpack_require__(69).default})


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("16c075e5", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("72fe6068", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-pinner-locali.d5a4ffb.png";

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loader.e7b8457.gif";

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-arrow-white.94fb342.svg";

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_33415e25_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_33415e25_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_33415e25_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_33415e25_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_33415e25_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_33415e25_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "header[data-v-33415e25]{width:100%;position:fixed;background:#222831;height:74px;top:0;display:flex;justify-content:space-between;align-items:center;padding:30px;z-index:30}@media (max-width:768px){header[data-v-33415e25]{height:54px;padding:10px 20px}}header .logo[data-v-33415e25]{width:157px;position:relative;z-index:10}@media (max-width:768px){header .logo[data-v-33415e25]{width:120px;display:flex;justify-content:center;align-items:center}}header .logo img[data-v-33415e25]{width:100%}@-webkit-keyframes scroll-data-v-33415e25{0%{top:-200px}to{top:0}}@keyframes scroll-data-v-33415e25{0%{top:-200px}to{top:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_style_index_0_id_783985e5_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(79);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(80);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);
// Module
exports.push([module.i, "nav .burger[data-v-783985e5]{width:28px;height:28px;padding:7px;display:flex;flex-flow:column;align-items:center;justify-content:space-between;position:relative;z-index:20;cursor:pointer}@media (max-width:768px){nav .burger[data-v-783985e5]{width:14px;height:14px;padding:0}}nav .burger__line[data-v-783985e5]{width:100%;height:1px;background-color:#fff}nav .burger--close[data-v-783985e5]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:15px auto;background-position:50%;background-repeat:no-repeat}nav .menu[data-v-783985e5]{display:none;width:100vw;height:100vh;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-size:cover;right:-100vw;-webkit-animation:mymoveOut-data-v-783985e5 .2s;animation:mymoveOut-data-v-783985e5 .2s}@media (max-width:768px){nav .menu[data-v-783985e5]{padding:90px 30px}}nav .menu__header[data-v-783985e5]{position:absolute;top:0;left:0;width:100vw;z-index:5;display:flex;flex-flow:row;justify-content:space-between;padding:28px 30px}nav .menu__header__logo[data-v-783985e5]{width:100%;max-width:140px}@media (max-width:768px){nav .menu__header__logo[data-v-783985e5]{max-width:120px}}nav .menu__header__logo img[data-v-783985e5]{width:100%}nav .menu__header__skip[data-v-783985e5]{font-size:13px;font-weight:700;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:1.3px;color:#fff;cursor:pointer}nav .menu.visible[data-v-783985e5]{align-items:flex-end;position:fixed;top:0;right:0;-webkit-animation:mymove-data-v-783985e5 .2s;animation:mymove-data-v-783985e5 .2s;z-index:10}nav .menu.visible[data-v-783985e5],nav .menu__col[data-v-783985e5]{display:flex;flex-flow:column;justify-content:center}nav .menu__col[data-v-783985e5]{width:50%;align-items:center}@media (max-width:768px){nav .menu__col[data-v-783985e5]{width:100%}}nav .menu__wrap[data-v-783985e5]{width:100%;max-width:400px;display:flex;flex-flow:column;justify-content:center;align-items:center}@media (max-width:768px){nav .menu__wrap[data-v-783985e5]{max-width:100%}}nav .menu__row[data-v-783985e5]{width:100%;display:flex;justify-content:space-between;align-items:center}nav .menu__row .line[data-v-783985e5]{width:100px;height:1px;background-color:#fff}@media (max-width:768px){nav .menu__row .line[data-v-783985e5]{width:50px}}nav .menu__row .logo[data-v-783985e5]{width:28px;height:36px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");background-size:100% auto;background-position:50%}nav .menu__row ul[data-v-783985e5]{width:100%;list-style:none;display:flex;flex-flow:column;justify-content:center;align-items:center;padding:50px 0}@media (max-width:768px){nav .menu__row ul[data-v-783985e5]{padding:30px 0}}nav .menu__row ul li a[data-v-783985e5]{text-decoration:none;font-size:34px;font-weight:300;line-height:2.75;letter-spacing:4.5px;text-align:center;color:#fff;transition:all .2}@media (max-width:768px){nav .menu__row ul li a[data-v-783985e5]{font-size:24px}}nav .menu__row ul li a[data-v-783985e5]:active,nav .menu__row ul li a[data-v-783985e5]:hover{font-weight:700}nav .menu__row .social[data-v-783985e5]{display:flex;flex-flow:row}nav .menu__row .social a[data-v-783985e5]{margin-right:10px;display:flex}nav .menu__row .social a .icon[data-v-783985e5]{width:35px;height:35px;background-size:auto 24px;background-position:50%;background-repeat:no-repeat}nav .menu__row .social a .icon__fb[data-v-783985e5]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}nav .menu__row .social a .icon__ig[data-v-783985e5]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}@-webkit-keyframes appear-data-v-783985e5{0%{opacity:0}}@keyframes appear-data-v-783985e5{0%{opacity:0}}@-webkit-keyframes mymove-data-v-783985e5{0%{right:-100vw;opacity:0}to{right:0;opacity:1}}@keyframes mymove-data-v-783985e5{0%{right:-100vw;opacity:0}to{right:0;opacity:1}}@-webkit-keyframes mymoveOut-data-v-783985e5{0%{right:0}to{right:-100vw}}@keyframes mymoveOut-data-v-783985e5{0%{right:0}to{right:-100vw}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bg-menu.4c255e8.jpg";

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-baround-white.2d1c5f0.png";

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_705e7678_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "footer[data-v-705e7678]{width:100%;background:#222831;display:flex;flex-flow:row;justify-content:space-between;align-items:center;padding:15px 30px;position:relative}@media (max-width:768px){footer[data-v-705e7678]{padding:7px 20px}}footer .social[data-v-705e7678]{display:flex;flex-flow:row}footer .social a[data-v-705e7678]{margin-right:10px;display:flex}footer .social a .icon[data-v-705e7678]{width:20px;height:20px;background-size:auto 16px;background-position:50%;background-repeat:no-repeat}footer .social a .icon__fb[data-v-705e7678]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}footer .social a .icon__ig[data-v-705e7678]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}footer .credits[data-v-705e7678]{font-size:13px;font-weight:300;letter-spacing:1.08px;color:#fff;position:relative}@media (max-width:768px){footer .credits[data-v-705e7678]{font-size:11px}}footer .credits a[data-v-705e7678]{text-decoration:none;color:#fff}@-webkit-keyframes appear-data-v-705e7678{0%{opacity:0}}@keyframes appear-data-v-705e7678{0%{opacity:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon-baround-popup.3d89f4a.png";

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_e9425896_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_e9425896_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_e9425896_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_e9425896_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_e9425896_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExitPopup_vue_vue_type_style_index_0_id_e9425896_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(30);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".popup[data-v-e9425896]{position:fixed;top:0;left:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.7);display:flex;flex-flow:row;justify-content:center;align-items:center;z-index:1000;transform:translateY(60%) scale(0);transition:transform .3s cubic-bezier(.4,0,.2,1)}.popup.visible[data-v-e9425896]{transform:translateY(0) scale(1)}.popup__box[data-v-e9425896]{width:500px;display:flex;flex-flow:column;justify-content:center;align-items:center;padding:70px 25px;background-color:#fff;position:relative}@media (max-width:768px){.popup__box[data-v-e9425896]{max-width:80%;padding:20px}}.popup__box .close[data-v-e9425896]{position:absolute;background:#222831;width:40px;height:40px;border-radius:100%;top:-20px;right:-20px;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-size:10px auto;background-position:50%;background-repeat:no-repeat;cursor:pointer}@media (max-width:768px){.popup__box .close[data-v-e9425896]{right:auto;left:-20px}}.popup__box .icon[data-v-e9425896]{width:30px;margin-bottom:20px}.popup__box .icon img[data-v-e9425896]{width:100%}.popup__box h3[data-v-e9425896]{font-size:24px;line-height:1.29;letter-spacing:1.66px;text-align:center;color:#222831}@media (max-width:768px){.popup__box h3[data-v-e9425896]{font-size:22px}}.popup__box p[data-v-e9425896]{font-size:18px;line-height:1.29;text-align:center;color:#000;margin-top:20px;font-weight:300}@media (max-width:768px){.popup__box p[data-v-e9425896]{font-size:16px}}.popup__box .button[data-v-e9425896]{min-width:238px;height:45px;background-color:#222831;font-size:13px;font-weight:700;letter-spacing:5px;color:#fff;text-transform:uppercase;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-size:22px auto;background-position:15px;background-repeat:no-repeat;display:flex;flex-flow:column;justify-content:center;align-items:center;padding:0 20px 0 49px;margin-top:30px;text-decoration:none}@media (max-width:768px){.popup__box .button[data-v-e9425896]{font-size:11px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=783985e5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_vm._ssrNode(((_vm.isHidden)?("<div class=\"burger\" data-v-783985e5><span class=\"burger__line\" data-v-783985e5></span> <span class=\"burger__line\" data-v-783985e5></span> <span class=\"burger__line\" data-v-783985e5></span></div>"):("<div class=\"burger burger--close\" data-v-783985e5></div>"))+" <div"+(_vm._ssrClass("menu",{ visible: !_vm.isHidden }))+" data-v-783985e5><div class=\"menu__header\" data-v-783985e5><div class=\"menu__header__logo\" data-v-783985e5><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" data-v-783985e5></div></div> <div class=\"menu__col\" data-v-783985e5><div class=\"menu__wrap\" data-v-783985e5><div class=\"menu__row\" data-v-783985e5><span class=\"line\" data-v-783985e5></span> <span class=\"logo\" data-v-783985e5></span> <span class=\"line\" data-v-783985e5></span></div> <div class=\"menu__row\" data-v-783985e5><ul data-v-783985e5><li data-v-783985e5><a href=\"/chi-siamo\" data-v-783985e5>Chi siamo</a></li> <li data-v-783985e5><a href=\"/locali\" data-v-783985e5>Locali</a></li> <li data-v-783985e5><a href=\"/itinerari\" data-v-783985e5>Itinerari</a></li> <li data-v-783985e5><a href=\"/contatti\" data-v-783985e5>Contatti</a></li></ul></div> <div class=\"menu__row\" data-v-783985e5><span class=\"line\" data-v-783985e5></span> <div class=\"social\" data-v-783985e5><a href data-v-783985e5><span class=\"icon icon__fb\" data-v-783985e5></span></a> <a href data-v-783985e5><span class=\"icon icon__ig\" data-v-783985e5></span></a></div> <span class=\"line\" data-v-783985e5></span></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=783985e5&scoped=true&

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
//
//
//
//
//
const mapMarker = __webpack_require__(72);

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
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Navigationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "783985e5",
  "5478fd30"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExitPopup.vue?vue&type=template&id=e9425896&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popup"},[_vm._ssrNode("<div class=\"popup__box\" data-v-e9425896><span class=\"close\" data-v-e9425896></span> <span class=\"icon\" data-v-e9425896><img"+(_vm._ssrAttr("src",__webpack_require__(83)))+" data-v-e9425896></span> <h3 data-v-e9425896>Ehi!<br data-v-e9425896>Te ne stai andando?<br data-v-e9425896>Aspetta</h3> <p data-v-e9425896>Prima di scappare seguici su <strong data-v-e9425896>instagram</strong><br data-v-e9425896>per non perderti nessuna novità.</p> <a href=\"https://www.instagram.com/baround_/\" target=\"_blank\" class=\"button button--ig\" data-v-e9425896>SEGUICI SUBITO!</a> "+((_vm.popup)?("<div data-v-e9425896>"+_vm._ssrEscape("\n      "+_vm._s(_vm.exitPopup())+"\n    ")+"</div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ExitPopup.vue?vue&type=template&id=e9425896&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ExitPopup.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ExitPopupvue_type_script_lang_js_ = ({
  data() {
    return {
      popup: false
    };
  },

  created() {// this.$store.dispatch("locali");
  },

  methods: {
    exitPopup(event) {
      if (typeof window !== 'undefined') {
        if (!this.$cookies.get("exitIntentShowNov")) {
          setTimeout(() => {
            document.addEventListener('mouseout', mouseEvent);
            document.addEventListener('keydown', exit);
          }, 6000);
        }

        const mouseEvent = e => {
          const shouldShowExitIntent = !e.toElement && !e.relatedTarget && e.clientY < 10;

          if (shouldShowExitIntent) {
            document.removeEventListener('mouseout', mouseEvent);
            document.querySelector('.popup').classList.add('visible'); // Set the cookie when the popup is shown to the user

            this.$cookies.set('exitIntentShowNov', true, 60 * 60);
          }
        };

        const exit = e => {
          if (e.target.className === 'close') {
            document.querySelector('.popup').classList.remove('visible');
          }
        };

        document.querySelector('.popup').addEventListener('click', exit);
      }
    }

  },

  mounted() {
    this.popup = true;
    this.exitPopup();
  }

});
// CONCATENATED MODULE: ./components/ExitPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ExitPopupvue_type_script_lang_js_ = (ExitPopupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ExitPopup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ExitPopupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e9425896",
  "b00c00ec"
  
)

/* harmony default export */ var ExitPopup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/placeholder.33c3c55.jpg";

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterPage_vue_vue_type_style_index_0_id_116e0492_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterPage_vue_vue_type_style_index_0_id_116e0492_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterPage_vue_vue_type_style_index_0_id_116e0492_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterPage_vue_vue_type_style_index_0_id_116e0492_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterPage_vue_vue_type_style_index_0_id_116e0492_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterPage_vue_vue_type_style_index_0_id_116e0492_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(74);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, ".newsletterPage[data-v-116e0492]{position:relative;width:100vw;background:#fff;padding:70px 30px;z-index:7}@media (max-width:768px){.newsletterPage[data-v-116e0492]{padding:50px 20px}}.newsletterPage .close[data-v-116e0492]{width:40px;height:40px;background-color:#fff;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");border-radius:100%;background-size:auto 14px;background-position:50%;background-repeat:no-repeat;position:absolute;top:-20px;box-shadow:0 -8px 10px 0 rgba(0,0,0,.1);cursor:pointer}@media (max-width:768px){.newsletterPage .close[data-v-116e0492]{left:-3px}}.newsletterPage__row[data-v-116e0492]{width:100%;display:flex;flex-flow:row;justify-content:space-between;align-items:center}@media (max-width:768px){.newsletterPage__row[data-v-116e0492]{flex-flow:column}}.newsletterPage__row__col[data-v-116e0492]{display:flex;flex-flow:column;justify-content:flex-start;align-items:center}.newsletterPage .label[data-v-116e0492]{font-size:18px;font-weight:700;line-height:1.17;letter-spacing:1.29px;color:#222831;margin-right:20px}.newsletterPage .form[data-v-116e0492]{display:flex;flex-flow:row;justify-content:space-between;align-items:center}@media (max-width:768px){.newsletterPage .form[data-v-116e0492]{flex-flow:column}}.newsletterPage .form__col[data-v-116e0492]{display:flex;flex-flow:column;justify-content:center;align-items:center}.newsletterPage .form__col__row[data-v-116e0492]{display:flex}.newsletterPage .form__col__row--error[data-v-116e0492]{color:#af0c0c;font-size:11px;padding-top:5px;position:absolute;bottom:10px}.newsletterPage .form__col__row--success[data-v-116e0492]{color:#058215;font-size:11px;padding-top:5px;position:absolute;bottom:10px}@media (max-width:768px){.newsletterPage .form .label[data-v-116e0492]{margin-right:0;margin-bottom:8px}}.newsletterPage .form input[data-v-116e0492]{width:300px;height:45px;border:1px solid #222831;background-color:#fff;padding:5px 20px;font-size:14px;font-weight:700;letter-spacing:1px;color:#222831;border-radius:0}@media (max-width:768px){.newsletterPage .form input[data-v-116e0492]{max-width:100%}}.newsletterPage .form input[data-v-116e0492]:focus{outline:none}.newsletterPage .form button[data-v-116e0492]{background-color:#222831;height:45px;width:45px;border:1px solid #222831;font-size:0;cursor:pointer;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-repeat:no-repeat}.newsletterPage .social[data-v-116e0492]{display:flex;flex-flow:row;align-items:center}@media (max-width:768px){.newsletterPage .social[data-v-116e0492]{display:none}}.newsletterPage .social a[data-v-116e0492]{margin-right:10px;display:flex}.newsletterPage .social a .icon[data-v-116e0492]{width:40px;height:40px;background-size:auto 16px;background-position:50%;background-repeat:no-repeat;background-color:#222831;border-radius:100%}.newsletterPage .social a .icon__fb[data-v-116e0492]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.newsletterPage .social a .icon__ig[data-v-116e0492]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}@-webkit-keyframes showBox-data-v-116e0492{0%{bottom:-300px}to{bottom:0}}@keyframes showBox-data-v-116e0492{0%{bottom:-300px}to{bottom:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ccd1f1fa_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ccd1f1fa_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ccd1f1fa_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ccd1f1fa_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ccd1f1fa_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Newsletter_vue_vue_type_style_index_0_id_ccd1f1fa_scoped_true_defer_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(29);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(31);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(74);
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(62);
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(61);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, ".newsletter[data-v-ccd1f1fa]{position:fixed;bottom:0;width:100vw;background:#fff;padding:25px 30px;z-index:7;box-shadow:0 -5px 30px 0 rgba(0,0,0,.31);-webkit-animation:showBox-data-v-ccd1f1fa .5s;animation:showBox-data-v-ccd1f1fa .5s}@media (max-width:768px){.newsletter[data-v-ccd1f1fa]{padding:18px 20px}}.newsletter .close[data-v-ccd1f1fa]{width:40px;height:40px;background-color:#fff;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");border-radius:100%;background-size:auto 14px;background-position:50%;background-repeat:no-repeat;position:absolute;top:-20px;box-shadow:0 -8px 10px 0 rgba(0,0,0,.1);cursor:pointer}@media (max-width:768px){.newsletter .close[data-v-ccd1f1fa]{left:-3px}}.newsletter__row[data-v-ccd1f1fa]{width:100%;display:flex;flex-flow:row;justify-content:space-between;align-items:center}@media (max-width:768px){.newsletter__row[data-v-ccd1f1fa]{flex-flow:column}}.newsletter__row__col[data-v-ccd1f1fa]{display:flex;flex-flow:column;justify-content:flex-start;align-items:center}.newsletter .label[data-v-ccd1f1fa]{font-size:18px;font-weight:700;line-height:1.17;letter-spacing:1.29px;color:#222831;margin-right:20px}.newsletter .form[data-v-ccd1f1fa]{display:flex;flex-flow:row;justify-content:space-between;align-items:center}@media (max-width:768px){.newsletter .form[data-v-ccd1f1fa]{flex-flow:column}}.newsletter .form__col[data-v-ccd1f1fa]{display:flex;flex-flow:column;justify-content:center;align-items:center}.newsletter .form__col__row[data-v-ccd1f1fa]{display:flex}.newsletter .form__col__row--error[data-v-ccd1f1fa]{color:#af0c0c;font-size:11px;padding-top:5px;position:absolute;bottom:10px}.newsletter .form__col__row--success[data-v-ccd1f1fa]{color:#058215;font-size:11px;padding-top:5px;position:absolute;bottom:10px}@media (max-width:768px){.newsletter .form .label[data-v-ccd1f1fa]{margin-right:0;margin-bottom:8px}}.newsletter .form input[data-v-ccd1f1fa]{width:300px;height:45px;border:1px solid #222831;background-color:#fff;padding:5px 20px;font-size:14px;font-weight:700;letter-spacing:1px;color:#222831;border-radius:0}@media (max-width:768px){.newsletter .form input[data-v-ccd1f1fa]{max-width:100%}}.newsletter .form input[data-v-ccd1f1fa]:focus{outline:none}.newsletter .form button[data-v-ccd1f1fa]{background-color:#222831;height:45px;width:45px;border:1px solid #222831;font-size:0;cursor:pointer;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");background-position:50%;background-repeat:no-repeat}.newsletter .social[data-v-ccd1f1fa]{display:flex;flex-flow:row;align-items:center}@media (max-width:768px){.newsletter .social[data-v-ccd1f1fa]{display:none}}.newsletter .social a[data-v-ccd1f1fa]{margin-right:10px;display:flex}.newsletter .social a .icon[data-v-ccd1f1fa]{width:40px;height:40px;background-size:auto 16px;background-position:50%;background-repeat:no-repeat;background-color:#222831;border-radius:100%}.newsletter .social a .icon__fb[data-v-ccd1f1fa]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}.newsletter .social a .icon__ig[data-v-ccd1f1fa]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}@-webkit-keyframes showBox-data-v-ccd1f1fa{0%{bottom:-300px}to{bottom:0}}@keyframes showBox-data-v-ccd1f1fa{0%{bottom:-300px}to{bottom:0}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsletterPage.vue?vue&type=template&id=116e0492&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"newsletterPage"},[_c('mailchimp-subscribe',{attrs:{"url":"https://baround.us2.list-manage.com/subscribe/post-json","user-id":"3dc114aeeae39c68603e85176","list-id":"d3cfdbd470"},on:{"error":_vm.onError,"success":_vm.onSuccess},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var subscribe = ref.subscribe;
var setEmail = ref.setEmail;
var error = ref.error;
var success = ref.success;
return [_c('div',{staticClass:"newsletterPage__row"},[_c('div',{staticClass:"newsletterPage__row__col"},[_c('form',{staticClass:"form",on:{"submit":function($event){$event.preventDefault();return subscribe($event)}}},[_c('div',{staticClass:"form__col"},[_c('span',{staticClass:"label"},[_vm._v("Non perderti le nostre novità!")])]),_vm._v(" "),_c('div',{staticClass:"form__col"},[_c('div',{staticClass:"form__col__row"},[_c('input',{attrs:{"type":"email","placeholder":"Inserisci la tua email"},on:{"input":function($event){return setEmail($event.target.value)}}}),_vm._v(" "),_c('button',{attrs:{"type":"submit"}},[_vm._v("Iscriviti")])]),_vm._v(" "),(error)?_c('div',{staticClass:"form__col__row form__col__row--error"},[_vm._v("Ops. Qualcosa è andato storto. Riprova!")]):_vm._e(),_vm._v(" "),(success)?_c('div',{staticClass:"form__col__row form__col__row--success"},[_vm._v(_vm._s(_vm.setCookieNewsletter())+"Fantastico! Sei dei nostri!")]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"newsletterPage__row__col"},[_c('div',{staticClass:"social"},[_c('span',{staticClass:"label"},[_vm._v("Seguici su:")]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.facebook.com/baroundit","target":"_blank"}},[_c('span',{staticClass:"icon icon__fb"})]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.instagram.com/baround_/","target":"_blank"}},[_c('span',{staticClass:"icon icon__ig"})])])])])]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/NewsletterPage.vue?vue&type=template&id=116e0492&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-mailchimp-subscribe/dist/vue-mailchimp-subscribe.js
var vue_mailchimp_subscribe = __webpack_require__(22);
var vue_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(vue_mailchimp_subscribe);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NewsletterPage.vue?vue&type=script&lang=js&
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

/* harmony default export */ var NewsletterPagevue_type_script_lang_js_ = ({
  components: {
    MailchimpSubscribe: vue_mailchimp_subscribe_default.a
  },

  data() {
    return {
      closeNews: false,
      isActive: false,
      showNewsletter: true
    };
  },

  methods: {
    onError() {},

    onSuccess() {},

    showBox() {
      setTimeout(function () {
        this.isActive = true;
      }, 1000);
    }

  },

  mounted() {
    setTimeout(function (scope) {
      scope.isActive = true;
    }, 5000, this); // console.log(this.isActive);
  },

  created() {}

});
// CONCATENATED MODULE: ./components/NewsletterPage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NewsletterPagevue_type_script_lang_js_ = (NewsletterPagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/NewsletterPage.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NewsletterPagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "116e0492",
  "a17ff388"
  
)

/* harmony default export */ var NewsletterPage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Newsletter.vue?vue&type=template&id=ccd1f1fa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showNewsletter & !_vm.closeNews)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"newsletter"},[_vm._ssrNode("<span class=\"close\" data-v-ccd1f1fa></span> "),_c('mailchimp-subscribe',{attrs:{"url":"https://baround.us2.list-manage.com/subscribe/post-json","user-id":"3dc114aeeae39c68603e85176","list-id":"d3cfdbd470"},on:{"error":_vm.onError,"success":_vm.onSuccess},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var subscribe = ref.subscribe;
var setEmail = ref.setEmail;
var error = ref.error;
var success = ref.success;
return [_c('div',{staticClass:"newsletter__row"},[_c('div',{staticClass:"newsletter__row__col"},[_c('form',{staticClass:"form",on:{"submit":function($event){$event.preventDefault();return subscribe($event)}}},[_c('div',{staticClass:"form__col"},[_c('span',{staticClass:"label"},[_vm._v("Rimani sempre aggiornato!")])]),_vm._v(" "),_c('div',{staticClass:"form__col"},[_c('div',{staticClass:"form__col__row"},[_c('input',{attrs:{"type":"email","placeholder":"Inserisci la tua email"},on:{"input":function($event){return setEmail($event.target.value)}}}),_vm._v(" "),_c('button',{attrs:{"type":"submit"}},[_vm._v("Iscriviti")])]),_vm._v(" "),(error)?_c('div',{staticClass:"form__col__row form__col__row--error"},[_vm._v("Ops. Qualcosa è andato storto. Riprova!")]):_vm._e(),_vm._v(" "),(success)?_c('div',{staticClass:"form__col__row form__col__row--success"},[_vm._v(_vm._s(_vm.setCookieNewsletter())+"Fantastico! Sei dei nostri!")]):_vm._e()])])]),_vm._v(" "),_c('div',{staticClass:"newsletter__row__col"},[_c('div',{staticClass:"social"},[_c('span',{staticClass:"label"},[_vm._v("Seguici su:")]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.facebook.com/baroundit","target":"_blank"}},[_c('span',{staticClass:"icon icon__fb"})]),_vm._v(" "),_c('a',{attrs:{"href":"https://www.instagram.com/baround_/","target":"_blank"}},[_c('span',{staticClass:"icon icon__ig"})])])])])]}}],null,false,1216859991)})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Newsletter.vue?vue&type=template&id=ccd1f1fa&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-mailchimp-subscribe/dist/vue-mailchimp-subscribe.js
var vue_mailchimp_subscribe = __webpack_require__(22);
var vue_mailchimp_subscribe_default = /*#__PURE__*/__webpack_require__.n(vue_mailchimp_subscribe);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Newsletter.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Newslettervue_type_script_lang_js_ = ({
  components: {
    MailchimpSubscribe: vue_mailchimp_subscribe_default.a
  },

  data() {
    return {
      closeNews: false,
      isActive: false,
      showNewsletter: true
    };
  },

  methods: {
    onError() {},

    onSuccess() {},

    showBox() {
      setTimeout(function () {
        this.isActive = true;
      }, 1000);
    },

    setCookieNewsletter: function () {
      this.$cookies.set('newsletterNov', true, 60 * 30);
    },
    setCookieClose: function () {
      this.$cookies.set('closenewsletter', true, 60 * 30);
    }
  },

  mounted() {
    if (this.$cookies.get("newsletterNov")) {
      this.showNewsletter = false;
    }

    if (this.$cookies.get("closenewsletter")) {
      this.showNewsletter = false;
    }

    setTimeout(function (scope) {
      scope.isActive = true;
    }, 5000, this); // console.log(this.isActive);
  },

  created() {}

});
// CONCATENATED MODULE: ./components/Newsletter.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Newslettervue_type_script_lang_js_ = (Newslettervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Newsletter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Newslettervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ccd1f1fa",
  "9804bce6"
  
)

/* harmony default export */ var Newsletter = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map