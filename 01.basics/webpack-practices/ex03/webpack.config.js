const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve('src/index.js'), // 엔트리 파일 목록
    output: {
        path: path.resolve('public'), // 번들 파일 폴더
        filename: 'bundle.js' //  '[name].bundle.js' 번들 파일 이름 규칙
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