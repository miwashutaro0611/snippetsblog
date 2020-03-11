<template>
  <router-link to="/">
    <div
      class="globalLogo"
      @mouseover="logoAnimeHide"
      @mouseleave="logoAnimeShow"
    >
      <span class="globalLogoIcons" area-hidden="true">
        <span class="globalLogoIcon"></span>
        <span class="globalLogoIcon"></span>
      </span>
      <p class="globalLogoText">
        <span
          class="globalLogoTextInner"
          ref="LogoTextInner"
          v-for="logoText in logoTitleAry"
          :key="logoText.id"
        >
          {{logoText}}
        </span>
        <span class="globalLogoTextLine" ref="LogoTextLine"></span>
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
      logoTitleAry: ''
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
      const elemText = this.$refs.LogoTextInner
      const elemLine = this.$refs.LogoTextLine
      const elemTextLength = this.$refs.LogoTextInner.length
      TweenMax.to(elemLine, 0.5, {
        scaleX: 1
      })
      for(let i = 0; i < elemTextLength; i++) {
        TweenMax.to(elemText[i], 0.4, {
          y: 10,
          opacity: 0,
          delay: 0.03 * i + 0.5,
        })
      }
      TweenMax.to(elemLine, 0.5, {
        y: 20,
        delay: 0.03 * elemTextLength + 1,
      })
      for(let i = 0; i < elemTextLength; i++) {
        TweenMax.to(elemText[i], 0.4, {
          y: 0,
          opacity: 1,
          delay: 0.03 * elemTextLength + 1 + 0.03 * i + 0.5,
        })
      }
    },
    logoAnimeShow() {
      const elemText = this.$refs.LogoTextInner
      const elemLine = this.$refs.LogoTextLine
      const elemTextLength = this.$refs.LogoTextInner.length
      TweenMax.to(elemLine, 0.5, {
        y: 0,
      })
      for(let i = 0; i < elemTextLength; i++) {
        TweenMax.to(elemText[i], 0.4, {
          y: -10,
          opacity: 0,
          delay: 0.03 * i + 0.5
        })
      }
      TweenMax.to(elemLine, 0.5, {
        y: 0,
        scaleX: 0,
        delay: 0.03 * elemTextLength + 1,
      })
      for(let i = 0; i < elemTextLength; i++) {
        TweenMax.to(elemText[i], 0.4, {
          y: 0,
          opacity: 1,
          delay: 0.03 * elemTextLength + 1 + 0.03 * i + 0.5,
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$logoSize: 40px;
$logoBorderColor: #444;
$logoTime: 2s;
.globalLogo {
  display: flex;
  align-items: center;
  &:hover {
    .globalLogoIcon::before,
    .globalLogoIcon::after {
      animation-play-state: paused;
    }
  }
}
.globalLogoIcons {
  position: relative;
  display: block;
  width: $logoSize;
  height: $logoSize;
}
.globalLogoIcon {
  position: absolute;
  display: block;
  width: ($logoSize * 3 / 4);
  height: ($logoSize * 3 / 4);
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    display: block;
  }
  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    animation: lineAnime $logoTime both infinite alternate;
  }
  &::after {
    bottom: 0;
    right: 0;
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
  font-size: 25px;
  margin-left: 15px;
  padding: 0 5px;
  font-weight: 600;
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
  background: #000;
  transform-origin: left;
}
@keyframes lineAnime {
  0% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  10% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  11% {
    border-color: $logoBorderColor;
  }
  30% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: 0;
  }
  50% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
  100% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
}
@keyframes lineAnime2 {
  0% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  50% {
    border-color: transparent;
    width: 0;
    height: 0;
  }
  51% {
    border-color: $logoBorderColor;
  }
  70% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: 0;
  }
  90% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
  100% {
    border-color: $logoBorderColor;
    width: ($logoSize * 3 / 4);
    height: ($logoSize * 3 / 4);
  }
}
</style>
