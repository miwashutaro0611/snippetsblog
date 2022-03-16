<template>
  <a class="flowerCard" href="#">
    <div class="flowerCard__headWrapper">
      <p class="flowerCard__headName">CUBE</p>
      <p class="flowerCard__headSubName">[キューブ]</p>
      <p class="flowerCard__headNote">design ｜ KEISUKE FUNAHASHI</p>
      <span class="flowerCard__headIcon">NEW</span>
    </div>
    <div class="flowerCard__imageWrapper">
      <div class="flowerCard__image is-normal" />
      <div class="flowerCard__image is-over" />
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code24',
})
</script>

<style lang="scss" scoped>
.flowerCard {
  position: relative;
  display: block;
  width: 300px;
  margin-top: 50px;
  &:hover {
    .flowerCard__imageWrapper::before {
      top: auto;
      bottom: 0;
      height: 100%;
      transition: height 1s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
    .flowerCard__image.is-over {
      animation: itemOverAnim 0.85s cubic-bezier(0.19, 1, 0.22, 1) 0.15s 1 both;
    }
    .flowerCard__headWrapper {
      color: #fff;
    }
  }
}

.flowerCard__headWrapper {
  position: absolute;
  z-index: 3;
  width: 100%;
  padding: 20px 25px 0;
  color: #333;
  transition: color 0.1s linear 0.2s;
}

.flowerCard__headName {
  padding: 5px 0;
  font-size: 36px;
  line-height: 32px;
  letter-spacing: 0.1em;
  word-wrap: break-word;
}

.flowerCard__headSubName {
  margin-top: 4px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.1em;
}

.flowerCard__headNote {
  margin-top: 18px;
  font-size: 9px;
  line-height: 16px;
  letter-spacing: 0.1em;
}

.flowerCard__headIcon {
  position: absolute;
  top: -32px;
  right: -10px;
  z-index: 3;
  display: block;
  width: 66px;
  height: 66px;
  font-size: 14px;
  line-height: 66px;
  color: #000 !important;
  text-align: center;
  background-image: url('https://www.flowervase.biz/images/circle_bk.svg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
}

.flowerCard__imageWrapper {
  position: relative;
  width: 100%;
  height: 420px;
  &::before {
    position: absolute;
    top: 0;
    bottom: auto;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 0;
    content: '';
    background-color: rgba(0, 0, 0, 0.2);
    transition: height 0.85s cubic-bezier(0.19, 1, 0.22, 1) 0.15s;
  }
}

.flowerCard__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.is-normal {
    z-index: 0;
    background: url('http://placehold.jp/24/cc9999/993333/300x420.png');
  }
  &.is-over {
    z-index: 2;
    background: url('http://placehold.jp/24/9999cc/333399/300x420.png');
    animation: itemOutAnim 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 both;
  }
}

@keyframes itemOverAnim {
  0% {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes itemOutAnim {
  0% {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 0 100% 0);
  }
}
</style>
