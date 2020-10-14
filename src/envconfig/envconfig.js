/**
 * 全局配置文件
 */

let baseURL

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'http://blogapi.lycpang.cn'
}

export default { baseURL }