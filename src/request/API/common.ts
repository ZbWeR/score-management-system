import service from '../service'
import type { UserInfo } from '@/types/request/common'

/**
 * 用户登录
 * @param account - 用户 ID
 * @param password - 密码
 */
export function userLogin(account: string, password: string, type: string = ''): Promise<UserInfo> {
  return service.request({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    },
    // Test: 密码错误接口
    params: {
      apifoxResponseId: type ? '349388107' : ''
    },
    options: {
      authRequire: false
    }
  })
}
