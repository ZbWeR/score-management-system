import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { commonRoutes } from './common.router'
import { userRoutesMap } from './user.router'
import { useUserStore } from '@/stores'
import { messageManager } from '@/components/alert'

const APP_TITLE = import.meta.env.VITE_APP_TITLE

// 动态路由移除函数集合
const removeDynamicRouteFns: (() => void)[] = []

// 不匹配的路由跳转 404 页面
const notMatchRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'not-match-redirect',
  meta: { title: '页面不存在' },
  component: () => import('@/views/errors/404.vue')
}

/**
 * 路由说明:
 * 1. 用户未登录,访问不存在路由,跳转 404,提示页面不存在
 * 2. 用户未登录,访问动态路由,跳转登录页
 * 3. 用户已登录,访问不存在路由,跳转 404,提示页面不存在
 * 4. 用户已登录,访问非自己角色的动态路由,跳转 404,提示无权限.
 */

// 加载公共路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...commonRoutes, notMatchRoute]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 获取用户状态
  const user = useUserStore()

  // 设置页面标题
  if (to.meta.title) {
    const title = (to.meta.title ? to.meta.title + ' - ' : '') + APP_TITLE
    document.title = title
  }

  // 鉴权
  if (to.meta.requireAuth && !user.isLogin) {
    return next({ name: 'auth' })
  }

  // 加载用户路由
  if (!user.isUserRoutesAdded) {
    if (user.isLogin && user.role) {
      router.removeRoute('not-match-redirect')
      userRoutesMap[user.role].forEach((route) => {
        const fn = router.addRoute('appLayout', route)
        removeDynamicRouteFns.push(fn)
      })
      user.setRouteStatus(true)
      router.addRoute(notMatchRoute)
      return next({
        path: to.path,
        replace: true
      })
    }
  }

  // 404 路由特殊处理
  if (to.name === 'not-match-redirect') {
    // 是否为动态路由
    const { path } = to
    const isDynamicRoute = Object.keys(userRoutesMap).some((role) => {
      return userRoutesMap[role as 'student' | 'teacher'].some((route) => {
        return route.path === path
      })
    })
    if (isDynamicRoute) {
      // 未登录跳转至登陆页
      if (!user.isLogin) {
        messageManager.showMessage({ message: '请先登录', type: 'error' })
        return next({ name: 'auth' })
      }
      // 已登录并且 not-match-redirect 说明角色不符
      else {
        messageManager.showMessage({ message: '没有权限', type: 'error' })
        return next()
      }
    }
  }
  next()
})

export default router

/**
 * 清除动态路由
 */
export function resetRouter() {
  removeDynamicRouteFns.forEach((fn) => {
    fn()
  })
}
