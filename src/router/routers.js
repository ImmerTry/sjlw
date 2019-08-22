import Main from '_c/admin/Index'

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
    meta: {
      title: '登录'
    },
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
    // 首页
    path: '/index',
    meta: {
      requiresAuth: true
    },
    component: Main,
    children: [
      { // 发布文章
        path: '/index',
        name: 'index',
        component: () => import('_c/admin/home/Home.vue')
      }
    ]
  },
  {
    path: '/issue',
    name: 'issue',
    meta: {
      requiresAuth: true
    },
    component: Main,
    children: [
      { // 发布文章
        path: '/article',
        name: 'article',
        component: () => import('_c/admin/issue/Issue.vue')
      }
    ]
  },
  {
    path: '/manage',
    meta: {
      requiresAuth: true
    },
    name: 'manage',
    component: Main,
    children: [
      { // 文章管理
        path: '/articleManage',
        name: 'articleManage',
        component: () => import('_c/admin/manage/Article.vue')
      },
      { // 评论管理
        path: '/comment',
        name: 'comment',
        component: () => import('_c/admin/manage/Comment.vue')
      },
      { // 留言管理
        path: '/message',
        name: 'messageManage',
        component: () => import('_c/admin/manage/Message.vue')
      },
      { // 分类/标签
        path: '/tags',
        name: 'tags',
        component: () => import('_c/admin/manage/Tags.vue')
      },
      { // 图片管理
        path: '/picture',
        name: 'picture',
        component: () => import('_c/admin/manage/Picture.vue')
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      requiresAuth: true
    },
    component: Main,
    children: [
      { // 个人信息
        path: '/info',
        name: 'info',
        component: () => import('_c/admin/setting/Info.vue')
      },
      { // 系统设置
        path: '/setup',
        name: 'setup',
        component: () => import('_c/admin/setting/Setup.vue')
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('_c/admin/issue/demo.vue')
  }
]
