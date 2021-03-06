const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
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
            },
            {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: [
                {
                    loader: 'svg-url-loader',
                    options: {
                    limit: 10000,
                    },
                },
                ],
            },
            {
            test: /\.(ttf)$/,
            type: 'asset/resource',
            },
            {
              test: /\.mp4$/,
              use: 'file-loader',
            }
        ]
    }
};