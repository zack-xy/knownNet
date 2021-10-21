module.exports = {
  devServer: {
    proxy: {
      // 代理服务器设置
      '/api': {
        target: 'http://localhost:3060', // 需要将目前的地址代理至target
        changeOrigin: true,
        pathRewrite: {
          ['^' + '/api']: '' // 将'/my_test_proxy' 重写为''
        }
      }
    }
  }
}

