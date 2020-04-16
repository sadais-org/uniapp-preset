import request from '@/basic/utils/request'
import consts from '@/consts'

// 创建实例时设置配置的默认值
const instance = request.create({
  baseURL: consts.BASE_URL
})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(res => {
  return res
})

export default instance
