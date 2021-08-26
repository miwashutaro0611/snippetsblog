<template>
  <a class="btn-outline" href="#">
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <p>
      ボタンテキスト
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="9.4px"
        height="7.4px"
        viewBox="0 0 9.4 7.4"
      >
        <polygon points="5.7,0 4.3,1.4 5.6,2.7 0,2.7 0,4.7 5.6,4.7 4.3,6 5.7,7.4 9.4,3.7 " />
      </svg>
    </p>
  </a>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Code18',
})
</script>

<style lang="scss" scoped>
$easeFunction1: ease-in;
$easeFunction2: ease-out;
$borderSize: 3px;
$defaultTopSize: 65px;
$defaultBottomSize: 95px;
$animeVerticalTime: 0.09s;
$animeSideTime: 0.06s;
.btn-outline {
  position: relative;
  display: inline-block;
  padding: 22px 40px 22px 20px;
  overflow: hidden;
  border-radius: 3px;
  transition: color 0.1s linear;
  span {
    display: block;
    background-color: currentColor;
    &:nth-child(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: $defaultTopSize;
      height: $borderSize;
      transition: transform 0.1s #{$animeVerticalTime + $animeSideTime - 0.01s} $easeFunction1;
      transform-origin: left;
    }
    &:nth-child(2) {
      position: absolute;
      top: 0;
      left: 0;
      width: $borderSize;
      height: 100%;
      transition: transform 0.1s #{$animeVerticalTime - 0.01s};
      transform-origin: bottom;
    }
    &:nth-child(3) {
      position: absolute;
      top: auto;
      right: auto;
      bottom: 0;
      left: 0;
      width: $defaultBottomSize;
      height: $borderSize;
      transition: transform 0.1s $easeFunction2;
      transform-origin: right;
    }
    &:nth-child(4) {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      width: calc(100% - #{$defaultTopSize});
      height: $borderSize;
      transition: transform 0.1s $easeFunction2;
      transform: translate3d(0, 0, 0) scaleX(0);
      transform-origin: right;
    }
    &:nth-child(5) {
      position: absolute;
      top: 0;
      right: 0;
      left: auto;
      width: $borderSize;
      height: 100%;
      transition: transform 0.1s #{$animeVerticalTime - 0.01s};
      transform: translate3d(0, 0, 0) scaleY(0);
      transform-origin: bottom;
    }
    &:nth-child(6) {
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      left: auto;
      width: calc(100% - #{$defaultBottomSize});
      height: $borderSize;
      transition: transform 0.1s #{$animeVerticalTime + $animeSideTime - 0.01s} $easeFunction1;
      transform: translate3d(0, 0, 0) scaleX(0);
      transform-origin: left;
    }
  }
  p {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-bottom: 3px;
    font-size: 13px;
    line-height: 1;
    letter-spacing: 1px;
    white-space: nowrap;
    svg {
      position: absolute;
      top: 0;
      right: auto;
      bottom: 0;
      left: calc(100% + 9px);
      z-index: 2;
      width: 10px;
      height: auto;
      margin: auto;
      transition: 0.3s;
      transform: translate3d(0, 0, 0) translateX(0);
    }
  }
  &:hover {
    span {
      &:nth-child(1) {
        transition: transform $animeVerticalTime $easeFunction1;
        transform: translate3d(0, 0, 0) scaleX(0);
      }
      &:nth-child(2) {
        transition: transform $animeSideTime $animeVerticalTime;
        transform: translate3d(0, 0, 0) scaleY(0);
      }
      &:nth-child(3) {
        transition: transform $animeVerticalTime #{$animeVerticalTime + $animeSideTime} $easeFunction2;
        transform: translate3d(0, 0, 0) scaleX(0);
      }
      &:nth-child(4) {
        transition: transform $animeVerticalTime #{$animeVerticalTime + $animeSideTime} $easeFunction2;
        transform: translate3d(0, 0, 0) scaleX(1);
      }
      &:nth-child(5) {
        transition: transform $animeSideTime $animeVerticalTime;
        transform: translate3d(0, 0, 0) scaleY(1);
      }
      &:nth-child(6) {
        transition: transform $animeVerticalTime $easeFunction1;
        transform: translate3d(0, 0, 0) scaleX(1);
      }
    }
    p {
      svg {
        transform: translate3d(0, 0, 0) translateX(4px);
      }
    }
  }
}
</style>
