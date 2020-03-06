<template>
  <header class="globalHeader">
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
  </header>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss" scoped>
.globalHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}
.globalLogo {

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
