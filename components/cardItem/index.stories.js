import Vue from 'vue'
import Vuex from 'vuex'
import CardItemComp from './index.vue'
import { state } from '~/store/mutations'

Vue.use(Vuex)

export default {
  title: 'components',
  component: CardItemComp,
}

const store = new Vuex.Store({
  state,
})

export const CardItem = () => ({
  components: { CardItemComp },
  store,
  template: `
    <card-item-comp :code="$store.state.snippets[1]" />
  `,
})
