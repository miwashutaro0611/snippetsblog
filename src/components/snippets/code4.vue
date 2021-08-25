<template>
  <div class="globalLogo">
    <span class="globalLogoIcons">
      <span class="globalLogoIcon" />
      <span class="globalLogoIcon" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Code4',
})
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
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    content: '';
  }
  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    animation: lineAnime $logoTime both infinite alternate;
  }
  &::after {
    right: 0;
    bottom: 0;
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
    width: 0;
    height: 0;
    border-color: transparent;
  }
  10% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
  11% {
    border-color: $logoBorderColor;
  }
  30% {
    width: ($logoSize * 3 / 4);
    height: 0;
    border-color: $logoBorderColor;
  }
  50% {
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
    border-color: $logoBorderColor;
  }
  100% {
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
    border-color: $logoBorderColor;
  }
}
@keyframes lineAnime2 {
  0% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
  50% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
  51% {
    border-color: $logoBorderColor;
  }
  70% {
    width: ($logoSize * 3 / 4);
    height: 0;
    border-color: $logoBorderColor;
  }
  90% {
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
    border-color: $logoBorderColor;
  }
  100% {
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
    border-color: $logoBorderColor;
  }
}
</style>
