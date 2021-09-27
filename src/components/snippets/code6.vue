<template>
  <a href="" class="link">
    <span class="icon">
      <span v-for="n in 9" :key="n.id" class="square" />
    </span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Code6',
})
</script>

<style lang="scss" scoped>
.link {
  display: block;
  text-align: center;

  &:hover {
    .icon {
      span.square {
        background: #000;

        @for $num from 1 to 10 {
          &:nth-child(#{$num}) {
            animation: ICON_besthub 1.8s ($num * 0.05s + 0.05) cubic-bezier(0.9, -0.05, 0.07, 1) infinite;
          }
        }
      }
    }
  }
}

.icon {
  position: relative;
  display: block;
  width: 33px;
  height: 33px;
  margin: 0 auto;

  span.square {
    position: absolute;
    display: block;
    width: 7px;
    height: 7px;
    background: #a6a9b7;
    transition: all 0.3s ease-in;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 0;
      right: 13px;
    }

    &:nth-child(3) {
      top: 0;
      right: 0;
    }

    &:nth-child(4) {
      top: 13px;
      left: 0;
    }

    &:nth-child(5) {
      top: 13px;
      right: 13px;
    }

    &:nth-child(6) {
      top: 13px;
      right: 0;
    }

    &:nth-child(7) {
      bottom: 0;
      left: 0;
    }

    &:nth-child(8) {
      right: 13px;
      bottom: 0;
    }

    &:nth-child(9) {
      right: 0;
      bottom: 0;
    }
  }
}

@keyframes ICON_besthub {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  30% {
    opacity: 0;
    transform: translateY(-5px);
  }

  60% {
    transform: translateY(10px);
  }

  70% {
    opacity: 0;
  }

  90% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
