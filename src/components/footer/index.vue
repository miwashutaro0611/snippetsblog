<template>
  <footer class="globalFooter">
    <small class="globalFooterCopy"> © 2020, Shuntaro Miwa </small>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'GlobalFooter',
})
</script>

<style lang="scss" scoped>
.globalFooter {
  padding: 10px 0;
  margin-top: 40px;
  text-align: center;
  border-top: 1px solid #ddd;
}
.globalFooterCopy {
  font-size: 12px;
}
</style>
