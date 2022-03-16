<template>
  <div class="container">
    <div v-for="i in 400" :key="i.id" class="trigger" />
    <div class="monitor">
      <div class="camera -x">
        <div class="camera -y">
          <div class="face">
            <div class="eyebrowsWrapper">
              <div class="eyebrows eyebrows--left" />
              <div class="eyebrows eyebrows--right" />
            </div>
            <div class="eyeWrapper">
              <div class="eye-x">
                <div class="eye-y">
                  <div class="eye eye--left" />
                </div>
              </div>
              <div class="eye-x">
                <div class="eye-y">
                  <div class="eye eye--right" />
                </div>
              </div>
            </div>
            <div class="noseWrapper">
              <div class="nose nose--left" />
              <div class="nose nose--center" />
              <div class="nose nose--right" />
            </div>
            <div class="mouse" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Code22',
})
</script>

<style lang="scss" scoped>
$borderColor: #833821;
$eyeColor: #833821;
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
            &.-x .eye-x {
              transform: translateY(($i + 0.05) - (10 + 0.02) * 1px);
            }
            &.-y .eye-y {
              transform: translateX(($j - 0.05) - (10 + 0.02) * 1px);
            }
          }
        }
      }
    }
  }
}

.face {
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  width: 300px;
  height: 300px;
  background: #fe935d;
  border: 3px solid $borderColor;
  border-radius: 50%;
}

.eyebrowsWrapper {
  position: relative;
  width: 190px;
  height: 50px;
  margin: 50px auto 0;
}

.eyebrows {
  position: absolute;
  width: 70px;
  height: 50px;
  border-top: 3px solid $borderColor;
  border-right: 3px solid $borderColor;
  border-left: 3px solid $borderColor;
  // background: #000;
  border-radius: 50px 50px 0 0;
  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
}

.eyeWrapper {
  position: relative;
  width: 160px;
  height: 54px;
  margin: -25px auto 0;
}

.eye {
  position: absolute;
  width: 40px;
  height: 50px;
  background: $eyeColor;
  border-radius: 50%;
  &--left {
    left: 0;
  }
  &--right {
    right: 0;
  }
}

.noseWrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.nose {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  &::before {
    display: block;
    width: 60%;
    height: 100%;
    content: '';
  }
  &::after {
    position: absolute;
    top: calc(50% - 6px);
    left: calc(50% - 6px);
    display: block;
    width: 12px;
    height: 12px;
    content: '';
    background: #fff;
  }
  &--left {
    margin-top: 5px;
    margin-right: -5px;
    background: #fe523c;
    &::before {
      margin-left: auto;
      border-top: 3px solid $borderColor;
      border-right: 3px solid $borderColor;
      border-bottom: 3px solid $borderColor;
      border-radius: 0 70px 70px 0;
    }
  }
  &--center {
    z-index: 1;
    background: #fc2812;
    border: 3px solid $borderColor;
    &::before {
      content: none;
    }
  }
  &--right {
    margin-top: 5px;
    margin-left: -5px;
    background: #fe523c;
    &::before {
      border-top: 3px solid $borderColor;
      border-bottom: 3px solid $borderColor;
      border-left: 3px solid $borderColor;
      border-radius: 70px 0 0 70px;
    }
  }
}

.mouse {
  position: relative;
  width: 125px;
  height: 40px;
  margin: -5px auto 0;
  overflow: hidden;
  pointer-events: auto;
  &::before {
    position: absolute;
    top: -30px;
    left: 0;
    display: block;
    width: 100%;
    height: 70px;
    content: '';
    border-right: 3px solid $borderColor;
    border-bottom: 3px solid $borderColor;
    border-left: 3px solid $borderColor;
    border-radius: 0 0 70px 70px;
  }
  &:hover {
    height: 43px;
    border-top: 3px solid $borderColor;
    &::before {
      background: #c03d4b;
    }
  }
}
</style>
