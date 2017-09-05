import alert from '../packages/alert'
import loader from '../packages/loader'
import toast from '../packages/toast'
import confirm from '../packages/confirm'
import Captcha from '../packages/captcha';

export default {
  install: function (Vue, options) {
    Vue.use(alert)
    Vue.use(loader)
    Vue.use(toast)
    Vue.use(confirm)
    Vue.component(Captcha.name, Captcha)
  },
  Captcha
}
/*
* example:
* this.$alert({title: '', icon: 2, text: [''], explain: [''], btn: '', hasClose: false}, function () {})
* this.$loader.open('text'); this.$loader.close()
* this.$toast.open('text'); this.$toast.close()
*/
