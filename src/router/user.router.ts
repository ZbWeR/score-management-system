import type { RouteRecordRaw } from 'vue-router'

// 学生路由
const studentRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    redirect: '/score'
  },
  {
    path: '/score',
    name: 'score',
    meta: { title: '成绩查询', toMenu: true, icon: 'score' },
    component: () => import('../views/student/ScoreDisplayView.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    meta: { title: '申请查分', toMenu: true, icon: 'apply' },
    component: () => import('../views/student/InquiryApplicationView.vue')
  }
]
// 教师路由
const teacherRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home',
    redirect: '/approval'
  },
  {
    path: '/approval',
    name: 'approval',
    meta: { title: '查分审批', toMenu: true, icon: 'check' },
    component: () => import('../views/teacher/InquiryApprovalView.vue')
  },
  {
    path: '/manage',
    name: 'manage',
    meta: { title: '成绩管理', toMenu: true, icon: 'manage' },
    component: () => import('../views/teacher/ScoreManageView.vue')
  },
  {
    path: '/import',
    name: 'import',
    meta: { title: '导入成绩', toMenu: true, icon: 'import' },
    component: () => import('../views/teacher/ScoreImportView.vue')
  }
]

export const userRoutesMap = {
  student: studentRoutes,
  teacher: teacherRoutes
}
