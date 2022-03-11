const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // 當目前的環境是 'production' 要使用 npm run build 時會跑 '/my-project/'路徑，如果不是跑'/'路徑
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-hw6-gh-pages/' // 資料夾路徑，儲存庫名稱
    : '/'
}
