<template>
  <div>
    <h1 class="codeTitle">{{ snippets[$route.params.id - 1].title }}</h1>
    <div class="codeWrap">
      <component :is="snippets[$route.params.id - 1].link" />
    </div>
    <section class="referencLink" v-if="snippets[$route.params.id - 1].referencLink.name">
      <h2 class="referencLinkTitle">Reference link</h2>
      <a class="referencLinkContent" :href="snippets[$route.params.id - 1].referencLink.url" target="_blank">
        <div class="referencLinkText">
          <p>{{ snippets[$route.params.id - 1].referencLink.name }}</p>
          <span>{{ snippets[$route.params.id - 1].referencLink.url }}</span>
        </div>
        <!-- <div class="referencLinkImage">
          <img :src="referencImage()" :alt="snippets[$route.params.id - 1].referencLink.name" />
        </div> -->
      </a>
    </section>
    <div class="codePen" v-html="snippets[$route.params.id - 1].codepen" />
    <router-link to="/" class="topLinkBtn">
      GO TO LIST
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Code',
  computed: {
    ...mapState({
      snippets: 'snippets'
    })
  },
  title() {
    return this.snippets[this.$route.params.id - 1].title
  },
  methods: {
    referencImage() {
      return require(`@/assets/img/code/${this.snippets[this.$route.params.id - 1].id}/${
        this.snippets[this.$route.params.id - 1].referencLink.image
      }`)
    }
  }
}
</script>

<style lang="scss" scoped>
.codeTitle {
  font-family: $fontFamilyCourgette;
}
.codeWrap {
  width: 100%;
  min-height: 300px;
  padding: 20px;
  margin-top: 15px;
  overflow-x: auto;
  background: #fff;
  border: 2px solid #2c2e31;
  border-radius: 5px;
}
.referencLinkTitle {
  margin-top: 20px;
  font-family: $fontFamilyCourgette;
}
.referencLinkContent {
  display: block;
  padding: 20px;
  margin-top: 15px;
  color: #333;
  background: #fff;
  border: 2px solid #000;
  border-radius: 5px;
  @include sm {
    display: flex;
    align-items: center;
  }
}
.referencLinkText {
  @include sm {
    flex-basis: 100%;
  }
}
.referencLinkImage {
  margin-top: 15px;
  @include sm {
    flex-basis: 200px;
    flex-shrink: 1;
    margin-top: 0;
  }
  img {
    vertical-align: bottom;
  }
}
.codePen {
  margin-top: 40px;
}
.topLinkBtn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  max-width: 300px;
  height: 60px;
  margin: 40px auto 0;
  overflow: hidden;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.1em;
  border: 2px solid var(--color-default);
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
  @include sm {
    margin-top: 40px;
  }
  &::before {
    position: absolute;
    top: 0;
    left: -4.5em;
    display: block;
    width: 3em;
    height: 100%;
    content: '';
    background-color: var(--color-btn-mask);
    transition: none;
    transform: skewX(-45deg) translateX(0);
  }
  @media (hover: hover) {
    &:hover {
      color: var(--color-default-reverse);
      background-color: var(--color-default);
      &::before {
        transition: all 0.5s ease-in-out;
        transform: skewX(-45deg) translateX(400px);
      }
    }
  }
}
</style>
