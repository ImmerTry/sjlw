import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes,
  mode: 'history'
})
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
