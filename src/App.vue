<template>
  <div id="app">
    <global-header />
    <router-view/>
  </div>
</template>

<script>
import GlobalHeader from './components/header/'

export default {
  name: 'App',
  components: {
    GlobalHeader
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $gray;
}
</style>
