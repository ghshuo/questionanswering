<template>
  <div id="echarts">
    <div id="myChart"></div>
    <div id="myChart2"></div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'Echarts',
  data() {
    return {}
  },
  methods: {
    echartsInit() {
      // 找到容器
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 开始渲染
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六']
        },  
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
           data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      })
    },
    echartsInit2() {
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      myChart.setOption({
        title: { text: 'echarts 饼图' },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      })
    }
  },
  mounted() {
    this.echartsInit()
    // this.echartsInit2()
  }
}
</script>
<style scoped lang="scss">
#myChart {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
#myChart2 {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: right;
}
</style>
