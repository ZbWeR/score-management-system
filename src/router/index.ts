import { createRouter, createWebHistory } from 'vue-router'
import { errorRoutes } from './error.router'
import { commonRoutes } from './common.router'
import { studentRoutes } from './student.router'
import { teacherRoutes } from './teacher.router'
import { useUserStore } from '@/stores'

// 动态路由
let isUserRoutesAdded = false
const userRoutesMap = {
  student: studentRoutes,
  teacher: teacherRoutes
}

// 不匹配的路由重定向到 404 页面
const notMatchRoute = {
  path: '/:pathMatch(.*)*',
  name: 'not-match-redir',
  redirect: '/404'
}

// 加载公共路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...commonRoutes, ...errorRoutes]
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
    if (!user.isLogin) return next({ name: 'auth' })
  }

  // 加载用户路由
  if (!isUserRoutesAdded) {
    const user = useUserStore()
    if (user.isLogin && user.role) {
      userRoutesMap[user.role].forEach((route) => {
        router.addRoute('applayout', route)
      })
      isUserRoutesAdded = true
      router.addRoute(notMatchRoute)
      return next({ ...to, replace: true })
    }
  }

  next()
})

export default router
