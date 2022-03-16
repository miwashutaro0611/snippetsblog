<template>
  <article class="card">
    <div ref="wrapperRef" class="cardCode">
      <component :is="code.link" ref="componentRef" :style="`zoom: ${state.zoom};`" />
    </div>
    <h2 class="cardTitle">
      <span>{{ code.title }}</span>
    </h2>
    <nuxt-link :to="toLink(code.id)" class="cardLink">
      <span>MORE</span>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from '@nuxtjs/composition-api'
import type { PropType } from '@nuxtjs/composition-api'
import { SnippetData } from '~/types/snippetData'

export default defineComponent({
  props: {
    code: Object as PropType<SnippetData>,
  },
  setup() {
    const componentRef = ref()
    const wrapperRef = ref<HTMLElement>()
    const state = reactive({
      zoom: 1,
    })
    const setZoomSize = (elemComponent: HTMLElement, elemWrapper: HTMLElement) => {
      const largeComponentType = elemComponent.clientWidth > elemComponent.clientHeight ? 'width' : 'height'
      const elemComponentSize = largeComponentType === 'width' ? elemComponent.clientWidth : elemComponent.clientHeight
      const elemWrapperSize = largeComponentType === 'width' ? elemWrapper.clientWidth : elemWrapper.clientHeight
      const zoomSize =
        elemComponentSize > elemWrapperSize ? Math.round((elemWrapperSize / elemComponentSize) * 100) / 100 : 1
      return zoomSize
    }
    onMounted(() => {
      const elemComponent = componentRef.value.$el
      const elemWrapper = wrapperRef.value
      if (!elemComponent || !elemWrapper) return
      state.zoom = setZoomSize(elemComponent, elemWrapper)
    })
    const toLink = (id: number) => {
      return `/code/${id}`
    }
    return { state, componentRef, wrapperRef, toLink }
  },
})
</script>

<style lang="scss" scoped>
@use '~/assets/scss/resource' as global;
@use 'sass:math';
.card {
  position: relative;
  display: block;
  width: 100%;
  padding: 10px 0 25px;
  border-color: #333;
  @include global.sm {
    width: math.div(100%, 2);
  }
  @include global.md {
    width: math.div(100%, 3);
  }
  @include global.lg {
    width: math.div(100%, 4);
  }
  @include global.xlg {
    width: math.div(100%, 5);
  }
  &::before {
    position: absolute;
    right: 35px;
    bottom: 35px;
    z-index: 1;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    margin: -25px;
    clip-path: inset(40px 0 0 40px round 10px);
    content: '';
    background: var(--color-card-mask);
    border-radius: 10px;
    transition: clip-path 0.3s ease 0.1s, background 0.3s;
  }
  &:hover {
    &::before {
      clip-path: inset(0 0 0 0 round 10px);
      transition-delay: 0;
    }
  }
}
.cardCode {
  position: relative;
  z-index: 2;
  width: calc(100% - 60px);
  height: 200px;
  padding: 10px;
  margin: 20px 0 10px 30px;
  overflow: auto;
  color: #333;
  background: #fff;
  border: 2px solid #2c2e31;
  border-radius: 6px;
  box-shadow: 0 5px 5px #0007;
}
.cardTitle {
  position: relative;
  z-index: 2;
  display: inline-block;
  max-width: calc(100% - 220px);
  padding-right: 20px;
  margin-left: 45px;
  font-family: global.$fontFamilyCourgette;
  color: var(--color-default-reverse);
  transition: 0.3s;
  @include global.sm {
    max-width: calc(100% - 110px);
  }
  &::after {
    position: absolute;
    top: 0;
    left: -10px;
    z-index: -1;
    width: 100%;
    height: 100%;
    content: '';
    background: var(--color-card-title);
    transition: 0.3s;
    transform: skew(-15deg);
  }
  > span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  right: 30px;
  bottom: 24px;
  z-index: 2;
  width: $btnSize2;
  height: $btnSize;
  overflow: hidden;
  background: $btnBack;
  border: 2px solid $btnColor;
  border-radius: math.div($btnSize, 2);
  transition: width $actionTime;
  @include global.sm {
    bottom: 30px;
    width: $btnSize;
  }
  &::before,
  &::after {
    position: absolute;
    top: calc(50% - 6px);
    right: 17px;
    display: block;
    width: 2px;
    height: 12px;
    content: '';
    background: $btnColor;
    transition: transform $actionTime;
  }
  &::after {
    transform: rotate(90deg);
  }
  > span {
    padding: 0 20px;
    font-size: 15px;
    font-weight: bold;
    line-height: ($btnSize - 4);
    color: $textColor;
    opacity: 1;
    transition: opacity math.div($actionTime, 2);
    @include global.sm {
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
      transition: opacity math.div($actionTime, 2) math.div($actionTime, 4);
    }
  }
}
</style>
