import confirm from './index.vue'
export default {
  install: function (Vue, options) {
    var instance
    Vue.prototype.$confirm = function (opts, fn, fn2) {
      if (instance) {
        instance.$el.remove()
      }
      var Confirm = Vue.extend(confirm)
      instance = new Confirm({
        el: document.createElement('div')
      })
      opts = Object.assign({}, opts, options)
      for (var key in opts) {
        instance[key] = opts[key]
      }
      typeof fn === 'function' && instance.$on('submit', fn)
      typeof fn2 === 'function' && instance.$on('cancel', fn2)
      document.body.appendChild(instance.$el)
      instance.open()
      return instance
    }
  }
}
