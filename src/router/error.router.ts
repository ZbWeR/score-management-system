import type { RouteRecordRaw } from 'vue-router'
import { E404 } from '@/views/errors'

export default {
  path: '/404',
  name: '404',
  component: E404,
  meta: {
    title: '找不到页面'
  }
} satisfies RouteRecordRaw
