import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 引入echarts.js数据可视化插件
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
