<template>
  <div>
    <button type="button" class="button" @click="changeFlg(true)">START</button>
    <button type="button" class="button" @click="changeFlg(false)">DELETE</button>
    <h2 class="title">
      <span class="cmnTitle">
        <span class="cmnTitle__inner">
          <span class="word" :class="{ wordActive: state.isBool }"> TITLENAME </span>
          <span class="bar" :class="{ barActive: state.isBool }" />
        </span>
      </span>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

type State = {
  isBool: boolean
}

export default defineComponent({
  name: 'Code2',
  setup() {
    const state = reactive<State>({
      isBool: false,
    })
    const changeFlg = (bool: boolean) => {
      state.isBool = bool
    }
    return { state, changeFlg }
  },
})
</script>

<style lang="scss" scoped>
$BAR_COLOR: #191919;
$EASE_BAR: cubic-bezier(0.205, 0.01, 0.075, 0.995);
$EASE_TITLE: cubic-bezier(0.205, 0.01, 0.075, 0.995);

.button {
  padding: 5px;
  border: 1px solid #000;
  & + & {
    margin-left: 10px;
  }
}

.title {
  margin: 30px 0 0 0;
  overflow: hidden;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1;
  color: #000;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cmnTitle {
  display: block;
}

.cmnTitle__inner {
  position: relative;
  display: inline-block;
}

.word {
  position: relative;
  display: inline-block;
  clip-path: polygon(0 -20%, 0 -20%, 0 120%, 0 120%);
}

.wordActive {
  clip-path: polygon(0 -20%, 100% -20%, 100% 120%, 0 120%);
  background-color: white;
  transition: -webkit-clip-path 1.2s $EASE_TITLE 0.6s, clip-path 1.2s $EASE_TITLE 0.6s, transform 1s $EASE_TITLE 0.4s;
  transform: none;
}

.bar {
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  display: block;
  height: 1px;
  margin: auto 0;
  background-color: $BAR_COLOR;
}

.barActive {
  right: 0;
  left: 100%;
  transition: left 1.2s $EASE_BAR 0.4s, right 1.2s $EASE_BAR;
}
</style>
