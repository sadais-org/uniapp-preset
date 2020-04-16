<template>
  <view class="content">
    <custom-navi>测试非ts导航</custom-navi>
    <image class="logo" src="../../static/logo.png" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
    <view class=" pi-grid  pi-col-5">
      <view v-for="c in circle" :key="c" class="">
        {{ c }}
      </view>
    </view>
    <star-score :max="avatar" />
    <input-search />
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getConfig } from './api'
import InputSearch from '@/PiUI-basic/components/input-search.vue'
import { IndexModule } from '@/store/modules/index'

@Component({
  name: 'Index',
  components: {
    InputSearch
  }
})
export default class extends Vue {
  private title = 'Hello1'
  private circle = 10

  get userName() {
    return IndexModule.username
  }

  get avatar() {
    return 10
  }

  async onLoad() {
    const data = await getConfig()
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
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
