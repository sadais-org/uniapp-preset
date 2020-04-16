<template>
  <view class="pi-pd-tb-32 border pi-justify-between">
    <view class="left pi-flex-column pi-justify-between">
      <view>
        <view class="pi-bg-light-gray title" />
        <view class="pi-bg-light-gray pi-mg-top-22 sub-title" />
      </view>
      <view class="pi-flex">
        <view class="pi-bg-light-gray date" />
        <view class="pi-mg-left-68 pi-bg-light-gray date-right" />
      </view>
    </view>
    <view class="pi-bg-light-gray right pi-justify-center pi-align-center">
      <loading />
    </view>
  </view>
</template>
<script>
import Loading from '@/components/loading-item'
export default {
  components: {
    Loading
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style>
.title {
  width: 419rpx;
  height: 28rpx;
}
.sub-title {
  width: 337rpx;
  height: 28rpx;
}
.date {
  width: 131rpx;
  height: 24rpx;
}
.date-right {
  width: 87rpx;
  height: 24rpx;
}
.left {
  width: 450rpx;
  height: 160rpx;
}
.right {
  width: 220rpx;
  height: 160rpx;
  border-radius: 8rpx;
}
svg {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 20px;
}
</style>
