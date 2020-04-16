<template>
  <view class="dot-box">
    <view
      v-for="(item, index) in 3"
      :key="index"
      class="dot"
      :style="{ 'background-color': bgColor, 'width': `${size}rpx`, 'height': `${size}rpx` }"
    />
  </view>
</template>

<script>
export default {
  props: {
    bgColor: {
      // 是否禁用
      type: String,
      default: '#cccccc'
    },
    size: {
      type: String || Number,
      default: '15'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.line {
  width: 686rpx;
  height: 1rpx;
  background: #e6e6e6;
}
.dot-box {
  display: flex;
  .dot {
    margin-left: 10rpx;
    width: 15rpx;
    height: 15rpx;
    border-radius: 30rpx;
    background: #ffffff;
  }
  .dot:nth-child(1) {
    animation: bg-color 1s infinite 0.1s;
  }
  .dot:nth-child(2) {
    animation: bg-color 1s infinite 0.2s;
  }
  .dot:nth-child(3) {
    animation: bg-color 1s infinite 0.3s;
    opacity: 30;
  }
  @keyframes bg-color {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.3;
    }
  }
}
</style>
