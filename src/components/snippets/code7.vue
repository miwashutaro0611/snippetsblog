<template>
  <div>
    <div class="btn-wrap">
      <a href="#" class=" button button1">
        <el><span>button</span></el>
      </a>
    </div>
    <div class="btn-wrap">
      <a href="#" class=" button button2">
        <el><span>button</span></el>
      </a>
    </div>
    <div class="btn-wrap">
      <a href="#" class=" button button3">
        <el><span>button</span></el>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'code7',
}
</script>

<style lang="scss" scoped>
// base
a {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.btn-wrap {
  margin-bottom: 20px;
}

.button { // 基本的にいらない系
  font-size: 11px;
  letter-spacing: 2.5px;
  margin: 0 200px;
}

//variable, mixin
$arrow-image: "//cdn.shopify.com/s/files/1/1703/6729/t/1/assets/btn-home-arrow.svg?77";
$height: 50px;

// code

.button {
  position: relative;
  height: $height;
  line-height: $height;
  padding: 0 20px;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, #000 50%, transparent 50%);
  transition: background-position .2s;
  &::before {
    content: "";
    display: block;
    background: #000;
    position: absolute;
    top: 0;
    width: 80px;
    height: $height;
  }
  &::after {
    content: "";
    display: block;
    background-color: #fff;
    -webkit-mask-image: url($arrow-image);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 55px;
    height: 8px;
    transition: all 0.3s ease;
  }
  el {
    &::after {
      content: "";
      display: block;
      background: #000;
      position: absolute;
      width: 60px;
      height: 1px;
      top: 50%;
      transition: all 0.3s ease;
      font-size: 1px;
      line-height: 1px;
    }
    span {
      color: #fff;
    }
  }
  &:hover {
    opacity: 1;
    el {
      span {
        color: #000;
      }
    }
  }
}

.button1 {
  &::before {
    left: -80px;
  }
  &::after {
    left: -55px;
  }
  el {
    &::after {
      right: -80px;
    }
  }
  &:hover {
    background-position: 99.9% 0;
    &::before {
      background: #000;
    }
    &::after {
      left: 100%;
      margin-left: 0px;
      background: #000;
    }
    el {
      &::after {
        left: -60px;
        right: initial;
        background: #fff;
      }
    }
  }
}

.button2 {
  &::before {
    right: -79px;
  }
  &::after {
    right: -55px;
  }
  el {
    &::after {
      left: -80px;
    }
  }
  &:hover {
    background-position: -99.9% 0;
    &::before {
      background: #000;
    }
    &::after {
      right: 100%;
      margin-left: 0px;
      background-color: #000;
    }
    el {
      &::after {
        left: initial;
        right: -60px;
        background: #fff;
      }
    }
  }
}

.button3 {
  &::before {
    right: -79px;
  }
  &::after {
    right: -55px;
  }
  el {
    &::after {
      content: none;
    }
  }
  &:hover {
    background-position: -99.9% 0;
    &::before {
      background: #000;
    }
    &::after {
      right: 100%;
      margin-left: 0px;
      background-color: #000;
    }
    el {
      &::after {
        content: "";
        right: -60px;
        background: #fff;
      }
    }
  }
}
</style>
