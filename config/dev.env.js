// var merge = require('webpack-merge')
// var prodEnv = require('./prod.env')

module.exports = {
  NODE_ENV: '"development"',
  WEBPACK_CHUNKS: { // HtmlWebpackPlugin 自定义的变量
    home: '',
    cdn: '/',
    token: '',
    ajax_url: '',
    download: '',
    act_id: ''
  }
}
