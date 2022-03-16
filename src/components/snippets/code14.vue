<template>
  <div class="GlobalParticlesWrapper">
    <div id="particles" class="GlobalParticles" aria-hidden="ture" />
    <Particles
      id="particles"
      :particles-init="particlesInit"
      :particles-loaded="particlesLoaded"
      :options="particlesData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import particlesData from '~/assets/js/particles'

export default defineComponent({
  name: 'Code14',
  setup() {
    return { particlesData }
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
