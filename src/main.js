// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index'
import * as filters from '@/filters/filters'
import * as personalInformation from '@/personalInformation/personalInformation'
import '@/assets/css/app'
import '@/assets/font/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filters,
  personalInformation,
  template: '<App/>',
  components: { App }
})
