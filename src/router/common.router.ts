import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/views/AppLayout.vue'
import HomeView from '@/views/common/HomeView.vue'

const APP_TITLE = import.meta.env.VITE_APP_TITLE

export const commonRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'appLayout',
    component: AppLayout,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
        meta: {
          title: APP_TITLE + ' - 主页'
        }
      }
      // 动态路由添加至此
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/common/LoginView.vue')
  }
]
