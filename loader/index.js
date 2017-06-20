import loader from './index.vue'
export default {
  install: function (Vue, options) {
    const Loader = Vue.extend(loader)
    let instance = new Loader({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
    Vue.prototype.$loader = {
      open (text) {
        instance.text = text || ''
        instance.open()
      },
      close () {
        instance.close()
      }
    }
  }
}
