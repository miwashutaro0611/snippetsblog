<template>
  <div>
    <global-header />
    <div class="globalWrapper">
      <nuxt />
      <span class="mask" :class="className" />
    </div>
    <global-footer />
  </div>
</template>

<script>
import GlobalFooter from '~/components/footer/index.vue'
import GlobalHeader from '~/components/header/index.vue'

import 'what-input'

export default {
  name: 'Layout',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  data() {
    return {
      className: '',
      isOpen: true,
      consoleClass: `
        font-size: 22px;
        color: #0f4c81;
      `,
      consoleClass2: `
        font-size: 14px;
      `,
    }
  },
  watch: {
    isOpen() {
      if (this.isOpen) {
        this.remove()
      } else {
        this.paging()
      }
    },
  },
  created() {
    console.log(
      '\n%cThanks for visiting\n%c\n訪問ありがとうございます。こちら@jackmiwamiwaのスニペットブログになります。PWAにも対応しておりますので、ぜひアプリでもご覧ください。\nTwitterやはてブなども行なっておりますので、ぜひそちらもご覧ください。\n\nTwitter: https://twitter.com/jackmiwamiwa/\nGitHub: https://github.com/miwashutaro0611/\nQiita: https://qiita.com/miwashutaro0611/\nlapras: https://lapras.com/public/T7IYUQT\nhatena: https://jackswim3411.hatenablog.com/\nnote: https://note.com/jackblog/\nWantedly: https://www.wantedly.com/users/24578098/\n',
      this.consoleClass,
      this.consoleClass2
    )
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.isOpen = false
      next()
    })
    this.$router.afterEach(() => {
      setTimeout(() => {
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
    },
  },
}
</script>

<style lang="scss" scoped>
.globalWrapper {
  width: calc(100% - 40px);
  min-height: calc(100vh - 210px);
  margin: 0 auto;
}

.mask {
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 10;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: var(--color-page-mask3);
  transition: transform 0.5s;
  transform: scaleX(0);
  transform-origin: right;
  &::after,
  &::before {
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
    background: var(--color-page-mask2);
    transition: transform 0.5s 0.2s;
  }
  &::after {
    z-index: 12;
    background: var(--color-page-mask3);
    transition: transform 0.5s 0.5s;
  }
  &.is-paging,
  &.is-paging::before,
  &.is-paging::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter-to,
.page-leave {
  opacity: 1;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
