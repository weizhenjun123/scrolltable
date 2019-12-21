const proxy = require('http-proxy-middleware')
// 配置反向代理
module.exports = function(app){
    app.use(proxy(
        '/v1',
        {
          target: 'https://elm.cangdu.org',
          changeOrigin: true
        }
      ))
      // app.use(proxy(
      //   "/shop",{
      //     target:'http://localhost:5000',
      //     changeOrigin:true
      //   }
      // ))
}