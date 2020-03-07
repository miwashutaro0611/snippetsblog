<template>
  <div class="list">
    <card-item v-for="snippet in rSnippets" :code="snippet" :key="snippet.id"></card-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import cardItem from '../components/cardItem/'
export default {
  name: 'Home',
  components: {
    cardItem
  },
  computed: {
    ...mapState({
      snippets: 'snippets'
    }),
    rSnippets() {
        return this.snippets.slice().reverse();
    },
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>