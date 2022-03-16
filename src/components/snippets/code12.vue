<template>
  <div class="DrawerMenuTouchMove">
    <div class="contentWrapper">
      <p>
        実行環境想定が画面全体を想定しているため、このサイト内ではうまく動かないです。動きについてはcodepenを参照ください。
      </p>
      <a class="mt10" href="#id3">{{ state.text }}</a>
    </div>
    <div class="contentWrapper" />
    <div id="id3" class="contentWrapper" />
    <button
      type="button"
      class="buttonIcon"
      :style="state.buttonStyle"
      @touchmove="onTouchMove($event)"
      @click="onChangeText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code12',
  setup() {
    const state = reactive({
      text: 'リンクエリアです。アイコンをクリックするとここの名前が変わります',
      buttonStyle: {
        transform: 'translate(calc(100vw - 100px - 60px), 20px)',
      },
    })
    const onTouchMove = (event: TouchEvent) => {
      event.preventDefault()
      const touchObject = event.changedTouches[0]
      const width = (event.target as HTMLButtonElement).offsetWidth
      const height = (event.target as HTMLButtonElement).offsetHeight
      let x
      let y
      if (touchObject.clientX < width / 2) {
        x = width / 2
      } else if (touchObject.clientX > window.innerWidth - width / 2) {
        x = window.innerWidth - width / 2
      } else {
        x = touchObject.clientX
      }
      if (touchObject.clientY < height / 2) {
        y = height / 2
      } else if (touchObject.clientY > window.innerHeight - height / 2) {
        y = window.innerHeight - height / 2
      } else {
        y = touchObject.clientY
      }
      state.buttonStyle.transform = `translate(${x - width / 2}px, ${y - height / 2}px)`
    }
    const onChangeText = () => {
      state.text = 'クリックされました'
    }
    return { state, onTouchMove, onChangeText }
  },
})
</script>

<style lang="scss" scoped>
@use 'sass:math';
$size: 60px;
$iconBackColor: #ddd;
$iconLineColor: #333;
$iconLineSize: 4px;

@mixin buttonStyle() {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $size;
  height: $size;
  cursor: pointer;
  background: $iconBackColor;
  border: none;
  border-radius: 50%;
  &::before {
    display: block;
    width: math.div($size, 2);
    height: math.div($size, 2);
    content: '';
    background: linear-gradient(
      $iconLineColor,
      $iconLineColor $iconLineSize,
      transparent $iconLineSize,
      transparent calc(50% - math.div($iconLineSize, 2)),
      $iconLineColor calc(50% - math.div($iconLineSize, 2)),
      $iconLineColor calc(50% + math.div($iconLineSize, 2)),
      transparent calc(50% + math.div($iconLineSize, 2)),
      transparent calc(100% - #{$iconLineSize}),
      $iconLineColor calc(100% - #{$iconLineSize}),
      $iconLineColor
    );
  }
}

.mt10 {
  display: block;
  margin-top: 10px;
}

.DrawerMenuTouchMove {
  position: relative;
}

.contentWrapper {
  height: 200px;
  &:nth-child(odd) {
    background: #aff;
  }
  &:nth-child(even) {
    background: #ffa;
  }
}

.buttonIcon {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s;
  transform: translate(calc(100vw - 100px - #{$size}), 20px);
  @include buttonStyle();
}
</style>
