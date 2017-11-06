import Vue from 'vue'
Vue.filter('time', function (value) {
  let time1 = new Date() // 获取当前时间
  let time2 = new Date(value)
  let times = time1.getTime() - time2.getTime()// 转换成毫秒的时间差
  let a = new Date(times)// 换算成看得懂的时间
  let year = a.getFullYear() - 1970
  let date = a.getDate() - 1
  let hour = a.getHours()
  let minute = a.getMinutes()
  let month = a.getMonth()
  if (year !== 0) {
    return year + '年'
  }
  if (month !== 0) {
    return month + '月前'
  }
  if (date !== 0) {
    return date + '天前'
  }
  if (hour !== 0) {
    return hour + '小时前'
  }
  if (minute !== 0) {
    return minute + '分钟前'
  }
})
