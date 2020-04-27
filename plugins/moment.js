import Vue from 'vue'
import moment from 'moment'  // 时间格式化
Vue.filter('moment', function(value, pattern = 'YYYY-MM-DD') {
    let val = value*1000;
    if (!val) { return null }
    return moment(val).format(pattern)
  })