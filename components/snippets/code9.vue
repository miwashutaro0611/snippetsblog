<template>
  <div class="textWrap">
    <span class="textContent textContent-6 black" :data-text="textValue">{{ textValue }}</span>
    <span class="textContent textContent-5 blue" :data-text="textValue">{{ textValue }}</span>
    <span class="textContent textContent-4 skyblue" :data-text="textValue">{{ textValue }}</span>
    <span class="textContent textContent-3 red" :data-text="textValue">{{ textValue }}</span>
    <span class="textContent textContent-2 yellow" :data-text="textValue">{{ textValue }}</span>
    <span class="textContent textContent-1 pink" :data-text="textValue">{{ textValue }}</span>
  </div>
</template>

<script>
export default {
  name: 'Code9',
  data() {
    return {
      textValue: 'R',
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap');

$time: 3s;

.textWrap {
  position: relative;
  display: block;
}

.textContent {
  position: absolute;
  display: block;
  font-family: 'Work Sans', sans-serif;
  font-size: 200px;
  font-weight: bold;
  transform: scale(-1, 1) rotate(20deg);
  &::before {
    position: absolute;
    top: 0;
    left: -4px;
    overflow: hidden;
    clip: rect(0, 200px, 0, 0);
    content: attr(data-text);
    animation: rectBefore 3s infinite linear alternate-reverse;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 4px;
    overflow: hidden;
    clip: rect(0, 200px, 0, 0);
    content: attr(data-text);
    animation: rectAfter 2s infinite linear alternate-reverse;
  }
}

.black {
  color: #1c1d1b;
  &::before {
    color: #1c1d1b;
  }
  &::after {
    color: #1c1d1b;
  }
}

.blue {
  top: -4px;
  left: 4px;
  color: #191ffa;
  animation: blueMove $time alternate infinite both;
  &::before {
    color: #191ffa;
  }
  &::after {
    color: #191ffa;
  }
}

.skyblue {
  top: -6px;
  left: 8px;
  color: #00fefe;
  animation: skyblueMove $time alternate infinite both;
  &::before {
    color: #00fefe;
  }
  &::after {
    color: #00fefe;
  }
}

.yellow {
  top: 8px;
  left: -4px;
  color: #fffe40;
  animation: yellowMove $time alternate infinite both;
  &::before {
    color: #fffe40;
  }
  &::after {
    color: #fffe40;
  }
}

.red {
  top: 4px;
  left: -2px;
  color: #ff1d1b;
  animation: redMove $time alternate infinite both;
  &::before {
    color: #ff1d1b;
  }
  &::after {
    color: #ff1d1b;
  }
}

.pink {
  top: 0;
  left: 6px;
  color: #ffacfc;
  animation: pinkDisplay 0.1s alternate infinite both;
  &::before {
    color: #ffacfc;
  }
  &::after {
    color: #ffacfc;
  }
}

@for $i from 1 through 6 {
  .textContent-#{$i} {
    z-index: $i;
  }
}

@keyframes blueMove {
  0% {
    transform: scale(-1, 1) rotate(20deg);
  }
  10% {
    transform: scale(-1, 1) rotate(20deg);
  }
  40% {
    transform: scale(-1, 1) rotate(20deg) translate(2px, 4px);
  }
  90% {
    transform: scale(-1, 1) rotate(20deg) translate(6px, 6px);
  }
  100% {
    transform: scale(-1, 1) rotate(20deg) translate(6px, 6px);
  }
}

@keyframes skyblueMove {
  0% {
    transform: scale(-1, 1) rotate(20deg);
  }
  10% {
    transform: scale(-1, 1) rotate(20deg);
  }
  50% {
    transform: scale(-1, 1) rotate(20deg) translate(6px, 8px);
  }
  90% {
    transform: scale(-1, 1) rotate(20deg) translate(14px, 14px);
  }
  100% {
    transform: scale(-1, 1) rotate(20deg) translate(14px, 14px);
  }
}

@keyframes redMove {
  0% {
    transform: scale(-1, 1) rotate(20deg);
  }
  10% {
    transform: scale(-1, 1) rotate(20deg);
  }
  60% {
    transform: scale(-1, 1) rotate(20deg) translate(-4px, -6px);
  }
  90% {
    transform: scale(-1, 1) rotate(20deg) translate(-8px, -8px);
  }
  100% {
    transform: scale(-1, 1) rotate(20deg) translate(-8px, -8px);
  }
}

@keyframes yellowMove {
  0% {
    transform: scale(-1, 1) rotate(20deg);
  }
  10% {
    transform: scale(-1, 1) rotate(20deg);
  }
  30% {
    transform: scale(-1, 1) rotate(20deg) translate(-6px, -6px);
  }
  90% {
    transform: scale(-1, 1) rotate(20deg) translate(-16px, -12px);
  }
  100% {
    transform: scale(-1, 1) rotate(20deg) translate(-16px, -12px);
  }
}

@keyframes pinkDisplay {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes rectBefore {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(200) + px, 9999px, random(200) + px, 0);
    }
  }
}

@keyframes rectAfter {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(200) + px, 9999px, random(200) + px, 0);
    }
  }
}
</style>
