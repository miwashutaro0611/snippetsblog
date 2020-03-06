<template>
  <div>
    <button
      type="button"
      class="button"
      @click="onClick(true)"
    >
      START
    </button>
    <button
      type="button"
      class="button"
      @click="onClick(false)"
    >
      DELETE
    </button>
    <h2 class="title">
      <span class="cmnTitle">
        <span class="cmnTitle__inner">
          <span
            class="word"
            :class="{'wordActive': isBool}"
          >
            TITLENAME
          </span>
          <span class="bar" :class="{'barActive': isBool}"></span>
        </span>
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'code2',
  data() {
    return {
      isBool: false
    }
  },
  methods: {
    onClick(bool) {
      this.isBool = bool
    }
  }
}
</script>

<style lang="scss" scoped>
$BAR_COLOR: #191919;
$EASE_BAR: cubic-bezier(.205,.01,.075,.995);
$EASE_TITLE: cubic-bezier(.205,.01,.075,.995);

.button {
  border: 1px solid #000;
  padding: 5px;
  & + & {
    margin-left: 10px;
  }
}

.title {
  font-size: 1.6rem;
  font-weight: 400;
  margin: 30px 0 0 0;
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}

.cmnTitle {
  display: block;
}

.cmnTitle__inner {
  display: inline-block;
  position: relative;
}

.word {
  display: inline-block;
  position: relative;
  clip-path: polygon(0 -20%,0 -20%,0 120%,0 120%);
}

.wordActive {
  transform: none;
  clip-path: polygon(0 -20%,100% -20%,100% 120%,0 120%);
  transition: -webkit-clip-path 1.2s $EASE_TITLE .6s,clip-path 1.2s $EASE_TITLE .6s,transform 1s $EASE_TITLE .4s;
  background-color: white;
}

.bar {
  background-color: $BAR_COLOR;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 1px;
  margin: auto 0;
  left: 0;
  right: 100%;
}

.barActive {
  left: 100%;
  right: 0;
  transition: left 1.2s $EASE_BAR .4s,right 1.2s $EASE_BAR;
}
</style>
