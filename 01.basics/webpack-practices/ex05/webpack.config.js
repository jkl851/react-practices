const path = require('path');
const loader = require('sass-loader');
module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'), // 엔트리 파일 목록
    output: {
        path: path.resolve('public'), // 번들 파일 폴더
        filename: 'bundle.js' //  '[name].bundle.js' 번들 파일 이름 규칙
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/i, //   .(sa나 sc나 s)ss(공통) 로 끝나는($) 모든 파일
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    devServer: {
        //contentBase: path.resolve('public'),
        host: '0.0.0.0',
        port: 9999,
        //inline: true,
        liveReload: true,
        hot: false,
        compress: true
    }
}