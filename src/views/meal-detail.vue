<template>
  <div>
    <router-link to="/">Back</router-link>
    <div v-if="meal">
      <h2>{{ meal.strMeal }}</h2>
      <div class="tags">
        {{ meal.strTags }}
      </div>
      <img :src="meal.strMealThumb" />
      
      <h3>Ingredients</h3>

      <h3>Instructions</h3>
      <p> {{ meal.strInstructions }} </p>
    </div>

  </div>  
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
    console.log('Loading data for', this.idMeal)
    this.$store.dispatch('fetchMeal', this.idMeal)
  }
}
</script>
