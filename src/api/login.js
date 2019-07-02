import request from '@/utils/request'

/**
 * 此函数为测试接口文件演示示例
 */
export function myTest() {
  return request({
    url: '/links',
    method: 'get'
  })
}

// axios 使用 示例 post 请求
export function login(data) {
  return request({
    url: '',
    method: 'post',
    data
  })
}

// axios 使用 示例 get 请求
export function getExample(token) {
  return request({
    url: '',
    method: 'get',
    params: { token }
  })
}
