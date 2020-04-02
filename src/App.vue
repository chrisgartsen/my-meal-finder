<template>
  <div id="app">

    <nav-bar />

    <main class="main">
      <search-form />
      <search-results />
    </main>
  </div>
</template>

<script>
import navBar from '@/components/navbar'
import searchForm from '@/components/search-form'
import searchResults from '@/components/search-results'

export default {
  name: 'app',

  components: {
    navBar,
    searchForm,
    searchResults
  },


}
</script>