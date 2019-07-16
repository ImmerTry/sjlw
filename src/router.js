import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./components/news/News.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./components/demo/Demo.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/about/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./components/contact/Contact.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./components/news/Detail.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/admin/Login.vue')
    }
  ]
})
