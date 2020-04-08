<template>
  <main class="main detail-main">

    <nav class="detail-nav">
      <router-link to="/" class="">&larr; Back to search results</router-link>
    </nav>

    <div v-if="meal" class="meal-details">
      <h2 class="meal-header">{{ meal.name }}</h2>
      <img :src="meal.thumb" class="meal-image"/>
      
      <div class="meal-ingredients">
        <h3>Ingredients</h3>
        <ul>
          <li v-for="ingredient in meal.ingredients" :key="ingredient.name">{{ ingredient.name }} - {{ ingredient.measure }}</li>
        </ul>
      </div>
      <div class="meal-instructions">
        <h3>Instructions</h3>
        <p> {{ meal.instructions }} </p>        
      </div>  
    </div>
  </main>  
</template>

<script>
export default {
  name: 'meail-detail',
  props: {
    idMeal: {
      required: true
    }
  },
  computed: {
    meal() {
      return this.$store.getters.meal
    }
  },
  created() {
    this.$store.dispatch('clearMeal')
    this.$store.dispatch('fetchMeal', this.idMeal)
  }
}
</script>
