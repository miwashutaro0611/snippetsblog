<template>
  <a href="" class="button">
    <span>ENTRY</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code5',
})
</script>

<style lang="scss" scoped>
$svgImage: 'https://contents-one.co.jp/assets/imgs/assets/icn_btn_arrow-navy.svg';

$baseColor: #285c76;
$subColor: #fff;

$btnMaxSize: 480px;
$borderSize: 1px;
$btnPaddingSize: 22px;
$circleSize: 42px;

$easeTime: 0.275s;
$easeAction: cubic-bezier(0.785, 0.135, 0.15, 0.86);

.button {
  position: relative;
  display: block;
  width: calc(100% - 20px);
  max-width: $btnMaxSize;
  padding: $btnPaddingSize 45px;
  margin: 50px auto 0;
  overflow: hidden;
  font-weight: 400;
  line-height: 1;
  color: $subColor;
  text-align: center;
  letter-spacing: 0.1em;
  background: $baseColor;
  border: $borderSize solid $baseColor;
  border-radius: $btnPaddingSize * 2;

  > span {
    position: relative;
    z-index: 2;
    margin-right: -30px;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
  }

  &::before {
    top: calc(50% - 3.5px);
    left: 24px;
    z-index: 1;
    width: 19px;
    height: 7px;
    background: url($svgImage) no-repeat center;
    transition: transform $easeTime $easeAction ($easeTime * 2 / 10);
    will-change: transform;
  }

  &::after {
    top: calc(50% - (#{$circleSize} / 2));
    left: 12px;
    width: $circleSize;
    height: $circleSize;
    background: $subColor;
    border-radius: 50%;
    box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.2);
    transition: all $easeTime $easeAction 0s;
    will-change: top, left, width, height, border-radius;
  }

  &:hover {
    color: $baseColor;
    box-shadow: none;

    &::before {
      transform: translate3d(5px, 0, 0);
    }

    &::after {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $subColor;
      border-radius: 0;
    }
  }
}
</style>
