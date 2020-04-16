<template>
  <view class="content">
    <image class="logo" src="../../static/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {},
  methods: {}
})
</script>

<style>
.content {
  height: 400upx;
  text-align: center;
}
.logo {
  width: 200upx;
  height: 200upx;
  margin-top: 200upx;
}
.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
