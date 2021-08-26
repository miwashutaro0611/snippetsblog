<template>
  <div class="codePage">
    <h1 class="codeTitle">
      {{ snippets[$route.params.id - 1].title }}
    </h1>
    <div class="codeWrap">
      <component :is="snippets[$route.params.id - 1].link" />
    </div>
    <section v-if="snippets[$route.params.id - 1].referencLink.name" class="referencLink">
      <h2 class="referencLinkTitle">Reference link</h2>
      <a class="referencLinkContent" :href="snippets[$route.params.id - 1].referencLink.url" target="_blank">
        <div class="referencLinkText">
          <p>{{ snippets[$route.params.id - 1].referencLink.name }}</p>
          <span>{{ snippets[$route.params.id - 1].referencLink.url }}</span>
        </div>
        <div class="referencLinkImage">
          <img :src="referencImage()" :alt="snippets[$route.params.id - 1].referencLink.name" />
        </div>
      </a>
    </section>
    <div class="codePen">
      <iframe
        height="265"
        style="width: 100%"
        scrolling="no"
        :title="snippets[$route.params.id - 1].codepenId"
        :src="`https://codepen.io/miwashutaro0611/embed/${
          snippets[$route.params.id - 1].codepenId
        }?height=265&theme-id=default&default-tab=css,result`"
        frameborder="no"
        allowtransparency="true"
        allowfullscreen="true"
        >See the Pen
        <a :href="`https://codepen.io/miwashutaro0611/pen/${snippets[$route.params.id - 1].codepenId}`">{{
          snippets[$route.params.id - 1].codepenId
        }}</a>
        by miwa_shuntaro(<a href="https://codepen.io/miwashutaro0611">@miwashutaro0611</a>) on
        <a href="https://codepen.io">CodePen</a>.</iframe
      >
    </div>
    <div class="toTopLink">
      <nuxt-link :to="toNext($route.params.id)" class="toTopLinkNext">
        <span class="toTopLinkArrow toTopLinkNextArrow">Next</span>
        <span class="toTopLinkTitle">{{ snippets[(snippets.length + $route.params.id) % snippets.length].title }}</span>
      </nuxt-link>
      <nuxt-link to="/" class="toTopLinkBtn"> GO TO LIST </nuxt-link>
      <nuxt-link :to="toPrev($route.params.id)" class="toTopLinkPrev">
        <span class="toTopLinkArrow toTopLinkPrevArrow">Prev</span>
        <span class="toTopLinkTitle">{{
          snippets[(snippets.length + $route.params.id - 2) % snippets.length].title
        }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Code',
  validate({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  },
  computed: {
    ...mapState({
      snippets: 'snippets',
    }),
  },
  methods: {
    referencImage() {
      return require(`~/assets/img/code/${this.snippets[this.$route.params.id - 1].id}/${
        this.snippets[this.$route.params.id - 1].referencLink.image
      }`)
    },
    toPrev(id) {
      const linkId = (this.snippets.length + id - 1) % this.snippets.length
      id = linkId === 0 ? this.snippets.length : linkId
      return `/code/${id}`
    },
    toNext(id) {
      id = (this.snippets.length + parseInt(id, 10) + 1) % this.snippets.length
      return `/code/${id}`
    },
  },
  head() {
    return {
      title: this.snippets[this.$route.params.id - 1].title,
    }
  },
}
</script>

<style lang="scss" scoped>
.codePage {
  max-width: 1000px;
  margin: 0 auto;
}
.codeTitle {
  font-family: $fontFamilyCourgette;
}
.codeWrap {
  width: 100%;
  min-height: 300px;
  padding: 20px;
  margin-top: 15px;
  overflow-x: auto;
  color: #333;
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
.toTopLink {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
.toTopLinkPrev {
  display: block;
  width: 100px;
  padding: 10px 0;
  text-align: right;
  transition: all 0.3s ease-in-out;
  @include md {
    width: 200px;
    padding: 10px 15px;
    border: 2px solid var(--color-default);
    border-radius: 5px;
  }
  @media (hover: hover) {
    &:hover {
      color: var(--color-default-reverse);
      background-color: var(--color-default);
      .toTopLinkArrow {
        &::after {
          border-color: var(--color-default-reverse);
        }
      }
    }
  }
}
.toTopLinkNext {
  display: block;
  width: 100px;
  padding: 10px 0;
  @include md {
    width: 200px;
    padding: 10px 15px;
    border: 2px solid var(--color-default);
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }
  @media (hover: hover) {
    &:hover {
      color: var(--color-default-reverse);
      background-color: var(--color-default);
      .toTopLinkArrow {
        &::after {
          border-color: var(--color-default-reverse);
        }
      }
    }
  }
}
.toTopLinkPrevArrow {
  padding-right: 16px;
  &::after {
    right: 5px;
    transform: rotate(45deg);
  }
}
.toTopLinkNextArrow {
  padding-left: 16px;
  &::after {
    left: 5px;
    transform: rotate(-135deg);
  }
}
.toTopLinkArrow {
  position: relative;
  display: block;
  font-size: 14px;
  font-weight: bold;
  &::after {
    position: absolute;
    top: 8px;
    display: block;
    width: 6px;
    height: 6px;
    content: '';
    border-top: 2px solid var(--color-default);
    border-right: 2px solid var(--color-default);
    transition: all 0.3s ease-in-out;
  }
}
.toTopLinkTitle {
  display: none;
  @include md {
    display: block;
    overflow: hidden;
    font-family: $fontFamilyCourgette;
    font-size: 18px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.toTopLinkBtn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 50px;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.1em;
  border: 2px solid var(--color-default);
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  @include md {
    width: 240px;
    height: 60px;
    font-size: 16px;
    border-radius: 30px;
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
