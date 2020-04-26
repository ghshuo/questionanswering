<template>
  <div id="echarts">
    <div id="myChart"></div>
    <div id="myChart2" style="width:1000px"></div>
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
          data: [
            '直接访问',
            '邮件营销',
            '联盟广告',
            '视频广告',
            '搜索引擎',
            '百度',
            '谷歌',
            '必应',
            '其他'
          ]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '正面',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '1',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '1',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '1',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570]
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      })
    },
    echartsInit2() {
      let myChart = this.$echarts.init(document.getElementById('myChart2'))
      let data = {
        xData: [
          '花溪区',
          '南明区',
          '观山湖区',
          '钟山区',
          '六枝特区',
          '红花岗区',
          '汇川区',
          '遵义县',
          '西秀区',
          '平坝县',
          '玉屏县'
        ],
        yData: [0.1, 0.15, 0.18, 0.25, 0.23, 0.32, 0.33, 0.36, 0.57, 0.72, 0.45]
      }
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: [
          {
            top: 100,
            bottom: 101
          },
          {
            height: 60,
            bottom: 40
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: data.xData,
            gridIndex: 0,
            axisLabel: {
              color: '#333'
            },
            axisLine: {
              lineStyle: {
                color: '#e7e7e7'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#e7e7e7'
              }
            },
            zlevel: 2
          },
          {
            type: 'category',
            gridIndex: 1,
            axisLine: {
              show: false
            },
            zlevel: 1
          }
        ],
        yAxis: [
          {
            type: 'value',
            gridIndex: 0,
            axisLabel: {
              color: '#333'
            },
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            data: data.yData,
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#555'
              }
            },
            itemStyle: {
              normal: {
                color: params => {
                  let colors = [
                    '#4150d8',
                    '#28bf7e',
                    '#ed7c2f',
                    '#f2a93b',
                    '#f9cf36',
                    '#4a5bdc',
                    '#4cd698',
                    '#f4914e',
                    '#fcb75b',
                    '#ffe180',
                    '#b6c2ff',
                    '#96edc1'
                  ]
                  return colors[params.dataIndex]
                }
              }
            },
            xAxisIndex: 0,
            yAxisIndex: 0
          },
          {
            data: [
              {
                name: '贵阳市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '27.2727%',
            itemStyle: {
              normal: {
                color: 'rgba(134,176,237, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '六盘水市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '18.1818%',
            itemStyle: {
              normal: {
                color: 'rgba(40,191,126, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '遵义市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '27.2727%',
            itemStyle: {
              normal: {
                color: 'rgba(237,124,47, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '安顺市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '18.1818%',
            itemStyle: {
              normal: {
                color: 'rgba(242,169,59, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '铜仁市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barCategoryGap: 0,
            barGap: 0,
            barWidth: '9.0909%',
            itemStyle: {
              normal: {
                color: 'rgba(249,207,54, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          }
        ]
      })
    }
  },
  mounted() {
    this.echartsInit()
    this.echartsInit2()
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
