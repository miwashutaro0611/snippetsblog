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
<script>
import * as AutoKana from 'vanilla-autokana'

export default {
  name: 'Code15',
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
