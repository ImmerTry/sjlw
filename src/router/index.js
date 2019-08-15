import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'

Vue.use(Router)
// 页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
  store.commit('setToken', sessionStorage.getItem('token'))
}

const router = new Router({
  routes,
  mode: 'history'
})
// 导航守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiredAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})
export default router
