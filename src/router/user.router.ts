import type { RouteRecordRaw } from 'vue-router'
const APP_TITLE = import.meta.env.VITE_APP_TITLE

// 学生路由
const studentRoutes: RouteRecordRaw[] = [
  {
    path: '/score',
    name: 'score',
    meta: {
      title: `${APP_TITLE} - 我的成绩`
    },
    component: () => import('../views/student/ScoreDisplayView.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    component: () => import('../views/student/InquiryApplicationView.vue')
  }
]
// 教师路由
const teacherRoutes: RouteRecordRaw[] = []

export const userRoutesMap = {
  student: studentRoutes,
  teacher: teacherRoutes
}
