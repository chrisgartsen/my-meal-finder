<template>
  <div class="search-form">
    <form @submit.prevent="submitForm">
      <input
        type="text"
        class="search-field"
        name="search"
        id="search-field"
        placeholder="Search on keyword e.g Beef or Pasta"
        v-model="searchText"
      />
      <button class="search-btn" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'search-form',

  data() {
    return {
      searchText: ''
    }
  },

  methods: {
    submitForm() {
      this.$store.dispatch('search', this.searchText)
    }
  }
}
</script>
