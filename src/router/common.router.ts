import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/views/AppLayout.vue'

export const commonRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'appLayout',
    component: AppLayout,
    meta: {
      requireAuth: true
    },
    children: [
      // 动态路由添加至此
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {
      title: '登录'
    },
    component: () => import('../views/common/LoginView.vue')
  }
]
