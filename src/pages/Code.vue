<template>
  <div>
    <h1>Codeのタイトル</h1>
    <p>{{$route.params.id}}</p>
    <component :is="$route.params.currentHeader" />
  </div>
</template>

<script>
import cardItem from '../components/cardItem/'
export default {
  name: 'Code',
  props: ['currentHeader'],
  components: {
    cardItem
  }
}
</script>

<style lang="scss" scoped>

</style>