var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        './src/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/static/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "eval-source-map",

    resolve: {
        extensions: ['', '.js', '.jsx', '.json']

    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/},
            {test: /\.js$/, loader: "source-map-loader"}

        ],

        loaders: [
            {test: /\.jsx?$/, loader: "babel"},
            {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.svg\?fill=/, loaders: ['file-loader', 'svg-fill?selector=path,circle']}
        ]
    },

    devServer: {
        // hotOnly: true,
        contentBase: 'public/',
        host: '0.0.0.0',
        port: '3000'
    }
};