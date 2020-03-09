<template>
  <header class="globalHeader">
    <div class="globalHeaderInner">
      <div class="globalLogo">ロゴ</div>
      <nav class="globalNav">
        <ul class="globalNavList">
          <li class="globalNavItem">
            <router-link to="/" class="globalNavLink">
              Home
            </router-link>
          </li>
          <li class="globalNavItem">
            <router-link to="/foo" class="globalNavLink">
              Foo
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss" scoped>
.globalHeader {
  margin-bottom: 40px;
  padding: 10px 40px;
  border-bottom: 1px solid #ddd;
}
.globalHeaderInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  max-width: 1100px;
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
