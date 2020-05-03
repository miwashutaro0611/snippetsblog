<template>
  <div>
    <div class="resultWrap">
      <div class="resultWrapInner" :style="passBarStyle" />
    </div>
    <div class="resultText" :style="textColorStyle">{{ scoreText }}</div>
    <input
      v-model="textValue"
      type="text"
      placeholder="ここにテキスト"
      maxlength="20"
      @keyup="scoreChangeText(textValue)"
    />
  </div>
</template>

<script>
export default {
  name: 'Code8',
  data() {
    return {
      textValue: '',
      scoreText: '',
      score: 0,
      contentStyleList: [
        {
          text: 'パスワードは6文字以上で入力してください',
          color: '#f00'
        },
        {
          text: 'パスワード強度：低',
          color: '#f38f00'
        },
        {
          text: 'パスワード強度：中',
          color: '#7dbb3d'
        },
        {
          text: 'パスワード強度：高',
          color: '#3573ff'
        },
        {
          text: 'パスワード強度：超高',
          color: '#3573ff'
        }
      ],
      textColorStyle: {
        color: '#333'
      },
      passBarStyle: {
        transform: 'scaleX(0)',
        background: '#f00'
      }
    }
  },
  methods: {
    scoreChangeText(password) {
      this.scoreReset()
      this.repeatScore(password)
      this.textTypeCheck(password)
      this.setStyle(password)
    },
    scoreReset() {
      this.score = 0
    },
    repeatScore(password) {
      const passLength = password.length
      this.score += passLength * 4
      this.score += (this.textRepeat(1, password) - passLength) * 1
      this.score += (this.textRepeat(2, password) - passLength) * 1
      this.score += (this.textRepeat(3, password) - passLength) * 1
      this.score += (this.textRepeat(4, password) - passLength) * 1
    },
    textRepeat(pLen, password) {
      const passLength = password.length
      let res = ''
      for (let i = 0; i < passLength; i++) {
        let repeated = true
        let j
        for (j = 0; j < pLen && j + i + pLen < passLength; j++) {
          repeated = repeated && password.charAt(j + i) === password.charAt(j + i + pLen)
        }
        if (j < pLen) repeated = false
        if (repeated) {
          i += pLen - 1
          repeated = false
        } else {
          res += password.charAt(i)
        }
      }
      return res.length
    },
    textTypeCheck(password) {
      if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        this.score += 5
      }
      if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) {
        this.score += 10
      }
      if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
        this.score += 15
      }
    },
    setStyle(password) {
      const passLength = password.length
      this.score = this.score > 100 ? 100 : this.score
      this.passBarStyle.transform = `scaleX(${this.score / 100})`
      if (passLength < 6) {
        this.scoreText = this.contentStyleList[0].text
        this.textColorStyle.color = this.contentStyleList[0].color
        this.passBarStyle.background = this.contentStyleList[0].color
      } else if (password.length >= 6 && this.score < 34) {
        this.scoreText = this.contentStyleList[1].text
        this.textColorStyle.color = this.contentStyleList[1].color
        this.passBarStyle.background = this.contentStyleList[1].color
      } else if (this.score < 68) {
        this.scoreText = this.contentStyleList[2].text
        this.textColorStyle.color = this.contentStyleList[2].color
        this.passBarStyle.background = this.contentStyleList[2].color
      } else if (this.score < 100) {
        this.scoreText = this.contentStyleList[3].text
        this.textColorStyle.color = this.contentStyleList[3].color
        this.passBarStyle.background = this.contentStyleList[3].color
      } else if (this.score === 100) {
        this.scoreText = this.contentStyleList[4].text
        this.textColorStyle.color = '#333'
        this.passBarStyle.background = this.contentStyleList[4].color
      }
    }
  }
}
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
