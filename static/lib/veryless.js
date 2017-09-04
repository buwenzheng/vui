/*
 * 设置rem，获取环境变量
 *
 *
 */
(function () {
    const env = {};
    var doc = document.documentElement;
    var baseWidth = 750;
    var baseFontSize = 100;

    var getSize = function () {
      var screenWidth = doc.clientWidth;
      doc.style.fontSize = screenWidth / baseWidth * baseFontSize + 'px';
    }

    getSize()

    window.onresize = function () {
      getSize();
    }

    var u = navigator.userAgent;

    env.baseWidth = baseWidth;
    env.baseFontSize = baseFontSize;
    env.isTrident = u.indexOf('Trident') > -1;  // IE内核  
    env.isPresto = u.indexOf('Presto') > -1;    // Opera内核  
    env.isWebKit = u.indexOf('AppleWebKit') > -1;  // 苹果、谷歌内核  
    env.isGecko = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1;  // 火狐内核
    env.isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 苹果
    env.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // 安卓
    // env.isWin = u.indexOf("Win") == 0; // window系统
    // env.isMac = u.indexOf("Mac") == 0; // mac系统
    // env.isXll = (u == "X11") || (u.indexOf("Linux") == 0);   // linux系统
    env.isYpp = /yupaopao/.test(u);
    env.isWeixin = !!u.match(/MicroMessenger/i);
    env.isQQ = !!u.match(/QQ/i);
    // env.isDev = process.env.NODE_ENV === 'development'
    env.pageHeight = doc.clientHeight;

    window.env = env;
})()
