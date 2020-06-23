<template>
  <div class="modal-base" @keydown.esc="modalClose">
    <p>テキスト</p>
    <button type="button" @click="modalOpen">モーダルを開く</button>
    <transition name="fade">
      <div v-if="!isHide" class="p-modal">
        <div class="p-modal_over_lay" @click="modalClose" />
        <div class="p-modal_content">
          <p>ああああ</p>
          <button type="button">モーダル内のボタン(処理なし)</button>
          <button class="p-modal_close" type="button" @click="modalClose" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Code10',
  data() {
    return {
      isHide: true,
    }
  },
  methods: {
    modalOpen() {
      this.isHide = false
    },
    modalClose() {
      this.isHide = true
    },
  },
}
</script>

<style lang="scss" scoped>
$ease: ease;

.modal-base {
  position: relative;
  min-width: 100%;
  min-height: 300px;
}

.p-modal {
  display: block;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.p-modal_over_lay {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: #0008;
}

.p-modal_content {
  $width: 300px;
  $height: 200px;
  position: absolute;
  top: calc(50% - #{$height} / 2);
  left: calc(50% - #{$width} / 2);
  width: $width;
  height: $height;
  background: #fff;
}

.p-modal_close {
  position: absolute;
  top: -10px;
  right: -10px;
  display: block;
  width: 30px;
  height: 30px;
  background-color: #1c1c1c;
  border-radius: 50%;
}
</style>
