<template>
  <a href="#" class="cardContent">
    <div class="cardContent__inner">
      <div class="cardContent__image">
        <img :src="imageUrl" alt="ダミー犬" />
      </div>
      <p class="cardContent__title">
        <span>SAMPLE NAME</span>
      </p>
      <div class="cardContent__hover">
        <div class="cardContent__hover__inner">
          <p class="cardContent__hover__text">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p class="cardContent__hover__btn">ボタン</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code13',
  setup() {
    const imageUrl = 'https://source.unsplash.com/400x400/?dog'
    return { imageUrl }
  },
})
</script>

<style lang="scss" scoped>
$fontFamily: 'DIN Next LT W01 Regular', '游ゴシック体', 'YuGothic', 'Yu Gothic', 'ヒラギノ角ゴ Pro W3',
  'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック', 'MS P Gothic', sans-serif;
$baseColor: #8c720e;
$baseSize: 400px;
$redColor: #e51116;
$animeTime: 0.45s;
$animeTime2: 0.2s;
$animeEase: cubic-bezier(0.165, 0.84, 0.44, 1);

.cardContent {
  position: relative;
  display: block;
  width: $baseSize;
  height: $baseSize;
  overflow: hidden;
  line-height: 1.75;
  color: $baseColor;
  &:hover {
    .cardContent__image {
      transform: scale(1.05);
    }
    .cardContent__hover {
      opacity: 1;
    }
    .cardContent__hover__text {
      opacity: 1;
      transform: translateY(0) rotate(0);
    }
    .cardContent__hover__btn {
      opacity: 1;
      transition-delay: 0.15s;
      transform: translateY(0) rotate(0);
    }
  }
}

.cardContent__image {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: $animeTime2 $animeEase;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.cardContent__title {
  position: absolute;
  top: 20px;
  right: 30px;
  padding-left: 52px;
  font-family: $fontFamily;
  font-size: 18px;
  font-weight: bold;
  &::before {
    position: absolute;
    top: 4px;
    left: 0;
    width: 44px;
    font-size: 12px;
    color: $redColor;
    text-align: center;
    content: 'NEW';
    border: 2px solid $redColor;
  }
  > span {
    display: block;
    text-align: right;
  }
}

.cardContent__hover {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 45px;
  pointer-events: none;
  background: rgba(#fff, 0.8);
  opacity: 0;
  transition: $animeTime $animeEase;
}

.cardContent__hover__inner {
  width: 100%;
}

.cardContent__hover__text {
  font-size: 15px;
  opacity: 0;
  transition: $animeTime $animeEase;
  transform: translateY(20px) rotate(2deg);
  transform-origin: top left;
}

.cardContent__hover__btn {
  width: 100%;
  max-width: 260px;
  height: 46px;
  padding-top: 8px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  border: 1px solid $baseColor;
  opacity: 0;
  transition: $animeTime $animeEase;
  transform: translateY(20px) rotate(5deg);
}
</style>
