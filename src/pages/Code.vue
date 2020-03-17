<template>
  <div>
    <h1 class="codeTitle">{{ snippets[$route.params.id - 1].title }}</h1>
    <div class="codeWrap">
      <component :is="snippets[$route.params.id - 1].link" />
    </div>
    <div class="referencLink" v-if="snippets[$route.params.id - 1].referencLink.name">
      <div class="referencLinkContent">
        <p>{{ snippets[$route.params.id - 1].referencLink.name }}</p>
        <a :href="snippets[$route.params.id - 1].referencLink.url" target="_blank">{{
          snippets[$route.params.id - 1].referencLink.url
        }}</a>
      </div>
      <div class="referencLinkImage" />
    </div>
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
.referencLink {
  display: flex;
}
.referencLinkContent {
  flex-basis: 100%;
}
.referencLinkImage {
  flex-basis: 200px;
  flex-shrink: 1;
}
.codePen {
  margin-top: 30px;
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
