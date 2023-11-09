import type { ScoreInfo } from '@/types/request/student'
import service from '../service'

/**
 * 查询分数
 * @param user_id - 用户 ID
 * @param type - 响应状态
 * - 当 type 为 空 时，返回 200
 * - 当 type 为非空时，返回 401
 */
export function getScore(user_id: number, type = ''): Promise<ScoreInfo> {
  return service.request({
    url: '/get_score',
    method: 'get',
    params: {
      user_id,
      apifoxResponseId: type ? 349282901 : ''
    }
  })
}
