const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: path.resolve(__dirname, './repalce-loader.js'),
                    options: {
                        name: 'cccc'
                    }
                }
            }
        ]
    }
}