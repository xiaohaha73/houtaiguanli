exports.ids = [1];
exports.modules = {

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("e2c24a7a", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("00a95ecb", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/rightMenu/rightMenu.vue?vue&type=template&id=1cd4ea56&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"menu"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menuToggle),expression:"menuToggle"}],staticClass:"right_menu"},[_c('div',{staticClass:"menu_tab"},[_c('el-row',_vm._l((_vm.tabName),function(item,index){return _c('el-col',{key:index,attrs:{"span":12}},[_c('li',[_c('span',{class:_vm.activeTab === index? 'active':'',on:{"click":function($event){return _vm.activeHandle(index)}}},[_c('i',{class:item.icon}),_vm._v(" "+_vm._s(item.name))])])])}),1)],1),_vm._v(" "),(_vm.activeTab === 0)?_c('div',{staticClass:"menu_content"},[_c('el-scrollbar',{staticStyle:{"height":"100%"}},[_c('div',{staticClass:"comment_top"},[_c('h6',[_c('i',{staticClass:"el-icon-s-comment"}),_vm._v("最新消息")]),_vm._v(" "),_c('small',[_vm._v("你有10条消息未读")])]),_vm._v(" "),_c('el-card',{attrs:{"shadow":"hover"}},[_c('div',{staticStyle:{"margin":"-10px 0 -10px 0"},attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"nickname"},[_vm._v("法外狂徒张三")]),_vm._v(" "),_c('small',[_vm._v("2020.11.22")])]),_vm._v(" "),_c('div',{staticClass:"card_text"},[_vm._v("\n            两袖清风，岂敢误佳人?\n          ")])]),_vm._v(" "),_c('el-card',{attrs:{"shadow":"hover"}},[_c('div',{staticStyle:{"margin":"-10px 0 -10px 0"},attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"nickname"},[_vm._v("法外狂徒张三")]),_vm._v(" "),_c('small',[_vm._v("2020.11.22")])]),_vm._v(" "),_c('div',{staticClass:"card_text"},[_vm._v("\n            你还有很大的进步空间哦\n          ")])]),_vm._v(" "),_c('el-card',{attrs:{"shadow":"hover"}},[_c('div',{staticStyle:{"margin":"-10px 0 -10px 0"},attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"nickname"},[_vm._v("法外狂徒张三")]),_vm._v(" "),_c('small',[_vm._v("2020.11.22")])]),_vm._v(" "),_c('div',{staticClass:"card_text"},[_vm._v("\n            震惊！！！王某人挑战多人运动\n          ")])]),_vm._v(" "),_c('el-card',{attrs:{"shadow":"hover"}},[_c('div',{staticStyle:{"margin":"-10px 0 -10px 0"},attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"nickname"},[_vm._v("法外狂徒张三")]),_vm._v(" "),_c('small',[_vm._v("2020.11.22")])]),_vm._v(" "),_c('div',{staticClass:"card_text"},[_vm._v("\n            时间就是金钱，加油打工人\n          ")])]),_vm._v(" "),_c('el-card',{attrs:{"shadow":"hover"}},[_c('div',{staticStyle:{"margin":"-10px 0 -10px 0"},attrs:{"slot":"header"},slot:"header"},[_c('span',{staticClass:"nickname"},[_vm._v("法外狂徒张三")]),_vm._v(" "),_c('small',[_vm._v("2020.11.22")])]),_vm._v(" "),_c('div',{staticClass:"card_text"},[_vm._v("\n            金坷垃，我要金坷垃\n          ")])])],1)],1):_vm._e(),_vm._v(" "),(_vm.activeTab === 1)?_c('div',{staticClass:"menu_content"},[_c('el-scrollbar',{staticStyle:{"height":"100%"}},[_c('div',{staticClass:"edit_top"},[_c('h6',[_c('i',{staticClass:"el-icon-s-comment"}),_vm._v("基本设置")])]),_vm._v(" "),_c('el-row',{staticStyle:{"height":"45px","border-bottom":"1px solid #cccccc","text-align":"center"},attrs:{"type":"flex","align":"middle"}},[_c('el-col',{staticClass:"fontStyle",attrs:{"span":12}},[_vm._v("\n            收起左侧菜单\n          ")]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.AsideToggleHandle()}}},[_vm._v("\n              "+_vm._s(_vm.leftToggle? 'on':'off')+"\n            ")])],1)],1)],1)],1):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/rightMenu/rightMenu.vue?vue&type=template&id=1cd4ea56&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/rightMenu/rightMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ['activeTab', 'menuToggle', 'leftToggle']
/* harmony default export */ var rightMenuvue_type_script_lang_js_ = ({
  name: 'RightMenu',
  props: {
    activeTab: {
      type: Number,
      default: 0
    },
    menuToggle: {
      type: Boolean,
      default: false
    },
    leftToggle: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // 右侧tab标签名称
      tabName: [{
        name: '消息',
        icon: 'el-icon-message-solid'
      }, {
        name: '菜单',
        icon: 'el-icon-menu'
      }]
    };
  },

  methods: {
    // 右侧tab栏选中函数
    activeHandle(index) {
      this.activeTab = index;
    },

    // 控制父级组件的左侧导航栏的收起和展开的点击事件
    AsideToggleHandle() {
      // 将控制左侧导航栏开关的变量传递回给父级组件
      this.$emit('leftToggle');
    }

  }
});
// CONCATENATED MODULE: ./components/rightMenu/rightMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var rightMenu_rightMenuvue_type_script_lang_js_ = (rightMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/rightMenu/rightMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rightMenu_rightMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1cd4ea56",
  "f5ce6782"
  
)

