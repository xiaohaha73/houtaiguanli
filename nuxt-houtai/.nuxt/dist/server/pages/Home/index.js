exports.ids = [2];
exports.modules = {

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home/index.vue?vue&type=template&id=65befe98&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',[_c('div',{staticStyle:{"width":"1000px","height":"500px"},attrs:{"id":"myEcharts"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Home/index.vue?vue&type=template&id=65befe98&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'Index',

  data() {
    return {};
  },

  mounted() {
    // 调用初始化echarts的函数
    this.initEcharts();
  },

  methods: {
    // 初始化echarts的函数
    initEcharts() {
      // 基于准备好的dom，初始化echarts实例
      const echarts = __webpack_require__(81);

      const myChart = echarts.init(document.getElementById('myEcharts')); // 绘制图表

      myChart.setOption({
        title: {
          text: '在Vue中使用echarts'
        },
        tooltip: {},
        xAxis: {
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 45, 12, 55, 23, 12, 6]
        }]
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/Home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/Home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "65befe98",
  "6e9c3cf8"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map