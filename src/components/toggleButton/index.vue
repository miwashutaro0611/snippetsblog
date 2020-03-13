<template>
  <div class="toggleSwitch">
    <input id="toggle" class="toggleSwitch-input" type="checkbox" v-model="darkmode" @change="modeChange(darkmode)" />
    <label for="toggle" class="toggleSwitch-label" />
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
$width: 50px;
$height: 30px;
.toggleSwitch {
  position: relative;
  width: $width;
  height: $height;
}
.toggleSwitch-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  &:checked {
    + label {
      background-color: #4bd865;
      &:after {
        left: $width / 2;
      }
    }
  }
}
.toggleSwitch-label {
  width: $width;
  height: $height;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.4s;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    width: $height;
    height: $height;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.4s;
  }
}
</style>
