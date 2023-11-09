import type { AxiosResponse, InternalAxiosRequestConfig, AxiosRequestConfig } from 'axios'

// 扩展 AxiosRequestConfig
export interface RequestConfig extends AxiosRequestConfig {
  // 拦截器
  interceptors?: RequestInterceptors
  // 错误处理
  callWithErrorHandler?: (fn: () => Promise<any>) => Promise<any>
  // 扩展属性
  options?: RequestConfigOptions
}

export interface RequestInterceptors {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface RequestConfigOptions {
  /** 是否需要 token 鉴权 */
  authRequire?: boolean
}
