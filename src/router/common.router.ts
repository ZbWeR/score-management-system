import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/common/HomeView.vue'

const APP_TITLE = import.meta.env.VITE_APP_TITLE

export const commonRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: APP_TITLE + ' - 主页'
    }
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
