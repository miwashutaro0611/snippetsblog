<template>
  <div>
    <h1>{{ snippets[$route.params.id - 1].title }}</h1>
    <p>{{ snippets[$route.params.id - 1].id }}</p>
    <div class="codeWrap">
      <component :is="snippets[$route.params.id - 1].link" />
    </div>
    <div
      class="codePen"
      v-if="snippets[$route.params.id - 1].codepen"
      v-html="snippets[$route.params.id - 1].codepen"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Code',
  computed: {
    ...mapState({
      snippets: 'snippets'
    })
  }
}
</script>

<style lang="scss" scoped>
.codeWrap {
  width: 100%;
  min-height: 300px;
  padding: 20px;
  overflow: auto;
  background: #fff;
  border: 2px solid #2c2e31;
  border-radius: 5px;
}
.codePen {
  margin-top: 20px;
}
</style>
