<template>
  <div>
    <button type="button" @click="changeFlg(true)">START</button>
    <button type="button" @click="changeFlg(false)">DELETE</button>
    <div class="maskWrapper" :class="{ isActive: state.isBool }">
      <div class="mask mask1" />
      <div class="mask mask2" />
      <div class="mask mask3" />
      <div class="mask mask4" />
      <div class="mask mask5" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

type State = {
  isBool: boolean
}

export default defineComponent({
  name: 'Code16',
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
$time: 0.4s;
$ease: ease;
.maskWrapper {
  position: relative;
  width: 300px;
  height: 200px;
  margin-top: 10px;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0, 0);
  transform-origin: top left;
}
.isActive {
  .mask1 {
    animation: scaleAnime $time $ease both;
  }
  .mask2 {
    animation: scaleAnime $time 0.06s $ease both;
  }
  .mask3 {
    animation: scaleAnime $time 0.1s $ease both;
  }
  .mask4 {
    animation: scaleAnime $time 0.14s $ease both;
  }
  .mask5 {
    animation: scaleAnime $time 0.2s both;
  }
}
.mask1 {
  background: #333;
}

.mask2 {
  background: #666;
}

.mask3 {
  background: #999;
}

.mask4 {
  background: #aaa;
}

.mask5 {
  background: #eee;
}
@keyframes scaleAnime {
  0% {
    transform: scale(0, 0);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
