<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import navBar from '@/components/navbar'

export default {
  name: 'app',

  components: {
    navBar,
  },
}
</script>