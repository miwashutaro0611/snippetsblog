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
      <nuxt-link to="/" class="errorContainer__left__link">トップページへ</nuxt-link>
      <div class="errorContainer__left__hiddenfunc">
        <h2 class="errorContainer__left__subtitle">隠し機能について</h2>
        <p class="errorContainer__left__subtext">
          chromeなどでコンソールを開くと以下のように表示されますので、ぜひご確認ください。
        </p>
        <div class="console">
          <p class="console__codeline" aria-hidden="true">app.js:1</p>
          <p class="console__title">Thanks for visiting</p>
          <p class="console__message">
            訪問ありがとうございます。こちら@jackmiwamiwaのスニペットブログになります。PWAにも対応しておりますので、ぜひアプリでもご覧ください。<br />Twitterやはてブなども行なっておりますので、ぜひそちらもご覧ください。
          </p>
          <ul class="console__list">
            <li class="console__item">
              Twitter:
              <a href="https://twitter.com/jackmiwamiwa/" title="Twitterページリンク" target="_blank"
                >https://twitter.com/jackmiwamiwa/</a
              >
            </li>
            <li class="console__item">
              GitHub:
              <a href="https://github.com/miwashutaro0611/" title="GitHubページリンク" target="_blank"
                >https://github.com/miwashutaro0611/</a
              >
            </li>
            <li class="console__item">
              Qiita:
              <a href="https://qiita.com/miwashutaro0611/" title="Qiitaページリンク" target="_blank"
                >https://qiita.com/miwashutaro0611/</a
              >
            </li>
            <li class="console__item">
              lapras:
              <a href="https://lapras.com/public/T7IYUQT" title="laprasページリンク" target="_blank"
                >https://lapras.com/public/T7IYUQT</a
              >
            </li>
            <li class="console__item">
              hatena:
              <a href="https://jackswim3411.hatenablog.com/" title="hatenaページリンク" target="_blank"
                >https://jackswim3411.hatenablog.com/</a
              >
            </li>
            <li class="console__item">
              note:
              <a href="https://note.com/jackblog/" title="noteページリンク" target="_blank"
                >https://note.com/jackblog/</a
              >
            </li>
            <li class="console__item">
              Wantedly: <a href="" target="_blank">https://www.wantedly.com/users/24578098/</a>
            </li>
          </ul>
        </div>
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 50px;
  margin: 30px auto 0;
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
  display: block;
  max-width: calc(100% - 50px);
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
.console {
  position: relative;
  width: calc(100% - 50px);
  padding: 15px 20px 20px;
  margin-top: 30px;
  color: var(--color-console-message);
  background: var(--color-console-background);
  border: 1px solid var(--color-console-border);
}
.console__codeline {
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 12px;
  text-decoration: underline;
}
.console__title {
  font-size: 25px;
  color: #0f4c81;
}
.console__message {
  margin-top: 10px;
  font-size: 14px;
}
.console__list {
  margin-top: 20px;
  font-size: 14px;
}
.console__item {
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
