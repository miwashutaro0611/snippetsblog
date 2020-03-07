<template>
  <div id="app">
    <global-header />
    <div class="globalWrapper">
      <router-view/>
    </div>
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
.globalWrapper {
  width: calc(100% - 40px);
  max-width: 1100px;
  margin: 0 auto;
}
</style>
