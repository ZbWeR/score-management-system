/**
 * 通用返回数据类型
 */
export interface BaseResponse {
  // ? 或许可以更新为 enum 属性
  status_code: number // 状态码
  status_msg: string // 状态描述
}

/**
 * 登录接口返回的信息
 */
export interface UserInfo extends BaseResponse {
  user_id: string
  role: string
  token: string
}
