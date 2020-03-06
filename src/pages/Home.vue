<template>
  <div class="list">
    <card-item code="code3" />
    <card-item code="code2" />
    <card-item code="code1" />
  </div>
</template>

<script>
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