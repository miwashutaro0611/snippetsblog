<template>
  <div>
    <h1 class="codeTitle">{{ snippets[$route.params.id - 1].title }}</h1>
    <div class="codeWrap">
      <component :is="snippets[$route.params.id - 1].link" />
    </div>
    <div
      class="codePen"
      v-if="snippets[$route.params.id - 1].codepen"
      v-html="snippets[$route.params.id - 1].codepen"
    />
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
  overflow-x: auto;
  background: #fff;
  border: 2px solid #2c2e31;
  border-radius: 5px;
}
.codePen {
  margin-top: 20px;
}
.topLinkBtn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: calc(100% - 20px);
  height: 60px;
  margin: 40px auto 0;
  text-align: center;
  border: 2px solid var(--color-default);
  border-radius: 30px;
  letter-spacing: 0.1em;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  @include sm {
    margin-top: 40px;
  }
  &::before {
    content: '';
    background-color: var(--color-btn-mask);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  @media (hover: hover) {
    &:hover {
      background-color: var(--color-default);
      color: var(--color-default-reverse);
      &::before {
        transform: skewX(-45deg) translateX(400px);
        transition: all 0.5s ease-in-out;
      }
    }
  }
}
</style>
