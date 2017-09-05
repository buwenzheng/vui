<template>
  <span class="yc-captcha" :disable="status.disable" @click="send()">{{codeText}}</span>
</template>

<script>
/**
 * yc-captcha 验证码组件
 * @param {string} [phone] - 手机号
 * @param {number} [state=0] - 默认：0，已发送：1 
 * @param {string} [storage=YCCAPTCHA] - 存储到localstrage的名字
 * @emit {event} [error] - 手机号有误
 * @emit {event} [send] - 开始发送验证码
 *
 * @example 
 * <yc-captcha phone="15823232323" :state="0" storage="AOSDFJOASDN" @error="handlerError"  @send="handlerSend"></yc-captcha>
 */
export default {
  name: 'yc-captcha',
  props: {
    phone: String,
    state: {
      type: Number,
      default: 0
    },
    storage: {
      type: String,
      default: 'YCCAPTCHA'
    }
  },
  data () {
    return {
      status: {
        disable: false
      },
      codeText: '获取验证码'
    }
  },
  computed: {
    isPhone() {
      return /^1[3|4|5|7|8][0-9]{9}$/.test(this.phone);
    }
  },
  watch: {
    state(to, from) {
      if (to === 1) this.initClock();
    }
  },
  mounted() {
    this.checkClock();
  },
  methods: {
    send() { // 发送
      if (this.status.disable) return;
      // 验证
      if (!this.isPhone) {
        this.$emit('error');
        return;
      }
      // 开始
      this.$emit('send');
    },
    checkClock() {
      let expires = window.localStorage.getItem(this.storageName); // 获取缓存
      this.clock(expires);
    },
    initClock() {
      let expires = new Date().getTime() + 60000;
      window.localStorage.setItem(this.storageName, expires); // 设置缓存
      this.clock(expires);
    },
    clock(expires) {
      let step;
      let nowtime = new Date().getTime();
      if (nowtime > expires) return;
      step = Math.round((expires - nowtime) / 1000);
      this.status.disable = true;
      this.codeText = '获取验证码(' + step + 's)'
      this.timer = setInterval(() => {
        step--;
        if (step) {
          this.codeText = '获取验证码(' + step + 's)'
        } else {
          clearInterval(this.timer)
          this.codeText = '获取验证码'
          this.status.disable = false
        }
      }, 1000);
    }
  }
}
</script>

<style scoped>
.yc-captcha {
  display: inline-block;
  padding: .1rem .2rem;
  border-radius: .1rem;
  background-color: #0c75f5;
  cursor: pointer;
  color: #fff;
}
.yc-captcha[disable]{
  background-color: #ccc;
}
</style>
