<template>
  <div id="app">
    <global-header />
    <router-view/>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from './components/header/'
import GlobalFooter from './components/footer/'

export default {
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $gray;
}
</style>
