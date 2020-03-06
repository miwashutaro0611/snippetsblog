<template>
  <div class="list">
    <card-item />
    <card-item />
    <card-item />
  </div>
</template>

<script>
import cardItem from '../components/cardItem/'
export default {
  name: 'Home',
  components: {
    cardItem
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