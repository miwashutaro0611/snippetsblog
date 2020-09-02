<template>
  <div>
    <button type="button" @click="onClick(true)">
      START
    </button>
    <button type="button" @click="onClick(false)">
      DELETE
    </button>
    <p class="hubbleTitle">
      <span class="hubbleTitle__ja">{{ jaText }}</span>
      <span class="hubbleTitle__en" :class="{ isActive: isBool }">
        <span v-for="(text, index) in splitText(enText)" :key="index" class="hubbleTitle__en__text">{{
          text
        }}</span></span
      >
    </p>
  </div>
</template>
<script>
export default {
  name: 'Code19',
  data() {
    return {
      jaText: '特徴と機能',
      enText: 'Feature',
      isBool: false,
    }
  },
  computed: {
    splitText() {
      return (value) => {
        const valueAry = value.split('')
        return valueAry
      }
    },
  },
  methods: {
    onClick(bool) {
      this.isBool = bool
    },
  },
}
</script>

<style lang="scss" scoped>
$delayTime: 0.04;
$barDisplayTime: 0.2;
$texts: F, e, a, t, u, r, e;
$baseColor: #333;

.hubbleTitle {
  margin-top: 15px;
  color: $baseColor;
}

.hubbleTitle__ja {
  display: block;
  font-size: 14px;
  letter-spacing: 0.5px;
}

.hubbleTitle__en {
  position: relative;
  display: inline-block;
  padding-right: 25px;
  font-size: 80px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 0.5px;
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 2px;
    height: 100%;
    content: '';
    background: $baseColor;
    opacity: 0;
  }
  &.isActive {
    &::before {
      animation: flash 1.01s #{length($texts) * $delayTime + $barDisplayTime}s infinite backwards;
    }
  }
}

.hubbleTitle__en__text {
  opacity: 0;
  .isActive & {
    animation: flash 0.4s both;
    @for $index from 1 through length($texts) {
      &:nth-of-type(#{$index + 1}) {
        animation-delay: #{($index + 1) * $delayTime}s;
      }
    }
  }
}

@keyframes flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  50.1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
