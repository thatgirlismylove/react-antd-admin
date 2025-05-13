import axios from 'axios'
import { getToken, removeToken } from './storage'
import showError from './error-message'
import { navigateTo } from '@/router/navigate'

const baseURL = import.meta.env.DEV ? '/api' : import.meta.env.VITE_BASE_URL

// 创建 axios 实例
const service = axios.create({
  baseURL,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers['x-token'] = getToken()
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

let isRedirecting = false // 标记是否正在跳转登录页

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 导出文件
    if (response.request?.responseType === 'blob') {
      return response
    }

    const { code, msg } = response.data
    if (code === '000000') {
      return response.data
    } else if (code === '300005' || code === '300002') {
      // 登录失效
      if (!isRedirecting) {
        isRedirecting = true // 标记跳转状态
        removeToken()
        navigateTo('/login')
        isRedirecting = false
      }
      return Promise.reject(new Error(msg || 'Error'))
    } else {

      return response.data
    }
  },
  (error) => {
    if (error.response.data) {
      const { code, msg } = error.response.data
      if (msg) {
        showError(msg)
        return Promise.reject(error)
      }

      // token 失效，缺失
      if (code === '300005' || code === '300002') {
        if (!isRedirecting) {
          isRedirecting = true // 标记跳转状态
          removeToken()
          navigateTo('/login')
          isRedirecting = false
        }
      } else {
        showError(msg)
      }
    }
    return Promise.reject(error.message)
  }
)

// 导出 axios 实例
export default service
