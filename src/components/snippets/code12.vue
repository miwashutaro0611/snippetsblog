<template>
  <div class="DrawerMenuTouchMove">
    <div class="contentWrapper">
      <p>
        実行環境想定が画面全体を想定しているため、このサイト内ではうまく動かないです。動きについてはcodepenを参照ください。
      </p>
      <a class="mt10" href="#id3">{{ text }}</a>
    </div>
    <div class="contentWrapper" />
    <div id="id3" class="contentWrapper" />
    <button type="button" class="buttonIcon" @touchmove="onTouchMove($event)" @click="onClick" :style="buttonStyle" />
  </div>
</template>

<script>
export default {
  name: 'code12',
  data() {
    return {
      text: 'リンクエリアです。アイコンをクリックするとここの名前が変わります',
      buttonStyle: {
        transform: 'translate(calc(100vw - 100px - 60px), 20px)'
      }
    }
  },
  methods: {
    onTouchMove(e) {
      e.preventDefault()
      const touchObject = e.changedTouches[0]
      const width = e.target.offsetWidth
      const height = e.target.offsetHeight
      let x, y
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
      this.buttonStyle.transform = `translate(${x - width / 2}px, ${y - height / 2}px)`
    },
    onClick() {
      this.text = 'クリックされました'
    }
  }
}
</script>

<style lang="scss" scoped>
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
    width: ($size / 2);
    height: ($size / 2);
    content: '';
    background: linear-gradient(
      $iconLineColor,
      $iconLineColor $iconLineSize,
      transparent $iconLineSize,
      transparent calc(50% - #{$iconLineSize} / 2),
      $iconLineColor calc(50% - #{$iconLineSize} / 2),
      $iconLineColor calc(50% + #{$iconLineSize} / 2),
      transparent calc(50% + #{$iconLineSize} / 2),
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
