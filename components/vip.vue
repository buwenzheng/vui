<template>
  <span class="yc-vip"><img :src="'http://yppstatic.oss-cn-shanghai.aliyuncs.com/vender/img/vip/vip' + (vip ? '-' + vip : '') + '.png'" alt=""></span>
</template>

<script>
export default {
  name: 'gender',
  props: ['vip'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.yc-vip {
  vertical-align: top;
  display: inline-block;
  height: .26rem;
  line-height: .26rem;
  margin-right: .1rem;
}
.yc-vip img {
  display: block;
  height: .26rem;
  line-height: .26rem;
}
</style>
