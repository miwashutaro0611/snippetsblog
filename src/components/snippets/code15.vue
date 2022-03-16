<template>
  <div>
    <label for="name">名前</label>
    <input id="name" name="name" />
    <br />
    <label for="furigana">ふりがな</label>
    <input id="furigana" name="furigana" />
    <br />
    <label for="name2">名前2</label>
    <input id="name2" name="name" />
    <br />
    <label for="furigana2">ふりがな2</label>
    <input id="furigana2" name="furigana" />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'
import * as AutoKana from 'vanilla-autokana'

export default defineComponent({
  name: 'Code15',
  setup() {
    onMounted(() => {
      AutoKana.bind('#name', '#furigana')
      AutoKana.bind('#name2', '#furigana2')
    })
  },
})
</script>
