import { createRouter, createWebHistory } from 'vue-router'
import { errorRoutes } from './error.router'
import { commonRoutes } from './common.router'
import { useUserStore } from '@/stores'

// 加载公共路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...commonRoutes,
    ...errorRoutes,

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
  // 鉴权
  if (to.meta.requireAuth) {
    const user = useUserStore()
    if (!user.isLogin) next({ name: 'auth' })
  }

  next()
})

export default router
