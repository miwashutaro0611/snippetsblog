<template>
  <div class="GlobalParticlesWrapper">
    <div id="particles" class="GlobalParticles" aria-hidden="ture" />
    <Particles id="particles" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import particlesJS from 'particles.js' // eslint-disable-line @typescript-eslint/no-unused-vars
import particlesData from '~/assets/js/particles.js'

declare global {
  interface Window {
    particlesJS: any
  }
}

export default defineComponent({
  name: 'Code14',
  setup() {
    onMounted(() => {
      window.particlesJS.load('particles', particlesData)
    })
  },
})
</script>

<style lang="scss" scoped>
.GlobalParticlesWrapper {
  position: relative;
  width: 100%;
  height: 300px;
}

.GlobalParticles {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
