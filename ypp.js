export default {
  install: function (Vue, options) {
    Vue.prototype.$YPP = {}

    var doc = document.documentElement
    var baseWidth = 750
    var baseFontSize = 100

    var setupWebViewJavascriptBridge = function (callback) {
      if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge)
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback)
      }
      window.WVJBCallbacks = [callback]
      var WVJBIframe = document.createElement('iframe')
      WVJBIframe.style.display = 'none'
      WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
      doc.appendChild(WVJBIframe)
      setTimeout(function () {
        doc.removeChild(WVJBIframe)
      }, 0)
    }

    var getSize = function () {
      var screenWidth = doc.clientWidth
      doc.style.fontSize = screenWidth / baseWidth * baseFontSize + 'px'
    }

    getSize()

    window.onresize = function () {
      getSize()
    }

    if (process.env.NODE_ENV === 'development') {
      Vue.prototype.$YPP = {
        cdn: '/',
        token: '06b1a85dd33780d0e29fef00c9fee9cd',
        share: '',
        ajax_url: '/landingpage/count',
        home: '',
        download: 'http://www.163.com',
        act_id: 'a8b19e0c8a2fff7cbb31e486fec05f90'
      }
    } else {
      Vue.prototype.$YPP = {
        cdn: window.YPP.cnd,
        token: window.YPP.token,
        share: window.YPP.share,
        ajax_url: window.YPP.ajax_url,
        home: window.YPP.home,
        download: window.YPP.download,
        act_id: window.YPP.act_id
      }
    }

    /*
    * callApp v2
    * 参数 opt = {method: //方法名 string, data: //数据 object, type: 'call' //h5调取app接口 or 'reg' //app调取h5接口]}
    * 参数 callback //type='call' h5调取app接口成功的回调  type='reg' app接口调取h5的方法 方法名为 opt.method + 'Callback' function
    * 示例：
    * function getTokenCallback (res) {//code} function setTokenCallback (data) {//code}
    * window.YPP.callApp({method: 'getToken', data: {xxx:xxx}, type: 'call'}, getTokenCallback)
    * window.YPP.callApp({method: 'setToken', type: 'reg'}, setTokenCallback)
    */
    Vue.prototype.$YPP.callApp = function (opt, callback) {
      if (window.client) {
        if (opt.type === 'call') {
          window.client[opt.method] && window.client[opt.method](JSON.stringify(opt.data))
        }
        var callbackName = opt.method + 'Callback'
        if (!window[callbackName] && typeof callback === 'function') {
          window[callbackName] = callback
        }
      } else {
        setupWebViewJavascriptBridge(function (bridge) {
          if (opt.type === 'call') {
            bridge.callHandler(opt.method, opt.data, function (response) {
              typeof callback === 'function' && callback(response)
            })
          }
          if (opt.type === 'reg') {
            bridge.registerHandler(opt.method, function (data, responseCallback) {
              typeof callback === 'function' && callback(data)
              responseCallback('ok')
            })
          }
        })
      }
    }
    var u = navigator.userAgent

    Vue.prototype.$YPP.baseWidth = baseWidth
    Vue.prototype.$YPP.baseFontSize = baseFontSize

    Vue.prototype.$YPP.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    Vue.prototype.$YPP.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
    Vue.prototype.$YPP.isWeixin = !!u.match(/MicroMessenger/i)
    Vue.prototype.$YPP.pageHeight = doc.clientHeight
  }
}
