<template>
  <div id="app">
    <!-- nav bar here -->
    <webHeader class = "sticky-top" />

    <!-- router-view here -->
    <router-view />
    <!-- end router-view -->

    <!-- footer here -->
    <webFooter />
  </div>
</template>

<script>
import Header from './components/shared/header.vue'
import Footer from './components/shared/footer.vue'

export default {
  name: 'App',
  components: {
    webHeader: Header,
    webFooter: Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
