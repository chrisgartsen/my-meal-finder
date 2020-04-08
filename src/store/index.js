import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'

Vue.use(Vuex)

const convertIngredients = (meal) => {
  const ingredients = []

  for(let i=1; i<=20; i++) {
    if(meal[`strIngredient${i}`]) {
      const ingr = meal[`strIngredient${i}`]
      const mesr = meal[`strMeasure${i}`]
      ingredients.push({name: ingr, measure: mesr })
    }
  }
  
  const formattedMeal = {
    id: meal.idMeal,
    name: meal.strMeal,
    thumb: meal.strMealThumb,
    instructions: meal.strInstructions,
    ingredients: ingredients
  }
  return formattedMeal
}

export default new Vuex.Store({
  state: {
    searchString: '',
    meals: [],
    meal: null
  },
  getters: {
    searchString(state) {
      return state.searchString
    },
    meals(state) {
      return state.meals
    },
    meal(state) {
      return state.meal
    }    
  },
  mutations: {
    setSearchString(state, searchString) {
      state.searchString = searchString
    },
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
        commit('setSearchString', searchString)
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
        commit('setMeal', convertIngredients(result.data.meals[0]))
      } catch(error) {
        console.log(error)
      }
    }
  }
})
