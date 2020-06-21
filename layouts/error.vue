<template>
  <div class="errorContainer">
    <div class="errorContainer__left">
      <h1 class="errorContainer__left__title" v-if="error.statusCode === 404">お探しのページが見つかりません。</h1>
      <h1 class="errorContainer__left__title" v-else>エラーが発生しました</h1>
      <p class="errorContainer__left__message">{{ error.message }}</p>
      <p v-if="error.statusCode === 404" class="errorContainer__left__text">
        あなたがアクセスしたページは、削除されたか<br />
        URLが変更されているため表示することができません。<br />
        エラー報告などのご連絡については製作者のTwitterのDMへお願いいたします。
      </p>
      <nuxt-link to="/" class="errorContainer__left__link">
        トップページへ
      </nuxt-link>
      <div class="errorContainer__left__hiddenfunc">
        <h2 class="errorContainer__left__subtitle">隠し機能について</h2>
        <p class="errorContainer__left__subtext">
          chromeなどでコンソールを開くと以下のように表示されますので、ぜひご確認ください。
        </p>
        <img class="errorContainer__left__image" src="~/assets/img/error/console.png" alt="" />
        <!-- <pre>
          <code>
            Thanks for visiting訪問ありがとうございます。
            こちら@jackmiwamiwaのスニペットブログになります。
            PWAにも対応しておりますので、ぜひアプリでもご覧ください。
            Twitterやはてブなども行なっておりますので、ぜひそちらもご覧ください。
            
            Twitter: https://twitter.com/jackmiwamiwa/
            GitHub: https://github.com/miwashutaro0611/
            Qiita: https://qiita.com/miwashutaro0611/
            lapras: https://github.com/miwashutaro0611/
            hatena: https://jackswim3411.hatenablog.com/
            note: https://note.com/jackblog/
            Wantedly: https://www.wantedly.com/users/24578098/
          </code>
        </pre> -->
      </div>
    </div>
    <div class="errorContainer__right">
      <Timeline
        id="jackmiwamiwa"
        class="twitter"
        sourceType="profile"
        :options="{ theme: 'dark', height: twitterHeight }"
      />
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'
export default {
  name: 'Error',
  props: ['error'],
  components: {
    Timeline,
  },
  data() {
    return {
      twitterHeight: '400',
    }
  },
}
</script>

<style lang="scss" scoped>
.errorContainer {
  max-width: 1000px;
  margin: 0 auto;
  min-height: calc(100vh - 210px);
  @include md {
    display: flex;
    justify-content: space-between;
  }
}
.errorContainer__left__title {
  font-size: 30px;
}
.errorContainer__left__subtitle {
  margin-top: 50px;
  font-size: 25px;
}
.errorContainer__left__message {
  margin-top: 5px;
  font-size: 15px;
  font-style: italic;
}
.errorContainer__left__text {
  margin-top: 30px;
}
.errorContainer__left__subtext {
  margin-top: 20px;
}
.errorContainer__left__link {
  margin: 30px auto 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 50px;
  overflow: hidden;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.1em;
  border: 2px solid var(--color-default);
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  @include md {
    width: 240px;
    height: 60px;
    font-size: 16px;
    border-radius: 30px;
  }
  &::before {
    position: absolute;
    top: 0;
    left: -4.5em;
    display: block;
    width: 3em;
    height: 100%;
    content: '';
    background-color: var(--color-btn-mask);
    transition: none;
    transform: skewX(-45deg) translateX(0);
  }
  @media (hover: hover) {
    &:hover {
      color: var(--color-default-reverse);
      background-color: var(--color-default);
      &::before {
        transition: all 0.5s ease-in-out;
        transform: skewX(-45deg) translateX(400px);
      }
    }
  }
}
.errorContainer__left__image {
  max-width: calc(100% - 50px);
  display: block;
  margin-top: 20px;
}
.errorContainer__left__hiddenfunc {
  display: none;
  @include md {
    display: block;
  }
}
.twitter {
  width: 300px;
  margin: 30px auto 0;
  @include md {
    margin-top: 0;
  }
}
</style>
