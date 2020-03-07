<template>
  <div>
    <h1>{{$route.params.code.title}}</h1>
    <p>{{$route.params.id}}</p>
    <div class="codeWrap">
      <component :is="$route.params.code.link" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Code',
}
</script>

<style lang="scss" scoped>
.codeWrap {
  width: 100%;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 5px;
}
</style>