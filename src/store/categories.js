import Axios from 'axios'

export default {
  store: {
    categories: []
  },

  getters: {
    categories(state) {
      return state.categories
    }
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    }
  },

  actions: {
    async fetchCategories({ commit }) {
      try {
        const result = await Axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        commit('setCategories', result.data.categories)
      } catch(error) {
        console.log(error)
      }
    }
  }

}