<template>
  <div class="loading-circle" />
</template>

<script>
export default {
  name: 'code11'
}
</script>

<style lang="scss" scoped>
$circleSize: 60px;
$borderSize: 6px;
$backLineColor: #ddd;
$topLineColor: #699ada;
$animeTime: 1s;

.loading-circle {
  width: $circleSize;
  height: $circleSize;
  border-radius: 50%;
  position: relative;
  border: $borderSize solid $backLineColor;
  &::after {
    content: '';
    position: absolute;
    width: calc(100% + #{$borderSize} * 2);
    height: calc(100% + #{$borderSize} * 2);
    top: -$borderSize;
    left: -$borderSize;
    border-radius: 50%;
    border: $borderSize solid transparent;
    border-top-color: $topLineColor;
    animation: loading-circle-animation $animeTime infinite;
  }
}

@keyframes loading-circle-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
