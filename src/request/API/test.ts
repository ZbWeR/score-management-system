import service from '../service'
import type { RequestConfigOptions } from '../type'

interface Person {
  name: string
  age: number
}

export function testSuccess(info: Person, options?: RequestConfigOptions) {
  return service.request({
    url: '/test',
    method: 'get',
    params: info,
    options
  })
}

export function testFail(info: Person, options?: RequestConfigOptions) {
  return service.request({
    url: '/test?apifoxResponseId=338300596',
    method: 'get',
    params: info,
    options
  })
}
