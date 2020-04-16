import Vue from 'vue'
import Vuex from 'vuex'

// modules
import index from './modules/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    index
  },
  state: {},
  mutations: {},
  actions: {}
})

export default store
