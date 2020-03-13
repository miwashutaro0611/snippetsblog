<template>
  <a href="" class="button">
    <span>ENTRY</span>
  </a>
</template>

<script>
export default {
  name: 'code5'
}
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
  display: block;
  width: calc(100% - 20px);
  max-width: $btnMaxSize;
  margin: 50px auto 0;
  border: $borderSize solid $baseColor;
  background: $baseColor;
  color: $subColor;
  overflow: hidden;
  position: relative;
  padding: $btnPaddingSize 45px;
  border-radius: $btnPaddingSize * 2;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.1em;
  text-align: center;

  > span {
    position: relative;
    margin-right: -30px;
    z-index: 2;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    background: url($svgImage) no-repeat center;
    top: calc(50% - 3.5px);
    left: 24px;
    width: 19px;
    height: 7px;
    z-index: 1;
    will-change: transform;
    transition: transform $easeTime $easeAction ($easeTime * 2 / 10);
  }

  &::after {
    background: $subColor;
    top: calc(50% - (#{$circleSize} / 2));
    left: 12px;
    width: $circleSize;
    height: $circleSize;
    border-radius: 50%;
    box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.2);
    will-change: top, left, width, height, border-radius;
    transition: all $easeTime $easeAction 0s;
  }

  &:hover {
    color: $baseColor;
    box-shadow: none;

    &::before {
      transform: translate3d(5px, 0, 0);
    }

    &::after {
      background: $subColor;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  }
}
</style>
