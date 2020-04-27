import Vue from 'vue'
import Vuex from 'vuex'

import meals from './meals'
import categories from './categories'

Vue.use(Vuex)

export default new Vuex.Store({
  namespace: true,
  modules: {
    meals,
    categories
  }
})
