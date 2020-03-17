<template>
  <div class="toggleSwitch">
    <input id="toggle" class="toggleSwitch-input" type="checkbox" v-model="darkmode" @change="modeChange(darkmode)" />
    <label for="toggle" class="toggleSwitch-label">
      <font-awesome-icon v-if="darkmode" icon="moon" class="toggleSwitch-label-icon" />
      <font-awesome-icon v-else icon="sun" class="toggleSwitch-label-icon" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'toggleButton',
  data() {
    return {
      darkmode: window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  created() {
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
    }
  }
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
