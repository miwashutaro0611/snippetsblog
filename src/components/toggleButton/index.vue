<template>
  <div class="toggleSwitch">
    <input id="toggle" v-model="darkmode" class="toggleSwitch-input" type="checkbox" @change="modeChange(darkmode)" />
    <label for="toggle" class="toggleSwitch-label">
      <fa v-if="darkmode" :icon="faMoon" class="toggleSwitch-label-icon" />
      <fa v-else :icon="faSun" class="toggleSwitch-label-icon" />
    </label>
  </div>
</template>

<script>
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'ToggleButton',
  data() {
    return {
      darkmode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    }
  },
  computed: {
    faMoon() {
      return faMoon
    },
    faSun() {
      return faSun
    },
  },
  mounted() {
    if (this.darkmode) {
      document.documentElement.setAttribute('data-mode', 'dark')
    } else {
      document.documentElement.setAttribute('data-mode', 'light')
    }
  },
  methods: {
    modeChange(mode) {
      if (mode) {
        document.documentElement.setAttribute('data-mode', 'dark')
      } else {
        document.documentElement.setAttribute('data-mode', 'light')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.toggleSwitch {
}
.toggleSwitch-input {
  display: none;
  &:checked {
    & + label {
      .toggleSwitch-label-icon {
        transform: translateX(20px);
      }
    }
  }
}
.toggleSwitch-label {
  position: relative;
  display: block;
  width: 70px;
  height: 40px;
  padding: 0 10px;
  line-height: 38px;
  cursor: pointer;
  border: 2px solid var(--color-default);
  border-radius: 20px;
  transition: 0.3s;
}
.toggleSwitch-label-icon {
  position: absolute;
  top: 8px;
  left: 10px;
  width: 20px;
  height: 20px;
  color: var(--color-default);
  transition: 0.3s;
  transform: translateX(0);
}
</style>
