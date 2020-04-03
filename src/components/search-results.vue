<template>
<div class="result-container">
  <div class="search-results">
    <div class="meal" v-for="meal in meals" :key="meal.idMeal" @click="showDetail(meal.idMeal)">
      <h3>{{ meal.strMeal }}</h3>
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
    }
  },
  methods: {
    showDetail(idMeal) {
      console.log("Show Detail for", idMeal)
      this.$router.push({ path: `/details/${idMeal}` })
    }
  }
}
</script>
