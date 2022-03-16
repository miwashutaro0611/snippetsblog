<template>
  <div class="loading-circle" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code11',
})
</script>

<style lang="scss" scoped>
$circleSize: 60px;
$borderSize: 6px;
$backLineColor: #ddd;
$topLineColor: #699ada;
$animeTime: 1s;

.loading-circle {
  position: relative;
  width: $circleSize;
  height: $circleSize;
  border: $borderSize solid $backLineColor;
  border-radius: 50%;
  &::after {
    position: absolute;
    top: -$borderSize;
    left: -$borderSize;
    width: calc(100% + #{$borderSize} * 2);
    height: calc(100% + #{$borderSize} * 2);
    content: '';
    border: $borderSize solid transparent;
    border-top-color: $topLineColor;
    border-radius: 50%;
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
