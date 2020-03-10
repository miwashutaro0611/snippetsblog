<template>
  <div id="app">
    <global-header />
    <div class="globalWrapper">
      <transition mode="out-in">
        <router-view/>
      </transition>
      <span class="mask" :class="className"></span>
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
      this.isOpen ? this.remove() : this.paging();
    }
  },
  mounted () {
		this.$router.beforeEach((to, from, next) => {
			this.isOpen = false;
			next();
		})
		this.$router.afterEach(() => {
			setTimeout( () => {
				this.isOpen = true;
			}, 800);
		})
  },
  methods: {
    paging() {
      this.className = 'is-paging';
    },
    remove() {
      this.className = '';
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $gray;
}
.globalWrapper {
  width: calc(100% - 40px);
  max-width: 1100px;
  margin: 0 auto;
}

.mask {
  position: absolute;
  top:  0;
  left: 0;
  display: block;
  width:  100%;
  height: 100%;
  background: #333;
  z-index: 99999;
  transform: scaleX(0);
  transition: transform .3s;
  transform-origin: right;
  pointer-events: none;
  &.is-paging {
    transform-origin: left;
    transform: scaleX(1);
  }
}

.v-enter-active, .v-leave-active {
  transition: opacity .8s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
