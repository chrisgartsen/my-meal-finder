import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    meals: [],
    meal: null
  },
  getters: {
    meals(state) {
      return state.meals
    },
    meal(state) {
      return state.meal
    }    
  },
  mutations: {
    setMeals(state, meals) {
      state.meals = meals
    },
    setMeal(state, meal) {
      state.meal = meal
    }
  },
  actions: {
    async search({commit}, searchString) {
      try {
        const result = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`)
        commit('setMeals', result.data.meals)
      } catch (error) {
        console.log(error)
      }
    },
    clearMeal({ commit }) {
      commit('setMeal', null)
    },
    async fetchMeal({ commit }, idMeal) {
      try {
        const result = await Axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        commit('setMeal', result.data.meals[0])
        console.log(result.data)
      } catch(error) {
        console.log(error)
      }
    }
  }
})
