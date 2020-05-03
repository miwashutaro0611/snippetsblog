<template>
  <header class="globalHeader">
    <div class="globalHeaderInner">
      <logo />
      <toggle-button />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/logo/'
import toggleButton from '~/components/toggleButton/'
export default {
  name: 'GlobalHeader',
  components: {
    Logo,
    toggleButton
  }
}
</script>

<style lang="scss" scoped>
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
  @include MixinFontSize(32);
}
.globalNav {
}
.globalNavList {
  display: flex;
  align-items: center;
}
.globalNavItem {
  & + & {
    margin-left: 10px;
  }
}
.globalNavLink {
  color: #0ff;
  &.router-link-exact-active {
    color: #f00;
  }
}
</style>
