<template>
  <view class=" pi-container pi-content">
    <view class="pi-grid  pi-col-2 pi-col-space-32">
      <view
        v-for="(item, index) in elements"
        :key="index"
        class="pi-pd-32 pi-white pi-radius-8"
        :style="[{ background: item.color }]"
        @tap.stop="handleViewDetail(item)"
      >
        <view class="pi-fz-32  pi-fw-500">{{ item.title }}</view>
        <view class="pi-text-Abc pi-pd-top-12">{{ item.name }}</view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { IElement } from './interfaces'

@Component({
  name: 'Index',
  components: {}
})
export default class extends Vue {
  private elements: IElement[] = [
    {
      title: '布局',
      name: 'layout',
      color: '#1cbbb4'
    },
    {
      title: '背景',
      name: 'background',
      color: '#0081ff'
    },
    {
      title: '文本',
      name: 'text',
      color: '#6739b6'
    },
    {
      title: '图标 ',
      name: 'icon',
      color: '#9c26b0'
    },
    {
      title: '按钮',
      name: 'button',
      color: '#e03997'
    },
    {
      title: '标签',
      name: 'tag',
      color: '#a5673f'
    },
    {
      title: '头像',
      name: 'avatar',
      color: '#e54d42'
    },
    {
      title: '进度条',
      name: 'progress',
      color: '#f37b1d'
    },
    {
      title: '边框阴影',
      name: 'shadow',
      color: '#8dc63f'
    },
    {
      title: '加载',
      name: 'loading',
      color: '#39b54a'
    }
  ]

  private handleViewDetail(item: IElement) {
    this.$utils.common.navigateTo(`pages/index/pages/${item.name}`)
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
