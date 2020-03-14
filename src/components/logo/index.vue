<template>
  <router-link to="/">
    <div class="globalLogo" @mouseover="logoAnimeHide">
      <span class="globalLogoIcons" area-hidden="true">
        <span class="globalLogoIcon" />
        <span class="globalLogoIcon" />
      </span>
      <p class="globalLogoText">
        <span class="globalLogoTextInner" ref="LogoTextInner" v-for="logoText in logoTitleAry" :key="logoText.id">
          {{ logoText }}
        </span>
        <span class="globalLogoTextLine" ref="LogoTextLine" />
      </p>
    </div>
  </router-link>
</template>

<script>
import { TweenMax } from 'gsap'
export default {
  name: 'logo',
  data() {
    return {
      logoTitle: 'SnippetsBlog@Miwa',
      logoTitleAry: '',
      width: window.innerWidth
    }
  },
  mounted() {
    this.logoTitleAry = this.logoTitle.split('')
    const elemLine = this.$refs.LogoTextLine
    TweenMax.set(elemLine, {
      scaleX: 0
    })
  },
  methods: {
    logoAnimeHide() {
      if (this.width < 768) return
      const elemText = this.$refs.LogoTextInner
      const elemLine = this.$refs.LogoTextLine
      const elemTextLength = this.$refs.LogoTextInner.length
      TweenMax.to(elemLine, 0.5, {
        scaleX: 1
      })
      for (let i = 0; i < elemTextLength; i++) {
        TweenMax.to(elemText[i], 0.4, {
          y: 10,
          opacity: 0,
          delay: 0.03 * i + 0.5
        })
      }
      TweenMax.to(elemLine, 0.5, {
        y: 20,
        delay: 0.03 * elemTextLength + 1
      })
      for (let i = 0; i < elemTextLength; i++) {
        TweenMax.to(elemText[i], 0.4, {
          y: 0,
          opacity: 1,
          delay: 0.03 * elemTextLength + 1 + 0.03 * i + 0.5
        })
      }
      TweenMax.to(elemLine, 0.5, {
        scaleX: 0,
        delay: 0.03 * elemTextLength + 1 + 0.03 * elemTextLength + 0.5 + 0.4
      }),
        TweenMax.to(elemLine, 0, {
          y: 0,
          delay: 0.03 * elemTextLength + 1 + 0.03 * elemTextLength + 0.5 + 0.4 + 0.5
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$logoSize: 40px;
$logoBorderColor: var(--color-default);
$logoTime: 2s;
.globalLogo {
  display: flex;
  align-items: center;
  font-family: $fontFamilyCourgette;
  @include sm {
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
  width: ($logoSize * 3 / 4);
  height: ($logoSize * 3 / 4);
  @include sm {
    width: $logoSize;
    height: $logoSize;
  }
}
.globalLogoIcon {
  position: absolute;
  display: block;
  width: ($logoSize * 3 / 4 * 3 / 4);
  height: ($logoSize * 3 / 4 * 3 / 4);
  @include sm {
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
  &::before,
  &::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    content: '';
  }
  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    animation: lineAnime $logoTime both infinite alternate;
  }
  &::after {
    right: 0;
    bottom: 0;
    border-bottom: 2px solid transparent;
    border-left: 2px solid transparent;
    animation: lineAnime2 $logoTime both infinite alternate;
  }
  &:nth-child(1) {
    top: 0;
    left: 0;
  }
  &:nth-child(2) {
    right: 0;
    bottom: 0;
    &::before,
    &::after {
      animation-delay: ($logoTime / 4);
    }
  }
}
.globalLogoText {
  position: relative;
  padding: 0 5px;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 600;
  @include sm {
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
  0% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
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
  50% {
    width: 100%;
    height: 100%;
    border-color: $logoBorderColor;
  }
  100% {
    width: 100%;
    height: 100%;
    border-color: $logoBorderColor;
  }
}
@keyframes lineAnime2 {
  0% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
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
  90% {
    width: 100%;
    height: 100%;
    border-color: $logoBorderColor;
  }
  100% {
    width: 100%;
    height: 100%;
    border-color: $logoBorderColor;
  }
}
</style>
