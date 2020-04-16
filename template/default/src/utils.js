import merge from 'lodash/merge'
import utils, { importAll } from '@/src/basic/utils'

const baseUtils = importAll(require.context('./utils', true, /\.js$/))

export default merge(utils, baseUtils)
