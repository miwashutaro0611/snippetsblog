<template>
  <div>
    <div class="btn-wrap">
      <a href="#" class="button button1">
        <em><span>button</span></em>
      </a>
    </div>
    <div class="btn-wrap">
      <a href="#" class="button button2">
        <em><span>button</span></em>
      </a>
    </div>
    <div class="btn-wrap">
      <a href="#" class="button button3">
        <em><span>button</span></em>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Code7'
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

.button {
  margin: 0 200px;
  // 基本的にいらない系
  font-size: 11px;
  letter-spacing: 2.5px;
}

//variable, mixin
$arrow-image: '//cdn.shopify.com/s/files/1/1703/6729/t/1/assets/btn-home-arrow.svg?77';
$height: 50px;

// code

.button {
  position: relative;
  height: $height;
  padding: 0 20px;
  line-height: $height;
  background-image: linear-gradient(to right, #000 50%, transparent 50%);
  background-size: 200% 100%;
  transition: background-position 0.2s;
  &::before {
    position: absolute;
    top: 0;
    display: block;
    width: 80px;
    height: $height;
    content: '';
    background: #000;
  }
  &::after {
    position: absolute;
    top: 50%;
    display: block;
    width: 55px;
    height: 8px;
    content: '';
    background-color: #fff;
    transition: all 0.3s ease;
    transform: translateY(-50%);
    -webkit-mask-image: url($arrow-image);
  }
  em {
    &::after {
      position: absolute;
      top: 50%;
      display: block;
      width: 60px;
      height: 1px;
      font-size: 1px;
      line-height: 1px;
      content: '';
      background: #000;
      transition: all 0.3s ease;
    }
    span {
      color: #fff;
    }
  }
  &:hover {
    opacity: 1;
    em {
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
  em {
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
    em {
      &::after {
        right: initial;
        left: -60px;
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
  em {
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
    em {
      &::after {
        right: -60px;
        left: initial;
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
  em {
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
    em {
      &::after {
        right: -60px;
        content: '';
        background: #fff;
      }
    }
  }
}
</style>
