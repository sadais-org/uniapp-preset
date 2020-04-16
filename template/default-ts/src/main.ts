// 自定义导航栏
import CustomNavi from '@/PiUI-basic/components/custom-navi.vue'
// 自定义导航栏
import StarScore from '@/PiUI-basic/components/star-score.vue'
/* 全局组件注册 */
// 状态栏
import StatusBar from '@/PiUI-basic/components/status-bar.vue'
import store from '@/store/'
// 引入basic
import utils from '@/utils'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Vue from 'vue'
import App from './App.vue'


Vue.component('status-bar', StatusBar)

Vue.component('custom-navi', CustomNavi)

Vue.component('star-score', StarScore)

Vue.config.productionTip = false

Vue.config.errorHandler = function(err, vm, info) {
  console.error(err, vm, info)
}

App.mpType = 'app'

Vue.prototype.$store = store

Vue.prototype.$utils = utils
console.log('安装$utils模块到Vue.prototype下，调用方式：this.$utils', Vue.prototype.$utils)

Vue.prototype.$loading = utils.common.toast.loading
Vue.prototype.$hideLoading = utils.common.toast.hideLoading
console.log('安装$loading模块到Vue.prototype下，调用方式：this.$loading', Vue.prototype.$loading)
console.log('安装$hideLoading模块到Vue.prototype下，调用方式：this.$hideLoading', Vue.prototype.$hideLoading)

const consts = utils.common.getConsts()
Vue.prototype.$consts = consts
console.log('安装$consts模块到Vue.prototype下，调用方式：this.$consts', Vue.prototype.$consts)

dayjs.locale('zh-cn')
Vue.prototype.$dayjs = dayjs
console.log('安装$dayjs模块到Vue.prototype下，调用方式：this.$dayjs', Vue.prototype.$dayjs)

// 注册
Vue.filter('dateFilter', function(value: dayjs.ConfigType) {
  if (!value) return ''
  return dayjs(value).format('YYYY.MM.DD HH:mm:ss')
})

new App().$mount()
