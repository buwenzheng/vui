import Vue from 'vue'
import FastClick from 'fastclick'
import Axios from 'axios'
import Vui from '../index.js'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'

// import Local from '../config/local.js'
import App from '@/App'
// import router from '@/router'
// import Ypp from '@/assets/js/ypp.js'
// import MixinCommon from '@/mixin/common.js'
// import Api from '@/assets/js/api.js'
// import Store from '@/store'
import '@/assets/css/style.scss'
// import vconsole from 'vconsole'
// import infiniteScroll from 'vue-infinite-scroll'
// Vue.use(infiniteScroll) //需要无限滚动加载时使用
// Vue.use(vconsole)
// let store = Store.vuex;
// Vue.use(MintUI)
Vue.use(Vui)
// Vue.use(Ypp)
// Vue.use(Store) // 引入数据中心
// Vue.use(Api) // 引入后端接口
Vue.config.productionTip = false
Vue.prototype.$axios = Axios // 引入axios用于请求数据
// Vue.prototype.$YPP.act_name = Local.name // 活动名称
// Vue.prototype.$busy = false // 请求保护

// document.title = Local.title

FastClick.attach(document.body)// 添加fastclick

// Vue.mixin(MixinCommon) // 注入mixin
/* // 手机号显示为158****2168的格式
Vue.filter('phoneMin', phone => {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
});
// 下拉显示默认文字
Vue.filter('selected', (value) => {
  return value !== '' ? value : '请选择';
});
// 显示日期转换
Vue.filter('dateToChinese', date => {
  let str = '';
  let list = {
    '7': '周日',
    '1': '周一',
    '2': '周二',
    '3': '周三',
    '4': '周四',
    '5': '周五',
    '6': '周六'
  }
  date.forEach(a => {
    str += list[a];
  });
  return str;
}); */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // store,
  template: '<App/>',
  components: { App }
})
