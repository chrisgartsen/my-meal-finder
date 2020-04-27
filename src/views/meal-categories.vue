<template>
  <main class="main">
    <search-form />
    <category-list />
  </main>
</template>

<script>
import searchForm from '@/components/search-form'
import categoryList from '@/components/category-list'

export default {
  name: 'meals-index',
  components: {
    searchForm,
    categoryList
  }
}
</script>