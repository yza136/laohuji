import Vue from 'vue'
import Vuex from 'vuex'
import lottery from './modules/lottery.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lottery
  }
})
