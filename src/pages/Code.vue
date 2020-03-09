<template>
  <div>
    <h1>{{snippets[$route.params.id - 1].title}}</h1>
    <p>{{snippets[$route.params.id - 1].id}}</p>
    <div class="codeWrap">
      <component :is="snippets[$route.params.id - 1].link" />
    </div>
    <div class="codePen" v-html="snippets[$route.params.id - 1].codepen"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Code',
  computed: {
    ...mapState({
      snippets: 'snippets'
    }),
  }
}
</script>

<style lang="scss" scoped>
.codeWrap {
  width: 100%;
  min-height: 300px;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 5px;
}
.codePen {
  margin-top: 20px;
}
</style>