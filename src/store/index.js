import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meals: []
  },
  getters: {
    meals(state) {
      return state.meals
    }    
  },
  mutations: {
    setMeals(state, meals) {
      console.log("Setting", meals)
      state.meals = meals
    }
  },
  actions: {
    async search({commit}, searchString) {
      console.log("Searching: ", searchString)
      try {
        const result = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`)
        console.log(result.data)
        commit('setMeals', result.data.meals)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
