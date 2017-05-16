// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var config = require('./dev.webpack.config')
var proxy = require('http-proxy-middleware')
var fs = require('fs')
var path = require('path')

// 创建一个express实例
var app = express()

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

// 注册dev中间件
app.use(devMiddleware);

//mock数据
// var mockDir = path.resolve(__dirname, '../mock');
// fs.readdirSync(mockDir).forEach(function (file) {
//     var mock = require(path.resolve(mockDir, file));
//     app.use(mock.api, mock.response);
// });

//hot reload
app.use(require("webpack-hot-middleware")(compiler));

//请求代理
//用于请求后端接口地址
app.use(proxy('/exam', {
    target: {
        host: 'www.17zuoye.com',
        protocol: 'http:',
        port: 80
    },
    logLevel: 'debug'
}));

app.use(proxy('/service', {
    target: {
        host: '10.0.1.108',
        protocol: 'http:',
        port: 5234
    },
    logLevel: 'debug'
}));

// 监听 8002端口，开启服务器
app.listen(8002, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8002')
})