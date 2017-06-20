<template>
  <div class="yc-avatar" :style="{width: curSize + 'rem', height: curSize + 'rem'}" @click="toApp">
    <img :src="avatar + '?imageView2/1/w/' + parseInt(curSize * 100) + '/h/' + parseInt(curSize * 100)" :style="{width: curSize + 'rem', height:  curSize + 'rem'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: ['avatar', 'size', 'token', 'nickname'],
  data () {
    return {
      defaultSize: '1.1'
    }
  },
  computed: {
    curSize () {
      return this.size || this.defaultSize
    }
  },
  methods: {
    toApp () {
    }
  }
}
</script>

<style scoped>
.yc-avatar {
  position: relative;
  overflow: hidden;
  border-radius: .1rem;
  line-height: 1;
}
</style>
