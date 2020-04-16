import request from '@/src/basic/utils/request.js'
import consts from '@/src/consts.js'
 
request.config.baseUrl = consts.BASE_URL

export default request

export const get = request.get
export const post = request.post
export const put = request.put
export const del = request.del
