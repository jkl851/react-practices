const path = require('path');
const loader = require('sass-loader');

module.exports = (env) => {
    const entry = path.resolve(`src/${env.src}/index.js`);

    return {
    mode: 'development',
    entry: entry, // 엔트리 파일 목록
    output: {
        path: path.resolve('public'), // 번들 파일 폴더
        filename: 'bundle.js', //  '[name].bundle.js' 번들 파일 이름 규칙
        assetModuleFilename: 'assets/images/[hash][ext]'
    },
    module: {
        rules: [{
            test: /\.js$/i,
            exclude: /node_modules/, 
            loader: 'babel-loader',
            options: {
                configFile: path.resolve('config/babel.config.json')
            }
        }, {
            test: /\.(sa|sc|c)ss$/i, //   .(sa나 sc나 s)ss(공통) 로 끝나는($) 모든 파일
            use: [
                'style-loader',
                { loader: 'css-loader', options: { modules: true } }, 
                'sass-loader'
            ]
        }, {
            test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i, //jpe?g   e가 있어도 되고, 없어도 되는 정규표현식
            type: 'asset/resource'
        }]
    },
    devtool: 'eval-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 9999,
        //inline: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}};