/* harmony default export */ var rightMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/avator.996eaaf.jpg";

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rightMenu_vue_vue_type_style_index_0_id_1cd4ea56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rightMenu_vue_vue_type_style_index_0_id_1cd4ea56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rightMenu_vue_vue_type_style_index_0_id_1cd4ea56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rightMenu_vue_vue_type_style_index_0_id_1cd4ea56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rightMenu_vue_vue_type_style_index_0_id_1cd4ea56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fontStyle[data-v-1cd4ea56]{font-family:\"open sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:13px;color:#676a6c}.menu-enter[data-v-1cd4ea56],.menu-leave-to[data-v-1cd4ea56]{transform:translateX(250px)}.menu-enter-active[data-v-1cd4ea56],.menu-leave-active[data-v-1cd4ea56]{transition:all .8s ease}.right_menu[data-v-1cd4ea56]{overflow:hidden;position:absolute;z-index:99999;display:block;width:250px;height:500px;background-color:#f9f9f9;right:0;top:55px;border:1px solid #999c9e}.right_menu .menu_tab[data-v-1cd4ea56]{height:45px}.right_menu .menu_tab .el-row[data-v-1cd4ea56]{height:100%}.right_menu .menu_tab .el-row .el-col[data-v-1cd4ea56]{height:100%;line-height:45px;background-color:#545c64;cursor:pointer}.right_menu .menu_tab .el-row .el-col li[data-v-1cd4ea56]{text-align:center}.right_menu .menu_tab .el-row .el-col li span[data-v-1cd4ea56]{color:#f9f9f9;display:block}.right_menu .menu_tab .el-row .el-col li .active[data-v-1cd4ea56]{background-color:#f9f9f9;color:#676a6c}.right_menu .menu_content[data-v-1cd4ea56]{height:100%}.right_menu .menu_content .comment_top[data-v-1cd4ea56]{height:100px;padding:27px 10px 25px 25px;box-sizing:border-box}.right_menu .menu_content .comment_top h6[data-v-1cd4ea56]{font-size:17px}.right_menu .menu_content .el-card[data-v-1cd4ea56]{margin:0 0 5px 3px;width:97%;position:relative}.right_menu .menu_content .el-card .el-card__header .nickname[data-v-1cd4ea56]{color:#409eff}.right_menu .menu_content .el-card .el-card__header small[data-v-1cd4ea56]{position:absolute;left:164px;top:9px}.right_menu .menu_content .el-card .card_text[data-v-1cd4ea56]{font-size:14px;color:#606266}.right_menu .menu_content .edit_top[data-v-1cd4ea56]{height:50px;background-color:#efefef;padding:16px 10px 14px 25px;box-sizing:border-box}.right_menu .menu_content .edit_top h6[data-v-1cd4ea56]{font-size:17px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_82cf3382_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_82cf3382_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_82cf3382_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_82cf3382_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_82cf3382_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fontStyle[data-v-82cf3382]{font-family:\"open sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:13px;color:#676a6c}.el-menu-item a[data-v-82cf3382]{color:#f9f9f9}.el-menu-item a[data-v-82cf3382]:focus{color:#ffd04b}.el-submenu .el-menu-item[data-v-82cf3382]{min-width:0}.el-menu[data-v-82cf3382]{border-right:none}.el-tag[data-v-82cf3382]{cursor:pointer}.el-aside[data-v-82cf3382]{background-color:#545c64}.el-aside .manager[data-v-82cf3382]{height:150px;position:relative}.el-aside .manager .avator[data-v-82cf3382]{width:80px;height:80px;overflow:hidden;border:2px solid #fff;border-radius:50%;position:absolute;top:10px;left:55px}.el-aside .manager .avator img[data-v-82cf3382]{width:100%;height:100%}.el-aside .manager .nickname[data-v-82cf3382]{text-align:center;position:absolute;left:57px;bottom:33px}.el-aside .manager .nickname span[data-v-82cf3382]{font-size:14px;color:#999c9e}.el-aside .manager .nick[data-v-82cf3382]{position:absolute;bottom:10px;left:57px;color:#fff;font-size:15px;cursor:pointer}.el-header[data-v-82cf3382]{width:100%;padding:0;position:relative}.el-header .header_top[data-v-82cf3382]{width:100%;height:55px;background-color:#f3f3f4}.el-header .header_top .aside_btn>.el-button[data-v-82cf3382]{margin-left:10px}.el-header .header_top .notes .el-col[data-v-82cf3382]{position:relative}.el-header .header_top .notes .el-col[data-v-82cf3382]:hover{background-color:#eee}.el-header .header_top .notes .el-col div[data-v-82cf3382]{display:block;height:55px;width:100%;text-align:center;line-height:55px}.el-header .header_top .notes .el-col div .item[data-v-82cf3382]{position:absolute;top:-4px;left:16px}.el-header .tag[data-v-82cf3382]{background-color:#fff;height:45px;border-bottom:2px solid #293846}.el-header .tag .el-tag[data-v-82cf3382]{margin-left:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home.vue?vue&type=template&id=82cf3382&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home",staticStyle:{"height":"100%"}},[_c('el-container',{staticStyle:{"height":"100%"}},[_c('el-aside',{attrs:{"width":_vm.collapse ? '64px':'200px'}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.collapse),expression:"!collapse"}],staticClass:"manager"},[_c('div',{staticClass:"avator"},[_c('img',{attrs:{"src":__webpack_require__(86),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"nickname"},[_c('span',[_vm._v("王某人")])]),_vm._v(" "),_c('el-dropdown',{staticClass:"nick"},[_c('span',{staticClass:"el-dropdown-link"},[_vm._v("\n            超级管理员"),_c('i',{staticClass:"el-icon-arrow-down el-icon--right"})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',[_vm._v("修改头像")]),_vm._v(" "),_c('el-dropdown-item',[_vm._v("个人资料")]),_vm._v(" "),_c('el-dropdown-item',[_vm._v("联系我们")]),_vm._v(" "),_c('el-dropdown-item',[_vm._v("信箱")]),_vm._v(" "),_c('el-dropdown-item',{attrs:{"divided":""}},[_vm._v("\n              安全退出\n            ")])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"list"},[_c('el-menu',{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","unique-opened":"","collapse":_vm.collapse},on:{"select":_vm.asideSelect}},[_c('el-submenu',{attrs:{"index":"1"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"el-icon-location"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("导航一")])]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"/Home/options1"}},[_c('el-menu-item',{attrs:{"index":"/options1/1-1"}},[_vm._v("\n                1-1\n              ")])],1)],2),_vm._v(" "),_c('el-submenu',{attrs:{"index":"2"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"el-icon-menu"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("导航二")])]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"/Home/options2"}},[_c('el-menu-item',{attrs:{"index":"/options2/2-1"}},[_vm._v("\n                2-1\n              ")])],1)],2),_vm._v(" "),_c('el-submenu',{attrs:{"index":"3"}},[_c('template',{slot:"title"},[_c('i',{staticClass:"el-icon-document"}),_vm._v(" "),_c('span',{attrs:{"slot":"title"},slot:"title"},[_vm._v("导航三")])]),_vm._v(" "),_c('NuxtLink',{attrs:{"to":"/Home/options3"}},[_c('el-menu-item',{attrs:{"index":"/options3/3-1"}},[_vm._v("\n                3-1\n              ")])],1)],2)],1)],1)]),_vm._v(" "),_c('el-container',{staticStyle:{"width":"100%"}},[_c('el-header',{attrs:{"height":"100px"}},[_c('el-row',{staticClass:"header_top",attrs:{"type":"flex","align":"middle"}},[_c('el-col',{staticClass:"aside_btn",attrs:{"span":4}},[_c('el-button',{attrs:{"type":"primary","icon":_vm.collapse?'el-icon-s-unfold':'el-icon-s-fold'},on:{"click":_vm.AsideToggle}})],1),_vm._v(" "),_c('el-col',{staticClass:"search_box",attrs:{"span":6}},[_c('el-input',{attrs:{"placeholder":"请输入内容","clearable":""}},[_c('el-button',{attrs:{"slot":"append","icon":"el-icon-search"},slot:"append"})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":5,"offset":2}},[_c('h4',[_vm._v("后台管理系统")])]),_vm._v(" "),_c('el-col',{staticClass:"notes",attrs:{"span":7,"offset":2}},[_c('el-row',{attrs:{"gutter":10,"type":"flex","align":"middle"}},[_c('el-col',{staticStyle:{"padding":"0"},attrs:{"span":5}},[_c('div',{on:{"click":function($event){_vm.showMenu (0)}}},[_c('i',{staticClass:"el-icon-message-solid"}),_vm._v(" "),_c('el-badge',{staticClass:"item",attrs:{"value":12}})],1)]),_vm._v(" "),_c('el-col',{staticStyle:{"padding":"0"},attrs:{"span":5}},[_c('div',{on:{"click":function($event){_vm.showMenu (1)}}},[_c('i',{staticClass:"el-icon-menu"}),_vm._v(" "),_c('el-badge',{staticClass:"item",attrs:{"is-dot":""}})],1)]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-dropdown',[_c('span',{staticClass:"el-dropdown-link"},[_vm._v("\n                    王某人"),_c('i',{staticClass:"el-icon-arrow-down el-icon--right"})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',[_vm._v("安全退出")])],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('el-row',{staticClass:"tag",attrs:{"type":"flex","align":"middle"}},_vm._l((_vm.asidesItems),function(item,index){return _c('el-tag',{key:index,attrs:{"closable":item.tagname !== '首页',"type":item.active? 'warning':''},on:{"click":function($event){return _vm.tagClick(item)},"close":function($event){return _vm.tagClose(item)}}},[_vm._v("\n            "+_vm._s(item.tagname)+"\n          ")])}),1),_vm._v(" "),_c('RightMenu',{attrs:{"active-tab":_vm.activeTab,"menu-toggle":_vm.menuToggle,"left-toggle":_vm.collapse},on:{"leftToggle":_vm.AsideToggle}})],1),_vm._v(" "),_c('el-main',[_c('NuxtChild')],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Home.vue?vue&type=template&id=82cf3382&scoped=true&

// EXTERNAL MODULE: ./components/rightMenu/rightMenu.vue + 4 modules
var rightMenu = __webpack_require__(85);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'Home',
  components: {
    RightMenu: rightMenu["default"] // 右侧菜单栏组件

  },

  data() {
    return {
      // 控制左侧侧边栏的收齐和展开
      collapse: false,
      // 右侧已经打开过的导航标签的数组
      asidesItems: [{
        url: '/',
        tagname: '首页',
        active: true // 是否处于选中状态标签

      } // 默认含有一个首页标签
      ],
      // 控制右侧菜单栏的收起和展开
      menuToggle: false,
      // 默认关闭
      // 控制右侧tab栏选中标签的索引值
      activeTab: 0 // 设置默认值为0

    };
  },

  methods: {
    // 控制侧边栏显示和隐藏的函数
    AsideToggle() {
      this.collapse = !this.collapse;
    },

    // 左侧导航栏选中函数
    asideSelect(key) {
      // 先将asidesItems中的控制是否选中全都设置成false
      this.asidesItems.forEach(item => {
        item.active = false;
      });
      const tag = {};
      tag.url = '/' + key.split('/')[1];
      tag.tagname = key.split('/')[2];
      tag.active = true; // 因为是点选中，所以要设置为选中状态
      // 判断导航标签的数组中是否存在该索引值

      const isExistence = this.asidesItems.find(item => {
        return item.url === tag.url;
      });

      if (!isExistence) {
        this.asidesItems.push(tag);
      } // 修复了isExistence出现未定义的bug


      if (isExistence) {
        // 数组中存在这个索引值的情况找到数组中这歌元素改为选中状态
        isExistence.active = true;
      }

      return false;
    },

    // tag标签点击跳转函数
    tagClick(item) {
      const url = item.url;
      this.$router.push('/Home' + url); // 重新设置选中状态
      // 先将asidesItems中的控制是否选中全都设置成false

      this.asidesItems.forEach(item => {
        item.active = false;
      });
      const activeTag = this.asidesItems.find(item => {
        return item.url === url;
      }); // 设置为选中状态

      activeTag.active = true;
    },

    // tag标签关闭函数
    tagClose(item) {
      // 从列表中删除这个标签
      const url = item.url;
      const tagIndex = this.asidesItems.findIndex(item => {
        return item.url === url;
      }); // 根据索引值进行删除

      this.asidesItems.splice(tagIndex, 1); // 重新规定选中的标签,选中最后一个标签

      const activeTag = this.asidesItems[this.asidesItems.length - 1]; // 调用选中函数

      this.tagClick(activeTag);
    },

    // 显示右侧栏的函数
    showMenu(index) {
      this.menuToggle = !this.menuToggle; // 传递索引值

      this.activeTab = index;
    }

  }
});
// CONCATENATED MODULE: ./pages/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/Home.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(89)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "82cf3382",
  "448e7d82"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {RightMenu: __webpack_require__(85).default})


/***/ })

};;
//# sourceMappingURL=Home.js.map