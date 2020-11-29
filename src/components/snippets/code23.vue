<template>
  <div class="container">
    <div v-for="i in 400" :key="i.id" class="trigger"></div>
    <div class="monitor">
      <div class="camera -x">
        <div class="camera -y">
          <div class="ticket-visual_visual">
            <div class="left"></div>
            <div class="right"></div>
            <div class="ticket-visual-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Code23',
}
</script>

<style lang="scss" scoped>
$size: 1;
$background: #fff;
$color1: #d25778;
$color2: #ec585c;
$color3: #e7d155;
$color4: #56a8c6;

.container {
  position: relative;
  display: grid;
  grid-template-rows: repeat(20, 5vh);
  grid-template-columns: repeat(20, 5vw);
}

.monitor {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.trigger {
  @for $i from 1 through 20 {
    @for $j from 1 through 20 {
      $key: ($i - 1) * 20 + $j;

      &:nth-child(#{$key}) {
        &:hover ~ .monitor {
          .camera {
            &.-x {
              transform: rotateY((-($j - 1) * (10 / 20) + 5) * 3deg);
            }
            &.-y {
              transform: rotateX((($i - 1) * (5 / 20) - 2.5) * 3deg);
            }
          }
        }
      }
    }
  }
}

.camera {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 500ms;
}

.monitor {
  perspective: 1000px;
  transition: 1000ms;
}

.ticket-visual_visual {
  position: relative;
  width: 650px;
  height: 320px;
  padding: 5px;
  margin: 100px auto;
  background: linear-gradient(to right, $color1, $color2, $color3, $color4);
  border-radius: 20px;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  &::before,
  &::after {
    position: absolute;
    top: 130px;
    z-index: 2;
    display: block;
    width: 60px;
    height: 60px;
    content: '';
    border-radius: 50%;
  }
  &::before {
    left: -30px;
    background: $color1;
  }
  &::after {
    right: -30px;
    background: $color4;
  }
}

.left {
  position: absolute;
  top: 110px;
  left: -50px;
  z-index: 4;
  width: 50px;
  height: 100px;
  background: $background;
}

.right {
  position: absolute;
  top: 110px;
  right: -50px;
  z-index: 4;
  width: 50px;
  height: 100px;
  background: $background;
}

.ticket-visual-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: $background;
  border-radius: 15px;
  &::before,
  &::after {
    position: absolute;
    top: 130px;
    z-index: 3;
    display: block;
    width: 50px;
    height: 50px;
    content: '';
    border-radius: 50%;
  }
  &::before {
    left: -30px;
    background: $background;
  }
  &::after {
    right: -30px;
    background: $background;
  }
}
</style>
