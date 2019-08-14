
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/components/news/News.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/components/demo/Demo.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/about/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/components/contact/Contact.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/components/news/Detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/admin/login/Login.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/components/admin/login/Signin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/components/admin/login/Signup.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/components/admin/Index.vue')
  }
]
