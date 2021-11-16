<template>
  <component :is="snippets[$route.params.id - 1].link" />
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Iframe',
  layout: 'iframe',
  computed: {
    ...mapState({
      snippets: 'snippets',
    }),
  },
  head() {
    return {
      title: this.snippets[this.$route.params.id - 1].title,
    }
  },
}
</script>
