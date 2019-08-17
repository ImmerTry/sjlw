
export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('_c/news/News.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('_c/demo/Demo.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('_c/about/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('_c/contact/Contact.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('_c/news/Detail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('_c/admin/login/Login.vue')
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('_c/admin/login/Signin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('_c/admin/login/Signup.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('_c/admin/Index.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/issue',
    name: 'issue',
    component: () => import('_c/admin/issue/Comment.vue')
  }
]
