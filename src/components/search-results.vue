<template>
<div class="result-container">
  <div class="search-results">
    <div class="meal" v-for="meal in meals" :key="meal.idMeal">
      {{ meal.strMeal }}
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
  }
}
</script>
