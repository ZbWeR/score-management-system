import type { RouteRecordRaw } from 'vue-router'
import { E404 } from '@/views/errors'

export const errorRoutes: RouteRecordRaw[] = [
  {
    name: '404',
    path: '/404',
    component: E404,
    meta: {
      title: '未找到页面'
    }
  }
]
