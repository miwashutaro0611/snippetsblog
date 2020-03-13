<template>
  <div id="app">
    <global-header />
    <div class="globalWrapper">
      <transition mode="out-in">
        <router-view />
      </transition>
      <span class="mask" :class="className" />
    </div>
    <global-footer />
  </div>
</template>

<script>
import GlobalHeader from './components/header/'
import GlobalFooter from './components/footer/'

export default {
  name: 'App',
  components: {
    GlobalHeader,
    GlobalFooter
  },
  data() {
    return {
      className: 'is-open',
      isOpen: true
    }
  },
  watch: {
    isOpen() {
      this.isOpen ? this.remove() : this.paging()
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.isOpen = false
      next()
    })
    this.$router.afterEach(() => {
      setTimeout(() => {
        const scrollElem = document.scrollingElement || document.documentElement
        scrollElem.scrollTop = 0
        this.isOpen = true
      }, 1000)
    })
  },
  methods: {
    paging() {
      this.className = 'is-paging'
    },
    remove() {
      this.className = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.globalWrapper {
  width: calc(100% - 40px);
  // max-width: 1100px;
  margin: 0 auto;
}

.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #555;
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    transform: scaleX(0);
  }
  &::before {
    z-index: 11;
    background: #777;
    transition: transform 0.5s 0.2s;
  }
  &::after {
    z-index: 12;
    background: #333;
    transition: transform 0.5s 0.5s;
  }
  &.is-paging,
  &.is-paging::before,
  &.is-paging::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
