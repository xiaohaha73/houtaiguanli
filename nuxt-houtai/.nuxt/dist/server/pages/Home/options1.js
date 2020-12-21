exports.ids = [3];
exports.modules = {

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("94fb6228", content, true, context)
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options1_vue_vue_type_style_index_0_id_c0c12476_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options1_vue_vue_type_style_index_0_id_c0c12476_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options1_vue_vue_type_style_index_0_id_c0c12476_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options1_vue_vue_type_style_index_0_id_c0c12476_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_options1_vue_vue_type_style_index_0_id_c0c12476_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".marginTop[data-v-c0c12476]{margin-top:15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home/options1.vue?vue&type=template&id=c0c12476&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-card',[_c('el-row',{staticStyle:{"height":"55px"},attrs:{"type":"flex","align":"middle"}},[_c('el-col',{attrs:{"span":5}},[_vm._v("\n        示例表格\n      ")])],1),_vm._v(" "),_c('el-row',{staticClass:"marginTop",attrs:{"type":"flex","justify":"center"}},[_c('el-col',[_c('el-table',{attrs:{"border":"","data":_vm.listData,"stripe":"","cell-style":{'text-align':'center'},"header-cell-style":{'text-align':'center'},"row-style":{'height':'50px'}}},[_c('el-table-column',{attrs:{"prop":"id","label":"#","width":"90px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":"姓名"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"role","label":"权限"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":function($event){return _vm.editClick(scope.row)}}},[_vm._v("编辑")]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"danger"}},[_vm._v("删除")])]}}])})],1)],1)],1),_vm._v(" "),_c('el-row',{staticClass:"marginTop"},[_c('el-col',[_c('el-pagination',{attrs:{"current-page":_vm.currentPage,"page-sizes":[100, 200, 300, 400],"page-size":100,"layout":"total, sizes, prev, pager, next, jumper","total":400},on:{"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Home/options1.vue?vue&type=template&id=c0c12476&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home/options1.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var options1vue_type_script_lang_js_ = ({
  name: 'options1',

  data() {
    return {
      // 表格数据
      listData: [{
        id: 1,
        name: '张三',
        role: '高级管理员'
      }, {
        id: 2,
        name: '张三',
        role: '高级管理员'
      }, {
        id: 3,
        name: '张三',
        role: '高级管理员'
      }, {
        id: 4,
        name: '张三',
        role: '高级管理员'
      }],
      // 当前显示的页
      currentPage: 1
    };
  },

  methods: {
    // 编辑函数
    editClick(item) {
      console.log(item);
    },

    // 每页显示数据条数函数
    handleSizeChange() {},

    // 选中页数函数
    handleCurrentChange() {}

  }
});
// CONCATENATED MODULE: ./pages/Home/options1.vue?vue&type=script&lang=js&
 /* harmony default export */ var Home_options1vue_type_script_lang_js_ = (options1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/Home/options1.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Home_options1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c0c12476",
  "4ee7511d"
  
)

/* harmony default export */ var options1 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=options1.js.map