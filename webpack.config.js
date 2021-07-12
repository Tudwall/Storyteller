const path = require('path');

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: "./dist",
    },
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
            }
        ]
    }
};