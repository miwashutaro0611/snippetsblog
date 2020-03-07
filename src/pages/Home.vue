<template>
  <div class="list">
    <card-item code="code3" />
    <card-item code="code2" />
    <card-item code="code1" />
    <p>{{snippets[0].code}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import cardItem from '../components/cardItem/'
export default {
  name: 'Home',
  components: {
    cardItem
  },
  data() {
    return {
      id: 1
    }
  },
  computed: {
    ...mapState({
      snippets: 'snippets'
    })
  }
}
</script>

<style lang="scss" scoped>
.list {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>