<template>
  <div class="GlobalParticlesWrapper">
    <div id="particles" class="GlobalParticles" araa-hidden="ture" />
  </div>
</template>

<script>
import particlesJS from 'particles.js' // eslint-disable-line no-unused-vars
import particlesData from '~/assets/js/particles.js'

export default {
  name: 'Code14',
  mounted() {
    window.particlesJS('particles', particlesData.data)
  }
}
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
