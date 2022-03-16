<template>
  <div class="recruitLink">
    <div class="recruitLink__title">
      <p>RECUIRT</p>
      <h3>採用情報</h3>
    </div>
    <p class="recruitLink__message">
      <span class="recruitLink__message__content">
        <span>
          <span class="is-text">あなたを待っています。</span>
        </span>
      </span>
      <span class="recruitLink__message__content">
        <span>
          <span class="is-text">製品を通じて人々の暮らし＝安全、安心を一緒に作りましょう！</span>
        </span>
      </span>
    </p>
    <span class="recruitLink__icon" aria-hidden="hidden" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code21',
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

$mainColor: #163064;
$time: 0.4s;
$easeing: cubic-bezier(0.92, 0.03, 0.09, 0.97);

.recruitLink {
  position: relative;
  width: 950px;
  height: 400px;
  background: url(https://source.unsplash.com/950x400/?dog) no-repeat;
  background-size: cover;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba($mainColor, 0.25);
    transition: $time $easeing;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover {
    &::before {
      transform: scaleX(1);
    }
    .recruitLink__message__content {
      > span {
        transform: translateX(10px);
        &::after {
          transform: scaleX(1);
        }
      }
      .is-text {
        color: #fff;
      }
    }
  }
}

.recruitLink__title {
  position: relative;
  z-index: 3;
  padding: 50px 0 0 60px;
  color: #fff;
  p {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 10px;
  }
  h3 {
    margin: 0;
    font-size: 20px;
  }
}

.recruitLink__message {
  position: absolute;
  bottom: 35px;
  left: 60px;
  z-index: 3;
}

.recruitLink__message__content {
  display: block;
  & + & {
    margin-top: 10px;
  }
  > span {
    position: relative;
    z-index: 5;
    display: inline-block;
    padding: 5px 15px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.05em;
    transition: $time $time $easeing;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      width: 100%;
      height: 100%;
      content: '';
      background: #fff;
    }
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      width: 100%;
      height: 100%;
      content: '';
      background: $mainColor;
      transition: $time $time $easeing;
      transform: scaleX(0);
      transform-origin: left;
    }
  }
  .is-text {
    position: relative;
    z-index: 6;
    display: inline-block;
    color: $mainColor;
    transition: $time $time $easeing;
  }
}

.recruitLink__icon {
  position: absolute;
  right: 60px;
  bottom: 50px;
  z-index: 3;
  display: block;
  width: 60px;
  height: 35px;
  &::before {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    content: '';
    background: #fff;
  }
  &::after {
    position: absolute;
    right: 0;
    width: 2px;
    height: 100%;
    content: '';
    background: #fff;
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
}
</style>
