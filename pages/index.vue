<template>
  <div class="list">
    <card-item v-for="snippet in rSnippets" :key="snippet.id" :code="snippet" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cardItem from '~/components/cardItem/'

export default {
  name: 'Index',
  components: {
    cardItem,
  },
  computed: {
    ...mapState({
      snippets: 'snippets',
    }),
    rSnippets() {
      return this.snippets.slice().reverse()
    },
  },
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
