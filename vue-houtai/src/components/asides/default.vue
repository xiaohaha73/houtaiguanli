<template>
  <el-card>
    <div id="myEcharts" style="width:1000px;height:500px"></div>
  </el-card>

</template>

<script>
export default {
  name: 'default',
  data () {
    return {}
  },
  mounted () {
    // 调用初始化echarts的函数
    this.initEcharts()
  },
  methods: {
    // 初始化echarts的函数
    initEcharts () {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('myEcharts'))
      // 绘制图表
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
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
      })
    }
  }
}
</script>

<style scoped>

</style>
