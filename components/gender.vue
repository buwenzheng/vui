<template>
  <span class="yc-gender" :class="{'gender1' : gender}">{{age || 0}}</span>
</template>

<script>
export default {
  name: 'gender',
  props: ['gender', 'age'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.yc-gender {
  vertical-align: top;
  display: inline-block;
  width: .3rem;
  height: .26rem;
  line-height: .26rem;
  font-size: .18rem;
  color:#fff;
  padding-left: .24rem;
  background: url(http://yppstatic.oss-cn-shanghai.aliyuncs.com/vender/img/sex/sex-0.png) no-repeat;
  background-size: .52rem .26rem;
  margin-right: .1rem;
}
.yc-gender.gender1 {
  background-image: url(http://yppstatic.oss-cn-shanghai.aliyuncs.com/vender/img/sex/sex-1.png);
}
</style>
