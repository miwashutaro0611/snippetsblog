<template>
  <header class="globalHeader">
    <div class="globalHeaderInner">
      <logo />
      <toggle-button />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Logo from '~/components/logo/index.vue'
import toggleButton from '~/components/toggleButton/index.vue'

export default defineComponent({
  name: 'GlobalHeader',
  components: {
    Logo,
    toggleButton,
  },
})
</script>

<
<style lang="scss" scoped>
@use '~/assets/scss/resource' as global;
.globalHeader {
  padding: 20px 0;
  margin-bottom: 40px;
  border-bottom: 1px solid #ddd;
}
.globalHeaderInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  margin: 0 auto;
}
.globalLogo {
  font-size: 15px;
  @include global.MixinFontSize(32);
}
</style>
