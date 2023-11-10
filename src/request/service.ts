import Request from '.'
import type { RequestInterceptors } from '../types/request/service'
import router from '@/router'
import { useUserStore } from '@/stores'
import { messageManager } from '@/components/alert'

const interceptors: RequestInterceptors = {
  // 请求拦截
  requestInterceptor: (config) => {
    const { options } = config as any

    // 需要鉴权的接口添加 token,默认鉴权
    if (options?.authRequire !== false) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return config
  },
  requestInterceptorCatch: (error) => error,

  // 响应拦截
  responseInterceptor: (res) => {
    // 自定义状态码处理
    const { status_code, status_msg } = res.data
    if (status_code) {
      const { url } = res.config
      messageManager.showMessage({
        message: status_msg,
        type: 'error'
      })
      return Promise.reject({ url, message: status_msg })
    }
    return res.data
  },
  // 响应拦截错误处理
  responseInterceptorCatch: (error) => {
    const { response, config } = error
    let errorMessage = ''
    if (!response) errorMessage = 'NetWork Error'
    else errorMessage = codeHandler(response.status)
    messageManager.showMessage({
      message: errorMessage,
      type: 'error'
    })
    return Promise.reject({ url: config.url, message: errorMessage })
  }
}

/**
 * http 常见错误处理.
 * @param code - http 状态码
 * @returns 错误信息
 */
function codeHandler(code: any) {
  switch (code) {
    case 400:
      return '请求错误'
    case 401:
      // 清空 localStorage 跳转登录页
      useUserStore().logout()
      router.push('/auth')
      return '未授权，请登录'
    case 403:
      return '拒绝访问'
    case 404:
      return '请求地址出错'
    case 408:
      return '请求超时'
    case 500:
      return '服务器内部错误'
    case 501:
      return '服务未实现'
    case 502:
      return '网关错误'
    case 503:
      return '服务不可用'
    case 504:
      return '网关超时'
    case 505:
      return 'HTTP版本不受支持'
    default:
      return '未知错误'
  }
}

/**
 * 全局请求错误处理
 * @param fn - 请求函数
 */
async function callWithErrorHandler<T>(fn: () => Promise<T>) {
  try {
    const res = await fn()
    return res
  } catch (error) {
    console.error('Error in Request:', error)
  }
}

// 创建 axios 实例
const service = new Request({
  baseURL: 'https://mock.apifox.com/m1/3548574-0-default',
  // baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json'
  },
  interceptors,
  callWithErrorHandler
})

export default service
