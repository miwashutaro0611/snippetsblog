<template>
  <nuxt-link to="/">
    <div class="globalLogo" @mouseover="logoAnimeHide">
      <span class="globalLogoIcons" aria-hidden="true">
        <span class="globalLogoIcon" />
        <span class="globalLogoIcon" />
      </span>
      <p class="globalLogoText">
        <span v-for="logoText in state.logoTitleAry" ref="LogoTextInner" :key="logoText.id" class="globalLogoTextInner">
          {{ logoText }}
        </span>
        <span ref="LogoTextLine" class="globalLogoTextLine" />
      </p>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onBeforeUnmount, ref } from '@nuxtjs/composition-api'
import { gsap } from 'gsap'

const TAB_WIDTH = 768

type State = {
  logoTitle: string
  logoTitleAry: string[]
  width: number
}

export default defineComponent({
  name: 'GlobalLogo',
  setup() {
    const LogoTextInner = ref([])
    const LogoTextLine = ref(null)

    const state = reactive<State>({
      logoTitle: 'SnippetsBlog@Miwa',
      logoTitleAry: [],
      width: 0,
    })

    const setWidth = () => {
      state.width = window.innerWidth
    }

    onMounted(() => {
      state.logoTitleAry = state.logoTitle.split('')
      gsap.set(LogoTextLine.value, {
        scaleX: 0,
      })
      setWidth()
      window.addEventListener('resize', setWidth)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', setWidth)
    })

    const logoAnimeHide = () => {
      if (state.width < TAB_WIDTH) return
      const elemText = LogoTextInner.value
      const elemLine = LogoTextLine.value
      const elemTextLength = state.logoTitleAry.length
      gsap.to(elemLine, 0.5, {
        scaleX: 1,
      })
      for (let i = 0; i < elemTextLength; i += 1) {
        gsap.to(elemText[i], 0.4, {
          y: 10,
          opacity: 0,
          delay: 0.03 * i + 0.5,
        })
      }
      gsap.to(elemLine, 0.5, {
        y: 20,
        delay: 0.03 * elemTextLength + 1,
      })
      for (let i = 0; i < elemTextLength; i += 1) {
        gsap.to(elemText[i], 0.4, {
          y: 0,
          opacity: 1,
          delay: 0.03 * elemTextLength + 1 + 0.03 * i + 0.5,
        })
      }
      gsap.to(elemLine, 0.5, {
        scaleX: 0,
        delay: 0.03 * elemTextLength + 1 + 0.03 * elemTextLength + 0.5 + 0.4,
      })
      gsap.to(elemLine, 0, {
        y: 0,
        delay: 0.03 * elemTextLength + 1 + 0.03 * elemTextLength + 0.5 + 0.4 + 0.5,
      })
    }
    return { state, logoAnimeHide, LogoTextInner, LogoTextLine }
  },
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/resource' as global;
@use 'sass:math';
$logoSize: 40px;
$logoBorderColor: var(--color-default);
$logoTime: 2s;
.globalLogo {
  display: flex;
  align-items: center;
  font-family: global.$fontFamilyCourgette;
  @include global.sm {
    &:hover {
      .globalLogoIcon::before,
      .globalLogoIcon::after {
        animation-play-state: paused;
      }
    }
  }
}
.globalLogoIcons {
  position: relative;
  display: block;
  width: math.div($logoSize * 3, 4);
  height: math.div($logoSize * 3, 4);
  @include global.sm {
    width: $logoSize;
    height: $logoSize;
  }
}
.globalLogoIcon {
  position: absolute;
  display: block;
  width: math.div($logoSize * 3, 4) * math.div(3, 4);
  height: math.div($logoSize * 3, 4) * math.div(3, 4);
  @include global.sm {
    width: math.div($logoSize * 3, 4);
    height: math.div($logoSize * 3, 4);
  }
  &::before,
  &::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    border: 2px solid $logoBorderColor;
  }
  &::before {
    top: 0;
    left: 0;
    // border-top: 2px solid transparent;
    // border-right: 2px solid transparent;
    // animation: lineAnime $logoTime both infinite alternate;
  }
  &::after {
    right: 0;
    bottom: 0;
    // border-bottom: 2px solid transparent;
    // border-left: 2px solid transparent;
    // animation: lineAnime2 $logoTime both infinite alternate;
  }
  &:nth-child(1) {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
    bottom: 0;
    // &::before,
    // &::after {
    //   animation-delay: ($logoTime / 4);
    // }
  }
}
.globalLogoText {
  position: relative;
  padding: 0 5px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 600;
  @include global.sm {
    margin-left: 15px;
    font-size: 25px;
  }
}
.globalLogoTextInner {
  display: inline-block;
  padding: 0 1px;
}
.globalLogoTextLine {
  position: absolute;
  top: calc(50% - 2px);
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--color-body);
  transform-origin: left;
}
@keyframes lineAnime {
  0%,
  10% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
  11% {
    border-color: $logoBorderColor;
  }
  30% {
    width: 100%;
    height: 0;
    border-color: $logoBorderColor;
  }
  50%,
  100% {
    width: 100%;
    height: 100%;
    border-color: $logoBorderColor;
  }
}
@keyframes lineAnime2 {
  0%,
  50% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
  51% {
    border-color: $logoBorderColor;
  }
  70% {
    width: 100%;
    height: 0;
    border-color: $logoBorderColor;
  }
  90%,
  100% {
    width: 100%;
    height: 100%;
    border-color: $logoBorderColor;
  }
}
</style>
