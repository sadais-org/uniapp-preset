import $basicConsts from '@/src/basic/consts.js'

// TODO 修改本项目的配置
export default {
  ...$basicConsts,
  BASE_URL: 'http://api.daxiazn.cn',
  FILE_HOST: 'http://m-img.daxiazn.cn/img/v2.0/', // file host
  LOGIN_PATH: 'src/pages/login/index',
  INDEX_PATH: 'src/pages/index/index',
  API_AUTH: 'Basic c2lnbmV0OlNpZ25ldDA3NTY4NzQ3NDAw', // 如果服务器开启了AUTH验证
  TOKEN_KEY: 'jwttoken',
  TOKEN_API: '/api/user/account/v1/login/getaccesstoken',
  ENCRPY_KEY: [119, 242, 211, 219, 137, 201, 138, 145, 65, 222, 145, 171, 213, 17, 129, 200], // 加密秘钥
  IS_ENCRPY_DATA: false // 对发送的参数进行加密
  // TOKEN_EXCEPTION_PROCESS: false // 自定义处理token异常情况
}
