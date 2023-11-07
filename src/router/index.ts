import { createRouter, createWebHistory } from 'vue-router'
import errorRouter from './error.router'
import HomeView from '../views/HomeView.vue'

const APP_TITLE = import.meta.env.VITE_APP_TITLE

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: APP_TITLE + ' - 主页'
      }
    },
    errorRouter,
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    // 不匹配的路由重定向到 404 页面
    {
      path: '/:pathMatch(.*)*',
      name: 'not-match',
      redirect: '/404'
    }
  ]
})

// 设置路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = to.meta.title as string
  }

  next()
})

export default router
