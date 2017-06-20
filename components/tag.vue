<template>
  <span class="yc-tag"><slot></slot></span>
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
.yc-tag {
  vertical-align: top;
  display: inline-block;
  padding: 0 .1rem;
  border-radius: .04rem;
  height: .34rem;
  line-height: .34rem;
  font-size: .2rem;
  margin-right: .1rem;
  background: #77CEE5;
  color: #fff;
}
</style>
