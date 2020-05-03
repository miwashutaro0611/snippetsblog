<template>
  <a class="wrap" href="#">
    <div class="image">
      <img src="https://source.unsplash.com/80x80/?dog" alt="" />
      <div class="ranking">1</div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Code1'
}
</script>

<style lang="scss" scoped>
$leftColor: #6b6b6b;
$rightColor: #858585;
$textColor: #fff;
.wrap {
  position: relative;
  display: block;
  width: 80px;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}
.image {
  width: 80px;
  height: 80px;
  overflow: hidden;
  img {
    transition: 0.4s ease-out;
  }
}
.ranking {
  position: absolute;
  top: -2px;
  left: 4px;
  display: block;
  width: 20px;
  height: 22px;
  padding-top: 4px;
  font-size: 12px;
  font-style: italic;
  color: $textColor;
  text-align: center;
  background: linear-gradient(to right, $leftColor 50%, $rightColor 50%);
  &::before,
  &::after {
    position: absolute;
    z-index: 2;
    display: block;
    width: 0;
    height: 0;
    content: '';
    border-style: solid;
  }
  &::before {
    bottom: -5px;
    left: 0;
    border-color: $leftColor transparent transparent transparent;
    border-width: 5px 10px 0 0;
  }
  &::after {
    right: 0;
    bottom: -5px;
    border-color: transparent $rightColor transparent transparent;
    border-width: 0 10px 5px 0;
  }
}
</style>
