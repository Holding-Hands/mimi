module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'views': '@/views',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
      }
    }
  },

  devServer: {
    proxy: {
      assetsSubDirectory: 'static',
      assetsPublicPath: '/',
      '/api': {
        'target': 'http://39.97.33.178/api', //API服务器的地址
        //  bypass: function (req) {
        //   req.headers.referer = 'https://c.y.qq.com';
        //   req.headers.host = 'c.y.qq.com';
        // },
        "changeOrigin": true,//是否跨域，设置为true
        "pathRewrite": {
          '^/api': '/'
        }
      }
    },

    // "/zhang": {
    //   "target": 'http://106.54.54.237:8000/api/v1/recommend',
    //   // secure:false, //如果时https需要配置这个参数
    //   "changeOrigin": true,//是否跨域，设置为true
    //   "pathRewrite": {
    //     '^/zhang': '/'
    //   }
    // }
  }
}


// const path = require('path');//引入path模块
// function resolve(dir){
//   return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
// }
//
// module.exports = {
//   chainWebpack: (config) => {
//     config.resolve.alias
//         .set('@', resolve('./src'))
//         .set('components', resolve('./src/components'))
//     //set第一个参数：设置的别名，第二个参数：设置的路径
//   }
// }
