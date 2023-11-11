import type { RouteRecordRaw } from 'vue-router'

// 学生路由
const studentRoutes: RouteRecordRaw[] = [
  {
    path: '/score',
    name: 'score',
    meta: {
      title: '成绩查询',
      toMenu: true
    },
    component: () => import('../views/student/ScoreDisplayView.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    meta: {
      title: '申请查分',
      toMenu: true
    },
    component: () => import('../views/student/InquiryApplicationView.vue')
  }
]
// 教师路由
const teacherRoutes: RouteRecordRaw[] = []

export const userRoutesMap = {
  student: studentRoutes,
  teacher: teacherRoutes
}
