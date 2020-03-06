<template>
  <a href="#" class="more">
    <div class="overlay">
      <span>V</span>
      <span>I</span>
      <span>E</span>
      <span>W</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'code3',
}
</script>

<style lang="scss" scoped>
$image: 'https://source.unsplash.com/200x150/?dog'; // 背景イメージ
$text-ease: cubic-bezier(0.14, 1, 0.34, 1); // テキストのイージング
$text-duration: 0.5s; // テキストの動く時間
$text-delay: 0.03s; // テキストアニメーションが実行されるまでの時間
$text-color: #fff; // テキストの色
$text-move: -30px; // 動く距離(初期値)
$text-length: 4; // 文字数
$overlay-ease: ease; // オーバーレイのイージング
$overlay-duration: 0.3s; // オーバーレイの動く時間
@mixin box {
  display: block;
  width: 200px;
  height: 150px;
}
@mixin overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0008;
  span {
    display: inline-block;
  }
}
@mixin hvoerAction {
  &:hover {
    .overlay {
      opacity: 1;
      span {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
}
.more {
  position: relative;
  @include box;
  @include hvoerAction;
  background: url($image);
  color: $text-color;
  cursor: pointer;
}
.overlay {
  @include overlay;
  font-size: 12px;
  letter-spacing: 0.2em;
  opacity: 0;
  transition: opacity $overlay-duration $overlay-ease;
  span {
    opacity: 0;
    transform: translate3d($text-move, 0, 0);
    transition: all $text-duration $text-ease;
    @for $i from 1 through $text-length {
      &:nth-child(#{$i}) {
        transition-delay: $i * $text-delay;
      }
    }
  }
}
</style>
