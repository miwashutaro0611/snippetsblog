<template>
  <a class="animationButton" href="" @mouseenter="buttonAnime(true)" @mouseleave="buttonAnime(false)">
    <span class="animationButton__text">ボタン</span>
    <span class="animationButton__dotWrapper" aria-hidden="true">
      <span v-for="n in dotNum" :key="n" ref="dotRefs" class="animationButton__dot" />
    </span>
  </a>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import { gsap } from 'gsap'

export default defineComponent({
  name: 'Code25',
  setup() {
    const dotNum = 20 * 6
    const dotRefs = ref<HTMLElement>()
    let gsapAnime: any // TODO: gsapの型に対応できるようにする
    onMounted(() => {
      if (dotRefs.value) {
        gsapAnime = gsap.to(dotRefs.value, {
          opacity: 1,
          paused: true,
          duration: 0.1,
          stagger: {
            each: 0.01,
            grid: 'auto',
            from: 'random',
          },
        })
      }
    })
    const buttonAnime = (flg: boolean): void => {
      if (flg) {
        gsapAnime.play()
      } else {
        gsapAnime.reverse()
      }
    }
    return { dotRefs, dotNum, buttonAnime }
  },
})
</script>

<style lang="scss" scoped>
.animationButton {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 202px;
  height: 62px;
  color: inherit;
  text-decoration: none;
  border: 1px solid #ddd;
}
.animationButton__text {
  position: relative;
  z-index: 1;
  color: #333;
  transition: color 0.3s;
  .animationButton:hover & {
    color: #fff;
  }
}
.animationButton__dotWrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
}

.animationButton__dot {
  display: block;
  width: 10px;
  height: 10px;
  background: #333;
  opacity: 0;
}
</style>
