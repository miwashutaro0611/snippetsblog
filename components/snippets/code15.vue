<template>
  <div>
    <label for="name">名前</label>
    <input name="name" id="name" />
    <br />
    <label for="furigana">ふりがな</label>
    <input name="furigana" id="furigana" />
    <br />
    <label for="name2">名前2</label>
    <input name="name" id="name2" />
    <br />
    <label for="furigana2">ふりがな2</label>
    <input name="furigana" id="furigana2" />
  </div>
</template>
<script>
import * as AutoKana from 'vanilla-autokana'

export default {
  data() {
    return {
      name: '',
      furigana: '',
    }
  },
  mounted() {
    AutoKana.bind('#name', '#furigana')
    AutoKana.bind('#name2', '#furigana2')
  },
}
</script>
