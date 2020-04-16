import request from '@/utils/request'

export const getConfig = async () => {
  const { data } = await request.post('/mobile/config/index', {
    type: 'console'
  })
  return data
}
