<template>
  <article class="card">
    <div class="cardCode">
      <component :is="code.link" />
    </div>
    <h2 class="cardTitle">
      <span>{{ code.title }}</span>
    </h2>
    <router-link
      :to="{
        name: 'code',
        params: { id: code.id }
      }"
      class="cardLink"
    >
      <span>MORE</span>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'cardItem',
  props: ['code']
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 10px 25px;
  border-color: #333;
  border-right: 1px solid;
  border-bottom: 1px solid;
  &:first-of-type {
    border-top: 1px solid;
  }
  @include sm(max) {
    border-left: 1px solid;
  }
  @include smOnly {
    width: (100% / 2);
    &:nth-of-type(-n + 2) {
      border-top: 1px solid;
    }
    &:nth-of-type(2n + 1) {
      border-left: 1px solid;
    }
  }
  @include mdOnly {
    width: (100% / 3);
    &:nth-of-type(-n + 3) {
      border-top: 1px solid;
    }
    &:nth-of-type(3n + 1) {
      border-left: 1px solid;
    }
  }
  @include lgOnly {
    width: (100% / 4);
    &:nth-of-type(-n + 4) {
      border-top: 1px solid;
    }
    &:nth-of-type(4n + 1) {
      border-left: 1px solid;
    }
  }
  @include xlg {
    width: (100% / 5);
    &:nth-of-type(-n + 5) {
      border-top: 1px solid;
    }
    &:nth-of-type(5n + 1) {
      border-left: 1px solid;
    }
  }
  &::before {
    content: '';
    background: #636569;
    z-index: 1;
    position: absolute;
    right: 45px;
    bottom: 35px;
    width: calc(100% - 40px);
    height: calc(100% - 20px);
    margin: -25px;
    border-radius: 10px;
    clip-path: inset(40px 0 0 40px round 10px);
    transition: clip-path 0.3s ease 0.1s;
  }
  &:hover {
    &::before {
      transition-delay: 0;
      clip-path: inset(0 0 0 0 round 10px);
    }
  }
}
.cardCode {
  position: relative;
  z-index: 2;
  width: calc(100% - 60px);
  height: 200px;
  margin: 20px 0 10px 30px;
  padding: 10px;
  background: #fff;
  border: 2px solid #2c2e31;
  overflow: auto;
  border-radius: 6px;
}
.cardTitle {
  position: relative;
  z-index: 2;
  display: inline-block;
  max-width: calc(100% - 110px);
  margin-left: 45px;
  padding-right: 20px;
  color: #fff;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: -10px;
    position: absolute;
    z-index: -1;
    background: rgba(#2c2e31, 0.5);
    transform: skew(-15deg);
  }
  > span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

$btnSize: 40px;
$btnColor: #2c2e31;
$btnBack: #fff;
$btnSize2: 150px;
$textColor: #333;
$actionTime: 0.4s;

.cardLink {
  position: absolute;
  right: 40px;
  bottom: 30px;
  z-index: 2;
  width: $btnSize2;
  height: $btnSize;
  border: 2px solid $btnColor;
  background: $btnBack;
  transition: width $actionTime;
  border-radius: ($btnSize / 2);
  overflow: hidden;
  @include sm {
    width: $btnSize;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: calc(50% - 6px);
    right: 17px;
    width: 2px;
    height: 12px;
    background: $btnColor;
    transition: transform $actionTime;
  }
  &::after {
    transform: rotate(90deg);
  }
  > span {
    font-size: 15px;
    font-weight: bold;
    opacity: 1;
    padding: 0 20px;
    transition: opacity ($actionTime / 2);
    line-height: ($btnSize - 4);
    color: $textColor;
    @include sm {
      opacity: 0;
    }
  }
  &:hover,
  &:focus {
    width: $btnSize2;
    &::before {
      transform: rotate(90deg);
    }
    &::after {
      transform: rotate(180deg);
    }
    > span {
      opacity: 1;
      transition: opacity ($actionTime / 2) ($actionTime / 4);
    }
  }
}
</style>
