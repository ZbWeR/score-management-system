import { defineStore } from 'pinia'

enum Roles {
  Teacher = 'teacher',
  Student = 'student'
}

interface IUserStore {
  islogin: boolean
  role: Roles | null
  userid: string | null
  username: string | null
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserStore => ({
    islogin: false,
    role: null,
    userid: null,
    username: null
  }),
  actions: {
    login(uid: string, role: string, username?: string) {
      this.islogin = true
      this.userid = uid
      this.username = username || ''
      this.role = role as Roles
    },
    logout() {
      this.$reset()
    }
  },
  persist: true
})
