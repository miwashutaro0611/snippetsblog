import { Store } from 'vuex'

import { state } from './mutations'

const store = () =>
  new Store({
    state
  })

export default store
