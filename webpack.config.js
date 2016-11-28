module.exports = {
    entry: [
        // 'react-hot-loader/patch',
        'webpack-dev-server/client?http://0.0.0.0:3000',
        './src/index'
    ],

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {test: /\.js$/, loader: "source-map-loader"},
            {test: /\.tsx$/, loader: 'tslint-loader'}
        ],

        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    },
    tslint: {
        // tslint does not interrupt the compilation by default
        // if you want any file with tslint errors to fail
        // set failOnHint to true
        failOnHint: true
    },
    devServer: {
        // hotOnly: true,
        contentBase: 'public/',
        host: '0.0.0.0',
        port: '3000'
    }
};