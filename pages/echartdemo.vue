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
        series:[
          {
            name:'次数',
            type:'bar',
            barWidth: '50%',
            data:  [10, 52, 20, 34, 30, 30,
                0,13,
                32,14,
                3,23,
                39,1,32,
                12,12,12],
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    label: {
                        show: true,//是否展示
                        textStyle: {
                            fontWeight:'bolder',
                            fontSize : '11',
                            fontFamily : '微软雅黑',
                        }
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    color: '#000000',
                    position: 'top'
                }
            }
        }
        ]
        // series: [
        //   {
        //     name: '直接访问',
        //     type: 'bar',
        //     stack: '总量',
        //     label: {
        //       show: true,
        //       position: 'insideRight'
        //     },
        //     data: [320, 332, 301, 334, 390, 330, 320]
        //   },
        //   {
        //     name: '邮件营销',
        //     type: 'bar',
        //     stack: '总量',
        //     label: {
        //       show: true,
        //       position: 'insideRight'
        //     },
        //     data: [320, 332, 301, 334, 390, 330, 320]
        //   },
        //   {
        //     name: '联盟广告',
        //     type: 'bar',
        //     stack: '总量',
        //     label: {
        //       show: true,
        //       position: 'insideRight'
        //     },
        //     data: [320, 332, 301, 334, 390, 330, 320]
        //   }
        // ]
      })
    },
    echartsInit2() {
      let myChart = this.$echarts.init(document.getElementById('myChart2'));
      var _yAxis = [10, 52, 20, 34, 30, 30,
                0,13,
                32,14,
                3,23,
                39,1,32,
                12,12,12];
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          // data: ['直接访问', '邮件营销', '联盟广告']
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
            data: [
                  '淡白', '淡红', 
                  '尖红', '边尖红',
                    '明显','不明显',
                    '明显','不明显',
                    '明显','不明显',
                    '薄腻','厚腻',
                    '薄','黄',
                    '白','薄白'],
                  
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
         series : [
        {
            name:'次数',
            type:'bar',
            barWidth: '50%',
            data: _yAxis,
            itemStyle: {
                normal: {
                    //柱形图圆角，初始化效果
                    barBorderRadius:[50, 50, 0, 0],
                    label: {
                        show: true,//是否展示
                        textStyle: {
                            fontWeight:'bolder',
                            fontSize : '11',
                            fontFamily : '微软雅黑',
                        }
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    color: '#000000',
                    position: 'top'
                }
            }
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
