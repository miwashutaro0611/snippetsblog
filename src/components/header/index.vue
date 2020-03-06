<template>
  <header class="globalHeader">
    <div class="globalLogo">ロゴ</div>
    <nav class="globalNav">
      <ul class="globalNavList">
        <li class="globalNavItem"><a href="#" class="globalNavLink">メニュー1</a></li>
        <li class="globalNavItem"><a href="#" class="globalNavLink">メニュー2</a></li>
        <li class="globalNavItem"><a href="#" class="globalNavLink">メニュー3</a></li>
        <li class="globalNavItem"><a href="#" class="globalNavLink">メニュー4</a></li>
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

}
</style>
