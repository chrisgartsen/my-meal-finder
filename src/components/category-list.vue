<template>
  <div id="category-list"> 
    <h2 class="header-2">Meal Categories</h2>

    <div class="container">

      <div class="category" v-for="category in categories" :key="category.idCategory" @click="showMealsForCategory(category.strCategory)">
        <h3 class="header-3">{{ category.strCategory }}</h3>
        <img :src="category.strCategoryThumb" alt="categoryImage">
      </div>

    </div>
  
  </div>
</template>

<script>
export default {
  name: 'category-list',

  computed: {
    categories() {
      return this.$store.getters.categories
    }
  },

  methods: {
    showMealsForCategory(category) {
      this.$store.dispatch('fetchMealsForCategory', category)
      this.$router.push('/')
    }
  }

}
</script>