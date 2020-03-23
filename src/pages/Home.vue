<template>
  <div>
    <div class="list">
      <card-item v-for="snippet in rSnippets" :code="snippet" :key="snippet.id" />
    </div>
    <paginate
      :page-count="getPageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'＜'"
      :next-text="'＞'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Paginate from 'vuejs-paginate'
import cardItem from '../components/cardItem/'
export default {
  name: 'Home',
  data() {
    return {
      parPage: 5,
      currentPage: 1
    }
  },
  components: {
    cardItem,
    Paginate
  },
  computed: {
    ...mapState({
      snippets: 'snippets'
    }),
    rSnippets() {
      let current = this.currentPage * this.parPage
      let start = current - this.parPage
      return this.snippets.slice(start, current)
      // return this.snippets.slice().reverse()
    },
    getPageCount() {
      return Math.ceil(this.snippets.length / this.parPage)
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}
</style>
