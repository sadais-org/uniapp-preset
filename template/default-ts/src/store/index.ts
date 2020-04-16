import Vue from 'vue'
import Vuex from 'vuex'
import { IIndexState } from './modules/index'

Vue.use(Vuex)

export interface IRootState {
  index: IIndexState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
