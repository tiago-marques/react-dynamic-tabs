var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        hash: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Dynamic Tabs Dev',
            template: 'app/index.ejs', // Load a custom template 
            inject: 'body' // Inject all scripts into the body 
        })
    ],
    modulesDirectories: [
      'node_modules'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                loader: 'babel', // The module to load. "babel" is short for "babel-loader"
                exclude: /(node_modules|bower_components)/,
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            }
        ]
    }
};