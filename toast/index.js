import toast from './index.vue'
export default {
  install: function (Vue, options) {
    let timer = null
    const Toast = Vue.extend(toast)
    let instance = new Toast({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    Vue.prototype.$toast = {
      open (text) {
        instance.text = text || ''
        instance.open()
        clearTimeout(timer)
        timer = setTimeout(() => {
          instance.close()
        }, 2000)
      },
      close () {
        instance.close()
      }
    }
  }
}
