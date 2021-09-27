<template>
  <div class="toggleSwitch">
    <input
      id="toggle"
      v-model="state.darkmode"
      class="toggleSwitch-input"
      type="checkbox"
      @change="modeChange(state.darkmode)"
    />
    <label for="toggle" class="toggleSwitch-label">
      <fa v-if="state.darkmode" :icon="faMoonIcon" class="toggleSwitch-label-icon" />
      <fa v-else :icon="faSunIcon" class="toggleSwitch-label-icon" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, onMounted } from '@nuxtjs/composition-api'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
export default defineComponent({
  name: 'ToggleButton',
  setup() {
    const state = reactive({
      darkmode: window.matchMedia('(prefers-color-scheme: dark)').matches,
    })
    const faMoonIcon = computed(() => faMoon)
    const faSunIcon = computed(() => faSun)

    onMounted(() => {
      if (state.darkmode) {
        document.documentElement.setAttribute('data-mode', 'dark')
      } else {
        document.documentElement.setAttribute('data-mode', 'light')
      }
    })

    const modeChange = (mode: boolean) => {
      if (mode) {
        document.documentElement.setAttribute('data-mode', 'dark')
      } else {
        document.documentElement.setAttribute('data-mode', 'light')
      }
    }

    return { state, faMoonIcon, faSunIcon, modeChange }
  },
})
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
