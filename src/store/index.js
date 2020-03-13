import Vue from 'vue'
import Vuex from 'vuex'

import { state } from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state
})
