<template>
  <div class="globalLogo">
    <span class="globalLogoIcons">
      <span class="globalLogoIcon"></span>
      <span class="globalLogoIcon"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'code4'
}
</script>

<style lang="scss" scoped>
$logoSize: 40px;
$logoBorderColor: #444;
$logoTime: 2s;
.globalLogo {
  display: flex;
  align-items: center;
  &:hover {
    .globalLogoIcon::before,
    .globalLogoIcon::after {
      animation-play-state: paused;
    }
  }
}
.globalLogoIcons {
  position: relative;
  display: block;
  width: $logoSize;
  height: $logoSize;
}
.globalLogoIcon {
  position: absolute;
  display: block;
  width: ($logoSize * 3 / 4);
  height: ($logoSize * 3 / 4);
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    display: block;
  }
  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    animation: lineAnime $logoTime both infinite alternate;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    animation: lineAnime2 $logoTime both infinite alternate;
  }
  &:nth-child(1) {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
    bottom: 0;
    &::before,
    &::after {
      animation-delay: ($logoTime / 4);
    }
  }
}
@keyframes lineAnime {
  0% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  10% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  11% {
    border-color: $logoBorderColor;
  }
  30% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: 0;
  }
  50% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
  100% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
}
@keyframes lineAnime2 {
  0% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  50% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  51% {
    border-color: $logoBorderColor;
  }
  70% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: 0;
  }
  90% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
  100% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
}
</style>
