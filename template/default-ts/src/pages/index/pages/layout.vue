<template>
  <view class=" pi-container pi-content">
    <view class="">
      <view class=" pi-bg-blue-sky pi-width-100P pi-radius-16 card">
        <view class=" pi-width-88 pi-height-68 pi-bg-light-yellow pi-radius-8" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Layout'
})
export default class extends Vue {
  private title = 'Hello1'
  private circle = 10
}
</script>

<style lang="scss" scoped>
.card {
  height: 200rpx;
}
</style>
