import axios from 'axios'
import { getToken } from '@/utils/token'
console.log(process.env.REACT_APP_URL)
// 创建 axios 实例
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(
  config => {
    // 将token 配置到 请求头
    // 假设一个token
    const token = 'reactAdmin'
    if (token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    // 返回错误
    return Promise.reject(error)
  }
)
// 响应拦截
instance.interceptors.response.use(
  response => {
    const res = response.data
    // 请自己根据后台返回的状态码，自己修改下边的判断逻辑 you will todo...
    if (res.code === 200) {
      return res.data
    } else {
      console.log('有问题')
      // 判断状态码, 提示语，自己进行弹窗 todo
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
