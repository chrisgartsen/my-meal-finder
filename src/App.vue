<template>
  <div id="app">
    <navbar />
    <router-view />
    <page-footer />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import pageFooter from '@/components/page-footer'

export default {
  name: 'app',

  components: {
    navbar,
    pageFooter
  },
  created() {
    this.$store.dispatch('fetchCategories')
  }
}
</script>