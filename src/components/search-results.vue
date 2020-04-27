<template>
<div class="result-container">
  <p class="search-string">Results for:  {{ searchString }}</p>
  <div class="search-results">
    <div class="meal" v-for="meal in meals" :key="meal.idMeal" @click="showDetail(meal.idMeal)">
      <div class="meal-title">
        <h3>{{ meal.strMeal }}</h3>
      </div>
      <img :src="meal.strMealThumb" />
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'search-results',

  computed: {
    meals() {
      return this.$store.getters.meals
    },
    searchString() {
      return this.$store.getters.searchString
    }
  },
  methods: {
    showDetail(idMeal) {
      this.$router.push({ path: `/details/${idMeal}` })
    }
  }
}
</script>
