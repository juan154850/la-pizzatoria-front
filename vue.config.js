const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: true,
    port: 8081,
    client: {
      webSocketURL: 'wss://10.88.0.4:8081/ws',
    },
  },
})
