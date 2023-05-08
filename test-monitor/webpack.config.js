const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    context:process.cwd(),//上下文当前目录
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'monitor.js'
    },
    devServer:{
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject:'head'
        }),
    ]
}