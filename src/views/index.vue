<template>
  <div class="page-index">
    <yc-captcha :phone="form.phone" :state="status.captchaState" @error="handlerError"  @send="handlerSend"></yc-captcha>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {
      form: {
        phone: '12345628853'
      },
      status: {
        captchaState: 0
      }
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    handlerError() {
      this.$alert({text: ['error']});
    },
    handlerSend() {
      // 模拟发送成功
      setTimeout(() => {
        this.status.captchaState = 1;
      }, 100);
    }
  }
}
</script>

<style lang="scss">
</style>
