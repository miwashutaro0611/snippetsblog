<template>
  <div class="wrapper">
    <div class="wrapper__mask" />
    <div class="wrapper__content">
      <p>INTRO<br />DUCTION</p>
      <h3>会社概要</h3>
    </div>
    <div class="wrapper__image">
      <img src="https://source.unsplash.com/450x300/?dog" alt="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Code20',
})
</script>

<style lang="scss" scoped>
$width: 550px;
$height: 300px;
$time: 0.4s;
$easeing: cubic-bezier(0.7, 0.13, 0.1, 0.92);
$mainColor: #163064;

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

.wrapper {
  position: relative;
  width: $width;
  height: $height;
  &:hover {
    .wrapper__mask {
      transform: scaleX(1);
    }
    .wrapper__content {
      transform: translateX(20px);
      p,
      h3 {
        color: #fff;
      }
    }
    .wrapper__image {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.wrapper__mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 40%;
  height: 100%;
  background: $mainColor;
  transition: transform $time $easeing;
  transform: scaleX(0);
  transform-origin: left;
}

.wrapper__content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 30px;
  transition: transform $time $easeing;
  p {
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.7;
    color: $mainColor;
    letter-spacing: 10px;
    transition: color $time $easeing;
  }
  h3 {
    font-size: 16px;
    font-weight: normal;
    color: #333;
    transition: color $time $easeing;
  }
}

.wrapper__image {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  width: $width - 100px;
  height: $height;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transition: transform $time * 2 $easeing;
  }
}
</style>
