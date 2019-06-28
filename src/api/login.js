import request from '@/utils/request';

// axios 使用 示例 post 请求
export function login(data) {
  return request({
    url: '',
    method: 'post',
    data
  });
}

// axios 使用 示例 get 请求
export function getExample(token) {
  return request({
    url: '',
    method: 'get',
    params: { token }
  });
}
