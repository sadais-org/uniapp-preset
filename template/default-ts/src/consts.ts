
const FILE_HOST = '/static/img/'

export enum HttpRetCode {
  SUCCESS = 0,
  FAIL = 1,
  TOKEN_UNDEFINED = 19,
  TOKEN_EXPIRED = 2
}

export interface ICONSTS {
  FILE_HOST: string
  BASE_URL: string
  TOKEN_KEY: string
  TOKEN_EXPIRED: number
  TOKEN_UNDEFINED: number
  AGENT_KEY: string
  SADAIS_AGENT: string // agent相关
  API_LOGIN: string // 登录相关
  RET_CODE: {
    SUCCESS: HttpRetCode
    FAIL: HttpRetCode
    TOKEN_UNDEFINED: HttpRetCode
    TOKEN_EXPIRED: HttpRetCode
  } // 返回RET状态码解析
}

export default {
  VERSION: '1.0.1', // 版本号
  NAME: 'EPIDEMIC',
  // 正式环境：http://sa.signetz.com
  // 开发环境：https://dev-seal.signetz.com
  BASE_URL: 'https://epidemic.sadais.com',
  DEV_BASE_URL: 'http://devseal.signetz.com',
  FILE_HOST, // file host
  LOGIN_PATH: 'src/pages/login/index',
  INDEX_PATH: 'src/pages/index/index',
  API_AUTH: 'Basic c2lnbmV0OlNpZ25ldDA3NTY4NzQ3NDAw', // 如果服务器开启了AUTH验证
  IS_ENCRPY_DATA: false, // 对发送的参数进行加密
  TOKEN_EXCEPTION_PROCESS: false, // 自定义处理token异常情况
  DEFAULT_AVATAR: FILE_HOST + 'common_ic_touxiang.png', // 默认头像
  DEFAULT_DEBOUNCE: 200
}
