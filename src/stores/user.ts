import { defineStore } from 'pinia'

enum Roles {
  Teacher = 'teacher',
  Student = 'student'
}

interface IUserStore {
  isLogin: boolean
  token: string | null
  role: Roles | null
  userId: string | null
  username: string | null

  isUserRoutesAdded: boolean // 是否已加载用户路由
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserStore => ({
    isLogin: false,
    token: null,
    role: null,
    userId: null,
    username: null,
    isUserRoutesAdded: false
  }),
  actions: {
    // 设置用户信息
    setInfo(uid: string, role: string, username?: string) {
      this.userId = uid
      this.username = username || ''
      this.role = role as Roles
    },
    // 设置 token & 登录状态
    setToken(token: string) {
      this.isLogin = true
      this.token = token
    },
    // 设置路由加载状态
    setRouteStatus(status: boolean) {
      this.isUserRoutesAdded = status
    },
    logout() {
      this.$reset()
    }
  },
  persist: {
    paths: ['isLogin', 'token', 'role', 'userId', 'username']
  }
})
