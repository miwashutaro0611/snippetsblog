<template>
  <button type="button" class="yt-btn u-is-none_style" />
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code17',
})
</script>

<style lang="scss" scoped>
$btnSzie: 100px;
$easeTime: 0.4s;
$easeFunction: cubic-bezier(0.19, 0.82, 0.27, 1);
$ease2Time: 0.3s;
$ease2Function: ease-out;
$colorBefore: #fff;
$colorAfter: #141414;
$color2Before: #151515;
$color2After: $colorBefore;
.yt-btn {
  position: relative;
  width: $btnSzie;
  height: $btnSzie;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background: $colorBefore;
    border: 3px solid $colorAfter;
    border-radius: 44px;
    transition: $easeTime $easeFunction;
  }
  &::after {
    position: relative;
    top: calc(50% - 10px);
    left: calc(50% - 5px);
    display: block;
    width: 0;
    height: 0;
    content: '';
    border-color: transparent transparent transparent $color2Before;
    border-style: solid;
    border-width: 10px 0 10px 15px;
    transition: $ease2Time $ease2Function;
  }
  &:hover {
    &::before {
      background: $colorAfter;
      border-radius: 50px;
      transform: scale(0.9);
    }
    &::after {
      border-color: transparent transparent transparent $color2After;
    }
  }
}
</style>
