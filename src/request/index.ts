import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestInterceptors, RequestConfig } from './type'

class Request {
  // axios 实例
  instance: AxiosInstance
  // 自定义拦截器
  interceptors?: RequestInterceptors
  // 全局错误处理
  callWithErrorHandler?: (fn: () => Promise<any>) => Promise<any>

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.callWithErrorHandler = config.callWithErrorHandler

    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  // 发送请求
  async request(config: RequestConfig) {
    if (this.callWithErrorHandler) {
      return this.callWithErrorHandler(() => this.instance.request(config))
    } else return this.instance.request(config)
  }
}

export default Request
