<template>
  <div class="confirm-blk">
    <div class="shadow" v-show="isShow"></div>
    <div class="confirm" v-show="isShow">
      <span class="close-icon" v-if="hasClose" @click="close"></span>
      <div class="icon-blk" v-if="icon">
        <img v-if="icon === 2" src="./icon/icon-confirm-2.png" alt="">
      </div>
      <h5 v-show="title">{{title}}</h5>
      <div class="text">
        <p v-for="item in text">{{item}}</p>
        <p class="explain" v-for="item in explain">{{item}}</p>
      </div>
      <a href="javascript:;" class="confirm-btn" @click="submit">{{btn}}</a><a href="javascript:;" class="confirm-btn_cancel" @click="cancel">{{btnCancel}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'confirm',
  data () {
    return {
      isShow: false,
      title: '提示',
      icon: '',
      text: [],
      explain: [],
      btn: '确定',
      btnCancel: '取消',
      hasClose: false
    }
  },
  methods: {
    open () {
      this.isShow = true
    },
    close () {
      this.isShow = false
    },
    submit () {
      let self = this
      self.$emit('submit')
      self.close()
    },
    cancel () {
      let self = this
      self.$emit('cancel')
      self.close()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.confirm {
  position: fixed;
  top:50%;
  left:50%;
  background: #fff;
  z-index: 100;
  text-align: center;
  width: 6rem;
  border-radius: .125rem;
  padding: .4rem 0;
  transform: translate(-50%, -50%);
  color:#2f2f2f;
}
.confirm .close-icon {
  position: absolute;
  top: .1rem;
  right: .1rem;
  background: url(./icon/icon-close.png) center no-repeat;
  width: .8rem;
  height: .8rem;
  background-size: .4rem;
}
.confirm .icon-blk img{
  width: 1.6rem;
  height: 1.6rem;
  margin: .15rem 0;
}
.confirm h5 {
  font-size: .4rem;
  padding-top: .25rem;
}
.confirm .text {
  font-size: .26rem;
  padding: .1rem 0 .5rem 0;

}
.confirm .text p {
  min-height: .4rem;
}
.confirm .text p.explain {
  color:#9B9B9B;
}
.confirm .confirm-btn {
  border-top: 1px solid #e5e5e5;
  display: inline-block;
  width: 2.2rem;
  color: #fff;
  background: #1D9AFF;
  border-radius: .1rem;
  font-size: .3rem;
  height: .7rem;
  line-height: .7rem;
}
.confirm .confirm-btn_cancel {
  margin-left: .4rem;
  border-top: 1px solid #e5e5e5;
  display: inline-block;
  width: 2.2rem;
  color: #fff;
  background: #1D9AFF;
  border-radius: .1rem;
  font-size: .3rem;
  height: .7rem;
  line-height: .7rem;
}
.shadow {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .5);
}
</style>
