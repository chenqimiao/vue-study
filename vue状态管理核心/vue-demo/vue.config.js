const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 代理方式解决跨域
  devServer: {
    proxy: {
      '/api' : {
        target: "https://www.baidu.com",
        changeOrigin: true
      }
    }
  }
})
