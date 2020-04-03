<template>
  <main class="main">
    <search-form />
    <search-results />
  </main>
</template>

<script>
import searchForm from '@/components/search-form'
import searchResults from '@/components/search-results'

export default {
  name: 'meals-index',
  components: {
    searchForm,
    searchResults
  }
}
</script>