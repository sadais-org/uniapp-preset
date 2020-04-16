<template>
  <view
    class="btn-wrap pi-fw-500 pi-text-center pi-pd-lr-44"
    :style="{
      'background': disabled ? disabledBgColor : 'linear-gradient(270deg, #01E6A3 0%, #09B1D2 100%)',
      'width': width === 0 ? 'auto' : `${width}rpx`,
      'height': height === 0 ? 'auto' : `${height}rpx`,
      'color': fontColor,
      'font-size': `${fontSize}rpx`,
      'line-height': `${height}rpx`,
      'box-shadow': disabled ? 'none' : '0 2rpx 8rpx 0 #f2f2f2'
    }"
    @tap="$emit('click')"
  >
    {{ btnText }}
  </view>
</template>

<script>
export default {
  props: {
    disabled: {
      // 是否禁用
      type: Boolean,
      default: true
    },

    disabledBgColor: {
      // 禁用按钮顏色
      type: String,
      default: 'linear-gradient(270deg, #AAEFDB 0%, #B5E4ED 100%)'
    },

    btnText: {
      // 按钮文案
      type: String,
      default: ''
    },

    width: {
      // 按钮宽度
      type: [String, Number],
      default: 0
    },

    height: {
      // 按钮高度
      type: [String, Number],
      default: 88
    },

    fontSize: {
      // 字体大小
      type: [String, Number],
      default: 32
    },

    fontColor: {
      // 字体颜色
      type: String,
      default: '#ffffff'
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.btn-wrap {
  display: inline-block;
  color: #ffffff;
  border-radius: 98rpx;
  box-shadow: 0 2rpx 8rpx 0 #f2f2f2;
}
</style>
