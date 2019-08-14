import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import fastClick from 'fastclick'
import iView from 'iview'
import VueAMap from 'vue-amap'
import 'styles/border.css'
import 'styles/reset.css'
import 'iview/dist/styles/iview.css'
import 'styles/iconfont.css'
import Axios from 'axios'
import echarts from 'echarts'
import Vuex from 'vuex'

Vue.use(Vuex)

// 设置axios为form-data
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.common['Authentication'] = store.state.token
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'
Axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
// 添加请求拦截器
Axios.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.common['Authentication'] = store.state.token
  }
  return config
},
error => {
  return Promise.reject(error)
})
// 响应拦截器
Axios.interceptors.response.use(response => {
  return response
},
error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        this.$store.commit('delToken')
        router.replace({
          path: '/login',
          query: { redirect: router.currentRoute.fullPath } // 登录成功后跳转浏览的当前页面
        })
    }
    return Promise.reject(error.response.data)
  }
})
// 修改原型链
Vue.prototype.$axios = Axios
// echarts 全局配置
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.use(iView)
Vue.use(VueAMap)

VueAMap.initAMapApiLoader({
  key: '56254278ad399b59d219a21f0f975406',
  plugin: [
    'AMap.Autocomplete', // 输入提示插件
    'AMap.PlaceSearch', // POI搜索插件
    'AMap.Scale', // 右下角缩略图插件 比例尺
    'AMap.OverView', // 地图鹰眼插件
    'AMap.ToolBar', // 地图工具条
    'AMap.MapType', // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    'AMap.PolyEditor', // 编辑 折线多，边形
    'AMap.CircleEditor', // 圆形编辑器插件
    'AMap.Geolocation', // 定位控件，用来获取和展示用户主机所在的经纬度位置
    'AMap.Geocoder', // 地理编码与逆地理编码服务，用于地址描述与坐标间的相互转换
    'AMap.AMapUI' // UI组件
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0.11' // 版本号
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
