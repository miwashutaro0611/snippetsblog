<template>
  <div>
    <div class="resultWrap">
      <div class="resultWrapInner" :style="state.passBarStyle" />
    </div>
    <div class="resultText" :style="state.textColorStyle">
      {{ state.scoreText }}
    </div>
    <input
      v-model="state.textValue"
      type="text"
      placeholder="ここにテキスト"
      maxlength="20"
      @keyup="scoreChangeText(state.textValue)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Code8',
  setup() {
    const state = reactive({
      textValue: '',
      scoreText: '',
      score: 0,
      contentStyleList: [
        {
          text: 'パスワードは6文字以上で入力してください',
          color: '#f00',
        },
        {
          text: 'パスワード強度：低',
          color: '#f38f00',
        },
        {
          text: 'パスワード強度：中',
          color: '#7dbb3d',
        },
        {
          text: 'パスワード強度：高',
          color: '#3573ff',
        },
        {
          text: 'パスワード強度：超高',
          color: '#3573ff',
        },
      ],
      textColorStyle: {
        color: '#333',
      },
      passBarStyle: {
        transform: 'scaleX(0)',
        background: '#f00',
      },
    })
    const scoreChangeText = (password: string) => {
      scoreReset()
      repeatScore(password)
      textTypeCheck(password)
      setStyle(password)
    }
    const scoreReset = () => {
      state.score = 0
    }
    const repeatScore = (password: string) => {
      const passLength = password.length
      state.score += passLength * 4
      state.score += (textRepeat(1, password) - passLength) * 1
      state.score += (textRepeat(2, password) - passLength) * 1
      state.score += (textRepeat(3, password) - passLength) * 1
      state.score += (textRepeat(4, password) - passLength) * 1
    }
    const textTypeCheck = (password: string) => {
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        state.score += 5
      }
      if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
        state.score += 10
      }
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        state.score += 15
      }
    }
    const setStyle = (password: string) => {
      const passLength = password.length
      state.score = state.score > 100 ? 100 : state.score
      state.passBarStyle.transform = `scaleX(${state.score / 100})`
      if (passLength < 6) {
        state.scoreText = state.contentStyleList[0].text
        state.textColorStyle.color = state.contentStyleList[0].color
        state.passBarStyle.background = state.contentStyleList[0].color
      } else if (password.length >= 6 && state.score < 34) {
        state.scoreText = state.contentStyleList[1].text
        state.textColorStyle.color = state.contentStyleList[1].color
        state.passBarStyle.background = state.contentStyleList[1].color
      } else if (state.score < 68) {
        state.scoreText = state.contentStyleList[2].text
        state.textColorStyle.color = state.contentStyleList[2].color
        state.passBarStyle.background = state.contentStyleList[2].color
      } else if (state.score < 100) {
        state.scoreText = state.contentStyleList[3].text
        state.textColorStyle.color = state.contentStyleList[3].color
        state.passBarStyle.background = state.contentStyleList[3].color
      } else if (state.score === 100) {
        state.scoreText = state.contentStyleList[4].text
        state.textColorStyle.color = '#333'
        state.passBarStyle.background = state.contentStyleList[4].color
      }
    }
    const textRepeat = (pLen: number, password: string) => {
      const passLength = password.length
      let res = ''
      for (let i = 0; i < passLength; i++) {
        let repeated = true
        let j
        for (j = 0; j < pLen && j + i + pLen < passLength; j++) {
          repeated = repeated && password.charAt(j + i) === password.charAt(j + i + pLen)
        }
        if (j < pLen) {
          repeated = false
        }
        if (repeated) {
          i += pLen - 1
          repeated = false
        } else {
          res += password.charAt(i)
        }
      }
      return res.length
    }
    return { state, scoreChangeText }
  },
})
</script>

<style lang="scss" scoped>
$barWidth: 200px;
$barHeight: 8px;

.resultWrap {
  width: $barWidth;
  height: $barHeight;
  overflow: hidden;
  background: #e4e4e4;
  border-radius: $barHeight / 2;
}

.resultWrapInner {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: scaleX(0);
  transform-origin: left;
}

.resultText {
  height: 20px;
}
</style>
