import type { RouteRecordRaw } from 'vue-router'
import AppLayout from '@/views/AppLayout.vue'
import HomeView from '@/views/common/HomeView.vue'

const APP_TITLE = import.meta.env.VITE_APP_TITLE

export const commonRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'applayout',
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
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // }
]
